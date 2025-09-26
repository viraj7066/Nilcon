import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, MapPin, Calendar } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import serenityImage from "@assets/generated_images/sai.png";
import shreeImage from "@assets/generated_images/hori.png";
import tranquilImage from "@assets/generated_images/Tranquil_Homes_villas_68945ba5.png";
import industrialImage from "@assets/generated_images/Industrial_Hub_facility_1f9f9d5c.png";

export default function FeaturedProjects() {
  const projects = [
    {
      id: 1,
      title: "Sai Park",
      category: "Residential",
      status: "Completed",
      location: "Plot No. 38, Badgujar Colony, In front of Panchvati Gas Agency, GTP Stop, Devpur, Dhule",
      year: "2023",
      image: serenityImage,
      description: "A modern residential complex designed with comfort and convenience in mind. Featuring spacious layouts and modern amenities for a contemporary lifestyle."
    },
    {
      id: 2,
      title: "The Horizon",
      category: "Residential",
      status: "Completed",
      location: "Plot No. 4, Saraswati Colony, Devpur, Dhule",
      year: "2024",
      image: shreeImage,
      description: "An upcoming residential development offering premium living spaces with modern amenities and excellent connectivity."
    },
    {
      id: 3,
      title: "Central Business Hub",
      category: "Commercial",
      status: "Ongoing",
      location: "Main Road, MIDC Area, Dhule",
      year: "2024",
      image: tranquilImage,
      description: "An upcoming residential development offering premium living spaces with modern amenities and excellent connectivity."
    },
    {
      id: 4,
      title: "Logistics Center",
      category: "Industrial",
      status: "Ongoing",
      location: "Waghadi Road, MIDC Industrial Area, Dhule",
      year: "2024",
      image: industrialImage,
      description: "An upcoming residential development offering premium living spaces with modern amenities and excellent connectivity."
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
              Explore our portfolio of innovative construction solutions that blend functionality with quality craftsmanship.
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