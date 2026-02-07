"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/lib/motion";
import { Shield, FileCheck, Clock } from "lucide-react";

const highlights = [
  { icon: Shield, text: "100% Free, No Obligation" },
  { icon: FileCheck, text: "Detailed Written Report" },
  { icon: Clock, text: "Same-Day Scheduling" },
];

export function InspectionHero() {
  return (
    <section className="relative pt-32 pb-16 overflow-hidden gradient-hero">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="accent-divider" />
              <span className="text-sm font-semibold tracking-wider uppercase text-amber-400">
                Schedule Today
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
            Get Your{" "}
            <span className="text-amber-400">Free</span>{" "}
            Roof Inspection
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-white/70 leading-relaxed mb-10"
          >
            No cost. No obligation. Just honest answers about the condition of your roof, 
            backed by detailed documentation and expert recommendations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {highlights.map((item) => (
              <div
                key={item.text}
                className="flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 border border-white/20"
              >
                <item.icon className="w-5 h-5 text-amber-400" />
                <span className="text-white font-medium">{item.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
