import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Calculator, IndianRupee, Clock } from "lucide-react";

const CostCalculatorPreview = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-accent" />
              <span className="text-accent text-sm font-semibold tracking-widest uppercase">Cost Calculator</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              Estimate Your Project Cost
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Get an instant estimate for your construction project. Our transparent pricing calculator helps you plan your budget with confidence.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-accent/10 text-accent flex-shrink-0">
                  <IndianRupee size={18} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Transparent Pricing</p>
                  <p className="text-xs text-muted-foreground">No hidden costs, complete transparency in pricing</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-accent/10 text-accent flex-shrink-0">
                  <Clock size={18} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Instant Results</p>
                  <p className="text-xs text-muted-foreground">Get your estimate in seconds</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-accent/10 text-accent flex-shrink-0">
                  <Calculator size={18} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Accurate Estimates</p>
                  <p className="text-xs text-muted-foreground">Based on current market rates in Bangalore</p>
                </div>
              </div>
            </div>

            <Link
              to="/cost-calculator"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-accent text-accent-foreground font-semibold text-sm rounded-md hover:bg-accent/90 transition-colors"
            >
              Calculate Now <ArrowRight size={16} />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-primary text-primary-foreground rounded-lg p-8"
          >
            <p className="text-sm font-semibold text-accent mb-6 tracking-widest uppercase">Quick Estimate</p>
            <div className="space-y-6">
              <div className="flex justify-between items-center border-b border-primary-foreground/10 pb-4">
                <span className="text-primary-foreground/60 text-sm">Plot Size</span>
                <span className="text-2xl font-display font-bold">810 <span className="text-sm font-body font-normal text-primary-foreground/50">sq.ft</span></span>
              </div>
              <div className="flex justify-between items-center border-b border-primary-foreground/10 pb-4">
                <span className="text-primary-foreground/60 text-sm">Floors</span>
                <span className="text-2xl font-display font-bold">G+2</span>
              </div>
              <div className="flex justify-between items-center border-b border-primary-foreground/10 pb-4">
                <span className="text-primary-foreground/60 text-sm">Package</span>
                <span className="text-lg font-semibold">Premium</span>
              </div>
              <div className="pt-2">
                <span className="text-primary-foreground/60 text-sm block mb-2">Estimated Cost</span>
                <span className="text-3xl font-display font-bold text-accent">₹45,00,000*</span>
                <p className="text-xs text-primary-foreground/40 mt-2">*Approximate estimate. Final cost after site assessment.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CostCalculatorPreview;
