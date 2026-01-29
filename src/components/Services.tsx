import { motion } from "framer-motion";
import { Palette, Home, Ruler, Sparkles } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Interior Design",
    description:
      "Comprehensive design services from concept to completion, creating cohesive spaces that reflect your vision.",
  },
  {
    icon: Home,
    title: "Full Renovation",
    description:
      "End-to-end renovation management, coordinating contractors and ensuring flawless execution.",
  },
  {
    icon: Ruler,
    title: "Space Planning",
    description:
      "Strategic layout optimization to maximize functionality and flow throughout your home.",
  },
  {
    icon: Sparkles,
    title: "Styling & Staging",
    description:
      "Expert curation of furniture, art, and accessories to complete your space with perfect finishing touches.",
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="label-refined mb-4">What We Offer</p>
          <h2 className="heading-section mb-6">Our Services</h2>
          <p className="body-elegant max-w-2xl mx-auto text-muted-foreground">
            From initial concept to final reveal, we offer a comprehensive suite
            of design services tailored to your needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card-elevated p-8 md:p-10 group hover:-translate-y-1 transition-transform duration-500"
            >
              <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-500">
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl mb-4">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
