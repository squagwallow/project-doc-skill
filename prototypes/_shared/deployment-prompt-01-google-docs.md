project_slug: project-doc-skill
doc_type: phase-a-deployment-prompt
target_prototype: 01-google-docs-apps-script
target_project: job-search
updated_at: 2026-04-18

# Deployment Prompt — Prototype 01 (Google Docs + Apps Script) for job-search

Pasteable into a fresh Claude desktop session (or Claude Code session).
Everything below the divider is the prompt itself.

---

## Stage A — Manual scaffold (do this first, in Google Drive, ~15 min)

1. In Google Drive, create a new folder: **"Job Search"**
2. Inside, create subfolders:
   - `01-Upwork`
   - `02-General-Jobs` (leave empty)
   - `03-Process`
   - `03-Process/Writing-Samples`
   - `04-Queue`
   - `05-Formats`
   - `_System` (for Apps Script deployment URL)
3. In the root "Job Search" folder, create empty Google Docs:
   - `Entry`, `Current State`, `Decision Log`, `Handoff Log`
4. In `01-Upwork/`: create empty `Profile`, `Portfolio`, `Strategy`,
   `Income Strategy` Docs, and empty `Portfolio Summary` Sheet
5. In `03-Process/`: create empty `Job Search Prompt`,
   `Prepare Application Prompt`, `Cover Letter Style Guide` Docs
6. In `04-Queue/`: create empty `Flagged Jobs` Sheet
7. In `05-Formats/`: create empty `Job Listing Format`,
   `Writing Sample Format` Docs
8. Open any Sheet in the folder → Extensions → Apps Script → paste the
   bridge script from
   `prototypes/01-google-docs-apps-script/generated/apps-script/bridge.gs`
9. In the bridge script, replace the `REPLACE_WITH_*` constants with
   actual Drive folder ID, Doc IDs, and Sheet IDs (get these from the
   URL bar of each file — the long string between `/d/` and `/edit`)
10. Deploy the Apps Script as Web App: execute as "Me", access "Anyone
    with link". Copy the deployment URL. Paste it into the `_System`
    folder as a Doc called `Bridge URL`
11. Once scaffold is done, paste everything below the divider into a
    fresh Claude session

---

# Claude — Deployment Task

You are populating a Google Docs + Sheets deliverable architecture for
an existing project called `job-search`. Phase A of a v1 prototyping
effort for a meta project called project-doc-skill.

## Three-layer separation (read first)

- **Meta project** — the project-doc-skill repo. Not relevant.
- **Bootstrap skill** — a markdown file. Not directly relevant.
- **Deliverable architecture** — Google Drive folder you're populating.

## Mode

Two execution modes depending on what the operator has:

- **Mode A — Google MCP available:** You can write directly to Docs
  and Sheets via MCP. Use this if it works.
- **Mode B — No Google MCP:** Output content as labeled markdown /
  CSV blocks that the operator copy-pastes into the pre-created Docs
  and Sheets.

Ask the operator which mode first. Default to Mode B if unclear.

## What to populate

The operator has already created empty Docs and Sheets at these
locations. Your job is to fill them with content transcribed from the
operator's existing job-search repo.

Folder structure they've scaffolded:

```
Job Search/
  Entry
  Current State
  Decision Log
  Handoff Log
  01-Upwork/
    Profile · Portfolio · Portfolio Summary (Sheet) · Strategy · Income Strategy
  03-Process/
    Job Search Prompt · Prepare Application Prompt · Cover Letter Style Guide
    Writing-Samples/  (subfolder for individual sample Docs)
  04-Queue/
    Flagged Jobs (Sheet)
  05-Formats/
    Job Listing Format · Writing Sample Format
  _System/
    Bridge URL
```

## Content transcription rules

- **Docs** get markdown content converted to Google Docs formatting.
  Preserve headings, bullet lists, tables, paragraphs verbatim from
  source.
- **Sheets** get header row + data rows.
- **Do not invent content.** If the operator hasn't pasted a file, ask
  for it or skip it.

## Sheet contents

**04-Queue/Flagged Jobs** — columns and three rows:

| id | title | company | source | link | posted | pay | priority | status | dealbreaker_check | tags | notes |
|---|---|---|---|---|---|---|---|---|---|---|---|
| upwork-20260417-02 | Zapier + Claude Cowork + Clio Integration — Weekly Automated Report | Criminal Defense Attorney | Upwork | (link) | 2026-04-17 | $75 fixed | medium | surfaced | pass | zapier, claude, api-integration, legal, one-time, fast-close | (notes) |
| upwork-20260417-03 | AI Trainer & Upskilling Consultant — Corporate Education Program | Large Company | Upwork | (link) | 2026-04-16 | $50-$100/hr | medium | surfaced | pass | ai-training, corporate, facilitation, llm-prompt-engineering | (notes) |
| upwork-20260417-04 | Notion Expert — Workflow Migration, Automation & Team Training | Production Company (London) | Upwork | (link) | 2026-04-16 | Fixed (propose) | high | surfaced | pass | notions, claude, cowork, workflow-migration, team-training | (notes) |

Full link URLs and note text in the corresponding deployment prompt
for 03 (`deployment-prompt-03-notion.md`) or in operator's source
`queue/flagged-jobs.md`.

**01-Upwork/Portfolio Summary** — columns:
item_name · link · upwork_portfolio_url · role · tags · strongest_for_summary

Three rows for Cornflower Health, Clinical AI Failure Modes, Harvard /
NASEM Proceedings. Content mirrors the Portfolio Doc.

## Doc contents

For each Doc, the operator should paste their existing corresponding
`.md` file content. You convert markdown to Doc formatting on the fly
(or in Mode B, output the markdown and let the operator paste).

### Entry Doc

Must include:
- Purpose
- Current Objective
- Folder navigation (hyperlinks to each subfolder and key Doc)
- Required-reading conditionals
- Standing rules
- **Apps Script bridge URL reference** (link to `_System/Bridge URL`)
- Session-start retrieval note (use bridge URL)
- Session-end write-back note (use bridge URL endpoints)

### Everything else

Transcribe verbatim from operator's source files.

## Execution protocol

1. Ask operator: Mode A (Google MCP) or Mode B (copy-paste)?
2. Ask operator to paste source files one at a time OR grant Google
   access if Mode A
3. For each file, produce target Doc/Sheet content
4. In Mode B: label each output block clearly
   (`Target: 01-Upwork/Profile`) so operator knows where to paste
5. Final: confirm Entry Doc has accurate navigation links

## Known friction to expect

- Markdown → Google Docs conversion loses some fidelity on complex
  tables; fall back to native Doc tables
- Apps Script bridge URL consent screen: first time operator hits
  the bridge endpoint from a Claude session, Google shows "unverified
  app" warning. Operator clicks "Advanced → Go to (script name)
  (unsafe)" — this is expected for a personal Apps Script, not a
  malicious prompt
- Portfolio maintenance duplication: operator must keep narrative Doc
  and Summary Sheet in sync manually (known 01 trade-off)

## After deployment

Operator should:
- Verify every Doc/Sheet populated correctly
- Test the bridge: call the deployment URL with
  `?action=read&file=entry` — should return the Entry content
- Run one working session in a Claude thread: e.g., "do a job search
  on upwork" — see how the architecture holds the session output
- Fill out `prototypes/_shared/phase-a-friction-01-google-docs.md` in
  the project-doc-skill repo
