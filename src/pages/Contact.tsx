import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PartnersSection from "@/components/PartnersSection";

const projectTypes = [
  "Select a project type",
  "Residential",
  "Commercial",
  "Apartment and Villa",
  "Rental Units",
  "Project Management",
  "Renovation and Remodelling",
  "Other",
];

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    alert("Thank you! We'll get back to you shortly.");
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative pt-20 bg-primary">
        <div className="relative h-[50vh] min-h-[400px] flex items-center">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1920&q=80"
              alt="Contact us"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>
          <div className="container relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-12 bg-accent" />
                <span className="text-accent text-sm font-semibold tracking-widest uppercase">Contact Us</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-4">
                Get in Touch
              </h1>
              <p className="text-lg text-primary-foreground/60 max-w-xl">
                Have a project in mind? Contact us today for a free consultation and quote.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-accent" />
                <span className="text-accent text-sm font-semibold tracking-widest uppercase">Send Message</span>
              </div>
              <h2 className="text-3xl font-display font-bold text-foreground mb-8">Send us a Message</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Phone</label>
                    <div className="flex">
                      <span className="px-3 py-3 bg-secondary text-muted-foreground text-sm border border-r-0 border-border rounded-l-md">+91</span>
                      <input
                        type="tel"
                        placeholder="97411 55118"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-r-md border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Project Type</label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
                    >
                      {projectTypes.map((t) => (
                        <option key={t} value={t === "Select a project type" ? "" : t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Message *</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-accent text-accent-foreground font-semibold text-sm rounded-md hover:bg-accent/90 transition-colors"
                >
                  <Send size={16} />
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-accent" />
                <span className="text-accent text-sm font-semibold tracking-widest uppercase">Contact Info</span>
              </div>
              <h2 className="text-3xl font-display font-bold text-foreground mb-4">Contact Information</h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                We're here to help! Reach out to us through any of the following channels. Our team is ready to assist you with your construction needs.
              </p>

              <div className="space-y-6">
                <a
                  href="mailto:bhuvilifespaces@gmail.com"
                  className="flex gap-4 p-5 rounded-lg border border-border bg-background hover:border-accent/30 transition-colors"
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-accent/10 text-accent flex-shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">Email</p>
                    <p className="text-sm text-muted-foreground">bhuvilifespaces@gmail.com</p>
                  </div>
                </a>

                <a
                  href="tel:+919741155118"
                  className="flex gap-4 p-5 rounded-lg border border-border bg-background hover:border-accent/30 transition-colors"
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-accent/10 text-accent flex-shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">Phone</p>
                    <p className="text-sm text-muted-foreground">+91 97411 55118</p>
                  </div>
                </a>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=Bhuvi+Life+Spaces,+8th+main,+Aecs+layout,+A+block,+Singasandra,+Bangalore+560068"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-4 p-5 rounded-lg border border-border bg-background hover:border-accent/30 transition-colors"
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-accent/10 text-accent flex-shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">Address</p>
                    <p className="text-sm text-muted-foreground">Bhuvi Life Spaces, 8th main, AECS Layout, A block, Singasandra, Bangalore - 560068</p>
                  </div>
                </a>

                <div className="flex gap-4 p-5 rounded-lg border border-border bg-background">
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-accent/10 text-accent flex-shrink-0">
                    <Clock size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">Business Hours</p>
                    <p className="text-sm text-muted-foreground">Monday - Saturday: 9:30 AM - 5:30 PM</p>
                    <p className="text-sm text-muted-foreground">Sunday: Appointment Based</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp */}
              <a
                href="https://wa.me/919741155118"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-emerald-600 text-primary-foreground font-semibold text-sm rounded-md hover:bg-emerald-700 transition-colors"
              >
                <Phone size={16} />
                WhatsApp Us
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="bg-secondary py-16">
        <div className="container">
          <h3 className="text-2xl font-display font-bold text-foreground text-center mb-8">Find Us</h3>
          <div className="rounded-lg overflow-hidden border border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.0!2d77.62!3d12.89!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDUzJzI0LjAiTiA3N8KwMzcnMTIuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="BHUVi Lifespaces Location"
            />
          </div>
        </div>
      </section>

      <PartnersSection />
      <Footer />
    </div>
  );
};

export default ContactPage;
