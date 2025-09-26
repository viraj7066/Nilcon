import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Award, Building, Users, FileCheck } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function Timeline() {
  const timelineEvents = [
    {      year: "2014",      title: "Company Founded",      description: "Nilcon Builders established on March 14, 2014 by Prashant Patil",      icon: Building,      badge: "Foundation"    },
    {      year: "2015-2017",       title: "Residential Focus",      description: "Built expertise in residential construction with first major residential projects",      icon: Users,      badge: "Growth"    },
    {      year: "2018-2020",      title: "Commercial Expansion",      description: "Expanded into commercial construction and established strong client relationships",      icon: Building,      badge: "Expansion"    },
    {
      year: "2022",
      title: "MSME Recognition",
      description: "Received MSME certification (UDAYJ-MH-10-0004896) recognizing our contributions",
      icon: Award,
      badge: "Recognition"
    },
    {
      year: "2023",
      title: "BAI Membership",
      description: "Became registered member of Builders Association of India (MH/DHU/D/10/AAT)",
      icon: FileCheck,
      badge: "Professional"
    },
    {
      year: "2024-2025",
      title: "50+ Projects Milestone",
      description: "Achieved milestone of 50+ successful projects with 100+ satisfied clients",
      icon: Calendar,
      badge: "Achievement"
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <ScrollReveal animation="fadeInUp">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">              A decade of construction excellence, innovation, and commitment to building spaces that inspire.            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border transform md:-translate-x-px"></div>

            <div className="space-y-8">
              {timelineEvents.map((event, index) => (
                <ScrollReveal 
                  key={index}
                  animation={index % 2 === 0 ? 'fadeInLeft' : 'fadeInRight'}
                  delay={index * 200}
                >
                  <div 
                    className={`relative flex items-center ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                    data-testid={`timeline-${index}`}
                  >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full transform md:-translate-x-1/2 z-10">
                    <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-20"></div>
                  </div>

                  {/* Content Card */}
                  <div className={`ml-12 md:ml-0 md:w-5/12 ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                  }`}>
                    <Card className="hover-elevate">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                            <event.icon className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <Badge variant="secondary">{event.badge}</Badge>
                            <p className="font-condensed text-lg font-bold text-primary mt-1">
                              {event.year}
                            </p>
                          </div>
                        </div>
                        
                        <h3 className="font-semibold text-foreground mb-2">
                          {event.title}
                        </h3>
                        
                        <p className="text-muted-foreground text-sm">
                          {event.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}