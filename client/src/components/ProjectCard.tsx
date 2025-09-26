import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Eye } from "lucide-react";

interface ProjectCardProps {
  title: string;
  category: string;
  status: "Ongoing" | "Completed";
  location: string;
  year: string;
  image: string;
  description: string;
  amenities?: string[];
}

export default function ProjectCard({ 
  title, 
  category, 
  status, 
  location, 
  year, 
  image, 
  description,
  amenities
}: ProjectCardProps) {
  return (
    <Card className="group hover-elevate overflow-hidden">
      <CardContent className="p-0">
        <div className="relative overflow-hidden">
          <img 
            src={image}
            alt={title}
            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute top-3 right-3">
            <Badge variant={status === "Completed" ? "default" : "secondary"}>
              {status}
            </Badge>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-3 left-3 right-3">
              <Button size="sm" className="w-full" data-testid="button-view-project">
                <Eye className="w-4 h-4 mr-2" />
                View Details
              </Button>
            </div>
          </div>
        </div>
        
        <div className="p-6">
          <CardHeader className="p-0 mb-4">
            <div className="flex items-center justify-between mb-2">
              <CardTitle className="text-xl font-semibold text-foreground">
                {title}
              </CardTitle>
              <Badge variant="outline">
                {category}
              </Badge>
            </div>
          </CardHeader>
          
          <p className="text-muted-foreground mb-4 line-clamp-2">
            {description}
          </p>
          
          {amenities && amenities.length > 0 && (
            <div className="mt-3 mb-4">
              <h4 className="text-sm font-medium text-foreground mb-2">Amenities:</h4>
              <div className="flex flex-wrap gap-2">
                {amenities.map((amenity, index) => (
                  <Badge key={index} variant="secondary" className="bg-secondary/10 text-secondary">
                    {amenity}
                  </Badge>
                ))}
              </div>
            </div>
          )}
          
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              {location}
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {year}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
