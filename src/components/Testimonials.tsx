import { Card } from "./ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Yoga Enthusiast",
    avatar: "SM",
    rating: 5,
    text: "Aadiyog transformed my practice completely. The AI-powered posture feedback helped me fix issues I didn't even know I had. I've never felt better!",
    gradient: "from-violet-500/10 to-purple-500/10"
  },
  {
    name: "Michael Chen",
    role: "Fitness Coach",
    avatar: "MC",
    rating: 5,
    text: "Working with Aadiyog is truly life-changing! The coaching platform is intuitive, and seeing my clients' progress through the app motivates me every day.",
    gradient: "from-blue-500/10 to-cyan-500/10"
  },
  {
    name: "Emily Rodriguez",
    role: "Wellness Advocate",
    avatar: "ER",
    rating: 5,
    text: "The community aspect is incredible. I've met so many like-minded people on my wellness journey. The combination of tech and human touch is perfect.",
    gradient: "from-orange-500/10 to-amber-500/10"
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm font-medium text-[#f37003] tracking-wide uppercase">
              Testimonials
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight text-foreground mb-6">
            User Experiences
          </h2>
          <p className="text-lg text-foreground/60 leading-relaxed">
            Aadiyog has helped tens of thousands of people transform their lives. Here's what they have to say.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="group relative overflow-hidden border-border/50 hover:border-[#f37003]/30 transition-all duration-300 hover:shadow-xl bg-white"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              
              <div className="relative p-8">
                {/* Rating Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="h-5 w-5 fill-[#f37003] text-[#f37003]" 
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-foreground/80 leading-relaxed mb-8 text-base">
                  "{testimonial.text}"
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center gap-4">
                  {/* Avatar */}
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#f37003] to-[#ff8533] flex items-center justify-center text-white font-semibold flex-shrink-0">
                    {testimonial.avatar}
                  </div>
                  
                  {/* Name and Role */}
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-foreground/60">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>

              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <svg 
                  className="h-12 w-12 text-[#f37003]" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
            </Card>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-12">
          <a 
            href="#" 
            className="inline-flex items-center text-foreground/70 hover:text-[#f37003] font-medium transition-colors group"
          >
            View all success stories
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
    </section>
  );
}
