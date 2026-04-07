import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Check } from "lucide-react";

const benefits = [
  "Enhanced physical and mental fitness through guided practices",
  "Data-supported workouts with AI-driven posture and breathing correction",
  "Access to certified coaches for personalized one-on-one guidance",
  "Community support to keep you motivated and accountable",
  "Personalized training plans tailored to your unique goals",
  "Progress tracking with detailed analytics and insights"
];

export function Benefits() {
  return (
    <section id="benefits" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative h-[500px] lg:h-[600px]">
              <div className="absolute inset-0 bg-gradient-to-br from-[#f37003]/10 to-transparent rounded-3xl -rotate-3" />
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758798458635-f01402b40919?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwY29tbXVuaXR5JTIwZ3JvdXB8ZW58MXx8fHwxNzY5MDY5NTkxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Fitness community group"
                className="relative w-full h-full object-cover rounded-3xl shadow-2xl rotate-3"
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8 order-1 lg:order-2">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="text-sm font-medium text-[#f37003] tracking-wide uppercase">
                  Benefits
                </span>
              </div>
              
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight text-foreground leading-tight">
                Unlock Your Potential with{" "}
                <span className="text-[#f37003]">Aadiyog</span>
              </h2>
              
              <p className="text-lg text-foreground/60 leading-relaxed">
                Transform your fitness journey today with our comprehensive platform designed for holistic wellness and sustainable results.
              </p>
            </div>

            {/* Benefits List */}
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4 group">
                  <div className="mt-1 h-6 w-6 rounded-full bg-[#f37003]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#f37003]/20 transition-colors">
                    <Check className="h-4 w-4 text-[#f37003]" strokeWidth={2.5} />
                  </div>
                  <p className="text-foreground/80 leading-relaxed group-hover:text-foreground transition-colors">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-4">
              <a 
                href="#" 
                className="inline-flex items-center text-[#f37003] font-medium hover:text-[#d86302] transition-colors group"
              >
                Discover all benefits
                <svg 
                  className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
