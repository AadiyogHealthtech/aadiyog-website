import { Activity, MessageCircle, TrendingUp, Users } from "lucide-react";
import { Card } from "./ui/card";

const features = [
  {
    icon: Activity,
    category: "Workouts",
    title: "Posture & Breathing Correction",
    description: "Get real-time feedback on your yoga practice using AI-powered posture analysis. Perfect your form and prevent injuries.",
    color: "#f37003"
  },
  {
    icon: MessageCircle,
    category: "Coach",
    title: "Personal AI Coach",
    description: "Access personalized coaching tailored to your fitness level and goals. Our AI adapts to your progress and provides customized guidance.",
    color: "#f37003"
  },
  {
    icon: TrendingUp,
    category: "Diet",
    title: "Nutrition & Diet Tracking",
    description: "Track your macros, log meals, and receive personalized nutrition recommendations to complement your fitness journey.",
    color: "#f37003"
  },
  {
    icon: Users,
    category: "Community",
    title: "Social Media Element",
    description: "Connect with fellow fitness enthusiasts, share your progress, and stay motivated within our supportive community.",
    color: "#f37003"
  }
];

export function Features() {
  return (
    <section id="features" className="py-24 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm font-medium text-[#f37003] tracking-wide uppercase">
              Features
            </span>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 mb-6">
            <p className="font-['Arimo:Bold',sans-serif] font-bold text-[#0a0a0a] text-3xl md:text-4xl lg:text-5xl tracking-[-1.2px]">
              Holistic health starts with
            </p>
            <p className="font-['Gistesy:Regular',sans-serif] text-[#f37003] text-6xl md:text-7xl lg:text-[96px] leading-[0.8] tracking-[-1.2px] pb-2 md:pb-4">
              Aadiyog
            </p>
          </div>
          <p className="text-lg text-foreground/60 leading-relaxed max-w-2xl mx-auto">
            Record your workouts, chat with Coaches, Track your Diet, Receive personalized plans
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="group relative overflow-hidden border-border/50 hover:border-[#f37003]/30 transition-all duration-300 hover:shadow-lg bg-white"
            >
              <div className="p-8 lg:p-10">
                {/* Icon */}
                <div className="mb-6 relative">
                  <div className="h-14 w-14 rounded-2xl bg-[#f37003]/10 flex items-center justify-center group-hover:bg-[#f37003]/20 transition-colors">
                    <feature.icon className="h-7 w-7 text-[#f37003]" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Category */}
                <div className="text-sm font-medium text-[#f37003] mb-3 tracking-wide">
                  {feature.category}
                </div>

                {/* Title */}
                <h3 className="text-xl lg:text-2xl font-semibold text-foreground mb-4 group-hover:text-[#f37003] transition-colors">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-foreground/60 leading-relaxed">
                  {feature.description}
                </p>

                {/* Learn More Link */}
                <div className="mt-6">
                  <a 
                    href="#" 
                    className="inline-flex items-center text-sm font-medium text-foreground/70 hover:text-[#f37003] transition-colors group/link"
                  >
                    Learn more
                    <svg 
                      className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#f37003]/0 via-transparent to-transparent opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
