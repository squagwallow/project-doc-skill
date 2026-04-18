project_slug: project-doc-skill
doc_type: prototype-deployment-walkthrough
prototype: 01-google-docs-apps-script
updated_at: 2026-04-18

# Deployment Walkthrough — Prototype 01

From zero to working deliverable architecture for the Lumen engagement.

---

## THREE-LAYER SEPARATION — READ FIRST

- **Meta project** — this repo.
- **Bootstrap skill** — a single markdown file.
- **Deliverable architecture** — Google Drive folder + Apps Script
  bridge.

---

## Steps

1. Operator creates Drive folder: `Lumen Agency Redesign` (root)
2. Inside, creates subfolders: `01-Audit`, `02-Decisions`,
   `03-Bottlenecks`, `04-Integration Specs`, `05-Client Updates`,
   `06-Subcontractor Scopes`
3. Creates base Docs: `Entry`, `Current State`, `Decision Log`,
   `Handoff Log`, `Work Log`
4. Creates base Sheets: `Bottlenecks`, `Integration Specs`,
   `Weekly Dashboard`
5. Opens Apps Script editor (from any Sheet in the folder);
   pastes the bridge script (see `generated/apps-script/`)
6. Deploys Apps Script as Web App: execute as self, access "Anyone with
   link"; copies the deployment URL
7. Stores deployment URL in Apps Script Properties as shared secret
8. Runs the (modified) bootstrap skill via Claude Code — skill outputs
   initial content for each Doc/Sheet, operator pastes into the
   pre-created files (or skill uses Apps Script endpoint to write
   programmatically)
9. Shares Drive folder with Priya (view + comment)
10. Tests: operator runs a session in Claude, asks it to update a
    Bottleneck Finding; confirms the Apps Script bridge writes the row
    to the Bottlenecks sheet

**Approximate step count: 10**
**Accounts operator must create: 0 (assumes Gmail already)**
**Accounts client must create: 0 (any Gmail)**
**Auth/OAuth complexity: moderate (Apps Script scopes require one-time
consent screen)**
**Time from zero to usable: ~45 minutes first time; ~15 minutes on
subsequent engagements with a template**

## Where the client fits

Priya opens the shared Drive folder, sees 6 subfolders organized as
engagement phases, opens whichever file she wants. She can read, she
can comment on any doc, she can (if granted) edit specific files.

Weekly update is a native Google Doc she receives by share
notification — no manual copy-paste from the operator.

## Session-start retrieval path

- Apps Script endpoint exposes `/read` that returns a normalized
  markdown snapshot of a named file or folder
- Claude MCP server (if using the Google MCP connector) can read Drive
  directly
- Operator can paste a specific Doc URL into a session for context

## Session-end write-back path

- Model produces updates as structured JSON + markdown
- Claude calls Apps Script `/write` endpoint
- Apps Script applies updates to Doc (replacing sections) or appends
  rows to Sheet

## Multi-client isolation

Good. One Drive folder per engagement, separately permissioned. No
workspace bleed because Google's ACLs are folder-scoped. Sheets/Docs do
not automatically cross-reference unless operator links them.

## First-engagement-vs-template friction

First engagement is the 45-minute setup. Subsequent engagements: the
skill instructs operator to `File → Make a copy` on a template Drive
folder. Apps Script carries over. Share with new client. Cut to ~15
minutes.
