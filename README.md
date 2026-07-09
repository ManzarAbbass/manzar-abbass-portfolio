# Portfolio — Manzar Abbass

A personal freelance portfolio website for **Manzar Abbass**, a Full Stack Developer specialising in web apps and SaaS tools using Next.js, TypeScript, and modern databases.

**[Live Site](https://manzar-developer.vercel.app)** — [Contact](mailto:manzarja32@gmail.com)

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript (strict mode) |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion |
| Forms | Resend + Zod + Sonner |
| Deployment | Vercel |

## Sections

- **Navbar** — Navigation with mobile hamburger menu and CTA
- **Hero** — Who Manzar is and what he builds
- **Services** — Web applications and MVP builds
- **Selected Work** — Proof of work (DevStash project showcase)
- **Process** — 4-step freelance engagement workflow
- **Contact** — Functional contact form with server actions
- **Footer** — Links, socials, back to top

## Design

- **Dark only** — background `#0A0A0A`, accent `#EAB308` (yellow)
- Mobile-first responsive
- Scroll-triggered fade-in-up animations (Framer Motion)
- Subtle hover effects on cards and buttons

## Getting Started

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Commands

| Command | Action |
|---|---|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run lint` | Run ESLint |
| `npm run start` | Start production server |
| `npm run test` | Run Vitest tests |

## Project Structure

```
src/
├── app/
│   ├── page.tsx          # Single-page landing
│   └── layout.tsx        # Root layout
├── components/
│   ├── navbar/
│   ├── hero/
│   ├── services/
│   ├── work/
│   ├── process/
│   ├── contact/
│   └── footer/
├── lib/                  # Utilities & server actions
└── types/                # TypeScript interfaces
```
