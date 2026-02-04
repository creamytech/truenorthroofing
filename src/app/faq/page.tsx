import type { Metadata } from "next";
import { FAQSection } from "./sections/FAQSection";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | True North Roofing & Construction",
  description: "Find answers to common questions about roofing services, storm damage repair, insurance claims, and more from True North Roofing & Construction.",
};

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-white mb-4">Frequently Asked Questions</h1>
            <p className="text-xl text-slate-400">
              Get answers to the most common questions about our roofing services, 
              insurance claims, and storm damage restoration.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <FAQSection />
    </div>
  );
}
