/**
 * Formats an ISO date string (YYYY-MM-DD) into a human-readable date
 * using the Indian locale (e.g. "15 March 2025").
 *
 * Returns an empty string for falsy input and the original string if
 * the date cannot be parsed.
 */
export function formatDate(dateStr: string): string {
  if (!dateStr) return "";
  const date = new Date(dateStr);
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
  specs: Record<string, string | undefined>,
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
      const lower = key.toLowerCase();
      if (lower === "material" || lower === "base material") {
        delete result[key];
      }
    }
    result["Base Material"] = material;
  }

  return result;
}
