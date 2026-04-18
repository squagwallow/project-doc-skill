project_slug: project-doc-skill
doc_type: pass-1-summary
updated_at: 2026-04-18

# Pass 1 Summary — V1 Prototyping

Paper-analysis comparison of four candidate deliverable architectures
against the Lumen Creative case study. Pass 2 (live deployment) pending.

---

## THREE-LAYER SEPARATION — READ FIRST

- **Meta project** — this repo.
- **Bootstrap skill** — a single markdown file.
- **Deliverable architecture** — what each prototype produces.

---

## What was done

1. Locked test project spec (`_shared/test-project-spec.md`) — Lumen
   Creative, a 4-week systems-architecture engagement for a synthetic
   marketing agency
2. Captured one interview transcript (`_shared/captured-interview.md`)
   and ran generation four times against it — once per prototype
3. Built four prototype folders with: setup, deployment walkthrough,
   skill delta, architecture spec, simulated generated artifacts,
   findings
4. Scored each on the comparison matrix
   (`_shared/comparison-matrix.md`)

## Recommendation

**Promote prototypes 01 (Google Docs + Apps Script) and 03 (Notion +
MCP) to Pass 2.**

Pass 2 is live deployment against a real engagement. Head-to-head
comparison on operator-felt friction, not paper artifacts.

**Prototype 01 is the top pick on paper** — best balance of client
familiarity, surface quality, cross-LLM reach. Setup burden (~45 min
first time) is the cost; template duplication mostly solves it by
engagement 2.

**Prototype 03 is the close runner-up** — highest structured-state
ceiling, strongest sibling-variant readiness, best fit when client is
already Notion-native (as Priya would be). Operator-discipline
dependency on page-scoped MCP is the main caveat.

**Prototype 00 (markdown/git baseline)** — kept as control and as the
structural basis for future `skill-code-variant`. Not promoted as v1
deliverable architecture: client-facing surface is too weak.

**Prototype 02 (HackMD)** — dropped from candidate pool. Technically
clean, but client account creation requirement and mainstream
unfamiliarity make it harder to choose over 01 in the paid-client
context. Useful as operator-internal draft workspace; not as v1
client-facing deliverable.

## Key findings that emerged from the exercise

1. **The interview → captured-state → generation seam is real.** All
   four prototypes consumed the same captured interview; differences
   appeared only in the generation stage. This is a genuine v1 skill
   design feature, not an implementation detail.

2. **Client-facing surface is the dimension where v0 loses.** The
   markdown/git baseline scored highest on technical axes (cost,
   isolation, persistence, sibling-readiness) and worst on client
   visibility. This confirms Brief 2's reframe — non-technical client
   comfort is the axis that forces a new architecture.

3. **Zapier MCP is genuinely cross-cutting.** None of the four
   prototypes require Zapier for their core architecture. Zapier only
   enters when integrating non-Google, non-HackMD, non-Notion tools
   (HubSpot, Metricool, Xero). This validates treating it as an
   integration-plane concern, not a prototype choice.

4. **Operator discipline is a load-bearing variable for prototype 03.**
   V0's Notion rejection was correct for v0's context; v1 can override
   it only if the skill's deployment instructions enforce page-scoped
   MCP/API access as a blocking step.

5. **Setup burden differs meaningfully across prototypes.** 00 is
   ~10 min, 02 is ~25 min, 03 is ~30 min, 01 is ~45 min first time.
   Template duplication reduces all but 00 to ~10–15 min on engagement
   2. First-engagement friction is a real UX concern for 01.

6. **Sibling-variant integration differs.** 00 is the most natural
   code-variant base (git-native); 03 tracks code sub-efforts most
   cleanly through databases; 01 and 02 sit in the middle.

7. **Cross-LLM reach is broader than expected.** Every prototype except
   00 can plausibly be read and written by Claude, ChatGPT, and
   Perplexity through some combination of native MCP/connectors, custom
   actions, and URL paste. 00's git-native structure is the outlier
   (Claude-favored, cross-product weak).

## V1 skill implications (preliminary, for post-Pass-2 design)

- The bootstrap skill likely needs to ask a deployment-architecture
  question during the interview (or derive it from the client's tool
  comfort) to pick between 01 and 03 (or 00 for technical operators)
- Template-duplication instructions are a first-class skill output
  from engagement 2 onward
- Scope guardrail (especially for 03) must be enforced as a blocking
  step before the skill declares deployment complete
- `skill-code-variant` inherits the 00 shape as its backend; its client-
  facing surface should be the winner of the 01 vs. 03 head-to-head

## Open questions for Pass 2

1. Does 01's 45-min first-time setup actually take 45 minutes, or
   longer/shorter?
2. Does 03's operator-discipline guardrail hold up across 3+
   simultaneous engagements?
3. Does the Apps Script OAuth consent screen cause meaningful client
   friction when the client is the one hitting it (answer: client
   shouldn't hit it, only operator — confirm)?
4. How does the bootstrap skill actually pick between 01 and 03 at
   interview time — hardcoded choice, operator preference, client tool
   stack signal?
5. When the skill is in a "make a copy of the template" mode rather
   than "generate from scratch," how much of Parts 1–2 (interview) are
   still needed? Possibly a reduced-interview variant.

## Next

Human review of Pass 1. Decision to proceed to Pass 2 with 01 and 03,
or adjust slate. Pass 2 scope: live deployment, real engagement (or
simulated-live with operator's own accounts), measurable friction
metrics.
