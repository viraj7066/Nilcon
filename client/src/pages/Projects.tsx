import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import serenityImage from "@assets/generated_images/Serenity_Residences_project_f9c8c2c3.png";
import shreeImage from "@assets/generated_images/Shree_Complex_commercial_e68a0bd8.png";
import tranquilImage from "@assets/generated_images/Tranquil_Homes_villas_68945ba5.png";
import industrialImage from "@assets/generated_images/Industrial_Hub_facility_1f9f9d5c.png";

export default function Projects() {
  const [typeFilter, setTypeFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");

  //todo: remove mock functionality
  const projects = [
    {
      title: "Serenity Residences",
      category: "Residential",
      status: "Ongoing" as const,
      location: "Dhule",
      year: "2024",
      image: serenityImage,
      description: "Modern residential complex with contemporary amenities and sustainable design features for modern living."
    },
    {
      title: "Shree Complex",
      category: "Commercial",
      status: "Completed" as const,
      location: "Dhule",
      year: "2023",
      image: shreeImage,
      description: "State-of-the-art commercial complex featuring modern office spaces and retail outlets."
    },
    {
      title: "Tranquil Homes",
      category: "Villas",
      status: "Completed" as const,
      location: "Dhule",
      year: "2023",
      image: tranquilImage,
      description: "Luxury villa development with landscaped gardens and premium finishes throughout."
    },
    {
      title: "Industrial Hub",
      category: "Industrial",
      status: "Ongoing" as const,
      location: "Dhule MIDC",
      year: "2024",
      image: industrialImage,
      description: "Large-scale industrial facility designed for modern manufacturing with advanced infrastructure."
    }
  ];

  const typeFilters = ["All", "Residential", "Commercial", "Villas", "Industrial"];
  const statusFilters = ["All", "Ongoing", "Completed"];

  const filteredProjects = projects.filter(project => {
    const typeMatch = typeFilter === "All" || project.category === typeFilter;
    const statusMatch = statusFilter === "All" || project.status === statusFilter;
    return typeMatch && statusMatch;
  });

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
              Our Portfolio
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover our diverse collection of architectural projects spanning residential, commercial, and interior design solutions.
            </p>
          </div>
        </section>

        {/* Filter Bar */}
        <section className="py-8 bg-background border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              <div className="flex flex-wrap gap-2">
                <span className="text-sm font-medium text-foreground mr-2">Type:</span>
                {typeFilters.map((filter) => (
                  <Button
                    key={filter}
                    variant={typeFilter === filter ? "default" : "outline"}
                    size="sm"
                    onClick={() => setTypeFilter(filter)}
                    data-testid={`filter-type-${filter.toLowerCase()}`}
                  >
                    {filter}
                  </Button>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-2">
                <span className="text-sm font-medium text-foreground mr-2">Status:</span>
                {statusFilters.map((filter) => (
                  <Button
                    key={filter}
                    variant={statusFilter === filter ? "default" : "outline"}
                    size="sm"
                    onClick={() => setStatusFilter(filter)}
                    data-testid={`filter-status-${filter.toLowerCase()}`}
                  >
                    {filter}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-display text-2xl font-bold text-foreground">
                Projects ({filteredProjects.length})
              </h2>
              <Badge variant="outline">
                {typeFilter} • {statusFilter}
              </Badge>
            </div>

            {filteredProjects.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project, index) => (
                  <ProjectCard key={index} {...project} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No projects match the selected filters.</p>
              </div>
            )}
          </div>
        </section>

        {/* Upcoming Projects Teaser */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <h3 className="font-display text-3xl font-bold text-foreground mb-4">
              More Projects Coming Soon
            </h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              We have exciting new projects in development. Be the first to know when they're unveiled.
            </p>
            <Button size="lg" data-testid="button-early-access">
              Get Early Access
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}