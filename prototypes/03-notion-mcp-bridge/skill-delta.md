project_slug: project-doc-skill
doc_type: prototype-skill-delta
prototype: 03-notion-mcp-bridge
updated_at: 2026-04-18

# Skill Delta — Prototype 03

---

## THREE-LAYER SEPARATION — READ FIRST

- **Meta project** — this repo.
- **Bootstrap skill** — a single markdown file.
- **Deliverable architecture** — Notion workspace + MCP/API.

---

## Changes from v0.5

### Part 3 — Generate (major rewrite)

Replace FILE:/COMMIT MESSAGE: output with:

**Stage A — Page + database inventory.** Output structured description
of the pages and databases to create, with their properties (for
databases) and their parent-child relationships.

**Stage B — Initial content for each page.** Markdown-like content that
MCP/API converts into Notion blocks.

**Stage C — Database schemas.** Column definitions for Bottlenecks,
Integration Specs, Current State Audit. Includes property types (text,
select, number, relation).

**Stage D — MCP/API access instructions.** Step-by-step for the
operator to install MCP and scope access to the engagement page only.
**Must include the v0-flag-remediation checklist.**

**Stage E — Template duplication instructions** (for engagement 2+).

### Part 4 — New: Scope verification

Add a required verification step: operator confirms MCP/API scope is
limited to the engagement page before proceeding. Block the skill from
declaring the deployment complete until this is confirmed.

### Part 5 — New: Client guest invitation

Instruct operator to invite client as guest with view + comment access
(not editor, not workspace member).

### Session-start protocol change

- MCP: Claude queries page tree directly
- URL fallback: share-link paste

### Session-end protocol change

- MCP: Claude applies updates directly
- Operator reviews diff before MCP write (recommended)

### New standing instruction in Entry page

"Workspace bleed risk — this deliverable is scoped to the
`Lumen Agency Redesign` page tree only. Do not grant MCP or API access
to the broader workspace. Every session must confirm its scope before
writing."

## What does NOT change

Interview, decomposition, prompt inventory, done condition — all
unchanged. Same seam pattern.

## Instruction to the LLM running the skill

Run Parts 1–2 as written. In Part 3, emit:
1. Page/database inventory with schemas
2. Initial content per page
3. MCP/API scoping instructions (with verification step)
4. Guest invitation instructions
5. Template-duplication protocol for engagement 2+

Highlight the scope guardrail prominently — it is the v0-era
rejection's remediation.
