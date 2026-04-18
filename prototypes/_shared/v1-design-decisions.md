project_slug: project-doc-skill
doc_type: v1-design-decisions
updated_at: 2026-04-18

# V1 Design Decisions

Append-only. V1-overhaul scope only. V0's `docs/decision-log.md` does
not apply inside the overhaul; this file is where v1 decisions live
until the overhaul completes and a unified decision log is retrofitted.

Format: "Decision: rationale in one sentence. Date: [date]"

---

## THREE-LAYER SEPARATION — READ FIRST

- **Meta project** — this repo; lives in git.
- **Bootstrap skill** — a single markdown file.
- **Deliverable architecture** — what the skill produces for the client;
  under active v1 design.

All decisions below apply to the deliverable architecture unless otherwise
specified.

---

## Decisions

**Decision:** V1 and `skill-code-variant` are sibling skills, not a
parent/child pair.
*Engagements scope their code needs at kickoff; sibling variants avoid
mid-engagement forking friction and keep the client-facing surface
identical across both variants. Date: 2026-04-18*

**Decision:** Both skill variants share the same client-facing surface;
the code variant adds a git backend as an operator-side extension with
gated LLM orchestration (accessed intentionally for maintenance or
troubleshooting, not as part of daily flow).
*Client experience stays consistent whether or not code is involved;
code is an operator-side implementation detail. Date: 2026-04-18*

**Decision:** V1 prototyping is scoped to no-code deliverable
architectures only. Code-heavy work is downstream sibling scope.
*Keeps v1 shippable; prevents conflating two different design problems.
Date: 2026-04-18*

**Decision:** Brief 2 supersedes Brief 1 as the current research of
record for deliverable architecture ranking.
*Brief 2 reframes the question from "which platform" to "what operating
pattern," which surfaces cross-LLM usability and non-technical client
comfort as the real axes. Brief 1 kept as historical input. Date:
2026-04-18*

**Decision:** V0 settled decisions do not constrain v1 prototyping.
*V1 is a structural overhaul; treating v0 decisions as load-bearing would
prevent the overhaul from exploring the design space. V0 decisions
continue to apply to v0 work. Date: 2026-04-18*

**Decision:** Terminology is migrating to preferred terms (meta project,
bootstrap skill, deliverable architecture) with legacy aliases preserved
until a full rename retrofit.
*Controlled terminology migration keeps continuity while introducing
sharper working language. Full retrofit deferred until v1 settles. Date:
2026-04-18*

**Decision:** The bootstrap skill has a natural
interview → captured-state → generation seam.
*This seam is what makes deliverable architecture swappable — same
interview can feed different generation stages. Worth explicit design
in v1 so the skill can produce any chosen architecture from the same
captured state. Date: 2026-04-18*

**Decision:** Prototyping uses one shared case study (Lumen Creative
marketing agency, week 1 of a 4-week no-code systems-architecture
engagement). All prototypes deliver against the same case.
*Apples-to-apples comparison; variance comes from architecture choices,
not case variance. Date: 2026-04-18*

**Decision:** Pass 1 runs the interview once and runs generation four
times against the same captured interview.
*The interview is the same across prototypes; only the generation stage
differs. Four interview runs would waste tokens and introduce variance
in the test inputs. Date: 2026-04-18*

**Decision:** Zapier cost is weighted in the matrix but not
disqualifying.
*Zapier MCP is common and operator-affordable; per-prototype cost impact
is tracked so the final recommendation reflects real ongoing spend.
Date: 2026-04-18*

**Decision:** Prototype 03 (Notion) is included despite v0's prior
Notion rejection.
*V0 rejected Notion for workspace bleed and pre-MCP integration
awkwardness; MCP materially changed that stack. Prototype 03 is the
test that either validates the v0 rejection or produces a cause to
override it. Date: 2026-04-18*

**Decision:** Prototype 00 (markdown/git baseline) is the control, not a
candidate.
*V0 shape is the benchmark everything else must beat on non-technical
client usability. Keeping it in the slate makes the comparison honest.
Date: 2026-04-18*

**Decision:** Zapier MCP as integration plane is evaluated as a
cross-cutting pattern, not as its own prototype.
*It wraps any storage choice rather than competing with one; a separate
prototype would mis-frame it as a storage alternative. Date: 2026-04-18*

**Decision:** `work-log.md` is a meta-project-only file, not a default
file in generated deliverable architectures.
*The meta project benefits from a cross-project professional work
journal for case studies and pitches; generated deliverables optimize
for a single project's lifespan and audience. Surfaced by job-search
retrofit (v0.4-era output correctly lacks work-log). The skill's output
shape is smaller than the meta project's own shape — this is correct
and intentional. Date: 2026-04-18*

**Decision:** Retrofit is a first-class flow for v1, not an edge case.
*Job-search has already been retrofitted once (v0 → v0.4) and will be
retrofitted again (v0.4 → v1). Existing operator projects need a
reliable path to adopt new deliverable architecture without rerunning
the interview stage. This validates the interview → captured-state →
generation seam and makes "retrofit mode" a v1 skill feature candidate.
Date: 2026-04-18*
