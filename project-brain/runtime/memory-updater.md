# Memory Updater

Single responsibility: update only affected memory files after an accepted change.
Never regenerate entire documentation. Incremental updates only.

---

## Trigger

Only runs after confidence score ≥ 90. Never pre-emptively updates.

---

## Update Rules

| Condition | Action |
| --- | --- |
| Any accepted task | Append to `tasks/completed.md` |
| Any accepted task | Update `cache/recent-context.md` |
| Frontend files changed | Update `memory/frontend.md` if component list/pattern changed |
| data.ts changed | Update `memory/database.md` if schema/fields changed |
| New route added | Update `memory/routing.md` |
| New dependency added | Update `memory/dependencies.md` |
| ADR-level decision | Append to `.agents/decisions.md` (symlinked as `memory/decisions.md`) |
| Architecture changed | Update `.agents/architecture.md` (symlinked as `memory/architecture.md`) |

---

## Symlink Awareness

These memory files are symlinks to `.agents/` — editing them edits `.agents/` directly:

- `memory/architecture.md` → `.agents/architecture.md`
- `memory/patterns.md` → `.agents/patterns.md`
- `memory/overview.md` → `.agents/memory.md`
- `memory/decisions.md` → `.agents/decisions.md`

Update via the `memory/` path — the symlink handles the rest.

---

## Task History Entry

Append to `tasks/completed.md` after every accepted task:

```text
## <Task Description> — <Date>

- **Goal:** <one sentence>
- **Files Changed:** <list>
- **Modules Changed:** <list>
- **Review Score:** <overall>/100
- **Memory Updated:** <files updated or "none">
- **Graph Updated:** yes | no
```

---

## Constraints

- Update only the fields/sections that changed — never rewrite the whole file
- Keep each memory file under 500 lines
- Do not duplicate information already in `.agents/` files
- Do not update standards files — those are engineering rules, not project state
