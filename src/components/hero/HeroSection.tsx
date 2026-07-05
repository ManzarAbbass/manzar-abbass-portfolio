export default function HeroSection() {
  return (
    <section className="border-b border-white/20">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col md:flex-row">
        <div className="flex flex-1 flex-col justify-center px-6 pt-24 md:border-r md:border-white/10 md:pr-12 md:pt-0">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#EAB308] bg-transparent px-4 py-1.5">
            <span className="h-2 w-2 rounded-full bg-[#EAB308]" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#EAB308]">
              Open to opportunities
            </span>
          </div>

          <h1 className="mt-6 font-serif text-5xl font-black leading-none tracking-tight [text-shadow:_0_0_1px_#fff,0_0_2px_rgba(255,255,255,0.3)] md:text-6xl lg:text-7xl">
            I build{" "}
            <span className="italic font-black text-gray-400">software</span>
            <br />
            that ships.
          </h1>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-gray-400 sm:text-lg">
            Full-stack web apps and SaaS tools built with Next.js,
            TypeScript, and modern databases. Self-taught developer
            focused on clean architecture and shipping fast.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-sm border border-[#EAB308] px-6 py-3 font-mono text-sm uppercase tracking-widest text-[#EAB308] transition-colors hover:bg-[#EAB308] hover:text-[#0A0A0A]"
            >
              See my work
              <span className="text-lg leading-none">&uarr;</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-sm border border-white/20 px-6 py-3 font-mono text-sm uppercase tracking-widest text-gray-300 transition-colors hover:border-white/50 hover:text-white"
            >
              Get in touch
            </a>
          </div>
        </div>

        <div className="flex flex-1 items-center justify-center px-6 pb-16 pt-16 md:pb-0 md:pt-0">
          <div className="relative aspect-square w-full max-w-md">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#EAB308]/10 via-transparent to-[#EAB308]/5 blur-3xl animate-orb-pulse" />

            <div className="absolute left-1/2 top-1/2 h-3/4 w-3/4 -translate-x-1/2 -translate-y-1/2 animate-spin-slow rounded-2xl border border-[#EAB308]/30 bg-[#0A0A0A] shadow-[0_0_30px_rgba(234,179,8,0.15)]" />

            <svg
              viewBox="0 0 400 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="relative h-full w-full"
            >
              <defs>
                <radialGradient id="orb-glow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#EAB308" stopOpacity="0.12" />
                  <stop offset="100%" stopColor="#EAB308" stopOpacity="0" />
                </radialGradient>
                <linearGradient id="border-grad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#EAB308" stopOpacity="0.5" />
                  <stop offset="50%" stopColor="#EAB308" stopOpacity="0.1" />
                  <stop offset="100%" stopColor="#EAB308" stopOpacity="0.5" />
                </linearGradient>
              </defs>

              <circle cx="200" cy="200" r="160" fill="url(#orb-glow)" />
              <circle cx="200" cy="200" r="148" stroke="#EAB308" strokeWidth="0.5" opacity="0.15" strokeDasharray="4 6" />

              <g className="animate-spin-slow" style={{ transformOrigin: "200px 200px" }}>
                <rect x="170" y="40" width="60" height="60" rx="6" fill="none" stroke="#EAB308" strokeWidth="1" opacity="0.25" />
                <circle cx="80" cy="300" r="4" fill="#EAB308" opacity="0.4" />
                <circle cx="320" cy="100" r="3" fill="#EAB308" opacity="0.3" />
              </g>

              <g className="animate-spin-reverse" style={{ transformOrigin: "200px 200px" }}>
                <line x1="72" y1="200" x2="100" y2="200" stroke="#EAB308" strokeWidth="1" opacity="0.2" />
                <line x1="300" y1="200" x2="328" y2="200" stroke="#EAB308" strokeWidth="1" opacity="0.2" />
                <circle cx="200" cy="348" r="5" fill="none" stroke="#EAB308" strokeWidth="1" opacity="0.2" />
              </g>

              <circle cx="200" cy="200" r="80" fill="none" stroke="url(#border-grad)" strokeWidth="1" className="animate-spin-slow" style={{ transformOrigin: "200px 200px", animationDirection: "reverse" }} />

              <circle cx="200" cy="200" r="55" fill="none" stroke="#EAB308" strokeWidth="0.5" opacity="0.15" strokeDasharray="3 5" />

              <rect x="175" y="175" width="50" height="50" rx="4" fill="#EAB308" fillOpacity="0.06" stroke="#EAB308" strokeWidth="1" strokeOpacity="0.3" className="animate-spin-reverse" style={{ transformOrigin: "200px 200px" }} />

              <text x="188" y="158" fill="#EAB308" opacity="0.5" fontSize="16" fontFamily="monospace" fontWeight="700">&lt;/&gt;</text>

              <text x="204" y="252" fill="#EAB308" opacity="0.2" fontSize="10" fontFamily="monospace">{ }</text>

              <g className="animate-orbit" style={{ transformOrigin: "200px 200px" }}>
                <circle cx="140" cy="200" r="3" fill="#EAB308" opacity="0.6" />
              </g>
              <g className="animate-orbit" style={{ transformOrigin: "200px 200px", animationDelay: "2s" }}>
                <circle cx="260" cy="200" r="2.5" fill="#EAB308" opacity="0.4" />
              </g>
              <g className="animate-orbit" style={{ transformOrigin: "200px 200px", animationDelay: "4s" }}>
                <circle cx="200" cy="140" r="2" fill="#EAB308" opacity="0.5" />
              </g>
              <g className="animate-orbit" style={{ transformOrigin: "200px 200px", animationDelay: "6s" }}>
                <circle cx="200" cy="260" r="3.5" fill="#EAB308" opacity="0.3" />
              </g>

              <path d="M130 160 L140 155 L140 165 Z" fill="#EAB308" opacity="0.12" />
              <path d="M270 240 L260 235 L260 245 Z" fill="#EAB308" opacity="0.12" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
