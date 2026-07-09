# Coding Standards — Portfolio

## TypeScript
- Strict mode enabled
- No `any` types — use proper typing or `unknown`
- Define interfaces for all props and data
- Use type inference where obvious

## React
- Functional components only
- Use hooks for state and side effects
- One job per component — keep them focused
- Extract reusable logic into custom hooks

## Next.js
- Server components by default
- Only use `'use client'` when needed:
  - Framer Motion animations
  - Interactivity and hooks
  - Browser APIs
- No API routes needed — static portfolio

## Tailwind CSS
- Tailwind CSS for all styling
- No inline styles
- Dark mode only — no light mode toggle
- Mobile first — always verify small screen layout

## Framer Motion
- Use for entrance animations on scroll
- Fade in up — default animation pattern
- Subtle hover effects on cards and buttons
- No heavy or complex 3D animations

## File Organization
- Components: `src/components/[section]/ComponentName.tsx`
- Pages: `src/app/page.tsx`
- Types: `src/types/index.ts`
- Lib/Utils: `src/lib/[utility].ts`

## Naming
- Components: PascalCase (`HeroSection.tsx`)
- Files: Match component name or kebab-case for utilities
- Functions: camelCase
- Constants: SCREAMING_SNAKE_CASE
- Types/Interfaces: PascalCase

## Code Quality
- No commented-out code
- No unused imports or variables
- Keep components under 100 lines when possible
- One component per section

## Rules
- Never change accent color `#EAB308` or background `#0A0A0A`
- Never add sections not listed in project-overview.md
- Never add fake or placeholder content
- All files must be TypeScript — no `.js` files
