import { useState, useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { PRODUCTS, Product } from "@/lib/data";
import { searchProducts } from "@/lib/search";

/**
 * Custom hook to manage the state and URL syncing logic for product filtering,
 * debounced search input, interleaved category sorting, and infinite pagination.
 */
export function useProductFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const categoryQuery = searchParams.get("category");
  const searchQuery = searchParams.get("search");
  const mostUsedQuery = searchParams.get("mostUsed");
  const limitedQuery = searchParams.get("limited");

  // Derive filter state directly from URL params
  const active = categoryQuery ?? "all";
  const showMostUsed = mostUsedQuery === "true";
  const showLimited = limitedQuery === "true";

  // searchVal stays as local state so search input updates instantly while
  // URL updates are debounced by 300 ms.
  const [searchVal, setSearchVal] = useState(searchQuery ?? "");

  // Sync searchVal when URL param changes (e.g. browser navigation).
  const [prevSearchQuery, setPrevSearchQuery] = useState(searchQuery);
  if (searchQuery !== prevSearchQuery) {
    setPrevSearchQuery(searchQuery);
    setSearchVal(searchQuery ?? "");
  }

  // Debounced URL updates for searchVal
  const handleSearch = useDebouncedCallback((term: string) => {
    const currentSearch = searchParams.get("search") || "";
    if (term !== currentSearch) {
      const params = new URLSearchParams(searchParams.toString());
      if (term) {
        params.set("search", term);
      } else {
        params.delete("search");
      }
      router.push(`/products?${params.toString()}`, { scroll: false });
    }
  }, 300);

  const handleCategoryChange = (categoryId: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (categoryId === "all") {
      params.delete("category");
    } else {
      params.set("category", categoryId);
    }
    router.push(`/products?${params.toString()}`, { scroll: false });
  };

  const handleMostUsedToggle = () => {
    const nextMostUsed = !showMostUsed;
    const params = new URLSearchParams(searchParams.toString());
    if (nextMostUsed) {
      params.set("mostUsed", "true");
    } else {
      params.delete("mostUsed");
    }
    router.push(`/products?${params.toString()}`, { scroll: false });
  };

  const handleLimitedToggle = () => {
    const next = !showLimited;
    const params = new URLSearchParams(searchParams.toString());
    if (next) {
      params.set("limited", "true");
    } else {
      params.delete("limited");
    }
    router.push(`/products?${params.toString()}`, { scroll: false });
  };

  // Filter products based on active filters & search query
  const filtered = useMemo(() => {
    const searched = searchProducts(PRODUCTS, searchVal);
    return searched.filter((product) => {
      const matchesCategory = active === "all" || product.category === active;
      const matchesMostUsed = !showMostUsed || product.mostUsed === true;
      const matchesLimited = !showLimited || product.stockStatus === "limited";
      return matchesCategory && matchesMostUsed && matchesLimited;
    });
  }, [active, searchVal, showMostUsed, showLimited]);

  // Interleave products across categories to avoid same-category clustering on All
  const displayList = useMemo(() => {
    if (active !== "all") return filtered;
    const groups: Record<string, Product[]> = {};
    filtered.forEach((p) => {
      (groups[p.category] ??= []).push(p);
    });
    const cats = Object.keys(groups);
    const interleaved: Product[] = [];
    const maxLen = Math.max(0, ...cats.map((c) => groups[c].length));
    for (let i = 0; i < maxLen; i++) {
      cats.forEach((cat) => {
        if (i < groups[cat].length) interleaved.push(groups[cat][i]);
      });
    }
    return interleaved;
  }, [filtered, active]);

  const [visibleCount, setVisibleCount] = useState(12);
  const [loadingMore, setLoadingMore] = useState(false);

  // Reset pagination whenever the active filter set changes
  const filterFingerprint = `${active}|${searchVal}|${showMostUsed}|${showLimited}`;
  const [prevFingerprint, setPrevFingerprint] = useState(filterFingerprint);
  if (filterFingerprint !== prevFingerprint) {
    setPrevFingerprint(filterFingerprint);
    setVisibleCount(12);
    setLoadingMore(false);
  }

  const loadMore = () => {
    if (visibleCount >= displayList.length || loadingMore) return;
    setLoadingMore(true);
    // Simulate database fetch delay
    setTimeout(() => {
      setVisibleCount((prev) => Math.min(prev + 12, displayList.length));
      setLoadingMore(false);
    }, 100);
  };

  const clearSearch = () => {
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
