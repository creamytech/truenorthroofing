"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal, StaggerGrid, StaggerItem } from "@/lib/motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { Check, Layers, Wrench, Shield, Droplets, Sun, ClipboardCheck } from "lucide-react";

const services = [
  {
    icon: Layers,
    title: "TPO Roofing Systems",
    description: "Energy-efficient single-ply membrane roofing ideal for flat and low-slope commercial buildings.",
    features: ["Heat-welded seams", "Energy Star rated", "25-year warranties", "Reflective surface"],
  },
  {
    icon: Shield,
    title: "EPDM Rubber Roofing",
    description: "Durable synthetic rubber membrane known for longevity and weather resistance.",
    features: ["40+ year lifespan", "Low maintenance", "Flexible in cold", "UV resistant"],
  },
  {
    icon: Sun,
    title: "Metal Roofing",
    description: "Long-lasting metal systems for commercial properties requiring maximum durability.",
    features: ["Standing seam", "50+ year lifespan", "Fire resistant", "Low maintenance"],
  },
  {
    icon: Droplets,
    title: "Flat Roof Repair",
    description: "Expert repair and restoration for all types of flat commercial roofing systems.",
    features: ["Leak detection", "Membrane repair", "Coating restoration", "Ponding solutions"],
  },
  {
    icon: Wrench,
    title: "Preventative Maintenance",
    description: "Regular inspection and maintenance programs to extend your roof's life and prevent costly repairs.",
    features: ["Bi-annual inspections", "Debris removal", "Minor repairs", "Documentation"],
  },
  {
    icon: ClipboardCheck,
    title: "Roof Asset Management",
    description: "Comprehensive roof management including inspections, budgeting, and replacement planning.",
    features: ["Condition reports", "Budget forecasting", "Priority planning", "Capital planning"],
  },
];

export function CommercialServices() {
  return (
    <section className="section-padding bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 lg:px-8">
        <Reveal>
          <SectionHeading
            label="Our Services"
            title="Commercial Roofing Solutions"
            description="Full-service commercial roofing from installation to maintenance, designed to protect your business investment."
            centered
            className="mb-12"
          />
        </Reveal>

        <StaggerGrid className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service) => (
            <StaggerItem key={service.title}>
              <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.3 }}>
                <Card className="h-full bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:shadow-lg hover:shadow-blue-500/10 transition-all">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-4 shadow-lg shadow-blue-500/20">
                      <service.icon className="w-6 h-6 text-slate-900 dark:text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                          <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
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
