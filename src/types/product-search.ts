import { Product } from "./product";

export interface TermMatchResult {
  score: number;
  matched: boolean;
}

export interface FieldWeights {
  name: number;
  model: number;
  ref: number;
  crossReferences: number;
  categoryLabel: number;
  category: number;
  specs: number;
  description: number;
}

export interface ScoredProductItem {
  product: Product;
  matchedTermsCount: number;
  totalScore: number;
}

export interface ProductFields {
  name: string[];
  model: string[];
  ref: string[];
  crossReferences: string[];
  categoryLabel: string[];
  category: string[];
  specs: string[];
  description: string[];
}
