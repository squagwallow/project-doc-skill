project_slug: project-doc-skill
doc_type: prototype-deployment-walkthrough
prototype: 00-markdown-git-baseline
updated_at: 2026-04-18

# Deployment Walkthrough — Prototype 00

From zero to working deliverable architecture for the Lumen engagement.

---

## THREE-LAYER SEPARATION — READ FIRST

- **Meta project** — this repo.
- **Bootstrap skill** — a single markdown file.
- **Deliverable architecture** — git repo with markdown docs.

---

## Steps

1. Open Claude Code in an empty directory
2. Paste the (modified) bootstrap skill URL or content
3. Run the interview (the captured interview content)
4. Skill generates the repo files directly via Claude Code
   FILE:/COMMIT MESSAGE: output
5. Operator creates GitHub repo `lumen-agency-redesign` under their
   account
6. `git init`, `git add`, `git commit`, `git remote add`, `git push`
7. Bootstrap URL is usable: jsDelivr resolves within 2–5 minutes

**Approximate step count: 7**
**Accounts operator must create: 0 (assumes GitHub already)**
**Accounts client must create: 0**
**Auth/OAuth complexity: low (GitHub CLI or browser login, one time)**
**Time from zero to usable: ~10 minutes**

## Where the client fits

Nowhere, directly. The operator produces the Weekly Client Update as a
markdown doc in the repo, then copy-pastes or exports it into whatever
channel the client prefers (email, Google Doc, Slack DM).

This is the biggest friction point vs. Brief 2's weighted criteria.

## Session-start retrieval path

- GitHub connector in Claude.ai (primary)
- jsDelivr entry URL (fallback)
- Claude Code with repo open locally (operator native)

## Session-end write-back path

- Model drafts updated files
- Claude Code applies FILE:/COMMIT MESSAGE: blocks
- Operator commits and pushes

## Multi-client isolation

Excellent. One repo per engagement. Zero workspace bleed risk.
