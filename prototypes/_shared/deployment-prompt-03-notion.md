project_slug: project-doc-skill
doc_type: phase-a-deployment-prompt
target_prototype: 03-notion-mcp-bridge
target_project: job-search
updated_at: 2026-04-18

# Deployment Prompt — Prototype 03 (Notion + MCP) for job-search

Pasteable into a fresh Claude desktop session with Notion MCP installed.
Everything below the divider is the prompt itself.

---

## Stage A — Manual scaffold (do this first, in Notion, ~5 min)

1. Open your Notion personal workspace
2. Create a new top-level page titled **"Job Search"** — this is the
   MCP scope root. Do not nest it inside any other project page
3. Open Claude desktop → Settings → Connectors → Notion
4. Grant access **scoped only to the "Job Search" page** (not the whole
   workspace). If the flow doesn't let you scope by page, first install
   the Notion integration on just that page via Notion's integrations
   panel, then connect from Claude
5. Verify: ask Claude desktop "can you see my Notion workspace?" — it
   should confirm access to Job Search and no other pages
6. Once confirmed, paste everything below the divider into a fresh
   Claude desktop chat

---

# Claude — Deployment Task

You are deploying a live Notion-based deliverable architecture for an
existing project called `job-search`. This is Phase A of a v1 prototyping
effort for a meta project called project-doc-skill.

## Three-layer separation (read first)

- **Meta project** — the project-doc-skill repo. Not relevant to this
  deployment.
- **Bootstrap skill** — a markdown file. Also not directly relevant here.
- **Deliverable architecture** — what you are building right now in
  Notion.

## Scope guardrail

Your Notion MCP access is scoped to a single top-level page called
"Job Search". Confirm this before proceeding. Do not read from, write
to, or reference any other Notion pages in this workspace. If your MCP
scope appears broader than one page, stop and report.

## What to build

Inside the "Job Search" page, create the following page tree and
databases:

```
Job Search (existing)
├── Entry (page)
├── Current State (page)
├── Decision Log (page)
├── Handoff Log (page)
├── 01 Upwork (page container)
│   ├── Profile (page)
│   ├── Portfolio (database)        ← 3 rows + queue view
│   ├── Strategy (page)
│   └── Income Strategy (page)
├── 03 Process (page container)
│   ├── Job Search Prompt (page)
│   ├── Prepare Application Prompt (page)
│   ├── Cover Letter Style Guide (page)
│   └── Writing Samples (database)   ← properties per format spec
├── 04 Queue (page container)
│   └── Flagged Jobs (database)      ← 3 rows currently
└── 05 Formats (page container)
    ├── Job Listing Format (page)
    └── Writing Sample Format (page)
```

Skip the "02 General Jobs" container — it's deferred in the source
project.

## Database schemas

**Flagged Jobs database**

| Property | Type | Options / notes |
|---|---|---|
| ID | title | - |
| Title | text | - |
| Company | text | - |
| Source | select | Upwork, LinkedIn, Indeed, Direct, Referral |
| Link | url | - |
| Posted | date | - |
| Pay | text | - |
| Priority | select | high, medium, low — colored badges |
| Status | select | surfaced, applied, interview, closed-won, closed-lost, withdrew, skip — colored badges |
| Dealbreaker check | select | pass, fail |
| Tags | multi-select | starter options: zapier, claude, notion, ai-training, legal, corporate — operator will add more |
| Notes | text | - |

Create these views on the Flagged Jobs database:
- **By Priority** — sort by Priority (high → low)
- **Active** — filter Status in [surfaced, applied, interview]
- **Archive** — filter Status in [closed-won, closed-lost, withdrew, skip]

**Portfolio database**

| Property | Type |
|---|---|
| Item name | title |
| Link | url |
| Upwork portfolio URL | url |
| Role | text |
| Tools / stack | multi-select |
| Tags | multi-select |
| Status | select (published, queued, archived) |
| Strongest for | text |

Views: **Active** (filter: status = published), **Queue** (filter:
status = queued).

**Writing Samples database**

| Property | Type |
|---|---|
| Title | title |
| Date | date |
| Channel | select (upwork, general) |
| Job type | text |
| Deliverable | select (cover-letter, application-question, proposal) |
| Question prompt | text |
| Outcome | select (submitted, interview, hired, rejected, withdrew) |

Views: **By Channel**, **For Cover Letter Drafting** (filter:
deliverable = cover-letter, sort by Date desc).

## Content to populate

### Flagged Jobs (3 rows)

Row 1:
- ID: upwork-20260417-02
- Title: Zapier + Claude Cowork + Clio Integration — Weekly Automated Report
- Company: Criminal Defense Attorney
- Source: Upwork
- Link: https://www.upwork.com/jobs/Zapier-Claude-Cowork-Clio-Integration-Weekly-span-class-highlight-Automated-span-Report_~022045221408972617426/
- Posted: 2026-04-17
- Pay: $75 fixed
- Priority: medium
- Status: surfaced
- Dealbreaker check: pass
- Tags: zapier, claude, api-integration, legal, one-time, fast-close
- Notes: Tiny scope, excellent client (5.0/3 reviews, $4K spent), 10-15 proposals. Below budget floor but golden goose logic applies.

Row 2:
- ID: upwork-20260417-03
- Title: AI Trainer & Upskilling Consultant — Corporate Education Program
- Company: Large Company
- Source: Upwork
- Link: https://www.upwork.com/jobs/Trainer-Upskilling-Consultant-Corporate-Education-Program_~022044795585454518367/
- Posted: 2026-04-16
- Pay: $50-$100/hr hourly
- Priority: medium
- Status: surfaced
- Dealbreaker check: pass
- Tags: ai-training, corporate, facilitation, llm-prompt-engineering
- Notes: Large company ($1.1M Upwork spend), strong skills match. Yellow flag: consistent no-feedback pattern across past jobs. 20-50 proposals.

Row 3:
- ID: upwork-20260417-04
- Title: Notion Expert — Workflow Migration, Automation & Team Training
- Company: Production Company (London)
- Source: Upwork
- Link: https://www.upwork.com/jobs/span-class-highlight-Notion-span-Expert-Workflow-Migration-span-class-highlight-Automation-span-amp-Team-Training_~022044761830984122906/
- Posted: 2026-04-16
- Pay: Fixed price to propose
- Priority: high
- Status: surfaced
- Dealbreaker check: pass
- Tags: notion, claude, cowork, workflow-migration, team-training
- Notes: Best portfolio match in session. Explicitly mentions Claude + Cowork as differentiator. Exceptional client — 4.98/116 reviews, $107K spent, 72% hire rate. 15 already interviewing.

### Portfolio (3 rows + 1 queued)

Ask the operator to paste the full content of their existing
`upwork/portfolio.md` — each of three published items (Cornflower
Health, Clinical AI Failure Modes, Harvard/NASEM Proceedings) becomes
a database row with the full descriptive text in the row's page body.
Plus a fourth queued row for "LLM Prompt & Context Design Encyclopedia"
with status = queued.

### Writing Samples

Ask the operator to paste the contents of their existing
`process/writing-samples/` — one row per sample, frontmatter fields
mapped to database properties, body text into the row's page body.

### Remaining pages (Entry, Profile, Strategy, Income Strategy, all
process/ prompts, all format specs)

Ask the operator to paste each corresponding `.md` file from their
existing job-search repo. Transcribe into Notion pages using the
appropriate block types:
- SOP prompts (job-search-prompt, prepare-application-prompt): use
  **toggle blocks** per major step; **callout blocks** for standing
  rules
- Style guide: use **callouts** for bad→good pairs, **code blocks** for
  voice excerpts
- Profile, Strategy, Income Strategy: normal pages with headings,
  inline tables, bullet lists preserved verbatim
- Entry page: mirror the navigation from the existing entry.md, but
  replace file paths with Notion page mentions

### Entry page specifically

Entry must include:
- Purpose (one sentence)
- Current Objective
- Page tree (as a navigation list with mentions to each page)
- **Scope guardrail notice**: "MCP access is scoped to this page tree
  only. Do not grant workspace-root access."
- Required-reading conditionals (same as existing entry.md)
- Standing rules (same as existing)
- Retrieval and write-back notes

## Execution protocol

1. Confirm scope (respond with "MCP scope confirmed: Job Search page
   only" or stop)
2. Create empty page tree and databases with schemas (no content yet)
3. Ask operator: "Scaffold complete. Paste your existing job-search
   content now — easiest is to paste file-by-file. Start wherever."
4. For each pasted file, transcribe into the correct Notion location
   using the block types above
5. Final step: create the Entry page with full navigation
6. Respond with a completion summary: what was created, any content
   the operator should verify, any ambiguity you had to resolve

## Failure modes to watch for

- MCP scope appears broader than one page → stop, do not proceed
- Database schema creation fails (rate limit or permission) → report
  and ask operator to create manually, then you populate
- Toggle or callout blocks not supported by your MCP version →
  fall back to plain text with headings, note the limitation
- Content too long for a single write → chunk and continue

## After deployment

Operator should:
- Verify every page renders
- Run one working session: e.g., "do a job search on upwork" — see
  if the architecture holds the session output cleanly
- Fill out `prototypes/_shared/phase-a-friction-03-notion.md` in the
  project-doc-skill repo with observations
