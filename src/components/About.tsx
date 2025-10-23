import { Award, Users, Home, TrendingUp } from "lucide-react";

const stats = [
  { icon: Home, label: "Homes Sold", value: "1000+", color: "text-accent" },
  { icon: Users, label: "Experienced Agents", value: "20+", color: "text-accent" },
  { icon: Award, label: "Awards Won", value: "15+", color: "text-accent" },
  { icon: TrendingUp, label: "Years of Excellence", value: "25+", color: "text-accent" },
];

const About = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            About Our Company
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            For over two decades, we've been connecting people with their dream homes through 
            personalized service and expert guidance. Our trusted network of professionals is 
            dedicated to making your real estate journey seamless, whether you're buying, selling, 
            or investing. With award-winning service and deep local market knowledge, we transform 
            property transactions into lasting relationships.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-smooth hover:-translate-y-2 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-center mb-4">
                <div className="bg-accent/10 p-4 rounded-full">
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
              </div>
              <h3 className="text-4xl font-bold text-primary mb-2">{stat.value}</h3>
              <p className="text-muted-foreground font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
