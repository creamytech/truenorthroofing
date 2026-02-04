"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Reveal, StaggerGrid, StaggerItem } from "@/lib/motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { ChevronLeft, ChevronRight, X, MapPin, Home } from "lucide-react";
import Link from "next/link";

// Placeholder projects - would be replaced with actual images
const projects = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2832&auto=format&fit=crop",
    location: "Dallas, TX",
    type: "Full Replacement",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2938&auto=format&fit=crop",
    location: "Austin, TX",
    type: "Storm Restoration",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2940&auto=format&fit=crop",
    location: "Houston, TX",
    type: "Residential",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2875&auto=format&fit=crop",
    location: "San Antonio, TX",
    type: "Full Replacement",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2853&auto=format&fit=crop",
    location: "Fort Worth, TX",
    type: "Commercial",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=2940&auto=format&fit=crop",
    location: "Plano, TX",
    type: "Storm Restoration",
  },
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
                    alt={`${project.type} in ${project.location}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="flex items-center gap-2 text-white/80 text-sm mb-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {project.location}
                    </div>
                    <div className="flex items-center gap-2 text-white font-medium">
                      <Home className="w-3.5 h-3.5" />
                      {project.type}
                    </div>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerGrid>

        {/* Lightbox Dialog */}
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-4xl p-0 bg-slate-900 border-slate-800">
            <DialogHeader className="sr-only">
              <DialogTitle>Project Image</DialogTitle>
            </DialogHeader>
            <div className="relative aspect-video">
              {selectedProject && (
                <Image
                  src={selectedProject.image}
                  alt={`${selectedProject.type} in ${selectedProject.location}`}
                  fill
                  className="object-cover"
                />
              )}
              
              {/* Navigation */}
              <button
                onClick={() => navigateLightbox("prev")}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <button
                onClick={() => navigateLightbox("next")}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>

              {/* Info */}
              {selectedProject && (
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-slate-900 to-transparent">
                  <div className="flex items-center gap-4 text-white">
                    <span className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {selectedProject.location}
                    </span>
                    <span className="flex items-center gap-2">
                      <Home className="w-4 h-4" />
                      {selectedProject.type}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
