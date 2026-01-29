import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Homeowner, Manhattan",
    quote:
      "Élise transformed our apartment into a sanctuary. Every detail was thoughtfully considered, from the custom millwork to the curated art pieces. It truly feels like home now.",
    rating: 5,
  },
  {
    id: 2,
    name: "James & Patricia Chen",
    role: "Homeowners, Brooklyn",
    quote:
      "Working with Élise was an absolute dream. They understood our vision from the first meeting and executed it beyond our expectations. Our friends can't stop complimenting the space.",
    rating: 5,
  },
  {
    id: 3,
    name: "Alexandra Beaumont",
    role: "Business Owner",
    quote:
      "The attention to detail is unmatched. Élise didn't just design a space; they created an experience. Every room tells a story, and it's exactly what we envisioned.",
    rating: 5,
  },
  {
    id: 4,
    name: "Michael Torres",
    role: "Architect",
    quote:
      "As an architect, I have high standards. Élise exceeded them. Their ability to blend functionality with beauty is remarkable. A true pleasure to collaborate with.",
    rating: 5,
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, []);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  return (
    <section id="testimonials" className="section-padding bg-primary text-primary-foreground">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="label-refined mb-4 text-primary-foreground/70">Testimonials</p>
          <h2 className="heading-section mb-6">What Our Clients Say</h2>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <Quote className="w-16 h-16 mx-auto mb-8 text-primary-foreground/20" />

          <div className="relative min-h-[280px] flex items-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0 text-center"
              >
                {/* Stars */}
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>

                <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed mb-8 italic">
                  "{testimonials[current].quote}"
                </blockquote>

                <div>
                  <p className="font-serif text-xl mb-1">
                    {testimonials[current].name}
                  </p>
                  <p className="label-refined text-primary-foreground/60">
                    {testimonials[current].role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-12">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border border-primary-foreground/30 flex items-center justify-center hover:bg-primary-foreground hover:text-primary transition-colors duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > current ? 1 : -1);
                    setCurrent(index);
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === current
                      ? "bg-primary-foreground w-8"
                      : "bg-primary-foreground/30"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 rounded-full border border-primary-foreground/30 flex items-center justify-center hover:bg-primary-foreground hover:text-primary transition-colors duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
