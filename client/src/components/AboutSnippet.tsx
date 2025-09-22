import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Building2, Users, Award, CheckCircle, ArrowRight, Calendar } from "lucide-react";
import architectImage from "@assets/generated_images/Founder.png";
import ScrollReveal from "@/components/ScrollReveal";

export default function AboutSnippet() {
  const achievements = [
    {
      icon: Award,
      title: "Government Certified",
      description: "MSME & BAI registered professional practice",
      detail: "UDYAM-MH-09-0004399 | MH/DHU/D/17/PAT"
    },
    {
      icon: Building2,
      title: "Proven Track Record",
      description: "50+ successful projects across Maharashtra",
      detail: "Residential • Commercial • Industrial"
    },
    {
      icon: Users,
      title: "Client-Centric Approach",
      description: "100+ satisfied clients and growing",
      detail: "Personalized service • Timely delivery"
    },
    {
      icon: CheckCircle,
      title: "Quality Assurance",
      description: "Comprehensive project management",
      detail: "From concept to completion"
    }
  ];

  const expertise = [
    "Architectural Design & Planning",
    "Construction Management",
    "Interior Design Solutions",
    "Government Approvals & Compliance",
    "Project Consultation & Advisory",
    "Site Supervision & Quality Control"
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <ScrollReveal animation="fadeInUp">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
              Professional Excellence Since 2015
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              DSK Architect stands as Maharashtra's trusted architectural practice, delivering comprehensive 
              design and construction solutions with unwavering commitment to quality and innovation.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Professional Profile */}
          <div className="lg:col-span-1">
            <Card className="overflow-hidden bg-card/80 backdrop-blur-md border border-card-border">
              <CardContent className="p-0">
                <div className="relative">
                  <img 
                    src={architectImage}
                    alt="Ar. Dipesh Sushil Khilosiya - Principal Architect"
                    className="w-full h-80 object-cover"
                    data-testid="img-architect"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
                </div>
                
                <div className="p-6">
                  <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                    Ar. Dipesh Sushil Khilosiya
                  </h3>
                  <p className="text-primary font-semibold mb-3">Principal Architect & Founder</p>
                  
                  <div className="space-y-2 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>Established June 10, 2015</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4" />
                      <span>10+ Years Experience</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    <Badge variant="secondary" className="mr-2">MSME: UDYAM-MH-09-0004399</Badge>
                    <Badge variant="secondary">BAI: MH/DHU/D/17/PAT</Badge>
                  </div>

                  <h4 className="font-semibold text-foreground mb-3">Areas of Expertise</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground mb-6">
                    {expertise.slice(0, 4).map((item, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <CheckCircle className="w-3 h-3 text-primary flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  
                  <Button className="w-full" data-testid="button-meet-architect">
                    <ArrowRight className="w-4 h-4 mr-2" />
                    Learn More About Our Founder
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Professional Achievements */}
          <div className="lg:col-span-2">
            <div className="grid md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="hover-elevate bg-card/80 backdrop-blur-md" data-testid={`achievement-${index}`}>
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <achievement.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg font-bold text-foreground">
                          {achievement.title}
                        </CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground mb-3">
                      {achievement.description}
                    </p>
                    <p className="text-sm font-medium text-primary">
                      {achievement.detail}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Call to Action */}
            <Card className="mt-8 bg-primary/5 border-primary/20">
              <CardContent className="p-8 text-center">
                <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                  Ready to Transform Your Space?
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Experience the DSK Architect difference. From initial consultation to project completion, 
                  we deliver architectural excellence that exceeds expectations.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" data-testid="button-start-project">
                    Start Your Project
                  </Button>
                  <Button variant="outline" size="lg" data-testid="button-view-portfolio">
                    View Our Portfolio
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}