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
    icon: <Home className="w-6 h-6 text-amber-400" />,
    href: "/services/residential",
    className: "md:col-span-2",
    header: (
      <div className="flex flex-1 w-full h-full min-h-[140px] rounded-xl bg-gradient-to-br from-amber-500/20 via-slate-900 to-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/Gallery/down-net_http20250816-195-3qpy65.jpg')] bg-cover bg-center opacity-40" />
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
        <div className="absolute inset-0 bg-[url('/Gallery/down-net_http20250906-159-six5.jpg')] bg-cover bg-center opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
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
        <div className="absolute inset-0 bg-[url('/Gallery/down-net_http20250906-100-gvb2dx.jpg')] bg-cover bg-center opacity-40" />
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
      <div className="flex flex-1 w-full h-full min-h-[140px] rounded-xl bg-gradient-to-br from-emerald-500/20 via-slate-900 to-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/Gallery/down-net_http20250815-207-4fbre1.jpg')] bg-cover bg-center opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
      </div>
    ),
  },
  {
    title: "Free Inspections",
    description: "Comprehensive roof inspections with detailed photo documentation and honest assessments.",
    icon: <FileCheck className="w-6 h-6 text-amber-400" />,
    href: "/free-inspection",
    className: "md:col-span-1",
    header: (
      <div className="flex flex-1 w-full h-full min-h-[140px] rounded-xl bg-gradient-to-br from-amber-500/20 via-slate-900 to-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/Gallery/down-net_http20250816-210-v40tcd.jpg')] bg-cover bg-center opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
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
                  "cursor-pointer hover:border-amber-500/50 transition-colors bg-slate-800/50 border-slate-700"
                )}
              />
            </Link>
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}
