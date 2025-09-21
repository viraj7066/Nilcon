import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  //todo: remove mock functionality
  const testimonials = [
    {
      name: "Rajesh Patil",
      role: "Homeowner",
      project: "Serenity Residences",
      rating: 5,
      quote: "DSK Architect transformed our vision into reality. The attention to detail and professional approach exceeded our expectations.",
      avatar: "RP"
    },
    {
      name: "Priya Sharma", 
      role: "Business Owner",
      project: "Shree Complex",
      rating: 5,
      quote: "The commercial space designed by DSK team has significantly improved our business operations. Highly recommended!",
      avatar: "PS"
    },
    {
      name: "Amit Deshmukh",
      role: "Property Developer", 
      project: "Tranquil Homes",
      rating: 5,
      quote: "Working with DSK Architect was a pleasure. Their innovative designs and timely execution made our project a huge success.",
      avatar: "AD"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from satisfied clients who have experienced our commitment to architectural excellence.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="hover-elevate">
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-8">
                <div className="flex justify-center mb-4">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-primary fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-xl md:text-2xl font-medium text-foreground mb-6 leading-relaxed">
                  "{currentTestimonial.quote}"
                </blockquote>
                
                <div className="flex items-center justify-center space-x-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src="" alt={currentTestimonial.name} />
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {currentTestimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div className="text-left">
                    <p className="font-semibold text-foreground">{currentTestimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{currentTestimonial.role}</p>
                    <p className="text-sm text-accent-foreground">{currentTestimonial.project}</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={prevTestimonial}
                  data-testid="button-prev-testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>
                
                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentIndex ? "bg-primary" : "bg-muted-foreground/30"
                      }`}
                      onClick={() => setCurrentIndex(index)}
                      data-testid={`testimonial-dot-${index}`}
                    />
                  ))}
                </div>
                
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={nextTestimonial}
                  data-testid="button-next-testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}