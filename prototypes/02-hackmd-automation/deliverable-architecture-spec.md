project_slug: project-doc-skill
doc_type: prototype-architecture-spec
prototype: 02-hackmd-automation
updated_at: 2026-04-18

# Deliverable Architecture Spec — Prototype 02

---

## THREE-LAYER SEPARATION — READ FIRST

- **Meta project** — this repo.
- **Bootstrap skill** — a single markdown file.
- **Deliverable architecture** — HackMD workspace + optional thin
  automation wrapper.

---

## Shape

A HackMD team workspace with one note per artifact. All notes are
markdown. Permissions per-note (operator edit, client comment, signed-
in read). Optional automation wrapper (Cloudflare Worker or similar)
exposes read/write endpoints over the HackMD API for LLM sessions.

## Layers

- **Client-facing surface** — the HackMD workspace. Client reads
  markdown-rendered notes and can comment inline.
- **Canonical state** — the notes themselves. Markdown is the format
  both humans and models consume.
- **Write-back bridge** — either manual (paste into HackMD) or via a
  thin API wrapper (Cloudflare Worker).
- **Integration plane** — optional; external tool glue would go
  through Zapier/Make if needed, not HackMD itself.
- **Hidden backend** — HackMD's built-in history + optional scheduled
  export to git for archival.

## Note map

```
lumen-agency-redesign/ (HackMD workspace)
  entry
  current-state
  decision-log
  handoff-log
  work-log
  audit/
    discovery-summary
    current-state-audit
  bottlenecks/
    bf-01-metricool-reporting
    bf-02-lead-qualification
    bf-03-invoicing-reconciliation
  integration-specs/
    (week 2+)
  client-updates/
    week-1
  subcontractor-scopes/
    metricool-chart-embed
```

HackMD supports folder-like tag organization and cross-note linking;
the structure above is a convention, not a hard hierarchy.

## Where each week-1 payload item lives

| Payload item | Location |
|---|---|
| Discovery summary | `audit/discovery-summary` note |
| Current-state audit table | markdown table in `audit/current-state-audit` note |
| Three bottleneck hypotheses | `bottlenecks/bf-01*`, `bf-02*`, `bf-03*` notes |
| Proposed week-2 scope | Latest section in `handoff-log` note |
| Weekly client update | `client-updates/week-1` note |
| Build-trigger moment | `subcontractor-scopes/metricool-chart-embed` note with link to external repo |

## Stance on build/deploy

**Coordinator.** HackMD is narrative-native, not workshop-shaped. Build
artifacts (Zapier configs, Apps Script source) would live in linked
external repos — HackMD hosts pointers only. Code variant would run
almost entirely outside the HackMD workspace with links from scope
notes.

## Sibling-variant readiness

**Moderate.** Code variant lives mostly in a linked git repo; HackMD
retains the client-facing surface. Separation is clean but requires the
operator to maintain two places (HackMD workspace + code repo). Cleaner
than prototype 01 in that both layers are markdown-first, uglier than
00 where everything is already git-native.

## Client experience

Priya signs up for HackMD (free, ~2 minutes), opens workspace link,
sees a list of notes. Clicks one to read. Comments inline. Familiar
enough (markdown-rendered looks like any modern doc) but noticeably
less "polished" than Google Docs. Second-order users (Jo, Marcus) same
experience.

**Verdict on client experience:** good for markdown-comfortable people,
a small stretch for mainstream clients who have never heard of HackMD.
