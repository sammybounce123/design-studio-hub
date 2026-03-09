import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

import caracal1 from "@/assets/caracal-1.jpg";
import caracal2 from "@/assets/caracal-2.jpg";
import caracal3 from "@/assets/caracal-3.jpg";
import caracal4 from "@/assets/caracal-4.jpg";
import caracal5 from "@/assets/caracal-5.jpg";
import caracal6 from "@/assets/caracal-6.jpg";
import caracal7 from "@/assets/caracal-7.jpg";
import caracal8 from "@/assets/caracal-8.jpg";
import caracal9 from "@/assets/caracal-9.jpg";
import caracal10 from "@/assets/caracal-10.jpg";
import msm1 from "@/assets/msm-1.jpg";
import msm2 from "@/assets/msm-2.jpg";
import msm3 from "@/assets/msm-3.jpg";
import msm4 from "@/assets/msm-4.jpg";
import msm5 from "@/assets/msm-5.jpg";
import msm6 from "@/assets/msm-6.jpg";
import msm7 from "@/assets/msm-7.jpg";
import msm8 from "@/assets/msm-8.jpg";
import msm9 from "@/assets/msm-9.jpg";
import residential1 from "@/assets/residential-1.jpg";
import residential2 from "@/assets/residential-2.jpg";
import residential3 from "@/assets/residential-3.jpg";
import residential4 from "@/assets/residential-4.jpg";
import residential5 from "@/assets/residential-5.jpg";
import residential6 from "@/assets/residential-6.jpg";
import residential7 from "@/assets/residential-7.jpg";
import residential8 from "@/assets/residential-8.jpg";
import residential9 from "@/assets/residential-9.jpg";

interface PortfolioImage {
  src: string;
  title: string;
}

interface Project {
  name: string;
  images: PortfolioImage[];
}

const projects: Project[] = [
  {
    name: "Project Caracal",
    images: [
      { src: caracal1, title: "Reception" },
      { src: caracal2, title: "Reception Lounge" },
      { src: caracal3, title: "Corridor" },
      { src: caracal4, title: "Boardroom" },
      { src: caracal5, title: "Conference Room" },
      { src: caracal6, title: "Open Workspace" },
      { src: caracal7, title: "Office Space" },
      { src: caracal8, title: "Executive Office" },
      { src: caracal9, title: "Pantry" },
      { src: caracal10, title: "Meeting Room" },
    ],
  },
  {
    name: "Project MSM",
    images: [
      { src: msm1, title: "Boardroom" },
      { src: msm2, title: "Shelf Detail" },
      { src: msm3, title: "Executive Office" },
      { src: msm4, title: "Lounge Detail" },
      { src: msm5, title: "Glass Corridor" },
      { src: msm6, title: "Open Workspace" },
      { src: msm7, title: "Office Hallway" },
      { src: msm8, title: "Break Room" },
      { src: msm9, title: "Reception" },
    ],
  },
  {
    name: "Residential Project",
    images: [
      { src: residential1, title: "Living Room" },
      { src: residential2, title: "Living Area" },
      { src: residential3, title: "TV Lounge" },
      { src: residential4, title: "Bedside Detail" },
      { src: residential5, title: "Bedroom Vanity" },
      { src: residential6, title: "Master Bedroom" },
      { src: residential7, title: "Accent Décor" },
      { src: residential8, title: "Guest Bedroom" },
      { src: residential9, title: "Sitting Area" },
    ],
  },
];

const Portfolio = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const openGallery = useCallback((project: Project, startIndex: number) => {
    setActiveProject(project);
    setActiveIndex(startIndex);
    document.body.style.overflow = "hidden";
  }, []);

  const closeGallery = useCallback(() => {
    setActiveProject(null);
    setActiveIndex(0);
    document.body.style.overflow = "";
  }, []);

  const goNext = useCallback(() => {
    if (!activeProject) return;
    setActiveIndex((i) => (i + 1) % activeProject.images.length);
  }, [activeProject]);

  const goPrev = useCallback(() => {
    if (!activeProject) return;
    setActiveIndex((i) => (i - 1 + activeProject.images.length) % activeProject.images.length);
  }, [activeProject]);

  return (
    <section id="portfolio" className="section-padding bg-secondary/30">
      <div className="container-narrow">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="label-refined mb-4">Our Portfolio</p>
          <h2 className="heading-section mb-6">Spaces We've Transformed</h2>
          <p className="body-elegant max-w-2xl mx-auto text-muted-foreground">
            Explore our collection of bespoke interiors, each thoughtfully designed
            to reflect our clients' unique personalities and lifestyles.
          </p>
        </motion.div>

        {/* Project Sections — 3 preview images each */}
        <div className="space-y-20">
          {projects.map((project, pi) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: pi * 0.1 }}
            >
              <h3 className="font-serif text-2xl md:text-3xl mb-8 text-foreground">
                {project.name}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {project.images.slice(0, 3).map((img, idx) => (
                  <div
                    key={idx}
                    className="group relative cursor-pointer overflow-hidden aspect-[4/3] bg-muted"
                    onClick={() => openGallery(project, idx)}
                  >
                    <img
                      src={img.src}
                      alt={img.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-foreground/50 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      <p className="font-serif text-sm text-primary-foreground">
                        {img.title}
                      </p>
                    </div>
                    {/* "View all" badge on 3rd image */}
                    {idx === 2 && project.images.length > 3 && (
                      <div className="absolute inset-0 flex items-center justify-center bg-foreground/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <span className="label-refined text-primary-foreground bg-foreground/50 backdrop-blur-sm px-4 py-2 rounded-sm">
                          View all {project.images.length} photos
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Full Gallery Lightbox Modal */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-foreground/95 flex flex-col"
            onClick={closeGallery}
          >
            {/* Top bar */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-4 shrink-0">
              <div>
                <p className="font-serif text-lg sm:text-xl text-primary-foreground">
                  {activeProject.name}
                </p>
                <p className="text-xs text-primary-foreground/50">
                  {activeIndex + 1} / {activeProject.images.length}
                </p>
              </div>
              <button
                className="text-primary-foreground/70 hover:text-primary-foreground transition-colors p-2"
                onClick={closeGallery}
                aria-label="Close gallery"
              >
                <X size={28} />
              </button>
            </div>

            {/* Main image area */}
            <div
              className="flex-1 flex items-center justify-center relative px-4 sm:px-16 pb-4 min-h-0"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Prev button */}
              <button
                className="absolute left-2 sm:left-4 z-10 p-2 sm:p-3 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 backdrop-blur-sm text-primary-foreground transition-colors"
                onClick={goPrev}
                aria-label="Previous image"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Image */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.25 }}
                  className="w-full h-full flex flex-col items-center justify-center"
                >
                  <img
                    src={activeProject.images[activeIndex].src}
                    alt={activeProject.images[activeIndex].title}
                    className="max-w-full max-h-[calc(100vh-160px)] object-contain rounded-sm"
                  />
                  <p className="mt-3 font-serif text-sm text-primary-foreground/70">
                    {activeProject.images[activeIndex].title}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Next button */}
              <button
                className="absolute right-2 sm:right-4 z-10 p-2 sm:p-3 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 backdrop-blur-sm text-primary-foreground transition-colors"
                onClick={goNext}
                aria-label="Next image"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Thumbnail strip */}
            <div className="shrink-0 px-4 pb-4 overflow-x-auto">
              <div className="flex gap-2 justify-center">
                {activeProject.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveIndex(idx);
                    }}
                    className={`shrink-0 w-14 h-10 sm:w-16 sm:h-12 overflow-hidden rounded-sm transition-all duration-300 ${
                      idx === activeIndex
                        ? "ring-2 ring-primary-foreground opacity-100"
                        : "opacity-40 hover:opacity-70"
                    }`}
                  >
                    <img
                      src={img.src}
                      alt={img.title}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
