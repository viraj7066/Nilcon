import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Building2, Palette, Wrench } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function ServicesPreview() {
  const services = [
    {
      icon: Home,
      title: "Residential",
      description: "Custom homes, apartments, and residential complexes designed for modern living.",
      features: ["Custom Home Design", "Apartment Planning", "Residential Complexes"]
    },
    {
      icon: Building2, 
      title: "Commercial",
      description: "Office buildings, retail spaces, and commercial complexes that drive business success.",
      features: ["Office Buildings", "Retail Spaces", "Commercial Complexes"]
    },
    {
      icon: Palette,
      title: "Interior Fit-Outs",
      description: "Complete interior construction and finishing solutions for residential and commercial spaces.",
      features: ["Space Planning", "Material Selection", "Finishing Works"]
    },
    {
      icon: Wrench,
      title: "Construction Management",
      description: "End-to-end project management ensuring quality, timeline, and budget adherence.",
      features: ["Project Planning", "Quality Control", "Site Supervision"]
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <ScrollReveal animation="fadeInUp">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive construction services tailored to bring your building vision to life.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {services.map((service, index) => (
            <ScrollReveal key={index} animation="fadeInUp" delay={index * 150}>
              <Card className="group hover-elevate h-full" data-testid={`service-${index}`}>
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4">
                  {service.description}
                </p>
                <ul className="text-sm text-muted-foreground space-y-1 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>• {feature}</li>
                  ))}
                </ul>
                <Button variant="outline" size="sm" className="w-full" data-testid={`button-learn-more-${index}`}>
                  Learn More
                </Button>
              </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal animation="scaleUp" delay={800}>
          <div className="text-center">
            <Button size="lg" data-testid="button-view-all-services">
              View All Services
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}