import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
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

const HorizontalScrollProcess = ({ steps }: { steps: typeof processSteps }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${(steps.length - 1) * 100 / steps.length}%`]);
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // Update active step based on scroll
  scrollYProgress.on("change", (v) => {
    const step = Math.min(Math.round(v * (steps.length - 1)), steps.length - 1);
    setActiveStep(step);
  });

  return (
    <div ref={containerRef} className="relative" style={{ height: `${steps.length * 80}vh` }}>
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        {/* Progress bar */}
        <div className="container mb-8">
          <div className="flex items-center gap-3 mb-4">
            {steps.map((step, i) => (
              <div key={step.step} className="flex items-center gap-3 flex-1">
                <div
                  className={`flex items-center justify-center w-9 h-9 rounded-full text-xs font-bold transition-all duration-500 ${
                    i <= activeStep
                      ? "bg-accent text-accent-foreground scale-110"
                      : "bg-primary-foreground/10 text-primary-foreground/30"
                  }`}
                >
                  {step.step}
                </div>
                {i < steps.length - 1 && (
                  <div className="flex-1 h-px bg-primary-foreground/10 relative hidden md:block">
                    <motion.div
                      className="absolute inset-y-0 left-0 bg-accent"
                      style={{
                        width: i < activeStep ? "100%" : "0%",
                      }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Scrolling panels */}
        <div ref={scrollRef} className="flex-1 overflow-hidden">
          <motion.div className="flex h-full" style={{ x }}>
            {steps.map((step, i) => (
              <div
                key={step.step}
                className="min-w-full h-full px-4 md:px-0"
                style={{ width: `${100 / steps.length}%` }}
              >
                <div className="container h-full">
                  <div className="grid lg:grid-cols-2 gap-12 h-full items-center">
                    {/* Image */}
                    <motion.div
                      className="relative rounded-2xl overflow-hidden aspect-[16/10] shadow-2xl"
                      initial={{ opacity: 0.5, scale: 0.95 }}
                      animate={i === activeStep ? { opacity: 1, scale: 1 } : { opacity: 0.5, scale: 0.95 }}
                      transition={{ duration: 0.5 }}
                    >
                      <img
                        src={step.image}
                        alt={step.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      <div className="absolute bottom-6 left-6">
                        <span className="text-7xl font-display font-bold text-white/10">{step.step}</span>
                      </div>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={i === activeStep ? { opacity: 1, y: 0 } : { opacity: 0.3, y: 20 }}
                      transition={{ duration: 0.5 }}
                      className="lg:pl-8"
                    >
                      <span className="text-accent text-sm font-semibold tracking-widest uppercase mb-2 block">
                        Step {step.step}
                      </span>
                      <h3 className="text-3xl md:text-4xl font-display font-bold mb-6">
                        {step.title}
                      </h3>
                      <p className="text-primary-foreground/50 text-lg leading-relaxed mb-8 max-w-md">
                        {step.description}
                      </p>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                          <CheckCircle size={20} className="text-accent" />
                        </div>
                        <span className="text-sm text-primary-foreground/40">
                          {i < steps.length - 1
                            ? `Next: ${steps[i + 1].title}`
                            : "Your Dream Home Awaits"}
                        </span>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll hint */}
        <div className="container mt-6">
          <div className="flex items-center gap-2 text-primary-foreground/30 text-xs">
            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              ↓
            </motion.div>
            <span>Scroll to explore</span>
          </div>
        </div>
      </div>
    </div>
  );
};


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

      {/* Process - Horizontal Scroll Journey */}
      <section className="py-24 bg-foreground text-primary-foreground overflow-hidden">
        <div className="container mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-accent" />
              <span className="text-accent text-sm font-semibold tracking-widest uppercase">Our Process</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Your Construction Journey
            </h2>
            <p className="text-primary-foreground/50">
              From the first conversation to handing over the keys — here's how we bring your vision to life.
            </p>
          </motion.div>
        </div>

        <HorizontalScrollProcess steps={processSteps} />
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
