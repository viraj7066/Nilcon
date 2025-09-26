import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import serenityImage from "@assets/generated_images/sai.png";
import shreeImage from "@assets/generated_images/hori.png";
import tranquilImage from "@assets/generated_images/Tranquil_Homes_villas_68945ba5.png";
import industrialImage from "@assets/generated_images/Industrial_Hub_facility_1f9f9d5c.png";

type ProjectStatus = "Completed" | "Ongoing";

interface Project {
  id: string;
  title: string;
  category: string;
  status: ProjectStatus;
  location: string;
  year: string;
  image: string;
  description: string;
  amenities: string[];
}

export default function Projects() {
  const [typeFilter, setTypeFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");

  const projects: Project[] = [
    {
      id: "1",
      title: "Sai Park",
      category: "Residential",
      status: "Completed",
      location:
        "Plot No. 38, Badgujar Colony, In front of Panchvati Gas Agency, GTP Stop, Devpur, Dhule",
      year: "2023",
      image: serenityImage,
      description:
        "A modern residential complex designed with comfort and convenience in mind. Featuring spacious layouts and modern amenities for a contemporary lifestyle.",
      amenities: [
        "24x7 Security",
        "Power Backup",
        "Water Supply",
        "Landscaped Garden",
        "Children's Play Area",
        "Parking Facility",
      ],
    },
    {
      id: "2",
      title: "The Horizon",
      category: "Residential",
      status: "Ongoing",
      location: "Plot No. 4, Saraswati Colony, Devpur, Dhule",
      year: "2024",
      image: shreeImage,
      description:
        "An upcoming residential development offering premium living spaces with modern amenities and excellent connectivity.",
      amenities: [
        "Security System",
        "Power Backup",
        "Water Supply",
        "Landscaped Garden",
        "Parking Facility",
        "Lift Access",
      ],
    },
    {
      id: "3",
      title: "Central Business Hub",
      category: "Commercial",
      status: "Completed",
      location: "Main Road, MIDC Area, Dhule",
      year: "2022",
      image: tranquilImage,
      description:
        "A premium commercial complex designed to meet the needs of modern businesses. Featuring retail spaces, offices, and excellent connectivity.",
      amenities: [
        "High-Speed Elevators",
        "Power Backup",
        "Fire Safety System",
        "CCTV Surveillance",
        "Ample Parking",
        "Visitor Management",
      ],
    },
    {
      id: "4",
      title: "Logistics Center",
      category: "Industrial",
      status: "Ongoing",
      location: "Waghadi Road, MIDC Industrial Area, Dhule",
      year: "2024",
      image: industrialImage,
      description:
        "A state-of-the-art logistics and warehouse facility designed for efficient supply chain management and storage solutions.",
      amenities: [
        "24/7 Security",
        "Loading Docks",
        "Wide Roads",
        "Power Backup",
        "Fire Safety System",
        "Weighbridge Facility",
      ],
    },
  ];

  const typeFilters = ["All", "Residential", "Commercial", "Villas", "Industrial"];
  const statusFilters = ["All", "Ongoing", "Completed"];

  const filteredProjects = projects.filter((project) => {
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
              Discover our diverse collection of construction projects spanning
              residential, commercial, industrial, and infrastructure solutions.
            </p>
          </div>
        </section>

        {/* Filter Bar */}
        <section className="py-8 bg-background border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              <div className="flex flex-wrap gap-2">
                <span className="text-sm font-medium text-foreground mr-2">
                  Type:
                </span>
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
                <span className="text-sm font-medium text-foreground mr-2">
                  Status:
                </span>
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
                {filteredProjects.map((project) => (
                  <ProjectCard key={project.id} {...project} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">
                  No projects match the selected filters.
                </p>
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
              We have exciting new projects in development. Be the first to know
              when they're unveiled.
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
