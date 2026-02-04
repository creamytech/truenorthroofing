import type { Metadata } from "next";
import { GalleryHero } from "./sections/GalleryHero";
import { GalleryGrid } from "./sections/GalleryGrid";
import { CTASection } from "@/components/sections";

export const metadata: Metadata = {
  title: "Project Gallery | True North Roofing & Construction",
  description: "View our portfolio of completed roofing projects across Texas. From residential replacements to commercial installations and storm restoration.",
};

export default function GalleryPage() {
  return (
    <>
      <GalleryHero />
      <GalleryGrid />
      <CTASection />
    </>
  );
}
