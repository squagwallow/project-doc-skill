project_slug: project-doc-skill
doc_type: phase-a-deployment-prompt
target_prototype: 01-google-docs-apps-script
target_project: job-search
updated_at: 2026-04-18

# Deployment Prompt — Prototype 01 (Google Docs + Apps Script) for job-search

Pasteable into a fresh Claude desktop session (or Claude Code session).
Everything below the divider is the prompt itself.

---

## Stage A — Scaffold via Apps Script (~5 min)

The bridge.gs file now includes a `setupScaffold()` function that
creates the entire folder tree, empty Docs, and empty Sheets in one
call. No manual file creation needed.

1. Go to [script.google.com](https://script.google.com) → New project
2. Name the project something memorable (e.g., "Job Search Bridge")
3. Delete the default `Code.gs` contents; paste the entire contents of
   `prototypes/01-google-docs-apps-script/generated/apps-script/bridge.gs`
4. Review the `PROJECT_CONFIG` block at the top — the default is
   configured for job-search. Edit only if deploying a different
   project
5. Click **Run** → select function `setupScaffold` → approve the
   one-time OAuth consent (Google will show an "unverified app"
   warning; click Advanced → Go to [project name] (unsafe) — this is
   expected for personal Apps Scripts)
6. Check **Execution log** (View menu → Logs or Cmd/Ctrl+Enter): you
   should see one line per folder, doc, and sheet created
7. Verify in Drive: a new "Job Search" folder exists with the full
   tree inside
8. **Deploy** the script as Web App:
   - Deploy → New deployment → Type: Web app
   - Execute as: Me
   - Who has access: Anyone with the link
   - Click Deploy, copy the deployment URL
9. Open the root "Job Search" folder in Drive → find the `_System`
   subfolder → create a new Doc called `Bridge URL` and paste the
   deployment URL inside
10. Scaffold complete. Paste everything below the divider into a fresh
    Claude (or Perplexity) session to begin Stage B

**What the setup function does:**
- Creates the root folder if it doesn't exist
- Creates all subfolders (supports nested paths)
- Creates all empty Docs in their right folders
- Creates all empty Sheets in their right folders
- Stores every file's ID in Script Properties so the runtime bridge
  can resolve files by name automatically — no manual ID pasting
- Idempotent: running it again picks up existing files rather than
  creating duplicates

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
