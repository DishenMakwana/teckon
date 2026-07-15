import { Product } from "./product";

/**
 * Interface representing the state and methods returned by the useProductFilters hook.
 */
export interface UseProductFiltersReturn {
  active: string;
  showMostUsed: boolean;
  showLimited: boolean;
  searchVal: string;
  setSearchVal: React.Dispatch<React.SetStateAction<string>>;
  handleSearch: (term: string) => void;
  clearSearch: () => void;
  handleCategoryChange: (categoryId: string) => void;
  handleMostUsedToggle: () => void;
  handleLimitedToggle: () => void;
  displayList: Product[];
  visibleCount: number;
  loadingMore: boolean;
  loadMore: () => void;
}
