"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/lib/motion";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden gradient-hero">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23fff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="accent-divider" />
              <span className="text-sm font-semibold tracking-wider uppercase text-blue-400">
                About True North
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
            Built by people who understand{" "}
            <span className="text-gradient">roofing systems.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-white/70 leading-relaxed"
          >
            We're not a sales organization that happens to install roofs. We're roofing 
            professionals who understand both the craft and the process—because your roof 
            is more than a sale to us.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
