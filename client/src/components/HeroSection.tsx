import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Building, Award, Calendar } from "lucide-react";
import heroImage from "@assets/generated_images/Modern_architectural_building_hero_3893b7be.png";

export default function HeroSection() {
  const [typewriterText, setTypewriterText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const typewriterItems = [
    "Residential Design",
    "Commercial Architecture", 
    "Interior Solutions",
    "Construction Management"
  ];

  useEffect(() => {
    const currentItem = typewriterItems[currentIndex];
    let charIndex = 0;
    
    const typeInterval = setInterval(() => {
      if (charIndex < currentItem.length) {
        setTypewriterText(currentItem.substring(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % typewriterItems.length);
          setTypewriterText("");
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [currentIndex]);

  const stats = [
    { icon: Calendar, value: "10+", label: "Years" },
    { icon: Building, value: "50+", label: "Projects" },
    { icon: Users, value: "100+", label: "Clients" },
    { icon: Award, value: "MSME", label: "Certified" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Modern Architecture" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground mb-6">
            Designing Spaces that{" "}
            <span className="text-primary">Inspire</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-2">
            Since 2015
          </p>

          <div className="h-12 flex items-center justify-center mb-6">
            <span className="text-lg md:text-xl text-accent-foreground font-medium">
              {typewriterText}
              <span className="animate-pulse">|</span>
            </span>
          </div>

          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Creating spaces of tranquility, harmony, and individuality.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" data-testid="button-portfolio">
              Explore Portfolio
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="outline" size="lg" data-testid="button-meet-architect">
              Meet the Architect
            </Button>
          </div>

          {/* Animated Counters */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-card/80 backdrop-blur-md rounded-lg p-6 border border-card-border hover-elevate"
                data-testid={`stat-${stat.label.toLowerCase()}`}
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="font-condensed text-3xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}