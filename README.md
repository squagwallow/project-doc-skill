# project-doc-skill

Skill and documentation protocol for initializing LLM-readable project documentation layers.

## Entry URL

```
https://cdn.jsdelivr.net/gh/squagwallow/project-doc-skill@main/entry.md
```

## For humans

See [`docs/user-guide.md`](docs/user-guide.md) for how to use this system.

## For the LLM

- [`entry.md`](entry.md) — bootstrap for every session on this project
- [`prompt-engineer-entry.md`](prompt-engineer-entry.md) — orchestration index; load when auditing or refining the prompt base
- [`skill/build-new-project.skill.md`](skill/build-new-project.skill.md) — the skill prompt; paste into Claude Code to spin up a new project
- [`thread-handoff-protocol.md`](thread-handoff-protocol.md) — session handoff and compaction protocol
- [`docs/decision-log.md`](docs/decision-log.md) — settled decisions, carry forward
- [`docs/handoff-log.md`](docs/handoff-log.md) — reverse-chron session state snapshots
- [`docs/work-log.md`](docs/work-log.md) — professional work journal for case studies, pitches, and process briefings

## Structure

```
entry.md
README.md
thread-handoff-protocol.md
prompt-engineer-entry.md
skill/
  build-new-project.skill.md
docs/
  current-state.md
  decision-log.md
  handoff-log.md
  todo.md
  user-guide.md
  work-log.md
```