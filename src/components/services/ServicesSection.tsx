const services = [
  {
    id: "01",
    title: "Full-Stack Web Applications",
    description:
      "End-to-end web apps built for performance and scale, from database to deployment.",
    bullets: [
      "React / Next.js frontend",
      "Node.js backend",
      "Database design & APIs",
      "AI feature integration",
      "Deployment & CI/CD",
    ],
  },
  {
    id: "02",
    title: "MVP Builds",
    description:
      "From idea to working product — fast, scoped, and built to ship.",
    bullets: [
      "Scoped and focused delivery",
      "Next.js + TypeScript",
      "Database + Auth included",
      "Vercel deployment",
    ],
  },
];

function ServiceCard({
  id,
  title,
  description,
  bullets,
}: {
  id: string;
  title: string;
  description: string;
  bullets: string[];
}) {
  return (
    <div className="group relative flex flex-col border border-white/10 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#EAB308]/30 hover:shadow-[0_0_30px_rgba(234,179,8,0.08)] md:p-10">
      <div className="absolute inset-0 bg-gradient-to-b from-[#EAB308]/0 to-[#EAB308]/0 opacity-0 transition-opacity duration-300 group-hover:from-[#EAB308]/[0.02] group-hover:to-[#EAB308]/0 group-hover:opacity-100" />
      <div className="relative flex items-center justify-between">
        <span className="font-mono text-sm text-[#EAB308]/60">{id}</span>
        <div className="h-8 w-8 rounded-sm border border-[#EAB308]/20 transition-colors duration-300 group-hover:border-[#EAB308]/40">
          <svg viewBox="0 0 32 32" fill="none" className="h-full w-full p-2">
            <rect x="4" y="4" width="24" height="24" rx="3" stroke="#EAB308" strokeWidth="1" opacity="0.5" />
            <path d="M12 16l4 4 8-8" stroke="#EAB308" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
          </svg>
        </div>
      </div>
      <h3 className="relative mt-4 font-serif text-3xl font-black leading-tight text-white">
        {title}
      </h3>
      <p className="relative mt-3 text-base leading-relaxed text-[#818281]">
        {description}
      </p>
      <ul className="relative mt-6 space-y-2.5">
        {bullets.map((bullet, i) => (
          <li
            key={bullet}
            className="flex items-start gap-2.5 font-mono text-sm text-[#818281] transition-all duration-300 group-hover:text-gray-300"
            style={{ transitionDelay: `${i * 50}ms` }}
          >
            <span className="mt-0.5 shrink-0 text-[#EAB308] transition-transform duration-300 group-hover:scale-110">
              <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4">
                <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
                <path d="M5 8.5l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            {bullet}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ServicesSection() {
  return (
    <section className="relative border-b border-white/20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-[#EAB308]/5 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-[#EAB308]/5 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="flex items-center gap-4">
          <span className="font-mono text-sm tracking-[0.2em] text-[#EAB308]">02</span>
          <span className="h-px w-8 bg-[#EAB308]/40" />
          <h2 className="font-serif text-5xl font-black text-white md:text-6xl lg:text-7xl">
            Services
          </h2>
        </div>
        <hr className="mt-4 border-white/10" />

        <div className="relative mt-16 grid grid-cols-1 md:grid-cols-2">
          {services.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
