import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-primary overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80"
          alt="Premium modern home interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20" />
      </div>

      <div className="container relative z-10 pt-20">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="h-px w-12 bg-accent" />
            <span className="text-accent text-sm font-semibold tracking-widest uppercase">
              Building Excellence Since 2005
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-primary-foreground leading-[1.1] mb-6"
          >
            Building Dreams,{" "}
            <span className="italic text-accent">Creating Legacies</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-primary-foreground/70 max-w-lg mb-10 leading-relaxed"
          >
            We transform visions into reality with precision, quality, and unwavering commitment.
            Your trusted partner for exceptional construction projects across Bangalore.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              to="/projects"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-semibold text-sm rounded-md hover:bg-accent/90 transition-colors"
            >
              Explore Our Projects
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-primary-foreground/30 text-primary-foreground font-semibold text-sm rounded-md hover:bg-primary-foreground/10 transition-colors"
            >
              Start Your Project
            </Link>
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown size={24} className="text-primary-foreground/50" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
