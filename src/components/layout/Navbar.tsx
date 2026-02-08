"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Phone, Menu, ChevronDown, MapPin, Star, Home, Info, Wrench, ImageIcon, Mail, ChevronRight, ArrowRight } from "lucide-react";
import { ScrollProgress } from "@/lib/motion";
import { useWeather } from "@/lib/weather-context";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const navLinks = [
  { href: "/", label: "Home", icon: Home },
  { href: "/about", label: "About", icon: Info },
  { 
    href: "/services", 
    label: "Services",
    icon: Wrench,
    children: [
      { href: "/services/residential", label: "Residential" },
      { href: "/services/commercial", label: "Commercial" },
      { href: "/services/storm-restoration", label: "Storm Restoration" },
    ]
  },
  { href: "/gallery", label: "Gallery", icon: ImageIcon },
  { href: "/contact", label: "Contact", icon: Mail },
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
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
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
      <div className="hidden lg:block bg-slate-100 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-9 text-xs">
            {/* Left - Location & Weather */}
            <div className="flex items-center gap-4 text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3 h-3" />
                <span>Mansfield, TX</span>
              </div>
              {weather && (
                <div className="flex items-center gap-1.5 pl-4 border-l border-slate-300 dark:border-slate-700">
                  <WeatherIcon condition={weather.condition} />
                  <span>{weather.temp}°F</span>
                  <span className="text-slate-500 dark:text-slate-400 dark:text-slate-500">•</span>
                  <span className="text-slate-500 dark:text-slate-400 dark:text-slate-500">{weather.description}</span>
                </div>
              )}
            </div>

            {/* Right - Contact & Reviews */}
            <div className="flex items-center gap-4 text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-1 text-blue-400">
                <Star className="w-3 h-3 fill-current" />
                <span className="text-slate-900 dark:text-white font-medium">5.0</span>
                <span className="text-slate-500 dark:text-slate-400 dark:text-slate-500">• 19 Reviews</span>
              </div>
              <a 
                href="tel:+18172044432" 
                className="flex items-center gap-1.5 hover:text-slate-900 dark:hover:text-white transition-colors"
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
            ? "py-2 shadow-lg bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200/50 dark:border-slate-800/50" 
            : "py-3 lg:py-2 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm lg:bg-white lg:dark:bg-slate-900"
        }`}
      >
        <nav className="container mx-auto px-4 lg:px-8">
          {/* Mobile Layout: Phone - Logo (centered) - Menu */}
          <div className="flex lg:hidden items-center justify-between relative">
            <a
              href="tel:+18172044432"
              className="p-2.5 rounded-xl bg-slate-200/80 dark:bg-slate-800/80 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors z-10"
            >
              <Phone className="w-5 h-5 text-blue-400" />
            </a>
            
            <Link 
              href="/" 
              className="absolute left-1/2 -translate-x-1/2"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <Image
                src="/logolightmode.png"
                alt="True North Roofing & Construction"
                width={180}
                height={50}
                className="h-10 w-auto dark:brightness-0 dark:invert"
                priority
              />
            </Link>

            <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
              <SheetTrigger asChild>
                <button className="p-2.5 rounded-xl bg-slate-200/80 dark:bg-slate-800/80 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors z-10">
                  <Menu className="w-5 h-5 text-slate-700 dark:text-slate-200" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-[400px] p-0 border-slate-200 dark:border-slate-800 overflow-hidden bg-white dark:bg-slate-900">
                <div className="flex flex-col h-full">
                  {/* Header */}
                  <div className="px-6 pt-6 pb-4 text-center border-b border-slate-100 dark:border-slate-800">
                    <Image
                      src="/logolightmode.png"
                      alt="True North Roofing & Construction"
                      width={200}
                      height={56}
                      className="h-11 w-auto dark:brightness-0 dark:invert mx-auto"
                    />
                    {weather && (
                      <div className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-xs text-slate-500 dark:text-slate-400">
                        <WeatherIcon condition={weather.condition} />
                        <span>{weather.temp}°F in {weather.city}</span>
                      </div>
                    )}
                  </div>

                  {/* Navigation — centered */}
                  <div className="flex-1 flex flex-col justify-center px-6 py-6">
                    <nav className="space-y-1">
                      {navLinks.map((link, index) => (
                        <motion.div
                          key={link.href}
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.04, ease: "easeOut" }}
                          className="text-center"
                        >
                          {link.children ? (
                            <button
                              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                              className="inline-flex items-center gap-3 px-4 py-3 rounded-xl text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all group"
                            >
                              <div className="w-9 h-9 rounded-lg bg-blue-500/10 dark:bg-blue-500/15 flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                                <link.icon className="w-[18px] h-[18px] text-blue-500 dark:text-blue-400 group-hover:text-white transition-colors" />
                              </div>
                              <span className="text-lg font-bold tracking-wide">{link.label}</span>
                              <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                            </button>
                          ) : (
                            <Link
                              href={link.href}
                              onClick={() => setIsMobileOpen(false)}
                              className="inline-flex items-center gap-3 px-4 py-3 rounded-xl text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all group"
                            >
                              <div className="w-9 h-9 rounded-lg bg-blue-500/10 dark:bg-blue-500/15 flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                                <link.icon className="w-[18px] h-[18px] text-blue-500 dark:text-blue-400 group-hover:text-white transition-colors" />
                              </div>
                              <span className="text-lg font-bold tracking-wide">{link.label}</span>
                            </Link>
                          )}
                          <AnimatePresence>
                            {link.children && mobileServicesOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2, ease: "easeInOut" }}
                                className="overflow-hidden"
                              >
                                <div className="flex flex-col items-center gap-0.5 mb-1 pt-1">
                                  {link.children.map((child) => (
                                    <Link
                                      key={child.href}
                                      href={child.href}
                                      onClick={() => setIsMobileOpen(false)}
                                      className="py-1.5 px-4 rounded-lg text-[15px] text-slate-400 dark:text-slate-500 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                                    >
                                      {child.label}
                                    </Link>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      ))}
                    </nav>
                  </div>

                  {/* Trust + Footer */}
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 }}
                    className="px-5 pb-5 space-y-3"
                  >
                    {/* Trust strip */}
                    <div className="flex items-center justify-center gap-3 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50">
                      <div className="flex -space-x-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">5.0 Rating</span>
                      <span className="text-slate-300 dark:text-slate-600">|</span>
                      <span className="text-xs text-slate-500 dark:text-slate-400">Licensed & Insured</span>
                    </div>

                    {/* Phone + Theme toggle */}
                    <div className="flex items-center gap-2.5">
                      <a
                        href="tel:+18172044432"
                        className="flex items-center justify-center gap-2.5 flex-1 py-3 px-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700/50 text-slate-700 dark:text-slate-200 hover:border-blue-300 dark:hover:border-blue-500/30 transition-colors"
                      >
                        <Phone className="w-4 h-4 text-blue-500" />
                        <span className="font-semibold text-sm">(817) 204-4432</span>
                      </a>
                      <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700/50">
                        <ThemeToggle />
                      </div>
                    </div>

                    {/* CTA */}
                    <Button asChild className="w-full btn-shine gradient-accent text-white font-bold h-12 border-0 text-base rounded-xl shadow-lg shadow-amber-500/20">
                      <Link href="/free-inspection" onClick={() => setIsMobileOpen(false)}>
                        Get Free Inspection
                      </Link>
                    </Button>
                  </motion.div>

                  {/* Bottom accent */}
                  <div className="h-1 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600" />
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Desktop Layout - Cleaner */}
          <div className="hidden lg:flex items-center justify-between">
            {/* Logo */}
            <Link 
              href="/" 
              className="flex items-center"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <Image
                src="/logolightmode.png"
                alt="True North Roofing & Construction"
                width={240}
                height={70}
                className="h-14 w-auto dark:brightness-0 dark:invert"
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
                    className="px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-white/10 transition-colors flex items-center gap-1"
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
                        className="absolute top-full left-0 mt-1 w-48 py-2 bg-white dark:bg-slate-900/95 backdrop-blur-xl border border-slate-200 dark:border-slate-700 rounded-xl shadow-premium"
                      >
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-2 text-sm text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
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

            {/* CTA & Theme Toggle */}
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <Button asChild className="btn-shine gradient-accent text-white font-semibold shadow-md hover:shadow-lg transition-shadow border-0">
                <Link href="/free-inspection">Get Free Inspection</Link>
              </Button>
            </div>
          </div>
        </nav>
      </motion.header>
    </>
  );
}
