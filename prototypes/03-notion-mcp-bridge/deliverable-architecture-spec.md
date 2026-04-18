project_slug: project-doc-skill
doc_type: prototype-architecture-spec
prototype: 03-notion-mcp-bridge
updated_at: 2026-04-18

# Deliverable Architecture Spec — Prototype 03

---

## THREE-LAYER SEPARATION — READ FIRST

- **Meta project** — this repo.
- **Bootstrap skill** — a single markdown file.
- **Deliverable architecture** — described in this file.

---

## Shape

A Notion top-level page `Lumen Agency Redesign` with child pages and
databases. MCP (or API) scoped to this page tree enables LLM read/write.
Client invited as guest with comment/view access.

## Layers

- **Client-facing surface** — the engagement Notion page. Native Notion
  UX.
- **Canonical state** — Notion pages + databases. Pages for narrative,
  databases for structured rows.
- **Write-back bridge** — Notion MCP (primary), Notion API (fallback).
- **Integration plane** — optional Zapier for cross-tool glue.
- **Hidden backend** — Notion's version history + optional scheduled
  page export (Markdown/HTML) to git for archive.

## Page + database map

```
Lumen Agency Redesign  (top-level page; MCP scope root)
├── Entry (page)
├── Current State (page)
├── Decision Log (page)
├── Handoff Log (page)
├── Work Log (page)
├── Audit (page container)
│   ├── Discovery Summary (sub-page)
│   └── Current State Audit (database)
├── Bottlenecks (database)
├── Integration Specs (database)
├── Client Updates (page container)
│   └── Week 1 (sub-page)
└── Subcontractor Scopes (page container)
    └── Metricool Chart Embed (sub-page)
```

## Database schemas

**Bottlenecks database**
| Property | Type |
|---|---|
| Name | title |
| Current flow | text |
| Proposed flow | text |
| Current owner | select (Priya / Jo / Marcus) |
| Proposed owner | select |
| Hours saved/week | number |
| Priority | select (P1 / P2 / P3) |
| Status | select (Proposed / Approved / In build / Live) |

**Integration Specs database**
| Property | Type |
|---|---|
| Name | title |
| Source | select |
| Destination | select |
| Tool | select (Zapier / Apps Script / Native / Other) |
| Trigger | text |
| Owner after rollout | select |
| Status | select |

**Current State Audit database**
| Property | Type |
|---|---|
| Bottleneck | title |
| Current flow | text |
| Current owner | select |
| Observed pain | text |
| Hours/week | number |

## Where each week-1 payload item lives

| Payload item | Location |
|---|---|
| Discovery summary | `Audit/Discovery Summary` page |
| Current-state audit table | `Audit/Current State Audit` database |
| Three bottleneck hypotheses | Rows in `Bottlenecks` database |
| Proposed week-2 scope | Latest section of `Handoff Log` page |
| Weekly client update | `Client Updates/Week 1` page |
| Build-trigger moment | `Subcontractor Scopes/Metricool Chart Embed` page + decision entry in `Decision Log` |

## Stance on build/deploy

**Coordinator + moderate workshop.** Notion can host some light build
artifacts (embedded Loom videos, code blocks, diagrams), but serious
code still belongs in an external repo linked from a subcontractor
scope page. Databases can be used to track build progress with status
columns that update live.

## Sibling-variant readiness

**High.** Notion's databases provide a natural place to track
code-variant sub-efforts with status, owner, and linked-repo columns.
Client sees status; operator-side LLM orchestration into the linked
repo stays gated by intention. This is arguably the cleanest sibling-
variant integration of the four prototypes.

## Client experience

Priya opens Notion (already logged in — she uses it for Lumen's own
ops). Clicks into the engagement page. Sees familiar pages and
databases. Comments. Filters the Bottlenecks database by priority.
This is the highest ceiling for client self-service of any prototype.

**But:** this is also where the v0 rejection mattered. Priya's Lumen
workspace is separate from the operator's engagement workspace. The
client must be invited as a guest — not joined to the operator's
workspace. Operator discipline is load-bearing.

## Scope guardrail (v0 remediation)

The engagement is a **single top-level page**. MCP access is scoped to
that page (and its children). API integrations are installed on that
page, not the workspace root. On engagement 2, the operator creates a
separate top-level page and separately scopes — never shares a page
tree across engagements.

If this discipline holds, the v0 workspace-bleed concern is neutralized.
If it slips, the concern returns.
