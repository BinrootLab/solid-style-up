import { motion } from "framer-motion";
import { Home, Building2, Castle, Key, ClipboardList, Wrench } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Residential Construction",
    description: "Custom homes and residential projects built with precision and pride.",
    features: ["Custom Home Design", "Turnkey Construction", "Quality Checks", "On-Time Delivery"],
  },
  {
    icon: Building2,
    title: "Commercial Construction",
    description: "Office buildings, retail spaces, and commercial builds delivered on time.",
    features: ["Office Spaces", "Retail & Showrooms", "MEP Coordination", "Project Scheduling"],
  },
  {
    icon: Castle,
    title: "Apartments & Villas",
    description: "Executed with strong structural engineering and quality systems.",
    features: ["Structural Engineering", "BOQ & Specifications", "Quality Control", "Progress Tracking"],
  },
  {
    icon: Key,
    title: "Rental Units",
    description: "Efficient design, quality finishes, and timely delivery for rental investments.",
    features: ["Efficient Design", "Quality Finishes", "Timely Delivery", "Investment Focus"],
  },
  {
    icon: ClipboardList,
    title: "Project Management",
    description: "End-to-end planning, scheduling, coordination, and quality checks.",
    features: ["Planning & Scheduling", "Vendor Coordination", "Quality Audits", "Site Supervision"],
  },
  {
    icon: Wrench,
    title: "Renovation & Remodelling",
    description: "Upgrade existing spaces with smart planning and structural safety.",
    features: ["Interior Renovations", "Structural Changes", "Waterproofing", "Modernisation"],
  },
];

const ServicesSection = () => {
  return (
    <section className="py-24 md:py-32 bg-secondary text-secondary-foreground">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-gold text-sm tracking-[0.3em] uppercase font-semibold mb-4">What We Build</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold">
            Comprehensive Construction Solutions
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.a
              key={service.title}
              href="/services"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 border border-secondary-foreground/10 rounded-sm hover:border-gold/40 hover:bg-secondary-foreground/5 transition-all duration-300"
            >
              <service.icon className="w-10 h-10 text-gold mb-6" strokeWidth={1.5} />
              <h3 className="text-xl font-display font-bold mb-3">{service.title}</h3>
              <p className="text-secondary-foreground/60 text-sm leading-relaxed mb-5">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((f) => (
                  <li key={f} className="text-xs text-secondary-foreground/50 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-gold" />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.a>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-gold-foreground text-sm font-semibold tracking-wide uppercase rounded-sm hover:bg-primary transition-colors hover:text-primary-foreground"
          >
            Explore All Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
