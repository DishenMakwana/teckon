# TypeScript Standards

Engineering rules for TypeScript. All agents and developers must strictly follow these type safety guidelines.

## 1. Strict Typing and Return Types
- **Variables:** Every variable must have a strict, explicit type annotation where type inference is not completely deterministic or when defining objects, state variables, or complex expressions.
- **Function Arguments:** All function arguments (including event handlers, callbacks, and helpers) must have explicit type annotations.
- **Return Types:** Every function (exported or internal, sync or async) must have an explicit return type annotation.
  - React Components must return `React.JSX.Element` (or `Promise<React.JSX.Element>` for server components).
  - Regular functions must return the specific type or `void`.
- **No Implicit/Explicit `any`:** `any` must never be used. Use `unknown` or specific interfaces/types for generic schemas or JSON objects (e.g. `Record<string, unknown>`).

## 2. Codebase Cleanliness
- **Unused Code:** No unused variables, unused functions, or unused imports are allowed.
- **Compiler Checks:** Always run with unused local/parameter checks enabled during validation:
  ```bash
  npx tsc --noEmit --noUnusedLocals --noUnusedParameters
  ```

## 3. Mandatory Quality Gate
- After any code modification, always verify compliance by running:
  ```bash
  npx tsc --noEmit --noUnusedLocals --noUnusedParameters && npm run lint && npm run format
  ```

## 4. Type and Interface Placement — `src/types/`

### Rule
**Every `interface` and `type` alias defined in a `.ts` or `.tsx` file must live in a dedicated file inside `src/types/`.** Inline type definitions inside component files, page files, hooks, lib utilities, or server actions are not allowed.

### Exceptions
**None.** Every `interface` and `type` — including those used inside a single function body — must be extracted to the appropriate `src/types/<domain>.ts` file. There are no inline exceptions.

### File Naming
- Use **kebab-case** for the filename: `src/types/<domain>.ts`
- Name the file after the **logical domain or feature** it covers, not after the component or function that uses it.
- One file per domain — do not create one file per component.

### Domain → File Mapping

| Domain / Feature | File |
|---|---|
| Core product entity | `src/types/product.ts` |
| Blog post entity | `src/types/blog.ts` |
| Company contact info | `src/types/company-info.ts` |
| Product search & scoring | `src/types/product-search.ts` |
| Product filter hook | `src/types/product-filters.ts` |
| Product component props | `src/types/product-components.ts` |
| Contact / inquiry form | `src/types/form-submission.ts` |
| Careers page | `src/types/careers.ts` |
| Industry section | `src/types/industry.ts` |
| Quality process page | `src/types/quality.ts` |
| Homepage components | `src/types/home.ts` |
| Navbar navigation | `src/types/navbar.ts` |
| Legal pages (Privacy / Terms) | `src/types/legal.ts` |
| Shared UI component props | `src/types/ui.ts` |
| Next.js page-level props | `src/types/page.ts` |

> When adding a new domain, create a new file following the same kebab-case pattern. Do not pile unrelated types into an existing file.

### `interface` vs `type`
- Use **`interface`** for object shapes that may be extended or implemented (component props, data entities, API response shapes).
- Use **`type`** for unions, primitives, function signatures, and mapped/conditional types.

### Export Rules
- Use **named exports only** — no default exports from `src/types/` files.
- Import with the `@/types/<filename>` alias path (e.g. `import { Product } from "@/types/product"`).

### Checklist for Any New `.ts` / `.tsx` File
Before committing, verify:
- [ ] No `interface` or `type` declarations exist at the module level inside the file.
- [ ] All types are imported from the appropriate `src/types/<domain>.ts` file.
- [ ] The `src/types/<domain>.ts` file exports named exports only.
- [ ] `npm run lint` and `npm run build` pass with zero errors.
