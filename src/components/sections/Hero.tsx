"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Reveal, fadeUp } from "@/lib/motion";
import { Phone, ArrowRight, Shield, Clock, Award } from "lucide-react";
import { GoogleReviewsBadge } from "@/components/ui/google-reviews-badge";

export function Hero() {
  return (
    <section className="relative min-h-[85vh] sm:min-h-[80vh] lg:min-h-[100vh] flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/AfterHero.mp4" type="video/mp4" />
        </video>
        {/* Overlay */}
        <div className="absolute inset-0 bg-slate-900/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-slate-900/40" />
      </div>

      {/* Centered Content */}
      <div className="relative container mx-auto px-4 lg:px-8 py-24 sm:py-20 lg:py-32 xl:py-40">
        <div className="max-w-4xl xl:max-w-5xl mx-auto text-center space-y-8 lg:space-y-8 xl:space-y-10">
          
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <Image
              src="/logoheader.png"
              alt="True North Roofing & Construction"
              width={400}
              height={114}
              className="w-56 sm:w-60 lg:w-80 xl:w-96 h-auto drop-shadow-2xl"
              priority
            />
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold uppercase tracking-wide leading-tight"
          >
            Professional Roofing{" "}
            <span className="text-gradient">Experts</span>
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>of Texas
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base sm:text-lg lg:text-xl xl:text-2xl text-white/80 max-w-2xl xl:max-w-3xl mx-auto leading-relaxed"
          >
            Storm restoration specialists delivering complete roofing systems with 
            documented inspections, insurance support, and unmatched craftsmanship.
          </motion.p>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-3 lg:gap-4 xl:gap-5"
          >
            <GoogleReviewsBadge rating={5.0} reviewCount={19} />
            <div className="flex items-center gap-2 px-3 py-2 sm:py-1.5 xl:px-4 xl:py-2 rounded-full glass-dark">
              <Shield className="w-4 h-4 xl:w-5 xl:h-5 text-amber-400" />
              <span className="text-sm sm:text-xs lg:text-sm xl:text-base text-white/90 font-medium">Fully Insured</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 sm:py-1.5 xl:px-4 xl:py-2 rounded-full glass-dark">
              <Clock className="w-4 h-4 xl:w-5 xl:h-5 text-amber-400" />
              <span className="text-sm sm:text-xs lg:text-sm xl:text-base text-white/90 font-medium">Same-Day Service</span>
            </div>
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 xl:px-4 xl:py-2 rounded-full glass-dark">
              <Award className="w-4 h-4 xl:w-5 xl:h-5 text-amber-400" />
              <span className="text-xs lg:text-sm xl:text-base text-white/90 font-medium">Lifetime Warranty</span>
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-3 lg:gap-4 xl:gap-5 pt-2"
          >
            <Button asChild size="lg" className="btn-shine gradient-accent text-white font-semibold h-13 sm:h-12 lg:h-14 xl:h-16 px-7 sm:px-6 lg:px-8 xl:px-10 text-base sm:text-sm lg:text-base xl:text-lg shadow-lg hover:shadow-xl transition-shadow border-0">
              <Link href="/free-inspection">
                Get Free Inspection
                <ArrowRight className="ml-2 w-5 h-5 sm:w-4 sm:h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-13 sm:h-12 lg:h-14 xl:h-16 px-7 sm:px-6 lg:px-8 xl:px-10 text-base sm:text-sm lg:text-base xl:text-lg bg-white/10 border-white/30 text-white hover:bg-white/20 hover:text-white backdrop-blur-sm">
              <a href="tel:+18172044432">
                <Phone className="mr-2 w-5 h-5 sm:w-4 sm:h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6" />
                (817) 204-4432
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
