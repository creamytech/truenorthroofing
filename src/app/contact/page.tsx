import type { Metadata } from "next";
import { ContactHero } from "./sections/ContactHero";
import { ContactForm } from "./sections/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | True North Roofing & Construction",
  description: "Get in touch with True North Roofing & Construction. Call us, email us, or fill out our contact form for a free roofing consultation.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactForm />
    </>
  );
}
