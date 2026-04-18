project_slug: project-doc-skill
doc_type: prototype-architecture-spec
prototype: 00-markdown-git-baseline
updated_at: 2026-04-18

# Deliverable Architecture Spec — Prototype 00

What the skill produces for the operator running the Lumen engagement
under this prototype.

---

## THREE-LAYER SEPARATION — READ FIRST

- **Meta project** — this repo.
- **Bootstrap skill** — a single markdown file.
- **Deliverable architecture** — described in this file.

---

## Shape

A single git repo named `lumen-agency-redesign`. Owned by the operator.
jsDelivr-fronted for LLM retrieval. All state is markdown files.

## Layers

- **Client-facing surface** — none natively. Operator exports Weekly
  Client Update as markdown → manually copies to email/Doc/Slack.
- **Canonical state** — markdown files in the repo. Single source of
  truth.
- **Hidden backend** — same as canonical state. Not separated.
- **Write-back bridge** — Claude Code applying FILE:/COMMIT MESSAGE:
  blocks. Manual but reliable.
- **Integration plane** — none built in. Optional Zapier layer could
  pipe commits to notifications.

## File map

```
lumen-agency-redesign/
  README.md
  entry.md
  prompt-engineer-entry.md
  thread-handoff-protocol.md
  docs/
    current-state.md
    decision-log.md
    handoff-log.md
    work-log.md
    todo.md
    user-guide.md
    client-updates/
      week-1.md
    bottleneck-findings/
      01-metricool-reporting.md
      02-lead-qualification.md
      03-invoicing-reconciliation.md
    integration-specs/
      (week 2+)
    audit/
      current-state-audit.md
      discovery-summary.md
```

## Where each week-1 payload item lives

| Payload item | Location |
|---|---|
| Discovery summary | `docs/audit/discovery-summary.md` |
| Current-state audit table | `docs/audit/current-state-audit.md` |
| Three bottleneck hypotheses | `docs/bottleneck-findings/01-*.md`, `02-*.md`, `03-*.md` |
| Proposed week-2 scope | `docs/handoff-log.md` (latest entry) |
| Weekly client update | `docs/client-updates/week-1.md` |
| Build-trigger moment | `docs/decision-log.md` entry + new file `docs/subcontractor-scopes/metricool-chart-embed.md` |

## Stance on build/deploy

**Coordinator + light workshop.** Git repo naturally hosts narrative,
structured, and decision artifacts. Build artifacts (Zapier exports,
Apps Script source if needed) would live in a `scripts/` folder, but
the operator does not write these — handoff to subcontractor is
documented in `docs/subcontractor-scopes/` with a pointer to their
eventual work location.

## Sibling-variant readiness

**Very high.** Code variant would add a `src/` or `scripts/` directory
to this shape without structural change. The git-native shape is exactly
what the code variant extends. This prototype is effectively already
code-variant-compatible.
