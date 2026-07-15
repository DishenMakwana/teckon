import { useState, useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { PRODUCTS } from "@/lib/data";
import { Product } from "@/types/product";
import { searchProducts } from "@/lib/search";
import { UseProductFiltersReturn } from "@/types/product-filters";

/**
 * Custom hook to manage the state and URL syncing logic for product filtering,
 * debounced search input, interleaved category sorting, and infinite pagination.
 */
export function useProductFilters(): UseProductFiltersReturn {
  const router: ReturnType<typeof useRouter> = useRouter();
  const searchParams: ReturnType<typeof useSearchParams> = useSearchParams();

  const categoryQuery: string | null = searchParams.get("category");
  const searchQuery: string | null = searchParams.get("search");
  const mostUsedQuery: string | null = searchParams.get("mostUsed");
  const limitedQuery: string | null = searchParams.get("limited");

  // Derive filter state directly from URL params
  const active: string = categoryQuery ?? "all";
  const showMostUsed: boolean = mostUsedQuery === "true";
  const showLimited: boolean = limitedQuery === "true";

  // searchVal stays as local state so search input updates instantly while
  // URL updates are debounced by 300 ms.
  const [searchVal, setSearchVal] = useState<string>(searchQuery ?? "");

  // Sync searchVal when URL param changes (e.g. browser navigation).
  const [prevSearchQuery, setPrevSearchQuery] = useState<string | null>(
    searchQuery
  );
  if (searchQuery !== prevSearchQuery) {
    setPrevSearchQuery(searchQuery);
    setSearchVal(searchQuery ?? "");
  }

  // Debounced URL updates for searchVal
  const handleSearch: (term: string) => void = useDebouncedCallback(
    (term: string): void => {
      const currentSearch: string = searchParams.get("search") || "";
      if (term !== currentSearch) {
        const params: URLSearchParams = new URLSearchParams(
          searchParams.toString()
        );
        if (term) {
          params.set("search", term);
        } else {
          params.delete("search");
        }
        router.push(`/products?${params.toString()}`, { scroll: false });
      }
    },
    300
  );

  const handleCategoryChange = (categoryId: string): void => {
    const params: URLSearchParams = new URLSearchParams(
      searchParams.toString()
    );
    if (categoryId === "all") {
      params.delete("category");
    } else {
      params.set("category", categoryId);
    }
    router.push(`/products?${params.toString()}`, { scroll: false });
  };

  const handleMostUsedToggle = (): void => {
    const nextMostUsed: boolean = !showMostUsed;
    const params: URLSearchParams = new URLSearchParams(
      searchParams.toString()
    );
    if (nextMostUsed) {
      params.set("mostUsed", "true");
    } else {
      params.delete("mostUsed");
    }
    router.push(`/products?${params.toString()}`, { scroll: false });
  };

  const handleLimitedToggle = (): void => {
    const next: boolean = !showLimited;
    const params: URLSearchParams = new URLSearchParams(
      searchParams.toString()
    );
    if (next) {
      params.set("limited", "true");
    } else {
      params.delete("limited");
    }
    router.push(`/products?${params.toString()}`, { scroll: false });
  };

  // Filter products based on active filters & search query
  const filtered: Product[] = useMemo((): Product[] => {
    const searched: Product[] = searchProducts(PRODUCTS, searchVal);
    return searched.filter((product: Product): boolean => {
      const matchesCategory: boolean =
        active === "all" || product.category === active;
      const matchesMostUsed: boolean =
        !showMostUsed || product.mostUsed === true;
      const matchesLimited: boolean =
        !showLimited || product.stockStatus === "limited";
      return matchesCategory && matchesMostUsed && matchesLimited;
    });
  }, [active, searchVal, showMostUsed, showLimited]);

  // Interleave products across categories to avoid same-category clustering on All
  const displayList: Product[] = useMemo((): Product[] => {
    if (active !== "all") return filtered;
    const groups: Record<string, Product[]> = {};
    filtered.forEach((p: Product): void => {
      (groups[p.category] ??= []).push(p);
    });
    const cats: string[] = Object.keys(groups);
    const interleaved: Product[] = [];
    const maxLen: number = Math.max(
      0,
      ...cats.map((c: string): number => (groups[c] ?? []).length)
    );
    for (let i: number = 0; i < maxLen; i++) {
      cats.forEach((cat: string): void => {
        const group = groups[cat];
        if (group && i < group.length) {
          const item = group[i];
          if (item) interleaved.push(item);
        }
      });
    }
    return interleaved;
  }, [filtered, active]);

  const [visibleCount, setVisibleCount] = useState<number>(12);
  const [loadingMore, setLoadingMore] = useState<boolean>(false);

  // Reset pagination whenever the active filter set changes
  const filterFingerprint: string = `${active}|${searchVal}|${showMostUsed}|${showLimited}`;
  const [prevFingerprint, setPrevFingerprint] =
    useState<string>(filterFingerprint);
  if (filterFingerprint !== prevFingerprint) {
    setPrevFingerprint(filterFingerprint);
    setVisibleCount(12);
    setLoadingMore(false);
  }

  const loadMore = (): void => {
    if (visibleCount >= displayList.length || loadingMore) return;
    setLoadingMore(true);
    // Simulate database fetch delay
    setTimeout((): void => {
      setVisibleCount((prev: number): number =>
        Math.min(prev + 12, displayList.length)
      );
      setLoadingMore(false);
    }, 100);
  };

  const clearSearch = (): void => {
    setSearchVal("");
    handleSearch("");
  };

  return {
    active,
    showMostUsed,
    showLimited,
    searchVal,
    setSearchVal,
    handleSearch,
    clearSearch,
    handleCategoryChange,
    handleMostUsedToggle,
    handleLimitedToggle,
    displayList,
    visibleCount,
    loadingMore,
    loadMore,
  };
}
