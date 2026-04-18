project_slug: project-doc-skill
doc_type: retrofit-comparison
target_project: job-search
updated_at: 2026-04-18

# Retrofit Comparison — 01 vs 03 on job-search content

Side-by-side of how the two v1 candidate architectures actually hold
the real job-search content. Paper comparison; Phase A live deployment
will layer friction signal on top.

---

## THREE-LAYER SEPARATION — READ FIRST

- **Meta project** — this repo.
- **Bootstrap skill** — a single markdown file.
- **Deliverable architecture** — 01 vs 03, both retrofitted with
  job-search content.

---

## TL;DR

**03 (Notion) edges out 01 (Google Docs) for job-search specifically.**
The margin is tighter than on Lumen, but three artifacts swing it:
Flagged Jobs database, Writing Samples database, Portfolio database.
These three are the densest structured-state in job-search, and
Notion's database model is materially better than Google Sheets for
the way the operator uses them.

The narrative artifacts (profile, strategy, income strategy) slightly
favor 01 — Docs read smoother for long-form prose — but the margin is
smaller than the database margin goes the other way.

**This flips the Pass 1 ordering.** On Lumen (client-facing work),
Pass 1 scored 01 ahead of 03. On job-search (operator-internal,
structured-state-heavy, no client), 03 comes out ahead. That's
important: the winner is project-shape-dependent, not a universal
fact.

## Artifact-by-artifact

| Artifact | 01 (Google) | 03 (Notion) | Winner |
|---|---|---|---|
| Entry | Doc with hyperlinks to folder items | Top-level page with child page refs | Tie; Notion sidebar slightly nicer |
| Decision Log | Doc, append-only by convention | Page, append-only by convention | Tie |
| Handoff Log | Doc | Page | Tie |
| Current State | Doc with sections | Page with sections | Tie |
| **Profile** | Doc — narrative reads smoothly | Page — slightly less smooth at 400-word length | 01 |
| **Portfolio** | Doc + companion Sheet (ugly split) | Single database with page bodies | **03 meaningfully** |
| Strategy | Doc with native tables | Page with native tables | Tie; Notion tables prettier, neither filterable |
| Income Strategy | Doc with tables | Page with tables | Tie |
| **Flagged Jobs** | Sheet with data validation + manual filters | Database with Select props + persistent views | **03 meaningfully** |
| **Writing Samples** | Subfolder of Docs with frontmatter | Database mapping format-spec to properties | **03 meaningfully** |
| Prompts (SOPs) | Docs (flat prose under headings) | Pages with toggle blocks + callouts | 03 |
| Cover Letter Style Guide | Doc with bad→good sections | Page with callouts + code blocks for examples | 03 slightly |
| Formats (reference specs) | Docs | Pages | Tie |

## Where 01 wins on job-search

- **Long-form profile narrative** reads smoother in Docs than Notion
- **No account creation.** If operator ever shares with a mentor or
  coach, Drive is friction-free; Notion requires signup for private
  content
- **Familiarity of Google UX** if operator wants to hand off to a
  non-Notion user later (career coach, etc.)
- **Simpler write-back mechanics** — Apps Script is one file of JS,
  done; Notion MCP has a few moving parts

## Where 03 wins on job-search

- **Flagged Jobs** database with select-color badges and persistent
  filter views is the single largest operator-felt improvement over
  every alternative
- **Portfolio** as unified database resolves the 01 Doc-vs-Sheet split
- **Writing Samples** frontmatter → properties is a direct 1:1 mapping;
  queries are free
- **Prompts-as-SOPs** feel procedural, not prosaic
- **Scope guardrail is cleaner** — one top-level page, MCP scope
  explicit, no ACL-per-file discipline needed
- **Cross-reference between portfolio items and profile** is native
  (linked pages) — no manual sync

## Where both lose

- **No client-facing surface exercise.** Job-search has none. The axis
  where 01 historically wins big (mainstream client familiarity) gets
  no stress here. If Phase A winner is being chosen for job-search
  alone, this tilts 03 further ahead; if Phase A is informing a v1
  decision across future client-facing engagements too, 01's advantage
  on Lumen must re-enter the calculation.

## Project-shape insight for v1 skill design

**This surfaces a real v1 skill design question the Pass 1 synthetic
Lumen analysis couldn't surface:** the right deliverable architecture
may be *project-shape dependent*.

- **Structured-state-heavy, operator-internal projects** (job-search
  shape): 03 wins
- **Narrative-heavy, client-facing, mixed ops projects** (Lumen shape):
  01 wins

Three ways the v1 skill could handle this:

1. **Pick for operator** based on interview signals (presence of
   non-technical client + long narrative dominance → 01; operator-only
   + database-shaped structured state → 03)
2. **Let operator pick** with a brief decision guide in Part 2 of the
   interview
3. **Default to one** and offer override with cause

My read: (1) is the right answer for v1. The skill already asks
exclusion-criteria questions in the interview; one or two more
targeted questions could drive the architecture pick automatically.
Makes the skill genuinely adaptive to project shape.

## Recommendation for Phase A live deployment

**Deploy 03 for job-search.** This is the architecture that will
make the operator happier with the actual content. Setup time is
comparable (both ~30 minutes with templates), MCP scope guardrail is
clean because the operator has no pre-existing sprawling Notion
workspace to worry about.

**Note for the live test:** the one thing Phase A cannot test on
job-search is the client-facing surface axis. To close that gap
before declaring a v1 winner, operator should also deploy 01 (in
parallel or right after) with *Lumen-shaped* content — i.e., revisit
the Lumen case study with real accounts — to validate the 01 strength
under real deployment. That's effectively a second Phase A, scoped to
the client-facing axis.

Alternative (cheaper): skip the second deployment, accept that the
v1 skill will need an architecture-choice step in its interview, and
plan for both 01 and 03 to be supported variants. This is probably
the right call — v1 isn't picking a single architecture forever; v1
is picking a *default* and supporting overrides.

## Confidence

Paper analysis. Real deployment friction unobserved. Most likely to
shift under live use:
- 01 setup time (may be worse or better than estimated)
- 03 MCP scope actually holding in practice (discipline-dependent)
- Whether narrative-in-Notion feels as rough as suggested or is fine

These are the exact axes Phase A live deployment is designed to
measure.
