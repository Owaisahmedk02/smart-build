import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Award } from "lucide-react";

const agents = [
  {
    name: "Sarah Mitchell",
    specialty: "Luxury Homes",
    experience: "15 years",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
    awards: "Top Producer 2023",
  },
  {
    name: "Michael Chen",
    specialty: "Commercial Real Estate",
    experience: "12 years",
    image: "https://images.unsplash.com/photo-1556157382-97eda2f9e2bf?w=400&q=80",
    awards: "Rising Star Award",
  },
  {
    name: "Emily Rodriguez",
    specialty: "First-Time Buyers",
    experience: "8 years",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
    awards: "Client Choice Winner",
  },
];

const ForAgents = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            For Our Agents
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Empower your real estate career with a platform that helps you showcase your expertise, 
            build trust with clients, and connect with potential buyers and sellers effortlessly.
          </p>
        </div>

        {/* Agent Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {agents.map((agent, index) => (
            <Card 
              key={index}
              className="overflow-hidden hover:shadow-xl transition-smooth hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={agent.image} 
                  alt={agent.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-accent px-3 py-1 rounded-full">
                  <Award className="h-4 w-4 text-primary inline mr-1" />
                  <span className="text-xs font-semibold text-primary">{agent.awards}</span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold text-primary mb-2">{agent.name}</h3>
                <p className="text-accent font-medium mb-1">{agent.specialty}</p>
                <p className="text-muted-foreground text-sm mb-4">{agent.experience} of experience</p>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1 transition-smooth hover:bg-primary hover:text-white">
                    <Mail className="h-4 w-4 mr-1" />
                    Email
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1 transition-smooth hover:bg-primary hover:text-white">
                    <Phone className="h-4 w-4 mr-1" />
                    Call
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Join Team CTA */}
        <div className="bg-gradient-to-r from-primary to-primary-light rounded-2xl p-12 text-center shadow-xl">
          <h3 className="text-3xl font-bold text-white mb-4">Join Our Award-Winning Team</h3>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Looking to take your real estate career to the next level? We provide the tools, 
            training, and support you need to succeed.
          </p>
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent-muted text-primary font-semibold px-8 shadow-gold transition-smooth hover:scale-105"
          >
            Join Our Team
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ForAgents;
