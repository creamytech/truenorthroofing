"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/lib/motion";
import { 
  Home, 
  Building2, 
  CloudLightning, 
  Wrench, 
  Shield, 
  FileCheck,
  ArrowRight
} from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Residential Roofing",
    description: "Complete roof systems for homes including shingle, metal, and tile installations with manufacturer warranties.",
    icon: <Home className="w-6 h-6 text-cyan-400" />,
    href: "/services/residential",
    className: "md:col-span-2",
    header: (
      <div className="flex flex-1 w-full h-full min-h-[140px] rounded-xl bg-gradient-to-br from-cyan-500/20 via-slate-900 to-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600')] bg-cover bg-center opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
      </div>
    ),
  },
  {
    title: "Storm Restoration",
    description: "Expert hail and wind damage repair with full insurance claim support and documentation.",
    icon: <CloudLightning className="w-6 h-6 text-amber-400" />,
    href: "/services/storm-restoration",
    className: "md:col-span-1",
    header: (
      <div className="flex flex-1 w-full h-full min-h-[140px] rounded-xl bg-gradient-to-br from-amber-500/20 via-slate-900 to-slate-800 relative overflow-hidden">
        <motion.div
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute top-4 right-4"
        >
          <CloudLightning className="w-12 h-12 text-amber-400/50" />
        </motion.div>
      </div>
    ),
  },
  {
    title: "Commercial Roofing",
    description: "TPO, EPDM, and built-up roofing systems for businesses and commercial properties.",
    icon: <Building2 className="w-6 h-6 text-blue-400" />,
    href: "/services/commercial",
    className: "md:col-span-1",
    header: (
      <div className="flex flex-1 w-full h-full min-h-[140px] rounded-xl bg-gradient-to-br from-blue-500/20 via-slate-900 to-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
      </div>
    ),
  },
  {
    title: "Repairs & Maintenance",
    description: "Fast leak repairs, preventative maintenance, and roof tune-ups to extend your roof's lifespan.",
    icon: <Wrench className="w-6 h-6 text-emerald-400" />,
    href: "/services",
    className: "md:col-span-1",
    header: (
      <div className="flex flex-1 w-full h-full min-h-[140px] rounded-xl bg-gradient-to-br from-emerald-500/20 via-slate-900 to-slate-800 items-center justify-center">
        <Wrench className="w-16 h-16 text-emerald-400/30" />
      </div>
    ),
  },
  {
    title: "Free Inspections",
    description: "Comprehensive roof inspections with detailed photo documentation and honest assessments.",
    icon: <FileCheck className="w-6 h-6 text-cyan-400" />,
    href: "/free-inspection",
    className: "md:col-span-1",
    header: (
      <div className="flex flex-1 w-full h-full min-h-[140px] rounded-xl bg-gradient-to-br from-cyan-500/20 via-slate-900 to-slate-800 items-center justify-center">
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <FileCheck className="w-16 h-16 text-cyan-400/30" />
        </motion.div>
      </div>
    ),
  },
];

export function ServicesBento() {
  return (
    <section className="section-padding bg-slate-900">
      <div className="container mx-auto px-4 lg:px-8">
        <Reveal>
          <SectionHeading
            label="Services"
            title="Complete Roofing Solutions"
            description="From residential repairs to commercial installations, we've got Texas covered."
            centered
            className="mb-16"
          />
        </Reveal>

        <BentoGrid className="max-w-5xl mx-auto">
          {services.map((service, i) => (
            <Link key={service.title} href={service.href}>
              <BentoGridItem
                title={service.title}
                description={service.description}
                header={service.header}
                icon={service.icon}
                className={cn(
                  service.className,
                  "cursor-pointer hover:border-cyan-500/50 transition-colors bg-slate-800/50 border-slate-700"
                )}
              />
            </Link>
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}
