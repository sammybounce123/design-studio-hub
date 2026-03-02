import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";

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
  type: "image" | "video";
  videoUrl?: string;
}

const portfolioItems: PortfolioItem[] = [
  // Project Caracal
  { id: 1, image: caracal1, title: "Reception", category: "Project Caracal", type: "image" },
  { id: 2, image: caracal2, title: "Reception Lounge", category: "Project Caracal", type: "image" },
  { id: 3, image: caracal3, title: "Corridor", category: "Project Caracal", type: "image" },
  { id: 4, image: caracal4, title: "Boardroom", category: "Project Caracal", type: "image" },
  { id: 5, image: caracal5, title: "Conference Room", category: "Project Caracal", type: "image" },
  { id: 6, image: caracal6, title: "Open Workspace", category: "Project Caracal", type: "image" },
  { id: 7, image: caracal7, title: "Office Space", category: "Project Caracal", type: "image" },
  { id: 8, image: caracal8, title: "Executive Office", category: "Project Caracal", type: "image" },
  { id: 9, image: caracal9, title: "Pantry", category: "Project Caracal", type: "image" },
  { id: 10, image: caracal10, title: "Meeting Room", category: "Project Caracal", type: "image" },
  // Residential Project
  { id: 11, image: residential1, title: "Living Room", category: "Residential Project", type: "image" },
  { id: 12, image: residential2, title: "Living Area", category: "Residential Project", type: "image" },
  { id: 13, image: residential3, title: "TV Lounge", category: "Residential Project", type: "image" },
  { id: 14, image: residential4, title: "Bedside Detail", category: "Residential Project", type: "image" },
  { id: 15, image: residential5, title: "Bedroom Vanity", category: "Residential Project", type: "image" },
  { id: 16, image: residential6, title: "Master Bedroom", category: "Residential Project", type: "image" },
  { id: 17, image: residential7, title: "Accent Décor", category: "Residential Project", type: "image" },
  { id: 18, image: residential8, title: "Guest Bedroom", category: "Residential Project", type: "image" },
  { id: 19, image: residential9, title: "Sitting Area", category: "Residential Project", type: "image" },
];

const Portfolio = () => {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [filter, setFilter] = useState<string>("all");

  const categories = ["all", ...new Set(portfolioItems.map((item) => item.category))];

  const filteredItems =
    filter === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === filter);

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

        {/* Gallery Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`group cursor-pointer overflow-hidden ${
                  index === 0 ? "md:col-span-2 md:row-span-2" : ""
                }`}
                onClick={() => setSelectedItem(item)}
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors duration-500 flex items-center justify-center">
                    {item.type === "video" && (
                      <div className="w-16 h-16 rounded-full bg-primary-foreground/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <Play className="w-6 h-6 text-primary fill-current ml-1" />
                      </div>
                    )}
                  </div>
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

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
            onClick={() => setSelectedItem(null)}
          >
            <button
              className="absolute top-6 right-6 text-primary-foreground hover:text-accent transition-colors"
              onClick={() => setSelectedItem(null)}
            >
              <X size={32} />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {selectedItem.type === "video" ? (
                <div className="aspect-video">
                  <iframe
                    src={selectedItem.videoUrl}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ) : (
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="w-full h-auto"
                />
              )}
              <div className="mt-4 text-center">
                <p className="label-refined text-primary-foreground/60 mb-1">
                  {selectedItem.category}
                </p>
                <h3 className="font-serif text-2xl text-primary-foreground">
                  {selectedItem.title}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
