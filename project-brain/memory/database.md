# Database Memory

Source: extracted from `.agents/` — mirrors real project state.

## Data Layer
No external DB. All data in `src/lib/data.ts` — TypeScript objects imported directly.

```typescript
import { products, blogs, reviews } from '@/lib/data';
```

## Collections
| Collection | Count | Key Fields |
|-----------|-------|-----------|
| `products` | 38 items | `slug`, `name`, `model`, `ref`, `categoryLabel`, `image`, `specs`, `weight`, `material`, `mostUsed` |
| `blogs` | 15 items | `slug`, `title`, `image`, `category` |
| `reviews` | — | client testimonials |

## Image Paths
- Products: `/images/products/[slug].webp`
- Blogs: `/images/blog/*.webp`

## Category Labels (must match filter labels exactly)
- Harmonized across `data.ts`, `Navbar.tsx`, `Footer.tsx`, `ProductsCarousel.tsx`
- 9 categories total (1 product selected per category in carousel on mount)

## Special Fields
- `mostUsed: true` — marks popular/customer-choice products
- `categoryLabel` — must match listing filter labels exactly (enforced)
- `specs` — key-value object, values cast to string for TS compliance

## Constraints
- Never hardcode product/blog/review data inside components — always import from `data.ts`
- Filter/display programmatically
