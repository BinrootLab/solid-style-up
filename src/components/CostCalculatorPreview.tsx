import { motion } from "framer-motion";
import { Calculator, Eye, IndianRupee } from "lucide-react";

const CostCalculatorPreview = () => {
  return (
    <section className="py-24 md:py-32 bg-secondary text-secondary-foreground">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-gold text-sm tracking-[0.3em] uppercase font-semibold mb-4">Cost Calculator</p>
            <h2 className="text-3xl md:text-5xl font-display font-bold leading-tight mb-6">
              Estimate Your Project Cost
            </h2>
            <p className="text-secondary-foreground/60 leading-relaxed mb-10">
              Get an instant estimate for your construction project. Our transparent pricing calculator helps you plan your budget with confidence.
            </p>

            <div className="space-y-6 mb-10">
              {[
                { icon: Eye, title: "Transparent Pricing", desc: "No hidden costs, complete transparency" },
                { icon: Calculator, title: "Instant Results", desc: "Get your estimate in seconds" },
                { icon: IndianRupee, title: "Accurate Estimates", desc: "Based on current Bangalore market rates" },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{item.title}</p>
                    <p className="text-xs text-secondary-foreground/50">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="/cost-calculator"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-gold-foreground text-sm font-semibold tracking-wide uppercase rounded-sm hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Calculate Now
            </a>
          </motion.div>

          {/* Mini calculator preview */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-secondary-foreground/5 border border-secondary-foreground/10 rounded-sm p-8"
          >
            <p className="font-display font-bold text-lg mb-6">Quick & Easy</p>
            <p className="text-sm text-secondary-foreground/50 mb-8">
              Enter your plot size, select floors and package type to get an instant cost estimate.
            </p>
            <div className="space-y-5">
              <div className="flex items-center justify-between p-4 bg-secondary-foreground/5 rounded-sm">
                <span className="text-sm text-secondary-foreground/60">Plot Size</span>
                <span className="font-display font-bold text-xl">810 <span className="text-xs font-body text-secondary-foreground/40">sq.ft</span></span>
              </div>
              <div className="flex items-center justify-between p-4 bg-secondary-foreground/5 rounded-sm">
                <span className="text-sm text-secondary-foreground/60">Floors</span>
                <span className="font-display font-bold text-xl">G+2</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-gold/10 border border-gold/20 rounded-sm">
                <span className="text-sm text-gold">Estimate</span>
                <span className="font-display font-bold text-2xl text-gold">₹</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CostCalculatorPreview;
