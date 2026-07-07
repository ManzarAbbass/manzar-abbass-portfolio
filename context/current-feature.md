# Current Feature: Portfolio Selected Work Section

## Status

In Progress

## Goals

- Alternating two-column rows: screenshot on one side, project details on other
- Per project: category label, project name + external link icon, 2-3 line real description, tech stack tags
- Badge overlay on screenshot only when a real, verifiable fact exists (e.g. "Live on Vercel", "Open source") — omit if none
- Primary entry: DevStash — developer knowledge hub (Next.js 15, TypeScript, Prisma, Neon PostgreSQL, NextAuth v5, Stripe, Upstash Redis, Supabase Storage, OpenRouter API)
- Secondary entries: Expense Tracker, User Management Dashboard — framed as learning projects
- Use accurate category labels (e.g. "PERSONAL PROJECT", "COURSE PROJECT") — no fabricated client labels

## Notes

- Section 3 of 5 in the portfolio layout
- Alternating image/text row layout per screenshot reference
- Project data must come from mock data file — no invented metrics, ratings, or user counts
- References: @context/portfolioui/selected-work.md, @context/project-overview.md, @context/portfolioui/hero.md, @context/portfolioui/services.md, @context/portfolioui/process.md, @context/portfolioui/contact.md

## History

- 2026-07-05: Initial Next.js and Tailwind CSS setup with project scaffolding
- 2026-07-05: Implemented hero section with navbar, SVG illustration, and responsive layout
- 2026-07-05: Implemented services section (Section 2) with Full-Stack Web Applications and MVP Builds cards
- 2026-07-06: Fixed responsiveness on small devices — scaled headings, badges, buttons, card padding, centered hero text on mobile, fixed heading line break on desktop, and added hamburger menu animation

