import type { Product } from "@/types/product";

/** Props for the ProductCard grid tile component. */
export interface ProductCardProps {
  product: Product;
  clickedSlug: string | null;
  setClickedSlug: (slug: string | null) => void;
}

/** Props for the full-screen image zoom viewer on the product detail page. */
export interface ProductImageViewerProps {
  src: string;
  alt: string;
  backgroundColor?: string;
}

/** The product data shape consumed by the B2B wholesale inquiry panel. */
export interface ProductB2BPanelProps {
  product: {
    slug: string;
    name: string;
    model: string;
    ref: string;
    category: string;
    specs: Record<string, string | undefined>;
    weight?: string;
    material?: string;
    isoCertified?: boolean;
    crossReferences?: string[];
    stockStatus?: string;
  };
}
