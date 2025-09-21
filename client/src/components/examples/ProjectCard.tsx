import ProjectCard from '../ProjectCard'
import serenityImage from "@assets/generated_images/Serenity_Residences_project_f9c8c2c3.png";

export default function ProjectCardExample() {
  return (
    <div className="max-w-sm">
      <ProjectCard
        title="Serenity Residences"
        category="Residential"
        status="Ongoing"
        location="Dhule"
        year="2024"
        image={serenityImage}
        description="Modern residential complex with contemporary amenities and sustainable design features."
      />
    </div>
  )
}