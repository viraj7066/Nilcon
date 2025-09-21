import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Timeline from "@/components/Timeline";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Users, Palette, Heart, Lightbulb } from "lucide-react";
import architectImage from "@assets/generated_images/Architect_professional_headshot_b6b90c26.png";
import officeImage from "@assets/generated_images/Office_interior_space_336ea015.png";

export default function About() {
  const values = [
    {
      icon: Palette,
      title: "Harmonious Integration",
      description: "We seamlessly blend architectural elements with natural surroundings, creating spaces that feel both innovative and timeless."
    },
    {
      icon: Heart,
      title: "Cultural Sensitivity",
      description: "Our designs respect and incorporate local cultural elements, ensuring each project resonates with the community it serves."
    },
    {
      icon: Users,
      title: "Landscape Integration",
      description: "We believe in creating architecture that works in harmony with the natural landscape, preserving and enhancing the environment."
    },
    {
      icon: Lightbulb,
      title: "Customized Solutions",
      description: "Every project receives our full attention with tailored solutions that address unique requirements and challenges."
    },
    {
      icon: Award,
      title: "Spiritual Essence",
      description: "We infuse our designs with a sense of tranquility and spiritual balance, creating spaces that nourish the soul."
    }
  ];

  const certifications = [
    {
      title: "MSME Certification",
      number: "UDYAM-MH-09-0004399",
      description: "Recognized as a Micro, Small & Medium Enterprise by the Government of India"
    },
    {
      title: "BAI Registration",
      number: "MH/DHU/D/17/PAT",
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
              About DSK Architect
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A decade of architectural excellence, creating spaces that inspire harmony, reflect cultural values, and enhance the human experience.
            </p>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Meet Our Principal Architect
                </h2>
                
                <Card className="overflow-hidden">
                  <CardContent className="p-0">
                    <img 
                      src={architectImage}
                      alt="Ar. Dipesh Sushil Khiloriya"
                      className="w-full h-96 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                        Ar. Dipesh Sushil Khiloriya
                      </h3>
                      <p className="text-primary font-medium mb-4">
                        Principal Architect & Founder
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">MSME Certified</Badge>
                        <Badge variant="secondary">BAI Registered</Badge>
                        <Badge variant="secondary">10+ Years Experience</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Founded on June 10, 2015, DSK Architect has emerged as a leading architectural practice 
                  in Dhule, Maharashtra. Under the visionary leadership of Ar. Dipesh Sushil Khiloriya, 
                  we have transformed countless spaces and touched hundreds of lives through our architectural innovations.
                </p>
                
                <p className="text-muted-foreground leading-relaxed">
                  Our journey began with a simple yet profound vision: to create architecture that doesn't 
                  just shelter, but inspires. We believe that great architecture has the power to transform 
                  communities, enhance lifestyles, and create lasting value for generations to come.
                </p>
                
                <p className="text-muted-foreground leading-relaxed">
                  Today, with over 50 successful projects and 100+ satisfied clients, DSK Architect stands 
                  as a testament to the power of passionate, purposeful design. Our MSME certification and 
                  BAI registration reflect our commitment to professional excellence and industry standards.
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
                The principles that guide every project and shape our approach to architectural excellence.
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
                Our professional credentials and government recognition ensure quality, compliance, and trust.
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