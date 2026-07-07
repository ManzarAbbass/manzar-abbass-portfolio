import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "devstash",
    index: "01",
    category: "PERSONAL PROJECT",
    name: "DevStash",
    description:
      "A developer knowledge hub for saving, organizing, and revisiting snippets, prompts, commands, files, links, and more.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "Neon PostgreSQL",
      "NextAuth",
      "Stripe",
      "Redis",
      "Supabase",
      "OpenRouter",
    ],
    image: "/Devstash.webp",
    href: "https://devstash.vercel.app",
    repo: "https://github.com/ManzarAbbass/devstash",
    badge: "Live on Vercel",
  },
];
