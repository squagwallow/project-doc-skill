project_slug: project-doc-skill
doc_type: handoff
generated: 2026-04-18
thread_focus: Phase A deployment attempt + architecture iteration that
  surfaced real tool-capability constraints

# HANDOFF: Phase A surfaced architectural constraints; v1 architecture choice deferred

thread_summary: Attempted Phase A live deployment; live testing of
Claude.ai's connectors surfaced fundamental tool-capability constraints
that invalidated several Pass 1 paper-analysis assumptions. Architecture
choice for v1 deliverable architecture is now actively unresolved
pending operator decision among three viable least-bad paths.

NOTE: This handoff intentionally exceeds the 400-word handoff-protocol
target because thread 2 produced a structurally important set of
findings that a fresh thread cannot pick up cleanly without the full
narrative. Subsequent handoffs should return to the 400-word target.

---

## THREE-LAYER SEPARATION — READ FIRST

- **Meta project** — this repo. Lives in git.
- **Bootstrap skill** — a single markdown file. Format fixed.
- **Deliverable architecture** — what the skill produces. Under active
  v1 design.

---

## Current Objective

Operator must pick a least-bad architecture path for v1 deliverable
architecture, given that no clean option exists in the current
ecosystem (April 2026). Decision blocks Phase B (skill rewrite).

---

## Major beats of thread 2 (chronological)

1. **Started:** Pass 1 was complete (paper analysis recommended 01 +
   03 to Pass 2). Goal was Phase A live deployment of both prototypes
   against operator's existing job-search project.

2. **Captured state extraction:** Operator pasted contents of
   job-search repo files into thread (jsDelivr was blocked from this
   sandbox). Produced
   `prototypes/_shared/captured-state-job-search.md` — a synthesized
   captured-interview equivalent derived from real artifacts.

3. **Paper retrofits:** Wrote
   `prototypes/01-google-docs-apps-script/retrofit-job-search/` and
   `prototypes/03-notion-mcp-bridge/retrofit-job-search/` plus
   `prototypes/_shared/retrofit-comparison-job-search.md`. Comparison
   concluded 03 (Notion) edged 01 for job-search shape; this conclusion
   is now invalidated by later findings.

4. **First wave of v1 decisions logged:** Notion as default with
   architecture-screening interview script; retrofit as core interview
   branch; project-shape-dependent architecture choice. All committed.

5. **Coaching prompt + deployment prompts:** Wrote
   `step-by-step-deployment-coach.md`,
   `deployment-prompt-01-google-docs.md`,
   `deployment-prompt-03-notion.md`, and
   `phase-a-deployment-guide.md`. Operator was set up to deploy via
   coached fresh Claude desktop session.

6. **Apps Script setup function:** Operator pointed out Apps Script was
   already baked into 01 and the manual scaffold was unnecessarily
   manual. Extended `bridge.gs` with `setupScaffold()` function that
   creates folders, Docs, Sheets, and stores file IDs in Script
   Properties — making 01 Stage A drop from ~15 min clicking to ~5 min
   paste-and-run.

7. **Operator attempted live deployment.** Timed out before completion,
   but live interaction with Claude.ai's Notion connector surfaced
   findings that invalidated Pass 1's prototype 03 design.

8. **CRITICAL FINDING #1:** Claude.ai's Notion connector uses managed
   OAuth that grants workspace-wide access. Per-page scoping is not
   configurable through the consumer connector UI. The "page-scoped MCP"
   guardrail Pass 1 cited as the v0-rejection mitigation does not exist
   at the consumer surface.

9. **CRITICAL FINDING #2:** Switching Notion workspaces in Claude.ai's
   connector requires delete-and-readd. Concurrent multi-workspace use
   is not supported. This means dedicated-workspace-per-engagement
   isolation only works for operators with exactly one Notion workspace
   ever — which is not viable at any realistic scale.

10. **Operator did independent Perplexity research** and brought back a
    much sharper picture: Notion internal integration tokens DO support
    per-page scoping at the API layer; managed OAuth (used by Claude.ai
    and Perplexity consumer connectors) is the layer that loses this
    capability. Per-page scoping is achievable via local MCP server +
    internal integration token (tier 3).

11. **Spec'd prototype 04 (unified bridge):** Apps Script bridge
    extended with Notion API handlers via UrlFetch, hybrid Google + Notion
    backends per entity, dashboard page in Notion. Operator approved the
    plan. Started architectural work.

12. **CRITICAL FINDING #3:** Bridge architectures (Apps Script, custom
    HTTP) trade tool-use enforcement for scoping rigor. The LLM has to
    remember to call bridge URLs based on entry-doc instructions; mode
    shifts may need operator nudges; write-backs should be
    operator-initiated for safety. Native MCP / connector
    architectures (Zapier MCP, Pipedream, Make.com) give tool-use
    enforcement but cost subscription.

13. **Operator pulled back to original Brief options.** Re-ranked
    Zapier MCP (originally treated as cross-cutting glue) as a real
    architectural alternative. Considered Pipedream, Make.com,
    self-hosted n8n, custom Cloudflare Worker MCP. None were prototyped.

14. **Operator's reframe:** "GitHub-centralized architecture worked in
    v0 — could it work as v1 if Claude had proper git MCP write
    capability the way Perplexity does?"

15. **CORRECTION:** I conflated my own behavior (Claude Code with shell
    access to git via Bash) with Claude.ai's GitHub connector
    capability. They are not the same. Claude.ai's GitHub connector is
    read-only file-picker behavior. Perplexity's git is meaningfully
    better but ties operator to Perplexity.

16. **CRITICAL FINDING #4:** One-way render-layer sync (e.g., git
    canonical → Notion read-only view) does not work for editable
    content like writing-sample catalogs or job queues. Catalog drift
    is inevitable. Render-layer sync therefore can't rescue
    git-centralized architecture for the active-content use case.

17. **Compaction.** Operator noted I was getting fumey from too many
    iteration turns; called for thread compaction. This handoff is the
    output.

---

## Settled Decisions (added or superseded in thread 2)

See `prototypes/_shared/v1-design-decisions.md` for full text. Summary:

- **Tier 2 (managed OAuth + dedicated workspace) is dead** as a v1
  default. Workspace-switching pain kills it at scale.
- **Tier 3 (local MCP + internal integration token) is the only real
  Notion path** — engineering-adjacent, fits skill-code-variant scope.
- **Bridge architectures have loose orchestration** as a structural
  trade-off for tight scoping.
- **Render-layer one-way sync doesn't work** for editable content.
- **Claude.ai's GitHub connector ≠ Claude Code's git capability.**
- **Notion (03) is NOT the v1 default** anymore (supersedes earlier
  Notion-default decision).
- **No clean v1 architecture exists today.** v1 must pick a least-bad
  path or wait.
- **Pass 1 paper analysis had a structural blind spot:** unverified
  tool capability claims. Future work must verify before claiming.
- **CLAUDE.md is now the durable mechanism** for embedding standing
  instructions (three-layer separation, notes block, capability
  verification rule).

---

## Three viable paths for v1 architecture (operator decision)

1. **Ship pure Apps Script bridge (prototype 01) for both job-search
   and future client work.** Accept bridge orchestration looseness as
   the trade-off. Free, multi-LLM compatible (any LLM can hit URL),
   scoping clean via per-project deployment. The "least-bad and
   actually deployable now" option.

2. **Commit to Perplexity-only as operating mode.** Use Perplexity's
   seamless git write for everything. Lose multi-LLM flexibility; tie
   operating model to one tool. Probably fastest to working state.

3. **Wait.** Ecosystem is moving fast (Claude.ai connector improvements,
   broader MCP support). v1 might just need another quarter of
   ecosystem maturation. Continue using v0 (markdown repo via Claude
   Code) until then.

Less recommended (but possible):

4. **Build prototype 04 (unified bridge) anyway.** Compounds the bridge
   orchestration looseness rather than solving it; not recommended
   given what we now know.

5. **Subscribe to Zapier MCP / Pipedream / Make.com.** Solves
   orchestration via tool-use registration; costs subscription.
   Probably right answer for v1 but operator hasn't committed to the
   spend yet.

---

## Open Questions (for fresh thread)

- Which of the three viable paths does operator commit to?
- If path 1 (ship 01): does operator want to actually deploy job-search
  on it now and capture friction notes?
- If path 3 (wait): what's the target for "ecosystem matured enough"?
- Does operator want to test Pipedream or Make.com to verify their MCP
  capability claims before committing to anything?
- Is operator open to building a custom Cloudflare Worker MCP server
  (free, full control, requires ~200-300 lines of JS) as a fifth
  prototype?

---

## Critical Context

- Active branch: `claude/v1-design-collaboration-EWoKS`
- All thread-2 work is committed and pushed
- `CLAUDE.md` was added at repo root to ensure standing instructions
  (notes block, three-layer separation, capability-verification rule)
  fire automatically in future Claude Code sessions
- v0 settled decisions are NOT load-bearing inside `prototypes/`; v1
  decisions live in `v1-design-decisions.md`
- Earlier handoff `handoff-thread-01.md` is now superseded by this one
- Apps Script bridge code (`bridge.gs`) is real, deployable, tested in
  code; operator has not yet successfully deployed it to live Drive
- Phase A live deployment was attempted and timed out; not completed
- Prototype 04 (unified bridge) was spec'd but not built — and is no
  longer the recommended path

---

## Do Not Re-Open / Do Not Retry

- Notion as v1 default with managed OAuth + dedicated workspace
  isolation. Verified non-viable at scale.
- "Page-scoped MCP" as a Pass 1 mitigation. Doesn't exist in
  Claude.ai's connector.
- One-way render sync as the answer to git-canonical + Notion-pretty
  architecture. Breaks for editable catalogs.
- Claude.ai's GitHub connector as Perplexity-equivalent. It isn't.
- Building prototype 04 unified bridge as currently spec'd. Compounds
  orchestration looseness; not recommended.
- Re-running Pass 1 paper analysis as if it surfaces the truth. Paper
  analysis without tool verification has structural rigor blind spots;
  Pass 2 live deployment is what surfaces real constraints.

---

## Required Reading for Next Thread

- `CLAUDE.md` (auto-loaded by Claude Code; standing instructions)
- `entry.md` (meta project bootstrap)
- `prototypes/_shared/v1-design-decisions.md` (all decisions, append-only)
- This file (`handoff-thread-02.md`)
- `prototypes/_shared/captured-state-job-search.md` (still-valid
  retrofit input if path 1 is taken)
- `prototypes/01-google-docs-apps-script/generated/apps-script/bridge.gs`
  (deployable bridge code, real)

Optional based on path chosen:
- Path 1 deployment: `prototypes/_shared/deployment-prompt-01-google-docs.md`,
  `prototypes/_shared/step-by-step-deployment-coach.md`
- Path 3 wait: no extra reading needed
- Path 2 Perplexity: no extra reading; operator just changes operating mode

---

## Next Action

Operator picks one of the three viable paths in the next session.
Assistant should NOT generate new architecture options or try to find a
"missing" clean answer — thread 2 thoroughly canvased the landscape;
no clean option exists. Decision is operator's to make on which
trade-offs to live with.

After decision, next-action work depends on path:

- Path 1: deploy Apps Script bridge for job-search; capture friction
  notes; if it works, declare it the v1 default for both client and
  operator-internal projects (with acknowledged orchestration loose-
  ness as the known caveat)
- Path 2: declare Perplexity-only as v1 operating mode; document
  trade-offs; resume Phase B (skill rewrite) targeted at the
  Perplexity surface
- Path 3: pause Phase A; document Phase A status as "paused pending
  ecosystem maturation"; continue v0 operating model in interim;
  potentially work on other v1 design tracks (skill rewrite for
  interview/captured-state seam, retrofit branch logic, etc.) that
  don't depend on the deliverable architecture choice
