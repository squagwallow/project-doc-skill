project_slug: job-search
doc_type: domain
updated_at: 2026-04-18

# Profile — rendering notes in Notion

*(Full ~400-word profile preserved verbatim from v0.4 upwork/profile.md. This note is about rendering, not a replacement.)*

## How it reads in Notion

- Title, tagline, and hourly rate as page properties (inline display at
  the top)
- Overview / summary renders as body paragraphs; slightly less smooth
  than a Google Doc at this length, but fine
- Skills list as bulleted blocks (not a database — they're an ordered
  narrative, not queryable records)
- Project catalog as a child database with columns: name, price,
  timeline, status (active / paused / archived)
- Portfolio items (published) — **three linked-page references** to
  rows in the Portfolio database; hovering shows link previews
- Employment history as toggle blocks per role so the operator can
  collapse/expand when drawing from it for specific cover letters

## Where 03 slightly loses to 01 on this doc

Long-form narrative prose (the 350-word overview paragraph) reads
marginally better in Google Docs than Notion. Not a blocker; just the
one section where Docs has the advantage.

## Where 03 slightly wins

Linked-page references to Portfolio database rows means that when
operator updates a portfolio item description, every profile reference
to it updates automatically. In 01 the portfolio item name/description
lives once in the Portfolio Doc, and profile just references it by
name — manual sync required if names change.
