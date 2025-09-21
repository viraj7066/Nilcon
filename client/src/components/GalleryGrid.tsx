import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { X, ZoomIn } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

interface GalleryGridProps {
  items: GalleryItem[];
  activeFilter: string;
}

export default function GalleryGrid({ items, activeFilter }: GalleryGridProps) {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filteredItems = items.filter(item => 
    activeFilter === "All" || item.category === activeFilter
  );

  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item, index) => (
          <Card 
            key={item.id} 
            className="group overflow-hidden hover-elevate cursor-pointer animate-fade-in-up"
            onClick={() => setSelectedItem(item)}
            data-testid={`gallery-item-${item.id}`}
            style={{ 
              animationDelay: `${index * 100}ms`
            }}
          >
            <CardContent className="p-0">
              <div className="relative overflow-hidden">
                <img 
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <ZoomIn className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="font-semibold text-primary-foreground mb-1">
                      {item.title}
                    </h3>
                    <Badge variant="secondary" className="mb-2">
                      {item.category}
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Lightbox Dialog */}
      <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
        <DialogContent className="max-w-4xl w-full">
          <DialogHeader>
            <DialogTitle className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-foreground">{selectedItem?.title}</h2>
                <Badge variant="outline" className="mt-2">
                  {selectedItem?.category}
                </Badge>
              </div>
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => setSelectedItem(null)}
                data-testid="button-close-lightbox"
              >
                <X className="w-5 h-5" />
              </Button>
            </DialogTitle>
          </DialogHeader>
          
          {selectedItem && (
            <div className="space-y-4">
              <img 
                src={selectedItem.image}
                alt={selectedItem.title}
                className="w-full max-h-96 object-cover rounded-lg"
              />
              <p className="text-muted-foreground leading-relaxed">
                {selectedItem.description}
              </p>
            </div>
          )}
        </DialogContent>
      </Dialog>

    </>
  );
}