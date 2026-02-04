"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/lib/motion";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Star, Award, Users, Calendar } from "lucide-react";

const stats = [
  { 
    value: "500+", 
    label: "Roofs Installed",
    icon: Award,
  },
  { 
    value: "5.0", 
    label: "Google Rating",
    icon: Star,
  },
  { 
    value: "10+", 
    label: "Years Experience",
    icon: Calendar,
  },
  { 
    value: "100%", 
    label: "Satisfaction",
    icon: Users,
  },
];

export function StatsSection() {
  return (
    <section className="section-padding bg-gradient-to-b from-slate-950 to-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <Reveal>
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-amber-500/10 text-amber-400 border border-amber-500/20 mb-4">
              Why True North
            </span>
          </Reveal>
          
          <TextGenerateEffect 
            words="Trusted by Texas homeowners for quality roofing that lasts."
            className="text-3xl md:text-4xl font-bold text-white"
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="text-center p-6 rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-amber-500/30 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-6 h-6 text-amber-400" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-slate-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
