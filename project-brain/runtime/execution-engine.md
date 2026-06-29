# Execution Engine

Single responsibility: generate and apply implementation changes.
No review occurs during execution.

---

## Rules

- Modify only the files identified in the plan
- Respect project standards from `memory/patterns.md` at all times
- Avoid unrelated refactoring — scope changes to the task only
- Preserve existing architecture — no new abstractions beyond task requirements
- No comments unless the WHY is non-obvious (hidden constraint, subtle invariant)
- No multi-paragraph docstrings

---

## This Project's Execution Rules

Derived from `memory/patterns.md` and `memory/frontend.md`:

### Component Location

- Client/interactive components → `src/components/<feature>/` only
- `src/app/` folders → routing files only (`page.tsx`, `layout.tsx`, etc.)
- Import via `@/components/` alias

### Code Style

- Prettier: `semi: true`, `trailingComma: "es5"`, `tabWidth: 2`, `printWidth: 80`
- ESLint: `eslint-config-next/core-web-vitals` + TypeScript strict
- No `<img>` — use `next/image`
- No `<a>` for internal links — use `next/link`
- No `any` type unless absolutely necessary
- Add `as const` to `type: "spring"` in Framer Motion variants

### Data

- All product/blog/review data lives in `src/lib/data.ts` — never hardcode in components
- Import: `import { products, blogs, reviews } from '@/lib/data'`

### Animations

- Card hover: use `whileHover` not CSS `hover:` (avoids animation engine conflict)
- Card entry: `hidden → visible → exit` spring variants
- Add `as const` on spring type to satisfy TypeScript

### URL Params

- Filters sync to URL via `useSearchParams` + `useRouter`
- Wrap `useSearchParams` consumers in `<Suspense>` to avoid SSR errors

---

## Execution Steps

1. Apply changes file by file in plan order
2. After each file, verify no unintended side effects in adjacent files
3. Do not run lint/build during execution — that is Static Validation's job
4. Write a brief change summary to `project-brain/cache/recent-files.md`

---

## Constraints

- Zero tolerance for nested `<a>` / `<Link>` tags
- Never skip TypeScript types (`any` only as last resort)
- Never break existing component props without updating all callers
- Never modify `project-brain/graph/` files directly
