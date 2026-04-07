import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Target, Heart, Users, Award } from "lucide-react";
import { Card } from "../components/ui/card";

// Partner Logos
import logoSVYASA from "figma:asset/fd652dc67efad2d84c3c132a3ca606346ba7b0ec.png";
import logoSTPI from "figma:asset/cbd0bfb3d68994f74dad3e890f7c544ecb1f68ed.png";
import logoWadhwani from "figma:asset/7c999f2f505885d46083ab30363c895485ec83d3.png";
import logoNeuron from "figma:asset/5dc2d02f1b9f245425bb855652a896e7ba998d45.png";
import logoImage from "figma:asset/b4cf4ca93a372753771e52f05da645ead10b9b41.png";
import Support from "../components/ui/Support";

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description: "To make holistic wellness accessible to everyone through innovative AI-powered yoga coaching and personalized fitness guidance."
  },
  {
    icon: Heart,
    title: "Our Vision",
    description: "A world where everyone has the tools and support to achieve their wellness goals and live healthier, happier lives."
  },
  {
    icon: Users,
    title: "Community First",
    description: "Building a supportive community where fitness enthusiasts connect, share, and motivate each other on their wellness journey."
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Delivering the highest quality coaching, innovative technology, and exceptional user experience in every interaction."
  }
];

const team = [
  {
    name: "Manas Tiwari",
    role: "CEO & Co-Founder",
    avatar: "MT",
    bio: "AI & ML expert"
  },
  {
    name: "Dr. Vandana Dubey",
    role: "COO & Co-Founder",
    avatar: "VD",
    bio: "13+ yr Business Experience"
  },
  
];

const milestones = [
  { year: "2020", event: "Aadiyog founded with a vision to revolutionize yoga practice" },
  { year: "2021", event: "Launched AI-powered posture correction technology" },
  { year: "2022", event: "Reached 10,000+ active users across India" },
  { year: "2023", event: "Expanded internationally and introduced nutrition tracking" },
  { year: "2024", event: "Partnership with leading wellness centers and yoga studios" },
  { year: "2025", event: "50,000+ users and recognized as Best Wellness App" }
];

const partners = [
  { name: "S-VYASA", logo: logoSVYASA },
  { name: "STPI", logo: logoSTPI },
  { name: "Wadhwani Foundation", logo: logoWadhwani },
  { name: "Neuron", logo: logoNeuron },
  { name: "IMAGE", logo: logoImage },
];

export function AboutPage() {
  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block mb-4">
              <span className="text-sm font-medium text-[#f37003] tracking-wide uppercase">
                About Aadiyog
              </span>
            </div>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-foreground mb-6">
              Empowering Your{" "}
              <span className="text-[#f37003]">Wellness Journey</span>
            </h1>
            <p className="text-lg text-foreground/60 leading-relaxed">
              We're on a mission to make holistic fitness accessible to everyone through cutting-edge AI technology and personalized coaching.
            </p>
          </div>

          <div className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1642645550550-c2a442d17e04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwc3R1ZGlvJTIwcGVhY2VmdWx8ZW58MXx8fHwxNzY4OTk1NzA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Yoga studio peaceful"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent" />
          </div>
        </div>
      </section>

      {/* Supported By Section */}
      <section className="py-20 border-y border-border/50 bg-white">
        {/* <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold text-foreground tracking-tight mb-2">
              Supported By
            </h2>
            <p className="text-foreground/60 max-w-2xl mx-auto">
              Trusted by leading institutions and innovation hubs
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-16">
            {partners.map((partner, index) => (
              <div 
                key={index} 
                className="group relative flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
              >
                <img 
                  src={partner.logo} 
                  alt={`${partner.name} logo`} 
                  className="h-12 md:h-16 lg:h-20 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div> */}
        <Support/>
      </section>

      {/* Mission & Values */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground mb-6">
              Our Values
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-8 text-center border-border/50 hover:border-[#f37003]/30 transition-all hover:shadow-lg">
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center h-14 w-14 rounded-xl bg-[#f37003]/10">
                    <value.icon className="h-7 w-7 text-[#f37003]" strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-sm text-foreground/60 leading-relaxed">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="py-24 lg:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground mb-6">
              Meet Our Team
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              Passionate experts dedicated to your wellness journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="p-8 text-center border-border/50 hover:shadow-lg transition-all bg-white">
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-gradient-to-br from-[#f37003] to-[#ff8533] text-white text-2xl font-semibold">
                    {member.avatar}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {member.name}
                </h3>
                <p className="text-sm text-[#f37003] font-medium mb-2">
                  {member.role}
                </p>
                <p className="text-sm text-foreground/60">
                  {member.bio}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Timeline */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground mb-6">
              Our Journey
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              Key milestones that shaped Aadiyog
            </p>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex gap-8 items-start group">
                <div className="flex-shrink-0 w-24">
                  <div className="text-2xl font-bold text-[#f37003]">
                    {milestone.year}
                  </div>
                </div>
                <div className="flex-1 pb-8 border-l-2 border-border/50 pl-8 group-hover:border-[#f37003]/30 transition-colors relative">
                  <div className="absolute left-0 top-2 -translate-x-1/2 h-4 w-4 rounded-full bg-[#f37003] border-4 border-background" />
                  <p className="text-foreground/80 leading-relaxed">
                    {milestone.event}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
