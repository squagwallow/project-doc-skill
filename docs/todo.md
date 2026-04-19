project_slug: project-doc-skill
doc_type: todo
updated_at: 2026-04-19
url: https://raw.githubusercontent.com/squagwallow/project-doc-skill/main/docs/todo.md

# TODO

Convention: mark completed items with ~~strikethrough~~ DONE [date]
Priority-ordered. Top items first.

## Priority 1 — v1.0 (complete)
1. ~~Commit entry.md to GitHub~~ DONE 2026-04-17
2. ~~Commit thread-handoff-protocol.md~~ DONE 2026-04-17
3. ~~Build skill v0.4~~ DONE 2026-04-17
4. ~~Build skill v0.5 with all fixes~~ DONE 2026-04-17
5. ~~Commit full project-doc-skill repo to GitHub~~ DONE 2026-04-18
6. ~~Build skill v1.0 — Notion MCP layer, updated THREAD NOTES, raw.githubusercontent.com URLs~~ DONE 2026-04-19
7. ~~Validate v1 architecture end-to-end on job-search prototype~~ DONE 2026-04-19

## Priority 2 — Skill v1.1 (next session priority)

Findings from job-search/v1-notion-mcp audit (2026-04-19). These are guaranteed next actions for the skill:

8. **Connector inventory question** — replace Q4.9 (Notion-only) with a broader connector question earlier in the interview. Ask what MCP connectors are active in the current session *before* proposing architecture. Do not assume Notion is the only option.

9. **Four architecture patterns in PART 2** — current skill only knows two (git-only, git+Notion). Add:
   - git + Google Drive
   - git + Notion + Google Drive
   Routing logic: Notion = row-structured data the user edits as a database. Drive = documents and sheets the user writes, shares, or exports. Both = projects with both types of user-facing content.

10. **Google Drive setup protocol (PART 2.5b)** — Notion has a setup protocol (PART 2.5). Drive needs one. Cover: how to find a folder ID, how `Google Drive:create_file` works for Docs vs Sheets, how to reference Drive files in entry.md conditional reading.

11. **Google Drive generation protocol in PART 3** — when to call `Google Drive:create_file`, Docs vs Sheets routing, how to surface Drive file URLs in entry.md the same way Notion databases are surfaced.

12. **Schema design heuristics in Notion setup section** — the skill has no guidance on field type tradeoffs. Add to PART 2.5: pragmatic select-field choices (collapse related statuses into one field to minimize write complexity), let tag taxonomies emerge from use rather than designing them upfront, prefer single-write state changes over two-field syncs.

13. **Tool connector category** — Playwright and other execution-layer MCPs are a third connector type, distinct from data connectors (Notion, Drive) and orchestration (Git). Add to the architecture section: tool connectors do not store data, they perform actions. The skill should ask about them in the connector inventory question and document them separately in prompt-engineer-entry.md.

14. **Reference implementation pointer** — add to entry.md conditional reading: `job-search/v1-notion-mcp` is the canonical reference implementation of the v1 architecture. Load when working on the skill's Notion setup protocol or architecture decisions.

## Priority 3 — Backlog deployment

15. Merge `sweet-backlog-life-ops` feature branch to main — blocker for all other backlog work.
16. Generate `entry.md` for backlog using skill spec (git-only path, SCHEMA.md + AGENTS.md as conditional reading).
17. Create `docs/` with three stubs: decision-log.md, current-state.md, handoff-log.md.
18. Evaluate whether to add Notion layer to backlog — one Notion database (Life Ops Tasks) would replace the per-session RICH HTML artifact output with a persistent kanban board. Notion MCP already configured from job-search setup.
19. Load real tasks via intake dump protocol — system is not live until real data replaces sample tasks.

## Priority 4 — Skill iteration (ongoing)
20. Collect failure modes from real deployments
21. AGENTS.md template spec
22. Full roadmap doc
23. Personal Context Layer design
