project_slug: project-doc-skill
doc_type: test-project-spec
updated_at: 2026-04-18

# Test Project Spec — Lumen Creative Engagement (Synthetic)

The single case study all prototypes deliver against. Synthetic but
internally consistent. Used to generate `_shared/captured-interview.md`
once, then consumed by each prototype's generation stage.

---

## THREE-LAYER SEPARATION — READ FIRST

- **Meta project** — this repo.
- **Bootstrap skill** — a single markdown file.
- **Deliverable architecture** — what gets generated for this engagement.

The case study is **an engagement**, not a deliverable architecture.
Each prototype produces a different deliverable architecture that
houses this engagement's working memory.

---

## The client (non-scope)

**Lumen Creative** — synthetic marketing agency. Not part of the
deliverable; this is context for the engagement.

- 10 retained clients, growing fast
- Founder: Priya (runs everything; bottleneck)
- Employees: Jo (social media manager), Marcus (account manager)
- Current ops hub: Notion workspace
- Tools in use:
  - **Notion** (coordination hub: client DB, project DB, CRM DB synced
    from HubSpot)
  - **Metricool** (social media scheduling, analytics per-client brand
    space)
  - **Xero** (invoicing, retainer + project billing; Priya manual)
  - **HubSpot Free** (lead capture, piped to Notion CRM via Zapier)
  - **Zapier** (existing basic plan, ~$20/mo)

### The five real bottlenecks (Priya's priority order)

1. Social reporting: Metricool PDFs manually copy-pasted into Notion
   weekly (~3–4 hours/week)
2. Invoicing: manual billable-hours reconciliation from Notion to Xero
   (~6 hours/month)
3. Lead qualification: every new lead routes through Priya (~20 min each)
4. Cross-client dashboard: Priya assembles weekly (~2 hours)
5. Client deliverable approvals: everything requires Priya review before
   client sees it

### The proposed new architecture (rough shape, not the deliverable)

- Jo owns Metricool → client Notion reporting end-to-end (Zapier,
  weekly)
- Marcus owns HubSpot → qualified lead → onboarding (Zapier routes
  qualified leads to him unless flagged strategic)
- Priya retains: Xero/finance, strategic oversight, new business
  approvals
- Notion dashboards auto-populate cross-client view
- Deliverable approvals shift to Jo/Marcus-first, Priya weekly review

---

## The engagement (this is what we are testing against)

**Operator:** You — a freelance systems-architecture consultant booked
through Upwork for this engagement.

**Duration:** 4 weeks. Prototype tests week 1 only.

**Scope:**
- Week 1: Discovery + audit of current Notion + integrations
- Week 2: Process ownership design + bottleneck prioritization
- Week 3: Integration and automation architecture spec
- Week 4: Rollout plan + phase-1 handoff

**Operator is not:**
- Writing code (scripts get subcontracted if needed)
- Deploying Vendasta, HubSpot, Xero changes directly — designing and
  specifying only
- Acting as ongoing agency staff — engagement ends at week 4

**Operator is:**
- Running discovery calls
- Auditing current state
- Designing the new architecture
- Writing structured deliverables for agency team review
- Producing weekly client-readable updates Priya can skim in under two
  minutes

### Done condition

Priya has a written architecture that decentralizes data and workflow
ownership, a prioritized rollout plan, and phase 1 handed off with
named next-step owners. Measured by: Priya can name who owns each
process flow, and the Metricool → Notion client reporting integration
is live and running without her touching it.

---

## Interview answers (for Pass 1 generation)

These are the answers the operator gives when the bootstrap skill runs
its interview. Same answers for all prototypes.

### Q1 — Project description

"I'm running a 4-week systems-architecture engagement for Lumen
Creative, a small marketing agency. They have 10 clients, two employees
plus the founder, and run most ops out of Notion — but the founder has
become a bottleneck because every process routes through her. I'm
designing a new architecture that gives each process owner direct
control over their data and workflow, while keeping Notion as the
coordination hub. Scope is audit, design, and a phased rollout plan.
I'm not implementing custom code myself — any scripting gets
subcontracted."

### Q2 — Project name

`lumen-agency-redesign`

### Q3 — Major areas / phases

"Four areas:
1. Discovery and audit — map their current Notion structure,
   integrations, and where the bottlenecks actually bite
2. Process ownership design — define which role owns which data flow
3. Integration and automation architecture — how Metricool, Xero, the
   CRM, and Notion connect without routing through the founder
4. Rollout plan — phased implementation schedule with training and
   team handoff"

### Q4 — Exclusion criteria

"No code I write or deploy myself. Specific tools: their Notion
workspace, Metricool, Xero, HubSpot Free (their CRM), Zapier as primary
glue. I'll need guest access to Notion and read-only access to the
others. No multimedia files to manage. Any custom scripting gets handed
to a developer I subcontract."

### Q4.5 — Standardized formats

Three recurring outputs:

**Bottleneck finding**
Fields: name, current flow, proposed flow, current owner, proposed
owner, estimated hours saved per week, priority.

**Integration spec**
Fields: source system, destination, data shape, automation tool,
trigger condition, error-handling behavior, owner after rollout.

**Weekly client update**
Fields: week number, what I did, decisions made, open questions, next
week's focus. Must be skimmable by Priya in under two minutes.

### Q4.75 — Notes preference

Notes on by default. Trigger-based, activate at first decision, stay on.

### Prompt inventory

Five reusable prompts:

1. **Bottleneck analyzer** — verbal description → Bottleneck Finding
   entry
2. **Integration spec drafter** — integration idea → Integration Spec
3. **Weekly update writer** — work log → Weekly Client Update
4. **Meeting notes cleaner** — raw notes → decisions + actions + open
   questions
5. **Session handoff** — end-of-session compaction for next-session
   bootstrap

### Done condition (for the engagement)

Stated above under "Done condition."

---

## Week-1 content payload (for simulated sessions through each prototype)

To stress every axis of the deliverable architecture, week 1 produces
enough real-shape content to exercise narrative, structured, decision,
handoff, and client-facing surfaces.

**Week 1 output the operator needs the architecture to hold:**

1. **Discovery summary (narrative, ~300 words)**
   Kickoff call with Priya, observations about current Notion shape,
   team dynamics, visible bottleneck symptoms.

2. **Current-state audit table (structured, 5 rows)**
   One row per bottleneck. Columns: name, current flow, current owner,
   observed pain, rough hours/week.

3. **Three bottleneck hypotheses (decisions with rationale)**
   - Metricool → Notion reporting is the highest-leverage fix (Jo-owned,
     Zapier, week-3 build target)
   - Lead qualification can devolve to Marcus with a rule-based Zapier
     filter (~80% of leads auto-route)
   - Invoicing reconciliation needs Xero automation but stays
     Priya-owned (finance stays central)

4. **Proposed week-2 scope (handoff artifact)**
   Week-2 goal: finalize process ownership map, draft all integration
   specs, align Priya on which bottlenecks defer to skill-code-variant
   subcontractor work vs. no-code Zapier build.

5. **Weekly client update for Priya (client-facing surface test)**
   Week number, what I did this week, decisions made, open questions
   for her, next week's focus. Under 2 minutes to read.

6. **Build-trigger moment (architecture stance test)**
   End of week 1, the operator realizes the Metricool → Notion chart
   embed probably needs a small Apps Script, not pure Zapier. How does
   the architecture handle documenting, linking, and referencing
   out-of-scope code work that will be subcontracted? (This tests
   sibling-variant hand-off cleanliness, not code hosting.)

Each prototype's `findings.md` must demonstrate how the architecture
handles each of the six items above.

---

## What this spec is not

- Not a real engagement. Priya, Jo, Marcus, and Lumen Creative do not
  exist.
- Not a fully detailed agency operations audit. Tool interactions are
  realistic but abbreviated.
- Not a test of the agency's internal architecture. Their
  Notion-as-hub setup is the *context* for the engagement, not the
  deliverable.

---

## Realism notes

All four tools (Notion, Metricool, Xero, HubSpot Free) exist and work
approximately as described. Standard Zapier integrations named are real
and on mainstream tiers. The Metricool → Notion chart-embed path is the
one place reality gets hairy in practice — which is why it's the
designated build-trigger moment for testing code-subcontractor handoff.
