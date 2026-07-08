"use client";

import { useActionState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { toast } from "sonner";
import { sendContactMessage } from "@/actions/contact";
import type { ContactState } from "@/lib/contact-schema";

const openToItems = [
  "Small paid projects — MVPs, landing pages, or feature work",
  "Collaboration — open-source or joint builds",
  "Feedback — code review or architecture advice",
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const columnVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const formVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const fieldVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

const initialState: ContactState = { success: false };

export default function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction] = useActionState(sendContactMessage, initialState);

  useEffect(() => {
    if (state.success) {
      toast.success("Message sent successfully!");
      formRef.current?.reset();
    } else if (state.error) {
      toast.error(state.error);
    }
  }, [state]);

  return (
    <section id="contact" className="relative border-b border-white/20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-accent/5 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="flex items-center gap-4">
          <span className="font-mono text-sm tracking-[0.2em] text-accent">05</span>
          <span className="h-px w-8 bg-accent/40" />
          <h2 className="font-serif text-4xl font-black text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Contact
          </h2>
        </div>
        <hr className="mt-4 border-0 h-px bg-gradient-to-r from-white/10 via-[#EAB308]/30 to-white/10" />

        <motion.div
          className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16 lg:gap-24"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={columnVariants} className="flex flex-col gap-8">
            <div>
              <p className="text-lg leading-relaxed text-muted">
                Have a project in mind or just want to say hi? Tell me about
                what you&apos;re building and I&apos;ll get back to you.
              </p>
            </div>

            <div className="space-y-4">
              <InfoRow label="Email" value="manzarja32@gmail.com" href="mailto:manzarja32@gmail.com" />
              <InfoRow label="GitHub" value="github.com/ManzarAbbass" href="https://github.com/ManzarAbbass" />
            </div>

            <motion.div
              className="border border-white/10 p-6"
              whileHover={{ y: -4, boxShadow: "0 0 30px rgba(234,179,8,0.06)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                What I&apos;m open to
              </span>
              <ul className="mt-4 space-y-3">
                {openToItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 border border-accent/60" />
                    <span className="text-sm leading-relaxed text-muted">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          <motion.div variants={columnVariants}>
            <form
              ref={formRef}
              action={formAction}
              className="flex flex-col gap-5"
            >
              <motion.div
                variants={formVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-col gap-5"
              >
                <motion.div variants={fieldVariants}>
                  <FormField
                    label="Your Name"
                    id="name"
                    name="name"
                    type="text"
                    placeholder="e.g. Sarah Chen"
                  />
                </motion.div>
                <motion.div variants={fieldVariants}>
                  <FormField
                    label="Email Address"
                    id="email"
                    name="email"
                    type="email"
                    placeholder="e.g. sarah@example.com"
                  />
                </motion.div>
                <motion.div variants={fieldVariants}>
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="message"
                      className="font-mono text-xs uppercase tracking-widest text-muted"
                    >
                      Project / Message Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Tell me about your project, timeline, and any specific requirements..."
                      className="w-full border border-white/10 bg-white/5 px-4 py-3 font-mono text-sm text-white placeholder-muted outline-none transition-colors focus:border-accent/50 focus:bg-white/[0.07]"
                    />
                  </div>
                </motion.div>
                <motion.div variants={fieldVariants}>
                  <motion.button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-sm border border-accent bg-accent px-4 py-3 font-mono text-xs font-bold uppercase tracking-widest text-dark transition-colors hover:bg-accent/90 sm:px-8 sm:py-3 sm:text-sm"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  >
                    Send Message
                    <span className="text-base leading-none sm:text-lg">&rarr;</span>
                  </motion.button>
                </motion.div>
              </motion.div>
            </form>
          </motion.div>
        </motion.div>
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
      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent shrink-0 w-14">
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
  name,
  type,
  placeholder,
}: {
  label: string;
  id: string;
  name: string;
  type: string;
  placeholder: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={id}
        className="font-mono text-xs uppercase tracking-widest text-muted"
      >
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        required
        className="w-full border border-white/10 bg-white/5 px-4 py-3 font-mono text-sm text-white placeholder-muted outline-none transition-colors focus:border-accent/50 focus:bg-white/[0.07]"
      />
    </div>
  );
}
