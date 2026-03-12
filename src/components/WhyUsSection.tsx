import { motion } from "framer-motion";
import { ShieldCheck, Cpu, BadgeCheck, Eye, Users, Clock } from "lucide-react";

const features = [
  { icon: ShieldCheck, title: "Safety First", desc: "We prioritize safety on every project, every day." },
  { icon: Cpu, title: "Advanced Technology", desc: "Fully integrated technology for better project outcomes." },
  { icon: BadgeCheck, title: "Quality Assurance", desc: "Rigorous quality checks at every stage of construction." },
  { icon: Eye, title: "Transparent Tracking", desc: "Real-time updates and complete transparency throughout." },
  { icon: Users, title: "Expert Team", desc: "Skilled professionals with years of exceptional experience." },
  { icon: Clock, title: "Timely Delivery", desc: "On schedule without compromising quality." },
];

const WhyUsSection = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase font-semibold mb-4">Why BHUVi</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">
            Excellence in Every Detail
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-5"
            >
              <div className="flex-shrink-0 w-14 h-14 rounded-sm bg-primary/10 flex items-center justify-center">
                <f.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-lg font-display font-bold text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
