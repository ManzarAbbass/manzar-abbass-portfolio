import Image from "next/image";
import { projects } from "@/data/projects";

function ExternalLinkIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" className="inline-block h-4 w-4 shrink-0">
      <path
        d="M12 8.5v4a1.5 1.5 0 01-1.5 1.5h-7A1.5 1.5 0 012 12.5v-7A1.5 1.5 0 013.5 4H8M10 2h4v4M6 10l8-8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" className="inline-block h-4 w-4 shrink-0">
      <path
        d="M8 1a7 7 0 00-2.21 13.64c.35.07.48-.15.48-.33v-1.16c-1.97.43-2.38-.94-2.38-.94-.32-.82-.78-1.04-.78-1.04-.64-.44.05-.43.05-.43.7.05 1.07.72 1.07.72.63 1.07 1.65.76 2.05.58.06-.45.25-.76.45-.94-1.56-.18-3.2-.78-3.2-3.48 0-.77.27-1.4.72-1.89-.07-.18-.31-.9.07-1.88 0 0 .59-.19 1.93.72a6.71 6.71 0 013.5 0c1.34-.91 1.93-.72 1.93-.72.38.98.14 1.7.07 1.88.45.49.72 1.12.72 1.89 0 2.7-1.64 3.3-3.2 3.48.25.22.48.65.48 1.3v1.93c0 .19.13.41.49.33A7 7 0 008 1z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function WorkSection() {
  return (
    <section id="work" className="relative border-b border-white/20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-[#EAB308]/5 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-[#EAB308]/5 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="flex items-center gap-4">
          <span className="font-mono text-sm tracking-[0.2em] text-[#EAB308]">03</span>
          <span className="h-px w-8 bg-[#EAB308]/40" />
          <h2 className="font-serif text-4xl font-black text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Selected Work
          </h2>
        </div>
        <hr className="mt-4 border-0 h-px bg-gradient-to-r from-white/10 via-[#EAB308]/30 to-white/10" />

        <div className="mt-16">
          {projects.map((project, i) => {
            const isReversed = i % 2 !== 0;
            return (
              <div key={project.id}>
                {i > 0 && (
                  <div className="relative my-20 flex items-center justify-center md:my-32">
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                    <div className="mx-4 h-2 w-2 rotate-45 border border-white/20 bg-[#0A0A0A]" />
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                  </div>
                )}
                <div
                  className={`grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 lg:gap-16 ${
                    isReversed ? "md:[&>div:first-child]:order-2" : ""
                  }`}
                >
                <div className="group relative overflow-hidden border border-white/10 transition-all duration-500 hover:border-[#EAB308]/30 hover:shadow-[0_0_30px_rgba(234,179,8,0.06)]">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.name}
                        fill
                        loading="eager"
                        className="object-cover transition-all duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    ) : (
                      <>
                        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-[#0A0A0A]" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="font-serif text-5xl font-black text-white/10 sm:text-6xl md:text-7xl">
                            {project.name}
                          </span>
                        </div>
                      </>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  </div>
                  <div className="pointer-events-none absolute left-2 top-2 h-3 w-3 border-l border-t border-white/20" />
                  <div className="pointer-events-none absolute right-2 top-2 h-3 w-3 border-r border-t border-white/20" />
                  <div className="pointer-events-none absolute bottom-2 left-2 h-3 w-3 border-b border-l border-white/20" />
                  <div className="pointer-events-none absolute bottom-2 right-2 h-3 w-3 border-b border-r border-white/20" />
                  <span className="absolute left-3 top-3 flex h-8 w-8 items-center justify-center border border-white/20 bg-black font-mono text-sm font-bold text-[#EAB308]">
                    {project.index}
                  </span>
                  {project.badge && (
                    <span className="absolute left-3 top-14 bg-[#EAB308] px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-[#0A0A0A] shadow-sm animate-pulse">
                      {project.badge}
                    </span>
                  )}
                </div>

                <div className="flex flex-col justify-center">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-px bg-[#EAB308]/60" />
                    <span className="font-mono text-xs tracking-[0.2em] text-[#818281]">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="mt-3 flex items-center gap-2 font-serif text-3xl font-black text-white sm:text-4xl">
                    {project.name}
                    {project.href && (
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#818281] transition-colors hover:text-[#EAB308]"
                        aria-label={`${project.name} live demo`}
                      >
                        <ExternalLinkIcon />
                      </a>
                    )}
                    {project.repo && (
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#818281] transition-colors hover:text-[#EAB308]"
                        aria-label={`${project.name} repository`}
                      >
                        <GitHubIcon />
                      </a>
                    )}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-[#818281]">
                    {project.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-sm border border-white/10 px-2.5 py-1 font-mono text-[11px] text-[#818281] transition-colors hover:border-[#EAB308]/40 hover:text-[#EAB308]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex flex-nowrap gap-2 sm:gap-3">
                    {project.href && (
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-sm border border-[#EAB308] px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest text-[#EAB308] transition-colors hover:bg-[#EAB308] hover:text-[#0A0A0A] sm:px-4 sm:py-2 sm:text-xs"
                      >
                        View Live
                        <ExternalLinkIcon />
                      </a>
                    )}
                    {project.repo && (
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-sm border border-white/20 px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest text-gray-300 transition-colors hover:border-white/50 hover:text-white sm:px-4 sm:py-2 sm:text-xs"
                      >
                        Source Code
                        <GitHubIcon />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
