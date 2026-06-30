# Task Classifier

Single responsibility: classify every incoming prompt before any other phase runs.

---

## Output

Produces two values:

- **Complexity Tier:** Trivial / Low / Medium / High / Critical
- **Domain:** frontend / backend / database / routing / api / dependencies / docs / meta

---

## Classification Rules

### By Scope

| Signal | Tier |
| --- | --- |
| Single word/string/typo change | Trivial |
| 1 file, no component/logic change | Low |
| 1 component or 2–5 files, one domain | Medium |
| New feature, cross-domain, 5+ files | High |
| Architecture change, data migration | Critical |

### By Domain

Assign domain by primary affected area:

- **frontend** — components, styling, animations, UI logic
- **backend** — Server Actions, RSC patterns
- **database** — `src/lib/data.ts`, product/blog/review data
- **routing** — `src/app/` route structure, URL params, metadata
- **api** — Server Actions in `src/app/actions/`, external integrations
- **dependencies** — package.json, config files, tooling
- **docs** — markdown, README, `.agents/`, `project-brain/`
- **meta** — CLAUDE.md, AGENTS.md, project-brain system files

### Ambiguous Cases

If prompt spans multiple domains, pick the primary domain (where most changes land).
If scope is unclear, classify as one tier higher to be safe.

---

## Examples

| Prompt | Tier | Domain |
| --- | --- | --- |
| "Fix typo in footer" | Trivial | frontend |
| "Add a product to data.ts" | Low | database |
| "Update the blog filter dropdown" | Medium | frontend |
| "Add a new About subpage" | High | routing |
| "Migrate data.ts to Supabase" | Critical | backend |
| "Update project-brain memory files" | Low | docs |

---

## Output to Next Phase

Pass to graph-retriever:

```text
Tier: <tier>
Domain: <domain>
Prompt Summary: <one-line summary>
```
