import {
  Hero,
  TrustBadges,
  StatsSection,
  ServicesBento,
  ProcessTimeline,
  BeforeAfterShowcase,
  ServiceAreaMap,
  Testimonials,
  SpotlightCTA,
} from "@/components/sections";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBadges />
      <StatsSection />
      <ServicesBento />
      <ProcessTimeline />
      <BeforeAfterShowcase />
      <ServiceAreaMap />
      <Testimonials />
      <SpotlightCTA />
    </>
  );
}
