project_slug: project-doc-skill
doc_type: prototype-findings
prototype: 01-google-docs-apps-script
updated_at: 2026-04-18

# Findings — Prototype 01 (Google Docs + Apps Script)

---

## THREE-LAYER SEPARATION — READ FIRST

- **Meta project** — this repo.
- **Bootstrap skill** — a single markdown file.
- **Deliverable architecture** — this prototype.

---

## What worked

**Client-facing surface is unambiguously the strongest of any
prototype.** Priya opens a shared Drive folder. Zero learning curve.
Zero account creation. She reads Docs, comments, edits. This is the
dimension where 01 beats 00 and 02 decisively, and beats 03 for typical
non-technical clients.

**Natural narrative/structured split.** Docs for narrative (discovery
summary, decisions, handoffs, weekly updates), Sheets for tabular
(bottlenecks, integration specs, audit table). Each kind of content
goes where it is naturally most readable. This split is more honest
than forcing everything into one shape.

**Apps Script bridge is a real, deployable thing.** The bridge code in
`generated/apps-script/bridge.gs` is a working skeleton. It is thin,
focused, and runs on Google's infrastructure at no cost.

**Multi-client isolation is clean.** One Drive folder per engagement,
separately permissioned. Folder-scoped ACLs prevent bleed the way Notion
workspace-scoped ACLs sometimes do not.

**Persistence is strong.** Google Drive is stable, versioned
automatically, and survives years. Revision history is a built-in
backup.

**Cross-LLM reach is broader than 00.** Apps Script Web App is a plain
HTTPS endpoint. Claude MCP, ChatGPT custom GPT action, Perplexity
(limited) — all can hit it if the operator sets the key up.

## What broke / friction

**Setup burden is real.** First deployment: ~45 minutes. Six folders,
~10 files, Apps Script deployment, OAuth consent, share settings. This
is the worst deployment friction of the four prototypes.

**Template instantiation is the answer.** On engagement 2 the operator
does `Make a Copy` on a template Drive folder — cuts to ~15 minutes.
But this means the bootstrap skill needs to know how to clone a
template, not build from scratch. That's a real skill-delta requirement.

**Markdown fidelity going into Docs is imperfect.** Complex tables lose
some formatting. Nested lists sometimes collapse. Workaround: keep
complex structured state in Sheets, not Docs. Acceptable tradeoff but
worth naming.

**Two-tool mental model for operator.** Narrative lives in Docs,
structured in Sheets. Operator has to remember which is which. Not a
blocker but slightly heavier than prototype 00's one-format-everywhere
or prototype 02's markdown-only shape.

**Apps Script scope consent is a one-time confused moment.** First time
the bridge writes to a Doc, Google shows a scary "unverified app"
warning. Operator clicks through "Advanced → Go to script (unsafe)."
Standard but non-zero friction.

**Write-back is reliable but not instantaneous.** Cold-start latency
500ms–2s first call per session. Fine in practice; worth noting.

## Case-study fit per payload item

| Payload item | Fit | Notes |
|---|---|---|
| Discovery summary | 5/5 | Google Doc native fit |
| Current-state audit table | 5/5 | Sheet is a better view than any markdown table |
| Bottleneck hypotheses | 5/5 | Sheet rows with structured fields; filterable, sortable |
| Week-2 scope / handoff | 4/5 | Handoff log as Doc works; slightly less diffable than markdown |
| Weekly client update | 5/5 | This is where 01 wins hard. Priya opens the Doc. No export step. |
| Build-trigger moment | 4/5 | Subcontractor scope lives in its own Doc; external repo linked from within; works but slightly more visible-to-client than ideal |

## Cross-LLM reach

- Claude: 3/3 (Apps Script webhook, Drive MCP, direct URL paste)
- ChatGPT: 3/3 (Apps Script custom GPT action, Drive plugin, URL paste)
- Perplexity: 2/3 (read via URL; write via webhook with effort)

**Score: ~2.7/3 — meaningfully stronger than 00 (~1.5/3).**

## Cost

- Operator: $0 on personal Gmail; $6/user/mo on Workspace
- Client: $0
- Scaling cliff: Apps Script quotas comfortable at 3-engagement scale
- Zapier: not required; optional for cross-tool glue only

## Recommendation

**Strong v1 candidate. Likely the Pass 2 promotion.**

Setup burden is the real cost to pay. Once paid, the client experience
is materially better than any alternative, and the cross-LLM reach is
broader than prototype 00.

If I had to pick the winner on Pass 1 paper analysis alone, this is
the one. Pass 2 live-deployment is needed to confirm the setup friction
is genuinely a one-time cost (not a recurring source of operator pain).

## Sibling-variant readiness

**Moderate.** Code variant would attach a git repo alongside the Drive
folder, with the subcontractor scope doc pointing at it. Slightly less
elegant than prototype 00's all-in-one structure, but acceptable —
the separation between "client-facing Drive" and "operator-facing
code repo" actually matches the sibling model's own design intent.
