"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Reveal, StaggerGrid, StaggerItem } from "@/lib/motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

// Real projects from the gallery
const projects = [
  { id: 1, image: "/Gallery/down-net_http20250815-207-4fbre1.jpg" },
  { id: 2, image: "/Gallery/down-net_http20250906-121-pkrga2.jpg" },
  { id: 3, image: "/Gallery/down-net_http20251106-287-kkdazw.jpg" },
  { id: 4, image: "/Gallery/down-net_http20251108-30962-ptp5zy.jpg" },
  { id: 5, image: "/Gallery/down-net_http20250816-157-mty283.jpg" },
  { id: 6, image: "/Gallery/down-net_http20251222-32169-gwbxmh.jpg" },
];

export function GalleryTeaser() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setCurrentIndex(projects.findIndex(p => p.id === project.id));
  };

  const navigateLightbox = (direction: "prev" | "next") => {
    const newIndex = direction === "prev" 
      ? (currentIndex - 1 + projects.length) % projects.length
      : (currentIndex + 1) % projects.length;
    setCurrentIndex(newIndex);
    setSelectedProject(projects[newIndex]);
  };

  return (
    <section className="section-padding">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <Reveal>
            <SectionHeading
              label="Our Work"
              title="Recent Projects"
              description="See the quality and craftsmanship we bring to every roof."
            />
          </Reveal>
          <Reveal>
            <Button asChild variant="outline" className="self-start md:self-auto border-slate-600 text-slate-200 hover:bg-slate-800 hover:text-white">
              <Link href="/gallery">
                View All Projects
              </Link>
            </Button>
          </Reveal>
        </div>

        {/* Masonry Grid */}
        <StaggerGrid className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
          {projects.map((project, index) => (
            <StaggerItem key={project.id}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                onClick={() => openLightbox(project)}
                className={`relative cursor-pointer overflow-hidden rounded-xl group ${
                  index === 0 ? "md:row-span-2" : ""
                }`}
              >
                <div className={`relative ${index === 0 ? "aspect-[4/5]" : "aspect-[4/3]"}`}>
                  <Image
                    src={project.image}
                    alt="Roofing project"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Subtle hover overlay */}
                  <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/0 transition-colors duration-300" />
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerGrid>

        {/* Lightbox Dialog */}
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-[95vw] lg:max-w-[85vw] xl:max-w-[80vw] p-0 bg-slate-900 border-slate-800">
            <DialogHeader className="sr-only">
              <DialogTitle>Project Image</DialogTitle>
            </DialogHeader>
            <div className="relative aspect-[4/3] md:aspect-[16/10]">
              {selectedProject && (
                <Image
                  src={selectedProject.image}
                  alt="Roofing project"
                  fill
                  className="object-cover"
                />
              )}
              
              {/* Navigation */}
              <button
                onClick={() => navigateLightbox("prev")}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-slate-900/80 hover:bg-slate-800 flex items-center justify-center shadow-lg transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <button
                onClick={() => navigateLightbox("next")}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-slate-900/80 hover:bg-slate-800 flex items-center justify-center shadow-lg transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>

              {/* Bottom CTA */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent p-6">
                <div className="flex justify-center">
                  <Button asChild size="lg" className="btn-shine gradient-accent text-white font-semibold border-0 shadow-lg">
                    <a href="/free-inspection">
                      Get Free Inspection
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
