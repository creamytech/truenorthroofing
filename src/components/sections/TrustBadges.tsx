"use client";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { motion } from "framer-motion";

const trustItems = [
  {
    quote: "Licensed & Insured in Texas",
    name: "Full Coverage",
    title: "TX Roofing License",
  },
  {
    quote: "5-Star Google Rating",
    name: "19 Reviews",
    title: "Perfect Score",
  },
  {
    quote: "Storm Restoration Specialists",
    name: "Insurance Experts",
    title: "Claim Support",
  },
  {
    quote: "Same-Day Inspections Available",
    name: "Fast Response",
    title: "DFW Area",
  },
  {
    quote: "Documented Photo Reports",
    name: "Transparency",
    title: "Every Project",
  },
  {
    quote: "Manufacturer Certified",
    name: "Quality Materials",
    title: "Warranty Backed",
  },
];

export function TrustBadges() {
  return (
    <section className="py-8 bg-slate-50 dark:bg-slate-950 border-y border-slate-200 dark:border-slate-800 overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <InfiniteMovingCards
            items={trustItems}
            direction="left"
            speed="slow"
            pauseOnHover={false}
            className="py-2"
          />
        </motion.div>
      </div>
    </section>
  );
}
