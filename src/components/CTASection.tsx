import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=60" alt="" className="w-full h-full object-cover" />
      </div>
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-primary-foreground/60 text-lg mb-10 leading-relaxed">
            Looking for the best construction company in Bangalore? As top residential builders, we're here to bring your construction vision to life. Get a free consultation and quote today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-semibold text-sm rounded-md hover:bg-accent/90 transition-colors"
            >
              Get Free Consultation <ArrowRight size={16} />
            </Link>
            <a
              href="https://wa.me/919741155118"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-primary-foreground/20 text-primary-foreground font-semibold text-sm rounded-md hover:bg-primary-foreground/10 transition-colors"
            >
              <Phone size={16} />
              WhatsApp Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
