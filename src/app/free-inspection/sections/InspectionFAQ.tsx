"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/lib/motion";
import { SectionHeading } from "@/components/ui/section-heading";

const faqs = [
  {
    question: "Is the inspection really free?",
    answer: "Yes, 100% free with no strings attached. We believe in earning your trust through quality work, not high-pressure sales tactics. You'll receive a detailed report whether or not you decide to work with us.",
  },
  {
    question: "How long does an inspection take?",
    answer: "A thorough roof inspection typically takes 30-45 minutes, depending on the size and complexity of your roof. We'll walk the entire roof surface, check all penetrations, and document everything.",
  },
  {
    question: "Do I need to be home during the inspection?",
    answer: "It's helpful but not required. If you can't be home, we can perform the inspection and send you the report via email. However, we recommend being present for the walkthrough explanation.",
  },
  {
    question: "Will you help with my insurance claim?",
    answer: "Absolutely. If we find storm damage, we'll provide detailed documentation specifically formatted for insurance claims. We can also meet with your adjuster to ensure nothing is missed.",
  },
  {
    question: "What if you don't find any problems?",
    answer: "That's great news! We'll document the good condition of your roof, which can be valuable for insurance purposes or when selling your home. We never push unnecessary repairs.",
  },
  {
    question: "How soon can you come out?",
    answer: "We offer same-day and next-day appointments in most areas. Emergency situations, like active leaks, are prioritized and addressed as quickly as possible.",
  },
  {
    question: "What areas do you serve?",
    answer: "We serve the greater Texas area including Dallas, Fort Worth, Austin, Houston, San Antonio, and surrounding communities. Contact us to confirm we cover your location.",
  },
];

export function InspectionFAQ() {
  return (
    <section className="section-padding bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 lg:px-8">
        <Reveal>
          <SectionHeading
            label="FAQ"
            title="Common Questions"
            description="Everything you need to know about our free roof inspection."
            centered
            className="mb-12"
          />
        </Reveal>

        <div className="max-w-3xl mx-auto">
          <Reveal>
            <Card className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
              <CardContent className="p-0">
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`faq-${index}`}
                      className="border-b border-slate-200 dark:border-slate-700 last:border-0"
                    >
                      <AccordionTrigger className="px-6 py-5 text-left hover:bg-slate-100/80 dark:hover:bg-slate-700/50 transition-colors">
                        <span className="font-medium text-white">
                          {faq.question}
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-5">
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                          {faq.answer}
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
