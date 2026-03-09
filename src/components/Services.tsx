import { motion } from "framer-motion";
import { Building2, Home, Monitor, Sparkles, Box } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Commercial Interior Design",
    description:
      "Enhance functionality and showcase your brand identity with our comprehensive commercial interior design services. We collaborate closely with clients to craft the perfect workspace tailored to their needs and vision.",
  },
  {
    icon: Home,
    title: "Residential Interior Design",
    description:
      "Design a home that truly reflects your personality and complements your lifestyle. Our services include space planning, lighting design, furniture selection, material sourcing, and décor styling to bring your vision to life.",
  },
  {
    icon: Monitor,
    title: "E-Design Services",
    description:
      "Our E-Design service offers virtual design consultations for clients who prefer remote assistance. We provide personalized design concepts, custom mood boards, and step-by-step guidance to help you bring your vision to life.",
  },
  {
    icon: Sparkles,
    title: "Space Styling & Décor Sourcing",
    description:
      "Want to give your space a quick, luxurious refresh without a full redesign? Our space styling and décor sourcing services include curated artwork, furniture selection, accessorizing, and styling to elevate your interior effortlessly.",
  },
  {
    icon: Box,
    title: "3D Services & Concept Design",
    description:
      "Experience your space in 3D before the design comes to life. This service gives clients a realistic preview of the layout and aesthetics, ensuring the intended design aligns perfectly with their vision.",
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
            We offer a range of interior design services tailored to meet your needs.
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
              className={`card-elevated p-8 md:p-10 group hover:-translate-y-1 transition-transform duration-500 ${
                index === services.length - 1 && services.length % 2 !== 0
                  ? "md:col-span-2 md:max-w-[50%] md:mx-auto"
                  : ""
              }`}
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
