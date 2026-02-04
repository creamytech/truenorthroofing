"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal, StaggerGrid, StaggerItem } from "@/lib/motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { Heart, Award, Users, Target, Sparkles, Shield } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Integrity",
    description: "We do the right thing, even when no one is watching. Our word is our bond."
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Every detail matters. We hold ourselves to the highest standards in every project."
  },
  {
    icon: Users,
    title: "Service",
    description: "We're here to help, not to sell. Your satisfaction is our priority, not a transaction."
  },
  {
    icon: Target,
    title: "Precision",
    description: "Accurate estimates, thorough documentation, and exact execution—no guesswork."
  },
  {
    icon: Sparkles,
    title: "Pride",
    description: "We take pride in our work and our community. Every roof represents our reputation."
  },
  {
    icon: Shield,
    title: "Accountability",
    description: "We stand behind our work with final walkthroughs and ongoing support."
  }
];

export function ValuesGrid() {
  return (
    <section className="section-padding bg-slate-900">
      <div className="container mx-auto px-4 lg:px-8">
        <Reveal>
          <SectionHeading
            label="Our Values"
            title="What We Stand For"
            description="These principles guide every decision we make and every roof we build."
            centered
            className="mb-12"
          />
        </Reveal>

        <StaggerGrid className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {values.map((value) => (
            <StaggerItem key={value.title}>
              <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.3 }}>
                <Card className="h-full bg-slate-800 border-slate-700 hover:shadow-lg hover:shadow-amber-500/10 transition-all">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center mb-4">
                      <value.icon className="w-6 h-6 text-amber-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {value.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed">
                      {value.description}
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
