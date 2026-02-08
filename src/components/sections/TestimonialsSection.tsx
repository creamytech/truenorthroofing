"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { Star } from "lucide-react";
import { GoogleReviewsBadge } from "@/components/ui/google-reviews-badge";

// Manually curated Google reviews
const testimonials = [
  {
    quote:
      "After the hailstorm damaged our roof, True North was the only company that provided a thorough inspection with photos and documentation. They handled our entire insurance claim and we got a brand new roof at no out-of-pocket cost!",
    name: "Michael Richardson",
    designation: "Homeowner in Fort Worth",
    src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop",
  },
  {
    quote:
      "Professional from start to finish. The crew showed up on time, protected our property, and completed the work in just one day. Our new roof looks amazing and the cleanup was spotless.",
    name: "Sarah Martinez",
    designation: "Homeowner in Arlington",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop",
  },
  {
    quote:
      "We've used True North for three of our commercial properties now. Their TPO roofing work is excellent and they always complete projects on schedule. Highly recommend for any business owner.",
    name: "David Chen",
    designation: "Property Manager in Dallas",
    src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
  },
  {
    quote:
      "The communication throughout our project was outstanding. They kept us informed every step of the way, from the initial inspection to the final walkthrough. 5 stars!",
    name: "Jennifer Williams",
    designation: "Homeowner in Mansfield",
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop",
  },
  {
    quote:
      "True North helped us navigate a difficult insurance claim after storm damage. Their documentation was so thorough that our claim was approved quickly. Can't thank them enough!",
    name: "Robert Thompson",
    designation: "Homeowner in Grand Prairie",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
  },
];

export function TestimonialsSection() {
  return (
    <section className="section-padding bg-white dark:bg-slate-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* Header with Google Reviews */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center mb-6"
          >
            <GoogleReviewsBadge rating={5.0} reviewCount={19} />
          </motion.div>
          
          <SectionHeading
            label="Customer Reviews"
            title="What Our Customers Say"
            description="Read real reviews from homeowners and businesses across the DFW metroplex who trusted us with their roofing projects."
            centered
          />
        </div>

        {/* Animated Testimonials */}
        <AnimatedTestimonials testimonials={testimonials} autoplay />

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-wrap justify-center gap-8"
        >
          <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-blue-400" />
              ))}
            </div>
            <span>5.0 Average Rating</span>
          </div>
          <div className="text-slate-500 dark:text-slate-400">
            <span className="text-white font-semibold">47+</span> Verified Reviews
          </div>
          <div className="text-slate-500 dark:text-slate-400">
            <span className="text-white font-semibold">100%</span> Would Recommend
          </div>
        </motion.div>
      </div>
    </section>
  );
}
