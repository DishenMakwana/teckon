# Context Loader

Single responsibility: load only the memory files relevant to the task domain.
Never inject the full memory layer into context.

---

## Domain → Memory File Mapping

| Domain | Load These Files |
| --- | --- |
| frontend | `memory/frontend.md`, `memory/architecture.md` |
| backend | `memory/backend.md`, `memory/architecture.md` |
| database | `memory/database.md` |
| routing | `memory/routing.md`, `memory/architecture.md` |
| api | `memory/api.md`, `memory/backend.md` |
| dependencies | `memory/dependencies.md` |
| docs / meta | `memory/overview.md` |
| cross-domain | `memory/architecture.md` + relevant domain files |

Always load `memory/patterns.md` for any code-writing task.

---

## Cache Check (Before Loading)

Check `project-brain/cache/recent-context.md` first.

If cache domain matches current task domain AND cache is from same session:

- Use cached context — skip memory file reads
- Log: `Cache hit: <domain>`

If no cache match:

- Load from memory files
- Write result to `cache/recent-context.md` after loading
- Log: `Cache miss: loaded <files>`

---

## Load Protocol

1. Check `cache/recent-context.md` for cache hit
2. Load mapped memory files for the task domain
3. Load `memory/patterns.md` (always, for code tasks)
4. Load `memory/decisions.md` if task may conflict with ADRs
5. Pass loaded context to planner

---

## Constraints

- Never load all memory files at once
- Never load graph JSON files (MCP handles those)
- Memory files over 500 lines: read only the relevant section, not the whole file
- Do not load standards files — review-engine loads those separately during review phase
