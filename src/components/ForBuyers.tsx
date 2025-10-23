import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin, DollarSign, Home, Bed, Bath } from "lucide-react";

const properties = [
  {
    id: 1,
    title: "Modern Downtown Loft",
    location: "Downtown District",
    price: "$850,000",
    beds: 2,
    baths: 2,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80"
  },
  {
    id: 2,
    title: "Suburban Family Home",
    location: "Oak Valley",
    price: "$625,000",
    beds: 4,
    baths: 3,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
  },
  {
    id: 3,
    title: "Luxury Waterfront Villa",
    location: "Lakeside Estates",
    price: "$1,450,000",
    beds: 5,
    baths: 4,
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80"
  },
];

const ForBuyers = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            For Home Buyers & Sellers
          </h2>
          <p className="text-lg text-muted-foreground">
            Your trusted research and discovery platform. Explore listings, neighborhoods, 
            pricing insights, and market trends—all in one place.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="shadow-lg">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                  <Input 
                    placeholder="Search by location, property type..." 
                    className="pl-10 h-12"
                  />
                </div>
                <div className="flex gap-2">
                  <Button className="bg-primary hover:bg-primary-light transition-smooth">
                    <MapPin className="mr-2 h-4 w-4" />
                    Location
                  </Button>
                  <Button variant="outline">
                    <DollarSign className="mr-2 h-4 w-4" />
                    Price
                  </Button>
                  <Button variant="outline">
                    <Home className="mr-2 h-4 w-4" />
                    Type
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Featured Properties */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-primary mb-6">Featured Properties</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property, index) => (
              <Card 
                key={property.id}
                className="overflow-hidden hover:shadow-xl transition-smooth hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={property.image} 
                    alt={property.title}
                    className="w-full h-full object-cover transition-smooth hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-accent text-primary px-3 py-1 rounded-full font-semibold text-sm">
                    {property.price}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold text-primary mb-2">{property.title}</h4>
                  <p className="text-muted-foreground mb-4 flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {property.location}
                  </p>
                  <div className="flex gap-4 text-muted-foreground">
                    <span className="flex items-center">
                      <Bed className="h-4 w-4 mr-1" />
                      {property.beds} Beds
                    </span>
                    <span className="flex items-center">
                      <Bath className="h-4 w-4 mr-1" />
                      {property.baths} Baths
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-accent hover:bg-accent-muted text-primary font-semibold shadow-gold transition-smooth">
            View All Properties
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ForBuyers;
