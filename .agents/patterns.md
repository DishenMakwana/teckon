# Coding & Design Patterns

This document captures recurring patterns in this codebase. Agents and developers must follow these patterns to keep the project consistent.

---

## 1. Client vs. Server Components
- **Rule:** By default, all pages and components in `src/app/` are React Server Components (RSC) to maximize performance and SEO.
- **Page Folder Structure Rule:** Page folders under `src/app/` must contain *only* Next.js routing and layout files (e.g. `page.tsx`, `layout.tsx`, `not-found.tsx`, `loading.tsx`, `error.tsx`). 
- **Component File Location Rule:** All interactive, client, or custom components (e.g., `ProductsClient.tsx`, `TermsClient.tsx`, `PrivacyPolicyClient.tsx`) must be placed in a separate feature subfolder inside the `src/components/` directory (e.g. `src/components/products/`, `src/components/privacy-policy/`), never directly inside `src/app/`. Import them using the `@/components/` absolute path alias.
- Keep Client Components as small and nested as possible to maximize server rendering.

---

## 2. Static Data Management
- **Rule:** Do not hardcode product listings, reviews, or blogs directly inside pages.
- **Pattern:** Import them from `src/lib/data.ts`.
  ```typescript
  import { products, blogs, reviews } from '@/lib/data';
  ```
- If writing code that filters or displays these collections, do so programmatically.

---

## 3. URL Parameter Synchronization
- **Rule:** Product filters must sync with URL queries to allow sharing and back/forward navigation.
- **Pattern:** Use a combination of `useSearchParams`, `usePathname`, and `useRouter` to update the URL when a filter changes.
  ```typescript
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleFilterChange(key: string, value: string) {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    replace(`${pathname}?${params.toString()}`);
  }
  ```

---

## 4. UI Layout & Responsive Design
- **Rule:** Design mobile-first using Tailwind CSS.
- **Pattern:**
  - Standard container: `container mx-auto px-4 md:px-8`
  - Responsive grids: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`
  - Subtle hover transitions: `transition-all duration-300 hover:shadow-lg`

---

## 5. Metadata and SEO
- **Rule:** Every route should have optimized page metadata.
- **Pattern:** For static pages, export a metadata object:
  ```typescript
  import { Metadata } from 'next';

  export const metadata: Metadata = {
    title: 'Page Title | BrandName',
    description: 'Optimize page meta description with keywords.',
  };
  ```

---

## 6. Prettier Formatting (MUST FOLLOW)

**Config:** [`.prettierrc`](file:///Users/dishen/Downloads/teckon/.prettierrc)

All code written to `src/**/*.{ts,tsx}` files **must** comply with these rules at write-time:

| Rule             | Value   | What it means                                              |
|------------------|---------|------------------------------------------------------------|
| `semi`           | `true`  | Always end statements with a semicolon.                    |
| `trailingComma`  | `"es5"` | Add trailing commas in objects, arrays, and function params where ES5 allows. |
| `tabWidth`       | `2`     | Indent with **2 spaces**, never tabs.                      |
| `printWidth`     | `80`    | Wrap lines at **80 characters**. Break JSX props, long strings, and ternaries before hitting this limit. |

### Key implications of `printWidth: 80`
- **JSX attributes:** If a JSX element has multiple props that exceed 80 chars on one line, break each prop onto its own line:
  ```tsx
  // ✅ Correct — each prop on its own line
  <div
    className="flex items-center gap-1.5 bg-amber-50 border border-amber-200/60 rounded-lg px-3 py-2"
    onClick={handleClick}
  >

  // ❌ Wrong — exceeds 80 chars on one line
  <div className="flex items-center gap-1.5 bg-amber-50 border border-amber-200/60 rounded-lg px-3 py-2" onClick={handleClick}>
  ```
- **String literals / template strings:** Break long strings before the 80-char mark.
- **Ternary expressions:** Multi-line ternaries are preferred when the single-line form would exceed 80 chars.
- **Import statements:** If a single import has many named exports, Prettier will wrap them across lines.

---

## 7. ESLint Rules

**Config:** [`eslint.config.mjs`](file:///Users/dishen/Downloads/teckon/eslint.config.mjs) (flat config format)

- Extends **`eslint-config-next/core-web-vitals`** and **`eslint-config-next/typescript`**.
- All rules from Next.js recommended + TypeScript strict are enforced.
- **Key rules to remember:**
  - No unused variables or imports.
  - React hooks rules (exhaustive deps, rules of hooks).
  - No `<img>` — use `next/image` (`<Image>`).
  - No `<a>` for internal links — use `next/link` (`<Link>`).
  - Properly escape entities in JSX (use `&amp;` not `&`, `{" "}` for spaces).
  - No `any` type unless absolutely necessary.

---

## 8. Husky Pre-Commit Pipeline

**Hook:** [`.husky/pre-commit`](file:///Users/dishen/Downloads/teckon/.husky/pre-commit)

Every `git commit` triggers this pipeline **before** the commit is accepted:

```
Step 1 → yarn run lint    (runs: eslint)
Step 2 → yarn run format  (runs: prettier --write "src/**/*.{ts,tsx}")
```

### What this means for agents writing code:
1. **Write ESLint-clean code on the first pass.** If `yarn run lint` fails, the commit is rejected.
2. **Follow Prettier rules when writing code.** Although `yarn run format` auto-fixes formatting, writing pre-formatted code avoids unnecessary diffs and reformatting noise during commit.
3. **Never skip or disable these hooks.** They are the project's quality gate.
4. **Test before committing** — if unsure, run `yarn run lint` and `yarn run format` manually before `git commit` to catch issues early.
