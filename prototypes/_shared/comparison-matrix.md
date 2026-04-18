project_slug: project-doc-skill
doc_type: comparison-matrix
updated_at: 2026-04-18

# Comparison Matrix

Rubric for scoring each prototype after Pass 1. Two axes: storage /
human surface (which prototype), and integration plane (whether Zapier
MCP wraps it). Scores are Pass 1 only; Pass 2 adds live-deployment
signal.

---

## THREE-LAYER SEPARATION — READ FIRST

- **Meta project** — this repo.
- **Bootstrap skill** — a single markdown file.
- **Deliverable architecture** — what each prototype produces.

This matrix scores candidate **deliverable architectures**, not the
meta project or the bootstrap skill.

---

## Scoring scale

Each dimension scored 1–5 where noted. Cost and binary fields listed
directly.

- 5 — excellent, materially better than alternatives
- 4 — good, no real friction
- 3 — acceptable, with caveats
- 2 — workable but significant friction
- 1 — broken or untenable at this use case

---

## Dimension 1 — Storage / human surface

Score the deliverable architecture itself, independent of integration
plane.

| Dimension | 00 baseline | 01 Google Docs | 02 HackMD | 03 Notion |
|---|---|---|---|---|
| Non-technical client friendliness (1–5) | | | | |
| Client edit safety — how easily a client can break something (1–5, higher = safer) | | | | |
| Narrative memory fit — document-shaped content (1–5) | | | | |
| Structured state fit — tabular/record-shaped content (1–5) | | | | |
| Client-facing surface clarity — can client skim in under 2 min (1–5) | | | | |
| Operator-side power — can operator do bulk edits, find-replace, history (1–5) | | | | |
| Multi-client isolation — separate engagements cleanly separated (1–5) | | | | |
| Session persistence — survives across LLM sessions without manual work (1–5) | | | | |
| Handoff / compaction fit — does end-of-session update feel natural (1–5) | | | | |
| Cross-LLM reach — how many of Claude, ChatGPT, Perplexity can read and write repeatedly (count 0–3) | | | | |
| Mainstream familiarity — does the typical Upwork client already know it (1–5) | | | | |

---

## Dimension 2 — Write-back bridge

How updates get from the model into the canonical state.

| Dimension | 00 baseline | 01 Google Docs | 02 HackMD | 03 Notion |
|---|---|---|---|---|
| Native bridge available — official MCP, API, or equivalent (yes/no) | | | | |
| Bridge setup burden (1–5, higher = easier) | | | | |
| Bridge reliability — does it work without babysitting (1–5) | | | | |
| Bridge cost (direct) | | | | |
| Replaceable without Zapier — can operator do this without a Zapier sub (yes/no) | | | | |

---

## Dimension 3 — Cost

Realistic operator and client costs at 3-concurrent-engagement scale.

| Dimension | 00 baseline | 01 Google Docs | 02 HackMD | 03 Notion |
|---|---|---|---|---|
| Operator monthly cost (USD) | | | | |
| Client monthly cost (USD) | | | | |
| Free-tier scaling cliff — where does free tier break | | | | |
| Zapier required (yes / optional / no) | | | | |
| Zapier realistic monthly cost at 3-engagement scale (USD) | | | | |

---

## Dimension 4 — Deployment (Pass 1 observation)

How hard is it to get from "operator ran the skill" to "architecture
exists and is ready to use."

| Dimension | 00 baseline | 01 Google Docs | 02 HackMD | 03 Notion |
|---|---|---|---|---|
| Clicks to running — approximate step count | | | | |
| Accounts the operator must create | | | | |
| Accounts the client must create | | | | |
| Auth / OAuth setup complexity (1–5, higher = simpler) | | | | |
| Time from zero to usable (estimate) | | | | |

---

## Dimension 5 — Case-study fit

Does the architecture cleanly hold the six week-1 content payload items
from `test-project-spec.md`. Score each prototype on each item (1–5).

| Payload item | 00 | 01 | 02 | 03 |
|---|---|---|---|---|
| Discovery summary (narrative) | | | | |
| Current-state audit table (structured) | | | | |
| Three bottleneck hypotheses (decisions with rationale) | | | | |
| Proposed week-2 scope (handoff artifact) | | | | |
| Weekly client update (client-facing surface) | | | | |
| Build-trigger moment (sibling-variant handoff test) | | | | |

---

## Dimension 6 — Operator maintainability

How much ongoing operator work the architecture creates.

| Dimension | 00 baseline | 01 Google Docs | 02 HackMD | 03 Notion |
|---|---|---|---|---|
| Sync discipline required — how much operator must manage drift (1–5, higher = less) | | | | |
| Template reuse — can operator spin up next engagement fast (1–5) | | | | |
| Backup / archival — does canonical state survive if the platform dies (1–5) | | | | |

---

## Dimension 7 — V1 design fit

Judgment calls about the future state.

| Dimension | 00 baseline | 01 Google Docs | 02 HackMD | 03 Notion |
|---|---|---|---|---|
| Sibling-variant readiness — how cleanly would `skill-code-variant` extend this with a git backend (1–5) | | | | |
| Interview → captured-state → generation seam — does this architecture make the seam natural or awkward (1–5) | | | | |
| V1 overhaul viability — candidate plausibility for v1 as-is (1–5) | | | | |

---

## Totals and recommendation

After scoring all dimensions, compute:

- **Storage raw score** — sum of Dimension 1 (max 50, plus cross-LLM
  count as bonus)
- **Bridge score** — sum of Dimension 2 (scaled 1–5 equivalents)
- **Cost-adjusted score** — storage raw score minus a cost penalty if
  monthly operator cost > $40 at 3-engagement scale
- **Case-study fit** — sum of Dimension 5 (max 30)
- **V1 fit** — sum of Dimension 7 (max 15)

Recommendation template:

- **Top pick:** [prototype name] — [one sentence why]
- **Runner-up:** [prototype name] — [one sentence why]
- **Drop:** [any prototype scoring <60% of top] — [one sentence why]
- **Zapier MCP verdict:** [required / optional / avoid] — [one sentence why]
- **Promote to Pass 2:** [1–2 prototypes]

---

## What this matrix does not score

- Live deployment friction (Pass 2)
- Long-term reliability (months of use)
- Team collaboration at scale beyond operator + client + 2 agency staff
- Code-variant compatibility beyond "clean backend extension possible"
