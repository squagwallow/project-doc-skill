project_slug: project-doc-skill
doc_type: prototype-setup
prototype: 01-google-docs-apps-script
updated_at: 2026-04-18

# Setup — Prototype 01: Google Docs + Apps Script

Client-native editing surface (Google Docs + Sheets in a shared Drive
folder), Apps Script as the write-back bridge, markdown import/export
for LLM ingestion.

---

## THREE-LAYER SEPARATION — READ FIRST

- **Meta project** — this repo.
- **Bootstrap skill** — a single markdown file.
- **Deliverable architecture** — Google Drive folder with Docs, Sheets,
  and an Apps Script bridge.

---

## Accounts the operator must have

- Google Workspace (personal Gmail or paid Workspace)
- Apps Script access (included with Google account)
- Optional: Zapier account if using Zapier MCP instead of direct Apps
  Script
- Claude Code (for running the bootstrap skill)
- Claude desktop / Claude.ai (for using the bridge during sessions)

## Accounts the client must have

- Google account (any Gmail is fine — no paid Workspace required)
- Client receives a Drive folder link with view + comment access

## Permissions / auth

- Operator: edit on the Drive folder, deploy access on Apps Script,
  Google API scopes (Docs, Sheets, Drive)
- Client: view + comment on the shared folder (can be upgraded to edit
  for specific files if the engagement wants client-editable fields)
- Apps Script web-app endpoint: published as "execute as me, accessible
  by anyone with link" (link acts as shared secret) — this is the
  write-back surface the LLM hits

## Pricing

- Operator monthly cost: **$0** personal Gmail; $6/user/mo if Workspace
- Client monthly cost: **$0**
- Free-tier scaling cliff: Apps Script has daily quotas (URL fetches,
  execution time, triggers). At 3-engagement scale with weekly session
  writes, well within free quota.
- Zapier required: **no** (Apps Script handles write-back directly)
- Zapier cost: **$0** (not needed unless adding cross-LLM webhook
  routing; optional)

## Zapier status

Optional wrapper only. Apps Script covers the native Google write-back.
Zapier adds value only if integrating with non-Google tools (HubSpot,
Metricool, Xero) — in which case it's cross-cutting regardless of
prototype.

## Known limitations

- Markdown fidelity: Docs → markdown conversion loses some formatting
  (complex tables, nested lists). Structured state prefers Sheets for
  that reason.
- Apps Script cold-start latency: 500ms–2s on first invocation per
  session
- No native version control beyond Google's built-in revision history
  (less diffable than git)
- Docs-to-Docs linking works but is less ergonomic than wiki-style
  backlinks
- Cross-LLM: Claude via MCP connectors or Apps Script webhook; ChatGPT
  via Apps Script webhook; Perplexity limited
