"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Reveal } from "@/lib/motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { Map, MapMarker, MarkerContent } from "@/components/ui/map";
import { MapPin, CheckCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Texas service area locations with coordinates
const serviceAreas = [
  { id: "mansfield", name: "Mansfield", lat: 32.5631, lng: -97.1417, isPrimary: true },
  { id: "arlington", name: "Arlington", lat: 32.7357, lng: -97.1081, isPrimary: false },
  { id: "fort-worth", name: "Fort Worth", lat: 32.7555, lng: -97.3308, isPrimary: false },
  { id: "dallas", name: "Dallas", lat: 32.7767, lng: -96.7970, isPrimary: false },
  { id: "grand-prairie", name: "Grand Prairie", lat: 32.7459, lng: -96.9978, isPrimary: false },
  { id: "burleson", name: "Burleson", lat: 32.5421, lng: -97.3208, isPrimary: false },
  { id: "midlothian", name: "Midlothian", lat: 32.4824, lng: -96.9945, isPrimary: false },
  { id: "cedar-hill", name: "Cedar Hill", lat: 32.5884, lng: -96.9561, isPrimary: false },
];

// DFW center coordinates
const DFW_CENTER = { lat: 32.65, lng: -97.05 };

export function ServiceAreaMap() {
  const [activeArea, setActiveArea] = useState<string | null>("mansfield");
  const activeLocation = serviceAreas.find(a => a.id === activeArea);

  return (
    <section className="section-padding bg-slate-900 relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative">
        <Reveal>
          <SectionHeading
            label="Service Area"
            title="Proudly Serving the DFW Metroplex"
            description="From our home base in Mansfield, we provide expert roofing services throughout the Dallas-Fort Worth area."
            centered
            className="mb-12"
          />
        </Reveal>

        {/* Interactive Map + Locations Grid */}
        <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {/* Interactive Map */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 h-[400px] lg:h-[500px] rounded-2xl overflow-hidden border border-slate-700 shadow-xl shadow-black/20"
          >
            <Map
              center={[DFW_CENTER.lng, DFW_CENTER.lat]}
              zoom={9}
              theme="dark"
            >
              {serviceAreas.map((area) => (
                <MapMarker
                  key={area.id}
                  longitude={area.lng}
                  latitude={area.lat}
                  onClick={() => setActiveArea(area.id)}
                >
                  <MarkerContent 
                    className={`cursor-pointer transition-all duration-200 ${
                      activeArea === area.id ? 'scale-125' : 'scale-100 hover:scale-110'
                    }`}
                  >
                    <div className={`relative flex items-center justify-center ${
                      area.isPrimary 
                        ? 'w-10 h-10 bg-gradient-to-br from-cyan-400 to-cyan-600 shadow-lg shadow-cyan-500/40' 
                        : activeArea === area.id
                          ? 'w-8 h-8 bg-cyan-500 shadow-md shadow-cyan-500/30'
                          : 'w-6 h-6 bg-slate-600 hover:bg-cyan-500'
                    } rounded-full border-2 border-white`}>
                      <MapPin className={`${area.isPrimary ? 'w-5 h-5' : 'w-3 h-3'} text-white`} />
                      {area.isPrimary && (
                        <span className="absolute -top-1 -right-1 w-3 h-3 bg-amber-400 rounded-full animate-pulse" />
                      )}
                    </div>
                    {/* Label on hover/active */}
                    {(activeArea === area.id || area.isPrimary) && (
                      <div className={`absolute top-full mt-1 left-1/2 -translate-x-1/2 whitespace-nowrap px-2 py-1 rounded text-xs font-medium ${
                        area.isPrimary 
                          ? 'bg-cyan-500 text-white' 
                          : 'bg-slate-800 text-white border border-slate-600'
                      }`}>
                        {area.name}
                        {area.isPrimary && <span className="ml-1 text-[10px] opacity-80">HQ</span>}
                      </div>
                    )}
                  </MarkerContent>
                </MapMarker>
              ))}
            </Map>
          </motion.div>

          {/* Locations List */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-4"
          >
            {/* Headquarters Card */}
            <div className="bg-gradient-to-r from-cyan-500/20 via-cyan-500/10 to-cyan-500/20 rounded-xl p-4 border border-cyan-500/30">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-cyan-500 flex items-center justify-center shadow-lg shadow-cyan-500/30">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-white">Mansfield, TX</h3>
                    <span className="text-[10px] bg-cyan-500 text-white px-1.5 py-0.5 rounded font-medium">
                      HQ
                    </span>
                  </div>
                  <p className="text-sm text-slate-400">Same-day service available</p>
                </div>
              </div>
            </div>

            {/* Other Cities */}
            <div className="space-y-2">
              <p className="text-xs text-slate-500 uppercase tracking-wider font-medium px-1">
                Also Serving
              </p>
              <div className="grid grid-cols-2 gap-2">
                {serviceAreas.filter(a => !a.isPrimary).map((area) => (
                  <button
                    key={area.id}
                    onMouseEnter={() => setActiveArea(area.id)}
                    onMouseLeave={() => setActiveArea("mansfield")}
                    onClick={() => setActiveArea(area.id)}
                    className={`p-3 rounded-lg border transition-all duration-200 text-left ${
                      activeArea === area.id
                        ? "bg-slate-800 border-cyan-500/50 shadow-lg shadow-cyan-500/10"
                        : "bg-slate-800/50 border-slate-700 hover:border-slate-600"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full transition-colors ${
                        activeArea === area.id ? "bg-cyan-400" : "bg-slate-500"
                      }`} />
                      <span className={`text-sm font-medium transition-colors ${
                        activeArea === area.id ? "text-white" : "text-slate-300"
                      }`}>
                        {area.name}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4 space-y-3">
              <Button asChild className="w-full btn-shine gradient-accent text-white font-semibold border-0">
                <Link href="/free-inspection">
                  Get Free Inspection in {activeLocation?.name || 'Your Area'}
                </Link>
              </Button>
              <div className="flex items-center justify-center gap-2 text-sm text-slate-400">
                <Phone className="w-4 h-4" />
                <span>Or call <a href="tel:+18172044432" className="text-cyan-400 hover:text-cyan-300">(817) 204-4432</a></span>
              </div>
            </div>

            {/* Bottom info */}
            <div className="flex items-center gap-2 p-3 rounded-lg bg-slate-800/30 border border-slate-700/50">
              <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
              <span className="text-xs text-slate-400">
                Don&apos;t see your city? We likely serve your area too!
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
