import type { Metadata } from "next";
import { InspectionHero } from "./sections/InspectionHero";
import { InspectionForm } from "./sections/InspectionForm";
import { WhatToExpect } from "./sections/WhatToExpect";
import { InspectionFAQ } from "./sections/InspectionFAQ";

export const metadata: Metadata = {
  title: "Free Roof Inspection | True North Roofing & Construction",
  description: "Schedule your free, no-obligation roof inspection today. Get a detailed report, insurance documentation, and expert recommendations.",
};

export default function FreeInspectionPage() {
  return (
    <>
      <InspectionHero />
      <InspectionForm />
      <WhatToExpect />
      <InspectionFAQ />
    </>
  );
}
