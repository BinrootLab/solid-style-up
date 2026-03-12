import { motion } from "framer-motion";
import aboutImg from "@/assets/about-interior.jpg";

const stats = [
  { value: "20+", label: "Years of Excellence" },
  { value: "500+", label: "Projects Delivered" },
  { value: "100%", label: "Client Satisfaction" },
];

const AboutPreview = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src={aboutImg}
              alt="Interior showcase"
              className="w-full h-[500px] object-cover rounded-sm"
            />
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary rounded-sm flex items-center justify-center">
              <div className="text-center text-primary-foreground">
                <p className="text-4xl font-display font-bold">20+</p>
                <p className="text-xs tracking-[0.2em] uppercase mt-1">Years</p>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-primary text-sm tracking-[0.3em] uppercase font-semibold mb-4">About BHUVi</p>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground leading-tight mb-6">
              Your Trusted Construction Partner in Bangalore
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              BHUVi Lifespaces traces its roots to 2005, when Mr. Srinivasaiah began building homes with a simple philosophy: "Quality over Quantity." He personally supervised every project, ensuring each home was built with care, precision, and pride.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Today, BHUVi Lifespaces stands as a brand that blends tradition with innovation, transparency, and uncompromising quality — carried forward by his son, Santosh Srinivasaiah.
            </p>

            <div className="flex gap-10 mb-10">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-display font-bold text-primary">{stat.value}</p>
                  <p className="text-xs text-muted-foreground tracking-wide uppercase mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              <a
                href="/about"
                className="px-7 py-3 bg-primary text-primary-foreground text-sm font-semibold tracking-wide uppercase rounded-sm hover:bg-accent transition-colors"
              >
                Learn More
              </a>
              <a
                href="/projects"
                className="px-7 py-3 border border-foreground/20 text-foreground text-sm font-semibold tracking-wide uppercase rounded-sm hover:bg-muted transition-colors"
              >
                View Our Work
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
