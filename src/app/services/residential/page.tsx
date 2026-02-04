import { Metadata } from "next";
import { ResidentialHero } from "./sections/ResidentialHero";
import { ResidentialServices } from "./sections/ResidentialServices";
import { ResidentialCTA } from "./sections/ResidentialCTA";

export const metadata: Metadata = {
  title: "Residential Roofing | True North Roofing & Construction",
  description: "Expert residential roofing services in Texas. Complete replacements, repairs, emergency tarping, and ventilation systems. Free inspections available.",
};

export default function ResidentialPage() {
  return (
    <main>
      <ResidentialHero />
      <ResidentialServices />
      <ResidentialCTA />
    </main>
  );
}
