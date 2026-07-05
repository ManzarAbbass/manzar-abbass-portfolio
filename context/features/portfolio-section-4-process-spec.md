# Portfolio Process Section Spec

## Overview

This is section 4 of 5 for the portfolio site layout — DECISION NEEDED before building. The reference screenshot shows a "how I work with clients" process (discovery call → proposal → weekly check-ins → handoff), which assumes an active client-services business. This only applies if the goal is to actively pitch freelance work now. If the current goal is skill-showcase first, this section should either be cut or replaced with "How I Build" (personal workflow: planning spec → AI-assisted build → security audit → deploy), which is honest and still shows process maturity without implying a client history that doesn't exist yet.

## Requirements for process section (if kept as client-facing)

- 4-column flat layout, no card backgrounds, index number + title + description per column
- Steps must be things actually deliverable right now (e.g. don't promise "30-day support included" or fixed weekly cadence unless realistically sustainable alongside full-time job)

## Requirements for process section (if replaced with "How I Build")

- 4-column layout, same visual style
- Steps: 1) Plan (write spec, define scope) 2) Build (AI-assisted development with OpenCode, following project conventions) 3) Audit (security review — auth, rate limiting, IDOR checks) 4) Ship (deploy, document, iterate)

## References

- @context/portfolioui/process.md
- @context/project-overview.md
- @context/portfolioui/hero.md
- @context/portfolioui/services.md
- @context/portfolioui/selected-work.md
- @context/portfolioui/contact.md
