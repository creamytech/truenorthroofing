import type { Metadata } from "next";
import { ServicesHero } from "./sections/ServicesHero";
import { ServicesTabs } from "./sections/ServicesTabs";
import { RoofSystemExplainer } from "./sections/RoofSystemExplainer";
import { CTASection } from "@/components/sections";

export const metadata: Metadata = {
  title: "Roofing Services | True North Roofing & Construction",
  description: "Residential, commercial, and storm restoration roofing services in Texas. Full replacements, repairs, emergency tarping, and insurance claim support.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesTabs />
      <RoofSystemExplainer />
      <CTASection />
    </>
  );
}
