import ServiceBlock from '../ServiceBlock'
import { Home } from 'lucide-react'

export default function ServiceBlockExample() {
  return (
    <div className="max-w-sm">
      <ServiceBlock
        icon={Home}
        title="Residential Architecture"
        description="Custom home designs that reflect your lifestyle and preferences while maximizing functionality and aesthetic appeal."
        features={[
          "Custom Home Design",
          "Apartment Planning", 
          "Residential Complexes",
          "Space Optimization",
          "Sustainable Solutions"
        ]}
        benefits={[
          "Personalized Design Approach",
          "Energy Efficient Solutions", 
          "Code Compliance Assurance",
          "Timeline Management",
          "Cost Optimization"
        ]}
      />
    </div>
  )
}