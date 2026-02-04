"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { Compare } from "@/components/ui/compare";
import { Reveal } from "@/lib/motion";

const projects = [
  {
    id: 1,
    title: "Storm Damage Restoration",
    location: "Fort Worth, TX",
    before: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800",
    after: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800",
    description: "Complete roof replacement after hail damage",
  },
  {
    id: 2,
    title: "Residential Re-Roof",
    location: "Arlington, TX",
    before: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=800",
    after: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800",
    description: "Upgraded to architectural shingles",
  },
];

export function BeforeAfterShowcase() {
  return (
    <section className="section-padding bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative">
        <Reveal>
          <SectionHeading
            label="Our Work"
            title="See the Transformation"
            description="Drag the slider to compare before and after photos of our roofing projects."
            centered
            className="mb-16"
          />
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="space-y-4"
            >
              <div className="rounded-2xl overflow-hidden border border-slate-700 shadow-xl shadow-black/20">
                <Compare
                  firstImage={project.before}
                  secondImage={project.after}
                  className="w-full h-[300px] md:h-[350px]"
                  slideMode="drag"
                  showHandlebar={true}
                />
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                <p className="text-sm text-cyan-400">{project.location}</p>
                <p className="text-sm text-slate-400 mt-1">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
