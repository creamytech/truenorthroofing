"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/lib/motion";
import { Building2, Shield, Clock, FileCheck } from "lucide-react";

const highlights = [
  { icon: Shield, text: "Commercial-Grade Materials" },
  { icon: Clock, text: "Minimize Business Disruption" },
  { icon: FileCheck, text: "Full Documentation" },
];

export function CommercialHero() {
  return (
    <section className="relative pt-32 pb-16 overflow-hidden gradient-hero">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
              <Building2 className="w-5 h-5 text-cyan-400" />
              <span className="text-sm font-medium text-white">Commercial Roofing</span>
            </div>
          </Reveal>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-white mb-6"
          >
            Commercial Roofing{" "}
            <span className="text-gradient">Solutions</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-slate-300 leading-relaxed mb-10"
          >
            Protect your business with durable commercial roofing systems designed for 
            Texas weather. TPO, EPDM, metal, and flat roof specialists.
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
                <item.icon className="w-5 h-5 text-cyan-400" />
                <span className="text-white font-medium">{item.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
