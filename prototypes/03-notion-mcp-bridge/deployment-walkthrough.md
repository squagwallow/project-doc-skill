project_slug: project-doc-skill
doc_type: prototype-deployment-walkthrough
prototype: 03-notion-mcp-bridge
updated_at: 2026-04-18

# Deployment Walkthrough — Prototype 03

---

## THREE-LAYER SEPARATION — READ FIRST

- **Meta project** — this repo.
- **Bootstrap skill** — a single markdown file.
- **Deliverable architecture** — Notion workspace + MCP/API bridge.

---

## Steps

1. Operator creates a top-level Notion page: `Lumen Agency Redesign`
2. Inside, creates child pages: `Entry`, `Current State`,
   `Decision Log`, `Handoff Log`, `Work Log`, `Discovery Summary`,
   `Week 1 Client Update`, `Metricool Chart Embed Scope`
3. Creates databases: `Bottlenecks`, `Integration Specs`,
   `Current State Audit`
4. Installs Notion MCP in Claude desktop (one-time) OR creates a Notion
   API integration token
5. Via MCP: grants Claude access to the `Lumen Agency Redesign` page
   tree (important: scoped to this page only, not whole workspace)
6. Via API: installs the integration on the engagement page
7. Runs the modified bootstrap skill via Claude desktop or Claude Code
8. Skill generates content and writes to each page/database via MCP
   (or outputs content for operator paste if MCP not used)
9. Invites Priya as guest to the engagement page (view + comment; or
   edit on specific blocks if desired)
10. Tests: operator runs a session, asks Claude to update a Bottleneck
    row; confirms MCP write lands in the database

**Approximate step count: 10**
**Accounts operator must create: 0–1 (Notion if new; most operators
already have it)**
**Accounts client must create: 0–1 (Notion free, if client doesn't
already have one)**
**Auth/OAuth complexity: moderate (MCP OAuth flow + explicit page
scoping)**
**Time from zero to usable: ~30 minutes first time; ~10 minutes
subsequent (template page duplication)**

## Where the client fits

Priya opens the engagement page link. She already knows Notion; zero
learning curve. She clicks into the Bottlenecks database, sees filter
views per priority. She comments on the Week 1 Update page. Standard
Notion UX.

## Session-start retrieval path

- MCP: Claude reads pages and databases directly via the Notion MCP
  server
- API: page/database fetch via Notion API with integration token
- URL paste: share-link paste into any LLM session

## Session-end write-back path

- MCP: Claude writes updates directly to pages/databases
- API: operator confirms and applies updates via API calls
- Manual: operator pastes output into Notion (fallback)

MCP is the v0-era game-changer — makes the write-back path natural and
low-friction.

## Multi-client isolation

**Moderate with discipline; risky without.** Each engagement must live
in its own top-level page with explicitly scoped MCP/API access. If
operator instead grants workspace-wide access, bleed risk returns (the
v0 concern).

Guardrail: skill's deployment instructions must emphasize page-scoped
access and include a verification step. Operator must be able to prove
the MCP scope does not extend beyond the engagement page.

## First-engagement-vs-template friction

Notion has first-class template duplication. Operator maintains a
template engagement page; `Duplicate` creates a fresh one per client;
swap in client name, invite guest, update MCP scope. ~10 minutes.
