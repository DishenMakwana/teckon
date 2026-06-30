# Dependencies Memory

Source: extracted from `.agents/` — mirrors real project state.

## Core
| Package | Purpose |
|---------|---------|
| `next` | Framework (App Router, RSC, Server Actions) |
| `react` / `react-dom` | UI runtime |
| `typescript` | Type safety |

## Styling
| Package | Purpose |
|---------|---------|
| `tailwindcss` | Utility-first CSS (`tailwind.config.ts`) |
| `postcss` | Tailwind build pipeline |

## Animation
| Package | Purpose |
|---------|---------|
| `framer-motion` | All animations — cards, filters, preloader, lightbox |

## UI Components
| Package | Purpose |
|---------|---------|
| `lucide-react` | Icons throughout (Boxes, Cpu, Wrench, Phone, Info, etc.) |
| `swiper` | Homepage ProductsCarousel (9 categories, 4 slides desktop) |

## Utilities
| Package | Purpose |
|---------|---------|
| `use-debounce` | `useDebouncedCallback` for search inputs in ProductsClient + BlogList |

## Dev Tooling
| Package | Purpose |
|---------|---------|
| `eslint` + `eslint-config-next` | Linting (`core-web-vitals` + `typescript`) |
| `prettier` | Formatting (semi, trailingComma: es5, tabWidth: 2, printWidth: 80) |
| `husky` | Pre-commit hook: `yarn lint` → `yarn format` |

## Husky Note
Hook uses deprecated v9 syntax — will fail in v10. Lines to remove from `.husky/pre-commit`:
```
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"
```
Pre-commit hook kills on markdown/JSON files (OOM/timeout) — use `--no-verify` for doc-only commits.

## Font
- `Outfit` (Google Fonts via Next.js font optimization in `layout.tsx`)
