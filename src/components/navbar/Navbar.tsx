"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "Services", href: "/#services" },
  { label: "Work", href: "/#work" },
  { label: "Process", href: "/#process" },
  { label: "Contact", href: "/#contact" },
];

const navListVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const navItemVariants = {
  hidden: { opacity: 0, y: -8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

const mobileItemVariants = {
  hidden: { opacity: 0, x: -16 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.06, duration: 0.3, ease: "easeOut" as const },
  }),
  exit: { opacity: 0, x: -16, transition: { duration: 0.2 } },
};

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#0A0A0A]/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <motion.a
          href="/"
          className="font-serif text-2xl font-bold tracking-tight text-[#EAB308]"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          MA
        </motion.a>

        <motion.ul
          className="hidden items-center gap-6 md:flex"
          variants={navListVariants}
          initial="hidden"
          animate="visible"
        >
          {NAV_LINKS.map((link) => (
            <motion.li key={link.href} variants={navItemVariants}>
              <a
                href={link.href}
                className="text-xs uppercase tracking-widest text-[#818281] transition-colors hover:text-white sm:text-sm"
              >
                {link.label}
              </a>
            </motion.li>
          ))}
        </motion.ul>

        <motion.a
          href="/#contact"
          className="hidden items-center gap-1 rounded-sm border border-[#EAB308] px-3 py-1.5 text-xs uppercase tracking-widest text-[#EAB308] transition-colors hover:bg-[#EAB308] hover:text-[#0A0A0A] sm:px-4 sm:py-2 sm:text-sm md:inline-flex"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Start a Project
          <span className="text-base leading-none sm:text-lg">&darr;</span>
        </motion.a>

        <button
          onClick={() => setOpen(!open)}
          className="flex h-6 w-6 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label="Toggle menu"
        >
          <motion.span
            className="block h-0.5 w-6 bg-white"
            animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="block h-0.5 w-6 bg-white"
            animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
          />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            className="overflow-hidden md:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="border-t border-white/10 bg-[#0A0A0A] px-6 pb-6 pt-4">
              <ul className="flex flex-col gap-4">
                {NAV_LINKS.map((link, i) => (
                  <motion.li
                    key={link.href}
                    custom={i}
                    variants={mobileItemVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block rounded px-3 py-2 text-sm uppercase tracking-widest text-[#818281] transition-colors hover:bg-white/10 hover:text-white"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
                <motion.li
                  custom={NAV_LINKS.length}
                  variants={mobileItemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <a
                    href="/#contact"
                    onClick={() => setOpen(false)}
                    className="inline-flex items-center gap-1 rounded-sm border border-[#EAB308] px-4 py-2 text-sm uppercase tracking-widest text-[#EAB308] transition-colors hover:bg-[#EAB308] hover:text-[#0A0A0A]"
                  >
                    Start a Project
                    <span className="text-lg leading-none">&darr;</span>
                  </a>
                </motion.li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
