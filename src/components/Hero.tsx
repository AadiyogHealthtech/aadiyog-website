import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-background -z-10" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="text-sm font-medium text-[#f37003] tracking-wide uppercase">
                  Holistic Fitness Platform
                </span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-foreground leading-tight">
                Transform Your Fitness Journey with{" "}
                <span className="text-[#f37003]">Aadiyog</span>
              </h1>
              
              <p className="text-lg lg:text-xl text-foreground/60 leading-relaxed max-w-2xl">
                Aadiyog is your holistic fitness companion, designed to empower you with personalized yoga coaching and community support. Join us to enhance your practice, connect with fellow enthusiasts, and achieve your wellness goals.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://play.google.com/store/apps/details?id=in.aadiyog.app.twa" target="_blank" rel="noopener noreferrer">
              <Button 
                size="lg"
                className="bg-[#f37003] w-full hover:bg-[#d86302] text-white px-8 text-base"
              >
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              </a>
              <Button 
                size="lg"
                variant="outline"
                className="text-base px-8"
              >
                Learn More
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border/50">
              <div>
                <div className="text-3xl font-bold text-foreground">10K+</div>
                <div className="text-sm text-foreground/60 mt-1">Active Users</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground">500+</div>
                <div className="text-sm text-foreground/60 mt-1">Yoga Sessions</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground">4.9</div>
                <div className="text-sm text-foreground/60 mt-1">User Rating</div>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative lg:h-[600px]">
            <div className="absolute inset-0 bg-gradient-to-br from-[#f37003]/10 to-transparent rounded-3xl" />
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1635545999375-057ee4013deb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwd2VsbG5lc3MlMjBtZWRpdGF0aW9ufGVufDF8fHx8MTc2OTA2OTU5MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Yoga wellness meditation"
              className="w-full h-full object-cover rounded-3xl shadow-2xl"
            />
            
            {/* Floating Card */}
            <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-border/50">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-[#f37003]/10 flex items-center justify-center">
                  <span className="text-2xl">🧘</span>
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-foreground">Start Your Journey Today</div>
                  <div className="text-sm text-foreground/60">Personalized coaching awaits</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
