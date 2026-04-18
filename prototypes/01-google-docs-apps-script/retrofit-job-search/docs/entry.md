project_slug: job-search
doc_type: entry
updated_at: 2026-04-18

# job-search — Entry

*(Entry.gdoc body. Apps Script bridge exposes this as /read?file=entry.)*

## Purpose
Consolidated context layer for job search. Centralizes profiles, strategy, writing samples, and standard job format so any LLM session can pick up the ongoing process without manual uploads.

## Current Objective
Zero-friction workflow: load this entry doc, issue a directive, get end-to-end process execution.

## Folder navigation
- **01-Upwork/** — primary focus: Profile, Portfolio (+ Summary Sheet), Strategy, Income Strategy
- **02-General-Jobs/** — deferred
- **03-Process/** — Job Search Prompt, Prepare Application Prompt, Cover Letter Style Guide, Writing Samples/
- **04-Queue/** — Flagged Jobs Sheet (primary structured state)
- **05-Formats/** — Job Listing Format, Writing Sample Format

## Required reading — conditional
- No-directive load: open `docs/user-guide.md`-equivalent content here and ask what user wants
- Job search directive: open Job Search Prompt + Upwork Profile + Strategy + Portfolio
- Apply directive: open Prepare Application Prompt + Profile + Portfolio + Cover Letter Style Guide + Writing Samples
- Upwork session always: also load Income Strategy + Strategy
- Queue reference: open Flagged Jobs Sheet

## Standing rules
- Fixed link rule — every surfaced job has a live specific link
- Dealbreaker filter — check against Strategy doc's disqualifiers
- Standard format — canonical Job Listing Format for every job
- Amalgamate, don't invent — cover letters draw from Writing Samples

## Session-start retrieval
- Apps Script: `GET {bridge}/read?file=entry`
- Or: direct Doc URL paste

## Session-end write-back
- Apps Script: POST with `append_doc_entry` (Decision Log, Handoff Log), `append_row` (Flagged Jobs), or `replace_section` (Current State)

## Exit protocol
Append entry to Handoff Log, update Current State. State snapshot only.
