"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/lib/motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { GoogleReviewsBadge } from "@/components/ui/google-reviews-badge";

// Real Google reviews from customers
const testimonials = [
  {
    id: 1,
    name: "Kathryne Porter",
    location: "DFW Area",
    rating: 5,
    text: "This company fixed mistakes of past roofing companies! They were incredibly easy to work with and not pushy. They explained every step of the way and didn't take any short cuts. If I have roofing needs again (thanks Texas hail) I will 100% contact these guys. Look at the cracked beam they found!",
    type: "Storm Restoration",
  },
  {
    id: 2,
    name: "Chase Lodatto",
    location: "DFW Area",
    rating: 5,
    text: "Brent came by and knocked my door like every roofer does, but he set himself and his company apart at the door which really drew my attention. After seeing the quality of work they provided for my home I would definitely recommend True North to anyone looking to get their roof replaced after a hailstorm. These guys are super easy to work with, the roofers are fast and clean.",
    type: "Full Replacement",
  },
  {
    id: 3,
    name: "Bryan Manuel",
    location: "DFW Area",
    rating: 5,
    text: "Great company the process was fast and easy. The way they communicated with me is some of the best I have had informing me about everything that will be done hope to work with them again.",
    type: "Residential",
  },
  {
    id: 4,
    name: "Beyonce Gibson",
    location: "DFW Area",
    rating: 5,
    text: "I had an amazing experience with True North Roofing Company! From start to finish, their team was professional, efficient, and truly cared about delivering high-quality work. Big shoutout to Carlos—he went above and beyond to make everything run smoothly. His attention to detail, friendly attitude, and expertise really stood out.",
    type: "Full Replacement",
  },
  {
    id: 5,
    name: "Joel Beraru",
    location: "DFW Area",
    rating: 5,
    text: "I usually hate dealing with roofers, so I was ready for delays, pressure, and surprise costs. True North Roofing proved me wrong fast. They showed me exactly what was going on with my roof, gave me a clear price, and didn't try to upsell anything. The crew showed up on time, the job was done when they said it would be, and the price never changed.",
    type: "Repair",
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });

  const navigate = (direction: "prev" | "next") => {
    if (direction === "prev") {
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    } else {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }
  };

  return (
    <section ref={containerRef} className="section-padding bg-slate-900 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* Google Reviews Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-6"
        >
          <GoogleReviewsBadge rating={5.0} reviewCount={19} />
        </motion.div>

        <Reveal>
          <SectionHeading
            label="Google Reviews"
            title="What Our Customers Say"
            description="Real reviews from Texas homeowners who trust True North with their roofing projects."
            centered
            className="mb-12"
            titleClassName="text-white"
            descriptionClassName="text-slate-400"
          />
        </Reveal>

        <div className="max-w-4xl mx-auto">
          {/* Testimonial Cards */}
          <div className="relative min-h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
              >
                <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                  <CardContent className="p-8 md:p-12">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-12 h-12 rounded-full gradient-accent flex items-center justify-center flex-shrink-0">
                        <Quote className="w-6 h-6 text-slate-900" />
                      </div>
                      <div>
                        <div className="flex gap-1 mb-2">
                          {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                          ))}
                        </div>
                        <span className="text-sm text-slate-400">
                          {testimonials[currentIndex].type}
                        </span>
                      </div>
                    </div>

                    <blockquote className="text-xl md:text-2xl text-white leading-relaxed mb-6">
                      &ldquo;{testimonials[currentIndex].text}&rdquo;
                    </blockquote>

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center text-white font-bold">
                        {testimonials[currentIndex].name.split(" ").map(n => n[0]).join("")}
                      </div>
                      <div>
                        <p className="font-semibold text-white">
                          {testimonials[currentIndex].name}
                        </p>
                        <p className="text-sm text-slate-400">
                          {testimonials[currentIndex].location}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={() => navigate("prev")}
              className="bg-white/5 border-white/10 text-white hover:bg-white/10 hover:text-white"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex 
                      ? "w-6 bg-amber-500" 
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={() => navigate("next")}
              className="bg-white/5 border-white/10 text-white hover:bg-white/10 hover:text-white"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
