project_slug: project-doc-skill
doc_type: prototype-skill-delta
prototype: 02-hackmd-automation
updated_at: 2026-04-18

# Skill Delta — Prototype 02

---

## THREE-LAYER SEPARATION — READ FIRST

- **Meta project** — this repo.
- **Bootstrap skill** — a single markdown file.
- **Deliverable architecture** — HackMD workspace with API-backed
  automation.

---

## Changes from v0.5

### Part 3 — Generate (moderate rewrite)

Replace FILE:/COMMIT MESSAGE: output with:

**Stage A — Note inventory.** Output the list of HackMD notes to
create, with slug, title, and phase tag.

**Stage B — Note content.** For each note, generate full markdown
content. HackMD is markdown-native so there is no lossy conversion;
the model's output pastes in 1:1.

**Stage C — Automation wrapper (optional).** Output a Cloudflare Worker
(or similar) source file that wraps HackMD API for LLM write-back.

**Stage D — Permissions instructions.** Explain to the operator how to
set note permissions: operator edit, client comment, link-only access.

### Part 4 — New: Invite client

Instruct operator to invite client to the HackMD workspace (client must
create a free HackMD account to access private notes).

### Session-start protocol change

Entry note has a permalink URL. Operator pastes it to bootstrap any
session. Alternatively, the automation wrapper provides a `/read`
endpoint.

### Session-end protocol change

Model produces updated note markdown. Two write-back paths:
- Manual: operator pastes into HackMD
- Automated: LLM calls wrapper PUT endpoint

## What does NOT change

Interview, decomposition, prompt inventory, done condition, propose-
and-confirm, writing patterns, style guides — all unchanged.

Reinforces the interview → captured-state → generation seam.

## Instruction to the LLM running the skill

Run Parts 1–2 unchanged. In Part 3, emit:
1. Note inventory (slugs, titles, phase tags)
2. Full markdown content for each note
3. Optional Cloudflare Worker source
4. Permissions + sharing instructions for operator

The markdown content should use HackMD conventions where relevant:
- YAML front-matter for metadata
- `[:TOC]` macro if the note is long
- Tag syntax `###### tags: phase-audit, bottleneck`
