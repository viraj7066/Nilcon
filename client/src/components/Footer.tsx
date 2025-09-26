import { Link } from "wouter"; // keep only this
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import logoImage from "@assets/generated_images/Logo.png";

export default function Footer() {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  const services = [
    "Residential Construction",
    "Commercial Building",
    "Industrial Infrastructure",
    "Project Management",
    "Quality Control & Supervision",
    "Renovation & Expansion"
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  return (
    <footer className="bg-sidebar text-sidebar-foreground border-t border-sidebar-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Nilcon */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src={logoImage} alt="Nilcon Builders Logo" className="h-8 w-auto" />
              <h3 className="font-display font-bold text-lg">Nilcon Builders</h3>
            </div>
            
            <p className="text-sm text-sidebar-foreground/80 mb-4">
              Building excellence and creating lasting structures since 2014. 
              MSME certified and BAI registered construction company in Dhule, Maharashtra.
            </p>
            
            <div className="space-y-2">
              <Badge variant="secondary" className="mr-2">
                MSME: UDAYJ-MH-10-0004896
              </Badge>
              <Badge variant="secondary">
                BAI ID: MH/DHU/D/10/AAT
              </Badge>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sidebar-foreground mb-4">Quick Links</h4>
            <nav className="space-y-2">
              {quickLinks.map((link) => (
                <Link key={link.path} href={link.path}>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="h-auto p-0 text-sidebar-foreground/80 hover:text-sidebar-primary justify-start"
                    data-testid={`footer-link-${link.name.toLowerCase()}`}
                  >
                    {link.name}
                  </Button>
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-sidebar-foreground mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index} className="text-sm text-sidebar-foreground/80">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sidebar-foreground mb-4">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-sidebar-primary mt-0.5 flex-shrink-0" />
                <div className="text-sidebar-foreground/80">
                  3, Yashovallabh Shopping Complex,<br />
                  Rani Lakshmibai Road,<br />
                  Dhule
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-sidebar-primary" />
                <span className="text-sidebar-foreground/80">9404970032</span>
              </div>
              
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-sidebar-primary" />
                <span className="text-sidebar-foreground/80">info@nilconbuilders.com</span>
              </div>
              
              <div className="text-sidebar-foreground/80">
                <strong>Hours:</strong> Mon–Sat, 10am–7pm
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-2 mt-4">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-sidebar-foreground/60 hover:text-sidebar-primary"
                  data-testid={`social-${social.label.toLowerCase()}`}
                >
                  <social.icon className="w-4 h-4" />
                </Button>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-sidebar-border mt-8 pt-8 text-center text-sm text-sidebar-foreground/60">
          <p>© 2024 Nilcon Builders. All rights reserved. | Building excellence since 2015.</p>
        </div>
      </div>
    </footer>
  );
}
