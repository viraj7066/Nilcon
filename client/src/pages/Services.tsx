import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceBlock from "@/components/ServiceBlock";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Building2, Factory, Wrench, FileText, RotateCcw, Phone, Mail, CheckCircle } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Home,
      title: "Residential Construction",
      description: "Custom home construction that reflects your lifestyle and preferences while ensuring structural integrity and aesthetic appeal. From single-family homes to multi-unit residential complexes.",
      features: [
        "New Home Construction",
        "Apartment & Housing Complexes",
        "Villa Construction",
        "Floor Extension Services",
        "Sustainable Building Solutions",
        "Interior Finishing Works"
      ],
      benefits: [
        "Personalized Approach to Construction",
        "Energy Efficient Building Methods",
        "Structural Safety Compliance",
        "Timely Project Completion",
        "Transparent Cost Management",
        "Post-Construction Support"
      ]
    },
    {
      icon: Building2,
      title: "Commercial Building", 
      description: "Professional commercial construction services that enhance business operations and create lasting value. From office buildings to retail complexes designed for success.",
      features: [
        "Office Building Construction",
        "Retail & Shopping Centers", 
        "Corporate Headquarters",
        "Mixed-Use Developments",
        "Hospitality Structures",
        "Educational Facilities"
      ],
      benefits: [
        "Business-Oriented Building Solutions",
        "Functional Space Optimization",
        "Regulatory Compliance",
        "Future-Proof Infrastructure",
        "Business Value Enhancement",
        "Low-Maintenance Construction"
      ]
    },
    {
      icon: Factory,
      title: "Industrial Infrastructure",
      description: "Robust industrial construction that meets specialized operational requirements. From manufacturing facilities to warehouses designed for efficiency and safety.",
      features: [
        "Factory & Workshop Construction",
        "Warehouse & Storage Facilities",
        "Industrial Sheds",
        "Logistics Centers",
        "Specialized Industrial Structures",
        "Loading Bay & Dock Construction"
      ],
      benefits: [
        "Industry-Specific Solutions",
        "Structural Strength & Durability",
        "Safety Standards Compliance",
        "Operational Efficiency Focus",
        "Heavy Load Capacity",
        "Long-Term Reliability"
      ]
    },
    {
      icon: Wrench,
      title: "Project Management",
      description: "Comprehensive project management ensuring your construction vision is executed flawlessly. From planning to completion, we oversee every detail of your project.",
      features: [
        "Detailed Project Planning & Scheduling",
        "Quality Control & Assurance",
        "Site Supervision & Management",
        "Contractor Coordination",
        "Progress Monitoring & Reporting",
        "Safety Compliance Management"
      ],
      benefits: [
        "On-Time Project Delivery",
        "Superior Quality Construction",
        "Effective Cost Control",
        "Risk Mitigation Strategies",
        "Regular Client Updates",
        "Smooth Project Execution"
      ]
    },
    {
      icon: FileText,
      title: "Quality Control & Supervision",
      description: "Expert oversight to ensure construction projects meet the highest standards of quality and safety. Our dedicated team ensures every detail is executed to perfection.",
      features: [
        "Material Quality Inspection",
        "Workmanship Supervision",
        "Structural Integrity Checks",
        "Safety Protocol Enforcement",
        "Compliance Verification",
        "Defect Identification & Rectification"
      ],
      benefits: [
        "Superior Construction Quality",
        "Safety Standards Compliance",
        "Reduced Rework Costs",
        "Timely Issue Resolution",
        "Peace of Mind",
        "Long-Lasting Results"
      ]
    },
    {
      icon: RotateCcw,
      title: "Renovation & Expansion",
      description: "Transform existing structures with innovative renovation and expansion solutions. Whether updating a home or expanding a commercial space, we deliver exceptional results.",
      features: [
        "Complete Property Renovations",
        "Structural Additions",
        "Space Redesign & Repurposing",
        "Modernization Upgrades",
        "Energy Efficiency Improvements",
        "Heritage Building Restoration"
      ],
      benefits: [
        "Enhanced Property Value",
        "Improved Functionality",
        "Modernized Spaces",
        "Energy & Cost Savings",
        "Tailored Solutions",
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
              Our Construction Expertise
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive construction services delivered with precision, expertise, and unwavering commitment to quality and client satisfaction.
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
                      <h4 className="font-semibold text-foreground mb-4">Why Choose Nilcon Builders?</h4>
                      <ul className="space-y-3 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          MSME Certified & Government Recognized
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          BAI Registered Professional Services
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          11+ Years of Experience
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