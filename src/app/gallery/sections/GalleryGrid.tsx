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
import { ChevronLeft, ChevronRight } from "lucide-react";

// Real project gallery from public/Gallery (44 images)
const projects = [
  { id: 1, image: "/Gallery/down-net_http20250815-124-smvqip.jpg" },
  { id: 2, image: "/Gallery/down-net_http20250815-136-h178us.jpg" },
  { id: 3, image: "/Gallery/down-net_http20250815-207-4fbre1.jpg" },
  { id: 4, image: "/Gallery/down-net_http20250815-261-fm7cim.jpg" },
  { id: 5, image: "/Gallery/down-net_http20250815-74-lnjib6.jpg" },
  { id: 6, image: "/Gallery/down-net_http20250815-80-ohukyp.jpg" },
  { id: 7, image: "/Gallery/down-net_http20250816-153-wzbhqy.jpg" },
  { id: 8, image: "/Gallery/down-net_http20250816-157-mty283.jpg" },
  { id: 9, image: "/Gallery/down-net_http20250816-157-nxos4q.jpg" },
  { id: 10, image: "/Gallery/down-net_http20250816-195-3qpy65.jpg" },
  { id: 11, image: "/Gallery/down-net_http20250816-196-m7mkk9.jpg" },
  { id: 12, image: "/Gallery/down-net_http20250816-201-86z84r.jpg" },
  { id: 13, image: "/Gallery/down-net_http20250816-201-lw8p2i.jpg" },
  { id: 14, image: "/Gallery/down-net_http20250816-201-tf318n.jpg" },
  { id: 15, image: "/Gallery/down-net_http20250816-210-v40tcd.jpg" },
  { id: 16, image: "/Gallery/down-net_http20250906-100-gvb2dx.jpg" },
  { id: 17, image: "/Gallery/down-net_http20250906-121-pkrga2.jpg" },
  { id: 18, image: "/Gallery/down-net_http20250906-158-ncs9ok.jpg" },
  { id: 19, image: "/Gallery/down-net_http20250906-158-v9gpws.jpg" },
  { id: 20, image: "/Gallery/down-net_http20250906-159-six5.jpg" },
  { id: 21, image: "/Gallery/down-net_http20250906-171-wtm36x.jpg" },
  { id: 22, image: "/Gallery/down-net_http20250906-189-osc5i3.jpg" },
  { id: 23, image: "/Gallery/down-net_http20250906-82-ecugar.jpg" },
  { id: 24, image: "/Gallery/down-net_http20250906-82-ubxwm0.jpg" },
  { id: 25, image: "/Gallery/down-net_http20250925-204-zjxii5.jpg" },
  { id: 26, image: "/Gallery/down-net_http20250925-98-fu9kf0.jpg" },
  { id: 27, image: "/Gallery/down-net_http20251106-287-kkdazw.jpg" },
  { id: 28, image: "/Gallery/down-net_http20251106-88-g95hf4.jpg" },
  { id: 29, image: "/Gallery/down-net_http20251108-102-tmuvmn.jpg" },
  { id: 30, image: "/Gallery/down-net_http20251108-10305-2k584z.jpg" },
  { id: 31, image: "/Gallery/down-net_http20251108-13155-353p7o.jpg" },
  { id: 32, image: "/Gallery/down-net_http20251108-237-hc0qnm.jpg" },
  { id: 33, image: "/Gallery/down-net_http20251108-24794-2r7sq4.jpg" },
  { id: 34, image: "/Gallery/down-net_http20251108-294-ihjydn.jpg" },
  { id: 35, image: "/Gallery/down-net_http20251108-30962-ptp5zy.jpg" },
  { id: 36, image: "/Gallery/down-net_http20251108-43072-9caafc.jpg" },
  { id: 37, image: "/Gallery/down-net_http20251108-49227-g39eyk.jpg" },
  { id: 38, image: "/Gallery/down-net_http20251108-49227-irz7mx.jpg" },
  { id: 39, image: "/Gallery/down-net_http20251108-62384-7xs79m.jpg" },
  { id: 40, image: "/Gallery/down-net_http20251108-62384-p92bds.jpg" },
  { id: 41, image: "/Gallery/down-net_http20251108-93-9hc8r7.jpg" },
  { id: 42, image: "/Gallery/down-net_http20251108-9833-8cr8yk.jpg" },
  { id: 43, image: "/Gallery/down-net_http20251222-29262-5ronvi.jpg" },
  { id: 44, image: "/Gallery/down-net_http20251222-32169-gwbxmh.jpg" },
];

export function GalleryGrid() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setCurrentIndex(projects.findIndex(p => p.id === project.id));
  };

  const navigate = (direction: "prev" | "next") => {
    const newIndex = direction === "prev"
      ? (currentIndex - 1 + projects.length) % projects.length
      : (currentIndex + 1) % projects.length;
    setCurrentIndex(newIndex);
    setSelectedProject(projects[newIndex]);
  };

  return (
    <section className="section-padding bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
        >
          <AnimatePresence mode="popLayout">
            {projects.map((project) => (
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
                <Card className="overflow-hidden border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-md hover:shadow-xl hover:shadow-blue-500/10 transition-all">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={project.image}
                      alt="Roofing project"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/0 transition-colors duration-300" />
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal */}
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-[95vw] lg:max-w-[85vw] xl:max-w-[80vw] p-0 bg-slate-900 border-slate-200 dark:border-slate-700 overflow-hidden">
            <DialogHeader className="sr-only">
              <DialogTitle>Project Image</DialogTitle>
            </DialogHeader>
            
            {selectedProject && (
              <div className="relative">
                {/* Large Image */}
                <div className="relative aspect-[4/3] md:aspect-[16/9] lg:aspect-[16/9]">
                  <Image
                    src={selectedProject.image}
                    alt="Roofing project"
                    fill
                    className="object-cover"
                  />
                  
                  {/* Navigation */}
                  <button
                    onClick={() => navigate("prev")}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 dark:bg-slate-900/80 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center justify-center shadow-lg transition-colors text-white"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={() => navigate("next")}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 dark:bg-slate-900/80 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center justify-center shadow-lg transition-colors text-white"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>

                  {/* Bottom overlay with CTA */}
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
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
