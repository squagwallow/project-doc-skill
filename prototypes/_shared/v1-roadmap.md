project_slug: project-doc-skill
doc_type: v1-roadmap
updated_at: 2026-04-18

# V1 Roadmap

From Pass 1 complete → V1 shipped → sibling variants.

---

## THREE-LAYER SEPARATION — READ FIRST

- **Meta project** — this repo. Lives in git. Where the work happens.
- **Bootstrap skill** — a single markdown file. Format fixed.
- **Deliverable architecture** — what the skill produces for the end
  client. V1's focus.

---

## Current state

**Pass 1 complete.** Four prototypes built, scored, recommendation
made: promote 01 (Google Docs + Apps Script) and 03 (Notion + MCP) to
Pass 2. Drop 02 (HackMD). Keep 00 as control / `skill-code-variant`
basis.

**Blocker on main path:** Pass 2 requires operator's real accounts and
live deployment. Cannot proceed solo.

---

## Phase A — Pass 2: Live deployment bake-off

**Goal:** head-to-head 01 vs. 03 against real accounts. Pick a winner.

**Who does what:**
- Operator: creates the Google Drive folder (01) and the Notion page
  (03), installs Apps Script and MCP, grants access
- Assistant: provides the exact setup checklists, bridge code, MCP
  scope configurations, and a structured post-deployment review doc
- Operator: runs one simulated or real session through each, notes
  friction
- Assistant: consumes friction notes, produces updated scores and a
  verdict

**What gets measured (that Pass 1 couldn't):**
1. Actual setup time (vs. paper estimate of 45 min / 30 min)
2. OAuth / consent screen reality (Google's "unverified app" warning,
   Notion's MCP scope prompt)
3. Cross-LLM reach with real accounts (Claude MCP → Notion, ChatGPT
   connector → Drive, etc.)
4. Client-side opening experience (operator opens the shared link
   incognito as if they were the client)
5. Write-back latency and reliability on 5–10 real session turns
6. Template duplication time for engagement 2
7. Scope discipline (for 03): does page-scoped MCP hold or leak

**Deliverable:** `_shared/pass-2-results.md` + updated comparison matrix.

**Estimated effort:** ~3–4 hours operator time (1.5h per prototype
setup + ~1h of simulated session per prototype + review time).

**Decision gate:** pick v1 deliverable architecture. Cannot proceed to
Phase B without this.

---

## Phase B — V1 skill rewrite

**Goal:** rewrite `build-new-project.skill.md` to emit the v1-winning
deliverable architecture by default. This is the real v1 product.

**What changes in the skill:**
- Part 3 (Generate) rewritten per the winning prototype's `skill-delta.md`
- Template-duplication protocol added for engagement 2+
- Scope guardrail enforcement added (especially if 03 wins)
- New pre-generation check: does the operator have the prerequisite
  accounts? If not, skill walks them through first-time setup.
- User guide rewritten to reflect new deployment reality

**What stays the same:**
- Parts 1, 1.5, 1.75, 2 (interview, prompt inventory, done condition,
  propose-and-confirm)
- The interview → captured-state → generation seam (now a first-class
  design feature, explicitly named in the skill)

**Who does what:**
- Assistant: drafts v1 skill in full, including all prompt engineering
  for the winning architecture
- Operator: reviews the v1 draft, tests it in Claude Code against a
  fresh test case
- Assistant: iterates based on test feedback

**Deliverable:** `skill/build-new-project.skill.md` v1.0 (replacing
v0.5), with updated `prompt-engineer-entry.md` and user guide.

**Estimated effort:** ~2–3 sessions of assistant drafting + 1 test
session + 1 iteration session.

---

## Phase C — Terminology retrofit + meta project update

**Goal:** bring the meta project docs up to v1 reality. Legacy aliases
drop; preferred terms become primary.

**What changes in the meta project:**
- `entry.md` updated with v1 context, new roadmap, new current
  objective
- `docs/decision-log.md` absorbs and supersedes
  `prototypes/_shared/v1-design-decisions.md` (append, mark v0 decisions
  that are now superseded)
- `docs/current-state.md` rewritten
- `docs/handoff-log.md` gets a v1-shipped entry
- `README.md` updated for v1 terminology
- `docs/user-guide.md` rewritten
- Glossary (`prototypes/_shared/glossary.md`) may stay or be promoted
  to `docs/glossary.md`
- Dropped prototypes (02) and losing candidate of 01 vs. 03 get
  archived to `prototypes/_archive/` with a note explaining why

**Who does what:**
- Assistant: drafts all updates
- Operator: reviews and approves before commit

**Deliverable:** meta project reflects v1 state coherently. No stale v0
references except where intentionally archived.

**Estimated effort:** ~1 session.

---

## Phase D — V1 ship + first real deployment

**Goal:** use the v1 skill on a real paid engagement. Not a test.

**Who does what:**
- Operator: books a real engagement (Upwork, existing client,
  whatever). Runs the v1 skill in Claude Code. Deploys the deliverable
  architecture. Uses it for the full engagement.
- Assistant: on-call for troubleshooting, iteration notes, and
  capturing failure modes

**What gets captured:**
- Every skill misfire → fix candidate
- Every deployment friction → skill-delta refinement
- Every handoff that worked cleanly → validation
- Every handoff that didn't → root cause + redesign

**Deliverable:** v1.1 refinements based on real usage. V1 declared
"working" when one real engagement ships end-to-end without the skill
blocking.

**Estimated effort:** duration of a real engagement (2–6 weeks
depending on booking).

---

## Phase E — Sibling variant: `skill-code-variant.md`

**Goal:** second skill that inherits v1's client-facing surface and
adds a git backend for code-dependent engagements.

**Who does what:**
- Assistant: drafts `skill-code-variant.md` as a superset of v1:
  same interview, same generation, plus git-repo scaffolding for code
  artifacts and a gated LLM orchestration pattern for the backend
- Operator: tests against a real code-heavy engagement (Vendasta-style)
- Assistant: iterates

**What it reuses from v1:**
- Entire interview stage
- Entire captured-state format
- The winning deliverable architecture's client-facing surface
- Subcontractor-scope pattern (already proven useful in Pass 1)

**What it adds:**
- Git repo creation and structure (the 00 baseline shape becomes its
  hidden backend)
- Explicit parent-child linking between the client surface and the
  code repo
- Gated LLM access pattern: code repo is read/write only on intentional
  operator directive, not in daily session flow

**Deliverable:** `skill/skill-code-variant.md` v1.0. Meta project's
orchestration index lists both skills with guidance on when to use
which.

**Estimated effort:** ~2 sessions drafting + 1 real-engagement test.

---

## Phase F — Track C / later work

After v1 and sibling variant ship, the existing Track C items from v0
become next:

- **Personal Context Layer** — one central user-level doc loaded
  conditionally by any project. Design still open.
- **Retrofit / versioning protocol** — how to move existing v0-shape
  projects into v1-shape deliverable architectures. Useful for
  operator's own existing projects (including this meta project in
  any future overhaul).
- **Agentic prompt testing** — automated skill-drift tests so future
  skill iterations don't silently regress.
- **MCP write-tool automation** — deeper integration patterns once the
  ecosystem matures.

These are not on the critical path for v1 ship. They are the next
horizon after v1 is stable.

---

## Critical-path summary

```
Pass 1 complete ← you are here
   │
   ▼
Phase A — Pass 2 live deployment bake-off (blocked on operator)
   │
   ▼
Phase B — V1 skill rewrite
   │
   ▼
Phase C — Meta project terminology retrofit
   │
   ▼
Phase D — V1 ship + first real engagement
   │
   ▼
Phase E — Sibling skill-code-variant
   │
   ▼
Phase F — Track C items (Personal Context, retrofit, agentic testing)
```

---

## Immediate next action

Operator decides whether Pass 2 runs against the Lumen synthetic case
study (safe, no real client) or a real first engagement (more
friction signal, more risk). Either is defensible:

- **Synthetic:** cleaner comparison, no real-client stakes, faster
  iteration
- **Real:** catches friction the synthetic case cannot see (client
  quirks, real deadlines, actual cross-LLM usage patterns)

Assistant recommends **synthetic for Pass 2, real for Phase D.** That
keeps the decision-gate clean and moves the real-stakes risk to Phase
D when the skill is already refined.

---

## What blocks what

- Phase A blocks everything after it (the deliverable architecture
  choice drives Phase B skill design)
- Phase B blocks Phase C (terminology retrofit is easier once v1 skill
  is locked)
- Phase C and Phase D can run in parallel if the retrofit is drafted
  before Phase D's first engagement begins
- Phase E depends only on Phase B (the sibling variant needs v1 to
  inherit from)
- Phase F has no hard dependencies on Phases A–E; can start any time
  but has low priority until v1 is stable
