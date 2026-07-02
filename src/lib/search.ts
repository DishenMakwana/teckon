import { Product } from "./data";

// Helper to compute Levenshtein distance between two strings
function getLevenshteinDistance(a: string, b: string): number {
  const matrix: number[][] = [];

  for (let i = 0; i <= a.length; i++) {
    matrix[i] = [i];
  }
  for (let j = 0; j <= b.length; j++) {
    matrix[0][j] = j;
  }

  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      if (a[i - 1] === b[j - 1]) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j] + 1, // deletion
          matrix[i][j - 1] + 1, // insertion
          matrix[i - 1][j - 1] + 1 // substitution
        );
      }
    }
  }

  return matrix[a.length][b.length];
}

// Tokenize text: convert to lowercase and split by non-alphanumeric chars
function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .split(/[^a-z0-9]/)
    .filter(Boolean);
}

interface TermMatchResult {
  score: number;
  matched: boolean;
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
    const distance = getLevenshteinDistance(term, word);
    // Threshold: max 1 typo for length 3, max 2 typos for length 4+
    const maxAllowedDistance = term.length === 3 ? 1 : 2;
    if (distance <= maxAllowedDistance) {
      const sim = 1 - distance / Math.max(term.length, word.length);
      return { score: 0.4 * sim, matched: true };
    }
  }

  return { score: 0, matched: false };
}

const FIELD_WEIGHTS = {
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
  const cleanQuery = query.trim();
  if (!cleanQuery) return products;

  const queryTerms = tokenize(cleanQuery);
  if (queryTerms.length === 0) return products;

  const scoredProducts = products
    .map((product) => {
      const fields = {
        name: tokenize(product.name),
        model: tokenize(product.model),
        ref: tokenize(product.ref),
        crossReferences: (product.crossReferences || []).flatMap(tokenize),
        categoryLabel: tokenize(product.categoryLabel || ""),
        category: tokenize(product.category),
        specs: Object.entries(product.specs || {}).flatMap(([k, v]) => [
          ...tokenize(k),
          ...tokenize(v || ""),
        ]),
        description: tokenize(product.description || ""),
      };

      let totalScore = 0;
      let matchedTermsCount = 0;

      for (const term of queryTerms) {
        let bestTermScoreForProduct = 0;
        let termMatched = false;

        for (const [fieldName, words] of Object.entries(fields)) {
          const weight =
            FIELD_WEIGHTS[fieldName as keyof typeof FIELD_WEIGHTS] || 1;
          for (const word of words) {
            const { score, matched } = scoreTermAgainstWord(term, word);
            if (matched) {
              termMatched = true;
              const weightedScore = score * weight;
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
    .filter((item) => item.matchedTermsCount > 0)
    .sort((a, b) => {
      if (b.matchedTermsCount !== a.matchedTermsCount) {
        return b.matchedTermsCount - a.matchedTermsCount;
      }
      return b.totalScore - a.totalScore;
    });

  return scoredProducts.map((item) => item.product);
}
