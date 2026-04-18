project_slug: project-doc-skill
doc_type: prototype-architecture-spec
prototype: 01-google-docs-apps-script
updated_at: 2026-04-18

# Deliverable Architecture Spec — Prototype 01

---

## THREE-LAYER SEPARATION — READ FIRST

- **Meta project** — this repo.
- **Bootstrap skill** — a single markdown file.
- **Deliverable architecture** — described in this file.

---

## Shape

A single Google Drive folder shared with the client. Organized by
engagement phase. Mixes Google Docs (narrative) and Google Sheets
(structured state). Apps Script bridge deployed as a Web App provides
programmatic read/write for LLM sessions.

## Layers

- **Client-facing surface** — the Drive folder itself. Client opens
  Docs, reads, comments. Native Google UX.
- **Canonical state** — split by shape: narrative in Docs, tabular in
  Sheets. Both authoritative.
- **Write-back bridge** — Apps Script Web App. Accepts POST with
  structured update payload; applies to Doc or Sheet.
- **Integration plane** — optional Zapier for cross-tool; Apps Script
  handles intra-Google.
- **Hidden backend** — Google Drive's built-in revision history serves
  as the archive. No separate git mirror required, though one can be
  added as a backup via a scheduled Apps Script export.

## Folder map

```
Lumen Agency Redesign/
  Entry.gdoc                              ← session bootstrap
  Current State.gdoc
  Decision Log.gdoc
  Handoff Log.gdoc
  Work Log.gdoc
  01-Audit/
    Discovery Summary.gdoc
    Current State Audit.gsheet
  02-Decisions/
    (decisions logged in Decision Log.gdoc)
  03-Bottlenecks/
    Bottlenecks.gsheet                    ← structured finding rows
  04-Integration Specs/
    Integration Specs.gsheet              ← one row per integration
  05-Client Updates/
    Week 1 Update.gdoc
  06-Subcontractor Scopes/
    Metricool Chart Embed.gdoc
  _System/
    Apps Script deployment URL + config   (hidden from client)
```

## Where each week-1 payload item lives

| Payload item | Location |
|---|---|
| Discovery summary | `01-Audit/Discovery Summary.gdoc` |
| Current-state audit table | `01-Audit/Current State Audit.gsheet` |
| Three bottleneck hypotheses | Rows in `03-Bottlenecks/Bottlenecks.gsheet` |
| Proposed week-2 scope | Latest section in `Handoff Log.gdoc` |
| Weekly client update | `05-Client Updates/Week 1 Update.gdoc` |
| Build-trigger moment | `06-Subcontractor Scopes/Metricool Chart Embed.gdoc` + decision entry in `Decision Log.gdoc` |

## Stance on build/deploy

**Coordinator + light workshop.** Drive folder absorbs narrative,
structured, and decision artifacts cleanly. Build artifacts that belong
to the code variant (actual Apps Script code for chart embedding,
Zapier zap configs) live outside this folder — either in the
subcontractor's repo (linked in the scope doc) or as attached files if
small enough.

## Sibling-variant readiness

**Moderate.** Code variant would add a linked git repo alongside the
Drive folder — not inside it. Operator references the repo URL from the
subcontractor scope doc; LLM can access the repo via GitHub connector
when intentionally loaded. Client never sees the repo.

Works, but less clean than prototype 00 where the code sits in the same
repo structure.

## Client experience

Priya opens the Drive folder link. She sees six clearly named
subfolders. She clicks `05-Client Updates` and reads her weekly update
as a familiar Google Doc. She comments on a Bottleneck Finding in the
Bottlenecks sheet. Jo and Marcus can be granted access to the same
folder (or a subset) without new account creation.

Zero learning curve for Priya. High familiarity for Jo and Marcus.
