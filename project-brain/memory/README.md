# Memory Layer

`.agents/` is the **single source of truth**. These are symlinks — edit either side, both reflect.

| project-brain/memory | → .agents/ |
|----------------------|-----------|
| architecture.md      | architecture.md |
| patterns.md          | patterns.md |
| overview.md          | memory.md (project/session state) |
| decisions.md         | decisions.md (ADRs) |

**project-brain-only extensions** (domain split, no .agents counterpart):
backend · frontend · database · routing · api · dependencies

Keep each < 300–500 lines. Loaded selectively.
