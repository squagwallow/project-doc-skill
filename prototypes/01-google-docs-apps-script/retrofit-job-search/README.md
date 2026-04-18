project_slug: project-doc-skill
doc_type: prototype-retrofit
prototype: 01-google-docs-apps-script
target_project: job-search
updated_at: 2026-04-18

# Retrofit — job-search as Prototype 01 (Google Docs + Apps Script)

Simulated retrofit of the existing job-search repo into prototype 01's
deliverable architecture. What the operator would see after running
the retrofit.

---

## THREE-LAYER SEPARATION — READ FIRST

- **Meta project** — this repo.
- **Bootstrap skill** — a single markdown file.
- **Deliverable architecture** — this retrofit's output.

---

## Folder / file map

```
Job Search/  (shared Drive folder)
  Entry.gdoc
  Current State.gdoc
  Decision Log.gdoc
  Handoff Log.gdoc
  01-Upwork/
    Profile.gdoc                    ← narrative, long-form
    Portfolio.gdoc                  ← narrative per item
    Portfolio Summary.gsheet        ← structured row-per-item for filtering
    Strategy.gdoc                   ← narrative + rendered tables
    Income Strategy.gdoc            ← narrative + rendered tables
  02-General-Jobs/
    (deferred — empty subfolder)
  03-Process/
    Job Search Prompt.gdoc
    Prepare Application Prompt.gdoc
    Cover Letter Style Guide.gdoc
    Writing Samples/                ← subfolder of Docs, one per sample
  04-Queue/
    Flagged Jobs.gsheet             ← primary structured state
  05-Formats/
    Job Listing Format.gdoc
    Writing Sample Format.gdoc
  _System/
    Apps Script deployment URL + config (hidden from any future viewer)
```

## Design choices — where 01 pushed on the content

**Portfolio as both Doc and Sheet.** This is a real tension. The three
portfolio items have narrative fields ("strongest for," role,
description) that want Doc-shaped prose, AND structured fields (tags,
link, Upwork URL) that want filterable rows. Choice made: keep the
narrative Doc as canonical, add a lightweight Summary Sheet that
mirrors the key structured fields for quick reference. Slight
duplication; the Sheet is never the source of truth.

**Flagged Jobs as a Sheet.** Unambiguous win for Sheets. Extended
priority tags (applied, interview, closed-won) work as a select-like
column via data validation. Filter views by status. Append-only
discipline is easier in a Sheet than in a Doc.

**Strategy and Income Strategy stay as Docs.** Both have embedded
tables (milestones, rate ladder, income math), but the tables are
reference markers inside narrative flow. Splitting them into separate
Sheets would fragment the reading experience. Native Google Doc tables
render acceptably.

**Writing Samples as subfolder of Docs.** The frontmatter fields
(date, channel, job_type, deliverable, outcome) are metadata that
could be a Sheet. Chose Docs because the body is the point and
samples are read end-to-end, not queried. If the volume grows past
~30, reconsider — a Sheet index pointing at Doc files may become
useful.

**Prompts as Docs.** The job-search-prompt and prepare-application-prompt
are reference SOPs — read them through, follow them. Doc renders the
step-by-step cleanly.

## What works well in this architecture

- Profile and Strategy narrative long-form reads beautifully in Docs
- Flagged Jobs Sheet is the canonical win — much better than markdown
- Client-facing surface: if operator ever shares this with a coach or
  mentor, the Drive folder is self-explanatory with zero onboarding
- Comments on Docs work exactly how operators expect from Google UX
- Writing samples in a subfolder of Docs is a natural fit

## Where 01 gets awkward on this project

- **Portfolio dual-representation.** Maintaining narrative Doc + summary
  Sheet is the single ugly spot. Operator has to remember to keep them
  in sync. Apps Script bridge could auto-sync from the Doc's headers,
  but that's extra machinery for an operator-only project.
- **Cross-doc linking** is clunkier than Notion's page-tree. Entry.gdoc
  must maintain hyperlinks to each other file manually. Bridge helps
  (section replacements) but nothing is as natural as a Notion sidebar.
- **Prompts-as-docs read fine but don't feel like SOPs.** In Notion,
  toggle blocks and callouts make SOPs feel procedural. Google Docs
  renders them as flat prose. Workable, slightly lower-fi.

## Files in this retrofit

- `docs/entry.md` — Entry.gdoc content, showing navigation
- `docs/profile.md` — excerpted (full version ~400 words)
- `docs/strategy-excerpt.md` — shows how tables render in Docs
- `docs/portfolio.md` — narrative version
- `sheets/portfolio-summary.csv` — structured summary companion
- `sheets/flagged-jobs.csv` — full queue content (primary structured test)
- `docs/decision-log.md` — full v0.4-era content, retrofit untouched
- `docs/job-search-prompt.md` — prompt content as Doc
