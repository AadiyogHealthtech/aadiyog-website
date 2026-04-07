import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import {
  UserCircle,
  Sparkles,
  Camera,
  CheckCircle,
  Activity,
  BarChart,
} from "lucide-react";
import { Card } from "../components/ui/card";

const mainSteps = [
  {
    number: "01",
    icon: UserCircle,
    title: "Share Your Health Profile",
    description:
      "Begin by telling us about yourself—your fitness level, health conditions, wellness goals, and any specific areas you'd like to focus on.",
    details: [
      "Age, fitness level, and experience",
      "Health conditions and limitations",
      "Personal wellness goals",
      "Preferred workout duration and intensity",
    ],
  },
  {
    number: "02",
    icon: Sparkles,
    title: "AI Curates Your Workouts",
    description:
      "Our advanced AI analyzes your profile and creates personalized yoga workout plans tailored specifically to your unique needs and objectives.",
    details: [
      "Customized workout sequences",
      "Difficulty-appropriate poses",
      "Progressive training plans",
      "Nutrition recommendations",
    ],
  },
  {
    number: "03",
    icon: Camera,
    title: "Practice with Real-Time Guidance",
    description:
      "Start your workout with camera-assisted coaching. Our AI guides you through each pose with visual cues and instant feedback.",
    details: [
      "Camera calibration for optimal positioning",
      "On-screen path visualization",
      "Real-time posture correction",
      "Breathing rhythm guidance",
    ],
  },
];

const workoutProcess = [
  {
    icon: Activity,
    title: "Select Your Workout",
    description:
      "Choose from your personalized workout library based on your energy level and available time.",
  },
  {
    icon: Camera,
    title: "Camera Setup & Calibration",
    description:
      "Position yourself in front of the camera. Our system calibrates to ensure you're at the perfect distance for accurate tracking.",
  },
  {
    icon: CheckCircle,
    title: "Follow Visual Paths",
    description:
      "Watch on-screen paths that guide your limbs and body through each pose. Move along the highlighted paths to achieve proper form.",
  },
  {
    icon: BarChart,
    title: "Receive Instant Feedback",
    description:
      "Get real-time corrections on your posture, breathing, and alignment. Track your progress and celebrate improvements.",
  },
];

export function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-block mb-4">
              <span className="text-sm font-medium text-[#f37003] tracking-wide uppercase">
                How It Works
              </span>
            </div>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-foreground mb-6">
              Your Path to{" "}
              <span className="text-[#f37003]">Personalized Wellness</span>
            </h1>
            <p className="text-lg text-foreground/60 leading-relaxed">
              Discover how Aadiyog combines AI technology with expert coaching
              to create a truly personalized yoga experience
            </p>
          </div>
        </div>
      </section>

      {/* Main Steps */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-24">
            {mainSteps.map((step, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div
                  className={`space-y-6 ${index % 2 === 1 ? "lg:order-2" : ""}`}
                >
                  <div className="inline-flex items-center gap-4">
                    <div className="h-16 w-16 rounded-2xl bg-white border-2 border-[#f37003]/20 flex items-center justify-center">
                      <span className="text-2xl font-bold text-[#f37003]">
                        {step.number}
                      </span>
                    </div>
                    <div className="h-14 w-14 rounded-xl bg-[#f37003]/10 flex items-center justify-center">
                      <step.icon
                        className="h-7 w-7 text-[#f37003]"
                        strokeWidth={1.5}
                      />
                    </div>
                  </div>

                  <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground">
                    {step.title}
                  </h2>

                  <p className="text-lg text-foreground/60 leading-relaxed">
                    {step.description}
                  </p>

                  <ul className="space-y-3 pt-4">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="mt-1 h-5 w-5 rounded-full bg-[#f37003]/10 flex items-center justify-center flex-shrink-0">
                          <CheckCircle
                            className="h-3 w-3 text-[#f37003]"
                            strokeWidth={3}
                          />
                        </div>
                        <span className="text-foreground/80">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visual */}
                <div
                  className={`relative ${index % 2 === 1 ? "lg:order-1" : ""}`}
                >
                  <div className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#f37003]/10 to-transparent rounded-3xl" />
                    <ImageWithFallback
                      src={
                        index === 0
                          ? "https://images.unsplash.com/photo-1635545999375-057ee4013deb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwd2VsbG5lc3MlMjBtZWRpdGF0aW9ufGVufDF8fHx8MTc2OTA2OTU5MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                          : index === 1
                            ? "https://images.unsplash.com/photo-1568952433726-3896e3881c65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwaW5ub3ZhdGlvbnxlbnwxfHx8fDE3NjkwMDkxNjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                            : "https://images.unsplash.com/photo-1758875568758-daad5146648c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGglMjBwcm9ncmVzcyUyMHRyYWNraW5nfGVufDF8fHx8MTc2OTA2OTU5Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      }
                      alt={step.title}
                      className="w-full h-full object-cover rounded-3xl shadow-2xl"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workout Process */}
      <section className="py-24 lg:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground mb-6">
              During Your Workout
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              Here's what happens when you start a workout session
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workoutProcess.map((step, index) => (
              <Card
                key={index}
                className="p-8 border-border/50 hover:border-[#f37003]/30 transition-all hover:shadow-lg bg-white"
              >
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center h-14 w-14 rounded-xl bg-[#f37003]/10">
                    <step.icon
                      className="h-7 w-7 text-[#f37003]"
                      strokeWidth={1.5}
                    />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-foreground/60 leading-relaxed">
                  {step.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground mb-6">
            Ready to Transform Your Practice?
          </h2>
          <p className="text-lg text-foreground/60 mb-8">
            Join thousands of users who have already started their wellness
            journey with Aadiyog
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://play.google.com/store/apps/details?id=in.aadiyog.app.twa"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-[#f37003] hover:bg-[#d86302] text-white font-medium transition-colors"
            >
              Start Free Trial
              <svg
                className="ml-2 h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg border border-border hover:border-[#f37003]/30 text-foreground font-medium transition-colors"
            >
              Watch Demo
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
