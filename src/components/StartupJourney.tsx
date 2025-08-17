import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowDown, Lightbulb, Target, Rocket, TrendingUp, Users, Award, Car } from "lucide-react";

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
    <section id="journey" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-card/20 relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative">
        {/* Traveling vehicle */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent-cyan to-accent-green opacity-30 transform -translate-x-1/2 z-0"></div>
        <div className="absolute left-1/2 transform -translate-x-1/2 animate-drive z-10">
          <div className="w-12 h-8 bg-gradient-primary rounded-lg flex items-center justify-center shadow-lg">
            <Car className="w-6 h-4 text-white" />
          </div>
        </div>
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

        {/* Vertical Journey timeline */}
        <div className="space-y-16 relative z-20">
          {journeySteps.map((step, index) => (
            <div 
              key={step.phase}
              className={`flex items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} relative`}
            >
              {/* Timeline node */}
              <div className="absolute left-1/2 transform -translate-x-1/2 z-30">
                <div className={`w-16 h-16 ${step.bgColor} rounded-full flex items-center justify-center border-4 border-background shadow-xl group hover:scale-125 transition-all duration-500`}>
                  <step.icon className={`w-8 h-8 ${step.color} group-hover:scale-110 transition-all duration-300`} />
                </div>
                {/* Phase number */}
                <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center animate-pulse">
                  {index + 1}
                </div>
              </div>

              {/* Content card */}
              <Card 
                className={`card-gradient border-border/50 p-8 hover-lift animate-slide-in-${index % 2 === 0 ? 'left' : 'right'} group relative overflow-hidden w-full max-w-md ${index % 2 === 0 ? 'ml-auto mr-8' : 'mr-auto ml-8'}`}
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                {/* Duration badge */}
                <Badge variant="secondary" className="mb-4 text-xs animate-zoom-in" style={{ animationDelay: `${index * 0.3 + 0.1}s` }}>
                  {step.duration}
                </Badge>
                
                {/* Title and description */}
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{step.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed group-hover:text-foreground transition-colors">
                  {step.description}
                </p>

                {/* Tasks checklist */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-foreground/80 mb-4">Key Activities:</h4>
                  {step.tasks.map((task, taskIndex) => (
                    <div 
                      key={taskIndex} 
                      className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0"
                      style={{ transitionDelay: `${taskIndex * 0.1}s` }}
                    >
                      <CheckCircle className={`w-5 h-5 ${step.color} animate-pulse`} />
                      <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{task}</span>
                    </div>
                  ))}
                </div>

                {/* Hover glow effect */}
                <div className={`absolute inset-0 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300 ${step.color.replace('text-', 'bg-')}`}></div>
                <div className="absolute -inset-1 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-gradient-to-r from-primary/20 to-accent/20 blur-sm"></div>
              </Card>

              {/* Connecting arrow (not on last item) */}
              {index < journeySteps.length - 1 && (
                <div className="absolute left-1/2 -bottom-8 transform -translate-x-1/2 z-20">
                  <div className="w-8 h-8 bg-card rounded-full flex items-center justify-center border-2 border-primary/30 animate-bounce">
                    <ArrowDown className="w-4 h-4 text-primary" />
                  </div>
                </div>
              )}
            </div>
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