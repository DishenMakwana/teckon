# Frontend Memory

Source: extracted from `.agents/` — mirrors real project state.

## Tech Stack
- Next.js App Router (RSC default)
- TypeScript
- Tailwind CSS (`tailwind.config.ts`, `src/app/globals.css`)
- Framer Motion (animations)
- Lucide React (icons)
- Swiper (carousel)
- Font: Outfit

## Component Locations
- **All interactive/client components** → `src/components/<feature>/` — NEVER inside `src/app/`
- `src/app/` = routing files ONLY (`page.tsx`, `layout.tsx`, `not-found.tsx`, etc.)
- Import via `@/components/` alias

## Key Components
| Component | Path | Purpose |
|-----------|------|---------|
| `Preloader.tsx` | `src/components/layout/` | Dark mesh bg, per-letter TECKON reveal, orbital loader |
| `Navbar.tsx` | `src/components/layout/` | 720px dual-col mega-menu + mobile drawer |
| `ProductsClient.tsx` | `src/components/products/` | Catalog, filters, pagination, IntersectionObserver |
| `ProductB2BPanel.tsx` | `src/components/products/` | Fitment checker, delivery estimator, RFQ form |
| `ProductImageViewer.tsx` | `src/components/products/` | Lightbox, zoom, pan via Framer Motion |
| `BlogList.tsx` | `src/components/blog/` | Search + dropdown filter, bento hero layout |
| `ScrollProgressBar.tsx` | `src/components/ui/` | Blog article reading progress bar |
| `DiagnosticsBench.tsx` | `src/components/home/` | SVG cylinder sim, RAF animation loop, telemetry |
| `IndiaMapChart.tsx` | `src/components/home/` | Interactive SVG India map, state details panel |
| `GlobalPresence.tsx` | `src/components/home/` | Two-col grid, states list + map |
| `ProductsCarousel.tsx` | `src/components/home/` | Swiper, 4 slides desktop, 9 category cards |
| `PrivacyPolicyClient.tsx` | `src/components/privacy-policy/` | Sticky sidebar, keyword search, print |
| `TermsClient.tsx` | `src/components/terms/` | Sticky sidebar, TL;DR panel, copy-link |
| `ContactClient.tsx` | `src/components/contact/` | Form left, Map+Hours right, IST business hours |

## Animation Patterns
- Card entry: `hidden → visible → exit` with spring (`stiffness: 380, damping: 35, mass: 0.8`)
- Hover: `whileHover` + `transition-shadow` (not CSS `hover:` — avoids animation engine conflict)
- Filter transitions: directional organic spring slide-up + fade (no index-based stagger)
- Use `as const` on `type: "spring"` to satisfy TS compilation
- `AnimatePresence` on filter result lists

## Styling Conventions
- Mobile-first Tailwind
- Container: `container mx-auto px-4 md:px-8`
- Grids: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`
- Glassmorphic dropdowns: `bg-white/95 backdrop-blur-lg border border-gray-100/80 shadow-2xl p-1.5`
- Card images: `object-contain` + padding + `bg-[#bebcbd]` (studio grey match)
- Image heights: `h-40` (160px), padding `p-4`
- Card title: `min-h-[56px] line-clamp-2`
- Card desc: `min-h-[40px] line-clamp-2`
- Use `border-gray-200` not `border-gray-150` (invalid Tailwind class)

## Image Assets
- Products: `public/images/products/[slug].webp` (38 products)
- Blogs: `public/images/blog/*.webp` (15 posts, 1024x512 2:1 ratio)
- Banners: `public/images/*.webp` (7 pages, 1376x275 5:1 ratio)
- Logo: `public/teckon.png` (512x512 PNG), `public/teckon.ico`, `src/app/favicon.ico`

## Print Styles
- `@media print` in `globals.css` hides layout shells, sidebars, hero headers
- Direct `window.print()` (no blank window)
