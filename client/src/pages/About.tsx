import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Timeline from "@/components/Timeline";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Users, Building, Heart, Calendar } from "lucide-react";
import architectImage from "@assets/generated_images/Founder_Nilcon.png";
import officeImage from "@assets/generated_images/Office.png";

export default function About() {
  const values = [
    {
      icon: Award,
      title: "Quality Excellence",
      description: "We maintain the highest standards of construction quality, using premium materials and proven techniques for long-lasting structures."
    },
    {
      icon: Users,
      title: "Client Focus",
      description: "Our projects are centered around client needs, ensuring transparent communication and delivering on commitments."
    },
    {
      icon: Building,
      title: "Technical Expertise",
      description: "With years of industry experience, we bring technical excellence and innovative solutions to every construction challenge."
    },
    {
      icon: Calendar,
      title: "Timely Delivery",
      description: "We pride ourselves on completing projects on schedule without compromising on quality or safety standards."
    },
    {
      icon: Heart,
      title: "Community Commitment",
      description: "We build not just structures, but contribute to the growth and development of the communities we serve."
    }
  ];

  const certifications = [
    {
      title: "MSME Certification",
      number: "UDAYJ-MH-10-0004896",
      description: "Recognized as a Micro, Small & Medium Enterprise by the Government of India"
    },
    {
      title: "BAI Registration",
      number: "MH/DHU/D/10/AAT",
      description: "Registered member of Builders Association of India, Maharashtra Chapter"
    },
    {
      title: "Government Recognition",
      description: "Officially recognized architectural practice with all necessary licenses and approvals"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src={officeImage}
              alt="DSK Architect Office"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/50"></div>
          </div>
          
          <div className="relative container mx-auto px-4 text-center">
            <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
              About Nilcon Builders
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A decade of construction excellence, building robust, aesthetically pleasing, and functional structures across Maharashtra.
            </p>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Meet Our Founder & Managing Director
                </h2>
                
                <Card className="overflow-hidden">
                  <CardContent className="p-0">
                    <img 
                      src={architectImage}
                      alt="Prashant Patil"
                      className="w-80 mx-auto h-auto object-contain"
                    />
                    <div className="p-6">
                      <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                        Prashant Patil
                      </h3>
                      <p className="text-primary font-medium mb-4">
                        Founder & Managing Director
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">MSME Certified</Badge>
                        <Badge variant="secondary">BAI Registered</Badge>
                        <Badge variant="secondary">11+ Years Experience</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Founded on March 14, 2014, Nilcon Builders has emerged as a leading construction company 
                  in Dhule, Maharashtra. Under the visionary leadership of Prashant Patil, 
                  we have built numerous residential, commercial, and industrial structures across the region.
                </p>
                
                <p className="text-muted-foreground leading-relaxed">
                  Our journey began with a simple yet profound vision: to build structures that are not 
                  just functional, but also aesthetically pleasing and built to last. We believe that quality 
                  construction has the power to transform communities, provide safe living and working spaces, 
                  and create lasting value for our clients.
                </p>
                
                <p className="text-muted-foreground leading-relaxed">
                  Today, with over 50 successful projects and 100+ satisfied clients, Nilcon Builders stands 
                  as a testament to the power of quality workmanship and professional integrity. Our MSME certification and 
                  BAI registration reflect our commitment to industry standards and client satisfaction.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <Timeline />

        {/* Values Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Core Values
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The principles that guide every project and shape our approach to construction excellence.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="hover-elevate h-full">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-foreground">
                      {value.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Certifications & Recognition
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our professional credentials and industry recognition ensure quality construction, regulatory compliance, and client trust.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {certifications.map((cert, index) => (
                <Card key={index} className="hover-elevate text-center">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Award className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-foreground">
                      {cert.title}
                    </CardTitle>
                    {cert.number && (
                      <Badge variant="outline" className="mx-auto">
                        {cert.number}
                      </Badge>
                    )}
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {cert.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}