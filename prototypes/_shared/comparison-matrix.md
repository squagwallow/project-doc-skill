project_slug: project-doc-skill
doc_type: comparison-matrix
updated_at: 2026-04-18
status: Pass 1 filled

# Comparison Matrix — Pass 1 Results

Pass 1 paper-analysis scores. Pass 2 live deployment will adjust these.

---

## THREE-LAYER SEPARATION — READ FIRST

- **Meta project** — this repo.
- **Bootstrap skill** — a single markdown file.
- **Deliverable architecture** — what each prototype produces.

This matrix scores candidate deliverable architectures.

---

## Scoring scale

1 broken / 2 significant friction / 3 acceptable / 4 good / 5 excellent.
Cross-LLM reach scored 0–3 (count).

---

## Dimension 1 — Storage / human surface

| Dimension | 00 baseline | 01 Google Docs | 02 HackMD | 03 Notion |
|---|---|---|---|---|
| Non-technical client friendliness | 1 | 5 | 3 | 4 |
| Client edit safety | 5 | 4 | 4 | 3 |
| Narrative memory fit | 4 | 5 | 5 | 3 |
| Structured state fit | 3 | 5 | 3 | 5 |
| Client-facing surface clarity | 1 | 5 | 3 | 4 |
| Operator-side power | 5 | 3 | 4 | 3 |
| Multi-client isolation | 5 | 5 | 3 | 3 |
| Session persistence | 5 | 4 | 4 | 4 |
| Handoff / compaction fit | 5 | 4 | 4 | 4 |
| Cross-LLM reach (0–3) | 1.5 | 2.7 | 2.3 | 2.2 |
| Mainstream familiarity | 1 | 5 | 2 | 4 |
| **Subtotal (×/55 + cross-LLM)** | **36 + 1.5** | **45 + 2.7** | **35 + 2.3** | **37 + 2.2** |

## Dimension 2 — Write-back bridge

| Dimension | 00 | 01 | 02 | 03 |
|---|---|---|---|---|
| Native bridge | no (manual git) | yes (Apps Script) | yes (API) | yes (MCP) |
| Bridge setup burden | 5 | 2 | 3 | 3 |
| Bridge reliability | 5 | 4 | 4 | 4 |
| Bridge cost (direct) | $0 | $0 | $0 | $0 |
| Replaceable without Zapier | yes | yes | yes | yes |

## Dimension 3 — Cost

| Dimension | 00 | 01 | 02 | 03 |
|---|---|---|---|---|
| Operator monthly (3-eng) | $0 | $0–6 | $5–8 | ~$10 |
| Client monthly | $0 | $0 | $0 (account needed) | $0 |
| Free-tier scaling cliff | none | Apps Script quotas (far off) | private notes at ~3 eng | guest seats at scale |
| Zapier required | no | no | no | no |
| Zapier cost at 3-eng | $0 | $0 | $0 | $0 |

## Dimension 4 — Deployment

| Dimension | 00 | 01 | 02 | 03 |
|---|---|---|---|---|
| Clicks to running (approx steps) | 7 | 10 | 7 | 10 |
| Accounts operator must create | 0 | 0 | 0–1 | 0–1 |
| Accounts client must create | 0 | 0 | 1 | 0–1 |
| Auth / OAuth simplicity | 5 | 3 | 4 | 3 |
| Time to usable (first time) | ~10 min | ~45 min | ~25 min | ~30 min |
| Time to usable (template) | ~5 min | ~15 min | ~10 min | ~10 min |

## Dimension 5 — Case-study fit (1–5 per payload item)

| Payload item | 00 | 01 | 02 | 03 |
|---|---|---|---|---|
| Discovery summary (narrative) | 5 | 5 | 5 | 4 |
| Current-state audit table (structured) | 4 | 5 | 3 | 5 |
| Bottleneck hypotheses (decisions + rationale) | 5 | 5 | 4 | 5 |
| Week-2 scope / handoff | 5 | 4 | 5 | 4 |
| Weekly client update (client-facing) | 2 | 5 | 4 | 5 |
| Build-trigger moment (sibling handoff) | 5 | 4 | 5 | 5 |
| **Subtotal (×/30)** | **26** | **28** | **26** | **28** |

## Dimension 6 — Operator maintainability

| Dimension | 00 | 01 | 02 | 03 |
|---|---|---|---|---|
| Sync discipline required (higher = less needed) | 5 | 4 | 3 | 3 |
| Template reuse | 4 | 4 | 5 | 5 |
| Backup / archival | 5 | 4 | 3 | 3 |
| **Subtotal (×/15)** | **14** | **12** | **11** | **11** |

## Dimension 7 — V1 design fit

| Dimension | 00 | 01 | 02 | 03 |
|---|---|---|---|---|
| Sibling-variant readiness | 5 | 4 | 3 | 5 |
| Interview → captured-state → generation seam | 5 | 5 | 5 | 5 |
| V1 overhaul viability (as v1 candidate) | 2 | 5 | 3 | 5 |
| **Subtotal (×/15)** | **12** | **14** | **11** | **15** |

---

## Totals

| Prototype | Dim1 (raw) | Dim5 | Dim6 | Dim7 | Cross-LLM | Headline |
|---|---:|---:|---:|---:|---:|---|
| 00 baseline | 36/55 | 26/30 | 14/15 | 12/15 | 1.5/3 | Control; best on cost + isolation, worst on client-facing |
| 01 Google Docs | 45/55 | 28/30 | 12/15 | 14/15 | 2.7/3 | Best overall on paper |
| 02 HackMD | 35/55 | 26/30 | 11/15 | 11/15 | 2.3/3 | Markdown purist; weak on client familiarity |
| 03 Notion | 37/55 | 28/30 | 11/15 | 15/15 | 2.2/3 | Strongest ceiling; depends on operator discipline |

---

## Recommendation

- **Top pick:** **Prototype 01 (Google Docs + Apps Script)** — best balance of client familiarity, surface quality, and cross-LLM reach. Setup burden is the real cost; template duplication mostly solves it on engagement 2+.
- **Close second:** **Prototype 03 (Notion + MCP)** — higher structured-state ceiling and highest sibling-variant readiness. Recommended when client is already Notion-native. Operator-discipline dependency is the main caveat.
- **Drop from candidate pool:** **Prototype 02 (HackMD)** — technically clean but weakest on mainstream client familiarity and requires client account creation; better as an operator-internal draft workspace than as the client-facing deliverable.
- **Keep as control:** **Prototype 00 (markdown/git baseline)** — remains the operator-internal / technical-engagement default and the basis for `skill-code-variant`.
- **Zapier MCP verdict:** optional across all prototypes. Only required as the cross-cutting integration plane when connecting to non-canonical tools (HubSpot, Metricool, Xero, etc.), which is true for this engagement regardless of prototype choice. Budget ~$20/mo on any of them if real tool orchestration is in scope.
- **Promote to Pass 2:** **01 and 03**. Head-to-head live deployment against the Lumen case study (or the operator's first real engagement) is the right next decision-gate.

---

## Pass 1 confidence note

Scores are paper-analysis based on architecture artifacts. The axes most
likely to shift under live deployment:
- Setup burden for 01 (may be worse or better than the 45-min estimate)
- Operator-discipline dependency for 03 (hard to judge without multi-
  engagement history)
- Cross-LLM reach real-world behavior (MCP reliability varies)
