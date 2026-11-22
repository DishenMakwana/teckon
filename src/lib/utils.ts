import { ProductSpecsInput } from "@/types/product";
import { COMPANY } from "@/lib/data";

const CURRENT_RUNNING_YEAR: number = 2026;

/**
 * Calculates years of industry experience based on establishment year (COMPANY.founded = 2000)
 * and the current running year (defaults to 2026).
 *
 * @param currentYear Optional override for the running year, defaults to 2026.
 * @returns Number of years of experience (e.g. 26).
 */
export function getYearsOfExperience(
  currentYear: number = CURRENT_RUNNING_YEAR
): number {
  const year = currentYear || CURRENT_RUNNING_YEAR;
  return Math.max(0, year - COMPANY.founded);
}

/**
 * Returns formatted years of experience string with a suffix (e.g. "26+").
 *
 * @param suffix Optional suffix string, defaults to "+".
 * @returns Formatted string (e.g. "26+").
 */
export function getExperienceText(suffix: string = "+"): string {
  return `${getYearsOfExperience()}${suffix}`;
}

/**
 * Formats an ISO date string (YYYY-MM-DD) into a human-readable date
 * using the Indian locale (e.g. "15 March 2025").
 *
 * Returns an empty string for falsy input and the original string if
 * the date cannot be parsed.
 */
export function formatDate(dateStr: string): string {
  if (!dateStr) return "";
  const date: Date = new Date(dateStr);
  if (isNaN(date.getTime())) return dateStr;
  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}

/**
 * Builds the display-ready specification map shown on a product detail page.
 *
 * Merge rules (applied in order):
 *  1. All defined entries from `specs` are copied as-is.
 *  2. If `weight` is provided, "Physical Weight" is appended.
 *  3. If `material` is provided, any existing "Material" or "Base Material"
 *     key is removed and replaced with "Base Material" set to `material`.
 *     This prevents duplicate material rows in the spec grid.
 */
export function buildDisplaySpecs(
  specs: ProductSpecsInput,
  weight?: string,
  material?: string
): Record<string, string> {
  const result: Record<string, string> = {};

  // Step 1 — copy all defined spec values
  for (const [key, value] of Object.entries(specs)) {
    if (value) result[key] = value;
  }

  // Step 2 — append physical weight when available
  if (weight) {
    result["Physical Weight"] = weight;
  }

  // Step 3 — consolidate material entries to avoid duplication
  if (material) {
    for (const key of Object.keys(result)) {
      const lower: string = key.toLowerCase();
      if (lower === "material" || lower === "base material") {
        delete result[key];
      }
    }
    result["Base Material"] = material;
  }

  return result;
}
