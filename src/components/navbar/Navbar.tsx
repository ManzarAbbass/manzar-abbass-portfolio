"use client";

import { useState } from "react";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#0A0A0A]/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="/" className="font-serif text-2xl font-bold tracking-tight text-[#EAB308]">
          MA
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm uppercase tracking-widest text-gray-400 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden items-center gap-1 rounded-sm border border-[#EAB308] px-4 py-2 text-sm uppercase tracking-widest text-[#EAB308] transition-colors hover:bg-[#EAB308] hover:text-[#0A0A0A] md:inline-flex"
        >
          Start a Project
          <span className="text-lg leading-none">&uarr;</span>
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="flex h-6 w-6 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-6 bg-white transition-all ${open ? "translate-y-[7px] rotate-45" : ""}`} />
          <span className={`block h-0.5 w-6 bg-white transition-all ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-[#0A0A0A] px-6 pb-6 pt-4 md:hidden">
          <ul className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded px-3 py-2 text-sm uppercase tracking-widest text-gray-400 transition-colors hover:bg-white/10 hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-1 rounded-sm border border-[#EAB308] px-4 py-2 text-sm uppercase tracking-widest text-[#EAB308] transition-colors hover:bg-[#EAB308] hover:text-[#0A0A0A]"
              >
                Start a Project
                <span className="text-lg leading-none">&uarr;</span>
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
