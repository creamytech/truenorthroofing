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
import { Reveal } from "@/lib/motion";
import { ChevronLeft, ChevronRight, MapPin, Calendar } from "lucide-react";

// Filter categories
const filters = [
  { id: "all", label: "All Projects" },
  { id: "replacement", label: "Replacement" },
  { id: "repair", label: "Repair" },
  { id: "storm", label: "Storm" },
  { id: "commercial", label: "Commercial" },
];

// Expanded project gallery
const projects = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2832&auto=format&fit=crop",
    location: "Dallas, TX",
    type: "Full Replacement",
    category: "replacement",
    date: "January 2025",
    scope: ["Complete tear-off", "New synthetic underlayment", "Architectural shingles", "Ridge vent installation"],
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2938&auto=format&fit=crop",
    location: "Austin, TX",
    type: "Storm Restoration",
    category: "storm",
    date: "December 2024",
    scope: ["Hail damage repair", "Insurance documentation", "Full replacement", "Gutter repair"],
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2940&auto=format&fit=crop",
    location: "Houston, TX",
    type: "Residential",
    category: "replacement",
    date: "November 2024",
    scope: ["Complete replacement", "Ventilation upgrade", "New flashing", "Skylight installation"],
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2875&auto=format&fit=crop",
    location: "San Antonio, TX",
    type: "Full Replacement",
    category: "replacement",
    date: "October 2024",
    scope: ["Deck repair", "Ice & water shield", "Designer shingles", "New gutters"],
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2853&auto=format&fit=crop",
    location: "Fort Worth, TX",
    type: "Commercial TPO",
    category: "commercial",
    date: "September 2024",
    scope: ["TPO membrane", "Insulation upgrade", "HVAC curb work", "Parapet repair"],
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=2940&auto=format&fit=crop",
    location: "Plano, TX",
    type: "Storm Restoration",
    category: "storm",
    date: "August 2024",
    scope: ["Wind damage repair", "Emergency tarping", "Full restoration", "Supplemental claim"],
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?q=80&w=2940&auto=format&fit=crop",
    location: "Arlington, TX",
    type: "Roof Repair",
    category: "repair",
    date: "July 2024",
    scope: ["Leak repair", "Flashing replacement", "Valley repair", "Preventative maintenance"],
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=2884&auto=format&fit=crop",
    location: "Irving, TX",
    type: "Commercial Metal",
    category: "commercial",
    date: "June 2024",
    scope: ["Standing seam metal", "Skylights", "Drainage system", "Energy coating"],
  },
];

export function GalleryGrid() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  const openModal = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setCurrentIndex(filteredProjects.findIndex(p => p.id === project.id));
  };

  const navigate = (direction: "prev" | "next") => {
    const newIndex = direction === "prev"
      ? (currentIndex - 1 + filteredProjects.length) % filteredProjects.length
      : (currentIndex + 1) % filteredProjects.length;
    setCurrentIndex(newIndex);
    setSelectedProject(filteredProjects[newIndex]);
  };

  return (
    <section className="section-padding bg-slate-900">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Filter Bar */}
        <Reveal>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeFilter === filter.id
                    ? "bg-cyan-500 text-white shadow-lg shadow-cyan-500/20"
                    : "bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onClick={() => openModal(project)}
                className="cursor-pointer group"
              >
                <Card className="overflow-hidden border-slate-700 bg-slate-800 shadow-md hover:shadow-xl hover:shadow-cyan-500/10 transition-all">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={project.image}
                      alt={`${project.type} in ${project.location}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="flex items-center gap-2 text-white/80 text-sm mb-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {project.location}
                      </div>
                      <div className="text-white font-medium">
                        {project.type}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal */}
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-4xl p-0 bg-slate-900 border-slate-700 overflow-hidden">
            <DialogHeader className="sr-only">
              <DialogTitle>Project Details</DialogTitle>
            </DialogHeader>
            
            {selectedProject && (
              <div className="grid md:grid-cols-2">
                {/* Image */}
                <div className="relative aspect-square md:aspect-auto">
                  <Image
                    src={selectedProject.image}
                    alt={`${selectedProject.type} in ${selectedProject.location}`}
                    fill
                    className="object-cover"
                  />
                  
                  {/* Navigation */}
                  <button
                    onClick={() => navigate("prev")}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-800/90 hover:bg-slate-700 flex items-center justify-center shadow-md transition-colors text-white"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => navigate("next")}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-800/90 hover:bg-slate-700 flex items-center justify-center shadow-md transition-colors text-white"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

                {/* Details */}
                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-2 text-sm text-slate-400 mb-2">
                    <Calendar className="w-4 h-4" />
                    {selectedProject.date}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {selectedProject.type}
                  </h3>
                  
                  <div className="flex items-center gap-2 text-slate-400 mb-6">
                    <MapPin className="w-4 h-4" />
                    {selectedProject.location}
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-white mb-3">Project Scope</h4>
                    <ul className="space-y-2">
                      {selectedProject.scope.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-slate-300">
                          <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button asChild className="w-full btn-shine gradient-accent text-white font-semibold border-0">
                    <a href="/free-inspection">
                      Get Your Free Inspection
                    </a>
                  </Button>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
