import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function CTA() {
  return (
    <section className="py-24 lg:py-32 bg-muted/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="relative">
          {/* Background Gradient Effects */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#f37003]/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#f37003]/5 rounded-full blur-3xl" />

          {/* Main Card */}
          <div className="relative bg-gradient-to-br from-foreground via-foreground/95 to-foreground/90 rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Content */}
              <div className="p-12 lg:p-16 space-y-8">
                <div className="space-y-6">
                  <div className="inline-block">
                    <span className="text-sm font-medium text-[#f37003] tracking-wide uppercase">
                      Get Started Today
                    </span>
                  </div>

                  <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight text-white leading-tight">
                    Join the Aadiyog Community Today
                  </h2>

                  <p className="text-lg text-white/70 leading-relaxed">
                    Experience personalized wellness with our AI-coach. Sign up
                    for a free trial—no credit card required. Start your journey
                    to better health and fitness.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://play.google.com/store/apps/details?id=in.aadiyog.app.twa"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="lg"
                      className="w-full bg-[#f37003] hover:bg-[#d86302] text-white px-8 text-base"
                    >
                      Start Free Trial
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </a>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/20 hover:text-white hover:bg-white/10 text-base px-8"
                  >
                    Contact Sales
                  </Button>
                </div>

                {/* Trust Indicators */}
                <div className="flex flex-wrap items-center gap-6 pt-4 text-white/60 text-sm">
                  <div className="flex items-center gap-2">
                    <svg
                      className="h-5 w-5 text-[#f37003]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>No credit card required</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      className="h-5 w-5 text-[#f37003]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>14-day free trial</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      className="h-5 w-5 text-[#f37003]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Cancel anytime</span>
                  </div>
                </div>
              </div>

              {/* Right Column - Image */}
              <div className="relative h-full min-h-[400px] lg:min-h-[600px]">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1758875568433-7b8301847439?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb25hbCUyMGNvYWNoaW5nJTIwdHJhaW5pbmd8ZW58MXx8fHwxNzY5MDY5NTkxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Personal coaching training"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-foreground/50 to-transparent lg:from-foreground/20" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
