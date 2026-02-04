"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Reveal, fadeUp } from "@/lib/motion";
import { Phone, ArrowRight } from "lucide-react";
import { GoogleReviewsBadge } from "@/components/ui/google-reviews-badge";

export function Hero() {
  return (
    <section className="relative h-[50vh] sm:h-[65vh] lg:min-h-[100vh] lg:h-auto flex flex-col overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-top"
        >
          <source src="/herovid.mp4" type="video/mp4" />
        </video>
        {/* Overlay */}
        <div className="absolute inset-0 bg-slate-900/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-slate-900/30" />
      </div>

      {/* Top Badges */}
      <div className="relative container mx-auto px-4 lg:px-8 pt-20 lg:pt-32">
        <Reveal variants={fadeUp}>
          <div className="flex flex-wrap items-center justify-center gap-2">
            <GoogleReviewsBadge rating={5.0} reviewCount={19} />
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full glass-dark">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs text-white/80 font-medium">Local & Insured</span>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Spacer - lets video logo show */}
      <div className="flex-1" />

      {/* Bottom Content */}
      <div className="relative container mx-auto px-4 lg:px-8 pb-6 lg:pb-24">
        <div className="max-w-3xl mx-auto text-center space-y-3 lg:space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-white text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight"
          >
            Professional Roofing{" "}
            <span className="text-gradient">Experts</span>{" "}
            of Texas
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-xs sm:text-sm lg:text-lg text-white/70 max-w-xl mx-auto leading-relaxed hidden sm:block"
          >
            Storm restoration specialists delivering complete roofing systems with 
            documented inspections, insurance support, and unmatched craftsmanship.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="flex flex-wrap justify-center gap-2 lg:gap-3 pt-1 lg:pt-2"
          >
            <Button asChild size="default" className="btn-shine gradient-accent text-white font-semibold h-9 lg:h-12 px-4 lg:px-6 text-xs lg:text-sm shadow-lg hover:shadow-xl transition-shadow border-0">
              <Link href="/free-inspection">
                Free Inspection
                <ArrowRight className="ml-1.5 lg:ml-2 w-3.5 h-3.5 lg:w-4 lg:h-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="default" className="h-9 lg:h-12 px-4 lg:px-6 text-xs lg:text-sm bg-white/10 border-white/20 text-white hover:bg-white/20 hover:text-white">
              <a href="tel:+18172044432">
                <Phone className="mr-1.5 lg:mr-2 w-3.5 h-3.5 lg:w-4 lg:h-4" />
                Call Now
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
