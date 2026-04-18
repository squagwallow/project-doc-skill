project_slug: project-doc-skill
doc_type: user-guide
updated_at: 2026-04-17
url: https://cdn.jsdelivr.net/gh/squagwallow/project-doc-skill@main/docs/user-guide.md

# User Guide — project-doc-skill

How to actually use this system. Plain language, for you — not the LLM.

---

## What this project is

A meta-project building a reusable skill — build-new-project.skill — that
spins up a complete documentation and prompt layer for any new project.
This repo is simultaneously the documentation layer for the project that
is building the skill.

---

## Starting a session — two paths

**Path 1 — GitHub connector (preferred):**
Add squagwallow/project-doc-skill as a project connector in Claude.ai.
Start any new session inside that project — no URL pasting needed.
The LLM reads files directly from the repo.

**Path 2 — Entry URL:**
Open a fresh thread. Paste:
https://cdn.jsdelivr.net/gh/squagwallow/project-doc-skill@main/entry.md

Then either issue a directive or say nothing — the system will orient you.

---

## Spinning up a new project

Open a Claude Code session. Paste the skill document:
https://cdn.jsdelivr.net/gh/squagwallow/project-doc-skill@main/skill/build-new-project.skill.md

The skill interviews you and generates the full repo folder directly.

---

## Working on the skill itself

- "let's review the skill" → loads skill document, proposes audit
- "update the skill" → revision mode, proposes changes, outputs updated file
- "inspect skill" → switches to maintenance mode

---

## Handing off when a thread goes stale

1. Say: "generate a handoff"
2. Copy the output
3. Paste it at the top of docs/handoff-log.md and commit
4. Open a new thread or session — new session picks up from there

---

## Committing changes

At session end the LLM outputs a Claude Code commit block:

```
FILE: path/to/file.md
(full file contents)
COMMIT MESSAGE: description
INSTRUCTION: Apply these changes, then git add -A, commit, and push.
```

Paste this entire block into a Claude Code session pointed at the repo.
Claude Code applies all changes and commits.

---

## Revision mode

Say "inspect repo", "update system", or "revise [filename]" to switch
from project work to system maintenance mode. The session will:
- Load the relevant file
- Propose changes before implementing
- Output the full updated file in the commit block format
- Update prompt-engineer-entry.md if orchestration changes

Always confirm the commit before resuming project work.

---

## Notes block

Activates automatically at the first major decision point or when the
thread gets long. Also activates immediately if you say:
- "note that"
- "keep track"
- "where are we"
- "give me an update"
- "what's our status"

Once on, stays on and updates only when something changes.
Context indicator tells you when to generate a handoff: 75%+ = compact soon.
To stop: "pause notes"

---

## Troubleshooting

| Symptom | Fix |
|---------|-----|
| Entry URL not fetching | Wait 2-3 min for jsDelivr, retry. Or use GitHub connector instead. |
| Session re-opens settled decisions | Say "re-read docs/decision-log.md" |
| Session feels generic | Thread too long — generate handoff, start fresh |
| Skill output is text blocks not a folder | Must run in Claude Code, not regular chat |
| Skill interview misses context | Note the gap, add to skill fix list |

---

## Worked example — reviewing and updating the skill

1. Start a session (connector or entry URL)
2. Say: "I found a gap in the skill — the interview doesn't ask about X.
   I want to add a question."
3. Session enters revision mode, loads the skill, proposes the addition.
4. You review and approve.
5. Session outputs the full updated skill in the commit block format.
6. Paste into Claude Code — it commits directly.
7. Say: "generate a handoff" — paste output into docs/handoff-log.md,
   include in the same commit block.