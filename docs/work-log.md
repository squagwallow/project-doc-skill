project_slug: project-doc-skill
doc_type: work-log
updated_at: 2026-04-19
url: https://raw.githubusercontent.com/squagwallow/project-doc-skill/main/docs/work-log.md

# Work Log

Professional work journal. Log any design, development, research, or deployment work — enough to reconstruct the decision and work that led to each outcome. Mine this file when building pitches, case studies, process briefings, or portfolio material. Do not ask the user to re-explain their history — synthesize from entries.

Append-only, reverse chronological. Most recent entry on top.

## Entry format

```
## [Date] — [Short label]
What I did: [2-3 sentences — what was designed, built, researched, or decided]
Skills in play: [3-5 tags]
Outcome: [one sentence — what exists or is known now that wasn't before]
```

---

## 2026-04-19 — v1 architecture validation + skill v1.0 rewrite

What I did: Validated the full v1 deliverable architecture (git + scoped Notion MCP) through live testing on the job-search prototype. Set up GitHub MCP write access in Claude Desktop (fine-grained PAT, confirmed working). Set up scoped Notion MCP using internal integration token (one integration per project, page-scoped, confirmed working). Verified all core Notion operations: schema population via API-update-a-data-source, row creation via API-post-page, row update via API-patch-page. Seeded Flagged Jobs (3 jobs) and Writing Samples (4 samples) databases from existing git content. Created v1-notion-mcp branch of job-search repo with updated entry.md, prompt-engineer-entry.md, and decision-log. Rewrote build-new-project.skill.md from v0.5 to v1.0 incorporating the full two-layer architecture, Notion setup protocol, updated THREAD NOTES spec, and known gaps documentation.

Skills in play: LLM system architecture · MCP integration · Notion API · GitHub API · prompt engineering · documentation architecture

Outcome: v1 architecture is fully validated and documented; skill v1.0 is committed and ready to generate git + Notion projects from scratch; job-search prototype is live on the v1 branch with real data in Notion.

---

## 2026-04-18 — Repo reconstruction, retrieval-path revision, and notes protocol redesign

What I did: Audited the live GitHub repo against the intended file structure, identified that the repo on GitHub was behind the intended build, and reconstructed the full project state from uploaded files. Revised the system's retrieval assumptions to make GitHub connector/direct repo access the primary path, relegated jsDelivr to fallback status, and redesigned the notes protocol into a compact always-on THREAD NOTES format with aggressive pruning rules.

Skills in play: prompt engineering · documentation architecture · repo auditing · system design · workflow refinement

Outcome: The repo is now positioned to reflect the full intended documentation set plus updated retrieval and notes protocols.
