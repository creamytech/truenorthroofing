"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/lib/motion";

export function GalleryHero() {
  return (
    <section className="relative pt-32 pb-16 overflow-hidden gradient-hero">
      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <span className="inline-block text-sm font-semibold tracking-wider uppercase text-cyan-400 mb-4">
              Our Work
            </span>
          </Reveal>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-white mb-6"
          >
            Project{" "}
            <span className="text-gradient">Gallery</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-slate-300 leading-relaxed"
          >
            See the quality and craftsmanship we bring to every project. 
            From residential homes to commercial properties, our work speaks for itself.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
