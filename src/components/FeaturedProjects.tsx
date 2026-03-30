import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Modern Residential Complex",
    location: "Bangalore",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
  },
  {
    title: "Luxury Villa Development",
    location: "Bangalore",
    status: "In Progress",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
  },
  {
    title: "Commercial Office Space",
    location: "Bangalore",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
  },
];

const FeaturedProjects = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-accent" />
              <span className="text-accent text-sm font-semibold tracking-widest uppercase">Portfolio</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">Featured Projects</h2>
          </div>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent/80 transition-colors"
          >
            View All Projects <ArrowRight size={16} />
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-lg bg-background"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-muted-foreground">{project.location}</span>
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                    project.status === "Completed"
                      ? "bg-emerald-50 text-emerald-700"
                      : "bg-amber-50 text-amber-700"
                  }`}>
                    {project.status}
                  </span>
                </div>
                <h3 className="text-lg font-display font-semibold text-foreground">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
