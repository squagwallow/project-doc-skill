project_slug: project-doc-skill
doc_type: prototype-skill-delta
prototype: 01-google-docs-apps-script
updated_at: 2026-04-18

# Skill Delta — Prototype 01

What changes in `build-new-project.skill.md` v0.5 to emit this
prototype's deliverable architecture.

---

## THREE-LAYER SEPARATION — READ FIRST

- **Meta project** — this repo.
- **Bootstrap skill** — a single markdown file.
- **Deliverable architecture** — Google Drive folder + Apps Script
  bridge.

---

## Changes from v0.5

### Part 3 — Generate (major rewrite)

Replace all FILE:/COMMIT MESSAGE: output with a two-stage generation:

**Stage A — Google Drive structure spec.** Output a structured
description of the folders, Docs, and Sheets to create. Operator
creates them manually first time, or pastes the spec into a provided
Apps Script setup helper.

**Stage B — Content generation per file.** For each Doc or Sheet,
generate the initial content. For Docs: produce markdown that operator
pastes into the Doc (Google Docs' markdown import handles formatting).
For Sheets: produce CSV-shaped header rows that operator pastes into
the Sheet.

**Stage C — Apps Script bridge script.** Output the bridge code (see
`generated/apps-script/`) with engagement-specific configuration at the
top (Drive folder ID, sheet IDs, etc.)

### Part 4 — New: Bridge deployment

Add a new Part 4 instructing operator how to deploy the Apps Script
Web App:
- Open Apps Script editor from any Sheet in the folder
- Paste the bridge script
- Deploy as Web App (execute as self, accessible by anyone with link)
- Copy deployment URL
- Provide URL back to the skill for session-start retrieval config

### Part 5 — New: Client share

Instruct operator to share the Drive folder with the client
(view + comment by default).

### Session-start protocol change

`entry.md` is now `Entry.gdoc` (Google Doc). Session-start retrieval
uses either:
- Apps Script `/read?file=entry` endpoint
- Direct Doc URL paste into the LLM session

### Session-end protocol change

Replace FILE:/COMMIT MESSAGE: with:
- Model produces list of intended file updates
- Operator reviews
- Model calls Apps Script `/write` endpoint with updates (or operator
  manually applies if they prefer)

## What does NOT change

- Interview (Part 1) — identical
- Decomposition (Part 1 adaptation) — identical
- Prompt inventory (Part 1.5) — identical
- Done condition (Part 1.75) — identical
- Propose-and-confirm (Part 2) — identical
- Two-pass draft pattern for writing prompts — identical
- Contrastive bad→good style guide requirement — identical

This reinforces the v1 insight: there is a natural
interview → captured-state → generation seam. Only the generation stage
differs per prototype.

## Instruction to the LLM running the skill

Run Parts 1–2 as written. In Part 3, emit:
1. Drive structure spec (folders + files)
2. Initial content for each Doc/Sheet (markdown for Docs, CSV for
   Sheets)
3. Apps Script bridge source
4. Deployment instructions for operator
