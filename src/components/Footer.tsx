import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-16">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <Link to="/" className="text-2xl font-display font-bold tracking-tight">
              BHUV<span className="text-accent">i</span>
            </Link>
            <p className="mt-4 text-sm text-primary-foreground/50 leading-relaxed">
              Building excellence since 2005. Your trusted construction partner in Bangalore.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-widest uppercase mb-6 text-accent">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "Services", "Projects", "About", "Contact"].map((link) => (
                <li key={link}>
                  <Link
                    to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                    className="text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-widest uppercase mb-6 text-accent">Services</h4>
            <ul className="space-y-3">
              {["Residential Construction", "Commercial Construction", "Apartments & Villas", "Rental Units", "Renovation"].map((s) => (
                <li key={s}>
                  <Link to="/services" className="text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-widest uppercase mb-6 text-accent">Contact</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm text-primary-foreground/50">
                <Mail size={16} className="flex-shrink-0 text-accent mt-0.5" />
                <a href="mailto:bhuvilifespaces@gmail.com" className="hover:text-primary-foreground transition-colors">
                  bhuvilifespaces@gmail.com
                </a>
              </li>
              <li className="flex gap-3 text-sm text-primary-foreground/50">
                <Phone size={16} className="flex-shrink-0 text-accent mt-0.5" />
                <a href="tel:+919741155118" className="hover:text-primary-foreground transition-colors">
                  +91 97411 55118
                </a>
              </li>
              <li className="flex gap-3 text-sm text-primary-foreground/50">
                <MapPin size={16} className="flex-shrink-0 text-accent mt-0.5" />
                <span>Bhuvi Life Spaces, 8th main, AECS Layout, A block, Singasandra, Bangalore - 560068</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="container py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-primary-foreground/40">© {new Date().getFullYear()} BHUVi Lifespaces. All rights reserved.</p>
          <p className="text-xs text-primary-foreground/40">Monday - Saturday: 9:30 AM - 5:30 PM | Sunday: Appointment Based</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
