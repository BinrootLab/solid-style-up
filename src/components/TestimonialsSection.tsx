import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Very good team.",
    name: "Santosh",
    role: "Owner - Shanti Nivas",
  },
  {
    quote: "Bhuvi Life Spaces handled our villa project very professionally. Regular updates, proper supervision, and timely completion made the entire process stress-free.",
    name: "Narayan",
    role: "Owner - Neralu Villas",
  },
  {
    quote: "Good experience overall. The team is knowledgeable and ensures quality at every stage. Our commercial space was delivered as per the agreed timeline.",
    name: "Manoj S",
    role: "Owner",
  },
  {
    quote: "Excellent construction quality and attention to detail. The project management was smooth and the team was always available for queries.",
    name: "Arun D",
    role: "Owner",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-accent" />
            <span className="text-accent text-sm font-semibold tracking-widest uppercase">Testimonials</span>
            <div className="h-px w-8 bg-accent" />
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">Trusted by Hundreds of Clients</h2>
          <p className="text-muted-foreground">Real feedback from real clients who trusted us with their construction projects</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-background rounded-lg p-8 border border-border"
            >
              <Quote size={24} className="text-accent/30 mb-4" />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={14} className="fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground/80 leading-relaxed mb-6 italic">"{t.quote}"</p>
              <div>
                <p className="font-semibold text-foreground">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
