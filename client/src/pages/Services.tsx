import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceBlock from "@/components/ServiceBlock";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Building2, Palette, Wrench, FileText, RotateCcw, Phone, Mail } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Home,
      title: "Residential Architecture",
      description: "Custom home designs that reflect your lifestyle and preferences while maximizing functionality and aesthetic appeal. From single-family homes to multi-unit residential complexes.",
      features: [
        "Custom Home Design & Planning",
        "Apartment & Condominium Design",
        "Residential Complex Development",
        "Space Optimization & Layout",
        "Sustainable Design Solutions",
        "Landscape Integration"
      ],
      benefits: [
        "Personalized Design Approach",
        "Energy Efficient Solutions",
        "Code Compliance Assurance",
        "Timely Project Delivery",
        "Cost Optimization",
        "Post-Construction Support"
      ]
    },
    {
      icon: Building2,
      title: "Commercial Architecture", 
      description: "Professional commercial spaces designed to enhance business operations and create lasting impressions. From office buildings to retail complexes that drive success.",
      features: [
        "Office Building Design",
        "Retail & Shopping Centers", 
        "Corporate Headquarters",
        "Mixed-Use Developments",
        "Industrial Facilities",
        "Hospitality Structures"
      ],
      benefits: [
        "Brand-Aligned Design",
        "Functional Space Planning",
        "Regulatory Compliance",
        "Future-Ready Infrastructure",
        "ROI Optimization",
        "Maintenance Efficiency"
      ]
    },
    {
      icon: Palette,
      title: "Interior Design",
      description: "Complete interior solutions that transform spaces into functional, beautiful environments. We create interiors that reflect your personality and enhance your lifestyle.",
      features: [
        "Space Planning & Layout",
        "Material & Finish Selection",
        "Custom Furniture Design",
        "Lighting Design Solutions",
        "Color Scheme Development",
        "Decor & Styling"
      ],
      benefits: [
        "Cohesive Design Vision",
        "Quality Material Selection",
        "Ergonomic Solutions",
        "Sustainable Choices",
        "Budget Management",
        "Styling Support"
      ]
    },
    {
      icon: Wrench,
      title: "Construction Management",
      description: "Comprehensive project management ensuring your architectural vision is executed flawlessly. From planning to completion, we oversee every detail.",
      features: [
        "Project Planning & Scheduling",
        "Quality Control & Assurance",
        "Site Supervision & Management",
        "Contractor Coordination",
        "Progress Monitoring",
        "Safety Compliance"
      ],
      benefits: [
        "Timely Project Completion",
        "Quality Assurance",
        "Cost Control",
        "Risk Management",
        "Regular Updates",
        "Post-Construction Support"
      ]
    },
    {
      icon: FileText,
      title: "Technical Consultancy",
      description: "Expert technical guidance for complex architectural challenges. We provide specialized consulting services to ensure optimal design solutions.",
      features: [
        "Structural Assessment",
        "Building Code Compliance",
        "Zoning & Planning Approvals",
        "Technical Documentation",
        "Design Review & Optimization",
        "Feasibility Studies"
      ],
      benefits: [
        "Expert Guidance",
        "Compliance Assurance",
        "Risk Mitigation",
        "Cost-Effective Solutions",
        "Technical Accuracy",
        "Professional Documentation"
      ]
    },
    {
      icon: RotateCcw,
      title: "Renovation & Additions",
      description: "Transform existing spaces with innovative renovation solutions. Whether updating a single room or complete property transformation, we deliver exceptional results.",
      features: [
        "Complete Home Renovations",
        "Room-Specific Updates",
        "Structural Modifications",
        "Accessibility Improvements",
        "Energy Efficiency Upgrades",
        "Historic Preservation"
      ],
      benefits: [
        "Enhanced Property Value",
        "Improved Functionality",
        "Modern Updates",
        "Energy Savings",
        "Personalization",
        "Minimal Disruption"
      ]
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
              Our Expertise in Design & Build
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive architectural and construction services delivered with precision, creativity, and unwavering commitment to excellence.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Services */}
              <div className="lg:col-span-2">
                <div className="grid md:grid-cols-2 gap-8">
                  {services.map((service, index) => (
                    <ServiceBlock key={index} {...service} />
                  ))}
                </div>
              </div>

              {/* Sticky Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-6">
                  <Card className="bg-primary/5 border-primary/20">
                    <CardContent className="p-6 text-center">
                      <h3 className="font-display text-xl font-bold text-foreground mb-4">
                        Ready to Start Your Project?
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        Let's discuss your vision and create something extraordinary together.
                      </p>
                      
                      <div className="space-y-3">
                        <Button size="lg" className="w-full" data-testid="button-call-now">
                          <Phone className="w-5 h-5 mr-2" />
                          Call Now: 9096939495
                        </Button>
                        
                        <Button variant="outline" size="lg" className="w-full" data-testid="button-book-consultation">
                          <Mail className="w-5 h-5 mr-2" />
                          Book Consultation
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h4 className="font-semibold text-foreground mb-4">Why Choose DSK Architect?</h4>
                      <ul className="space-y-3 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          MSME Certified & Government Recognized
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          BAI Registered Professional Services
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          10+ Years of Experience
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          50+ Successful Projects
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          100+ Satisfied Clients
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}