# Section: Services

## Layout
- Section header: small yellow index number "01" + large serif heading "Services", horizontal rule below spanning full width.
- 2x2 grid of service cards (2 columns visible per row, at least 2 rows), separated by thin borders (no card shadows, just hairline dividers).
- Each card: index number (yellow, mono, e.g. "01"), bold serif subheading, gray body paragraph, checklist of 3-4 capability bullets with yellow checkmarks.

## Content structure (per card)
1. Web Applications — full-stack web apps; bullets: React/Next.js frontend, Node.js/Go backend, DB design & APIs, Deployment & CI/CD.
2. Mobile Development — cross-platform apps; bullets: iOS & Android, React Native, Offline-first architecture, App Store submission.
3. Technical Consulting — architecture reviews, code audits, technical strategy.
4. MVP Builds — idea to working product fast, focused scope.

## Design notes
- Grid uses CSS grid/flex with border-collapse look (shared borders between cells).
- Consistent icon style: checkmark (✓) in yellow before each bullet, bullet text in muted gray monospace.
- Heading hierarchy: index (mono, yellow, small) → title (serif, bold, white) → description (sans/mono, gray) → checklist.

## To adapt for own portfolio
- Swap 4 services for actual offerings (e.g. Web Apps, currently-learning-mobile if not ready to claim it, Technical Consulting only if credible, or replace MVP Builds with something like "Bug Fixes & Code Reviews" while still building experience).
- Don't list capabilities not actually deliverable yet (e.g. App Store submission, Go backend) — keep checklist honest to current skill level (Next.js, Prisma, NextAuth, Stripe, etc. — matches actual DevStash stack).
