project_slug: job-search
doc_type: notion-database-snapshot
database: writing-samples
updated_at: 2026-04-18

# Writing Samples (database)

## Schema — maps directly from format-spec frontmatter

| Property | Type | Source (from writing-sample-format.md) |
|---|---|---|
| Title | title | derived from filename slug |
| Date | date | frontmatter `date` |
| Channel | select (upwork / general) | frontmatter `channel` |
| Job type | text | frontmatter `job_type` |
| Deliverable | select (cover-letter / application-question / proposal) | frontmatter `deliverable` |
| Question prompt | text | frontmatter `question_prompt` |
| Outcome | select (submitted / interview / hired / rejected / withdrew) | frontmatter `outcome` |
| Notes | text | bottom-of-file notes section |

Page body contains the approved submission text verbatim.

## Current rows (4 samples from v0.4 seed)

Rows exist for the 4 seed samples crawled from Upwork proposals in April 2026. Specific content unchanged from v0.4; retrofit just moves them into the database shape.

## Views

- **By Channel** — upwork / general grouping
- **By Outcome** — organize by hired / interview / no-reply signal
- **For Cover Letter Drafting** — filter: deliverable = cover-letter, sort by most recent (the filter the prepare-application prompt runs)
- **Application Question Bank** — filter: deliverable = application-question (reusable Q&A pool)

## Retrofit note

The format spec's frontmatter fields map one-to-one to database
properties. The `question_prompt` field in particular — which tracks
the exact question being answered — becomes a searchable text property.
In 01 this would be buried inside frontmatter on individual Doc files;
in 03 it's queryable.

This is the artifact where the v0.4 format-spec-with-frontmatter
pattern translates most naturally to Notion. Nothing is lost; the
whole structure becomes filterable for free.
