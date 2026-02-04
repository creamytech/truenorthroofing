"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Phone, Menu, ChevronDown, MapPin, Star } from "lucide-react";
import { ScrollProgress } from "@/lib/motion";
import { useWeather } from "@/lib/weather-context";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { 
    href: "/services", 
    label: "Services",
    children: [
      { href: "/services/residential", label: "Residential" },
      { href: "/services/commercial", label: "Commercial" },
      { href: "/services/storm-restoration", label: "Storm Restoration" },
    ]
  },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

// Simple weather icon component
function WeatherIcon({ condition }: { condition: string }) {
  const iconMap: Record<string, string> = {
    clear: "☀️",
    clouds: "☁️",
    rain: "🌧️",
    storm: "⛈️",
    thunderstorm: "⛈️",
    snow: "❄️",
    drizzle: "🌦️",
  };
  return <span className="text-sm">{iconMap[condition] || "🌤️"}</span>;
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { weather } = useWeather();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <ScrollProgress />
      
      {/* Top Info Bar - Desktop Only */}
      <div className="hidden lg:block bg-slate-950 border-b border-slate-800">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-9 text-xs">
            {/* Left - Location & Weather */}
            <div className="flex items-center gap-4 text-slate-400">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3 h-3" />
                <span>Mansfield, TX</span>
              </div>
              {weather && (
                <div className="flex items-center gap-1.5 pl-4 border-l border-slate-700">
                  <WeatherIcon condition={weather.condition} />
                  <span>{weather.temp}°F</span>
                  <span className="text-slate-500">•</span>
                  <span className="text-slate-500">{weather.description}</span>
                </div>
              )}
            </div>

            {/* Right - Contact & Reviews */}
            <div className="flex items-center gap-4 text-slate-400">
              <div className="flex items-center gap-1 text-amber-400">
                <Star className="w-3 h-3 fill-current" />
                <span className="text-white font-medium">5.0</span>
                <span className="text-slate-500">• 19 Reviews</span>
              </div>
              <a 
                href="tel:+18172044432" 
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Phone className="w-3 h-3" />
                <span>(817) 204-4432</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed lg:sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? "py-2 glass-dark shadow-lg" 
            : "py-3 lg:py-2 bg-slate-900/95 backdrop-blur-sm lg:bg-slate-900"
        }`}
      >
        <nav className="container mx-auto px-4 lg:px-8">
          {/* Mobile Layout: Phone - Logo (centered) - Menu */}
          <div className="flex lg:hidden items-center justify-between relative">
            <a
              href="tel:+18172044432"
              className="p-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 transition-colors z-10"
            >
              <Phone className="w-5 h-5 text-cyan-400" />
            </a>
            
            <Link href="/" className="absolute left-1/2 -translate-x-1/2">
              <Image
                src="/logoheader.png"
                alt="True North Roofing & Construction"
                width={180}
                height={50}
                className="h-10 w-auto brightness-0 invert"
                priority
              />
            </Link>

            <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
              <SheetTrigger asChild>
                <button className="p-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 transition-colors z-10">
                  <Menu className="w-5 h-5 text-slate-200" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-[400px] p-0 bg-slate-900 border-slate-800">
                <div className="flex flex-col h-full">
                  {/* Mobile Menu Header - Centered */}
                  <div className="p-4 border-b border-slate-800 text-center">
                    <Image
                      src="/logoheader.png"
                      alt="True North Roofing & Construction"
                      width={180}
                      height={50}
                      className="h-10 w-auto brightness-0 invert mx-auto"
                    />
                    {/* Weather in mobile menu */}
                    {weather && (
                      <div className="mt-2 flex items-center justify-center gap-2 text-xs text-slate-400">
                        <WeatherIcon condition={weather.condition} />
                        <span>{weather.temp}°F in {weather.city}</span>
                      </div>
                    )}
                  </div>

                  {/* Mobile Navigation Links - Centered & Compact */}
                  <div className="flex-1 py-4 px-6 flex flex-col justify-center">
                    <div className="space-y-1">
                      {navLinks.map((link, index) => (
                        <motion.div
                          key={link.href}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.03 }}
                          className="text-center"
                        >
                          <Link
                            href={link.href}
                            onClick={() => setIsMobileOpen(false)}
                            className="block py-2.5 text-xl font-semibold text-slate-200 hover:text-cyan-400 transition-colors"
                          >
                            {link.label}
                          </Link>
                          {link.children && (
                            <div className="space-y-0.5 mb-1">
                              {link.children.map((child) => (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  onClick={() => setIsMobileOpen(false)}
                                  className="block py-1.5 text-sm text-slate-400 hover:text-cyan-400 transition-colors"
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </div>
                          )}
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Mobile Menu Footer - Compact */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="p-4 border-t border-slate-800 space-y-3"
                  >
                    <a
                      href="tel:+18172044432"
                      className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-slate-800 text-slate-200 hover:bg-slate-700 transition-colors text-sm"
                    >
                      <Phone className="w-4 h-4" />
                      <span className="font-medium">(817) 204-4432</span>
                    </a>
                    <Button asChild className="w-full btn-shine gradient-accent text-white font-semibold h-10 border-0 text-sm">
                      <Link href="/free-inspection" onClick={() => setIsMobileOpen(false)}>
                        Free Inspection
                      </Link>
                    </Button>
                  </motion.div>

                  {/* Bottom Decorative Element */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500/0 via-cyan-500 to-cyan-500/0" />
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Desktop Layout - Cleaner */}
          <div className="hidden lg:flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/logoheader.png"
                alt="True North Roofing & Construction"
                width={240}
                height={70}
                className="h-14 w-auto brightness-0 invert"
                priority
              />
            </Link>

            {/* Desktop Navigation - Centered */}
            <div className="flex items-center gap-1">
              {navLinks.map((link) => (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={link.href}
                    className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white rounded-lg hover:bg-white/10 transition-colors flex items-center gap-1"
                  >
                    {link.label}
                    {link.children && <ChevronDown className="w-4 h-4" />}
                  </Link>

                  {/* Dropdown */}
                  <AnimatePresence>
                    {link.children && activeDropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-1 w-48 py-2 glass-dark rounded-xl shadow-premium"
                      >
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* CTA - Just the button */}
            <Button asChild className="btn-shine gradient-accent text-white font-semibold shadow-md hover:shadow-lg transition-shadow border-0">
              <Link href="/free-inspection">Get Free Inspection</Link>
            </Button>
          </div>
        </nav>
      </motion.header>
    </>
  );
}
