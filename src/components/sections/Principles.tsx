"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal, StaggerGrid, StaggerItem } from "@/lib/motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { ChevronDown, Target, Shield, Cog, XCircle, Flag } from "lucide-react";

const principles = [
  {
    number: "01",
    icon: Target,
    title: "Eliminate Guesswork",
    summary: "Precise documentation from day one",
    details: "Every inspection comes with detailed photos, measurements, and a clear explanation of what we found. No surprises, no confusion—just the facts you need to make informed decisions about your roof."
  },
  {
    number: "02",
    icon: Shield,
    title: "Protect the Claim",
    summary: "Insurance-ready documentation",
    details: "We document exactly what insurance companies need to see. Our reports are built to support your claim with accurate scopes, proper terminology, and comprehensive evidence of damage."
  },
  {
    number: "03",
    icon: Cog,
    title: "Build Systems, Not Just Roofs",
    summary: "Complete roofing solutions",
    details: "A roof is more than shingles. We focus on the complete system—ventilation, underlayment, flashing, drip edge—because every component matters for long-term performance."
  },
  {
    number: "04",
    icon: XCircle,
    title: "Say No When It's Right",
    summary: "Honest assessments always",
    details: "If your roof doesn't need work, we'll tell you. If insurance won't cover it, we'll explain why. We're not here to push unnecessary repairs—we're here to give you the truth."
  },
  {
    number: "05",
    icon: Flag,
    title: "Finish Strong",
    summary: "Final walkthrough guarantee",
    details: "Every project ends with a walkthrough. We go over everything with you, answer every question, and don't leave until you're completely satisfied with the work."
  },
];

export function Principles() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section className="section-padding bg-slate-50 dark:bg-slate-800/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column */}
          <div className="lg:col-span-4">
            <Reveal>
              <SectionHeading
                label="Our Standards"
                title="Why Homeowners Choose True North"
                description="We approach every project with a set of non-negotiable principles that guide our work."
              />
            </Reveal>
          </div>

          {/* Right Column - Principle Cards */}
          <div className="lg:col-span-8">
            <StaggerGrid className="space-y-4" staggerDelay={0.1}>
              {principles.map((principle, index) => (
                <StaggerItem key={principle.number}>
                  <motion.div
                    whileHover={{ scale: expandedIndex === index ? 1 : 1.01 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Card 
                      className={`cursor-pointer transition-all duration-300 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 ${
                        expandedIndex === index 
                          ? "ring-2 ring-blue-500/30 shadow-lg shadow-blue-500/10" 
                          : "hover:shadow-md hover:border-blue-400 dark:hover:border-slate-600"
                      }`}
                      onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                    >
                      <CardContent className="p-0">
                        <div className="flex items-center gap-4 p-5">
                          <div className="flex items-center gap-4 flex-1">
                            <span className="text-sm font-bold text-blue-400">
                              {principle.number}
                            </span>
                            <div className="w-10 h-10 rounded-lg bg-blue-500/15 flex items-center justify-center">
                              <principle.icon className="w-5 h-5 text-blue-400" />
                            </div>
                            <div className="flex-1">
                              <h3 className="font-semibold text-slate-900 dark:text-white">
                                {principle.title}
                              </h3>
                              <p className="text-sm text-slate-500 dark:text-slate-400 hidden sm:block">
                                {principle.summary}
                              </p>
                            </div>
                          </div>
                          <motion.div
                            animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <ChevronDown className="w-5 h-5 text-slate-500 dark:text-slate-400" />
                          </motion.div>
                        </div>
                        
                        <AnimatePresence>
                          {expandedIndex === index && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                              className="overflow-hidden"
                            >
                              <div className="px-5 pb-5 pt-0">
                                <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
                                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                                    {principle.details}
                                  </p>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </CardContent>
                    </Card>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerGrid>
          </div>
        </div>
      </div>
    </section>
  );
}
