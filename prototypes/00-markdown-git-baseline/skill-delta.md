project_slug: project-doc-skill
doc_type: prototype-skill-delta
prototype: 00-markdown-git-baseline
updated_at: 2026-04-18

# Skill Delta — Prototype 00

What changes in `build-new-project.skill.md` v0.5 to emit this
prototype's deliverable architecture.

---

## THREE-LAYER SEPARATION — READ FIRST

- **Meta project** — this repo.
- **Bootstrap skill** — a single markdown file (v0.5).
- **Deliverable architecture** — git repo with markdown docs. This
  prototype.

---

## Changes from v0.5

**None required.** This prototype is the v0.5 skill running as-is. It
is the baseline.

The skill already produces a git-ready markdown repo via Claude Code
FILE:/COMMIT MESSAGE: blocks. No delta needed.

## Instruction to the LLM running the skill

Run the skill exactly as written. Produce the standard output:
- `README.md`
- `entry.md`
- `prompt-engineer-entry.md`
- `thread-handoff-protocol.md`
- `skill/` (not applicable — only one skill variant exists; skip)
- `docs/current-state.md`
- `docs/decision-log.md`
- `docs/handoff-log.md`
- `docs/work-log.md`
- `docs/todo.md`
- `docs/user-guide.md`

Client-facing deliverables (Weekly Client Update) are generated as
additional markdown files in `docs/client-updates/` and must be exported
to a client-visible channel manually — this is a known gap this
prototype surfaces.
