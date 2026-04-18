project_slug: job-search
doc_type: entry
updated_at: 2026-04-18

# Entry — job-search

*(Top-level Notion page body. MCP-scoped to this page tree.)*

## Purpose
Consolidated context layer for job search. Centralizes profiles, strategy, writing samples, and a standard job format so any LLM session can pick up the ongoing process without manual uploads.

## Current Objective
Zero-friction workflow: load this entry, issue a directive, get end-to-end process execution.

## Page tree
- 01 Upwork → Profile · Portfolio (DB) · Strategy · Income Strategy
- 02 General Jobs (deferred)
- 03 Process → Job Search Prompt · Prepare Application Prompt · Cover Letter Style Guide · Writing Samples (DB)
- 04 Queue → Flagged Jobs (DB)
- 05 Formats → Job Listing Format · Writing Sample Format

## Scope guardrail
MCP access is scoped to this page tree only. Verify scope each session.

## Required reading — conditional
- No directive: orient from user-guide-equivalent section, ask user
- Job search directive: load Job Search Prompt + Upwork Profile + Strategy + Portfolio DB
- Apply directive: load Prepare Application Prompt + Profile + Portfolio DB + Cover Letter Style Guide + Writing Samples DB
- Upwork session always: Income Strategy + Strategy
- Queue reference: Flagged Jobs DB

## Standing rules
- Fixed link rule for every surfaced job
- Dealbreaker filter per Strategy
- Canonical Job Listing Format
- Amalgamate from Writing Samples, don't invent

## Retrieval / write-back
- Claude MCP reads page tree + databases directly
- Claude writes via MCP with operator review
- Share-link paste as fallback
