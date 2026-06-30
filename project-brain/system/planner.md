# Planner

Produces a structured plan before execution begins.
Planning depth scales with task complexity.

---

## Complexity Tiers

| Tier | Definition | Examples |
| --- | --- | --- |
| **Trivial** | Single token/string change, no logic | Fix typo, rename CSS class |
| **Low** | 1 file, no architecture impact | Add field to data.ts, update copy |
| **Medium** | 2–5 files, one feature domain | Add filter, update component layout |
| **High** | 5+ files or cross-domain | New page, new component with routing |
| **Critical** | Architecture change or data migration | Refactor data layer, new route group |

---

## Planning Requirements by Tier

### Trivial

- No plan needed
- Execute directly
- Still sync knowledge after completion

### Low

- 1–3 bullet summary of changes
- Identify the single file

### Medium — Full Plan Required

Produce:

- **Goal:** One sentence
- **Affected Modules:** List
- **Execution Order:** Numbered steps
- **Estimated Complexity:** Tier
- **Risk Analysis:** What could break
- **Testing Strategy:** How to verify
- **Estimated Files:** List

### High — Full Plan + Rollback

All Medium fields plus:

- **Rollback Strategy:** How to undo if execution fails
- Reference `project-brain/templates/task.md` for output format

### Critical — Full Plan + User Approval

All High fields plus:

- Explicitly surface plan to user and wait for approval before executing
- Note any irreversible actions

---

## Planning Inputs

Before producing a plan, the planner reads:

1. Task classification output (tier + domain)
2. Graph retrieval output (affected nodes)
3. Loaded context (relevant memory domain files)

---

## Planning Output Format

Use `project-brain/templates/task.md` as the template.
Write plan to `project-brain/cache/last-plan.md` for Medium/High/Critical tasks.

---

## Constraints

- Never start execution before planning is complete (Medium and above)
- Never plan beyond the scope of the prompt
- No speculative refactoring or cleanup in the plan
- No new abstractions beyond what the task requires
