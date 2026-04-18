project_slug: project-doc-skill
doc_type: prototype-setup
prototype: 00-markdown-git-baseline
updated_at: 2026-04-18

# Setup — Prototype 00: Markdown + Git Baseline

The control. Closest descendant of v0. A git repo with markdown docs,
jsDelivr fallback URL, GitHub connector as primary retrieval.

---

## THREE-LAYER SEPARATION — READ FIRST

- **Meta project** — this repo.
- **Bootstrap skill** — a single markdown file.
- **Deliverable architecture** — this prototype's deliverable: a git
  repo with structured markdown docs.

---

## Accounts the operator must have

- GitHub account (free)
- Claude Code installed locally (to run the skill and commit output)
- jsDelivr access (no account required; CDN)

## Accounts the client must have

- Zero. Client does not interact with the repo directly. Client
  receives a pre-rendered weekly update document (email, Slack, or
  shared Google Doc — operator's choice) that is generated from the
  repo but lives outside it.

## Permissions / auth

- Operator: push access to their own GitHub org or personal account
- Client: read-only if any (but default is no access)

## Pricing

- Operator monthly cost: **$0** (GitHub free tier, personal repo)
- Client monthly cost: **$0**
- Scaling cliff: GitHub free tier is effectively unlimited for this use
  case; only private-collaborator counts would bite, and clients are not
  collaborators

## Zapier status

- Required: **no**
- Optional: could pipe commit events to Slack/email, but not part of
  the core architecture

## Known limitations

- Client cannot see or edit anything directly
- Operator must manually produce the client-facing weekly update as a
  separate artifact
- Non-technical operator would struggle with git workflow
- Handoff between sessions works; handoff between operator and agency
  staff does not (they can't access the repo meaningfully)
