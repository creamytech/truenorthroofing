"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/lib/motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { Home, Building2, CloudRain, ArrowRight, Check } from "lucide-react";
import Link from "next/link";

const services = {
  residential: {
    icon: Home,
    title: "Residential Roofing",
    description: "Complete roofing solutions for homeowners across Texas.",
    items: [
      "Full Roof Replacement",
      "Roof Repair & Maintenance",
      "Emergency Tarping",
      "Gutter Installation",
      "Attic Ventilation Systems",
    ],
    process: [
      "Free home inspection",
      "Detailed estimate & timeline",
      "Material selection guidance",
      "Professional installation",
      "Final walkthrough",
    ],
  },
  commercial: {
    icon: Building2,
    title: "Commercial Roofing",
    description: "Professional solutions for businesses and commercial properties.",
    items: [
      "Flat Roof Systems (TPO, EPDM)",
      "Metal Roofing",
      "Roof Coatings",
      "Preventative Maintenance",
      "Emergency Repairs",
    ],
    process: [
      "Site assessment",
      "Custom proposal",
      "Minimal business disruption",
      "Safety compliance",
      "Warranty documentation",
    ],
  },
  storm: {
    icon: CloudRain,
    title: "Storm Restoration",
    description: "Expert storm damage assessment and insurance claim support.",
    items: [
      "Hail Damage Assessment",
      "Wind Damage Repair",
      "Insurance Claim Documentation",
      "Emergency Tarping",
      "Full Storm Restoration",
    ],
    process: [
      "Immediate response",
      "Damage documentation",
      "Insurance liaison",
      "Scope alignment",
      "Quality restoration",
    ],
  },
};

export function ServicesSnapshot() {
  const [activeTab, setActiveTab] = useState("residential");

  return (
    <section className="section-padding">
      <div className="container mx-auto px-4 lg:px-8">
        <Reveal>
          <SectionHeading
            label="Our Services"
            title="For All Your Roofing Inquiries"
            description="Whether it's a residential repair, commercial installation, or storm damage restoration, we have the expertise to handle it."
            centered
            className="mb-12"
          />
        </Reveal>

        <Reveal>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 h-14 p-1 bg-slate-800 rounded-xl mb-8">
              {Object.entries(services).map(([key, service]) => (
                <TabsTrigger
                  key={key}
                  value={key}
                  className="data-[state=active]:bg-cyan-500 data-[state=active]:text-white data-[state=inactive]:text-slate-300 rounded-lg text-sm font-medium transition-all"
                >
                  <service.icon className="w-4 h-4 mr-2" />
                  <span className="hidden sm:inline">{service.title.split(" ")[0]}</span>
                  <span className="sm:hidden">{key === "storm" ? "Storm" : service.title.split(" ")[0]}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            <AnimatePresence mode="wait">
              {Object.entries(services).map(([key, service]) => (
                <TabsContent key={key} value={key} className="mt-0">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="border-slate-700 bg-slate-800 shadow-lg">
                      <CardContent className="p-0">
                        <div className="grid lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-slate-700">
                          {/* Services List */}
                          <div className="p-6 lg:p-8">
                            <div className="flex items-center gap-3 mb-4">
                              <div className="w-10 h-10 rounded-lg gradient-accent flex items-center justify-center">
                                <service.icon className="w-5 h-5 text-white" />
                              </div>
                              <div>
                                <h3 className="font-semibold text-white">{service.title}</h3>
                                <p className="text-sm text-slate-400">{service.description}</p>
                              </div>
                            </div>
                            <ul className="space-y-3 mt-6">
                              {service.items.map((item, index) => (
                                <motion.li
                                  key={item}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: index * 0.05 }}
                                  className="flex items-center gap-3"
                                >
                                  <div className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                                    <Check className="w-3.5 h-3.5 text-cyan-400" />
                                  </div>
                                  <span className="text-slate-200">{item}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </div>

                          {/* Process */}
                          <div className="p-6 lg:p-8 bg-slate-900/50">
                            <h4 className="font-semibold text-white mb-4">What to Expect</h4>
                            <ol className="space-y-4">
                              {service.process.map((step, index) => (
                                <motion.li
                                  key={step}
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: 0.1 + index * 0.05 }}
                                  className="flex items-start gap-3"
                                >
                                  <span className="w-6 h-6 rounded-full bg-cyan-500 text-white text-xs font-semibold flex items-center justify-center flex-shrink-0 mt-0.5">
                                    {index + 1}
                                  </span>
                                  <span className="text-slate-300">{step}</span>
                                </motion.li>
                              ))}
                            </ol>
                            <Button asChild className="mt-6 w-full btn-shine gradient-accent text-white font-semibold border-0">
                              <Link href={`/services/${key === "storm" ? "storm-restoration" : key}`}>
                                Learn More
                                <ArrowRight className="ml-2 w-4 h-4" />
                              </Link>
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </TabsContent>
              ))}
            </AnimatePresence>
          </Tabs>
        </Reveal>
      </div>
    </section>
  );
}
