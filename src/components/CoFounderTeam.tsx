import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Code, TrendingUp, DollarSign } from "lucide-react";

const coFounders = [
  {
    id: "ceo",
    title: "AI CEO",
    name: "Strategy & Leadership",
    description: "Your strategic partner for business planning, market analysis, and leadership guidance.",
    icon: Brain,
    color: "text-primary",
    bgColor: "bg-primary/10",
    features: ["Business Strategy", "Market Analysis", "Leadership Coaching", "Vision Planning"]
  },
  {
    id: "cto",
    title: "AI CTO", 
    name: "Technology & Development",
    description: "Technical expertise for architecture, development, and scaling your product.",
    icon: Code,
    color: "text-accent-cyan",
    bgColor: "bg-accent-cyan/10",
    features: ["Technical Architecture", "Code Review", "Scaling Solutions", "Tech Stack Selection"]
  },
  {
    id: "cmo",
    title: "AI CMO",
    name: "Marketing & Growth",
    description: "Growth strategies, brand building, and customer acquisition expertise.",
    icon: TrendingUp,
    color: "text-accent-pink",
    bgColor: "bg-accent-pink/10",
    features: ["Growth Marketing", "Brand Strategy", "Customer Acquisition", "Analytics"]
  },
  {
    id: "cfo",
    title: "AI CFO",
    name: "Finance & Operations",
    description: "Financial planning, fundraising guidance, and operational efficiency.",
    icon: DollarSign,
    color: "text-accent-green",
    bgColor: "bg-accent-green/10",
    features: ["Financial Planning", "Fundraising", "Budget Management", "Investor Relations"]
  }
];

const CoFounderTeam = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2 text-sm border-primary/30">
            Your AI Dream Team
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Meet Your AI Co-Founder Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Four specialized AI experts working together to turn your startup vision into reality. 
            Each brings unique expertise to accelerate your journey.
          </p>
        </div>

        {/* Co-founder cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coFounders.map((coFounder, index) => (
            <Card 
              key={coFounder.id} 
              className={`card-gradient border-border/50 p-6 hover:scale-105 transition-all duration-300 hover:shadow-2xl animate-scale-in group cursor-pointer`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className={`w-16 h-16 ${coFounder.bgColor} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <coFounder.icon className={`w-8 h-8 ${coFounder.color}`} />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-2">{coFounder.title}</h3>
              <h4 className={`text-lg font-semibold mb-3 ${coFounder.color}`}>
                {coFounder.name}
              </h4>

              {/* Description */}
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {coFounder.description}
              </p>

              {/* Features */}
              <div className="space-y-2">
                {coFounder.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-2">
                    <div className={`w-1.5 h-1.5 rounded-full ${coFounder.color.replace('text-', 'bg-')}`}></div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Hover effect */}
              <div className={`absolute inset-0 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300 ${coFounder.color.replace('text-', 'bg-')}`}></div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-4">
            Ready to assemble your AI dream team?
          </p>
          <Badge variant="outline" className="px-6 py-2 text-primary border-primary/30 hover:bg-primary/10 cursor-pointer transition-colors">
            Start Building Now →
          </Badge>
        </div>
      </div>
    </section>
  );
};

export default CoFounderTeam;