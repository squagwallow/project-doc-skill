project_slug: project-doc-skill
doc_type: prototype-deployment-walkthrough
prototype: 02-hackmd-automation
updated_at: 2026-04-18

# Deployment Walkthrough — Prototype 02

---

## THREE-LAYER SEPARATION — READ FIRST

- **Meta project** — this repo.
- **Bootstrap skill** — a single markdown file.
- **Deliverable architecture** — HackMD workspace + thin automation.

---

## Steps

1. Operator creates HackMD team workspace `lumen-agency-redesign`
2. Generates API token in HackMD account settings
3. Opens Claude Code; runs the modified bootstrap skill
4. Skill generates content for each note (Entry, Current State,
   Decision Log, Handoff Log, Work Log, three Bottleneck Finding notes,
   Discovery Summary, Week 1 Update)
5. Operator creates each note in HackMD and pastes content (or the
   skill uses HackMD API to create them programmatically if the
   operator has pasted the API token into the skill session)
6. Operator sets note permissions: signed-in users can read; operator
   and client can comment; operator can edit
7. Operator shares workspace link with Priya
8. Optional: operator deploys a small Cloudflare Worker (or similar)
   that wraps HackMD's API for session write-back; stores worker URL
   + API token

**Approximate step count: 7 (core), 8 with automation wrapper**
**Accounts operator must create: 1 (HackMD, if new)**
**Accounts client must create: 1 (HackMD free, for private-note
access)**
**Auth/OAuth complexity: low (API token pasted into automation config
once)**
**Time from zero to usable: ~25 minutes first time**

## Where the client fits

Priya logs into HackMD (once, free account), opens the workspace link,
sees the list of notes organized by engagement phase. Clicks any note
to read. Comments inline. Simpler than Google's permission dance; more
account-creation friction than Drive.

## Session-start retrieval path

- HackMD public/permalink URL paste into LLM session
- HackMD API `GET /notes/{id}` via automation wrapper
- Claude can fetch published permalinks directly via URL

## Session-end write-back path

- Model produces updated markdown for a specific note
- Operator either:
  (a) pastes into HackMD note directly, or
  (b) calls the automation wrapper endpoint which PUTs the update to
      HackMD API

## Multi-client isolation

Good if on paid Team tier with separate workspaces per engagement.
Acceptable on Prime tier with per-note permissions — but workspace
bleed risk is real if operator is sloppy with note organization.
Weaker than 01's folder-scoped ACL.

## First-engagement-vs-template friction

HackMD has "template" note support. Operator creates a template
workspace with empty notes in the right shape; duplicates for each
engagement. Cut to ~10 minutes.
