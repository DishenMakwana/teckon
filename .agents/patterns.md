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
