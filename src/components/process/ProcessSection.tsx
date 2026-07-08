"use client";

import { motion } from "framer-motion";

const steps = [
  {
    id: "01",
    title: "Discovery Call",
    description:
      "A 30-minute call to understand your goals, constraints, and timeline. No pitch, no pressure — just clarity.",
  },
  {
    id: "02",
    title: "Proposal & Scope",
    description:
      "A written scope of work with fixed-price quote and realistic timeline. No hidden fees, no surprises.",
  },
  {
    id: "03",
    title: "Weekly Check-ins",
    description:
      "Short async updates every Friday so you always know where things stand without endless meetings.",
  },
  {
    id: "04",
    title: "Handoff & Support",
    description:
      "Clean documentation, full code ownership transferred, and 30-day support to ensure a smooth launch.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function ProcessSection() {
  return (
    <section id="process" className="relative border-b border-white/20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-accent/5 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="flex items-center gap-4">
          <span className="font-mono text-sm tracking-[0.2em] text-accent">04</span>
          <span className="h-px w-8 bg-accent/40" />
          <h2 className="font-serif text-4xl font-black text-white sm:text-5xl md:text-6xl lg:text-7xl">
            How it Works
          </h2>
        </div>
        <hr className="mt-4 border-0 h-px bg-gradient-to-r from-white/10 via-accent/30 to-white/10" />

        <motion.div
          className="relative mt-16 grid grid-cols-1 md:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {steps.map((step) => (
            <motion.div
              key={step.id}
              variants={cardVariants}
              className="border-b border-white/10 p-6 last:border-b-0 md:border-b-0 md:border-r md:border-white/10 md:p-8 md:last:border-r-0"
              whileHover={{ y: -4, boxShadow: "0 0 30px rgba(234,179,8,0.06)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <span className="font-mono text-5xl font-black text-accent/10 md:text-6xl">
                {step.id}
              </span>
              <h3 className="mt-1 font-serif text-xl font-black leading-tight text-white sm:text-2xl">
                {step.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-muted">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
