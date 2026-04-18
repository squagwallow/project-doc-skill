project_slug: project-doc-skill
doc_type: prototype-findings
prototype: 03-notion-mcp-bridge
updated_at: 2026-04-18

# Findings — Prototype 03 (Notion + MCP Bridge)

---

## THREE-LAYER SEPARATION — READ FIRST

- **Meta project** — this repo.
- **Bootstrap skill** — a single markdown file.
- **Deliverable architecture** — this prototype.

---

## What worked

**Highest client-side ceiling.** Notion databases with filterable views
are materially more capable than any Docs/Sheets or markdown
alternative. Priya can filter Bottlenecks by priority, group by
proposed owner, or switch to a build-queue view. No other prototype
offers this out of the box.

**MCP makes write-back feel native.** The write-back path is cleaner
than Apps Script (01) or custom webhook (02). Claude desktop + Notion
MCP is genuinely a first-class integration.

**Highest sibling-variant readiness.** Databases naturally track
sub-efforts (linked repo URL, status column, owner). Priya sees status
without touching the repo. Operator enters repo only when intentionally
working maintenance — matches sibling-variant design exactly.

**Familiarity for Priya is unusually high.** Lumen already runs on
Notion. Priya is fluent. This is a rare case where the client is
*more* Notion-native than the average operator.

**Template duplication is first-class.** Engagement 2 is 10 minutes.

**Page tree structure is visually intuitive.** The nested page model
maps cleanly to engagement phases; sidebar navigation is familiar.

## What broke / friction

**V0's workspace-bleed concern is real but manageable with
discipline.** This prototype neutralizes it by requiring top-level-page
scoping and explicit MCP scope verification. That works **only if the
operator actually does it.** A sloppy operator who grants workspace-
root MCP access reintroduces the v0 problem immediately.

This is an operator-discipline guardrail, not a structural
impossibility. Skill must enforce the verification step.

**Content model is heavier than markdown or Docs.** Narrative pages in
Notion read fine but feel slightly more "app-like" than long-form. Not
a blocker; worth noting vs. Google Docs for clients who prefer
document-shaped reading.

**Rate limits on free plan bite at session scale.** Recommendation:
Plus plan ($10/mo) for paid client work. Not a free solution.

**Scope discipline across engagements requires care.** One top-level
page per engagement, separate MCP scope per engagement. Easy to do,
easy to skip.

**Cross-LLM reach is uneven.** Claude MCP is excellent. ChatGPT has a
Notion connector but less seamless. Perplexity is weak.

## Case-study fit per payload item

| Payload item | Fit | Notes |
|---|---|---|
| Discovery summary | 4/5 | Reads fine; slightly less smooth than Docs for long-form |
| Current-state audit table | 5/5 | Database is the best view of this data of any prototype |
| Bottleneck hypotheses | 5/5 | Database with filterable views; unmatched |
| Week-2 scope / handoff | 4/5 | Works; Notion page is slightly less linear than a Doc for handoff flow |
| Weekly client update | 5/5 | Native Notion page; Priya already fluent |
| Build-trigger moment | 5/5 | Subcontractor scope page + database entry with linked repo; cleanest in class |

## Cross-LLM reach

- Claude: 3/3 (MCP is native and first-class)
- ChatGPT: 2/3 (Notion connector exists, less seamless than Claude MCP)
- Perplexity: 1.5/3 (read-only via share links)

**Score: ~2.2/3 — strong on Claude, weaker on cross-product than 01.**

## Cost

- Operator: ~$10/mo at 3-engagement scale (Plus plan)
- Client: $0
- Zapier: not required

## V0 rejection remediation verdict

**Workspace bleed concern: materially reduced but not eliminated.** The
page-scoped MCP approach works when operator discipline holds. The
skill must enforce scope verification as a blocking step. With that
guardrail, v0's rejection is overridable with cause.

**Confabulation risk concern: handled by MCP scope.** Previously, LLMs
interacting with Notion via generic tools would inadvertently touch
neighboring workspace content. Page-scoped MCP prevents this by design.

**Conclusion:** v0's Notion rejection was correct for v0's context
(pre-MCP, workspace-wide access). It is overridable for v1 *if* page-
scoping discipline is enforced by the skill's deployment instructions.

## Recommendation

**Strong second v1 candidate.** Most appropriate when:
- Client is already a Notion user (like Priya at Lumen)
- Engagement benefits from filterable structured views (lots of
  bottlenecks, integrations, decisions to track)
- Operator is disciplined about page-scoped MCP access

**Less appropriate when:**
- Client is not Notion-native and has no appetite for learning it
- Operator has a sloppy workspace-access pattern
- Engagement is primarily narrative/document-shaped (Docs or HackMD
  read better)

Recommended for Pass 2 alongside prototype 01. Head-to-head live
deployment of 01 vs. 03 is the right next step.

## Sibling-variant readiness

**Highest of all four prototypes.** Notion databases are purpose-built
for tracking status of linked sub-work. A Bottleneck row can have a
"linked build repo" column; Priya sees the status; operator enters the
repo only on purpose.
