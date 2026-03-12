import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const projects = [
  { title: "Modern Residential Complex", location: "Bangalore", status: "Completed", image: project1 },
  { title: "Luxury Villa Development", location: "Bangalore", status: "In Progress", image: project2 },
  { title: "Commercial Office Space", location: "Bangalore", status: "Completed", image: project3 },
];

const FeaturedProjects = () => {
  return (
    <section className="py-24 md:py-32" style={{ background: "var(--section-gradient)" }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase font-semibold mb-4">Portfolio</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">
            Featured Projects
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            Discover our portfolio of exceptional construction projects that showcase our expertise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.a
              key={project.title}
              href="/projects"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group relative overflow-hidden rounded-sm cursor-pointer"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className={`inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase rounded-sm mb-3 ${
                  project.status === "Completed" ? "bg-primary/90 text-primary-foreground" : "bg-gold/90 text-gold-foreground"
                }`}>
                  {project.status}
                </span>
                <h3 className="text-xl font-display font-bold text-secondary-foreground mb-1">
                  {project.title}
                </h3>
                <p className="text-sm text-secondary-foreground/60">{project.location}</p>
              </div>
              <div className="absolute top-4 right-4 w-10 h-10 bg-primary-foreground/10 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight size={18} className="text-secondary-foreground" />
              </div>
            </motion.a>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/projects"
            className="inline-flex items-center gap-2 px-8 py-4 border border-foreground/20 text-foreground text-sm font-semibold tracking-wide uppercase rounded-sm hover:bg-foreground hover:text-background transition-all duration-300"
          >
            View All Projects
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
