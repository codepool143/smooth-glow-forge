import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Zap, Crown } from "lucide-react";

const pricingPlans = [
  {
    name: "Founder Lite",
    description: "Perfect for early-stage entrepreneurs just starting out",
    price: "Free",
    period: "forever",
    icon: Star,
    color: "text-accent-cyan",
    bgColor: "bg-accent-cyan/10",
    borderColor: "border-accent-cyan/30",
    popular: false,
    features: [
      "AI CEO strategic guidance",
      "Basic market research",
      "Business model canvas",
      "Community access",
      "Email support"
    ],
    limitations: [
      "Limited AI interactions (50/month)",
      "Basic templates only"
    ]
  },
  {
    name: "Startup Pro",
    description: "Comprehensive solution for serious entrepreneurs",
    price: "$97",
    period: "month",
    icon: Zap,
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/50",
    popular: true,
    features: [
      "Full AI Co-Founder Team access",
      "Unlimited AI interactions",
      "Advanced market analysis",
      "Custom business plans",
      "Technical architecture guidance",
      "Marketing strategies",
      "Financial modeling",
      "Priority support",
      "Exclusive workshops"
    ],
    limitations: []
  },
  {
    name: "Enterprise",
    description: "For established companies and accelerators",
    price: "Custom",
    period: "pricing",
    icon: Crown,
    color: "text-accent-green",
    bgColor: "bg-accent-green/10",
    borderColor: "border-accent-green/30",
    popular: false,
    features: [
      "Everything in Startup Pro",
      "White-label solution",
      "Custom AI training",
      "Dedicated account manager",
      "API access",
      "Advanced analytics",
      "Custom integrations",
      "SLA guarantees",
      "On-premise deployment options"
    ],
    limitations: []
  }
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2 text-sm border-primary/30">
            Simple, Transparent Pricing
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Choose Your Growth Plan
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Start free and scale as you grow. All plans include our core AI guidance, 
            with advanced features for serious entrepreneurs.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan, index) => (
            <Card 
              key={plan.name}
              className={`relative card-gradient border-border/50 p-8 hover-lift hover-tilt animate-bounce-in group cursor-pointer overflow-hidden ${
                plan.popular ? 'ring-2 ring-primary/50 scale-105' : ''
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="button-gradient px-4 py-1 text-sm font-semibold">
                    Most Popular
                  </Badge>
                </div>
              )}

              {/* Icon */}
              <div className={`w-16 h-16 ${plan.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500`}>
                <plan.icon className={`w-8 h-8 ${plan.color} group-hover:scale-110 transition-all duration-300`} />
              </div>

              {/* Plan details */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground mb-4">{plan.description}</p>
                
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.price !== "Free" && plan.price !== "Custom" && (
                    <span className="text-muted-foreground">/{plan.period}</span>
                  )}
                  {plan.price === "Custom" && (
                    <span className="text-muted-foreground text-lg ml-1">{plan.period}</span>
                  )}
                </div>
              </div>

              {/* Features */}
              <div className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div 
                    key={featureIndex} 
                    className="flex items-start gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0"
                    style={{ transitionDelay: `${featureIndex * 0.1}s` }}
                  >
                    <Check className={`w-5 h-5 ${plan.color} mt-0.5 flex-shrink-0 animate-pulse`} />
                    <span className="text-sm group-hover:text-foreground transition-colors">{feature}</span>
                  </div>
                ))}
                {plan.limitations.map((limitation, limitIndex) => (
                  <div 
                    key={limitIndex} 
                    className="flex items-start gap-3 opacity-60 group-hover:opacity-80 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0"
                    style={{ transitionDelay: `${(plan.features.length + limitIndex) * 0.1}s` }}
                  >
                    <div className="w-5 h-5 mt-0.5 flex-shrink-0 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-muted-foreground"></div>
                    </div>
                    <span className="text-sm text-muted-foreground">{limitation}</span>
                  </div>
                ))}
              </div>

              {/* CTA button */}
              <Button 
                className={`w-full transition-all duration-300 group-hover:scale-105 ${
                  plan.popular 
                    ? 'button-gradient' 
                    : 'border-border/50 hover:bg-card/50'
                }`}
                variant={plan.popular ? "default" : "outline"}
                size="lg"
              >
                {plan.price === "Free" ? "Get Started" : 
                 plan.price === "Custom" ? "Contact Sales" : 
                 "Start Free Trial"}
              </Button>
              
              {/* Hover effects */}
              <div className={`absolute inset-0 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300 ${plan.color.replace('text-', 'bg-')}`}></div>
              <div className="absolute -inset-1 rounded-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300 bg-gradient-to-r from-primary/20 to-accent/20 blur-sm"></div>
            </Card>
          ))}
        </div>

        {/* Additional info */}
        <div className="text-center space-y-4">
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-accent-green" />
              <span>30-day money-back guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-accent-green" />
              <span>No setup fees</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-accent-green" />
              <span>Cancel anytime</span>
            </div>
          </div>
          
          <p className="text-muted-foreground">
            Need a custom plan? <span className="text-primary hover:underline cursor-pointer">Contact our sales team</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;