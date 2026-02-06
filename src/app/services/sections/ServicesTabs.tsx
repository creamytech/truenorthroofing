"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/lib/motion";
import { 
  Home, 
  Building2, 
  CloudRain, 
  Check, 
  AlertTriangle,
  ArrowRight 
} from "lucide-react";

const services = {
  residential: {
    id: "residential",
    icon: Home,
    title: "Residential Roofing",
    description: "Complete roofing solutions designed for Texas homeowners, built to last and backed by our lifetime workmanship warranty.",
    services: [
      "Complete Roof Replacement",
      "Roof Repair & Maintenance",
      "Emergency Tarping",
      "Gutter Installation & Repair",
      "Attic Ventilation Systems",
      "Skylight Installation",
    ],
    inspects: [
      "Shingle condition & granule loss",
      "Flashing around vents & chimneys",
      "Underlayment & deck integrity",
      "Ventilation effectiveness",
      "Gutter & drainage systems",
    ],
    redFlags: [
      "Missing or cracked shingles",
      "Sagging rooflines",
      "Visible water damage or stains",
      "Improper flashing installation",
      "Inadequate attic ventilation",
    ],
  },
  commercial: {
    id: "commercial",
    icon: Building2,
    title: "Commercial Roofing",
    description: "Professional commercial roofing solutions with minimal business disruption and comprehensive warranty coverage.",
    services: [
      "Flat Roof Systems (TPO, EPDM, PVC)",
      "Metal Roofing Installation",
      "Roof Coatings & Restoration",
      "Preventative Maintenance Programs",
      "Emergency Leak Repair",
      "Roof Inspections & Reports",
    ],
    inspects: [
      "Membrane condition & seams",
      "Drainage & ponding issues",
      "Penetration points & equipment curbs",
      "Parapet walls & coping",
      "HVAC unit flashings",
    ],
    redFlags: [
      "Ponding water after 48 hours",
      "Blistering or bubbling membrane",
      "Exposed insulation",
      "Deteriorating edge details",
      "Interior water intrusion signs",
    ],
  },
  storm: {
    id: "storm",
    icon: CloudRain,
    title: "Storm Restoration",
    description: "Expert storm damage assessment with comprehensive insurance documentation and claim support.",
    services: [
      "Hail Damage Assessment",
      "Wind Damage Repair",
      "Insurance Claim Documentation",
      "Emergency Tarping & Protection",
      "Complete Storm Restoration",
      "Supplemental Claim Support",
    ],
    inspects: [
      "Hail impact patterns",
      "Wind-lifted or missing shingles",
      "Dent patterns on vents & gutters",
      "Granule displacement evidence",
      "Soft spots indicating deck damage",
    ],
    redFlags: [
      "Circular dents on shingles/metal",
      "Exposed fiberglass mat",
      "Creased or fractured shingles",
      "Damaged ridge caps",
      "Gutter granule accumulation",
    ],
  },
};

export function ServicesTabs() {
  const [activeTab, setActiveTab] = useState("residential");

  return (
    <section className="section-padding bg-slate-900">
      <div className="container mx-auto px-4 lg:px-8">
        <Reveal>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 h-16 p-1.5 bg-slate-800 rounded-2xl mb-10">
              {Object.entries(services).map(([key, service]) => (
                <TabsTrigger
                  key={key}
                  value={key}
                  id={service.id}
                  className="data-[state=active]:bg-slate-700 data-[state=active]:text-white data-[state=active]:shadow-md rounded-xl text-base font-medium transition-all h-full text-slate-400"
                >
                  <service.icon className="w-5 h-5 mr-2" />
                  <span className="hidden sm:inline">{service.title.split(" ")[0]}</span>
                  <span className="sm:hidden">{key === "storm" ? "Storm" : service.title.split(" ")[0]}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            <AnimatePresence mode="wait">
              {Object.entries(services).map(([key, service]) => (
                <TabsContent key={key} value={key} className="mt-0">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Service Header */}
                    <div className="text-center mb-10">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-blue-600 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-amber-500/20">
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <h2 className="text-white mb-3">{service.title}</h2>
                      <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                        {service.description}
                      </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-6">
                      {/* What We Do */}
                      <Card className="lg:row-span-2 bg-slate-800 border-slate-700 h-full">
                        <CardContent className="p-6 h-full">
                          <div className="-mx-6 -mt-6 px-6 py-4 mb-4 bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent border-b border-slate-700">
                            <h3 className="font-semibold text-white flex items-center gap-2">
                              <div className="w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center">
                                <Check className="w-4 h-4 text-amber-400" />
                              </div>
                              What We Do
                            </h3>
                          </div>
                          <ul className="space-y-3">
                            {service.services.map((item) => (
                              <li key={item} className="flex items-start gap-3">
                                <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                  <Check className="w-3 h-3 text-green-400" />
                                </div>
                                <span className="text-slate-300">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>

                      {/* Right column wrapper for even spacing */}
                      <div className="lg:col-span-2 lg:row-span-2 grid grid-rows-2 gap-6">
                        {/* What We Inspect */}
                        <Card className="bg-slate-800 border-slate-700 h-full">
                          <CardContent className="p-6 h-full flex flex-col">
                            <div className="-mx-6 -mt-6 px-6 py-4 mb-4 bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent border-b border-slate-700">
                              <h3 className="font-semibold text-white flex items-center gap-2">
                                <div className="w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center">
                                  <svg className="w-4 h-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                  </svg>
                                </div>
                                What We Inspect
                              </h3>
                            </div>
                            <ul className="space-y-2 flex-1">
                              {service.inspects.map((item) => (
                                <li key={item} className="text-sm text-slate-400 flex items-start gap-2">
                                  <span className="text-amber-400 mt-1">•</span>
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </CardContent>
                        </Card>

                        {/* Red Flags We Catch */}
                        <Card className="bg-red-950/50 border-red-900/50 h-full">
                          <CardContent className="p-6 h-full flex flex-col">
                            <div className="-mx-6 -mt-6 px-6 py-4 mb-4 bg-gradient-to-r from-red-500/10 via-red-500/5 to-transparent border-b border-red-900/50">
                              <h3 className="font-semibold text-white flex items-center gap-2">
                                <div className="w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center">
                                  <AlertTriangle className="w-4 h-4 text-red-400" />
                                </div>
                                Red Flags We Catch
                              </h3>
                            </div>
                            <ul className="space-y-2 flex-1">
                              {service.redFlags.map((item) => (
                                <li key={item} className="text-sm text-slate-400 flex items-start gap-2">
                                  <span className="text-red-400 mt-1">!</span>
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </CardContent>
                        </Card>
                      </div>

                      {/* CTA Card */}
                      <Card className="lg:col-span-3 gradient-hero border-0">
                        <CardContent className="p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                          <div>
                            <h3 className="font-semibold text-lg text-white mb-1">
                              Need {service.title.split(" ")[0]} Services?
                            </h3>
                            <p className="text-slate-300 text-sm">
                              Schedule your free inspection today.
                            </p>
                          </div>
                          <Button asChild className="btn-shine gradient-accent text-white font-semibold border-0 whitespace-nowrap">
                            <Link href="/free-inspection">
                              Get Free Inspection
                              <ArrowRight className="ml-2 w-4 h-4" />
                            </Link>
                          </Button>
                        </CardContent>
                      </Card>
                    </div>
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
