"use client";

import { motion } from "framer-motion";
import { Reveal, StaggerGrid, StaggerItem } from "@/lib/motion";
import { Shield, Zap, FileText, CheckCircle, Sparkles } from "lucide-react";

const trustItems = [
  { icon: Shield, label: "Licensed & Insured" },
  { icon: Zap, label: "Storm Restoration Specialists" },
  { icon: FileText, label: "Insurance Documentation" },
  { icon: CheckCircle, label: "Final Walkthrough Included" },
  { icon: Sparkles, label: "Clean Jobsite Promise" },
];

export function ProofBar() {
  return (
    <section className="py-8 border-y border-slate-700 bg-slate-800/50">
      <div className="container mx-auto px-4 lg:px-8">
        <StaggerGrid className="flex flex-wrap justify-center gap-4 lg:gap-6">
          {trustItems.map((item) => (
            <StaggerItem key={item.label}>
              <motion.div
                whileHover={{ scale: 1.02, y: -2 }}
                className="flex items-center gap-3 px-5 py-3 rounded-full bg-slate-800 border border-slate-600 shadow-sm hover:shadow-md hover:border-amber-500/50 transition-all cursor-default"
              >
                <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center">
                  <item.icon className="w-4 h-4 text-amber-400" />
                </div>
                <span className="text-sm font-medium text-slate-200 whitespace-nowrap">
                  {item.label}
                </span>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
