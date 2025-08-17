import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowRight, Lightbulb, Target, Rocket, TrendingUp, Users, Award } from "lucide-react";

const journeySteps = [
  {
    phase: "Ideation",
    title: "Validate Your Idea",
    description: "Market research, competitive analysis, and idea refinement with AI insights.",
    icon: Lightbulb,
    color: "text-accent-cyan",
    bgColor: "bg-accent-cyan/10",
    duration: "Week 1-2",
    tasks: ["Market Research", "Competitor Analysis", "Value Proposition", "Target Audience"]
  },
  {
    phase: "Planning", 
    title: "Strategic Foundation",
    description: "Business model canvas, technical architecture, and go-to-market strategy.",
    icon: Target,
    color: "text-primary",
    bgColor: "bg-primary/10",
    duration: "Week 3-4",
    tasks: ["Business Model", "Technical Stack", "MVP Planning", "Roadmap Creation"]
  },
  {
    phase: "Building",
    title: "Product Development",
    description: "MVP development, iterative feedback, and feature prioritization.",
    icon: Rocket,
    color: "text-accent-pink",
    bgColor: "bg-accent-pink/10",
    duration: "Week 5-12",
    tasks: ["MVP Development", "User Testing", "Feature Iteration", "Quality Assurance"]
  },
  {
    phase: "Growth",
    title: "Market Launch",
    description: "Launch strategy, customer acquisition, and performance optimization.",
    icon: TrendingUp,
    color: "text-accent-green",
    bgColor: "bg-accent-green/10",
    duration: "Week 13+",
    tasks: ["Launch Campaign", "User Acquisition", "Analytics Setup", "Growth Optimization"]
  },
  {
    phase: "Scaling",
    title: "Team & Operations",
    description: "Hiring guidance, operational systems, and scaling infrastructure.",
    icon: Users,
    color: "text-primary",
    bgColor: "bg-primary/10",
    duration: "Ongoing",
    tasks: ["Team Building", "Process Optimization", "Infrastructure Scaling", "Culture Development"]
  },
  {
    phase: "Success",
    title: "Funding & Exit",
    description: "Investor readiness, fundraising support, and exit strategy planning.",
    icon: Award,
    color: "text-accent-cyan",
    bgColor: "bg-accent-cyan/10",
    duration: "As Needed",
    tasks: ["Pitch Deck", "Financial Modeling", "Investor Outreach", "Due Diligence"]
  }
];

const StartupJourney = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-card/20">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2 text-sm border-primary/30">
            Step by Step Process
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            The Startup Journey — Step by Step
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our proven methodology takes you from idea to successful startup. 
            Each phase is designed to maximize your chances of success with AI-powered guidance.
          </p>
        </div>

        {/* Journey timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {journeySteps.map((step, index) => (
            <Card 
              key={step.phase}
              className={`card-gradient border-border/50 p-6 hover:scale-105 transition-all duration-300 hover:shadow-2xl animate-fade-up group relative overflow-hidden`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Phase number */}
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-sm font-bold text-primary">
                {index + 1}
              </div>

              {/* Icon */}
              <div className={`w-16 h-16 ${step.bgColor} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <step.icon className={`w-8 h-8 ${step.color}`} />
              </div>

              {/* Content */}
              <div className="mb-4">
                <Badge variant="secondary" className="mb-2 text-xs">
                  {step.duration}
                </Badge>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Tasks checklist */}
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-foreground/80 mb-3">Key Activities:</h4>
                {step.tasks.map((task, taskIndex) => (
                  <div key={taskIndex} className="flex items-center gap-2">
                    <CheckCircle className={`w-4 h-4 ${step.color}`} />
                    <span className="text-sm text-muted-foreground">{task}</span>
                  </div>
                ))}
              </div>

              {/* Arrow connector (hidden on last item) */}
              {index < journeySteps.length - 1 && (
                <div className="hidden xl:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                  <div className="w-8 h-8 bg-card rounded-full flex items-center justify-center border border-border/50">
                    <ArrowRight className="w-4 h-4 text-primary" />
                  </div>
                </div>
              )}

              {/* Hover glow effect */}
              <div className={`absolute inset-0 rounded-lg opacity-0 group-hover:opacity-5 transition-opacity duration-300 ${step.color.replace('text-', 'bg-')}`}></div>
            </Card>
          ))}
        </div>

        {/* CTA section */}
        <div className="text-center mt-16 p-8 card-gradient rounded-2xl border border-border/50">
          <h3 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join thousands of successful entrepreneurs who've turned their ideas into thriving businesses with our AI-powered platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Badge variant="outline" className="px-6 py-3 text-primary border-primary/30 hover:bg-primary/10 cursor-pointer transition-colors">
              Begin Your Startup Journey →
            </Badge>
            <Badge variant="outline" className="px-6 py-3 border-border/50 hover:bg-card/50 cursor-pointer transition-colors">
              Schedule a Consultation
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartupJourney;