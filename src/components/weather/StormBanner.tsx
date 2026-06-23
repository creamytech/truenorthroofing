"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useWeather } from "@/lib/weather-context";
import { AlertTriangle, CloudLightning, X, ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export function StormBanner() {
  const { weather } = useWeather();
  const [isDismissed, setIsDismissed] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if user has dismissed this session
    const dismissed = sessionStorage.getItem('storm-banner-dismissed');
    if (dismissed) {
      setIsDismissed(true);
      return;
    }
    
    // Show banner if there's severe weather
    setIsVisible(weather?.isStormy || (weather?.alerts?.length ?? 0) > 0);
  }, [weather]);

  const handleDismiss = () => {
    setIsDismissed(true);
    sessionStorage.setItem('storm-banner-dismissed', 'true');
  };

  const showBanner = isVisible && !isDismissed;

  // Expose the banner's live height as a CSS variable so the fixed (mobile)
  // navbar can sit directly below it instead of overlapping it.
  useEffect(() => {
    const root = document.documentElement;
    if (!showBanner) {
      root.style.setProperty('--banner-h', '0px');
      return;
    }
    const el = bannerRef.current;
    if (!el) return;
    const update = () =>
      root.style.setProperty('--banner-h', `${el.offsetHeight}px`);
    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => {
      observer.disconnect();
      root.style.setProperty('--banner-h', '0px');
    };
  }, [showBanner]);

  const severity = weather?.alerts?.[0]?.severity || 'moderate';
  const isSevere = severity === 'severe' || severity === 'extreme';

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          ref={bannerRef}
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className={`relative overflow-hidden ${
            isSevere 
              ? 'bg-gradient-to-r from-red-600 via-red-500 to-orange-500' 
              : 'bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400'
          }`}
        >
          {/* Animated lightning effect for severe weather */}
          {isSevere && (
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute inset-0 bg-white/10 animate-pulse" />
            </div>
          )}

          <div className="container mx-auto px-4 py-3 relative">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-3 text-white">
                <div className={`p-2 rounded-full ${isSevere ? 'bg-white/20' : 'bg-white/30'} animate-pulse`}>
                  {isSevere ? (
                    <AlertTriangle className="w-5 h-5" />
                  ) : (
                    <CloudLightning className="w-5 h-5" />
                  )}
                </div>
                <div>
                  <p className="font-bold text-sm sm:text-base">
                    {weather?.alerts?.[0]?.event || 'Storm Alert for Texas'}
                  </p>
                  <p className="text-xs sm:text-sm opacity-90">
                    {weather?.description || 'Severe weather approaching'} • 
                    Is your roof ready? Get a free inspection today.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Button 
                  asChild 
                  size="sm" 
                  className={`${
                    isSevere 
                      ? 'bg-white text-red-600 hover:bg-white/90' 
                      : 'bg-white text-amber-600 hover:bg-white/90'
                  } font-semibold shadow-lg`}
                >
                  <Link href="/free-inspection">
                    Free Storm Inspection
                    <ArrowRight className="ml-1.5 w-4 h-4" />
                  </Link>
                </Button>
                
                <Button 
                  asChild 
                  size="sm" 
                  variant="ghost"
                  className="text-white hover:bg-white/20 hidden sm:flex"
                >
                  <a href="tel:+18172044432">
                    <Phone className="w-4 h-4 mr-1.5" />
                    Call Now
                  </a>
                </Button>

                <button
                  onClick={handleDismiss}
                  className="p-1.5 rounded-full hover:bg-white/20 text-white transition-colors ml-2"
                  aria-label="Dismiss alert"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Bottom border accent */}
          <div className={`h-1 ${isSevere ? 'bg-red-800' : 'bg-amber-600'}`} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
