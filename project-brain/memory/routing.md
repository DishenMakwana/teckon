# Routing Memory

Source: extracted from `.agents/` — mirrors real project state.

## System
Next.js App Router — file-system routing under `src/app/`.

## Route Structure
```
src/app/
├── layout.tsx          # Root layout (Preloader, metadata, fonts)
├── page.tsx            # Home page
├── not-found.tsx       # 404 (minimalist Stripe/Vercel style)
├── actions/            # Server Actions
├── products/
│   ├── page.tsx        # Product catalog (renders ProductsClient)
│   └── [slug]/
│       └── page.tsx    # Product detail (B2B panel, bento specs, gear SVG)
├── blog/
│   ├── page.tsx        # Blog listing (renders BlogList)
│   └── [slug]/
│       └── page.tsx    # Blog article (ScrollProgressBar, sticky sidebar)
├── about/
│   └── page.tsx        # About / founder cards
├── contact/
│   └── page.tsx        # Contact (renders ContactClient)
├── privacy-policy/
│   └── page.tsx        # Privacy Policy (renders PrivacyPolicyClient)
└── terms/
    └── page.tsx        # Terms (renders TermsClient)
```

## URL Parameter Sync
Filters sync with URL queries — preserves state on reload/back/forward.

```typescript
const searchParams = useSearchParams();
const pathname = usePathname();
const { replace } = useRouter();

function handleFilterChange(key: string, value: string) {
  const params = new URLSearchParams(searchParams);
  if (value) { params.set(key, value); } else { params.delete(key); }
  replace(`${pathname}?${params.toString()}`);
}
```

## Anchor Navigation
All major section wrappers have `id` attributes across all 10 pages.
Example: `#diagnostics` links to DiagnosticsBench section.

## Suspense
`<Suspense>` wrappers required for components using `useSearchParams()` to avoid SSR build errors.

## Metadata Pattern (static pages)
```typescript
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Page Title | Teckon Quality Spares',
  description: 'SEO optimized description with keywords.',
};
```
