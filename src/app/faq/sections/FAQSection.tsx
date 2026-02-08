"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqCategories = [
  {
    title: "General Questions",
    faqs: [
      {
        question: "What areas do you serve?",
        answer: "We proudly serve the entire Dallas-Fort Worth metroplex and surrounding areas in Texas. Our service area includes Dallas, Fort Worth, Arlington, Plano, Frisco, McKinney, Denton, and many more communities throughout North Texas.",
      },
      {
        question: "Are you licensed and insured?",
        answer: "Yes! True North Roofing & Construction is fully licensed and insured. We carry comprehensive general liability insurance and workers' compensation coverage to protect you and your property. We're happy to provide proof of insurance upon request.",
      },
      {
        question: "How long have you been in business?",
        answer: "True North Roofing & Construction has been serving Texas homeowners and businesses with quality roofing solutions. Our team brings decades of combined experience in the roofing industry.",
      },
      {
        question: "Do you offer free estimates?",
        answer: "Absolutely! We provide completely free, no-obligation roof inspections and estimates. Our experts will thoroughly assess your roof and provide a detailed written estimate with no pressure to commit.",
      },
    ],
  },
  {
    title: "Roofing Services",
    faqs: [
      {
        question: "What types of roofing do you install?",
        answer: "We specialize in all major roofing types including asphalt shingles, metal roofing, tile roofing, flat roofing systems (TPO, EPDM, modified bitumen), and cedar shake. We work with leading manufacturers to provide quality materials with excellent warranties.",
      },
      {
        question: "How long does a typical roof replacement take?",
        answer: "Most residential roof replacements are completed in 1-3 days, depending on the size and complexity of the roof. We work efficiently while maintaining the highest quality standards. Commercial projects may take longer based on scope.",
      },
      {
        question: "Do you offer roof repairs or only full replacements?",
        answer: "We offer both! Our team is skilled in all types of roof repairs, from minor leak fixes to major damage restoration. After our inspection, we'll recommend the most cost-effective solution—whether that's a targeted repair or a full replacement.",
      },
      {
        question: "What warranties do you offer?",
        answer: "We offer comprehensive warranties including our workmanship warranty that covers our labor and installation. Additionally, the materials we use come with manufacturer warranties ranging from 25 years to lifetime coverage, depending on the product selected.",
      },
    ],
  },
  {
    title: "Storm Damage & Insurance",
    faqs: [
      {
        question: "How do I know if my roof has storm damage?",
        answer: "Signs of storm damage include missing or damaged shingles, dents or dings on metal components, granule loss (dark spots on shingles), cracked or broken tiles, and visible leaks or water stains inside. After any major storm, we recommend scheduling a free inspection.",
      },
      {
        question: "Do you work with insurance companies?",
        answer: "Yes! We have extensive experience working with all major insurance companies. We assist with the entire claims process—from initial documentation to meeting with adjusters—to ensure you receive fair compensation for storm damage.",
      },
      {
        question: "Will my insurance cover my roof replacement?",
        answer: "If your roof was damaged by a covered peril (hail, wind, fallen trees, etc.), your homeowner's insurance typically covers the repair or replacement minus your deductible. We'll help document the damage and work with your adjuster to maximize your claim.",
      },
      {
        question: "What if the insurance estimate seems too low?",
        answer: "Insurance adjusters sometimes miss damage or underestimate repair costs. We can request a re-inspection and meet with your adjuster on-site to point out all damage. Many of our customers have successfully negotiated higher settlements with our help.",
      },
      {
        question: "Do you provide emergency tarping services?",
        answer: "Yes! If your roof is damaged and vulnerable to further water intrusion, we offer 24/7 emergency tarping services. This temporary solution protects your home while we work on a permanent repair plan.",
      },
    ],
  },
  {
    title: "Process & Timeline",
    faqs: [
      {
        question: "What happens during a roof inspection?",
        answer: "Our certified inspectors examine your entire roofing system including shingles, flashing, vents, gutters, and the attic space if accessible. We document everything with photos and provide a detailed report of our findings along with recommendations.",
      },
      {
        question: "How far in advance should I schedule my roof replacement?",
        answer: "We recommend scheduling 1-2 weeks in advance during normal conditions. During peak storm season, demand is higher, so earlier scheduling ensures timely service. Emergency repairs are prioritized and handled as quickly as possible.",
      },
      {
        question: "Do I need to be home during the roofing work?",
        answer: "You don't need to be home for the actual roofing work. We just ask that vehicles are moved from the driveway and that we have access to the property. We'll communicate before, during, and after the project to keep you informed.",
      },
      {
        question: "How do you handle cleanup after the job?",
        answer: "We take cleanup seriously. Our crews use tarps to protect your landscaping, and we conduct thorough cleanup including magnetic sweeps to collect all nails and debris. Your property will look as good as—or better than—before we arrived.",
      },
    ],
  },
  {
    title: "Pricing & Payment",
    faqs: [
      {
        question: "How much does a new roof cost?",
        answer: "Roof costs vary based on size, pitch, material choice, and complexity. A typical residential asphalt shingle roof ranges from $8,000 to $25,000+. Premium materials like metal or tile cost more. We provide detailed, transparent estimates with no hidden fees.",
      },
      {
        question: "Do you offer financing options?",
        answer: "Yes! We partner with leading financing companies to offer flexible payment options. Many customers qualify for 0% interest financing for qualified buyers. Ask us about current financing promotions during your estimate.",
      },
      {
        question: "When is payment due?",
        answer: "For insurance claims, payment is typically coordinated with your insurance payments. For non-insurance work, a deposit may be required before material ordering, with the balance due upon completion. We accept all major credit cards, checks, and financing.",
      },
      {
        question: "Do you price match competitors?",
        answer: "We focus on providing the best value rather than the lowest price. Our pricing reflects quality materials, expert installation, comprehensive warranties, and exceptional service. That said, we're always competitive and happy to discuss our pricing.",
      },
    ],
  },
];

export function FAQSection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12 last:mb-0">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                <span className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center text-lg">
                  {categoryIndex + 1}
                </span>
                {category.title}
              </h2>
              <Accordion type="single" collapsible className="space-y-3">
                {category.faqs.map((faq, faqIndex) => (
                  <AccordionItem
                    key={faqIndex}
                    value={`${categoryIndex}-${faqIndex}`}
                    className="border border-slate-200 dark:border-slate-700 rounded-xl px-6 bg-white dark:bg-slate-800 data-[state=open]:bg-slate-50 dark:data-[state=open]:bg-slate-800"
                  >
                    <AccordionTrigger className="text-left text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 py-5">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-500 dark:text-slate-400 pb-5 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}

          {/* CTA after FAQ */}
          <div className="mt-16 text-center p-8 rounded-2xl bg-gradient-to-r from-blue-600/20 to-blue-500/10 border border-blue-500/30">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
              Still have questions?
            </h3>
            <p className="text-slate-500 dark:text-slate-400 mb-6">
              Our team is here to help. Contact us for personalized answers.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:+18172044432"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-slate-900 font-semibold hover:bg-slate-100 transition-colors"
              >
                Call (817) 204-4432
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
