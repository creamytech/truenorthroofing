"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

const footerLinks = {
  services: [
    { href: "/services/residential", label: "Residential Roofing" },
    { href: "/services/commercial", label: "Commercial Roofing" },
    { href: "/services/storm-restoration", label: "Storm Restoration" },
    { href: "/services", label: "Emergency Tarping" },
  ],
  company: [
    { href: "/about", label: "About Us" },
    { href: "/gallery", label: "Our Work" },
    { href: "/contact", label: "Contact" },
    { href: "/free-inspection", label: "Free Inspection" },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative">
      {/* Roof Shape SVG Transition */}
      <div className="relative h-24 sm:h-32 md:h-40 bg-transparent overflow-hidden">
        <svg
          className="absolute bottom-0 w-full h-full"
          viewBox="0 0 1440 160"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Main roof shape - peaks in center like a roof */}
          <path
            d="M0,160 L0,120 L720,20 L1440,120 L1440,160 Z"
            fill="#0f172a"
            className="drop-shadow-[0_-4px_20px_rgba(0,0,0,0.3)]"
          />
          {/* Subtle highlight line along roof edge */}
          <path
            d="M0,120 L720,20 L1440,120"
            fill="none"
            stroke="url(#roofGradient)"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="roofGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(217, 91%, 40%)" stopOpacity="0.3" />
              <stop offset="50%" stopColor="hsl(217, 91%, 53%)" stopOpacity="0.8" />
              <stop offset="100%" stopColor="hsl(217, 91%, 40%)" stopOpacity="0.3" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Footer Content */}
      <div className="bg-slate-900 text-white relative overflow-hidden">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950" />
        
        <div className="relative">
          {/* Main Footer */}
          <div className="container mx-auto px-4 lg:px-8 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {/* Brand Column */}
              <div className="lg:col-span-1 text-center md:text-left">
                <Link href="/" className="inline-block mb-6">
                  <Image
                    src="/logoheader.png"
                    alt="True North Roofing & Construction"
                    width={240}
                    height={68}
                    className="h-16 w-auto brightness-0 invert opacity-90 mx-auto md:mx-0"
                  />
                </Link>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  Professional roofing experts of Texas. We build roofing systems, not just roofs. 
                  Licensed, insured, and committed to excellence.
                </p>
                {/* Social Links */}
                <div className="flex gap-3 justify-center md:justify-start">
                  <a
                    href="#"
                    className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-pink-600 flex items-center justify-center transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-blue-700 flex items-center justify-center transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Services Links */}
              <div className="text-center md:text-left">
                <h3 className="font-semibold text-white mb-6">Services</h3>
                <ul className="space-y-3">
                  {footerLinks.services.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-slate-400 hover:text-white transition-colors text-sm"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company Links */}
              <div className="text-center md:text-left">
                <h3 className="font-semibold text-white mb-6">Company</h3>
                <ul className="space-y-3">
                  {footerLinks.company.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-slate-400 hover:text-white transition-colors text-sm"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Info */}
              <div className="text-center md:text-left">
                <h3 className="font-semibold text-white mb-6">Contact Us</h3>
                <ul className="space-y-4">
                  <li>
                    <a
                      href="tel:+18172044432"
                      className="inline-flex items-center gap-3 text-slate-400 hover:text-white transition-colors group"
                    >
                      <Phone className="w-5 h-5 text-blue-500 group-hover:text-blue-400" />
                      <span className="text-sm">(817) 204-4432</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:Office@truenorth-tx.co"
                      className="inline-flex items-center gap-3 text-slate-400 hover:text-white transition-colors group"
                    >
                      <Mail className="w-5 h-5 text-blue-500 group-hover:text-blue-400" />
                      <span className="text-sm">Office@truenorth-tx.co</span>
                    </a>
                  </li>
                  <li>
                    <div className="inline-flex items-center gap-3 text-slate-400">
                      <MapPin className="w-5 h-5 text-blue-500" />
                      <span className="text-sm">Serving the Greater Texas Area</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-slate-800">
            <div className="container mx-auto px-4 lg:px-8 py-6">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
                <p>© {currentYear} True North Roofing & Construction, LLC. All rights reserved.</p>
                <div className="flex gap-6">
                  <Link href="/privacy" className="hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                  <Link href="/terms" className="hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </div>
              </div>
              {/* Powered by Pixel Boba */}
              <div className="mt-4 pt-4 border-t border-slate-800/50 text-center">
                <a
                  href="https://www.pixelboba.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-300 transition-colors group"
                >
                  <span>Powered by</span>
                  <span className="font-medium bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent group-hover:from-pink-300 group-hover:to-purple-300 transition-all">
                    Pixel Boba
                  </span>
                  <span className="text-[10px] opacity-60">✦</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
