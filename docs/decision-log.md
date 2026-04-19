project_slug: project-doc-skill
doc_type: decision-log
updated_at: 2026-04-19
url: https://raw.githubusercontent.com/squagwallow/project-doc-skill/main/docs/decision-log.md

# Decision Log

Append-only. Format: "Decision: rationale in one sentence. Date: [date]"

---

## 2026-04-19 — v1 architecture decisions

**Decision:** v1 deliverable architecture is git + scoped Notion MCP.
*Validated through live testing on job-search prototype — all core operations confirmed working. Date: 2026-04-19*

**Decision:** Notion internal integration token (not managed OAuth) is the correct Notion access mechanism.
*Internal token supports per-page scoping; managed OAuth grants workspace-wide access and cannot be scoped. Date: 2026-04-19*

**Decision:** One Notion integration per project — hard scoping at the access layer.
*Separate tokens per engagement enforce scoping architecturally, not via prompt discipline. Date: 2026-04-19*

**Decision:** Notion database creation requires one manual step — LLM populates schema via API-update-a-data-source.
*POST /v1/databases is not exposed in the Notion MCP server; workaround is human creates blank DB, LLM adds properties. Date: 2026-04-19*

**Decision:** raw.githubusercontent.com is confirmed working as retrieval URL — now the default.
*Supersedes the 2026-04-17 decision to avoid raw.githubusercontent.com — confirmed unblocked in testing. Date: 2026-04-19*

**Decision:** Notion scoped MCP is viable as a user-facing database layer.
*Supersedes the 2026-04-17 decision that "Notion is not the documentation layer" — internal integration token resolves the workspace bleed and confabulation risks that made managed OAuth non-viable. Date: 2026-04-19*

**Decision:** Notion MCP write operations (row create, row update, schema update) are confirmed working.
*Supersedes the 2026-04-17 decision that "GitHub connector and Notion MCP are not primary retrieval paths" — scoped Notion MCP is a viable write surface for active databases. Date: 2026-04-19*

**Decision:** THREAD NOTES block is always-on with turn counter — never trigger-based.
*Always-on notes with turn counter and aggressive pruning are more reliable than trigger-based blocks. Date: 2026-04-19*

**Decision:** Encyclopedia conditional reading is scoped to revision mode only.
*LLM Prompt & Context Design Principles encyclopedia is a prompt engineering resource, not a general session resource. Date: 2026-04-19*

**Decision:** Claude Desktop is the primary LLM surface; Perplexity is the mobile/web fallback.
*Claude Desktop with GitHub MCP write confirmed — two-surface coverage achieved without ChatGPT or Gemini dependency. Date: 2026-04-19*

**Decision:** The skill runs in Claude Desktop with GitHub MCP — generates files via direct MCP commits.
*Supersedes the Claude Code FILE:/DELETE:/COMMIT MESSAGE: format as the primary mechanism; GitHub MCP in Claude Desktop is simpler and equally reliable. Date: 2026-04-19*

---

## 2026-04-18

**Decision:** GitHub connector/direct repo access is the primary retrieval path when available.
*Connector access is now consistent enough across target environments to become the default. Date: 2026-04-18*

**Decision:** jsDelivr is a known fallback retrieval path, not the default.
*Keep a backup retrieval surface available without centering protocols around it. Date: 2026-04-18*

**Decision:** THREAD NOTES should be aggressively compacted and updated every reply.
*Short, always-on notes are more useful than trigger-based blocks that sprawl or fail to appear. Date: 2026-04-18*

---

## 2026-04-17

**Decision:** Thread-start prompt is the primary retrieval mechanism.
*LLM-agnostic, no product-specific integration required. Date: 2026-04-17*

**Decision:** entry.md hard size limit is a performance requirement.
*Context rot degrades model performance as token count grows. Date: 2026-04-17*

**Decision:** Exit protocol equals manual compaction.
*Model drafts, human reviews and commits. Date: 2026-04-17*

**Decision:** Settled decisions use "Defaults — Override With Cause" framing.
*Hard prohibitions create brittleness. Date: 2026-04-17*

**Decision:** Conditional reading must include explicit trigger conditions and full URLs.
*Relative paths cannot be auto-resolved by the fetcher — full URLs required. Date: 2026-04-17*

**Decision:** AGENTS.md must be human-authored.
*AI-generated versions reduce task success and increase token costs. Date: 2026-04-17*

**Decision:** Personal Context Layer is conditional required reading only.
*One central document, not per-project. Date: 2026-04-17*

**Decision:** Each generated project gets its own separate GitHub repo.
*Nesting projects risks mingling, scaling problems, and access control issues. Date: 2026-04-17*

**Decision:** Prompt engineer skill absorbed into prompt-engineer-entry.md.
*A well-structured entry point any capable LLM can load serves the same purpose. Date: 2026-04-17*

**Decision:** Tiers are examples not fixed categories — skill stays adaptive.
*Fixed taxonomy breaks on edge cases. Date: 2026-04-17*

**Decision:** Decomposition applies to all project types regardless of complexity.
*Even simple projects benefit from decomposing areas of concern. Date: 2026-04-17*

**Decision:** Netlify is not the documentation host.
*Atomic deployments consume monthly credits unsustainably. Date: 2026-04-17*

**Decision:** GitHub project connector is a viable retrieval path for Claude.ai sessions.
*Project-level connector reads full file contents — confirmed working in testing. Date: 2026-04-17*

**Decision:** Handoff log must include do-not-retry section and handoff completeness rules.
*Prevents next session from retrying failed approaches and ensures executable next actions. Date: 2026-04-17*

**Decision:** Writing prompts must use two-pass draft pattern and evidence-based self-review.
*Plain draft then voice transfer produces better output than read-then-draft. Date: 2026-04-17*

**Decision:** Style guides must use contrastive bad→good pairs for every prohibition.
*Abstract negatives without examples are ignored by the model. Date: 2026-04-17*

**Decision:** README.md is standard skill output generated at project creation.
*Human-facing repo index surfaced as missing from v0.3/v0.4 output — now standard. Date: 2026-04-17*

**Decision:** Prompt engineering is first-class in the skill — all prompts generated in full, never stubbed.
*A repo with prompt placeholders is not functional. Date: 2026-04-17*
