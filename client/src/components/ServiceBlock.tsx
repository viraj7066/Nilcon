import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface ServiceBlockProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  benefits: string[];
}

export default function ServiceBlock({ 
  icon: Icon, 
  title, 
  description, 
  features, 
  benefits 
}: ServiceBlockProps) {
  return (
    <Card className="hover-elevate h-full">
      <CardHeader className="pb-4">
        <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
          <Icon className="w-8 h-8 text-primary" />
        </div>
        <CardTitle className="text-2xl font-bold text-foreground">
          {title}
        </CardTitle>
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <div>
          <h4 className="font-semibold text-foreground mb-3">What We Offer:</h4>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="text-muted-foreground text-sm flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="font-semibold text-foreground mb-3">Benefits:</h4>
          <ul className="space-y-2">
            {benefits.map((benefit, index) => (
              <li key={index} className="text-muted-foreground text-sm flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                {benefit}
              </li>
            ))}
          </ul>
        </div>
        
        <Button className="w-full" data-testid="button-get-quote">
          Get Quote
        </Button>
      </CardContent>
    </Card>
  );
}