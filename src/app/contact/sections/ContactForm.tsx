"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Reveal, slideInLeft, slideInRight } from "@/lib/motion";
import { toast } from "sonner";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  subject: z.string().min(2, "Please enter a subject"),
  message: z.string().min(10, "Please enter a message (at least 10 characters)"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "(817) 204-4432",
    href: "tel:+18172044432",
  },
  {
    icon: Mail,
    label: "Email",
    value: "Office@truenorth-tx.co",
    href: "mailto:Office@truenorth-tx.co",
  },
  {
    icon: MapPin,
    label: "Service Area",
    value: "Greater Texas Area",
    href: null,
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon-Sat: 7am-7pm",
    href: null,
  },
];

export function ContactForm() {
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    console.log(data);
    toast.success("Message sent!", {
      description: "We'll get back to you within 24 hours.",
    });
    form.reset();
  };

  return (
    <section className="section-padding bg-slate-900">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-4">
            <Reveal variants={slideInLeft}>
              <h2 className="text-2xl font-bold text-white mb-6">
                Contact Information
              </h2>
              
              {contactInfo.map((item) => (
                <Card key={item.label} className="bg-slate-800 border-slate-700 hover:shadow-lg hover:shadow-amber-500/10 transition-shadow">
                  <CardContent className="p-4">
                    {item.href ? (
                      <a href={item.href} className="flex items-center gap-4 group">
                        <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center group-hover:bg-amber-500 transition-colors">
                          <item.icon className="w-5 h-5 text-amber-400 group-hover:text-white transition-colors" />
                        </div>
                        <div>
                          <p className="text-sm text-slate-400">{item.label}</p>
                          <p className="font-medium text-white group-hover:text-amber-400 transition-colors">
                            {item.value}
                          </p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center">
                          <item.icon className="w-5 h-5 text-amber-400" />
                        </div>
                        <div>
                          <p className="text-sm text-slate-400">{item.label}</p>
                          <p className="font-medium text-white">{item.value}</p>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </Reveal>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Reveal variants={slideInRight}>
              <Card className="shadow-lg bg-slate-800 border-slate-700">
                <CardContent className="p-6 lg:p-8">
                  <h3 className="text-xl font-semibold text-white mb-6">
                    Send Us a Message
                  </h3>

                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-slate-300">Full Name</FormLabel>
                              <FormControl>
                                <Input placeholder="John Smith" className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400" {...field} />
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
                              <FormLabel className="text-slate-300">Phone</FormLabel>
                              <FormControl>
                                <Input type="tel" placeholder="(817) 204-4432" className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-slate-300">Email</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="john@example.com" className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-slate-300">Subject</FormLabel>
                            <FormControl>
                              <Input placeholder="How can we help?" className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400" {...field} />
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
                            <FormLabel className="text-slate-300">Message</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Tell us about your roofing needs..."
                                className="resize-none bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                                rows={5}
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
                        {form.formState.isSubmitting ? "Sending..." : "Send Message"}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
