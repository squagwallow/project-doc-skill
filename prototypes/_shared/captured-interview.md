project_slug: project-doc-skill
doc_type: captured-interview
updated_at: 2026-04-18

# Captured Interview — Lumen Creative Engagement

What the bootstrap skill captures from running its interview (Part 1)
against the operator for the Lumen Creative engagement. Consumed by
each prototype's generation stage. Same input for all four prototypes.

---

## THREE-LAYER SEPARATION — READ FIRST

- **Meta project** — this repo.
- **Bootstrap skill** — a single markdown file running this interview.
- **Deliverable architecture** — what each prototype will generate from
  this captured state.

---

## Project description

4-week systems-architecture consulting engagement for Lumen Creative, a
small marketing agency (10 clients, founder + 2 employees). Agency runs
ops out of Notion but the founder has become a bottleneck — every
process routes through her. Operator is designing a new architecture
that gives each process owner direct control over their data and
workflow, keeping Notion as the coordination hub. Scope is audit,
design, and phased rollout plan. No code written or deployed by the
operator — custom scripting gets subcontracted.

## Project name

`lumen-agency-redesign`

## Decomposition

Four areas:

1. **Discovery and audit** — map current Notion structure, integrations,
   and where bottlenecks actually bite
2. **Process ownership design** — define which role owns which data flow
   (social, client delivery, finance, lead intake)
3. **Integration and automation architecture** — how Metricool, Xero,
   HubSpot, and Notion connect without routing through the founder
4. **Rollout plan** — phased implementation schedule with training and
   team handoff

## Exclusion criteria answers

- Code written/deployed by operator: **no** (scripting subcontracted)
- Integrations/automations: **yes** (Zapier as primary glue)
- Specific tools: Notion (guest access), Metricool, Xero, HubSpot Free
  (all read-only observer access)
- Multimedia files: **no**
- External service connections: **yes** (client's existing tool stack)

## Standardized formats

Three recurring output formats:

**Bottleneck Finding**
- Fields: name · current flow · proposed flow · current owner · proposed
  owner · estimated hours saved per week · priority (P1/P2/P3)

**Integration Spec**
- Fields: source system · destination · data shape · automation tool ·
  trigger condition · error-handling behavior · owner after rollout

**Weekly Client Update**
- Fields: week number · what I did · decisions made · open questions ·
  next week's focus
- Constraint: Priya must be able to skim in under 2 minutes

## Notes preference

On by default. Trigger-based activation (first decision). Stays on once
activated until operator says "pause notes."

## Prompt inventory (five confirmed)

1. **Bottleneck analyzer** — verbal description → structured Bottleneck
   Finding entry
2. **Integration spec drafter** — integration idea → structured
   Integration Spec
3. **Weekly update writer** — work log → Weekly Client Update
4. **Meeting notes cleaner** — raw notes → decisions + action items +
   open questions
5. **Session handoff** — end-of-session compaction for next-session
   bootstrap

## Done condition

Priya (founder) has:
- A written architecture that decentralizes data and workflow ownership
- A prioritized rollout plan
- Phase 1 handed off with clear next-step owners

Measured by:
- Priya can name who owns each process flow
- Metricool → Notion client reporting integration is live and running
  without her touching it

## Complexity pattern

Moderate. Multi-week consulting engagement with structured deliverables,
non-technical client requiring visibility, mix of narrative and
tabular memory, multi-session, no operator-written code. Good fit for
the v1 no-code deliverable architecture the bootstrap skill is designed
to produce.

## Known out-of-scope items flagged during interview

- Metricool → Notion chart embedding likely needs small Apps Script or
  richer Zapier tier; any actual code goes to subcontracted developer,
  not operator
- Any Vendasta-style deep customization (if it came up) would belong to
  `skill-code-variant`, not this engagement
