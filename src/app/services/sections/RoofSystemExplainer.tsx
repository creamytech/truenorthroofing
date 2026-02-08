"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/lib/motion";
import { SectionHeading } from "@/components/ui/section-heading";

const roofComponents = [
  {
    id: "decking",
    title: "Roof Decking",
    shortDesc: "The foundation of your roof",
    description: "The decking (or sheathing) is the wooden foundation attached to your roof's structural trusses. Typically made of plywood or OSB, it provides the surface for all other roofing materials. Damaged or rotted decking must be replaced before new roofing can be installed.",
    importance: "Without solid decking, your entire roof system is compromised. We inspect for soft spots, water damage, and proper thickness.",
  },
  {
    id: "underlayment",
    title: "Underlayment",
    shortDesc: "Your secondary water barrier",
    description: "Underlayment is a water-resistant or waterproof material installed directly on the roof deck. It serves as a secondary barrier against water infiltration. Modern synthetic underlayments offer superior protection compared to traditional felt paper.",
    importance: "Quality underlayment prevents leaks even if shingles are damaged. We use premium synthetic underlayment for superior protection.",
  },
  {
    id: "flashing",
    title: "Flashing",
    shortDesc: "Critical waterproofing at transitions",
    description: "Flashing is metal (usually aluminum or galvanized steel) installed at vulnerable areas where the roof meets walls, chimneys, vents, and valleys. Proper flashing installation is critical—most roof leaks occur at flashing points.",
    importance: "Improperly installed flashing is the #1 cause of roof leaks. We ensure all transitions are properly sealed and waterproofed.",
  },
  {
    id: "ventilation",
    title: "Ventilation System",
    shortDesc: "Regulates temperature and moisture",
    description: "Proper roof ventilation allows hot air and moisture to escape from your attic space. This includes intake vents (usually soffit vents) and exhaust vents (ridge vents or box vents). Balanced ventilation extends shingle life and prevents ice dams.",
    importance: "Poor ventilation can void shingle warranties and cause premature failure. We calculate and install proper ventilation for your specific roof.",
  },
  {
    id: "shingles",
    title: "Shingles or Roofing Material",
    shortDesc: "Your first line of defense",
    description: "The outermost layer of your roof—typically asphalt shingles in Texas. This is what you see and what takes the brunt of weather exposure. Quality shingles with proper installation protect everything beneath them.",
    importance: "We install architectural shingles rated for Texas weather conditions, ensuring maximum protection and curb appeal.",
  },
  {
    id: "drip-edge",
    title: "Drip Edge",
    shortDesc: "Protects fascia and directs water",
    description: "Drip edge is metal flashing installed at the edges of your roof. It directs water away from the fascia and into your gutters, preventing water from wicking back under the roofing materials.",
    importance: "Required by code in most areas, drip edge prevents water damage to your fascia boards and roof deck edges.",
  },
];

export function RoofSystemExplainer() {
  return (
    <section className="section-padding bg-slate-50 dark:bg-slate-800/50">
      <div className="container mx-auto px-4 lg:px-8">
        <Reveal>
          <SectionHeading
            label="Education"
            title="Understanding Your Roof System"
            description="A roof isn't just shingles—it's a complete system where every component works together. Here's what makes up a quality roof installation."
            centered
            className="mb-12"
          />
        </Reveal>

        <div className="max-w-4xl mx-auto">
          <Reveal>
            <Card className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
              <CardContent className="p-0">
                <Accordion type="single" collapsible className="w-full">
                  {roofComponents.map((component, index) => (
                    <AccordionItem 
                      key={component.id} 
                      value={component.id}
                      className="border-b border-slate-200 dark:border-slate-700 last:border-0"
                    >
                      <AccordionTrigger className="px-6 py-5 hover:bg-slate-100/80 dark:hover:bg-slate-700/50 transition-colors [&[data-state=open]]:bg-slate-100/80 dark:[&[data-state=open]]:bg-slate-700/50">
                        <div className="flex items-center gap-4 text-left">
                          <span className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white text-sm font-bold flex items-center justify-center flex-shrink-0">
                            {index + 1}
                          </span>
                          <div>
                            <h3 className="font-semibold text-white">
                              {component.title}
                            </h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400">
                              {component.shortDesc}
                            </p>
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-6">
                        <div className="pl-12 space-y-4">
                          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                            {component.description}
                          </p>
                          <div className="p-4 rounded-lg bg-blue-950/50 border border-blue-900/50">
                            <p className="text-sm">
                              <span className="font-semibold text-blue-400">Why it matters: </span>
                              <span className="text-slate-600 dark:text-slate-300">{component.importance}</span>
                            </p>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
