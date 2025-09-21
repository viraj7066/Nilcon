import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Palette, Eye, Wrench, Award } from "lucide-react";
import architectImage from "@assets/generated_images/Architect_professional_headshot_b6b90c26.png";

export default function AboutSnippet() {
  const values = [
    {
      icon: Palette,
      title: "Harmonious Designs",
      description: "Creating perfect balance in every space"
    },
    {
      icon: Eye,
      title: "Transparent Processes", 
      description: "Open communication throughout the project"
    },
    {
      icon: Wrench,
      title: "Customized Solutions",
      description: "Tailored approaches for unique requirements"
    },
    {
      icon: Award,
      title: "Govt. Recognized Expertise",
      description: "MSME certified and BAI registered"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Architect Image */}
          <div className="relative">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <img 
                  src={architectImage}
                  alt="Ar. Dipesh Sushil Khiloriya"
                  className="w-full h-[500px] object-cover"
                  data-testid="img-architect"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-6">
                  <h3 className="font-display text-2xl font-bold text-foreground mb-1">
                    Ar. Dipesh Sushil Khiloriya
                  </h3>
                  <p className="text-muted-foreground">Principal Architect</p>
                  <div className="flex gap-2 mt-3">
                    <Badge variant="secondary">MSME Certified</Badge>
                    <Badge variant="secondary">BAI Registered</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Values */}
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Since our founding on June 10, 2015, DSK Architect has been committed to excellence 
              in architectural design and construction management.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="hover-elevate" data-testid={`value-${index}`}>
                  <CardContent className="p-6">
                    <value.icon className="w-8 h-8 text-primary mb-4" />
                    <h3 className="font-semibold text-foreground mb-2">
                      {value.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}