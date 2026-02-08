"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal, StaggerGrid, StaggerItem } from "@/lib/motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { Check, CloudRain, Wind, Snowflake, Shield, FileText, Wrench } from "lucide-react";

const services = [
  {
    icon: CloudRain,
    title: "Hail Damage Repair",
    description: "Expert identification and repair of hail damage, from minor dents to complete replacement.",
    features: ["Impact assessment", "Shingle replacement", "Insurance documentation", "Full restoration"],
  },
  {
    icon: Wind,
    title: "Wind Damage Restoration",
    description: "Address lifted, torn, or missing shingles caused by Texas severe weather.",
    features: ["Emergency tarping", "Shingle repair", "Structural assessment", "Complete restoration"],
  },
  {
    icon: Snowflake,
    title: "Ice & Winter Damage",
    description: "Repair damage from ice dams, freeze-thaw cycles, and winter weather events.",
    features: ["Ice dam removal", "Gutter repair", "Leak repair", "Prevention measures"],
  },
  {
    icon: Shield,
    title: "Emergency Tarping",
    description: "24/7 emergency response to prevent further damage to your property.",
    features: ["Same-day response", "Temporary protection", "Interior protection", "Follow-up repair"],
  },
  {
    icon: FileText,
    title: "Insurance Claim Assistance",
    description: "We handle the documentation and work directly with your insurance company.",
    features: ["Free inspection", "Detailed reports", "Adjuster meeting", "Claim advocacy"],
  },
  {
    icon: Wrench,
    title: "Complete Restoration",
    description: "Full roof replacement when storm damage is too severe for repair.",
    features: ["Complete tear-off", "New installation", "Upgraded materials", "Warranty coverage"],
  },
];

export function StormServices() {
  return (
    <section className="section-padding bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 lg:px-8">
        <Reveal>
          <SectionHeading
            label="Storm Services"
            title="Complete Storm Damage Solutions"
            description="From emergency response to insurance claims, we handle every aspect of your storm damage restoration."
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
