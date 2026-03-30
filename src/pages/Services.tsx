import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Home, Building2, Building, Key, ClipboardList, Hammer, ArrowRight, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PartnersSection from "@/components/PartnersSection";

const services = [
  {
    icon: Home,
    title: "Residential Construction",
    description: "Custom homes, renovations, and residential projects built to perfection. From single-family homes to multi-unit developments.",
    features: ["Custom Home Design", "Home Renovations", "Additions & Extensions", "Kitchen & Bath Remodeling"],
  },
  {
    icon: Building2,
    title: "Commercial Construction",
    description: "Office buildings, retail spaces, and commercial developments. We deliver projects on time and within budget.",
    features: ["Office Buildings", "Retail Spaces", "Restaurants & Cafes", "Warehouses"],
  },
  {
    icon: Building,
    title: "Apartments & Villas",
    description: "Apartment and villa construction executed with strong structural engineering, quality systems, and multi-site coordination.",
    features: ["Structural Engineering", "BOQ & Specifications", "Quality Control", "Progress Tracking"],
  },
  {
    icon: Key,
    title: "Rental Units",
    description: "Rental unit construction focused on efficient design, quality finishes, and timely delivery for rental property investments.",
    features: ["Efficient Design", "Quality Finishes", "Timely Delivery", "Investment Focus"],
  },
  {
    icon: ClipboardList,
    title: "Project Management",
    description: "End-to-end project management and consultation services. We handle every aspect of your construction project.",
    features: ["Planning & Design", "Budget Management", "Timeline Coordination", "Quality Control"],
  },
  {
    icon: Hammer,
    title: "Renovation & Remodeling",
    description: "Transform your existing space with our expert renovation services. We breathe new life into old structures.",
    features: ["Interior Renovations", "Exterior Upgrades", "Structural Improvements", "Modernization"],
  },
];

const processSteps = [
  {
    step: "01",
    title: "Consultation & Requirement",
    description: "Understanding client needs, budget, and site conditions.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80",
  },
  {
    step: "02",
    title: "Design & Planning",
    description: "Architectural planning, drawings, and approvals.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
  },
  {
    step: "03",
    title: "Cost Estimation",
    description: "Transparent BOQ, timelines, and material specifications.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80",
  },
  {
    step: "04",
    title: "Construction Execution",
    description: "On-site execution with quality checks and supervision.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80",
  },
  {
    step: "05",
    title: "Quality & Finishing",
    description: "Detailed finishing, inspections, and corrections.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80",
  },
  {
    step: "06",
    title: "Handover & Support",
    description: "Final handover with documentation and post-project support.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
  },
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative pt-20 bg-primary">
        <div className="relative h-[50vh] min-h-[400px] flex items-center">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80"
              alt="Construction services"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary/80" />
          </div>
          <div className="container relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-12 bg-accent" />
                <span className="text-accent text-sm font-semibold tracking-widest uppercase">Our Services</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-4">
                Our Construction Services
              </h1>
              <p className="text-lg text-primary-foreground/60 max-w-xl">
                Comprehensive construction solutions for residential, commercial, rental units, apartments and villas
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-8 rounded-lg border border-border bg-background hover:shadow-lg hover:border-accent/20 transition-all duration-300"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-accent/10 text-accent mb-6">
                  <service.icon size={28} />
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">{service.description}</p>
                <ul className="space-y-2.5 mb-6">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-foreground/70">
                      <CheckCircle size={14} className="text-accent flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:gap-2.5 transition-all"
                >
                  Learn More <ArrowRight size={14} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process - Visual Journey */}
      <section className="py-24 bg-secondary overflow-hidden">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-20"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-accent" />
              <span className="text-accent text-sm font-semibold tracking-widest uppercase">Our Process</span>
              <div className="h-px w-8 bg-accent" />
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Your Construction Journey
            </h2>
            <p className="text-muted-foreground">
              From the first conversation to handing over the keys — here's how we bring your vision to life.
            </p>
          </motion.div>

          {/* Timeline Journey */}
          <div className="relative">
            {/* Vertical connector line - desktop */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />

            <div className="space-y-16 lg:space-y-0">
              {processSteps.map((step, i) => {
                const isEven = i % 2 === 0;
                return (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="relative lg:py-8"
                  >
                    {/* Desktop layout - alternating sides */}
                    <div className={`lg:grid lg:grid-cols-2 lg:gap-16 items-center ${isEven ? '' : 'lg:direction-rtl'}`}>
                      {/* Content side */}
                      <div className={`${isEven ? 'lg:text-right lg:pr-16' : 'lg:order-2 lg:pl-16'}`}>
                        <div className={`flex items-center gap-4 mb-4 ${isEven ? 'lg:justify-end' : ''}`}>
                          <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent text-accent-foreground text-sm font-bold">
                            {step.step}
                          </span>
                          <h3 className="text-xl font-display font-semibold text-foreground">{step.title}</h3>
                        </div>
                        <p className="text-muted-foreground leading-relaxed max-w-md ml-16 lg:ml-0 lg:max-w-none">
                          {step.description}
                        </p>
                      </div>

                      {/* Image side */}
                      <div className={`mt-6 lg:mt-0 ${isEven ? 'lg:order-2 lg:pl-16' : 'lg:pr-16'}`}>
                        <div className="relative rounded-xl overflow-hidden shadow-lg aspect-[16/10] ml-16 lg:ml-0">
                          <img src={step.image} alt={step.title} className="w-full h-full object-cover" />
                          <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
                        </div>
                      </div>
                    </div>

                    {/* Center dot on timeline - desktop */}
                    <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                      <div className="w-5 h-5 rounded-full bg-accent border-4 border-secondary shadow-md" />
                    </div>

                    {/* Mobile vertical line connector */}
                    {i < processSteps.length - 1 && (
                      <div className="lg:hidden absolute left-[1.45rem] top-[3.5rem] bottom-[-4rem] w-px bg-border" />
                    )}
                  </motion.div>
                );
              })}
            </div>

            {/* Journey end marker */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="hidden lg:flex justify-center mt-8"
            >
              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                  <CheckCircle size={20} className="text-accent-foreground" />
                </div>
                <span className="text-sm font-semibold text-accent">Your Dream Home</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Lifetime Support */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              We Don't Just Build Your Home — We Back You Up
            </h2>
            <p className="text-primary-foreground/60 text-lg mb-10 leading-relaxed">
              Count on us for continuous support: maintenance guidance, questions after move-in, and responsive help across the life of your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-semibold text-sm rounded-md hover:bg-accent/90 transition-colors"
              >
                Get Free Quote <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/919741155118"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-primary-foreground/20 text-primary-foreground font-semibold text-sm rounded-md hover:bg-primary-foreground/10 transition-colors"
              >
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <PartnersSection />
      <Footer />
    </div>
  );
};

export default ServicesPage;
