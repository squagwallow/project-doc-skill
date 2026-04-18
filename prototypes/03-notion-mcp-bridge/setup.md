project_slug: project-doc-skill
doc_type: prototype-setup
prototype: 03-notion-mcp-bridge
updated_at: 2026-04-18

# Setup — Prototype 03: Notion + MCP Bridge

Notion workspace with pages and databases as the client-facing surface;
official Notion MCP (and/or Notion API) for LLM read/write.

**Note:** v0 previously rejected Notion for workspace bleed and pre-MCP
integration awkwardness. This prototype exists specifically to test
whether the MCP era resolves those concerns. See
`_shared/v1-design-decisions.md` for context.

---

## THREE-LAYER SEPARATION — READ FIRST

- **Meta project** — this repo.
- **Bootstrap skill** — a single markdown file.
- **Deliverable architecture** — Notion workspace with pages +
  databases, backed by MCP/API for LLM access.

---

## Accounts the operator must have

- Notion account (free personal plan works for solo operator + single
  guest; Plus plan for multi-guest)
- Notion MCP integration installed (official Notion MCP server) OR
  Notion API integration token
- Claude desktop or Claude Code with MCP configured
- Optional: Zapier for cross-tool orchestration outside Notion

## Accounts the client must have

- Notion account (free). They are invited as a guest to the specific
  engagement pages only — not the operator's broader workspace.

## Permissions / auth

- Operator: owner of a dedicated engagement page or sub-workspace
- Client: guest access scoped to the engagement page (and its children)
- MCP: operator-authenticated via Notion OAuth flow; token scope limited
  to the engagement page tree
- API: integration token with workspace or page-scoped access

**Critical:** operator must create a fresh engagement page and scope
MCP/API access to that page only — not to the whole workspace. This is
the guardrail against the workspace-bleed problem v0 flagged.

## Pricing

- Operator monthly cost:
  - Free plan: fine for solo operator + up to 10 guests (single space),
    but paid for block editing limits
  - **Plus plan ($10/user/mo)** recommended for paid client work
    (unlimited blocks, guest seats, better API rate limits)
- Client monthly cost: $0 (guest access is free)
- Scaling cliff: guest seat limit on Plus is generous but not infinite;
  Team plan if multi-client multi-guest
- Realistic operator cost at 3-engagement scale: **~$10/mo** (Plus
  plan, one seat)
- Zapier required: **no** (MCP + API cover it)
- Zapier cost: **$0** (unless used for cross-tool glue)

## Zapier status

Optional. Notion's own API + MCP is sufficient for session read/write.
Zapier only adds value for cross-tool orchestration (HubSpot, Metricool,
Xero) — cross-cutting, not Notion-specific.

## Known limitations

- **Workspace bleed risk** (v0's original concern) — still real if
  operator doesn't scope access carefully. Guardrail: engagement lives
  as a top-level page with explicit child scoping, not in the
  operator's personal workspace root.
- Notion's content model is richer than markdown. Model ingestion
  through MCP is cleaner than old API-scraping approach but still
  heavier than HackMD or raw markdown.
- Block-based editing model feels app-like. Priya will recognize it
  (she already uses Notion internally) but it's heavier than Docs.
- Comments + database views are Notion's strongest features; narrative
  long-form reading is less smooth than Docs or HackMD.
- Rate limits on free plan can bite at session scale; Plus recommended.
