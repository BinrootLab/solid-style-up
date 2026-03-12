import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 md:py-32 bg-primary relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl" />

      <div className="container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground leading-tight mb-6">
            Ready to Start <br className="hidden md:block" />Your Project?
          </h2>
          <p className="text-primary-foreground/70 max-w-xl mx-auto mb-12 text-lg">
            Looking for the best construction company in Bangalore? We're here to bring your vision to life. Get a free consultation today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-primary-foreground text-primary font-semibold text-sm tracking-wide uppercase rounded-sm hover:bg-gold hover:text-gold-foreground transition-all duration-300"
            >
              <Phone size={18} />
              Get Free Consultation
            </a>
            <a
              href="https://wa.me/"
              className="inline-flex items-center justify-center gap-3 px-10 py-4 border border-primary-foreground/30 text-primary-foreground font-semibold text-sm tracking-wide uppercase rounded-sm hover:bg-primary-foreground/10 transition-all duration-300"
            >
              <MessageCircle size={18} />
              WhatsApp Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
