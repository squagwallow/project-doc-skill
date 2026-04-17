
# PROJECT DOCS SKILL — Entry Document
Type: META | Bootstrap document. Read before every session.

project_slug: project-docs-skill
updated_at: 2026-04-17
entry_url: https://cdn.jsdelivr.net/gh/squagwallow/project-doc-skill@main/entry.md

## PURPOSE
Building a reusable Claude Skill and documentation protocol that initializes a complete, LLM-readable external memory layer for any new project. The skill interviews the user, classifies the project type, and generates all required documentation artifacts. The goal is that any future project — and this project itself — can be picked up by any LLM in any thread with a single URL fetch and zero manual reconstruction.

## CURRENT OBJECTIVE
Format and publish the Thread Handoff Protocol v0.1 as the first Conditional Reading document.

## ROADMAP
Track A — Bootstrap: Get v0.1 live so all future work on this and other projects runs on the protocol. Remaining: Thread Handoff Protocol published, DEV template built and published, v0.1 declared working.
Track B — Skill Completion: Finish full skill after bootstrap is live. Queued: STRATEGY template, AUDIT template, notes block design, exit protocol formalization, full skill document assembly.
Track C — System Extensions: Personal Context Layer design, MCP write-tool automation for notes, Repomix integration for full.md generation.

## SETTLED DECISIONS
- Thread-start prompt is the primary retrieval mechanism — LLM-agnostic, no product-specific integration required.
- GitHub is the authoring layer only — never the retrieval surface. All LLM consumption routes through jsDelivr CDN.
- entry.md hard size limit is a performance requirement — context rot is real and quantified.
- Exit protocol equals manual compaction — model drafts, human reviews and publishes.
- Settled decisions use "Defaults — Override With Cause" framing, not hard prohibitions.
- Conditional reading sections must include explicit trigger conditions, not just links.
- Pre-task checklist belongs in both entry.md and the thread-start prompt.
- AGENTS.md must be human-authored — AI-generated versions reduce task success.
- Personal Context Layer is not baked into project templates — conditional required reading only, one central document.
- Rough draft files from early in this project are trashed — do not reference them.
- jsDelivr via GitHub is the confirmed retrieval host — stable URL, no deployment credits, browser-editable.

## DEFAULTS — OVERRIDE WITH CAUSE
- Do not propose GitHub connector or Notion MCP as primary retrieval paths.
- Do not propose expanding entry.md into full documentation.
- Do not propose Netlify as the documentation host — atomic deploys consume credits unsustainably.

## CURRENT BUILD STATE
Complete: Core architecture, all settled decisions, Thread Handoff Protocol v0.1 drafted in prose, AGENTS.md template spec, Anthropic context engineering research ingested, retrieval host confirmed (jsDelivr).
In progress: Thread Handoff Protocol formatting for publish.
Blocked: Nothing.
Not started: DEV template, STRATEGY template, AUDIT template, notes block design, exit protocol formalization, full skill document assembly, all Track C items.

## CONSTRAINTS
- Must work across all LLM products without product-specific integrations.
- Must be maintainable by one non-engineer with no pipeline or build step.
- Free or very low cost.
- entry.md must stay under 4,000 tokens — hard limit.
- All templates must pass the right-altitude test.

## OPEN QUESTIONS
- What is the right format and trigger convention for the mid-session notes block?
- How to design a low-friction exit protocol that minimizes human writing burden.
- How to design the Personal Context Layer as a central system-level document.
- Write-tool automation path for notes via MCP — future research.

## CONDITIONAL READING
Fetch only if the current session objective requires it.
- Thread Handoff Protocol v0.1 → [URL pending publish]
- DEV Template → [URL pending publish]
- AGENTS.md Template spec → [URL pending publish]
- Full skill document → [URL pending publish]
- Full roadmap → [URL pending publish]

## THREAD EXIT PROTOCOL
Before ending any session:
1. Model drafts all updated fields — human reviews before publishing.
2. Update Current Build State precisely.
3. Update Open Questions — add new, remove resolved.
4. Append any new Settled Decisions.
5. Set next Current Objective as a single sentence.
6. Update updated_at and publish to GitHub. jsDelivr URL does not change.
7. Confirm entry.md is still under 4,000 tokens.

## REQUIRED READING
- Encyclopedia: LLM Prompt & Context Design Principles → https://elaborate-belekoy-9e0eef.netlify.app/llm-design-encyclopedia
  Fetch if: designing or auditing any template field, prompt, trigger condition, session handoff, compaction, or entry.md structure decisions.

## PRE-TASK CHECKLIST
Before starting any session:
- [ ] I have read the Current Objective.
- [ ] I have read all Settled Decisions — I will not re-open these unprompted.
- [ ] I have read the Defaults list — I will not re-propose these unprompted.
- [ ] I have fetched all Required Reading documents listed above.
- [ ] RETRIEVAL GATE: If any Required Reading document failed to fetch, stop and report before proceeding.
