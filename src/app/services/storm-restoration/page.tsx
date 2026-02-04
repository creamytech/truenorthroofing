import { Metadata } from "next";
import { StormHero } from "./sections/StormHero";
import { StormServices } from "./sections/StormServices";
import { StormProcess } from "./sections/StormProcess";
import { StormCTA } from "./sections/StormCTA";

export const metadata: Metadata = {
  title: "Storm Damage Restoration | True North Roofing & Construction",
  description: "Texas storm damage experts. Hail, wind, and severe weather roof restoration. Insurance claim assistance and emergency tarping available 24/7.",
};

export default function StormRestorationPage() {
  return (
    <main>
      <StormHero />
      <StormServices />
      <StormProcess />
      <StormCTA />
    </main>
  );
}
