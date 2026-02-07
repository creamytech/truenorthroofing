"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/lib/motion";

export function ContactHero() {
  return (
    <section className="relative pt-32 pb-16 overflow-hidden gradient-hero">
      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="accent-divider" />
              <span className="text-sm font-semibold tracking-wider uppercase text-amber-400">
                Get In Touch
              </span>
              <div className="accent-divider" />
            </div>
          </Reveal>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-white mb-6 uppercase tracking-wide"
          >
            Let&apos;s Talk About Your{" "}
            <span className="text-gradient">Roofing Needs</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-slate-300 leading-relaxed"
          >
            Have a question or ready to schedule your free inspection? 
            We&apos;re here to help with all your roofing needs.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
