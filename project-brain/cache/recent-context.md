# Recent Context Cache

Reduces repeated graph retrieval for sequential prompts in the same session.
Written by context-loader after each successful load. Read at session start.

---

## Format

```text
Session: <date>
Branch: <git branch>
Domain: <last task domain>
Complexity: <last task tier>
Loaded Files:
  - <memory file 1>
Graph Nodes:
  - <node 1>
Recent Files Changed:
  - <file 1>
```

---

## Cache Hit Rules

Valid for current session only.

Use cached context when:

- Current task domain matches `Domain` in cache
- Branch unchanged since cache was written
- No new commits affecting loaded files

Invalidate when:

- Branch changes
- Task domain differs
- User requests fresh context

---

## Current Cache

Session: 2026-06-29
Branch: feat/project-brain
Domain: meta
Complexity: High

Loaded Files:

- project-brain/memory/overview.md
- project-brain/memory/architecture.md

Graph Nodes: none (docs-only task)

Recent Files Changed:

- project-brain/system/system.md
- project-brain/system/workflow.md
- project-brain/system/planner.md
- project-brain/runtime/task-classifier.md
- project-brain/runtime/graph-retriever.md
- project-brain/runtime/context-loader.md
- project-brain/runtime/execution-engine.md
- project-brain/runtime/review-engine.md
- project-brain/runtime/memory-updater.md
- project-brain/runtime/graph-updater.md
- CLAUDE.md
- AGENTS.md
