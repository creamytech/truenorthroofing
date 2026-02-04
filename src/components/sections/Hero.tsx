"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Reveal, fadeUp } from "@/lib/motion";
import { Phone, ArrowRight, Star } from "lucide-react";
import { GoogleReviewsBadge } from "@/components/ui/google-reviews-badge";

export function Hero() {
  return (
    <section className="relative min-h-[100vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1632889473959-45023d8d8650?q=80&w=2940&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-slate-900/85" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-slate-900/50" />
        {/* Subtle mesh pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Content - Centered */}
      <div className="relative container mx-auto px-4 lg:px-8 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Google Reviews Badge */}
          <Reveal variants={fadeUp}>
            <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
              <GoogleReviewsBadge rating={5.0} reviewCount={19} />
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm text-white/80 font-medium">Local & Insured</span>
              </div>
            </div>
          </Reveal>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-white mb-6"
          >
            Professional Roofing{" "}
            <span className="text-gradient">Experts</span>{" "}
            of Texas
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-xl text-white/70 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Storm restoration specialists delivering complete roofing systems with 
            documented inspections, insurance support, and unmatched craftsmanship.
          </motion.p>

          {/* Quick Review Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mb-10 p-5 rounded-xl bg-white/5 border border-white/10 max-w-xl mx-auto"
          >
            <div className="flex items-center justify-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p className="text-white/80 text-base italic">
              &ldquo;This company fixed mistakes of past roofing companies! They were incredibly 
              easy to work with and not pushy. They explained every step of the way.&rdquo;
            </p>
            <p className="text-white/50 text-sm mt-3">— Kathryne P., Google Review</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Button asChild size="lg" className="btn-shine gradient-accent text-white font-semibold h-14 px-8 text-base shadow-lg hover:shadow-xl transition-shadow border-0">
              <Link href="/free-inspection">
                Free Inspection
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-14 px-8 text-base bg-white/10 border-white/20 text-white hover:bg-white/20 hover:text-white">
              <a href="tel:+18172044432">
                <Phone className="mr-2 w-5 h-5" />
                Call Now
              </a>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent" />
    </section>
  );
}
