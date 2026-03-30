import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, IndianRupee, Shield, Clock, FileText, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PartnersSection from "@/components/PartnersSection";

const packages = [
  { name: "Standard", price: 1650, description: "Quality basics for a strong home." },
  { name: "Premium", price: 1850, description: "Superior finish and modern amenities." },
  { name: "Elite", price: 2250, description: "High-end specs and premium materials." },
  { name: "Luxury", price: 2750, description: "Luxury finish and imported materials." },
];

const whyBhuvi = [
  { icon: CheckCircle, title: "No Hidden Costs", description: "Complete transparency in pricing" },
  { icon: Shield, title: "Price Protection", description: "Guaranteed fixed pricing" },
  { icon: IndianRupee, title: "Pay for What You Build", description: "Only pay for actual construction" },
  { icon: FileText, title: "Detailed BOQ", description: "Complete breakdown before starting" },
];

const CostCalculatorPage = () => {
  const [plotSize, setPlotSize] = useState(810);
  const [floors, setFloors] = useState(3);
  const [selectedPackage, setSelectedPackage] = useState(1);

  const totalArea = plotSize * floors;
  const estimatedCost = totalArea * packages[selectedPackage].price;

  const floorLabels = ["G (1 Floor)", "G + 1 (2 Floors)", "G + 2 (3 Floors)", "G + 3 (4 Floors)"];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative pt-20 bg-primary">
        <div className="relative h-[50vh] min-h-[400px] flex items-center">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80"
              alt="Cost calculator"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>
          <div className="container relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-12 bg-accent" />
                <span className="text-accent text-sm font-semibold tracking-widest uppercase">Cost Calculator</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-4">
                Estimate Your Construction Cost
              </h1>
              <p className="text-lg text-primary-foreground/60 max-w-xl">
                Transparent pricing based on current market rates in Bangalore. Get an instant estimate for your project.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Bhuvi + Calculator */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left - Why Bhuvi + Pricing */}
            <div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-px w-8 bg-accent" />
                  <span className="text-accent text-sm font-semibold tracking-widest uppercase">Why Choose Us</span>
                </div>
                <h2 className="text-3xl font-display font-bold text-foreground mb-8">Why Bhuvi?</h2>
              </motion.div>

              <div className="grid grid-cols-2 gap-4 mb-12">
                {whyBhuvi.map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="p-5 rounded-lg border border-border bg-background"
                  >
                    <item.icon size={20} className="text-accent mb-3" />
                    <h4 className="text-sm font-semibold text-foreground mb-1">{item.title}</h4>
                    <p className="text-xs text-muted-foreground">{item.description}</p>
                  </motion.div>
                ))}
              </div>

              {/* Package Pricing */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-px w-8 bg-accent" />
                  <span className="text-accent text-sm font-semibold tracking-widest uppercase">Pricing</span>
                </div>
                <h3 className="text-2xl font-display font-bold text-foreground mb-6">Package Pricing</h3>
              </motion.div>

              <div className="grid grid-cols-2 gap-4">
                {packages.map((pkg, i) => (
                  <div key={pkg.name} className="p-5 rounded-lg border border-border bg-background">
                    <h4 className="text-sm font-semibold text-foreground mb-1">{pkg.name}</h4>
                    <p className="text-xs text-muted-foreground mb-3">{pkg.description}</p>
                    <p className="text-2xl font-display font-bold text-accent">
                      ₹{pkg.price.toLocaleString()}
                      <span className="text-xs font-body font-normal text-muted-foreground ml-1">per sq.ft</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Calculator */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-primary text-primary-foreground rounded-lg p-8 sticky top-28"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-px w-8 bg-accent" />
                  <span className="text-accent text-sm font-semibold tracking-widest uppercase">Instant Estimator</span>
                </div>
                <h3 className="text-2xl font-display font-bold mb-2">Construction Cost Calculator</h3>
                <p className="text-sm text-primary-foreground/50 mb-8">Adjust the values to see the estimate.</p>

                {/* Plot Size */}
                <div className="mb-8">
                  <label className="text-sm text-primary-foreground/60 mb-3 block">Plot Size (sq.ft)</label>
                  <input
                    type="range"
                    min={500}
                    max={5000}
                    step={10}
                    value={plotSize}
                    onChange={(e) => setPlotSize(Number(e.target.value))}
                    className="w-full accent-accent"
                  />
                  <p className="text-3xl font-display font-bold mt-2">
                    {plotSize.toLocaleString()} <span className="text-sm font-body font-normal text-primary-foreground/50">sq.ft</span>
                  </p>
                </div>

                {/* Floors */}
                <div className="mb-8">
                  <label className="text-sm text-primary-foreground/60 mb-3 block">Number of Floors</label>
                  <input
                    type="range"
                    min={1}
                    max={4}
                    step={1}
                    value={floors}
                    onChange={(e) => setFloors(Number(e.target.value))}
                    className="w-full accent-accent"
                  />
                  <p className="text-3xl font-display font-bold mt-2">{floorLabels[floors - 1]}</p>
                </div>

                {/* Package Selection */}
                <div className="mb-8">
                  <label className="text-sm text-primary-foreground/60 mb-3 block">Package Type</label>
                  <div className="grid grid-cols-2 gap-3">
                    {packages.map((pkg, i) => (
                      <button
                        key={pkg.name}
                        onClick={() => setSelectedPackage(i)}
                        className={`p-3 rounded-md text-left text-sm transition-all ${
                          selectedPackage === i
                            ? "bg-accent text-accent-foreground"
                            : "bg-primary-foreground/10 text-primary-foreground/70 hover:bg-primary-foreground/15"
                        }`}
                      >
                        <p className="font-semibold">{pkg.name}</p>
                        <p className="text-xs opacity-70">₹{pkg.price}/sq.ft</p>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Result */}
                <div className="border-t border-primary-foreground/10 pt-6">
                  <p className="text-sm text-primary-foreground/50 mb-2">Estimated Total Cost</p>
                  <p className="text-4xl font-display font-bold text-accent mb-1">
                    ₹{estimatedCost.toLocaleString("en-IN")}
                  </p>
                  <p className="text-xs text-primary-foreground/40 mb-6">
                    Based on {totalArea.toLocaleString()} sq.ft total built-up area
                  </p>
                  <Link
                    to="/contact"
                    className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-semibold text-sm rounded-md hover:bg-accent/90 transition-colors"
                  >
                    Get Detailed Quote <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-10">
              Zero Cost Overruns. Guaranteed Timeline.
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-left p-6 rounded-lg bg-primary-foreground/5 border border-primary-foreground/10">
                <p className="text-2xl mb-3">💰</p>
                <h3 className="text-lg font-display font-semibold mb-2">Final Cost. Fixed. Transparent.</h3>
                <p className="text-sm text-primary-foreground/60 leading-relaxed">
                  Most builders say "approximate cost". We say <strong>final cost</strong>. Fixed. Transparent.
                </p>
              </div>
              <div className="text-left p-6 rounded-lg bg-primary-foreground/5 border border-primary-foreground/10">
                <p className="text-2xl mb-3">⏰</p>
                <h3 className="text-lg font-display font-semibold mb-2">We Pay the Penalty</h3>
                <p className="text-sm text-primary-foreground/60 leading-relaxed">
                  If the project is delayed from our side, <strong>we pay the penalty — not you</strong>. This is our commitment, our culture, and our differentiator.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <PartnersSection />
      <Footer />
    </div>
  );
};

export default CostCalculatorPage;
