project_slug: project-doc-skill
doc_type: prototype-retrofit
prototype: 03-notion-mcp-bridge
target_project: job-search
updated_at: 2026-04-18

# Retrofit — job-search as Prototype 03 (Notion + MCP)

Simulated retrofit of the existing job-search repo into prototype 03's
deliverable architecture. What the operator would see after running
the retrofit.

---

## THREE-LAYER SEPARATION — READ FIRST

- **Meta project** — this repo.
- **Bootstrap skill** — a single markdown file.
- **Deliverable architecture** — this retrofit's output.

---

## Page / database tree

```
Job Search  (top-level page; MCP scope root)
├── Entry (page)
├── Current State (page)
├── Decision Log (page)
├── Handoff Log (page)
├── 01 Upwork (page container)
│   ├── Profile (page)
│   ├── Portfolio (database)        ← 3 items as rows + Queue view
│   ├── Strategy (page)
│   └── Income Strategy (page)
├── 02 General Jobs (deferred)
├── 03 Process (page container)
│   ├── Job Search Prompt (page)
│   ├── Prepare Application Prompt (page)
│   ├── Cover Letter Style Guide (page)
│   └── Writing Samples (database)   ← frontmatter fields as properties
├── 04 Queue (page container)
│   └── Flagged Jobs (database)      ← primary structured state
└── 05 Formats (page container)
    ├── Job Listing Format (page)
    └── Writing Sample Format (page)
```

## Design choices — where 03 pushed on the content

**Portfolio as a database, not a page.** Unambiguous win for Notion. The
three portfolio items map cleanly to database rows with properties:
name, link, Upwork URL, role, tags (multi-select), strongest-for
(text), queued (checkbox). Filterable views: "Active" (not queued),
"By Tag," "Queue." Better than 01's narrative-Doc-plus-summary-Sheet
split.

**Writing Samples as a database.** The format spec's frontmatter fields
(date, channel, job_type, deliverable, question_prompt, outcome) map
one-to-one to Notion properties. Body lives in the page body. Filter
by channel + job_type is exactly what prep-application needs to pull
from. Cleanest mapping of any artifact in this retrofit.

**Flagged Jobs as a database.** Extended priority tags (applied,
interview, closed-won/lost, withdrew, skip) become a Select property
with color-coded options. Views: By Priority, By Status, Active
(applied + interview), Archive (resolved). Better than 01's Sheet
because selects auto-render with color badges and filter controls are
native in the sidebar.

**Strategy and Income Strategy stay as pages.** Both have narrative +
reference tables. Notion inline tables don't filter (they're static),
but neither do Doc tables. Same trade-off as 01. Slight edge to Notion
for the table aesthetics — cleaner rendering.

**Prompts as pages with toggle blocks.** The multi-step SOPs
(job-search-prompt has Step 1–6; prepare-application has Step 1–5 + sub-workflow A–E) benefit from toggle blocks that collapse/expand each step. Callouts highlight the "standing rules" sections. Docs render these flat; Notion makes them feel procedural.

**Cover Letter Style Guide as a page.** Heavy mixed format: narrative
sections, voice-excerpt callouts, bad→good pairs. Notion callouts and
inline code blocks handle the contrastive examples cleanly.

**Decision Log and Handoff Log as pages.** Append-only by convention.
Notion doesn't natively enforce append-only the way a git repo does;
operator discipline required. Acceptable for operator-only use.

## What works well in this architecture

- **Flagged Jobs database is the canonical win.** Extended priority
  states as select properties with filter views is how a career
  operator's job queue *wants* to work. This one artifact is the
  single biggest operator-felt improvement over both v0 markdown and
  01 Sheets.
- **Writing Samples database** is the second canonical win. Filter by
  channel + job_type is exactly the query the prepare-application
  prompt makes.
- **Portfolio database** with a Queue view (for the encyclopedia item
  awaiting Netlify hosting) is a clean fit.
- **Prompts as SOPs** read better here than in Docs.
- **MCP scope is naturally tight** — one top-level page means scoping
  is a single-step decision, not a per-folder ACL check.

## Where 03 gets awkward on this project

- **Operator is the only user.** Notion's best features assume
  multi-user collaboration (comments, mentions, permission granularity).
  A solo operator uses ~30% of Notion's surface. Minor — not a
  drawback, just unused capacity.
- **Long-form profile narrative reads slightly worse than in Docs.**
  Notion's block-based editor is less smooth for a 400-word paragraph
  than Google Docs is. Fine for reading; slight friction for drafting.
- **No client-facing surface to exercise.** Notion's sharing model
  shines with external guests; job-search has none. The axis Notion
  is strongest on (external collaborator UX) gets zero stress in
  this project.

## Workspace-bleed guardrail (v0 remediation check)

Operator's existing Lumen / any other work lives in their own Notion
workspace. The job-search engagement is a **single top-level page**
with MCP scoped to that page only. Engagement never shares page tree
with other work. If operator follows this discipline (enforced by
skill deployment instructions), v0's rejection is neutralized.

## Files in this retrofit

- `pages/entry.md` — Entry page body, navigation
- `pages/profile-excerpt.md` — narrative rendering in Notion
- `pages/strategy-excerpt.md` — narrative + static tables
- `databases/portfolio.md` — database snapshot, 3 rows + queue view
- `databases/flagged-jobs.md` — primary structured test
- `databases/writing-samples.md` — format-spec mapping
- `pages/job-search-prompt-notes.md` — how the prompt reads with
  toggle blocks and callouts
