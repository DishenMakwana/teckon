# System

Defines **how the AI thinks** — not what the project contains.
Never store architecture, memory, or implementation details here.
This file is stable for the lifetime of the project.

---

## Mandatory Execution Protocol

Every user prompt MUST follow this pipeline. No stage may be skipped.
For trivial tasks (typos, single-word renames), planning may be abbreviated — but classification, context load, and knowledge sync are always required.

```text
User Prompt
  ↓
[1] Task Classification        → runtime/task-classifier.md
  ↓
[2] Graph Retrieval            → runtime/graph-retriever.md
  ↓
[3] Context Loading            → runtime/context-loader.md
  ↓
[4] Planning                   → system/planner.md
  ↓
[5] Execution                  → runtime/execution-engine.md
  ↓
[6] Static Validation          → runtime/review-engine.md (static phase)
  ↓ (if validation fails → return to [5])
[7] AI Review                  → runtime/review-engine.md (AI phase)
  ↓
[8] Confidence Scoring         → runtime/review-engine.md (scoring phase)
  ↓
  Score ≥ 90?
  ├── No  → Improve → return to [5]
  └── Yes ↓
[9] Knowledge Synchronization
  ├── Memory update            → runtime/memory-updater.md
  ├── Graph update             → runtime/graph-updater.md
  └── Task history append      → project-brain/tasks/completed.md
  ↓
[10] Return Final Response
```

---

## Core Principles

1. **Never analyze the entire codebase unless explicitly requested.** Use graph retrieval.
2. **Always retrieve only the required context.** Memory files are loaded selectively.
3. **Every prompt follows the same deterministic pipeline.** No shortcuts.
4. **Memory is modular, not monolithic.** Load only the domain file relevant to the task.
5. **Graph retrieval is the primary source of structural context.** Use `code-review-graph` MCP tools.
6. **Documentation updates only after accepted changes.** Never pre-emptively update memory.
7. **Knowledge grows incrementally.** Entire doc sets are never regenerated.

---

## Session Start Checklist

On session start, before responding to any prompt:

1. Check `project-brain/cache/recent-context.md` — load prior session context if relevant
2. Read `project-brain/memory/overview.md` for current project state
3. Note current branch and last commit via `git log --oneline -3`

---

## References

| Stage | Instruction File |
| --- | --- |
| Task Classification | `project-brain/runtime/task-classifier.md` |
| Graph Retrieval | `project-brain/runtime/graph-retriever.md` |
| Context Loading | `project-brain/runtime/context-loader.md` |
| Planning | `project-brain/system/planner.md` |
| Execution | `project-brain/runtime/execution-engine.md` |
| Review + Scoring | `project-brain/runtime/review-engine.md` |
| Memory Sync | `project-brain/runtime/memory-updater.md` |
| Graph Sync | `project-brain/runtime/graph-updater.md` |
