import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GalleryGrid from "@/components/GalleryGrid";
import { Button } from "@/components/ui/button";
import serenityImage from "@assets/generated_images/Serenity_Residences_project_f9c8c2c3.png";
import shreeImage from "@assets/generated_images/Shree_Complex_commercial_e68a0bd8.png";
import tranquilImage from "@assets/generated_images/Tranquil_Homes_villas_68945ba5.png";
import industrialImage from "@assets/generated_images/Industrial_Hub_facility_1f9f9d5c.png";
import interiorImage from "@assets/generated_images/Interior_design_showcase_77b04218.png";
import officeImage from "@assets/generated_images/Office_interior_space_336ea015.png";

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Residential", "Commercial", "Interiors", "Renovation", "Industrial"];

  //todo: remove mock functionality
  const galleryItems = [
    {
      id: 1,
      title: "Serenity Residences Living Room",
      category: "Residential",
      image: serenityImage,
      description: "Modern living space featuring contemporary furniture, large windows, and natural lighting creating a warm and inviting atmosphere."
    },
    {
      id: 2,
      title: "Shree Complex Facade",
      category: "Commercial",
      image: shreeImage,
      description: "Professional commercial building exterior showcasing modern glass facade with clean architectural lines and sophisticated design elements."
    },
    {
      id: 3,
      title: "Luxury Villa Interior",
      category: "Interiors",
      image: interiorImage,
      description: "Elegant interior design featuring neutral color palette with terracotta accents, premium finishes, and carefully curated furnishings."
    },
    {
      id: 4,
      title: "Villa Exterior Design",
      category: "Residential",
      image: tranquilImage,
      description: "Beautiful villa exterior with landscaped gardens, contemporary architectural elements, and seamless indoor-outdoor integration."
    },
    {
      id: 5,
      title: "Industrial Complex",
      category: "Industrial",
      image: industrialImage,
      description: "Large-scale industrial facility featuring functional design, advanced infrastructure, and efficient space utilization for modern manufacturing."
    },
    {
      id: 6,
      title: "Modern Office Space",
      category: "Commercial",
      image: officeImage,
      description: "Contemporary office interior with collaborative workspaces, natural lighting, and modern amenities designed for productivity and comfort."
    },
    {
      id: 7,
      title: "Residential Renovation",
      category: "Renovation",
      image: tranquilImage,
      description: "Complete home transformation showcasing before and after results of our comprehensive renovation and modernization services."
    },
    {
      id: 8,
      title: "Commercial Interior",
      category: "Interiors",
      image: officeImage,
      description: "Sophisticated commercial interior design balancing functionality with aesthetic appeal, creating inspiring work environments."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
              Our Construction Projects
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our construction projects—crafted with precision and expertise to bring building visions to life.
            </p>
          </div>
        </section>

        {/* Filter Categories */}
        <section className="py-8 bg-background border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-2 justify-center">
              {filters.map((filter) => (
                <Button
                  key={filter}
                  variant={activeFilter === filter ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveFilter(filter)}
                  data-testid={`filter-${filter.toLowerCase()}`}
                >
                  {filter}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <GalleryGrid items={galleryItems} activeFilter={activeFilter} />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}