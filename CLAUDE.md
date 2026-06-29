@AGENTS.md

## Project Brain — Execution Protocol

**IMPORTANT: This project uses Project Brain v2. Read `project-brain/system/system.md` at session start.**

Every prompt follows the deterministic pipeline defined there:

```text
Classify → Graph Retrieve → Load Context → Plan → Execute → Validate → Review → Score ≥ 90? → Sync → Respond
```

### Session Start

1. Read `project-brain/cache/recent-context.md` (prior session context)
2. Read `project-brain/memory/overview.md` (current project state)
3. Check git branch + last commit

### Key Protocol Files

- Master pipeline: `project-brain/system/system.md`
- Lifecycle rules: `project-brain/system/workflow.md`
- Planning rules: `project-brain/system/planner.md`
- Task classifier: `project-brain/runtime/task-classifier.md`
- Graph retriever: `project-brain/runtime/graph-retriever.md`
- Context loader: `project-brain/runtime/context-loader.md`
- Execution rules: `project-brain/runtime/execution-engine.md`
- Review + scoring: `project-brain/runtime/review-engine.md`
- Memory sync: `project-brain/runtime/memory-updater.md`
- Graph sync: `project-brain/runtime/graph-updater.md`

<!-- code-review-graph MCP tools -->
## MCP Tools: code-review-graph

**IMPORTANT: This project has a knowledge graph. ALWAYS use the
code-review-graph MCP tools BEFORE using Grep/Glob/Read to explore
the codebase.** The graph is faster, cheaper (fewer tokens), and gives
you structural context (callers, dependents, test coverage) that file
scanning cannot.

### When to use graph tools FIRST

- **Exploring code**: `semantic_search_nodes` or `query_graph` instead of Grep
- **Understanding impact**: `get_impact_radius` instead of manually tracing imports
- **Code review**: `detect_changes` + `get_review_context` instead of reading entire files
- **Finding relationships**: `query_graph` with callers_of/callees_of/imports_of/tests_for
- **Architecture questions**: `get_architecture_overview` + `list_communities`

Fall back to Grep/Glob/Read **only** when the graph doesn't cover what you need.

### Key Tools

| Tool | Use when |
|------|----------|
| `detect_changes` | Reviewing code changes — gives risk-scored analysis |
| `get_review_context` | Need source snippets for review — token-efficient |
| `get_impact_radius` | Understanding blast radius of a change |
| `get_affected_flows` | Finding which execution paths are impacted |
| `query_graph` | Tracing callers, callees, imports, tests, dependencies |
| `semantic_search_nodes` | Finding functions/classes by name or keyword |
| `get_architecture_overview` | Understanding high-level codebase structure |
| `refactor_tool` | Planning renames, finding dead code |

### Workflow

1. The graph auto-updates on file changes (via hooks).
2. Use `detect_changes` for code review.
3. Use `get_affected_flows` to understand impact.
4. Use `query_graph` pattern="tests_for" to check coverage.
