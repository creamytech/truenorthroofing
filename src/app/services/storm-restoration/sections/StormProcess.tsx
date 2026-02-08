"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal, StaggerGrid, StaggerItem } from "@/lib/motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { Phone, ClipboardCheck, Users, Hammer, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Phone,
    step: "1",
    title: "Call Us",
    description: "Contact us immediately after storm damage. We offer 24/7 emergency response for Texas homeowners.",
  },
  {
    icon: ClipboardCheck,
    step: "2",
    title: "Free Inspection",
    description: "Our certified inspector documents all damage with photos, measurements, and detailed notes.",
  },
  {
    icon: Users,
    step: "3",
    title: "Insurance Meeting",
    description: "We meet with your insurance adjuster to ensure all damage is properly documented and included.",
  },
  {
    icon: Hammer,
    step: "4",
    title: "Expert Restoration",
    description: "Our skilled crew completes your repair or replacement using quality materials and proven techniques.",
  },
  {
    icon: CheckCircle,
    step: "5",
    title: "Final Walkthrough",
    description: "We walk you through the completed work and provide documentation for your records.",
  },
];

export function StormProcess() {
  return (
    <section className="section-padding bg-slate-50 dark:bg-slate-800/50">
      <div className="container mx-auto px-4 lg:px-8">
        <Reveal>
          <SectionHeading
            label="Our Process"
            title="How We Handle Storm Claims"
            description="Our proven process takes the stress out of storm damage repair and insurance claims."
            centered
            className="mb-12"
          />
        </Reveal>

        <StaggerGrid className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {steps.map((item) => (
            <StaggerItem key={item.title}>
              <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.3 }}>
                <Card className="h-full text-center bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:shadow-lg hover:shadow-blue-500/10 transition-all">
                  <CardContent className="p-6 relative">
                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-sm">
                      {item.step}
                    </div>
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-500/20">
                      <item.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      {item.description}
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
