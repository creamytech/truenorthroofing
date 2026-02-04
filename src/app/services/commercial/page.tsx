import { Metadata } from "next";
import { CommercialHero } from "./sections/CommercialHero";
import { CommercialServices } from "./sections/CommercialServices";
import { CommercialCTA } from "./sections/CommercialCTA";

export const metadata: Metadata = {
  title: "Commercial Roofing | True North Roofing & Construction",
  description: "Professional commercial roofing services in Texas. Flat roofs, TPO, EPDM, metal systems, and preventative maintenance programs.",
};

export default function CommercialPage() {
  return (
    <main>
      <CommercialHero />
      <CommercialServices />
      <CommercialCTA />
    </main>
  );
}
