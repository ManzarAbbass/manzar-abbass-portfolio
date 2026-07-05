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
    <div className="flex flex-col border border-white/10 p-8 md:p-10">
      <span className="font-mono text-sm text-[#EAB308]">{id}</span>
      <h3 className="mt-3 font-serif text-3xl font-black leading-tight text-white">
        {title}
      </h3>
      <p className="mt-3 text-base leading-relaxed text-[#818281]">
        {description}
      </p>
      <ul className="mt-6 space-y-2">
        {bullets.map((bullet) => (
          <li key={bullet} className="flex items-start gap-2 font-mono text-sm text-[#818281]">
            <span className="mt-0.5 shrink-0 text-[#EAB308]">&#10003;</span>
            {bullet}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ServicesSection() {
  return (
    <section className="border-b border-white/20">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="flex items-center gap-4">
          <span className="font-mono text-sm text-[#EAB308]">02</span>
          <h2 className="font-serif text-5xl font-black text-white md:text-6xl lg:text-7xl">
            Services
          </h2>
        </div>
        <hr className="mt-4 border-white/10" />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2">
          {services.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
