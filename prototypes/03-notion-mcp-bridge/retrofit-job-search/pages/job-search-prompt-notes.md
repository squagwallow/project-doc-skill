project_slug: job-search
doc_type: sop-rendering-notes
updated_at: 2026-04-18

# Job Search Prompt — rendering notes in Notion

*(This file is a note about how the prompt renders in Notion, not a replacement for the prompt content. Full prompt text preserved verbatim from v0.4 process/job-search-prompt.md.)*

## Block structure Notion uses for this SOP

- H1: title
- H2 per section: Purpose / Activation / Process / Defaults / Standing Rules / Completion Condition
- Under Process: **toggle block** per step (Step 1, Step 2, ...) so operator collapses all when scanning, expands one to execute
- Under Standing Rules: **callout block** (red background) with a ⚠ icon — makes non-negotiables visually distinct
- Under Defaults: simple bulleted list
- Activation phrases: **code block** for exact matching strings

## Why this matters

In 01 (Docs), the same SOP renders as continuous prose under H2
headings. Readable, but every step is open-expanded — you scroll past
everything every time.

In 03 (Notion), toggle blocks let operator see the SOP's shape at a
glance and zoom into the step they're executing. Lower cognitive
overhead per session.

Not a blocker either way — the same information is there — but Notion's
block types are a small operator-felt improvement for SOPs
specifically. Prompts feel more procedural.

## Callout example (Standing Rules section)

In Notion, the "standing rules" list renders as:

> ⚠ **Non-negotiable standing rules**
>
> - Every surfaced job has a fixed live link to the specific posting.
> - Every surfaced job has been checked against strategy dealbreakers.
> - Every surfaced job uses the canonical listing format.
> - Never invent a link, pay range, or posted date.

Visually emphasized; impossible to miss when skimming. In 01 this is a
bullet list under an H2.
