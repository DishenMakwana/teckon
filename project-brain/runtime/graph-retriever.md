# Graph Retriever

Single responsibility: resolve the minimum structural context required for the task.
Never load the full codebase. Retrieve only affected nodes.

---

## MCP Tools to Use

Use `code-review-graph` MCP tools — always before Grep/Glob/Read.

| Task Type | Primary Tool | Secondary Tool |
| --- | --- | --- |
| Any code change | `semantic_search_nodes` | `query_graph` (callers_of / callees_of) |
| Impact analysis | `get_impact_radius` | `get_affected_flows` |
| Code review | `detect_changes` | `get_review_context` |
| Architecture question | `get_architecture_overview` | `list_communities` |
| Rename / dead code | `refactor_tool` | — |
| Find tests | `query_graph` pattern=`tests_for` | — |

---

## Retrieval Protocol

For a given prompt + domain:

1. Run `semantic_search_nodes` with the prompt's key entities (component name, function, file)
2. For each matched node, run `query_graph` with `callers_of` and `callees_of` to surface dependents
3. Run `get_impact_radius` if tier is Medium or above
4. Run `get_affected_flows` if routing or API domain
5. Fall back to Grep/Glob/Read only if graph returns no results

---

## Output

Return to context-loader:

```text
Affected Nodes: [list of file paths / function names]
Impact Radius: [files that depend on affected nodes]
Affected Flows: [execution paths impacted]
Graph Source: MCP | Grep fallback
```

---

## Constraints

- Never manually edit `project-brain/graph/` files — Graphify/MCP owns those
- If graph is stale (built on different branch), note it and use Grep as fallback
- Retrieve depth = 2 hops max for Medium; 3 hops for High/Critical
