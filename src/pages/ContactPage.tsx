import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";

const contactInfo = [
  // {
  //   icon: MapPin,
  //   title: "Visit Us",
  //   details: ["123 Wellness Avenue", "Bangalore, Karnataka 560001", "India"]
  // },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+91 80 1234 5678", "+91 80 8765 4321", "Mon-Sat: 9 AM - 6 PM"]
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["support@aadiyog.com", "sales@aadiyog.com", "careers@aadiyog.com"]
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Monday - Friday: 9 AM - 6 PM", "Saturday: 10 AM - 4 PM", "Sunday: Closed"]
  }
];

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
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
                Get In Touch
              </span>
            </div>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-foreground mb-6">
              We're Here to{" "}
              <span className="text-[#f37003]">Help</span>
            </h1>
            <p className="text-lg text-foreground/60 leading-relaxed">
              Have questions about Aadiyog? Our team is ready to assist you with anything you need.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="p-6 border-border/50 hover:border-[#f37003]/30 transition-all hover:shadow-lg bg-white text-center">
                <div className="mb-4">
                  <div className="inline-flex items-center justify-center h-14 w-14 rounded-xl bg-[#f37003]/10">
                    <info.icon className="h-7 w-7 text-[#f37003]" strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {info.title}
                </h3>
                <div className="space-y-1">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-sm text-foreground/60">
                      {detail}
                    </p>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className=" gap-12">
            {/* Contact Form */}
            <div>
              <div className="mb-8 text-center">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Send Us a Message
                </h2>
                <p className="text-foreground/60">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help?"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us more about your inquiry..."
                    rows={6}
                    className="w-full resize-none"
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-[#f37003] hover:bg-[#d86302] text-white"
                >
                  Send Message
                </Button>
              </form>
            </div>

            {/* Map Placeholder */}
            {/* <div>
              <Card className="h-full min-h-[600px] overflow-hidden border-border/50 bg-muted/30">
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#f37003]/5 to-transparent" />
                  <div className="relative z-10 text-center p-8">
                    <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-[#f37003]/10 mb-6">
                      <MapPin className="h-10 w-10 text-[#f37003]" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      Our Location
                    </h3>
                    <p className="text-foreground/60 mb-4">
                      123 Wellness Avenue<br />
                      Bangalore, Karnataka 560001<br />
                      India
                    </p>
                    <a 
                      href="https://maps.google.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-[#f37003] font-medium hover:text-[#d86302] transition-colors group"
                    >
                      Open in Google Maps
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
              </Card>
            </div> */}
          </div>
        </div>
      </section>

      {/* FAQ Quick Links */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Need Quick Answers?
          </h2>
          <p className="text-foreground/60 mb-8">
            Check out our frequently asked questions or browse our help center
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="outline"
              className="border-[#f37003] text-[#f37003] hover:bg-[#f37003]/10"
            >
              Visit Help Center
            </Button>
            <Button 
              variant="outline"
            >
              View FAQs
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
