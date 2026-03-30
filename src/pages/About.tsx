import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Shield, Phone, Wrench, Users, Eye, FileText, Camera, BarChart3 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PartnersSection from "@/components/PartnersSection";

const values = [
  { icon: Users, title: "Dedicated Project Manager", description: "Personal oversight for every project" },
  { icon: Wrench, title: "Dedicated Site Engineer", description: "Expert technical supervision" },
  { icon: FileText, title: "Weekly Work Plan", description: "Structured execution roadmap" },
  { icon: Camera, title: "Daily Progress Updates", description: "Photos & videos of every milestone" },
  { icon: BarChart3, title: "Weekly Reports & Status Call", description: "Regular communication & updates" },
  { icon: Eye, title: "100% Transparent Execution", description: "Complete visibility into your project" },
];

const qualityChecks = [
  { title: "Structural Safety Tests", description: "Rigorous testing at every stage" },
  { title: "Material Quality Audits", description: "Verified materials from trusted suppliers" },
  { title: "Waterproofing Validations", description: "Comprehensive moisture protection" },
  { title: "Electrical & Plumbing Checks", description: "Precision installation verification" },
  { title: "Finishing & Fitment Inspections", description: "Perfect attention to detail" },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative pt-20 bg-primary">
        <div className="relative h-[50vh] min-h-[400px] flex items-center">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80"
              alt="About BHUVi"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>
          <div className="container relative z-10 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-px w-12 bg-accent" />
                <span className="text-accent text-sm font-semibold tracking-widest uppercase">Our Story</span>
                <div className="h-px w-12 bg-accent" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-4">
                The BHUVi Lifespaces Journey
              </h1>
              <p className="text-lg text-primary-foreground/60 max-w-xl mx-auto">
                A Legacy Built in 2005. A Vision Continued as BHUVi Lifespaces.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Legacy Story */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
                alt="BHUVi construction legacy"
                className="w-full aspect-[4/5] object-cover rounded-lg"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-accent" />
                <span className="text-accent text-sm font-semibold tracking-widest uppercase">Our Foundation</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                A Legacy Built in <span className="text-accent">2005</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                BHUVi Lifespaces was born on a construction site in 2005, when <strong className="text-foreground">Mr. Srinivasaiah</strong>, a passionate contractor, began building homes with a belief that still defines us today:
              </p>
              <blockquote className="border-l-4 border-accent pl-6 py-3 mb-6">
                <p className="text-lg font-display italic text-foreground">"Quality over Quantity — always."</p>
              </blockquote>
              <p className="text-muted-foreground leading-relaxed mb-6">
                He took on only the projects he could personally supervise, visiting every site himself, checking every detail, and ensuring every home was built with <strong className="text-foreground">pride, not pressure</strong>.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                What began as a one-man mission soon became a culture.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* New Generation */}
      <section className="py-24 bg-secondary">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-accent" />
                <span className="text-accent text-sm font-semibold tracking-widest uppercase">A New Generation</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                A New Name. A Continued Legacy.
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                As the years passed, that same dedication evolved into something larger — a vision carried forward by his son, <strong className="text-foreground">Santosh Srinivasaiah</strong>.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                With modern engineering expertise, technology-driven monitoring, and a mission to scale his father's legacy without ever diluting its values, Santosh transformed the family's construction practice into what is today known as <strong className="text-accent">BHUVi Lifespaces</strong> — a brand built on the foundation of tradition, and strengthened with innovation, transparency, and professionalism.
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div className="p-4 bg-background rounded-lg border border-border text-center">
                  <p className="text-sm font-semibold text-foreground">Modern Engineering</p>
                </div>
                <div className="p-4 bg-background rounded-lg border border-border text-center">
                  <p className="text-sm font-semibold text-foreground">Technology-Driven</p>
                </div>
                <div className="p-4 bg-background rounded-lg border border-border text-center">
                  <p className="text-sm font-semibold text-foreground">Scaled Legacy</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <img
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80"
                alt="BHUVi new generation"
                className="w-full aspect-[4/5] object-cover rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-14"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-accent" />
              <span className="text-accent text-sm font-semibold tracking-widest uppercase">Our Values</span>
              <div className="h-px w-8 bg-accent" />
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              How Our Values Shape Every Home We Build
            </h2>
            <p className="text-muted-foreground">What began as one man's promise is now our company culture.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-6 rounded-lg border border-border bg-background flex gap-4"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-accent/10 text-accent flex-shrink-0">
                  <v.icon size={22} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{v.title}</h3>
                  <p className="text-sm text-muted-foreground">{v.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-muted-foreground mt-10 max-w-2xl mx-auto italic"
          >
            Because we believe a home isn't built with cement and steel alone — it's built with <strong className="text-foreground">trust, transparency, and unwavering commitment</strong>.
          </motion.p>
        </div>
      </section>

      {/* Quality Checks */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-accent" />
                <span className="text-accent text-sm font-semibold tracking-widest uppercase">Quality Assurance</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                450+ Quality Checks — Because "Good Enough" Is Not Enough
              </h2>
              <p className="text-primary-foreground/60 leading-relaxed mb-8">
                Every stage of construction undergoes rigorous quality checks. We don't wait for problems to happen — we design them out.
              </p>
              <div className="space-y-4">
                {qualityChecks.map((check) => (
                  <div key={check.title} className="flex gap-3">
                    <CheckCircle size={18} className="text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-sm">{check.title}</p>
                      <p className="text-xs text-primary-foreground/50">{check.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80"
                alt="Quality inspection"
                className="w-full aspect-[4/5] object-cover rounded-lg"
              />
              <div className="absolute bottom-6 left-6 bg-accent text-accent-foreground p-5 rounded-lg">
                <span className="block text-4xl font-display font-bold">450+</span>
                <span className="text-sm font-medium">Quality Checks</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Warranty */}
      <section className="py-24 bg-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-accent" />
              <span className="text-accent text-sm font-semibold tracking-widest uppercase">Lifetime Support</span>
              <div className="h-px w-8 bg-accent" />
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              15-Year Warranty + Lifetime Assistance
            </h2>
            <p className="text-muted-foreground mb-10">We don't walk away after handing over the keys.</p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 rounded-lg border border-border bg-background text-center">
                <Shield size={32} className="text-accent mx-auto mb-4" />
                <h3 className="font-display font-bold text-2xl text-foreground mb-2">15 Years</h3>
                <p className="text-sm text-muted-foreground">Structural Warranty — industry best coverage</p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-background text-center">
                <Wrench size={32} className="text-accent mx-auto mb-4" />
                <h3 className="font-display font-bold text-2xl text-foreground mb-2">Lifetime</h3>
                <p className="text-sm text-muted-foreground">Maintenance Support — ongoing assistance</p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-background text-center">
                <Phone size={32} className="text-accent mx-auto mb-4" />
                <h3 className="font-display font-bold text-2xl text-foreground mb-2">Help Desks</h3>
                <p className="text-sm text-muted-foreground">For minor repairs, guidance, upgrades, and more</p>
              </div>
            </div>

            <p className="text-muted-foreground mt-8 italic">
              Because your home is our responsibility — <strong className="text-foreground">forever</strong>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Commitment */}
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
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Ready to Build Your Dream Home?
            </h2>
            <p className="text-primary-foreground/60 text-lg mb-10">
              Experience the BHUVi Lifespaces difference. Get in touch with us today to start your construction journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-semibold text-sm rounded-md hover:bg-accent/90 transition-colors"
              >
                Get Free Consultation <ArrowRight size={16} />
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-primary-foreground/20 text-primary-foreground font-semibold text-sm rounded-md hover:bg-primary-foreground/10 transition-colors"
              >
                View Our Projects
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <PartnersSection />
      <Footer />
    </div>
  );
};

export default AboutPage;
