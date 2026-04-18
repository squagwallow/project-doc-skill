project_slug: lumen-agency-redesign
doc_type: entry
updated_at: 2026-04-18

# lumen-agency-redesign — Entry

*(This content lives in `Entry.gdoc` in the shared Drive folder. Rendered here as markdown for LLM ingestion via the Apps Script `/read?file=entry` endpoint.)*

## Purpose

Design a new systems architecture for Lumen Creative that decentralizes data and workflow ownership. Eliminate founder bottleneck.

## Current Objective

Week 1: discovery + current-state audit + top-3 bottleneck identification.

## Roadmap

- Week 1: Discovery and audit ✅
- Week 2: Process ownership design
- Week 3: Integration and automation architecture
- Week 4: Rollout plan

## Where things live

- Discovery artifacts → `01-Audit/`
- Bottlenecks → `03-Bottlenecks/Bottlenecks.gsheet`
- Integrations → `04-Integration Specs/Integration Specs.gsheet`
- Weekly updates (client-facing) → `05-Client Updates/`
- Subcontracted code scopes → `06-Subcontractor Scopes/`

## Session-start retrieval

LLM fetches via Apps Script Web App:
- `GET {bridge_url}?action=read&file=entry`
- `GET {bridge_url}?action=read&file=decision-log`
- `GET {bridge_url}?action=read&file=handoff-log`

## Session-end write-back

LLM posts updates via Apps Script:
- `POST {bridge_url}` with `action: append_row`, `action: append_doc_entry`, or `action: replace_section`
