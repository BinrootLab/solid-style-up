import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  { text: "Very good team.", author: "Santosh", role: "Owner - Shanti Nivas" },
  { text: "Bhuvi Life Spaces handled our villa project very professionally. Regular updates, proper supervision, and timely completion made the entire process stress-free.", author: "Narayan", role: "Owner - Neralu Villas" },
  { text: "Good experience overall. The team is knowledgeable and ensures quality at every stage. Our commercial space was delivered as per the agreed timeline.", author: "Manoj S", role: "Owner" },
  { text: "Excellent construction quality and attention to detail. The project management was smooth and the team was always available for queries.", author: "Arun D", role: "Owner" },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 md:py-32" style={{ background: "var(--section-gradient)" }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase font-semibold mb-4">Testimonials</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">
            Trusted by Hundreds of Clients
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-background p-8 rounded-sm border border-border"
            >
              <Quote className="w-8 h-8 text-primary/30 mb-4" />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-foreground/80 leading-relaxed mb-6 italic">"{t.text}"</p>
              <div>
                <p className="font-display font-bold text-foreground">{t.author}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
