"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Reveal, slideInLeft, slideInRight } from "@/lib/motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { toast } from "sonner";
import { Phone, Mail, Clock, CheckCircle2 } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  message: z.string().optional(),
  preferredContact: z.enum(["phone", "email", "either"]),
});

type ContactFormData = z.infer<typeof contactSchema>;

const benefits = [
  { icon: CheckCircle2, text: "Same-day response" },
  { icon: CheckCircle2, text: "Detailed inspection report" },
  { icon: CheckCircle2, text: "Insurance claim support" },
  { icon: CheckCircle2, text: "No obligation quote" },
];

export function CTASection() {
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      preferredContact: "either",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    // Simulate form submission
    console.log(data);
    toast.success("Request submitted!", {
      description: "We'll be in touch within 24 hours.",
    });
    form.reset();
  };

  return (
    <section className="section-padding gradient-hero relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
          {/* Left Content */}
          <Reveal variants={slideInLeft}>
            <div className="text-white">
              <span className="inline-block text-sm font-semibold tracking-wider uppercase text-cyan-400 mb-4">
                Get Started
              </span>
              <h2 className="text-white mb-6">
                Get In Touch with True North Today!
              </h2>
              <p className="text-xl text-white/70 mb-8 leading-relaxed">
                Schedule your free inspection and discover why Texas homeowners 
                trust True North for their roofing needs.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {benefits.map((benefit) => (
                  <div key={benefit.text} className="flex items-center gap-3">
                    <benefit.icon className="w-5 h-5 text-cyan-400" />
                    <span className="text-white/80">{benefit.text}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+18172044432"
                  className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <Phone className="w-5 h-5 text-cyan-400" />
                  <div>
                    <p className="text-xs text-white/60">Call Us</p>
                    <p className="font-semibold text-white">(817) 204-4432</p>
                  </div>
                </a>
                <a
                  href="mailto:Office@truenorth-tx.co"
                  className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <Mail className="w-5 h-5 text-cyan-400" />
                  <div>
                    <p className="text-xs text-white/60">Email Us</p>
                    <p className="font-semibold text-white">Office@truenorth-tx.co</p>
                  </div>
                </a>
              </div>
            </div>
          </Reveal>

          {/* Right - Form */}
          <Reveal variants={slideInRight}>
            <Card className="shadow-2xl border-0 bg-slate-800">
              <CardContent className="p-6 lg:p-8">
                <h3 className="text-xl font-semibold text-white mb-6">
                  Schedule Your Free Inspection
                </h3>

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Smith" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid sm:grid-cols-2 gap-5">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="john@example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone</FormLabel>
                            <FormControl>
                              <Input type="tel" placeholder="(817) 204-4432" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="preferredContact"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Preferred Contact Method</FormLabel>
                          <FormControl>
                            <div className="flex gap-2">
                              {["phone", "email", "either"].map((option) => (
                                <button
                                  key={option}
                                  type="button"
                                  onClick={() => field.onChange(option)}
                                  className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
                                    field.value === option
                                      ? "bg-cyan-500 text-white"
                                      : "bg-slate-700 text-slate-300 hover:bg-slate-600"
                                  }`}
                                >
                                  {option.charAt(0).toUpperCase() + option.slice(1)}
                                </button>
                              ))}
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message (Optional)</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Tell us about your roofing needs..."
                              className="resize-none"
                              rows={3}
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit" 
                      className="w-full h-12 btn-shine gradient-accent text-white font-semibold text-base border-0"
                      disabled={form.formState.isSubmitting}
                    >
                      {form.formState.isSubmitting ? "Submitting..." : "Schedule Free Inspection"}
                    </Button>

                    <p className="text-xs text-slate-400 text-center">
                      By submitting, you agree to receive calls or texts about your inquiry. 
                      We respect your privacy.
                    </p>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
