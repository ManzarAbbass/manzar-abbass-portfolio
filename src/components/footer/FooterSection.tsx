import Link from "next/link";

const FOOTER_LINKS = [
  { label: "Services", href: "/#services" },
  { label: "Work", href: "/#work" },
  { label: "Process", href: "/#process" },
  { label: "Contact", href: "/#contact" },
];

const SOCIAL_LINKS = [
  { label: "GitHub", href: "https://github.com/ManzarAbbass" },
  { label: "Email", href: "mailto:manzarja32@gmail.com" },
];

export default function FooterSection() {
  return (
    <footer className="border-t border-white/10 bg-[#0A0A0A]">
      <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="flex flex-col gap-3">
            <a href="/" className="font-serif text-2xl font-bold tracking-tight text-[#EAB308]">
              MA
            </a>
            <p className="max-w-xs text-sm leading-relaxed text-[#818281]">
              Full Stack Developer building web apps and SaaS tools with Next.js, TypeScript, and modern databases.
            </p>
          </div>

          <div className="flex flex-wrap gap-10">
            <div className="flex flex-col gap-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#EAB308]">
                Navigation
              </span>
              <ul className="flex flex-col gap-2">
                {FOOTER_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#818281] transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#EAB308]">
                Connect
              </span>
              <ul className="flex flex-col gap-2">
                {SOCIAL_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-sm text-[#818281] transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <hr className="my-8 border-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-[#818281]">
            &copy; {new Date().getFullYear()} Manzar Abbass. All rights reserved.
          </p>
          <a
            href="#"
            className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#818281] transition-colors hover:text-[#EAB308]"
          >
            Back to top &uarr;
          </a>
        </div>
      </div>
    </footer>
  );
}
