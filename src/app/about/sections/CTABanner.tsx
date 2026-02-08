"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/lib/motion";
import { ArrowRight } from "lucide-react";

export function CTABanner() {
  return (
    <section className="py-16 gradient-hero">
      <div className="container mx-auto px-4 lg:px-8">
        <Reveal>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-white mb-4">
              Ready to Work with True North?
            </h2>
            <p className="text-xl text-white/70 mb-8">
              Schedule your free inspection today and experience the True North difference.
            </p>
            <Button asChild size="lg" className="btn-shine gradient-accent text-white font-semibold h-14 px-8 text-base border-0">
              <Link href="/free-inspection">
                Get Your Free Inspection
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
