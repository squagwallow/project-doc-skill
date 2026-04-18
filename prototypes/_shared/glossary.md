project_slug: project-doc-skill
doc_type: glossary
updated_at: 2026-04-18

# Glossary — Preferred Terms and Legacy Aliases

Terminology migration in progress. Preferred terms are new working
language; legacy aliases stay attached during transition until a full
rename retrofit is done. Both refer to the same thing.

---

## THREE-LAYER SEPARATION — READ FIRST

These are three different concepts that are repeatedly mingled. They are
not the same thing.

- **Meta project** — this repo; where the work of building the skill
  happens; lives in git.
- **Bootstrap skill** — a single markdown file an LLM ingests; its
  format is fixed.
- **Deliverable architecture** — what the skill tells the LLM to
  produce for the end client; may or may not involve git; actively
  being prototyped.

---

## Terminology map

| Preferred term | Legacy / repo terms | Meaning |
|---|---|---|
| Meta project | `project-doc-skill`, "the skill project," "the repo" | The project that builds and improves the bootstrap skill. Lives in git. |
| Bootstrap skill | `build-new-project.skill.md`, `skill/`, "the skill," "the generator" | The skill product being created. A single markdown file. |
| Deliverable architecture | "project system," "output repo," "generated folder," "documentation repo," "the folder the skill makes" | The system architecture of what the skill produces for the end client. |
| Operator | "the user," "the freelancer," "me" in existing docs | The person running the bootstrap skill to create a deliverable architecture for a client engagement. |
| Client | "end user" in some existing docs | The person the operator is doing paid work for. Non-technical by default. |
| Client-facing surface | "the doc," "the workspace" | The part of the deliverable architecture the client can see and edit. |
| Canonical state | "settled memory," "the source of truth" | The authoritative record of project memory. May be human-readable, model-readable, or both. |
| Write-back bridge | "the bridge," "the sync layer" | Thin automation path that sends model updates into the canonical state. |
| Integration plane | "automation fabric," "orchestration layer" | The layer that moves state between tools and LLM products (e.g., Zapier MCP). |
| Hidden backend | "the archive," "operator-only layer" | Persistence infrastructure the client does not interact with directly (e.g., a git mirror). |
| Skill-code-variant | (future) | Sibling skill that inherits v1 deliverable architecture and adds a git codebase for code-dependent work. Downstream of v1. |

---

## Rules during transition

1. Preferred terms are used in all new artifacts in `prototypes/`.
2. Legacy names must be preserved wherever they already appear in v0
   docs — no find-and-replace renaming of v0 until the retrofit pass.
3. When a preferred term is used for the first time in any new doc,
   reference its legacy alias at least once so readers can map old
   language to new.
4. Full rename retrofit happens after v1 overhaul settles.

---

## What is NOT in this glossary

- V0 operating terms that still work as-is (`entry.md`, `decision-log.md`,
  `handoff-log.md`, `work-log.md`) — these are doc names, not conceptual
  layers, and carry forward unchanged.
- V1 candidate architecture names (Notion, Google Docs, HackMD) — these
  are platform names, not internal terminology.
