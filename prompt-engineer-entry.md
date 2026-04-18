project_slug: project-doc-skill
doc_type: orchestration-index
updated_at: 2026-04-17
url: https://cdn.jsdelivr.net/gh/squagwallow/project-doc-skill@main/prompt-engineer-entry.md

# Prompt Engineer Entry — project-doc-skill

You are auditing and refining the prompt and automation base for this
project. Read this document fully before touching any file. Work through
items one at a time. Propose changes before implementing. Update this index
when anything changes.

---

## Prompt Inventory

| Prompt | File | Status | Last tested | Notes |
|--------|------|--------|-------------|-------|
| build-new-project.skill | skill/build-new-project.skill.md | Needs testing | 2026-04-17 (v0.3, v0.4 chat, v0.5 drafted) | Tested in chat — needs Claude Code test for folder output |

---

## Automation Inventory

| Automation | File/Service | Trigger | Dependencies | Status |
|------------|--------------|---------|--------------|--------|
| _(none at initialization)_ | | | | |

---

## Orchestration Map

This project has a single activation layer — one skill document that is
the primary deliverable.

**skill/build-new-project.skill.md** is the skill prompt. It reads:
- The encyclopedia (fetched at runtime during prompt engineering steps):
  https://elaborate-belekoy-9e0eef.netlify.app/llm-design-encyclopedia
- User interview answers (provided live during execution)

It produces:
- A complete project repo folder written directly to disk (Claude Code)
- README.md, entry.md, prompt-engineer-entry.md, docs/, format specs,
  SOPs, user guide

**entry.md** is the bootstrap for this project's own documentation layer.
It points conditionally at:
- skill/build-new-project.skill.md (when working on the skill itself)
- thread-handoff-protocol.md (when working on handoff/compaction protocol)
- The encyclopedia (when auditing any template or prompt field)

**thread-handoff-protocol.md** is a standalone reference — not generated
by the skill, authored directly. Covers end-of-thread compaction,
thread-start retrieval gate, and mid-thread notes convention.

---

## Known Issues / Audit Flags

- Skill has only been tested in regular chat — Claude Code folder output
  not yet validated. Highest priority audit item.
- Notes block cadence needs real-world validation.
- Bootstrap roadmap execution paths specified but not tested.
- Full jsDelivr URLs now required in conditional reading — confirm
  this is working correctly in next test.

---

## Evaluation Notes

**2026-04-17 — v0.3 chat test (job-search)**
Worked: interview got useful information, structure solid, protocol docs
correctly identified.
Did not work: kept asking permission to proceed, generated scaffolding not
functional prompts.
Action: rewrote Part 3 to distinguish protocol vs content documents.

**2026-04-17 — v0.4 chat test (job-search)**
Worked: notes block correctly specified, revision mode clean, no-directive
default present, user guide with worked example, bootstrap roadmap has
execution paths, decision log captured behavioral decisions.
Did not work: still generating text blocks not a folder, ingest guidance
too vague, prompt-engineer-entry.md not confirmed in output.
Action: confirmed Claude Code as delivery mechanism, added ingest guidance,
added folder output instruction.

**2026-04-17 — v0.5 — not yet tested in Claude Code**

---

## Suggested Test Initiations

**build-new-project.skill — Claude Code test:**
1. Open Claude Code, paste skill, say: "I want to set up a new project.
   Let's go." — full interview flow.
2. Abbreviated: "New project: squid-research. Research project to collect
   and index LLM research threads about squids over time."
3. Project with integrations — confirm skill correctly scopes complexity.

**Edge cases:**
- Project with no reusable prompts — confirm skill doesn't force inventory.
- Project with 5+ prompts — confirm skill doesn't rush through inventory.
- User gives one-word answers — confirm skill asks follow-up not guessing.
- Confirm all conditional reading URLs are full jsDelivr paths, not relative.