# CLAUDE.md — project-doc-skill (meta project)

Auto-loaded by Claude Code on session start. Embeds standing instructions
that previously lived only in `entry.md` and were silently ignored when
Claude Code didn't read entry.md as a bootstrap step.

---

## THREE-LAYER SEPARATION — INTERNALIZE BEFORE DOING ANYTHING

These three concepts are repeatedly conflated. They are not the same thing.

- **Meta project** — this repo. Lives in git. Where the work of building
  the bootstrap skill happens.
- **Bootstrap skill** — a single markdown file an LLM ingests. Format
  fixed; only its instructions evolve.
- **Deliverable architecture** — what the skill tells the LLM to produce
  for the end client. Under active v1 design in `prototypes/`.

Never use one of these terms when meaning another. When in doubt, say
"this repo" (meta project) vs. "the skill file" (bootstrap skill) vs.
"what the skill produces" (deliverable architecture).

---

## ACTIVE BRANCH

`claude/v1-design-collaboration-EWoKS` — v1 prototyping work. Do not
push to `main` without explicit operator instruction.

---

## REQUIRED READING AT SESSION START

Read these in order before responding to any directive:

1. `entry.md` — meta project bootstrap (standing rules, current objective)
2. `prototypes/_shared/v1-design-decisions.md` — v1 decisions, append-only
3. Most recent `prototypes/_shared/handoff-thread-*.md` — last thread's
   compaction
4. `prototypes/README.md` — sandbox index

If any required read fails, stop and report.

---

## THREAD NOTES BLOCK — MAINTAIN IN EVERY REPLY

Maintain a single, very compact THREAD NOTES block in every reply.

Update order (always before your main answer):
- **Prune** — remove items that are obsolete or irrelevant
- **Merge** — combine related points into one short clause
- **Tighten** — rewrite for maximum brevity and clarity
- **Add** — only add new items important for future turns

Format (exactly this structure, minimal lines):

```
THREAD NOTES (Turn N)
✓ Settled: brief decisions, separated by · where possible
→ Active: current tasks / work in progress (max 3 items)
? Open: unresolved questions / forks (max 5 items)
Δ Meta: optional constraints/observations (only if needed)
```

Rules:
- Always update THREAD NOTES first, then write your main reply
- Keep the whole block as short as possible while still accurate
- Prefer deleting and merging over letting it grow
- Do not restate full user messages; store only distilled essentials
- No emojis, bold, markdown headings, or bullet lists inside THREAD NOTES
- Use inline separators (·) instead of extra line breaks where possible
- When Turn N exceeds 20, prune aggressively and consider suggesting a
  new thread if NOTES feel crowded

---

## DEFAULTS — OVERRIDE WITH CAUSE

These v0 defaults remain. v1 prototyping may revisit but should not
silently drop them.

- Do not propose expanding entry.md into full documentation
- Do not propose Netlify as documentation host
- Do not propose nesting generated projects inside this repo
- Do not propose fixed template taxonomy — the skill is adaptive
- If GitHub connector/direct repo access is unavailable, ask whether to
  switch to jsDelivr before inventing another retrieval path

---

## V1 OVERHAUL CONTEXT

V1 is an active overhaul of the deliverable architecture (the thing the
bootstrap skill produces). V0 settled decisions are NOT load-bearing
inside `prototypes/`. New v1 decisions live in
`prototypes/_shared/v1-design-decisions.md` (append-only) until v1
overhaul completes and a unified decision log is retrofitted.

---

## SKILL CAPABILITY CLAIMS — VERIFY BEFORE STATING

A pattern that bit us in an earlier thread: claiming tool capabilities
(MCP scope behavior, connector permissions, integration features)
without verification. Don't do it.

When you find yourself about to claim a tool can or can't do X:
- If your knowledge is solid, state it
- If unsure, mark it as "claimed in [source], unverified" or fetch the
  current docs via WebFetch first
- If the operator's specific account/version matters, ask them to
  verify before treating it as load-bearing

This is especially important for: MCP scopes, OAuth permission models,
connector write capabilities, integration token granularity, and
anything API-related.

---

## EXIT PROTOCOL

When wrapping a thread, follow `thread-handoff-protocol.md`. Output a
handoff document under 400 words, save to
`prototypes/_shared/handoff-thread-NN.md` (incrementing N). Commit with
a clear message before declaring the thread closed.
