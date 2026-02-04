"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Reveal, fadeUp } from "@/lib/motion";
import { Phone, ArrowRight } from "lucide-react";
import { GoogleReviewsBadge } from "@/components/ui/google-reviews-badge";

export function Hero() {
  return (
    <section className="relative min-h-[100vh] flex flex-col overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/herovid.mp4" type="video/mp4" />
        </video>
        {/* Overlay */}
        <div className="absolute inset-0 bg-slate-900/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-slate-900/30" />
      </div>

      {/* Top Badges */}
      <div className="relative container mx-auto px-4 lg:px-8 pt-28 lg:pt-32">
        <Reveal variants={fadeUp}>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <GoogleReviewsBadge rating={5.0} reviewCount={19} />
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm text-white/80 font-medium">Local & Insured</span>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Spacer - lets video logo show */}
      <div className="flex-1" />

      {/* Bottom Content */}
      <div className="relative container mx-auto px-4 lg:px-8 pb-16 lg:pb-24">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-white text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight"
          >
            Professional Roofing{" "}
            <span className="text-gradient">Experts</span>{" "}
            of Texas
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-base lg:text-lg text-white/70 max-w-xl mx-auto leading-relaxed"
          >
            Storm restoration specialists delivering complete roofing systems with 
            documented inspections, insurance support, and unmatched craftsmanship.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="flex flex-wrap justify-center gap-3 pt-2"
          >
            <Button asChild size="lg" className="btn-shine gradient-accent text-white font-semibold h-12 px-6 text-sm shadow-lg hover:shadow-xl transition-shadow border-0">
              <Link href="/free-inspection">
                Free Inspection
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-12 px-6 text-sm bg-white/10 border-white/20 text-white hover:bg-white/20 hover:text-white">
              <a href="tel:+18172044432">
                <Phone className="mr-2 w-4 h-4" />
                Call Now
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
