# Workflow

Execution lifecycle. No implementation logic in this file.

---

## Phase Pipeline

```text
User Prompt
  ↓
[1] Task Classification
  ↓
[2] Graph Retrieval
  ↓
[3] Context Loading
  ↓
[4] Planning
  ↓  (trivial tasks: skip to Execution)
[5] Execution
  ↓
[6] Static Validation
  ↓  (fail → return to Execution)
[7] AI Review
  ↓
[8] Confidence Scoring
  ↓
  Score ≥ 90?
  ├── No  → Improve → return to [5]
  └── Yes ↓
[9] Knowledge Sync
  ↓
[10] Response
```

---

## Phase Gates

Each phase must complete before the next begins.

| Phase | Gate Condition |
| --- | --- |
| Graph Retrieval | Classification output received |
| Context Loading | Graph nodes resolved |
| Planning | Context loaded |
| Execution | Plan approved (or trivial — skip) |
| Static Validation | Execution complete |
| AI Review | Static validation passed |
| Knowledge Sync | Score ≥ 90 |
| Response | Sync complete |

---

## Skip Rules

Only planning may be skipped. All other phases are mandatory.

| Complexity | Planning Required |
| --- | --- |
| Trivial | No — execute directly |
| Low | Brief (1–3 bullet plan) |
| Medium | Full plan |
| High | Full plan + rollback strategy |
| Critical | Full plan + rollback + explicit user approval |

---

## Review Loop

If confidence score < 90 after AI review:

1. Identify lowest-scoring dimension
2. Return to Execution with targeted improvement
3. Re-run Static Validation → AI Review → Scoring
4. Maximum 3 improvement loops before escalating to user

---

## Knowledge Sync Conditions

Sync only triggers on accepted changes (score ≥ 90). Never pre-emptively update.

- **Always update:** `tasks/completed.md`, `cache/recent-context.md`
- **Update if affected:** relevant `memory/*.md` domain file
- **Update if code changed:** trigger graph incremental update via MCP
- **Never regenerate:** entire doc sets or unaffected memory files
