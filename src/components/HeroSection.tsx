import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import heroImg from "@/assets/hero-construction.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroImg} alt="Premium construction" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-6">
            Building Excellence Since 2005
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[0.95] tracking-tight mb-8">
            <span className="text-primary-foreground">Building Dreams,</span>
            <br />
            <span className="text-gold italic">Creating Legacies</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/70 max-w-xl mb-12 font-light leading-relaxed">
            We transform visions into reality with precision, quality, and unwavering commitment. Your trusted partner for exceptional construction projects across Bangalore.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/projects"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-semibold text-sm tracking-wide uppercase rounded-sm hover:bg-accent transition-all duration-300"
            >
              Explore Our Projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 border border-primary-foreground/30 text-primary-foreground font-semibold text-sm tracking-wide uppercase rounded-sm hover:bg-primary-foreground/10 transition-all duration-300"
            >
              Start Your Project
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-primary-foreground/50"
      >
        <ChevronDown size={28} />
      </motion.div>
    </section>
  );
};

export default HeroSection;
