import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full gradient-gold flex items-center justify-center">
                <span className="font-serif text-lg font-bold">ॐ</span>
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold">Srinivas TTD Seva</h3>
                <p className="text-xs text-primary-foreground/70">Consultations</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Helping devotees experience the divine blessings of Lord Venkateswara with trusted, hassle-free seva booking services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "Services", "Book Now", "Payment", "Contact"].map((link) => (
                <li key={link}>
                  <Link
                    to={link === "Home" ? "/" : link === "Book Now" ? "/booking" : `/${link.toLowerCase()}`}
                    className="text-sm text-primary-foreground/80 hover:text-gold-light transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sevas */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Popular Sevas</h4>
            <ul className="space-y-2">
              {["Kalyanotsavam", "Sahasra Deepalankara", "Suprabhatam", "Thomala Seva", "Archana"].map((seva) => (
                <li key={seva}>
                  <Link
                    to="/services"
                    className="text-sm text-primary-foreground/80 hover:text-gold-light transition-colors"
                  >
                    {seva}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 mt-1 text-gold-light" />
                <div>
                  <p className="text-sm font-medium">Garidepalli Srinivas</p>
                  <a href="tel:+917382806134" className="text-sm text-primary-foreground/80 hover:text-gold-light">
                    +91 73828 06134
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 mt-1 text-gold-light" />
                <a href="mailto:contact@srinvasttdseva.com" className="text-sm text-primary-foreground/80 hover:text-gold-light">
                  contact@srinivasttdseva.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-1 text-gold-light" />
                <p className="text-sm text-primary-foreground/80">
                  Tirupati, Andhra Pradesh, India
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-primary-foreground/60 flex items-center gap-1">
              Made with <Heart className="h-4 w-4 text-temple-red fill-temple-red" /> for devotees worldwide
            </p>
            <p className="text-sm text-primary-foreground/60">
              © {new Date().getFullYear()} Srinivas TTD Seva Consultations. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
