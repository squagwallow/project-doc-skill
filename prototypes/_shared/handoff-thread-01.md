project_slug: project-doc-skill
doc_type: handoff
generated: 2026-04-18
thread_focus: v1 prototyping sandbox build-out

# HANDOFF: V1 prototyping scaffolding + Pass 1 complete; ready for Phase A retrofit
thread_summary: Built four-prototype sandbox for v1 deliverable architectures, ran Pass 1 paper analysis, scored and documented; locked roadmap; ready to retrofit job-search as Phase A live test.

## Current Objective
Phase A: retrofit the job-search repo into deliverable architectures 01 (Google Docs + Apps Script) and 03 (Notion + MCP) head-to-head. Self-test both, pick the v1 winner.

## Settled Decisions
- Three-layer separation is load-bearing: meta project (this repo) / bootstrap skill (one .md file) / deliverable architecture (what the skill produces). Never conflate.
- v1 and skill-code-variant are sibling skills, not parent/child. Both share v1's client-facing surface; code variant adds git backend with gated LLM access.
- v1 prototyping is no-code only; code-heavy work is sibling scope.
- Brief 2 supersedes Brief 1 on deliverable architecture ranking.
- v0 settled decisions do not constrain v1 prototyping.
- Interview → captured-state → generation is a real skill seam; retrofits skip interview and feed state directly to generation.
- Phase A uses job-search for both architectures (same-project head-to-head); retrofit approach, not fresh interview.
- Shadow client handled as operator self-assessment + optional observer; real-user onboarding gated to Phase A→B boundary.
- Terminology migration: preferred terms used in all new artifacts; legacy aliases preserved until v1 retrofit.

## Open Questions
- Does job-search have a client-facing surface need, or do we simulate one via shadow-client observer?
- First-time setup time for 01 (paper estimate 45 min) — real number?
- Does 03's page-scoped MCP guardrail hold in practice across sessions?
- How does the bootstrap skill pick between 01 and 03 at interview time post-v1?

## Critical Context
- Branch: claude/v1-design-collaboration-EWoKS
- Pass 1 recommendation: promote 01 and 03, drop 02 (HackMD), keep 00 as control + skill-code-variant basis.
- Assistant MCP is scoped to project-doc-skill only; job-search repo must be read by operator paste or separate access grant.
- Use the project's own thread-handoff-protocol for future transitions.

## Do Not Re-Open
- Notion as v1 deliverable candidate (prototype 03 is the active test).
- Single-repo output as the default v1 output shape.
- HackMD as a v1 candidate (dropped in Pass 1).
- The layer separation (never mix meta / skill / deliverable).

## Required Reading
- prototypes/_shared/pass-1-summary.md
- prototypes/_shared/comparison-matrix.md
- prototypes/_shared/v1-roadmap.md
- prototypes/_shared/v1-design-decisions.md
- prototypes/_shared/glossary.md
- prototypes/01-google-docs-apps-script/{setup,deployment-walkthrough,skill-delta,deliverable-architecture-spec,findings}.md
- prototypes/03-notion-mcp-bridge/{setup,deployment-walkthrough,skill-delta,deliverable-architecture-spec,findings}.md
