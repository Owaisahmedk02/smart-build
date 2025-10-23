import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-accent">Elite Realty</h3>
            <p className="text-white/80 mb-4">
              Your trusted partner in finding the perfect home. Excellence in real estate since 1998.
            </p>
            <div className="flex gap-3">
              <a href="#" className="bg-white/10 hover:bg-accent transition-smooth p-2 rounded-full">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-accent transition-smooth p-2 rounded-full">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-accent transition-smooth p-2 rounded-full">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-accent transition-smooth p-2 rounded-full">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/80 hover:text-accent transition-smooth">Home</a></li>
              <li><a href="#" className="text-white/80 hover:text-accent transition-smooth">About</a></li>
              <li><a href="#" className="text-white/80 hover:text-accent transition-smooth">Properties</a></li>
              <li><a href="#" className="text-white/80 hover:text-accent transition-smooth">Agents</a></li>
              <li><a href="#" className="text-white/80 hover:text-accent transition-smooth">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-accent mt-1" />
                <span className="text-white/80">123 Main Street, Suite 100<br />New York, NY 10001</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-accent" />
                <span className="text-white/80">(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-accent" />
                <span className="text-white/80">info@eliterealty.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-white/80 mb-4">
              Subscribe to get the latest property listings and market insights.
            </p>
            <div className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
              />
              <Button className="bg-accent hover:bg-accent-muted text-primary font-semibold transition-smooth">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-white/60">
          <p>&copy; {new Date().getFullYear()} Elite Realty. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
