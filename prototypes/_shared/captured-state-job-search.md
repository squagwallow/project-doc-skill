project_slug: project-doc-skill
doc_type: captured-state
source: retrofit from job-search repo (v0.4-era skill output)
target_project: job-search
updated_at: 2026-04-18

# Captured State — job-search (retrofit)

Equivalent of a captured interview, extracted from the existing
job-search repo artifacts. Consumed by prototype 01 and prototype 03
generation stages in Phase A. Same state, two architectures.

---

## THREE-LAYER SEPARATION — READ FIRST

- **Meta project** — this repo.
- **Bootstrap skill** — a single markdown file.
- **Deliverable architecture** — what each prototype produces for
  job-search in Phase A.

---

## Source

Extracted from:
- `entry.md`, `docs/decision-log.md`, `docs/handoff-log.md`,
  `docs/current-state.md`
- `upwork/profile.md`, `upwork/portfolio.md`, `upwork/strategy.md`
- `docs/upwork-income-strategy.md`
- `formats/job-listing-format.md`, `formats/writing-sample-format.md`
- `process/job-search-prompt.md`, `process/prepare-application-prompt.md`,
  `process/cover-letter-style-guide.md`
- `queue/flagged-jobs.md`

Not extracted (fine to skip for retrofit):
- `docs/user-guide.md`, `prompt-engineer-entry.md`, `docs/todo.md`
  (regenerable cleanly from captured state)
- `process/writing-samples/` (content pool, not architectural)
- `general-jobs/` (empty/deferred per current state)

---

## Q1 — Project description

A consolidated context layer for an operator's ongoing job search.
Centralizes profiles, strategy, writing samples, and a standard job
format so any LLM session can be pointed at the project and pick up
the ongoing process without manual uploads or re-explanation. Primary
focus: Upwork. Secondary: general jobs (LinkedIn, Indeed, direct).
Scope is personal operator use; no non-technical client involved.

## Q2 — Project name

`job-search`

## Q3 — Decomposition

Three areas:

1. **Upwork silo** (primary) — profile, portfolio, strategy, income
   strategy. Active.
2. **General-jobs silo** — LinkedIn, Indeed, direct applications.
   Deferred.
3. **Process layer (shared)** — two engineered prompts, cover letter
   style guide, writing sample bank, standardized job listing and
   writing sample formats, append-only flagged-jobs queue.

## Q4 — Exclusion criteria

- Code written/deployed by operator: **no**
- Integrations/automations: **no** (operator does the search manually
  via browser extension + JS extraction)
- Specific tools: Upwork web (primary), LinkedIn, Indeed, browser
  automation extension
- Multimedia files: **no** (writing samples are text)
- External service connections: operator-assisted scraping only, no
  API integrations in scope

## Q4.5 — Standardized formats

Two formats, both required:

**Job listing format** (every surfaced/logged job uses this)
Required fields: ID, title, company/client, source, link (live +
fixed), posted date, pay, priority tag, dealbreaker check.
Optional: location/remote, tags, notes.
Priority tag extensible in queue contexts to carry application state
(applied, interview, closed-won, closed-lost, withdrew, skip).

**Writing sample format** (cover letters, proposals, application
questions)
Filename: `[YYYY-MM-DD]-[channel]-[short-slug].md`
Frontmatter: date, channel (upwork | general), job_type, deliverable
(cover-letter | application-question | proposal), question_prompt
(verbatim, if applicable), outcome.
Body: the approved text. Optional notes section at bottom.

## Q4.75 — Notes preference

Notes on by default. Trigger-based activation (first decision, long
thread, explicit user phrases). Stays on until user says "pause notes."

## Prompt inventory

Two engineered prompts plus one reference document:

1. **Job search prompt** (`process/job-search-prompt.md`) — agentic
   job search returning listings in canonical format with dealbreakers
   filtered and only fixed live links. Activations: "do a job search
   on upwork," "find me [N] jobs for [role type]."

2. **Prepare application materials prompt**
   (`process/prepare-application-prompt.md`) — for a specific job or
   short list, audits requirements, compares against profile, assesses
   fit, proposes strategy, produces prioritized action list (cover
   letter last). Includes sub-workflow for cover letters and
   application questions. Activations: "let's apply for this one,"
   "prepare materials for [job ID]."

3. **Cover letter style guide** (`process/cover-letter-style-guide.md`)
   — reference document consumed by prompt 2. Defines voice
   (architect / coach registers), default structure, Upwork-specific
   conventions, bad→good patterns, "never do" list. Updated after
   each batch of outcomes.

## Done condition

Zero-friction workflow: operator loads the entry doc, issues a
directive, and the session executes the standard process end-to-end
without requiring manual context uploads or re-explanation. Measured
by: from cold-start new session, operator can say "do a job search
on upwork" or "let's apply for job [ID]" and get the full process
output without any prompt engineering in-session.

## Content payload (dense artifacts that must land in the deliverable)

**Operator profile (narrative domain doc)** — `upwork/profile.md`
Includes tagline, hourly rate, overview/summary (~400 words),
specialized profiles, skills list, project catalog, portfolio item
names, availability, languages, verifications, education, employment
history, status.

**Portfolio (structured + narrative)** — `upwork/portfolio.md`
Three published items, each with: link, Upwork portfolio URL, short
description, role, tools/stack, outcome, tags, "strongest for"
narrative. Plus a queue for future items (1 queued).

**Strategy (narrative domain doc)** — `upwork/strategy.md`
Meta-strategy (two-phase arc), current targeting, rate posture, hard
dealbreakers, signals of promising vs. weak listings, search keywords
(grouped by category), longer-term positioning, phase milestones
table.

**Income strategy (narrative + structured tables)** —
`docs/upwork-income-strategy.md`
Context/constraints, income math (rate-vs-hours table, 3 rows),
phase structure (three phases with exit criteria), rate ladder
(milestone-vs-rate table), client mix model, progress log
(append-only), re-analysis triggers.

**Flagged jobs queue (structured table)** — `queue/flagged-jobs.md`
Append-only. Three current entries in canonical listing format with
extended priority tags carrying application state. This is the
single densest structured-state artifact in the project — the axis
where 01's Google Sheets and 03's Notion database differ most
visibly.

**Formats (reference specs)** — `formats/job-listing-format.md`,
`formats/writing-sample-format.md`

**Prompts + style guide** (see Prompt inventory above)

## Complexity pattern

Moderate. Multi-silo project with structured recurring outputs
(job listings queue, writing samples), two engineered prompts with
a shared reference doc, multi-session, operator-internal only (no
non-technical client). Has already been retrofitted once (from an
earlier skill version to v0.4), so retrofit flow is precedented.

## Session history (for Phase A context)

Three handoff entries to date:
- Initialization (2026-04-17) — interview, generation, scaffold complete
- v0.4 skill retrofit (2026-04-17) — added notes block, revision mode,
  no-directive default, user guide
- Content population + first live job search test (2026-04-17) — Upwork
  silo fully populated, live test run, 3 jobs queued, batch JS method
  identified

Phase A retrofit is effectively a third retrofit — v0.4 → v1 — with
the v1 change being the deliverable architecture shape, not the skill's
interview or decomposition logic.

---

## What this captured state lets Phase A test

**Stress tests well:**
- Narrative domain docs (profile, strategy, income strategy) — how do
  long-form narrative docs read in Drive/Sheets vs. Notion pages?
- Structured state (flagged-jobs queue, bottleneck-style entries) —
  Sheets vs. Notion database side-by-side
- Append-only logs (decision-log, handoff-log, income progress log) —
  which architecture handles append-only narrative best?
- Multi-silo organization (upwork/ vs. general-jobs/ vs. process/) —
  folder/subpage mapping
- Prompt-and-reference relationship (prepare-application-prompt consumes
  cover-letter-style-guide) — how do cross-doc references work in each
  architecture?

**Stress tests partially:**
- Format spec usage — writing samples as individual files with
  frontmatter; does 01 want a Sheets-per-sample or a Doc-per-sample?
- Extended priority tags on structured entries — Notion select columns
  can do this natively; Sheets needs convention.

**Does NOT stress test:**
- **Non-technical client-facing surface** — job-search has no client.
  The axis that most mattered in Lumen is absent here. Workaround:
  operator self-assesses "if a career coach or mentor were looking at
  this, would they understand it?" — explicit role-play.
- **Subcontractor/build-trigger handoff** — job-search has no code
  work. The sibling-variant readiness axis gets no exercise.

These gaps are fine for Phase A because the Lumen Pass 1 paper
analysis already covered them. Phase A adds the real-content friction
signal on top of Pass 1's theoretical fit scoring.

---

## What happens next

Two subagents (or one operator-led retrofit) consume this captured
state plus the respective `skill-delta.md` from prototypes 01 and 03,
and produce the retrofitted deliverable architecture content. Operator
then deploys live — 01 to a real Drive folder with Apps Script, 03 to
a real Notion page with MCP — and measures friction.

See `prototypes/_shared/v1-roadmap.md` for full Phase A flow.
