project_slug: project-doc-skill
doc_type: prototype-setup
prototype: 02-hackmd-automation
updated_at: 2026-04-18

# Setup — Prototype 02: HackMD + Automation

Markdown-native collaborative workspace with permalinks, API-backed
read/write, and a lightweight automation layer for structured state.

---

## THREE-LAYER SEPARATION — READ FIRST

- **Meta project** — this repo.
- **Bootstrap skill** — a single markdown file.
- **Deliverable architecture** — HackMD workspace with linked notes and
  a thin automation wrapper.

---

## Accounts the operator must have

- HackMD account (free tier available; paid for private team notes)
- HackMD API token (generated from account settings)
- Claude Code (for initial generation)
- Optional: a small automation runner — serverless function (Cloudflare
  Worker, Vercel function) or Zapier — to act as write-back bridge for
  structured updates

## Accounts the client must have

- Nothing strictly required — published notes have public-or-link-only
  URLs; no client account needed for read + comment
- For private notes (recommended for paid client work), client needs a
  free HackMD account to be invited as a reader/commenter

## Permissions / auth

- Operator: owner of a HackMD team or workspace
- Client: reader/commenter on engagement notes
- Automation wrapper: uses operator's HackMD API token (server-side
  secret)

## Pricing

- Operator monthly cost:
  - Free tier: limited collaborators, public notes by default; workable
    for experimentation
  - **Prime ($5/mo)** unlocks more private notes and history
  - **Team ($8/user/mo)** for proper team features and more
    collaborators
- Client monthly cost: $0
- Scaling cliff: free tier breaks at ~3 engagements with private-note
  requirements; Prime or Team tier needed for paid client work
- Realistic operator cost at 3-engagement scale: **$5–8/mo**
- Zapier required: **no** (HackMD API + small function bridge)
- Zapier cost: **$0** (not needed)

## Zapier status

Optional. HackMD API is rich enough that a thin function (Cloudflare
Worker or similar) handles write-back. Zapier only adds value if
orchestrating across tools (HubSpot, Metricool, Xero) — which is
cross-cutting, not HackMD-specific.

## Known limitations

- Less familiar to non-technical clients than Google Docs
- No true structured-data view (everything is markdown; tables are
  rendered but not queryable)
- Comments are less rich than Google Docs or Notion
- Backup / archival depends on either paid tier history or periodic API
  exports to git
- Cross-LLM: HackMD API + public URLs give reasonable reach, but MCP
  integration is not official (yet)
