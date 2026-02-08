"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/lib/motion";
import { Home, Building2, CloudRain, ArrowDown } from "lucide-react";

const quickLinks = [
  { href: "#residential", icon: Home, label: "Residential" },
  { href: "#commercial", icon: Building2, label: "Commercial" },
  { href: "#storm", icon: CloudRain, label: "Storm Restoration" },
];

export function ServicesHero() {
  return (
    <section className="relative pt-32 pb-16 overflow-hidden gradient-hero">
      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="accent-divider" />
              <span className="text-sm font-semibold tracking-wider uppercase text-blue-400">
                Our Services
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
            Complete Roofing Solutions{" "}
            <span className="text-gradient">for Texas</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-white/70 leading-relaxed mb-10"
          >
            From emergency repairs to complete replacements, we handle every roofing 
            need with expertise, precision, and unmatched customer service.
          </motion.p>

          {/* Quick Service Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {quickLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 hover:shadow-lg hover:shadow-blue-500/10 transition-all text-white"
              >
                <link.icon className="w-5 h-5 text-blue-400" />
                <span className="font-medium">{link.label}</span>
              </a>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex justify-center mt-12"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center"
          >
            <ArrowDown className="w-5 h-5 text-white/50" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
