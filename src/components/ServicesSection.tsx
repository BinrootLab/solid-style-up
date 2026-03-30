import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Home, Building2, Building, Key, ClipboardList, Hammer, ArrowRight } from "lucide-react";

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
    description: "Office buildings, retail spaces, and commercial builds delivered with clear timelines.",
    features: ["Office Spaces", "Retail & Showrooms", "MEP Coordination", "Project Scheduling"],
  },
  {
    icon: Building,
    title: "Apartments & Villas",
    description: "Apartment and villa construction with strong structural engineering and quality systems.",
    features: ["Structural Engineering", "BOQ & Specifications", "Quality Control", "Progress Tracking"],
  },
  {
    icon: Key,
    title: "Rental Units",
    description: "Rental unit construction focused on efficient design and quality finishes.",
    features: ["Efficient Design", "Quality Finishes", "Timely Delivery", "Investment Focus"],
  },
  {
    icon: ClipboardList,
    title: "Project Management",
    description: "End-to-end planning, scheduling, coordination, and quality checks.",
    features: ["Planning & Scheduling", "Vendor Coordination", "Quality Audits", "Site Supervision"],
  },
  {
    icon: Hammer,
    title: "Renovation & Remodelling",
    description: "Upgrade and transform existing spaces with smart planning and finishing.",
    features: ["Interior Renovations", "Structural Changes", "Waterproofing & Repairs", "Modernisation"],
  },
];

const ServicesSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-accent" />
            <span className="text-accent text-sm font-semibold tracking-widest uppercase">What We Build</span>
            <div className="h-px w-8 bg-accent" />
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Comprehensive Construction Solutions
          </h2>
          <p className="text-muted-foreground">Tailored to your needs — from residential homes to commercial spaces</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group p-8 rounded-lg border border-border bg-background hover:border-accent/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-accent/10 text-accent mb-5">
                <service.icon size={24} />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-3">{service.title}</h3>
              <p className="text-sm text-muted-foreground mb-5 leading-relaxed">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-foreground/70">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                to="/services"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent group-hover:gap-2.5 transition-all"
              >
                Learn More <ArrowRight size={14} />
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-semibold text-sm rounded-md hover:bg-primary/90 transition-colors"
          >
            Explore All Services <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
