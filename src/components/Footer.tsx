import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground pt-16 pb-8">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <p className="text-2xl font-display font-bold tracking-tight mb-4">
              BHUV<span className="text-gold">i</span>
            </p>
            <p className="text-sm text-secondary-foreground/50 leading-relaxed">
              Building excellence since 2005. Your trusted construction partner in Bangalore.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "Services", "Projects", "About", "Contact"].map((link) => (
                <li key={link}>
                  <a href={`/${link.toLowerCase()}`} className="text-sm text-secondary-foreground/50 hover:text-gold transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-3">
              {["Residential Construction", "Commercial Construction", "Apartments & Villas", "Renovation"].map((s) => (
                <li key={s}>
                  <a href="/services" className="text-sm text-secondary-foreground/50 hover:text-gold transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-wider mb-4">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-secondary-foreground/50">
                <MapPin size={16} className="text-gold mt-0.5 flex-shrink-0" />
                Bangalore, Karnataka, India
              </li>
              <li className="flex items-center gap-3 text-sm text-secondary-foreground/50">
                <Phone size={16} className="text-gold flex-shrink-0" />
                Contact Us
              </li>
              <li className="flex items-center gap-3 text-sm text-secondary-foreground/50">
                <Mail size={16} className="text-gold flex-shrink-0" />
                info@bhuvi.space
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/10 pt-8 text-center">
          <p className="text-xs text-secondary-foreground/30">
            © 2025 BHUVi Lifespaces. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
