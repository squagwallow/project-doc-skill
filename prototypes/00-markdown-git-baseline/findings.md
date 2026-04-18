project_slug: project-doc-skill
doc_type: prototype-findings
prototype: 00-markdown-git-baseline
updated_at: 2026-04-18

# Findings — Prototype 00 (Markdown + Git Baseline)

---

## THREE-LAYER SEPARATION — READ FIRST

- **Meta project** — this repo.
- **Bootstrap skill** — a single markdown file.
- **Deliverable architecture** — this prototype.

---

## What worked

**All six week-1 payload items fit cleanly.** Narrative, structured,
decisions, handoff, client update, subcontractor scope — each has an
obvious file location and the architecture absorbs them without
deformation.

**Multi-client isolation is perfect.** One repo per engagement, zero
bleed risk. This is the dimension where 00 beats every alternative.

**Session persistence is strongest.** jsDelivr + GitHub connector means
next-session bootstrap is reliable; v0 has already proven this.

**Write-back is reliable.** Claude Code FILE:/COMMIT MESSAGE: is not
pretty but it works every time.

**Sibling-variant readiness is maximal.** The code variant is a
superset of this shape — adding `src/` is not even structurally novel.

**Cost is zero.** No subscriptions, no task limits, no scaling cliff at
3-engagement scale.

## What broke / friction

**Client-facing surface is absent.** The Weekly Client Update lives in
the repo but the client never sees the repo. Operator has to manually
export each week — copy/paste into email, paste into a separate Google
Doc, or similar. This is the single largest friction point vs. Brief 2's
criteria and is the reason 00 cannot be the v1 recommendation despite
its technical strengths.

**Non-technical operator barrier.** A future operator who isn't
comfortable with git would struggle. This prototype selects for
technical operators.

**Client edit path does not exist.** If Priya wanted to add a comment
to a Bottleneck Finding, there's nowhere for her to do it. The whole
architecture is one-way from operator to client.

**No native cross-LLM reach for the client.** Client cannot interact
with the engagement via ChatGPT or Perplexity at all — they don't have
access to the source.

## Case-study fit per payload item

| Payload item | Fit | Notes |
|---|---|---|
| Discovery summary | 5/5 | Native fit |
| Current-state audit table | 4/5 | Markdown tables work but are less scannable than a real database view |
| Bottleneck hypotheses | 5/5 | One file per finding, structured header, perfect |
| Week-2 scope / handoff | 5/5 | v0 handoff log protocol is already strong |
| Weekly client update | 2/5 | Artifact fits; delivery path to client is manual and fragile |
| Build-trigger moment | 5/5 | Subcontractor scope file is the clean answer; pointer to external repo |

## Cross-LLM reach

- Claude (Claude Code native, GitHub connector, jsDelivr): 3/3 reliable
- ChatGPT (via URL paste of jsDelivr): partial; works for reading, weak
  for writing
- Perplexity: read-only, not useful for write-back

**Score: ~1.5/3 — Claude-favored, cross-LLM weak for write.**

## Recommendation

**Keep 00 as the control benchmark. Do not promote as v1.** Its role is
to define the technical floor that v1 candidates must beat on non-
technical client usability. It beats them all on cost, isolation, and
persistence. It loses decisively on client-facing surface and
cross-product reach — the exact axes v1 is trying to fix.

**Operator-side insight:** if the code variant (sibling) retains this
shape underneath a nicer client surface (prototype 01, 02, or 03), we
might get the best of both worlds without actually having to pick one.
Worth exploring in Pass 2.
