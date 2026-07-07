"use client";

import Link from "next/link";

const openToItems = [
  "Small paid projects — MVPs, landing pages, or feature work",
  "Collaboration — open-source or joint builds",
  "Feedback — code review or architecture advice",
];

export default function ContactSection() {
  return (
    <section id="contact" className="relative border-b border-white/20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-[#EAB308]/5 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-[#EAB308]/5 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="flex items-center gap-4">
          <span className="font-mono text-sm tracking-[0.2em] text-[#EAB308]">05</span>
          <span className="h-px w-8 bg-[#EAB308]/40" />
          <h2 className="font-serif text-4xl font-black text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Contact
          </h2>
        </div>
        <hr className="mt-4 border-0 h-px bg-gradient-to-r from-white/10 via-[#EAB308]/30 to-white/10" />

        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16 lg:gap-24">
          <div className="flex flex-col gap-8">
            <div>
              <p className="text-lg leading-relaxed text-[#818281]">
                Have a project in mind or just want to say hi? Tell me about
                what you&apos;re building and I&apos;ll get back to you.
              </p>
            </div>

            <div className="space-y-4">
              <InfoRow label="Email" value="manzarabbass@example.com" href="mailto:manzarabbass@example.com" />
              <InfoRow label="GitHub" value="github.com/ManzarAbbass" href="https://github.com/ManzarAbbass" />
            </div>

            <div className="border border-white/10 p-6">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#EAB308]">
                What I&apos;m open to
              </span>
              <ul className="mt-4 space-y-3">
                {openToItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 border border-[#EAB308]/60" />
                    <span className="text-sm leading-relaxed text-[#818281]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-5"
            >
              <FormField
                label="Your Name"
                id="name"
                type="text"
                placeholder="e.g. Sarah Chen"
              />
              <FormField
                label="Email Address"
                id="email"
                type="email"
                placeholder="e.g. sarah@example.com"
              />
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="font-mono text-xs uppercase tracking-widest text-[#818281]"
                >
                  Project / Message Details
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell me about your project, timeline, and any specific requirements..."
                  className="w-full border border-white/10 bg-white/5 px-4 py-3 font-mono text-sm text-white placeholder-[#818281] outline-none transition-colors focus:border-[#EAB308]/50 focus:bg-white/[0.07]"
                />
              </div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-sm border border-[#EAB308] bg-[#EAB308] px-4 py-3 font-mono text-xs font-bold uppercase tracking-widest text-[#0A0A0A] transition-colors hover:bg-[#EAB308]/90 sm:w-auto sm:px-8 sm:py-3 sm:text-sm"
              >
                Send Message
                <span className="text-base leading-none sm:text-lg">&rarr;</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoRow({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href: string;
}) {
  return (
    <div className="flex items-baseline gap-3">
      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#EAB308] shrink-0 w-14">
        {label}
      </span>
      <Link
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className="font-mono text-sm text-white underline decoration-white/20 underline-offset-4 transition-colors hover:decoration-[#EAB308]"
      >
        {value}
      </Link>
    </div>
  );
}

function FormField({
  label,
  id,
  type,
  placeholder,
}: {
  label: string;
  id: string;
  type: string;
  placeholder: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={id}
        className="font-mono text-xs uppercase tracking-widest text-[#818281]"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="w-full border border-white/10 bg-white/5 px-4 py-3 font-mono text-sm text-white placeholder-[#818281] outline-none transition-colors focus:border-[#EAB308]/50 focus:bg-white/[0.07]"
      />
    </div>
  );
}
