"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

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
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-dark/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-serif text-2xl font-bold tracking-tight text-accent"
        >
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            MA
          </motion.span>
        </Link>

        <motion.ul
          className="hidden items-center gap-6 md:flex"
          variants={navListVariants}
          initial="hidden"
          animate="visible"
        >
          {NAV_LINKS.map((link) => (
            <motion.li key={link.href} variants={navItemVariants}>
              <Link
                href={link.href}
                className="text-xs uppercase tracking-widest text-muted transition-colors hover:text-white sm:text-sm"
              >
                {link.label}
              </Link>
            </motion.li>
          ))}
        </motion.ul>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:inline-flex"
        >
          <Link
            href="/#contact"
            className="inline-flex items-center gap-1 rounded-sm border border-accent px-3 py-1.5 text-xs uppercase tracking-widest text-accent transition-colors hover:bg-accent hover:text-dark sm:px-4 sm:py-2 sm:text-sm"
          >
            Start a Project
            <span className="text-base leading-none sm:text-lg">&darr;</span>
          </Link>
        </motion.div>

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
            <div className="border-t border-white/10 bg-dark px-6 pb-6 pt-4">
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
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block rounded px-3 py-2 text-sm uppercase tracking-widest text-muted transition-colors hover:bg-white/10 hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
                <motion.li
                  custom={NAV_LINKS.length}
                  variants={mobileItemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <Link
                    href="/#contact"
                    onClick={() => setOpen(false)}
                    className="inline-flex items-center gap-1 rounded-sm border border-accent px-4 py-2 text-sm uppercase tracking-widest text-accent transition-colors hover:bg-accent hover:text-dark"
                  >
                    Start a Project
                    <span className="text-lg leading-none">&darr;</span>
                  </Link>
                </motion.li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
