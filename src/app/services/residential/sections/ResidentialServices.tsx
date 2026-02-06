"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal, StaggerGrid, StaggerItem } from "@/lib/motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { Check, Hammer, Wind, Droplets, Sun, Wrench, Shield } from "lucide-react";

const services = [
  {
    icon: Hammer,
    title: "Complete Roof Replacement",
    description: "Full tear-off and installation with architectural shingles rated for Texas weather.",
    features: ["Complete tear-off", "New underlayment", "Architectural shingles", "Ridge vent installation"],
  },
  {
    icon: Wrench,
    title: "Roof Repair & Maintenance",
    description: "Address leaks, missing shingles, and wear before small issues become big problems.",
    features: ["Leak detection", "Shingle replacement", "Flashing repair", "Preventative maintenance"],
  },
  {
    icon: Droplets,
    title: "Emergency Tarping",
    description: "24/7 emergency response to protect your home from further water damage.",
    features: ["Same-day response", "Temporary protection", "Insurance documentation", "Follow-up repair"],
  },
  {
    icon: Wind,
    title: "Attic Ventilation",
    description: "Proper ventilation extends shingle life and reduces energy costs.",
    features: ["Ridge vents", "Soffit vents", "Power ventilators", "Insulation check"],
  },
  {
    icon: Sun,
    title: "Skylight Installation",
    description: "Bring natural light into your home with properly installed and flashed skylights.",
    features: ["New installations", "Replacements", "Proper flashing", "Leak-free guarantee"],
  },
  {
    icon: Shield,
    title: "Gutter Systems",
    description: "Complete gutter installation and repair to protect your foundation and landscaping.",
    features: ["Seamless gutters", "Gutter guards", "Downspout extensions", "Drainage solutions"],
  },
];

export function ResidentialServices() {
  return (
    <section className="section-padding bg-slate-900">
      <div className="container mx-auto px-4 lg:px-8">
        <Reveal>
          <SectionHeading
            label="Our Services"
            title="Residential Roofing Solutions"
            description="Comprehensive roofing services designed for Texas homeowners, backed by our lifetime workmanship warranty."
            centered
            className="mb-12"
          />
        </Reveal>

        <StaggerGrid className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service) => (
            <StaggerItem key={service.title}>
              <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.3 }}>
                <Card className="h-full bg-slate-800 border-slate-700 hover:shadow-lg hover:shadow-amber-500/10 transition-all">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-blue-600 flex items-center justify-center mb-4 shadow-lg shadow-amber-500/20">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-slate-400 text-sm mb-4">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-slate-300">
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
