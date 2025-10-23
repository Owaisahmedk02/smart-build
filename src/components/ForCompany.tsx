import { Card, CardContent } from "@/components/ui/card";
import { BarChart3, Target, Users, Zap } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "24/7 Digital Salesperson",
    description: "Your website works around the clock to showcase properties and capture leads while you focus on closing deals.",
  },
  {
    icon: Target,
    title: "Lead Generation Engine",
    description: "Automated lead capture and qualification system that turns visitors into qualified prospects instantly.",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Track performance metrics, visitor behavior, and conversion rates to optimize your marketing strategy.",
  },
  {
    icon: Users,
    title: "CRM Integration",
    description: "Seamlessly connects with your existing CRM and marketing automation tools for streamlined operations.",
  },
];

const ForCompany = () => {
  return (
    <section className="py-20 gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            For the Company
          </h2>
          <p className="text-xl text-white/90 leading-relaxed">
            Transform your digital presence into a powerful marketing platform that generates 
            leads, builds your brand, and drives growth 24/7.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-smooth hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="bg-accent/20 p-3 rounded-lg">
                    <feature.icon className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-white/80">{feature.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-accent mb-2">3.5x</div>
              <div className="text-white/90">More Qualified Leads</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">85%</div>
              <div className="text-white/90">Lead Response Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">24/7</div>
              <div className="text-white/90">Active Marketing</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForCompany;
