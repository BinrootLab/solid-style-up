import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PartnersSection from "@/components/PartnersSection";

const sampleProjects = [
  {
    title: "Mr. Premnath - Rental unit",
    location: "HAL Layout",
    status: "Planning",
    expected: "2/28/2027",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
  },
  {
    title: "Modern Residential Complex",
    location: "Bangalore",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
  },
  {
    title: "Luxury Villa Development",
    location: "Bangalore",
    status: "In Progress",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
  },
  {
    title: "Commercial Office Space",
    location: "Bangalore",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
  },
  {
    title: "Premnath - Rental unit",
    location: "HAL Layout",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
  },
  {
    title: "Premium Apartment Complex",
    location: "HSR Layout",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=800&q=80",
  },
];

const filters = ["All Projects", "In Progress", "Completed"];

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState("All Projects");

  const filtered = activeFilter === "All Projects"
    ? sampleProjects
    : sampleProjects.filter((p) => p.status === activeFilter);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative pt-20 bg-primary">
        <div className="relative h-[50vh] min-h-[400px] flex items-center">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
              alt="Our projects"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary/80" />
          </div>
          <div className="container relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-12 bg-accent" />
                <span className="text-accent text-sm font-semibold tracking-widest uppercase">Portfolio</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-4">
                Our Projects
              </h1>
              <p className="text-lg text-primary-foreground/60 max-w-xl">
                Track the progress of all our construction projects in real-time. See your project come to life.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filters & Projects */}
      <section className="py-24 bg-background">
        <div className="container">
          {/* Filter tabs */}
          <div className="flex gap-2 mb-12">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-6 py-2.5 text-sm font-medium rounded-md transition-colors ${
                  activeFilter === f
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Project Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, i) => (
              <motion.div
                key={project.title + i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group bg-background border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className={`absolute top-4 right-4 text-xs font-semibold px-3 py-1.5 rounded-full ${
                    project.status === "Completed"
                      ? "bg-emerald-500 text-primary-foreground"
                      : project.status === "In Progress"
                      ? "bg-amber-500 text-primary-foreground"
                      : "bg-blue-500 text-primary-foreground"
                  }`}>
                    {project.status}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-display font-semibold text-foreground mb-1">{project.title}</h3>
                  <p className="text-sm text-muted-foreground">{project.location}</p>
                  {project.expected && (
                    <p className="text-xs text-muted-foreground mt-2">Expected: {project.expected}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <PartnersSection />
      <Footer />
    </div>
  );
};

export default ProjectsPage;
