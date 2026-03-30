import { motion } from "framer-motion";

const partners = [
  { name: "UltraTech Cement", logo: "https://www.bhuvi.space/ultratechlogo.png" },
  { name: "JSW Steel", logo: "https://www.bhuvi.space/jsw.png" },
  { name: "ACC Cement", logo: "https://www.bhuvi.space/acc.png" },
  { name: "Jaquar", logo: "https://www.bhuvi.space/jaq.png" },
  { name: "Kajaria", logo: "https://www.bhuvi.space/kajaria.png" },
  { name: "Schneider Electric", logo: "https://www.bhuvi.space/Schneider.jpg" },
  { name: "Astral", logo: "https://www.bhuvi.space/astral.png" },
];

const PartnersSection = () => {
  return (
    <section className="py-16 bg-secondary border-t border-border">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="text-sm font-semibold text-muted-foreground tracking-widest uppercase">
            Our Trusted Partners
          </p>
        </motion.div>

        <div className="overflow-hidden">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
            className="flex items-center gap-16 w-max"
          >
            {[...partners, ...partners].map((p, i) => (
              <div
                key={`${p.name}-${i}`}
                className="flex-shrink-0 h-10 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              >
                <img src={p.logo} alt={p.name} className="h-full w-auto object-contain" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
