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

**Decision:** Right deliverable architecture is project-shape dependent,
not universal. V1 skill must choose between 01 (Google Docs) and 03
(Notion) based on interview signals — not hardcode one as the default
for all projects.
*Job-search paper retrofit flipped Pass 1's Lumen ordering: 03 wins for
operator-internal, structured-state-heavy projects; 01 wins for
narrative-heavy client-facing projects. The skill adapting to project
shape is the correct v1 behavior. Date: 2026-04-18*

**Decision:** Notion (03) is the v1 default deliverable architecture;
01 (Google Docs) is the explicit fallback when Notion is wrong for the
user or intended audience.
*Across the two case studies, 03 wins more often on operator-felt fit;
01 wins narrowly on mainstream client familiarity. Default-to-Notion
captures the stronger average; an explicit screening step during the
interview catches the cases where 01 is better. Date: 2026-04-18*

**Decision:** V1 skill interview includes an architecture-screening
step with a canonical script.
*Script draft: "Have you (or the intended user of this project) ever
used Notion before? Tell me what you think about it and whether you
feel open to using it as your primary interface on this project." If
pushback: "It sounds like Notion might be a little too involved for the
intended user. We can use Google Docs instead. For this project Notion
is slightly preferable for [reasons derived from the interview], but
Google Docs works well too — it's only a slight difference. Want me to
help you choose, or do you have a clear preference?" Final draft lives
in the v1 skill. Date: 2026-04-18*

**Decision:** V1 interview includes an ingestion branch:
"Is this a project you already have been working on somewhere else?"
If yes, skill requests current-state artifacts (paste, URL, upload) and
synthesizes captured state from them instead of conducting a fresh
interview. If no, standard interview flow.
*Promotes retrofit from an edge-case / Track C item to a core v1 flow.
Solves the "many projects need a dedicated backfill process" problem by
making ingestion a branch of the same skill. The downstream generation
stage is identical regardless of how captured state was produced — fresh
interview, ingestion, or mixed. Reinforces the interview → captured-state
→ generation seam as the skill's core architecture. Date: 2026-04-18*

---

## Late-thread-2 corrections (live deployment surfaced these)

These supersede or qualify earlier paper-analysis decisions. They came
from operator's actual interaction with Claude.ai's connectors during a
deployment attempt that timed out.

**Decision:** Claude.ai's Notion connector uses managed OAuth that
grants workspace-wide access; per-page scoping is NOT configurable
through the consumer connector UI.
*Verified by operator during attempted deployment. The "page-scoped MCP"
mitigation cited in Pass 1 findings for prototype 03 is not available
through Claude.ai's standard Notion integration. Page-scoping only
exists at the API layer via internal integration tokens, not through
managed OAuth. Date: 2026-04-18*

**Decision:** Switching Notion workspaces in Claude.ai's connector
requires deleting and re-adding the integration; concurrent
multi-workspace use is not supported.
*Verified by operator. This makes "dedicated workspace per engagement"
not viable for any operator with concurrent projects, multiple clients,
or any other Notion content. Tier 2 (managed OAuth + dedicated
workspace) collapses as a viable v1 default for anyone operating at
realistic scale. Date: 2026-04-18*

**Decision:** Tier 3 (local MCP server + Notion internal integration
token scoped to specific page IDs) is the only Notion path that
provides reliable per-page scoping at the API layer.
*Notion's official open-source MCP server can be run with an internal
integration token. Operator installs Node, runs the server, configures
Claude desktop's MCP config to point at it. Setup ~15 min/project; no
ongoing subscription. Engineering-adjacent — fits skill-code-variant
mandate more than v1 no-code mandate. Date: 2026-04-18*

**Decision:** Apps Script bridge architecture (prototype 01) has
structural per-project isolation via per-project deployment, but trades
tool-use enforcement for scoping rigor.
*Each project gets its own Apps Script Web App with its own URL and
PROJECT_CONFIG. LLM hits the bridge URL with action+file parameters;
bridge enforces what's accessible. But the LLM has to remember to call
the bridge — there's no tool-use enforcement like native MCP. Mode
shifts work via entry-doc conditional reading; write-backs should be
operator-initiated for safety. Date: 2026-04-18*

**Decision:** Bridge architectures (Apps Script, custom HTTP, etc.)
trade tool-use enforcement for scoping rigor; native MCP / connector
architectures (Zapier MCP, Pipedream, Make.com) trade subscription cost
for tool-use enforcement.
*This is the fundamental architectural axis. Bridges give tight scoping
via per-project deployment and free hosting, but orchestration depends
on entry-doc instructions and operator nudges. Native tool-use
architectures give reliable mode shifts and write-backs via registered
tool calls, but require subscription cost and per-tool definition work.
Date: 2026-04-18*

**Decision:** Render-layer one-way sync (e.g., git → Notion read-only
view) does NOT work for editable content like writing-sample catalogs
or job queues.
*If operator adds an item in the rendered surface, canonical store
doesn't see it; if operator adds in the canonical store, operator now
maintains two write paths. Drift is inevitable. One-way sync only works
for content the operator never edits in the render layer. Bidirectional
sync is hard and brittle. Render-layer sync is therefore not a viable
solution to the "git is canonical, Notion is pretty" architecture
sketch. Date: 2026-04-18*

**Decision:** Claude.ai's GitHub connector is read-only file-picker
behavior; it does NOT support seamless git write operations the way
Perplexity's GitHub connector does.
*Earlier mistaken claim in this session conflated Claude Code (CLI with
shell/Bash access to git) with Claude.ai's GitHub connector. They are
not the same. Claude Code can do real git operations because it has
shell access; Claude.ai's GitHub connector is for selecting files to
ingest into context. The "git as canonical orchestration layer" pattern
that works in Perplexity is not currently replicable in Claude.ai
without going through Claude Code. Date: 2026-04-18*

**Decision (supersedes earlier):** Notion (03) is NOT the v1 default
deliverable architecture. The earlier "Notion default with screening"
decision was based on paper-analysis assumptions about page-scoping
that turned out to be unavailable in Claude.ai's connector.
*The Notion path is now: tier 3 (local MCP + internal token) only,
treated as engineering-adjacent / sibling-variant scope. For non-
technical operator deployment, prototype 01 (Apps Script bridge) is
the more honest default — accepting bridge orchestration looseness as
the trade-off. Architecture choice is now actively unresolved pending
operator decision; see handoff-thread-02.md. Date: 2026-04-18*

**Decision:** Pass 1 paper analysis had a structural blind spot:
claimed tool capabilities without verification. Future v1 work must
verify capability claims against actual tool behavior in the operator's
specific account/version before treating them as load-bearing in
design.
*Specific failure mode this thread: prototype 03's "page-scoped MCP"
guardrail was presented in Pass 1 findings as a real Notion mitigation;
live deployment surfaced that the configuration path doesn't exist in
Claude.ai's connector. Process correction: capability claims get
flagged as "claimed in [source], unverified" until verified, and Pass 1
paper rigor must not be confused with verified rigor. Date: 2026-04-18*

**Decision:** No clean v1 deliverable architecture exists in the
current ecosystem (April 2026). All viable paths involve real
trade-offs. v1 must either pick a least-bad option and ship, or wait
for ecosystem maturation (better Claude.ai connectors, broader MCP
support, etc.).
*Three viable paths surfaced in thread 2: (1) ship pure Apps Script
bridge (prototype 01), accept orchestration looseness; (2) commit to
Perplexity-only operating mode for the architecture's lifetime, lose
multi-LLM flexibility; (3) wait. Architecture decision currently
deferred to fresh thread with consolidated truths. Date: 2026-04-18*

**Decision:** CLAUDE.md auto-loaded by Claude Code is the durable
mechanism for embedding standing instructions (three-layer separation,
notes block protocol, capability-claim verification rule). Previously,
these instructions lived only in entry.md and silently failed to fire
when Claude Code didn't read entry.md as bootstrap.
*Diagnosis from thread 2: thread notes block was specified in entry.md
but never executed because Claude Code has no automatic mechanism to
load entry.md. CLAUDE.md is the standard Claude Code convention; placing
the notes block protocol there ensures it loads on every session.
Date: 2026-04-18*
