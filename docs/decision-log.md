project_slug: project-doc-skill
doc_type: decision-log
updated_at: 2026-04-19
url: https://cdn.jsdelivr.net/gh/squagwallow/project-doc-skill@main/docs/decision-log.md

# Decision Log

Append-only. Format: "Decision: rationale in one sentence. Date: [date]"

---

## Decision: v1 Architecture — Git + Scoped Notion MCP
date: 2026-04-19
status: settled
supersedes: all prior prototype 01, 03, 04 decisions

### Architecture
- **Git** — orchestration layer. Holds entry doc, workflow prompts, 
  strategy docs, standing instructions, session templates. 
  LLM reads at session start. Human edits via Claude Desktop 
  GitHub MCP or Claude Code.
- **Notion** — user surface layer. Holds all databases and 
  active content (queues, catalogs, logs). Human edits natively. 
  LLM reads and writes via scoped local MCP server.

### Scoping mechanism
Notion internal integration token (not managed OAuth). 
One integration per project. Pages explicitly shared with 
integration at setup — nothing else in workspace is accessible. 
Verified: LLM can only see pages shared with the integration.

### LLM surfaces
- Primary: Claude Desktop (GitHub MCP + Notion MCP confirmed working)
- Secondary: Perplexity (native git write, Notion connector available)
- Not supported: claude.ai web, mobile (acceptable — desktop is 90% use case)

### Verified
- GitHub MCP write: confirmed 2026-04-19
- Notion MCP write: confirmed 2026-04-19  
- Notion scoping: confirmed 2026-04-19 — integration sees only 
  explicitly shared pages, not full workspace

### What this retires
- Prototype 03 (managed OAuth Notion) — scoping not viable
- Prototype 01 (Apps Script bridge) — bridge overhead unnecessary 
  given native MCP write capability
- Prototype 04 (unified bridge) — same
- Perplexity-only path — Claude Desktop now matches git write capability
- Wait path — sufficient capability exists to ship v1 now

### Known caveats
- Naked Claude Desktop sessions have all MCP servers active 
  simultaneously. Session isolation is prompt-enforced via entry 
  doc, not protocol-enforced. Mitigation: entry doc explicitly 
  scopes which Notion integration to use.
- Adding a new project engagement requires: create Notion 
  integration, scope pages, add config entry, restart Desktop. 
  ~10 min setup per project. Acceptable for v1.
- Claude.ai web and mobile have no MCP write access. 
  Perplexity covers mobile/web use case.

---

**Decision:** GitHub connector/direct repo access is the primary retrieval path when available.
*Connector access is now consistent enough across target environments to become the default. Date: 2026-04-18*

**Decision:** jsDelivr is a known fallback retrieval path, not the default.
*Keep a backup retrieval surface available without centering protocols around it. Date: 2026-04-18*

**Decision:** THREAD NOTES should be aggressively compacted and updated every reply.
*Short, always-on notes are more useful than trigger-based blocks that sprawl or fail to appear. Date: 2026-04-18*

**Decision:** Thread-start prompt is the primary retrieval mechanism.
*LLM-agnostic, no product-specific integration required. Date: 2026-04-17*

**Decision:** GitHub is authoring layer only — jsDelivr is the retrieval surface.
*raw.githubusercontent.com blocked by robots.txt in practice; jsDelivr confirmed working. Date: 2026-04-17*

**Decision:** entry.md hard size limit is a performance requirement.
*Context rot degrades model performance as token count grows. Date: 2026-04-17*

**Decision:** Exit protocol equals manual compaction.
*Model drafts, human reviews and commits. Date: 2026-04-17*

**Decision:** Settled decisions use "Defaults — Override With Cause" framing.
*Hard prohibitions create brittleness. Date: 2026-04-17*

**Decision:** Conditional reading must include explicit trigger conditions and full jsDelivr URLs.
*Relative paths cannot be auto-resolved by the fetcher — full URLs required. Date: 2026-04-17*

**Decision:** AGENTS.md must be human-authored.
*AI-generated versions reduce task success and increase token costs. Date: 2026-04-17*

**Decision:** Personal Context Layer is conditional required reading only.
*One central document, not per-project. Date: 2026-04-17*

**Decision:** jsDelivr via GitHub is the confirmed retrieval host.
*Stable URL, no deployment credits, browser-editable, confirmed fetchable. Date: 2026-04-17*

**Decision:** raw.githubusercontent.com is unverified — do not use until tested.
*Research brief claimed not blocked but this was not verified in practice. Date: 2026-04-17*

**Decision:** Each generated project gets its own separate GitHub repo.
*Nesting projects risks mingling, scaling problems, and access control issues. Date: 2026-04-17*

**Decision:** The skill runs in Claude Code generating a complete folder.
*Text block output requires manual file creation — Claude Code eliminates that friction. Date: 2026-04-17*

**Decision:** Prompt engineer skill absorbed into prompt-engineer-entry.md.
*A well-structured entry point any capable LLM can load serves the same purpose. Date: 2026-04-17*

**Decision:** Tiers are examples not fixed categories — skill stays adaptive.
*Fixed taxonomy breaks on edge cases. Date: 2026-04-17*

**Decision:** Decomposition applies to all project types regardless of complexity.
*Even simple projects benefit from decomposing areas of concern. Date: 2026-04-17*

**Decision:** Notes block is on by default with trigger-based activation.
*Fixed cadence produces noise; trigger-based means notes only appear when state changes. Date: 2026-04-17*

**Decision:** Context capacity tracker uses 25% increments.
*Simple and actionable — gives sense of pace not just a warning. Date: 2026-04-17*

**Decision:** Netlify is not the documentation host.
*Atomic deployments consume monthly credits unsustainably. Date: 2026-04-17*

**Decision:** Notion is not the documentation layer.
*Workspace bleed and confabulation risk are settled failure modes. Date: 2026-04-17*

**Decision:** GitHub connector and Notion MCP are not primary retrieval paths.
*GitHub connector returns snippets; Notion MCP causes workspace bleed. Date: 2026-04-17*

**Decision:** GitHub project connector is a viable retrieval path for Claude.ai sessions.
*Project-level connector reads full file contents — confirmed working in testing. Date: 2026-04-17*

**Decision:** Claude Code FILE:/DELETE:/COMMIT MESSAGE: format is the settled commit mechanism.
*Replaces GitHub connector and downloadable folder approaches — more reliable. Date: 2026-04-17*

**Decision:** Handoff log must include do-not-retry section and handoff completeness rules.
*Prevents next session from retrying failed approaches and ensures executable next actions. Date: 2026-04-17*

**Decision:** Writing prompts must use two-pass draft pattern.
*"Read style guide then draft" is underpowered — plain draft then voice transfer produces better output. Date: 2026-04-17*

**Decision:** Writing prompts must use evidence-based self-review with quoted spans.
*Free-form self-review is fakeable — quoted spans make compliance non-rubber-stamped. Date: 2026-04-17*

**Decision:** Style guides must use contrastive bad→good pairs for every prohibition.
*Abstract negatives without examples are ignored by the model. Date: 2026-04-17*

**Decision:** README.md is standard skill output generated at project creation.
*Human-facing repo index surfaced as missing from v0.3/v0.4 output — now standard. Date: 2026-04-17*

**Decision:** build-new-project.skill is the first deliverable of this project.
*Once v1 exists it can be tested on real projects and iterated. Date: 2026-04-17*

**Decision:** The skill generates a user guide as standard output.
*The repo needs to orient the human user with trigger phrases and worked examples. Date: 2026-04-17*

**Decision:** Prompt engineering is first-class in the skill — all prompts generated in full, never stubbed.
*A repo with prompt placeholders is not functional. Date: 2026-04-17*