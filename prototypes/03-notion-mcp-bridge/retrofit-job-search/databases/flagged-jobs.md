project_slug: job-search
doc_type: notion-database-snapshot
database: flagged-jobs
updated_at: 2026-04-18

# Flagged Jobs (database)

*(Notion database. Rendered here as markdown table for review. Live database has color-coded Select badges on Priority/Status, filter views in sidebar, sort/group controls.)*

## Schema

| Property | Type | Options |
|---|---|---|
| ID | title | - |
| Title | text | - |
| Company | text | - |
| Source | select | Upwork / LinkedIn / Indeed / Direct / Referral |
| Link | url | - |
| Posted | date | - |
| Pay | text | - |
| Priority | select | high / medium / low |
| Status | select | surfaced / applied / interview / closed-won / closed-lost / withdrew / skip |
| Dealbreaker check | select | pass / fail |
| Tags | multi-select | zapier, claude, notion, ai-training, legal, corporate, ... |
| Notes | text | - |

## Current rows

| ID | Title | Company | Source | Posted | Pay | Priority | Status | Tags |
|---|---|---|---|---|---|---|---|---|
| upwork-20260417-02 | Zapier + Claude Cowork + Clio Integration Weekly Automated Report | Criminal Defense Attorney | Upwork | 2026-04-17 | $75 fixed | medium | surfaced | zapier, claude, api-integration, legal, one-time, fast-close |
| upwork-20260417-03 | AI Trainer & Upskilling Consultant Corporate Education Program | Large Company | Upwork | 2026-04-16 | $50-$100/hr | medium | surfaced | ai-training, corporate, facilitation, llm-prompt-engineering |
| upwork-20260417-04 | Notion Expert Workflow Migration Automation & Team Training | Production Company (London) | Upwork | 2026-04-16 | Fixed (propose) | high | surfaced | notion, claude, cowork, workflow-migration, team-training |

Notes on each row are full-text fields; truncated here.

## Views

- **By Priority** — high first, then medium, then low
- **By Status** — surfaced / applied / interview / closed grouping
- **Active** — filter: status in [surfaced, applied, interview]
- **Archive** — filter: status in [closed-won, closed-lost, withdrew, skip]
- **By Tag** — group by primary tag
- **This Week** — filter: posted ≥ 7 days ago

## Retrofit note

This is the single strongest argument for 03 over 01 in the job-search
retrofit. Extended priority/status tags as select properties with
filter views give the operator a real job-queue UX. In 01, the Sheet
version has the data but requires manual filter setup every session.
Notion renders views persistently.
