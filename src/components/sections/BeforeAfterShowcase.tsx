"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { Compare } from "@/components/ui/compare";
import { Reveal } from "@/lib/motion";

// Before and after project comparison
const projects = [
  {
    id: 1,
    before: "/Gallery/down-net_http20250816-196-m7mkk9.jpg",
    after: "/Gallery/down-net_http20250816-195-3qpy65.jpg",
  },
];

export function BeforeAfterShowcase() {
  return (
    <section className="section-padding bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative">
        <Reveal>
          <SectionHeading
            label="Our Work"
            title="Before & After"
            description="Drag the slider to see the transformation."
            centered
            className="mb-16"
          />
        </Reveal>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="rounded-2xl overflow-hidden border border-slate-700 shadow-xl shadow-black/20">
              <Compare
                firstImage={projects[0].before}
                secondImage={projects[0].after}
                className="w-full h-[350px] md:h-[500px] lg:h-[550px]"
                slideMode="drag"
                showHandlebar={true}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
