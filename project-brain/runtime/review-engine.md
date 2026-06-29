# Review Engine

Single responsibility: validate and score implementation after execution.
Runs in two sequential phases: Static Validation, then AI Review + Scoring.

---

## Phase 1 — Static Validation

Run before consuming AI review tokens. If any step fails, return to Execution immediately.

```text
Step 1: yarn run lint     (ESLint — must pass with 0 errors)
Step 2: yarn run format   (Prettier — auto-fixes, verify no diff)
Step 3: npm run build     (Next.js build — must complete with 0 errors)
```

If lint fails → fix linting errors → re-run from Step 1.
If build fails → fix build errors → re-run from Step 1.
AI Review is skipped until all three pass.

**Note on pre-commit hook:** Husky runs `npm run lint` + `npm run format` on commit.
For doc-only commits (markdown, JSON), use `--no-verify` (lint irrelevant).

---

## Phase 2 — AI Review

Only begins after Static Validation succeeds.

Evaluate across these dimensions:

| Dimension | What to Check |
| --- | --- |
| Architecture | Follows component location rules, no mixing of RSC/client |
| Maintainability | No over-abstraction, clear naming, no dead code |
| Readability | Self-documenting identifiers, no unnecessary comments |
| Intent Matching | Change does what the prompt asked — no more, no less |
| Side Effects | No unintended regressions in adjacent components |
| Scalability | No hardcoded values that will break at scale |
| Regression Risk | No broken imports, props, or type signatures |

Reference `project-brain/standards/` files for domain-specific rules (if populated).

---

## Phase 3 — Confidence Scoring

Score each dimension 0–100. Compute weighted overall:

| Dimension | Weight |
| --- | --- |
| Architecture | 20% |
| Intent Matching | 20% |
| Side Effects | 20% |
| Maintainability | 15% |
| Readability | 10% |
| Scalability | 10% |
| Regression Risk | 5% |

**Acceptance threshold: Overall ≥ 90.**

If Overall < 90:

- Identify the lowest-scoring dimension
- Return to Execution with specific improvement instruction
- Re-run Static Validation → AI Review → Scoring
- Max 3 improvement loops before surfacing to user

Write score summary to `project-brain/cache/recent-review.md`.

---

## Review Output Format

```text
Architecture:     <score>/100
Maintainability:  <score>/100
Readability:      <score>/100
Intent Matching:  <score>/100
Side Effects:     <score>/100
Scalability:      <score>/100
Regression Risk:  <score>/100
Overall:          <score>/100

Issues Found:
- <issue 1>

Recommendations:
- <rec 1>

Decision: ACCEPT | IMPROVE
```
