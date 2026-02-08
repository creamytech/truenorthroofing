"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal, StaggerGrid, StaggerItem } from "@/lib/motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { Calendar, ClipboardCheck, FileText, Handshake } from "lucide-react";

const steps = [
  {
    icon: Calendar,
    title: "1. Schedule",
    description: "Book your free inspection online or by phone. We offer same-day and next-day appointments.",
  },
  {
    icon: ClipboardCheck,
    title: "2. Inspection",
    description: "Our expert inspects your entire roof system, documenting condition with photos and notes.",
  },
  {
    icon: FileText,
    title: "3. Report",
    description: "You receive a detailed written report with findings, photos, and honest recommendations.",
  },
  {
    icon: Handshake,
    title: "4. Next Steps",
    description: "We'll discuss your options—whether that's repairs, replacement, or just peace of mind.",
  },
];

export function WhatToExpect() {
  return (
    <section className="section-padding bg-slate-50 dark:bg-slate-800/50">
      <div className="container mx-auto px-4 lg:px-8">
        <Reveal>
          <SectionHeading
            label="The Process"
            title="What Happens Next"
            description="From scheduling to report delivery, here's exactly what to expect."
            centered
            className="mb-12"
          />
        </Reveal>

        <StaggerGrid className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {steps.map((step) => (
            <StaggerItem key={step.title}>
              <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.3 }}>
                <Card className="h-full text-center bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:shadow-lg hover:shadow-blue-500/10 transition-all">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-500/20">
                      <step.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
