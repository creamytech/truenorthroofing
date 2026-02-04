import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { Navbar, Footer } from "@/components/layout";
import { WeatherProvider } from "@/lib/weather-context";
import { RainEffect, StormBanner } from "@/components/weather";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const outfit = Outfit({ 
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "True North Roofing & Construction | Professional Roofing Experts of Texas",
  description: "Storm restoration specialists and professional roofing experts serving Texas. Licensed, insured, and committed to excellence. Get a free inspection today!",
  keywords: [
    "roofing contractor Texas",
    "storm damage repair",
    "roof replacement",
    "insurance claim roofing",
    "residential roofing",
    "commercial roofing",
    "hail damage repair",
    "emergency tarping",
  ],
  openGraph: {
    title: "True North Roofing & Construction",
    description: "Professional roofing experts of Texas. Storm restoration specialists delivering complete roofing systems.",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} dark`}>
      <body className="min-h-screen flex flex-col antialiased bg-slate-900 text-slate-100">
        <WeatherProvider>
          {/* Storm Alert Banner - Shows when severe weather is approaching */}
          <StormBanner />
          
          {/* Rain Effect Overlay - Shows when it's raining in Texas */}
          <RainEffect />
          
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <Toaster position="bottom-right" richColors />
          
          {/* Mobile Sticky CTA */}
          <div className="lg:hidden sticky-cta">
            <div className="flex gap-3">
              <a
                href="tel:+18172044432"
                className="flex-1 flex items-center justify-center gap-2 h-12 rounded-xl bg-slate-800 hover:bg-slate-700 font-medium text-slate-200 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                Call
              </a>
              <a
                href="/free-inspection"
                className="flex-1 flex items-center justify-center gap-2 h-12 rounded-xl gradient-accent font-semibold text-white transition-colors"
              >
                Free Inspection
              </a>
            </div>
          </div>
        </WeatherProvider>
      </body>
    </html>
  );
}
