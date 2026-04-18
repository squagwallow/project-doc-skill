project_slug: lumen-agency-redesign
doc_type: subcontractor-scope
updated_at: 2026-04-18

# Subcontractor Scope — Metricool Chart Embed

**Build-trigger moment.** Surfaced during week 1. Out of operator scope; will be handed to a subcontracted developer. Documented here for handoff clarity and client visibility.

## What's needed

When Zapier fires the weekly Metricool → Notion report, raw numbers can be written as Notion database rows natively. But embedded charts (line chart of follower growth, bar chart of top-performing posts) cannot be produced by Zapier alone — they need either:

- A small Apps Script that renders charts from Metricool's API and uploads chart images to Notion
- Or a richer Zapier-adjacent tool (e.g., Integromat/Make scenario with a chart-rendering step)

Estimated developer time: 3–5 hours.

## Scope for subcontractor

- Input: Metricool API credentials, Notion API integration, target chart types (line, bar)
- Output: weekly chart images written to the right per-client Notion page
- Trigger: Zapier webhook fired after raw data write
- Error handling: fail silently with operator email notification; raw numbers still populate

## Where build artifacts will live

Once subcontracted, the developer's code goes in a separate repo linked here:
`[repo URL to be added after subcontractor onboarded]`

This engagement's repo does NOT host the code. Just the scope and a pointer. The code belongs to what would be a `skill-code-variant` deliverable.

## Ownership after rollout

- Code: subcontractor (maintenance retainer TBD)
- Zapier side: Jo owns the automation workflow
- Integration health monitoring: Priya's dashboard gets a green/red status widget
