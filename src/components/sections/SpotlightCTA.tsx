"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Spotlight } from "@/components/ui/spotlight";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Shield, Clock, FileCheck, Home } from "lucide-react";

export function SpotlightCTA() {
  return (
    <section className="relative overflow-hidden bg-slate-50 dark:bg-slate-950 py-20 md:py-28">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="rgba(6, 182, 212, 0.15)"
      />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white leading-tight">
              Ready to Protect Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-500">
                Texas Home?
              </span>
            </h2>
            
            <p className="text-xl text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
              Schedule your free inspection today and get a detailed roof assessment 
              with no obligation.
            </p>

            {/* Trust points */}
            <div className="flex flex-wrap justify-center gap-6 py-6">
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                <Shield className="w-5 h-5 text-blue-400" />
                <span className="text-sm">Fully Insured</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                <Home className="w-5 h-5 text-blue-400" />
                <span className="text-sm">Locally Owned</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                <Clock className="w-5 h-5 text-blue-400" />
                <span className="text-sm">Same-Day Available</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                <FileCheck className="w-5 h-5 text-blue-400" />
                <span className="text-sm">Photo Documentation</span>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                asChild 
                size="lg" 
                className="btn-shine gradient-accent text-white font-semibold h-14 px-8 text-base shadow-lg hover:shadow-xl transition-shadow border-0"
              >
                <Link href="/free-inspection">
                  Get Free Inspection
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="h-14 px-8 text-base bg-slate-100 dark:bg-white/5 border-slate-200 dark:border-white/20 text-slate-600 dark:text-white hover:bg-slate-200 dark:hover:bg-white/10 hover:text-slate-900 dark:hover:text-white"
              >
                <a href="tel:+18172044432">
                  <Phone className="mr-2 w-5 h-5" />
                  (817) 204-4432
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
    </section>
  );
}
