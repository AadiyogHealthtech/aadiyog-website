import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Heart, Users, TrendingUp, Zap, MapPin, Clock, Briefcase } from "lucide-react";
import { useState } from "react";

const perks = [
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive health insurance and free premium Aadiyog membership"
  },
  {
    icon: Users,
    title: "Work-Life Balance",
    description: "Flexible working hours and remote work options"
  },
  {
    icon: TrendingUp,
    title: "Growth Opportunities",
    description: "Career development programs and learning budgets"
  },
  {
    icon: Zap,
    title: "Innovative Culture",
    description: "Work with cutting-edge AI technology and make an impact"
  }
];

const openPositions = [
  {
    title: "Senior Full-Stack Developer",
    department: "Engineering",
    location: "Bangalore, India",
    type: "Full-time",
    description: "Build and scale our AI-powered yoga platform with modern web technologies."
  },
  {
    title: "AI/ML Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: "Develop advanced computer vision models for posture detection and correction."
  },
  {
    title: "Product Designer",
    department: "Design",
    location: "Bangalore, India",
    type: "Full-time",
    description: "Create beautiful, intuitive experiences for our wellness platform."
  },
  {
    title: "Yoga Instructor & Coach",
    department: "Wellness",
    location: "Remote",
    type: "Contract",
    description: "Guide users through their wellness journey with expert coaching."
  },
  {
    title: "Marketing Manager",
    department: "Marketing",
    location: "Bangalore, India",
    type: "Full-time",
    description: "Drive growth through creative campaigns and strategic partnerships."
  },
  {
    title: "Customer Success Specialist",
    department: "Support",
    location: "Remote",
    type: "Full-time",
    description: "Help users achieve their wellness goals through exceptional support."
  }
];

export function CareersPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    position: "",
    brief: "",
    resume: null as File | null
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Application submitted:", formData);
    // Handle form submission
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({
        ...formData,
        resume: e.target.files[0]
      });
    }
  };

  const handlePositionChange = (value: string) => {
    setFormData({
      ...formData,
      position: value
    });
  };

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-block mb-4">
              <span className="text-sm font-medium text-[#f37003] tracking-wide uppercase">
                Join Our Team
              </span>
            </div>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-foreground mb-6">
              Build the Future of{" "}
              <span className="text-[#f37003]">Wellness</span>
            </h1>
            <p className="text-lg text-foreground/60 leading-relaxed">
              Join our mission to make holistic fitness accessible to everyone through innovative technology and passionate people.
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground mb-6">
              Why Join Aadiyog?
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              We're building something special, and we want you to be part of it
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {perks.map((perk, index) => (
              <Card key={index} className="p-8 text-center border-border/50 hover:border-[#f37003]/30 transition-all hover:shadow-lg bg-white">
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center h-14 w-14 rounded-xl bg-[#f37003]/10">
                    <perk.icon className="h-7 w-7 text-[#f37003]" strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {perk.title}
                </h3>
                <p className="text-sm text-foreground/60 leading-relaxed">
                  {perk.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground mb-6">
              Open Positions
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              Find your perfect role and start making an impact
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {openPositions.map((position, index) => (
              <Card key={index} className="p-8 border-border/50 hover:border-[#f37003]/30 transition-all hover:shadow-lg bg-white">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-[#f37003]/10 text-[#f37003] text-xs font-medium">
                    {position.department}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {position.title}
                </h3>

                <p className="text-foreground/60 mb-6">
                  {position.description}
                </p>

                <div className="flex flex-wrap gap-4 text-sm text-foreground/60 mb-6">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>{position.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{position.type}</span>
                  </div>
                </div>

                <Button 
                  className="w-full bg-[#f37003] hover:bg-[#d86302] text-white"
                  onClick={() => {
                    const applicationForm = document.getElementById('application-form');
                    applicationForm?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Apply Now
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="application-form" className="py-24 bg-background">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground mb-4">
              Apply for a Position
            </h2>
            <p className="text-lg text-foreground/60">
              Fill out the form below to submit your application
            </p>
          </div>

          <Card className="p-8 lg:p-12 border-border/50 bg-white">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="position">Position *</Label>
                <Select onValueChange={handlePositionChange} required>
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Select a position" />
                  </SelectTrigger>
                  <SelectContent>
                    {openPositions.map((position, index) => (
                      <SelectItem key={index} value={position.title}>
                        {position.title}
                      </SelectItem>
                    ))}
                    <SelectItem value="other">Other Position</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="brief">Tell Us About Yourself *</Label>
                <Textarea
                  id="brief"
                  name="brief"
                  required
                  value={formData.brief}
                  onChange={handleChange}
                  placeholder="Why are you interested in this position? What makes you a great fit?"
                  rows={6}
                  className="mt-2 resize-none"
                />
              </div>

              <div>
                <Label htmlFor="resume">Resume/CV *</Label>
                <div className="mt-2">
                  <Input
                    id="resume"
                    name="resume"
                    type="file"
                    required
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx"
                    className="cursor-pointer"
                  />
                  <p className="text-xs text-foreground/60 mt-2">
                    Accepted formats: PDF, DOC, DOCX (Max 5MB)
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <Button 
                  type="submit"
                  className="w-full bg-[#f37003] hover:bg-[#d86302] text-white"
                >
                  Submit Application
                </Button>
              </div>

              <p className="text-xs text-foreground/60 text-center">
                By submitting this form, you agree to our Privacy Policy and Terms of Service
              </p>
            </form>
          </Card>
        </div>
      </section>

      {/* Culture */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Don't See the Right Role?
          </h2>
          <p className="text-foreground/60 mb-8">
            We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <Button 
            variant="outline"
            className="border-[#f37003] text-[#f37003] hover:bg-[#f37003]/10"
          >
            Send General Application
          </Button>
        </div>
      </section>
    </div>
  );
}
