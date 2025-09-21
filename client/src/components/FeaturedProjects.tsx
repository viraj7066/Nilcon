import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, MapPin, Calendar } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import serenityImage from "@assets/generated_images/Serenity_Residences_project_f9c8c2c3.png";
import shreeImage from "@assets/generated_images/Shree_Complex_commercial_e68a0bd8.png";
import tranquilImage from "@assets/generated_images/Tranquil_Homes_villas_68945ba5.png";
import industrialImage from "@assets/generated_images/Industrial_Hub_facility_1f9f9d5c.png";

export default function FeaturedProjects() {
  const projects = [
    {
      id: 1,
      title: "Serenity Residences",
      category: "Residential",
      status: "Ongoing",
      location: "Dhule",
      year: "2024",
      image: serenityImage,
      description: "Modern residential complex with contemporary amenities and sustainable design."
    },
    {
      id: 2,
      title: "Shree Complex",
      category: "Commercial", 
      status: "Completed",
      location: "Dhule",
      year: "2023",
      image: shreeImage,
      description: "State-of-the-art commercial complex with modern office spaces."
    },
    {
      id: 3,
      title: "Tranquil Homes",
      category: "Villas",
      status: "Completed", 
      location: "Dhule",
      year: "2023",
      image: tranquilImage,
      description: "Luxury villa development with landscaped gardens and premium finishes."
    },
    {
      id: 4,
      title: "Industrial Hub",
      category: "Industrial",
      status: "Ongoing",
      location: "Dhule MIDC",
      year: "2024", 
      image: industrialImage,
      description: "Large-scale industrial facility with advanced infrastructure."
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <ScrollReveal animation="fadeInUp">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our portfolio of innovative architectural solutions that blend functionality with aesthetic excellence.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {projects.map((project, index) => (
            <ScrollReveal key={project.id} animation="fadeInUp" delay={index * 100}>
              <Card className="group hover-elevate overflow-hidden" data-testid={`project-${project.id}`}>
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-3 right-3">
                    <Badge variant={project.status === "Completed" ? "default" : "secondary"}>
                      {project.status}
                    </Badge>
                  </div>
                </div>
                
                <div className="p-4">
                  <CardHeader className="p-0 mb-3">
                    <CardTitle className="text-lg font-semibold text-foreground">
                      {project.title}
                    </CardTitle>
                    <Badge variant="outline" className="w-fit">
                      {project.category}
                    </Badge>
                  </CardHeader>
                  
                  <p className="text-sm text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {project.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {project.year}
                    </div>
                  </div>
                </div>
              </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal animation="scaleUp" delay={600}>
          <div className="text-center">
            <Button size="lg" data-testid="button-view-all-projects">
              View All Projects
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}