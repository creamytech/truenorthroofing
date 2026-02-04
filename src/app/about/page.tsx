import type { Metadata } from "next";
import { 
  Hero as AboutHero,
  ValuesGrid,
  TeamSection,
  ProcessTimeline,
  CTABanner 
} from "./sections";

export const metadata: Metadata = {
  title: "About Us | True North Roofing & Construction",
  description: "Built by people who understand roofing systems. Learn about True North's commitment to integrity, excellence, and customer satisfaction.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <ValuesGrid />
      <ProcessTimeline />
      <TeamSection />
      <CTABanner />
    </>
  );
}
