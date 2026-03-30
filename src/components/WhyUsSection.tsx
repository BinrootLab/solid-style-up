import { motion } from "framer-motion";
import { Shield, Cpu, CheckCircle, Eye, Users, Clock } from "lucide-react";

const differentiators = [
  { icon: Shield, title: "Safety First", description: "The most important thing we do every day is prioritize safety on every project." },
  { icon: Cpu, title: "Advanced Technology", description: "Fully integrated technology and innovation for better project outcomes." },
  { icon: CheckCircle, title: "Quality Assurance", description: "Rigorous quality checks and standards at every stage of construction." },
  { icon: Eye, title: "Transparent Tracking", description: "Real-time project updates and complete transparency throughout the journey." },
  { icon: Users, title: "Expert Team", description: "Skilled professionals with years of experience delivering exceptional results." },
  { icon: Clock, title: "Timely Delivery", description: "Commitment to completing projects on schedule without compromising quality." },
];

const WhyUsSection = () => {
  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-accent" />
            <span className="text-accent text-sm font-semibold tracking-widest uppercase">Why Choose Us</span>
            <div className="h-px w-8 bg-accent" />
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Excellence in Every Detail</h2>
          <p className="text-primary-foreground/60">What sets us apart in the construction industry</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentiators.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex gap-4"
            >
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-accent/15 text-accent">
                <item.icon size={22} />
              </div>
              <div>
                <h3 className="text-lg font-display font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-primary-foreground/60 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
