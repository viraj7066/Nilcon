import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function PhilosophyHighlight() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <ScrollReveal animation="scaleUp">
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10 border-primary/20">
          <CardContent className="p-8 md:p-12 text-center">
            <Quote className="w-12 h-12 text-primary mx-auto mb-6" />
            <blockquote className="font-display text-2xl md:text-3xl font-medium text-foreground mb-6 leading-relaxed">
              "At Nilcon Builders, we build with quality, innovation, and client satisfaction 
              at the core of every project."
            </blockquote>
            <div className="text-muted-foreground">
              <p className="font-semibold">Prashant Patil</p>
              <p className="text-sm">Founder & Managing Director</p>
            </div>
          </CardContent>
          </Card>
        </ScrollReveal>
      </div>
    </section>
  );
}