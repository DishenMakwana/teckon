# Graph Updater

Single responsibility: trigger incremental graph updates after code changes.
Never manually edits graph JSON files — MCP/Graphify owns those.

---

## Trigger

Runs after memory update (knowledge sync phase), only when source code files changed.
Doc-only changes (markdown, JSON, config) do not require a graph update.

---

## When to Update

| Change Type | Graph Update Needed |
| --- | --- |
| New component/function added | Yes |
| Component moved between directories | Yes |
| Import/export changed | Yes |
| Props or function signature changed | Yes |
| Data in `data.ts` changed | No (not a structural node) |
| Markdown / docs changed | No |
| Config files changed | No |
| CSS / styling only | No |

---

## Update Protocol

1. Check if any changed files are `.ts` / `.tsx` source files
2. If yes, trigger incremental update via MCP: `build_or_update_graph_tool` with `full_rebuild: false`
3. Note in task history: `Graph Updated: yes`
4. If graph was built on a different branch, flag it but still update

---

## Full Rebuild Triggers

Only do a full rebuild (`full_rebuild: true`) when:

- Branch changes significantly (e.g. after merge with large diff)
- Graph warning says built-on-branch mismatch AND incremental gives wrong results
- User explicitly requests it

---

## Incremental Update Command

```text
MCP: build_or_update_graph_tool
  full_rebuild: false
  base: HEAD~1
```

---

## Constraints

- Never edit `project-brain/graph/*.json` directly
- Never run full rebuild unless explicitly required — expensive
- If MCP graph tools unavailable, note in task history and skip update
