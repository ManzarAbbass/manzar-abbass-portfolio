"use client";

import { motion } from "framer-motion";
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

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const linkVariants = {
  hover: { x: 4, transition: { type: "spring" as const, stiffness: 300, damping: 20 } },
};

export default function FooterSection() {
  return (
    <footer className="border-t border-white/10 bg-dark">
      <motion.div
        className="mx-auto max-w-6xl px-6 py-12 md:py-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div
          variants={itemVariants}
          className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between"
        >
          <div className="flex flex-col gap-3">
            <Link href="/" className="font-serif text-2xl font-bold tracking-tight text-accent">
              MA
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-muted">
              Full Stack Developer building web apps and SaaS tools with Next.js, TypeScript, and modern databases.
            </p>
          </div>

          <div className="flex flex-wrap gap-10">
            <motion.div variants={itemVariants} className="flex flex-col gap-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                Navigation
              </span>
              <ul className="flex flex-col gap-2">
                {FOOTER_LINKS.map((link) => (
                  <li key={link.href}>
                    <motion.div whileHover="hover" variants={linkVariants}>
                      <Link
                        href={link.href}
                        className="block text-sm text-muted transition-colors hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col gap-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                Connect
              </span>
              <ul className="flex flex-col gap-2">
                {SOCIAL_LINKS.map((link) => (
                  <li key={link.href}>
                    <motion.div whileHover="hover" variants={linkVariants}>
                      <Link
                        href={link.href}
                        target={link.href.startsWith("http") ? "_blank" : undefined}
                        rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="block text-sm text-muted transition-colors hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <hr className="my-8 border-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center justify-between gap-4 sm:flex-row"
        >
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} Manzar Abbass. All rights reserved.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="cursor-pointer font-mono text-[10px] uppercase tracking-[0.2em] text-muted transition-colors hover:text-accent"
          >
            Back to top &uarr;
          </button>
        </motion.div>
      </motion.div>
    </footer>
  );
}
