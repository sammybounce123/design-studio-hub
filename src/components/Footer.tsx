import { motion } from "framer-motion";
import { Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container-narrow section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="font-serif text-3xl mb-6">DSR Interiors</h3>
            <p className="text-primary-foreground/70 max-w-md mb-8 leading-relaxed">
              Creating timeless, sophisticated interiors that reflect your
              unique personality and elevate everyday living. Let's transform
              your space together.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground hover:text-foreground transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground hover:text-foreground transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="label-refined text-primary-foreground/60 mb-6">
              Quick Links
            </p>
            <nav className="flex flex-col gap-3">
              {["Portfolio", "Services", "Testimonials", "Book Now"].map(
                (link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase().replace(" ", "")}`}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link}
                  </a>
                )
              )}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="label-refined text-primary-foreground/60 mb-6">
              Contact
            </p>
            <div className="space-y-4">
              <a
                href="mailto:hello@eliseinteriors.com"
                className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                <Mail className="w-5 h-5" />
                hello@eliseinteriors.com
              </a>
              <a
                href="tel:+12125551234"
                className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                <Phone className="w-5 h-5" />
                (212) 555-1234
              </a>
              <p className="flex items-start gap-3 text-primary-foreground/70">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
                123 Design Avenue
                <br />
                New York, NY 10001
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/50 text-sm">
            © {new Date().getFullYear()} DSR Interiors. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a
              href="#"
              className="text-primary-foreground/50 hover:text-primary-foreground transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-primary-foreground/50 hover:text-primary-foreground transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
