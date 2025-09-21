import GalleryGrid from '../GalleryGrid'
import serenityImage from "@assets/generated_images/Serenity_Residences_project_f9c8c2c3.png";
import shreeImage from "@assets/generated_images/Shree_Complex_commercial_e68a0bd8.png";
import tranquilImage from "@assets/generated_images/Tranquil_Homes_villas_68945ba5.png";
import interiorImage from "@assets/generated_images/Interior_design_showcase_77b04218.png";

export default function GalleryGridExample() {
  //todo: remove mock functionality
  const mockItems = [
    {
      id: 1,
      title: "Serenity Residences Living Room",
      category: "Residential",
      image: serenityImage,
      description: "Modern living space with contemporary furniture and large windows providing natural light."
    },
    {
      id: 2,
      title: "Shree Complex Facade",
      category: "Commercial", 
      image: shreeImage,
      description: "Professional commercial building exterior with modern glass facade and clean architectural lines."
    },
    {
      id: 3,
      title: "Tranquil Homes Interior",
      category: "Interiors",
      image: interiorImage,
      description: "Elegant interior design featuring neutral colors with terracotta accents and premium finishes."
    },
    {
      id: 4,
      title: "Villa Exterior Design",
      category: "Residential",
      image: tranquilImage,
      description: "Beautiful villa exterior with landscaped gardens and contemporary architectural elements."
    }
  ];

  return <GalleryGrid items={mockItems} activeFilter="All" />
}