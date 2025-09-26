import { Button } from "@/components/ui/button";
import { Users, Building, Award, Calendar, Phone, Mail } from "lucide-react";
import heroImage from "@assets/generated_images/main_hero.png";

export default function HeroSection() {

  const stats = [
    { icon: Calendar, value: "10+", label: "Years of Excellence", sublabel: "Since 2015" },
    { icon: Building, value: "50+", label: "Projects Completed", sublabel: "Residential & Commercial" },
    { icon: Users, value: "100+", label: "Satisfied Clients", sublabel: "Across Maharashtra" },
    { icon: Award, value: "MSME", label: "Government Certified", sublabel: "& BAI Registered" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Nilcon Builders - Professional Construction Services" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-left">
              <div className="mb-6">
                <p className="text-primary font-semibold text-lg mb-2">NILCON BUILDERS</p>
                <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground leading-tight">
                  Construction Excellence 
                  <span className="text-primary"> Since 2014</span>
                </h1>
              </div>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                MSME certified and BAI registered construction company specializing in residential, 
                commercial, and industrial construction solutions across Maharashtra.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" data-testid="button-portfolio">
                  <Building className="w-5 h-5 mr-2" />
                  View Our Projects
                </Button>
                <Button variant="outline" size="lg" data-testid="button-consultation">
                  <Phone className="w-5 h-5 mr-2" />
                  Book Consultation
                </Button>
              </div>

              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <a href="tel:9096939495" className="flex items-center gap-2 hover:text-primary transition-colors" data-testid="link-phone">
                  <Phone className="w-4 h-4" />
                  <span>9096939495</span>
                </a>
                <a href="mailto:info@nilconbuilders.com" className="flex items-center gap-2 hover:text-primary transition-colors" data-testid="link-email">
                  <Mail className="w-4 h-4" />
                  <span>info@nilconbuilders.com</span>
                </a>
              </div>
            </div>

            {/* Right Content - Professional Info */}
            <div className="lg:text-center">
              <div className="bg-card/90 backdrop-blur-md border border-card-border rounded-xl p-8 text-center">
                <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                  Prashant Patil
                </h3>
                <p className="text-primary font-medium mb-4">Founder & Managing Director</p>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>• MSME Certified: UDAYJ-MH-10-0004896</p>
                  <p>• BAI Registered: MH/DHU/D/10/AAT</p>
                  <p>• 10+ Years Construction Experience</p>
                  <p>• 50+ Successful Projects Delivered</p>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Stats Bar */}
          <div className="mt-16">

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="bg-card/90 backdrop-blur-md rounded-lg p-6 border border-card-border hover-elevate text-center"
                  data-testid={`stat-${stat.label.toLowerCase().replaceAll(/\s+/g, '-')}`}
                >
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="font-condensed text-2xl md:text-3xl font-bold text-foreground mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium text-foreground mb-1">
                    {stat.label}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {stat.sublabel}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}