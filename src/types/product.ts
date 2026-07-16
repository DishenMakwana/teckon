/**
 * Represents a hydraulic spare part in the Teckon catalog.
 */
export interface Product {
  slug: string;
  name: string;
  model: string;
  ref: string;
  category: string;
  categoryLabel: string;
  description: string;
  image: string;
  backgroundColor?: string;
  specs: Record<string, string>;
  weight?: string;
  material?: string;
  crossReferences?: string[];
  mostUsed?: boolean;
  stockStatus?: "limited" | "in-stock" | "out-of-stock";
}

export type ProductSpecsInput = Record<string, string | undefined>;
