project_slug: lumen-agency-redesign
doc_type: subcontractor-scope
updated_at: 2026-04-18

# Metricool Chart Embed — Subcontractor Scope

*(Lives in `06-Subcontractor Scopes/Metricool Chart Embed.gdoc`. Priya can see it but would rarely open it. Operator uses it to brief a subcontracted developer and to link to the developer's eventual repo.)*

## What's needed

Weekly Zapier run writes raw Metricool numbers to per-client Notion rows. Chart images (line chart of follower growth, bar chart of top posts) need to be rendered separately. Zapier alone cannot do chart rendering.

Two viable approaches:
- Apps Script sidecar that pulls Metricool API, renders charts, uploads to Notion
- Make.com scenario with chart-rendering step

Estimated dev time: 3–5 hours.

## Why this is out of operator scope

Operator engagement explicitly excludes operator-written code. This is the kind of work the sibling `skill-code-variant` deliverable would host — separate engagement, separate deliverable.

## Handoff target

Developer's work will live at: `[repo URL TBD — added after onboarding]`

Operator does not write the code. Operator does:
- Write this scope
- Identify and onboard the subcontractor
- Link to their repo from this doc (operator-side, not client-visible)
- Update rollout plan with the subcontracted item as a dependency
