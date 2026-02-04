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
import { Reveal, slideInRight } from "@/lib/motion";
import { toast } from "sonner";
import { Check } from "lucide-react";

const inspectionSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  address: z.string().min(5, "Please enter your property address"),
  preferredContact: z.enum(["phone", "email", "either"]),
  notes: z.string().optional(),
});

type InspectionFormData = z.infer<typeof inspectionSchema>;

const checklistItems = [
  "Complete roof surface inspection",
  "Flashing & penetration check",
  "Ventilation assessment",
  "Gutter & drainage review",
  "Photo documentation",
  "Written condition report",
  "Insurance scope (if applicable)",
  "Repair/replacement recommendations",
];

export function InspectionForm() {
  const form = useForm<InspectionFormData>({
    resolver: zodResolver(inspectionSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      preferredContact: "either",
      notes: "",
    },
  });

  const onSubmit = async (data: InspectionFormData) => {
    console.log(data);
    toast.success("Inspection requested!", {
      description: "We'll contact you within 24 hours to confirm your appointment.",
    });
    form.reset();
  };

  return (
    <section className="section-padding bg-slate-900">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* What We Inspect */}
          <Reveal>
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">
                What We Inspect
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {checklistItems.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-green-400" />
                    </div>
                    <span className="text-slate-300">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 rounded-xl bg-amber-950/50 border border-amber-900/50">
                <h3 className="font-semibold text-white mb-2">
                  Storm Damage?
                </h3>
                <p className="text-slate-300 text-sm">
                  If you suspect storm damage, we&apos;ll document everything your insurance 
                  company needs to process your claim accurately. Our detailed reports 
                  have helped hundreds of Texas homeowners get approved.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal variants={slideInRight}>
            <Card className="shadow-xl bg-slate-800 border-slate-700">
              <CardContent className="p-6 lg:p-8">
                <h3 className="text-xl font-semibold text-white mb-6">
                  Schedule Your Inspection
                </h3>

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
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

                    <div className="grid sm:grid-cols-2 gap-5">
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
                      name="address"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-300">Property Address</FormLabel>
                          <FormControl>
                            <Input placeholder="123 Main St, Dallas, TX 75001" className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="preferredContact"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-300">Preferred Contact Method</FormLabel>
                          <FormControl>
                            <div className="flex gap-2">
                              {["phone", "email", "either"].map((option) => (
                                <button
                                  key={option}
                                  type="button"
                                  onClick={() => field.onChange(option)}
                                  className={`flex-1 py-2.5 px-4 rounded-lg text-sm font-medium transition-colors ${
                                    field.value === option
                                      ? "bg-amber-500 text-white"
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
                      name="notes"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-300">Additional Notes (Optional)</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Any specific concerns or best times to reach you?"
                              className="resize-none bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
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
                      {form.formState.isSubmitting ? "Submitting..." : "Request Free Inspection"}
                    </Button>

                    <p className="text-xs text-slate-500 text-center">
                      By submitting, you agree to receive calls or texts about your inspection. 
                      We respect your privacy and will never share your information.
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
