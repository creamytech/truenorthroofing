"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/lib/motion";
import { ArrowRight, Phone } from "lucide-react";

export function CommercialCTA() {
  return (
    <section className="py-16 gradient-hero">
      <div className="container mx-auto px-4 lg:px-8">
        <Reveal>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-white mb-4">
              Protect Your Business Investment
            </h2>
            <p className="text-xl text-white/70 mb-8">
              Get a free commercial roof assessment and customized maintenance plan for your property.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="btn-shine gradient-accent text-white font-semibold h-14 px-8 text-base border-0">
                <Link href="/free-inspection">
                  Request Commercial Assessment
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-14 px-8 text-base border-white/30 text-white hover:bg-white/10">
                <a href="tel:+18172044432">
                  <Phone className="mr-2 w-5 h-5" />
                  (817) 204-4432
                </a>
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
