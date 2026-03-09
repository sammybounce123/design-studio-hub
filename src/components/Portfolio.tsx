import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

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

interface PortfolioItem {
  id: number;
  image: string;
  title: string;
  category: string;
}

const portfolioItems: PortfolioItem[] = [
  { id: 1, image: caracal1, title: "Reception", category: "Project Caracal" },
  { id: 2, image: caracal2, title: "Reception Lounge", category: "Project Caracal" },
  { id: 3, image: caracal3, title: "Corridor", category: "Project Caracal" },
  { id: 4, image: caracal4, title: "Boardroom", category: "Project Caracal" },
  { id: 5, image: caracal5, title: "Conference Room", category: "Project Caracal" },
  { id: 6, image: caracal6, title: "Open Workspace", category: "Project Caracal" },
  { id: 7, image: caracal7, title: "Office Space", category: "Project Caracal" },
  { id: 8, image: caracal8, title: "Executive Office", category: "Project Caracal" },
  { id: 9, image: caracal9, title: "Pantry", category: "Project Caracal" },
  { id: 10, image: caracal10, title: "Meeting Room", category: "Project Caracal" },
  { id: 20, image: msm1, title: "Boardroom", category: "Project MSM" },
  { id: 21, image: msm2, title: "Shelf Detail", category: "Project MSM" },
  { id: 22, image: msm3, title: "Executive Office", category: "Project MSM" },
  { id: 23, image: msm4, title: "Lounge Detail", category: "Project MSM" },
  { id: 24, image: msm5, title: "Glass Corridor", category: "Project MSM" },
  { id: 25, image: msm6, title: "Open Workspace", category: "Project MSM" },
  { id: 26, image: msm7, title: "Office Hallway", category: "Project MSM" },
  { id: 27, image: msm8, title: "Break Room", category: "Project MSM" },
  { id: 28, image: msm9, title: "Reception", category: "Project MSM" },
  { id: 11, image: residential1, title: "Living Room", category: "Residential Project" },
  { id: 12, image: residential2, title: "Living Area", category: "Residential Project" },
  { id: 13, image: residential3, title: "TV Lounge", category: "Residential Project" },
  { id: 14, image: residential4, title: "Bedside Detail", category: "Residential Project" },
  { id: 15, image: residential5, title: "Bedroom Vanity", category: "Residential Project" },
  { id: 16, image: residential6, title: "Master Bedroom", category: "Residential Project" },
  { id: 17, image: residential7, title: "Accent Décor", category: "Residential Project" },
  { id: 18, image: residential8, title: "Guest Bedroom", category: "Residential Project" },
  { id: 19, image: residential9, title: "Sitting Area", category: "Residential Project" },
];

const PREVIEW_COUNT = 3;

const Portfolio = () => {
  const [filter, setFilter] = useState<string>("all");
  const [galleryCategory, setGalleryCategory] = useState<string | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const categories = ["all", ...new Set(portfolioItems.map((item) => item.category))];

  // For "all", show first 3 per category; for specific filter, show first 3
  const previewItems = useMemo(() => {
    if (filter === "all") {
      const grouped: Record<string, PortfolioItem[]> = {};
      portfolioItems.forEach((item) => {
        if (!grouped[item.category]) grouped[item.category] = [];
        grouped[item.category].push(item);
      });
      return Object.values(grouped).flatMap((items) => items.slice(0, PREVIEW_COUNT));
    }
    return portfolioItems.filter((item) => item.category === filter).slice(0, PREVIEW_COUNT);
  }, [filter]);

  // Full gallery items for the opened category
  const galleryItems = useMemo(() => {
    if (!galleryCategory) return [];
    return portfolioItems.filter((item) => item.category === galleryCategory);
  }, [galleryCategory]);

  const openGallery = (item: PortfolioItem) => {
    const categoryItems = portfolioItems.filter((i) => i.category === item.category);
    const idx = categoryItems.findIndex((i) => i.id === item.id);
    setGalleryCategory(item.category);
    setActiveIndex(idx >= 0 ? idx : 0);
  };

  const closeGallery = () => {
    setGalleryCategory(null);
    setActiveIndex(0);
  };

  const goNext = () => setActiveIndex((prev) => (prev + 1) % galleryItems.length);
  const goPrev = () => setActiveIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);

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
          <h2 className="heading-section mb-6">Transforming Spaces, Elevating Experiences</h2>
          <p className="body-elegant max-w-2xl mx-auto text-muted-foreground">
            At DSR, we believe that exceptional interior design is a harmonious blend of
            creativity, innovation, and functionality. Explore our collection of bespoke interiors.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`label-refined px-6 py-3 transition-all duration-300 ${
                filter === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-card hover:bg-muted"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Preview Grid — 3 images per category */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {previewItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group cursor-pointer overflow-hidden"
                onClick={() => openGallery(item)}
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <p className="label-refined text-primary-foreground/80 mb-1">
                      {item.category}
                    </p>
                    <h3 className="font-serif text-xl text-primary-foreground">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Half-screen Gallery Viewer */}
      <AnimatePresence>
        {galleryCategory && galleryItems.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex"
            onClick={closeGallery}
          >
            {/* Dark backdrop — left half */}
            <div className="hidden md:block w-1/2 bg-foreground/80 backdrop-blur-sm" />

            {/* Gallery panel — right half (full on mobile) */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="w-full md:w-1/2 bg-background flex flex-col h-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Panel header */}
              <div className="flex items-center justify-between p-6 border-b border-border">
                <div>
                  <p className="label-refined text-muted-foreground mb-1">{galleryCategory}</p>
                  <h3 className="font-serif text-xl">
                    {galleryItems[activeIndex]?.title}
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">
                    {activeIndex + 1} / {galleryItems.length}
                  </span>
                  <button
                    onClick={closeGallery}
                    className="ml-4 w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Main image */}
              <div className="flex-1 relative flex items-center justify-center p-6 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={galleryItems[activeIndex]?.id}
                    src={galleryItems[activeIndex]?.image}
                    alt={galleryItems[activeIndex]?.title}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{ duration: 0.3 }}
                    className="max-w-full max-h-full object-contain rounded-sm"
                  />
                </AnimatePresence>

                {/* Navigation arrows */}
                <button
                  onClick={goPrev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 border border-border flex items-center justify-center hover:bg-muted transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={goNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 border border-border flex items-center justify-center hover:bg-muted transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Thumbnail strip */}
              <div className="p-4 border-t border-border">
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {galleryItems.map((item, idx) => (
                    <button
                      key={item.id}
                      onClick={() => setActiveIndex(idx)}
                      className={`flex-shrink-0 w-16 h-16 overflow-hidden rounded-sm transition-all duration-300 ${
                        idx === activeIndex
                          ? "ring-2 ring-primary opacity-100"
                          : "opacity-50 hover:opacity-80"
                      }`}
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
