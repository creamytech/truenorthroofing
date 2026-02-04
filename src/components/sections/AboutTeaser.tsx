"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal, StaggerGrid, StaggerItem } from "@/lib/motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { Cog, FileSearch, ArrowRightLeft } from "lucide-react";

const supportCards = [
  {
    icon: Cog,
    title: "Roofing Systems Expertise",
    description: "We understand how ventilation, underlayment, flashing, and decking work together as a complete system."
  },
  {
    icon: FileSearch,
    title: "Claim Navigation",
    description: "We document everything your insurance company needs—nothing more, nothing less—with surgical accuracy."
  },
  {
    icon: ArrowRightLeft,
    title: "End-to-End Process",
    description: "From initial inspection through final walkthrough, we handle every detail so you don't have to."
  },
];

export function AboutTeaser() {
  return (
    <section className="section-padding">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Pull Quote */}
          <Reveal>
            <Card className="relative overflow-hidden mb-16 border-0 bg-slate-800 shadow-premium">
              <div className="absolute inset-0 gradient-hero opacity-10" />
              <CardContent className="relative p-8 md:p-12">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl gradient-accent flex items-center justify-center shadow-lg">
                      <span className="text-3xl font-bold text-white">"</span>
                    </div>
                  </div>
                  <div>
                    <blockquote className="text-2xl md:text-3xl font-semibold text-white leading-relaxed mb-4">
                      Most roofing companies are sales organizations that happen to install roofs.{" "}
                      <span className="text-amber-400">We're the opposite.</span>
                    </blockquote>
                    <p className="text-lg text-slate-300">
                      We're roofing professionals who understand both the craft and the process—because 
                      your roof is more than a sale to us.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Reveal>

          {/* Support Cards */}
          <StaggerGrid className="grid md:grid-cols-3 gap-6" staggerDelay={0.15}>
            {supportCards.map((card) => (
              <StaggerItem key={card.title}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="h-full bg-slate-800 border-slate-700 hover:border-amber-500/50 hover:shadow-lg hover:shadow-amber-500/10 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center mb-4">
                        <card.icon className="w-6 h-6 text-amber-400" />
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2">
                        {card.title}
                      </h3>
                      <p className="text-slate-400 leading-relaxed">
                        {card.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </div>
    </section>
  );
}
