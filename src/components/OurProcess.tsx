import { motion } from "framer-motion";
import { MessageSquare, Ruler, Palette, FileText, FileSignature, HardHat, Sparkles } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Paid Design Consultation",
    description:
      "We begin with an in-depth discussion to understand your vision, style, budget, preferences, and requirements.",
    details: [
      "Discuss scope, timeline and investment",
      "Share inspiration",
      "Q&A about our services",
      "Client Briefing form",
      "Complimentary site visit (depending on location)",
    ],
  },
  {
    number: "02",
    icon: Ruler,
    title: "Site Measurements & Floor Plan",
    description:
      "We carefully document all key dimensions with our architectural team and use this data to create a scaled floor plan and furniture layout.",
    details: [
      "Wall to wall dimensions, window and door placements",
      "A custom floor plan to inform furniture layout, flow and design decisions",
    ],
    price: "Starting from ₦150,000",
  },
  {
    number: "03",
    icon: Palette,
    title: "Concept Design",
    description:
      "We translate your vision into a conceptual design with materials, layouts, lighting, colour palettes and creative direction.",
    details: [
      "Mood board inspirations",
      "2D Layout plan",
      "3D renders of your space (charged separately per space)",
    ],
    price: "Starting from ₦200,000",
  },
  {
    number: "04",
    icon: FileText,
    title: "Design Fee Proposal",
    description:
      "Once the concept design is approved, a breakdown estimated investment of your project is provided.",
    details: [
      "Project costing",
      "The designer fee (30% of project cost)",
      "Scope of work",
      "Delivery timeframe",
    ],
  },
  {
    number: "05",
    icon: FileSignature,
    title: "Contract Agreement",
    description:
      "A detailed contract is sent from our legal team for signing, fees paid and then we commence procurement and vendor coordination.",
    details: [],
  },
  {
    number: "06",
    icon: HardHat,
    title: "Project Execution & Supervision",
    description: "Sourcing and procurement services. Project commences with full oversight and coordination.",
    details: [],
  },
  {
    number: "07",
    icon: Sparkles,
    title: "Styling & Handover",
    description:
      "Final styling touches are applied and your beautifully designed space is handed over to you.",
    details: [],
  },
];

const OurProcess = () => {
  return (
    <section id="process" className="section-padding">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="label-refined mb-4">How We Work</p>
          <h2 className="heading-section mb-6">Our Process</h2>
          <p className="body-elegant max-w-2xl mx-auto text-muted-foreground">
            Our process is tailored to deliver a seamless, collaborative experience
            that transforms your vision into reality.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px hidden md:block" />

          <div className="space-y-12 md:space-y-16">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className={`relative md:grid md:grid-cols-2 md:gap-12 items-start ${
                  index % 2 === 0 ? "" : "md:direction-rtl"
                }`}
              >
                {/* Number badge on the timeline */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-primary text-primary-foreground items-center justify-center font-serif text-lg font-medium z-10">
                  {step.number}
                </div>

                {/* Content card */}
                <div
                  className={`card-elevated p-8 ${
                    index % 2 === 0
                      ? "md:col-start-1 md:text-right"
                      : "md:col-start-2"
                  }`}
                >
                  <div
                    className={`flex items-center gap-4 mb-4 ${
                      index % 2 === 0 ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                      <step.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <span className="label-refined text-primary md:hidden">
                        Step {step.number}
                      </span>
                      <h3 className="font-serif text-xl md:text-2xl">
                        {step.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {step.description}
                  </p>

                  {step.details.length > 0 && (
                    <ul
                      className={`space-y-2 text-sm text-muted-foreground ${
                        index % 2 === 0 ? "md:ml-auto" : ""
                      }`}
                    >
                      {step.details.map((detail, i) => (
                        <li
                          key={i}
                          className={`flex items-start gap-2 ${
                            index % 2 === 0 ? "md:flex-row-reverse md:text-right" : ""
                          }`}
                        >
                          <span className="text-primary mt-1 flex-shrink-0">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {step.price && (
                    <p className="mt-4 font-serif text-primary font-medium">
                      {step.price}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
