import { Product } from "@/types/product";
import {
  TermMatchResult,
  FieldWeights,
  ScoredProductItem,
  ProductFields,
} from "@/types/product-search";

// Helper to compute Levenshtein distance between two strings
function getLevenshteinDistance(a: string, b: string): number {
  const matrix: number[][] = [];

  for (let i: number = 0; i <= a.length; i++) {
    matrix[i] = [i];
  }
  for (let j: number = 0; j <= b.length; j++) {
    matrix[0][j] = j;
  }

  for (let i: number = 1; i <= a.length; i++) {
    for (let j: number = 1; j <= b.length; j++) {
      const matrixI = matrix[i];
      const matrixPrev = matrix[i - 1];
      if (matrixI && matrixPrev) {
        if (a[i - 1] === b[j - 1]) {
          matrixI[j] = matrixPrev[j - 1] ?? 0;
        } else {
          matrixI[j] = Math.min(
            (matrixPrev[j] ?? 0) + 1, // deletion
            (matrixI[j - 1] ?? 0) + 1, // insertion
            (matrixPrev[j - 1] ?? 0) + 1 // substitution
          );
        }
      }
    }
  }

  const lastRow = matrix[a.length];
  return lastRow ? (lastRow[b.length] ?? 0) : 0;
}

// Tokenize text: convert to lowercase and split by non-alphanumeric chars
function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .split(/[^a-z0-9]/)
    .filter(Boolean);
}

// Score a single query term against a target word
function scoreTermAgainstWord(term: string, word: string): TermMatchResult {
  if (term === word) {
    return { score: 1.0, matched: true };
  }
  if (word.startsWith(term)) {
    return { score: 0.8 * (term.length / word.length), matched: true };
  }
  if (word.includes(term)) {
    return { score: 0.6 * (term.length / word.length), matched: true };
  }

  // Fuzzy matching for terms of length >= 3
  if (term.length >= 3) {
    const distance: number = getLevenshteinDistance(term, word);
    // Threshold: max 1 typo for length 3, max 2 typos for length 4+
    const maxAllowedDistance: number = term.length === 3 ? 1 : 2;
    if (distance <= maxAllowedDistance) {
      const sim: number = 1 - distance / Math.max(term.length, word.length);
      return { score: 0.4 * sim, matched: true };
    }
  }

  return { score: 0, matched: false };
}

const FIELD_WEIGHTS: FieldWeights = {
  name: 10,
  model: 8,
  ref: 8,
  crossReferences: 6,
  categoryLabel: 5,
  category: 5,
  specs: 3,
  description: 1,
};

/**
 * Searches and ranks products based on relevance to query.
 * Prioritizes products matching BOTH/all query terms.
 */
export function searchProducts(products: Product[], query: string): Product[] {
  const cleanQuery: string = query.trim();
  if (!cleanQuery) return products;

  const queryTerms: string[] = tokenize(cleanQuery);
  if (queryTerms.length === 0) return products;

  const scoredProducts: ScoredProductItem[] = products
    .map((product: Product): ScoredProductItem => {
      const fields: ProductFields = {
        name: tokenize(product.name),
        model: tokenize(product.model),
        ref: tokenize(product.ref),
        crossReferences: (product.crossReferences || []).flatMap(tokenize),
        categoryLabel: tokenize(product.categoryLabel || ""),
        category: tokenize(product.category),
        specs: Object.entries(product.specs || {}).flatMap(
          ([k, v]: [string, string]): string[] => [
            ...tokenize(k),
            ...tokenize(v || ""),
          ]
        ),
        description: tokenize(product.description || ""),
      };

      let totalScore: number = 0;
      let matchedTermsCount: number = 0;

      for (const term of queryTerms) {
        let bestTermScoreForProduct: number = 0;
        let termMatched: boolean = false;

        const entries = Object.entries(fields) as [
          keyof ProductFields,
          string[],
        ][];
        for (const [fieldName, words] of entries) {
          const weight: number = FIELD_WEIGHTS[fieldName] || 1;
          for (const word of words) {
            const { score, matched } = scoreTermAgainstWord(term, word);
            if (matched) {
              termMatched = true;
              const weightedScore: number = score * weight;
              if (weightedScore > bestTermScoreForProduct) {
                bestTermScoreForProduct = weightedScore;
              }
            }
          }
        }

        if (termMatched) {
          matchedTermsCount++;
          totalScore += bestTermScoreForProduct;
        }
      }

      return {
        product,
        matchedTermsCount,
        totalScore,
      };
    })
    .filter((item: ScoredProductItem): boolean => item.matchedTermsCount > 0)
    .sort((a: ScoredProductItem, b: ScoredProductItem): number => {
      if (b.matchedTermsCount !== a.matchedTermsCount) {
        return b.matchedTermsCount - a.matchedTermsCount;
      }
      return b.totalScore - a.totalScore;
    });

  return scoredProducts.map((item: ScoredProductItem): Product => item.product);
}
