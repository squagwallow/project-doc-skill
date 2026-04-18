project_slug: project-doc-skill
doc_type: prototype-index
updated_at: 2026-04-18
branch: claude/v1-design-collaboration-EWoKS

# V1 Prototyping Sandbox

Sandbox for testing candidate deliverable architectures against one shared
case study. Lives on branch `claude/v1-design-collaboration-EWoKS` so v1
work does not pollute `main` or v0 settled state.

---

## THREE-LAYER SEPARATION — READ FIRST

These three concepts are constantly conflated. They are not the same thing.

- **Meta project** — this repo (`project-doc-skill`). Legacy name stays.
  Lives in git forever. Where the work of building the bootstrap skill
  happens. Engineering project.
- **Bootstrap skill** — a single markdown file an LLM ingests. Always
  markdown. Legacy names: `build-new-project.skill.md`, `skill/`,
  "the skill." Its format is fixed; only its *instructions* evolve.
- **Deliverable architecture** — what the bootstrap skill tells the LLM
  to produce for the end client. May have nothing to do with git. May be
  a Notion workspace, a Google Drive folder, a HackMD note, something
  novel. This is what `prototypes/` is testing.

Everything in `prototypes/XX-*/` is a candidate **deliverable architecture**,
not a new skill and not a new meta project. The bootstrap skill stays one
file. The meta project stays this repo. Only the deliverable architecture
is under active design.

---

## Why this exists

V0 ships a single git repo per generated project. That works for
technical operators but fails for the paid-client use case: non-technical
clients do not want to interact with git. V1 is an overhaul of the
deliverable architecture only — interview, decomposition, and prompt
engineering stay roughly the same; what the skill generates at the end
changes.

V0 settled decisions (in `docs/decision-log.md`) are **not load-bearing
inside `prototypes/`**. Every v0 decision is treated as a legacy default
under active reconsideration. New v1 decisions are captured in
`_shared/v1-design-decisions.md` until the overhaul completes.

---

## Structure

```
prototypes/
  README.md                          this file
  _shared/
    glossary.md                      preferred ↔ legacy name map
    v1-design-decisions.md           append-only, v1 decisions only
    test-project-spec.md             the one case study all prototypes deliver
    comparison-matrix.md             scoring rubric
    captured-interview.md            (pass 1, generated once)
    zapier-mcp-orchestration-notes.md (cross-cutting, integration plane)
  00-markdown-git-baseline/          control; v0-shaped
  01-google-docs-apps-script/        Brief 2 #1
  02-hackmd-automation/              Brief 2 #2
  03-notion-mcp-bridge/              Brief 1 #1, demoted but testable
```

Each `XX-*/` folder contains:

- `setup.md` — accounts, permissions, pricing, realistic deployment cost
- `deployment-walkthrough.md` — step-by-step from zero to working
- `deliverable-architecture-spec.md` — what the skill should tell the
  LLM to produce (not the skill itself)
- `skill-delta.md` — the specific instruction changes the bootstrap
  skill would need to emit this architecture instead of v0's single-repo
  output
- `findings.md` — what worked, what broke, what surprised us

---

## Pass 1 vs Pass 2

**Pass 1 (solo, agentically):** Run the interview once against the case
study, capture the transcript to `_shared/captured-interview.md`, then run
generation four times — once per prototype — each consuming the same
captured interview. Produce the deliverable architecture as files in the
prototype folder. Score what is visible from artifacts alone.

**Pass 2 (together, live):** Operator deploys the 1–2 most promising
prototypes to real accounts. Measure deployment friction, auth setup,
MCP connection, sync reliability, client-side feel.

Pass 1 tests the *housing*. Pass 2 tests the *deployment*.

---

## What prototyping will and will not tell us

**Will tell us:** whether a given architecture can hold the project
management of a no-code engagement (design decisions, handoffs, status
visible to client, decision rationale, multi-session persistence).

**Will not tell us:** whether the architecture can host actual build
artifacts (custom scripts, code, deployment notes for engineering work).
That is the `skill-code-variant.md` scope, which is downstream sibling
work — not part of v1.

---

## Brief precedence

Two research briefs in the session. Brief 2 reframes the question from
"which platform" to "what operating pattern" and reranks accordingly.
**Brief 2 is the current research of record.** Brief 1 is kept as
historical input; its Notion-first ranking is specifically why prototype
03 is still on the slate despite Brief 2's demotion.

Ranking under Brief 2:
1. Google Docs + Apps Script → prototype 01
2. HackMD + automation → prototype 02
3. Zapier MCP as orchestration plane → cross-cutting notes, not its own
   prototype (it wraps any of the above)
4. Notion + bridge → prototype 03 (demoted; testing whether MCP resolves
   v0's prior rejection)
5. Gist backend + shell → dropped (viable only hidden behind a shell)

---

## Next

Pass 1 scaffolding is done when these five files exist:
README.md, glossary.md, v1-design-decisions.md, test-project-spec.md,
comparison-matrix.md. Then operator review before any prototype work.
