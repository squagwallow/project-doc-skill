project_slug: job-search
doc_type: notion-database-snapshot
database: portfolio
updated_at: 2026-04-18

# Portfolio (database)

## Schema

| Property | Type | Options |
|---|---|---|
| Item name | title | - |
| Link | url | - |
| Upwork portfolio URL | url | - |
| Role | text | - |
| Tools / stack | multi-select | Apple Watch, Notion, webhooks, LLM APIs, ... |
| Tags | multi-select | ai-workflow, clinical-ai, science-writing, ... |
| Status | select | published / queued / archived |
| Description | text | - |
| Strongest for | text | - |

## Current rows

| Item | Link | Role | Tags | Status |
|---|---|---|---|---|
| Cornflower Health | https://animated-malasada-c8e858.netlify.app/ | Product Owner & AI Workflow Architect | ai-workflow · llm-orchestration · notion · health-data · pipeline · no-code | published |
| Clinical AI Failure Modes | https://peaceful-queijadas-b266f1.netlify.app/ | AI Safety Analyst & Clinical Domain Expert | clinical-ai · ai-safety · health-data · technical-writing · llm-failure-modes | published |
| Harvard / NASEM Proceedings | (4 PDFs, no URL) | Rapporteur / Science Writer / Project Coordinator | science-writing · public-health · technical-writing · medical-writing · policy | published |
| LLM Prompt & Context Design Encyclopedia | (pending Netlify host) | Author | llm-design · encyclopedia · prompt-engineering | queued |

Each row opens to a full page body containing the "Strongest for" narrative and any working notes.

## Views

- **Active** — filter: status = published
- **Queue** — filter: status = queued
- **By Tag** — group by primary tag (useful when prep-application wants "what do I have that matches notion?")
- **Gallery** — card view with link previews (visual browsing)

## Retrofit note

Notion's database-with-page-bodies model handles the tension 01 had to
split into Doc + Sheet. One artifact, filterable via tags, with full
narrative in each row's page body. The queue (encyclopedia item) is a
view filter, not a separate list. This is a direct structural
improvement over both v0 markdown and 01 Drive.
