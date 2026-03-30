import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const AboutPreview = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80"
                alt="BHUVi Lifespaces construction"
                className="w-full aspect-[4/5] object-cover rounded-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground p-6 rounded-lg">
                <span className="block text-4xl font-display font-bold">20+</span>
                <span className="text-sm font-medium">Years of Excellence</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-accent" />
              <span className="text-accent text-sm font-semibold tracking-widest uppercase">About Us</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6 leading-tight">
              Your Trusted Construction Partner in Bangalore
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              BHUVi Lifespaces traces its roots to 2005, when Mr. Srinivasaiah began building homes
              with a simple philosophy: "Quality over Quantity." He personally supervised every project,
              ensuring each home was built with care, precision, and pride.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Today, under the leadership of Santosh Srinivasaiah, BHUVi Lifespaces combines modern
              engineering with technology-driven monitoring — a brand that blends tradition with
              innovation, transparency, and uncompromising quality.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent/80 transition-colors"
              >
                Learn More About Us <ArrowRight size={16} />
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors"
              >
                View Our Work <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
