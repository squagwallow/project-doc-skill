project_slug: project-doc-skill
doc_type: prototype-findings
prototype: 02-hackmd-automation
updated_at: 2026-04-18

# Findings — Prototype 02 (HackMD + Automation)

---

## THREE-LAYER SEPARATION — READ FIRST

- **Meta project** — this repo.
- **Bootstrap skill** — a single markdown file.
- **Deliverable architecture** — this prototype.

---

## What worked

**Markdown-native end-to-end.** No format conversion anywhere. The skill
outputs markdown; HackMD renders markdown; the LLM ingests markdown. No
lossy conversion step like prototype 01's Docs/Sheets split.

**Cleanest format consistency.** Narrative, structured tables,
decisions — all the same surface. No mental model split between "this
goes in a Doc, this goes in a Sheet." Simpler than 01 in that regard.

**Permalinks are stable and diffable-ish.** Each note has a stable URL.
HackMD's built-in version history handles backup.

**Low setup friction vs. 01.** ~25 minutes first engagement, ~10
minutes subsequent. Much lighter than prototype 01's 45/15.

**The operator experience is closest to the v0 feel.** Operator who
liked v0's markdown-in-a-doc shape will find HackMD a natural migration
path — same format, different delivery surface.

## What broke / friction

**Client familiarity is weakest in this category.** Priya has probably
never heard of HackMD. She can adapt, but it is a stretch vs. Google
Docs. For paid client work this matters a lot.

**Client must create an account (even free).** Google Docs requires
nothing; HackMD private notes require a free signup. Small friction but
real, especially vs. prototype 01.

**Comments are lighter than Docs or Notion.** Good enough, not great.
Fewer discussion threads, less rich anchor-to-paragraph UX.

**No structured-data view.** Bottlenecks as a markdown table is
readable but not filterable. If the engagement produces 30+ bottleneck
findings, this would hurt. For the Lumen case (5 bottlenecks), fine.

**Multi-client isolation is by convention, not by hard ACL.** Workspace
structure helps; paid Team tier is properly isolated; free/Prime tier
requires operator discipline.

**Cross-LLM reach has no official MCP yet.** URL paste works everywhere;
programmatic write-back requires operator's own automation wrapper.

**Cost is non-zero.** $5–8/mo for proper private-note support at 3-
engagement scale. Small but not $0.

## Case-study fit per payload item

| Payload item | Fit | Notes |
|---|---|---|
| Discovery summary | 5/5 | Markdown-native, perfect |
| Current-state audit table | 3/5 | Markdown table is readable but not filterable |
| Bottleneck hypotheses | 4/5 | Structured header table per note works well |
| Week-2 scope / handoff | 5/5 | Handoff log as a dedicated note is clean |
| Weekly client update | 4/5 | Client-readable, but client must sign in to HackMD |
| Build-trigger moment | 5/5 | Subcontractor scope note with external repo link; cleanest of all four |

## Cross-LLM reach

- Claude: 2.5/3 (URL paste + custom webhook write-back)
- ChatGPT: 2.5/3 (same)
- Perplexity: 2/3 (read via URL)

**Score: ~2.3/3 — middle ground, below 01 and above 00.**

## Cost

- Operator: $5–8/mo at 3-engagement scale (Prime or Team tier)
- Client: $0 but must create free HackMD account
- Zapier: not required

## Recommendation

**Strong technical fit, weak commercial fit for mainstream clients.**

HackMD is the cleanest markdown-native solution. If the target client
profile were technical (developers, engineers, data people), this would
compete with prototype 01 for top spot. For mainstream non-technical
agency/consulting clients, the account-creation requirement and lower
familiarity make it harder to choose over 01.

**Recommended role in v1:** operator-preferred internal note-taking /
draft workspace that eventually exports to whichever client-facing
surface wins. HackMD may be more useful as an operator's middle layer
than as the client-facing deliverable.

Consider promoting to Pass 2 only if you want a markdown-purist
alternative path; otherwise 01 is the better top candidate.

## Sibling-variant readiness

**Moderate.** Same as 01: code variant lives in a linked external repo.
Arguably cleaner than 01 because everything in HackMD stays markdown
(including the scope doc that points at the repo), so the transition
feels less jarring.
