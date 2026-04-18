project_slug: project-doc-skill
doc_type: phase-a-deployment-guide
updated_at: 2026-04-18

# Phase A — Live Deployment Handoff Guide

How to actually deploy prototypes 01 and 03 with your real job-search
content to generate live-friction signal for the Phase A decision.

---

## THREE-LAYER SEPARATION — READ FIRST

- **Meta project** — this repo.
- **Bootstrap skill** — a single markdown file.
- **Deliverable architecture** — what you're deploying live.

---

## What you're doing

For each of 01 and 03, create the actual deliverable architecture in
real accounts, populate it with job-search content, run one real
working session through it, note friction. Two artifacts come out:

- Live 01 Drive folder with Apps Script bridge
- Live 03 Notion page with MCP scope

Total operator time estimate: **~90 minutes** (45 per architecture;
cut to 30 each after first if you reuse patterns).

## Pre-deployment checklist

- [ ] Clone or open project-doc-skill locally so you can reference the
      captured state and deployment prompts directly
- [ ] Confirm you have a Google Drive personal account (for 01)
- [ ] Confirm you have a Notion personal account with Plus plan or
      free plan with ~10 blocks headroom (for 03)
- [ ] Install Notion MCP in Claude desktop if not already installed
      (for 03). One-time OAuth consent — scope to a specific page,
      not whole workspace
- [ ] Optional: install Google Drive MCP if available, or plan to do
      manual file creation (for 01)
- [ ] Plan ~45 min uninterrupted time per deployment

## Recommended order

**03 first, then 01.** Three reasons:
1. 03 is the paper-analysis winner for job-search shape
2. 03 is lighter setup (~30 min) — good momentum
3. You'll have a reference point when you hit 01's ugly portfolio
   doc/sheet tension — you'll know what the cleaner solution looked
   like in 03

## Deployment flow per architecture

Each deployment has two stages:

**Stage A — Manual scaffold (operator does in the target tool)**
Creates the empty folder / page structure. Something the LLM cannot
do for you because it requires UI clicks in the actual product.

**Stage B — Content generation (LLM does in a fresh Claude session)**
Paste the deployment prompt into a fresh Claude desktop session. The
prompt includes the captured state inline and tells Claude exactly
what to produce. For 03, Claude uses MCP to write directly into
Notion. For 01, Claude outputs content you copy-paste into the Docs /
Sheets you created in Stage A (or uses Google MCP if available).

The prompts live at:
- `prototypes/_shared/deployment-prompt-03-notion.md`
- `prototypes/_shared/deployment-prompt-01-google-docs.md`

## Friction notes template

After each deployment, fill out `_shared/phase-a-friction-03-notion.md`
and `phase-a-friction-01-google-docs.md` (create if not exist).
Capture:

- Actual setup time
- Any auth / consent screen that caused confusion
- Any point you were unsure what to click
- How it felt to paste/write content into the live surface
- How the one real working session went (time-to-useful, any regressions
  from v0.4)
- The shadow-client check: how would it look to a career coach if you
  shared it?

These notes become the real Pass 2 data. Commit them to this branch.

## After both are deployed

Start a fresh session on this repo's branch and paste the following
directive into the entry + handoff-thread-01.md context: *"Phase A
deployments complete. Friction notes committed. Write the Pass 2
verdict."*

I'll consume your notes, update the comparison matrix with real-world
scores, declare the v1 deliverable architecture default, and kick off
Phase B (skill rewrite).

## What NOT to do

- Don't try to deploy both architectures concurrently with the same
  captured state — do them sequentially so you can compare the
  experience, not just the artifact
- Don't skip the real working session inside each deployment — the
  artifact existing isn't the test; *using* it is the test
- Don't grant MCP workspace-root access in Notion. Page-scoped only.
  If the OAuth flow asks for a broader scope, stop and restart with
  the target page selected explicitly
- Don't commit secrets (Apps Script deployment URL, Notion integration
  token) to this repo. Keep them in Apps Script Properties and Claude
  desktop config respectively
