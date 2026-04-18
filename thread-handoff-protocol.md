# THREAD HANDOFF PROTOCOL v0.1
Type: REFERENCE | Session management protocol.

project_slug: project-doc-skill
updated_at: 2026-04-18
url: https://cdn.jsdelivr.net/gh/squagwallow/project-doc-skill@main/thread-handoff-protocol.md

---

## PART 1 — END-OF-THREAD COMPACTION
Run at the close of any thread you want to hand off.
Paste the following prompt at the end of your thread:

---

Before we close this thread, perform a compaction. Produce a handoff document
with exactly these sections — nothing else:

## HANDOFF: [one-line description of what this thread was about]
generated: [today's date]
thread_summary: [one sentence — what was accomplished]

## Current Objective
[Single sentence — what the next thread should do first]

## Settled Decisions
[Bullet list — decisions made in this thread that must not be re-opened.
Format: "Decision: rationale in one sentence"]

## Open Questions
[Bullet list — unresolved questions the next thread needs to address.
Each item at the right altitude: specific enough to act on, not so specific
it becomes a script]

## Critical Context
[Bullet list — facts, constraints, or state the next thread cannot function
without. Cut everything that is background, history, or already implied by
the above sections]

## Do Not Re-Open
[Bullet list — approaches, tools, or directions that were considered and
rejected. The next thread should not re-propose these]

## Required Reading
[List any documents the next thread must fetch before starting, with URLs.
If none, write "None — all context is in this document"]

Keep the entire output under 400 words. If it exceeds 400 words, cut —
do not summarize by adding more words.

---

## PART 2 — THREAD-START RETRIEVAL GATE
Paste at the start of a new thread, with the handoff document above the
divider.

---

[Paste the handoff document here]

---

Before doing anything else, complete this checklist and confirm each item:

- [ ] I have read the Current Objective
- [ ] I have read all Settled Decisions — I will not re-open these
- [ ] I have read the Do Not Re-Open list — I will not re-propose these
- [ ] I have fetched all Required Reading documents listed above

RETRIEVAL GATE — NON-NEGOTIABLE:
If any Required Reading document could not be fetched, stop here. Tell me
exactly which document failed, what URL you attempted, and what happened.
Do not proceed until I confirm how to handle it.

Once all items are confirmed: state the Current Objective and your plan for
this session in 2-3 sentences. Then wait for my go-ahead.

---

## PART 3 — MID-THREAD NOTES BLOCK
Add to your thread-start prompt for any session where you want running notes.
Status: included in v0.1 — revised after real-world testing.

---

Maintain a single, very compact THREAD NOTES block in every reply.
Update order (always before your main answer):
Prune: Remove items that are obsolete or irrelevant.
Merge: Combine related points into one short clause.
Tighten: Rewrite for maximum brevity and clarity.
Add: Only add new items important for future turns.

Format (exactly this structure, minimal lines):
THREAD NOTES (Turn N) ← replace N with the current turn number and increment by 1 each reply
✓ Settled: brief decisions, separated by · where possible
→ Active: current tasks / work in progress (max 3 items)
? Open: unresolved questions / forks (max 5 items)
Δ Meta: optional constraints/observations (only if truly needed; omit line entirely when empty)

Rules:
Always update THREAD NOTES first, then write your main reply.
Keep the whole block as short as possible while still accurate.
Prefer deleting and merging over letting it grow.
Do not restate full user messages; store only distilled essentials.
No emojis, bold, markdown headings, or bullet lists inside THREAD NOTES.
Use inline separators ( · ) instead of extra line breaks where you can.
When Turn N is greater than 20, be extra aggressive about pruning and consider suggesting a new thread if NOTES feel crowded.