"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Reveal, StaggerGrid, StaggerItem } from "@/lib/motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { 
  ClipboardCheck, 
  FileText, 
  Layers, 
  Hammer, 
  CheckCircle 
} from "lucide-react";

const steps = [
  {
    icon: ClipboardCheck,
    title: "Inspection & Documentation",
    description: "Thorough roof inspection with detailed photos and measurements for complete transparency.",
  },
  {
    icon: FileText,
    title: "Claim Support & Alignment",
    description: "We work with your insurance to ensure accurate scopes and proper claim documentation.",
  },
  {
    icon: Layers,
    title: "System Build Planning",
    description: "Custom roofing system design including ventilation, underlayment, and flashing specifications.",
  },
  {
    icon: Hammer,
    title: "Professional Installation",
    description: "Complete tear-off down to the decking, thorough inspection for damage, and replacement of any compromised sections before expert installation with clean jobsite practices.",
  },
  {
    icon: CheckCircle,
    title: "Final Walkthrough",
    description: "Complete project review and quality verification before we consider the job done.",
  },
];

export function ProcessTimeline() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 50%"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="section-padding bg-slate-800/50">
      <div className="container mx-auto px-4 lg:px-8">
        <Reveal>
          <SectionHeading
            label="Our Process"
            title="When Quality Makes a Difference"
            description="Our process is clean, documented, and built to last. Here's how we ensure excellence at every step."
            centered
            className="mb-16"
          />
        </Reveal>

        <div ref={containerRef} className="relative max-w-4xl mx-auto">
          {/* Animated Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-700">
            <motion.div
              className="w-full bg-gradient-to-b from-amber-500 to-blue-500"
              style={{ height: lineHeight }}
            />
          </div>

          {/* Steps */}
          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`relative flex items-start gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Icon Node */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-slate-800 border-4 border-amber-500 flex items-center justify-center shadow-lg shadow-amber-500/20 z-10">
                  <step.icon className="w-7 h-7 text-amber-400" />
                </div>

                {/* Content Card */}
                <div className={`ml-24 md:ml-0 md:w-[calc(50%-4rem)] ${
                  index % 2 === 0 ? "md:pr-16" : "md:pl-16"
                }`}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="bg-slate-800 rounded-xl p-6 shadow-md hover:shadow-lg hover:shadow-amber-500/10 border border-slate-700 transition-all"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-sm font-bold text-amber-400">
                        Step {index + 1}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </motion.div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-[calc(50%-4rem)]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
