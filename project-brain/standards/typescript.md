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
