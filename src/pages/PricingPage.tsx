import { useState } from "react";
import { Check } from "lucide-react";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";

const plans = [
  {
    name: "Free",
    price: "₹0",
    period: "forever",
    description: "Perfect for getting started with yoga basics",
    features: [
      "5 basic workout sessions per month",
      "Limited pose library",
      "Basic posture feedback",
      "Community access",
      "Progress tracking",
    ],
    notIncluded: [
      "AI-powered personalization",
      "Unlimited workouts",
      "Nutrition guidance",
      "One-on-one coaching",
      "Advanced analytics",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Plus",
    price: "₹299",
    period: "per month",
    description: "Everything you need for a complete wellness journey",
    features: [
      "Unlimited AI-curated workouts",
      "Full pose library access",
      "Real-time posture correction",
      "Personalized nutrition plans",
      "Advanced progress analytics",
      "Community & challenges",
      "Priority support",
      "Offline workout downloads",
    ],
    notIncluded: ["One-on-one coaching sessions", "Custom meal plans"],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Pro",
    price: "₹999",
    period: "per month",
    description: "Premium features plus dedicated coaching",
    features: [
      "Everything in Premium",
      "2 one-on-one coaching sessions/month",
      "Custom workout programs",
      "Personalized meal planning",
      "Weekly progress reviews",
      "Direct coach messaging",
      "Family sharing (up to 4 members)",
      "Exclusive workshops & events",
    ],
    notIncluded: [],
    cta: "Start Free Trial",
    highlighted: false,
  },
];

const faqs = [
  {
    question: "Can I cancel my subscription anytime?",
    answer:
      "Yes, you can cancel your subscription at any time. Your access will continue until the end of your current billing period.",
  },
  {
    question: "Is there a free trial available?",
    answer:
      "Yes! Premium and Elite plans come with a 14-day free trial. No credit card required to start.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, debit cards, UPI, net banking, and popular digital wallets.",
  },
  {
    question: "Can I upgrade or downgrade my plan?",
    answer:
      "Absolutely! You can change your plan at any time. Changes take effect at the start of your next billing cycle.",
  },
  {
    question: "Do you offer student or senior discounts?",
    answer:
      "Yes, we offer 20% discounts for students and seniors. Contact our support team to verify your eligibility.",
  },
  {
    question: "What if I'm not satisfied with the service?",
    answer:
      "We offer a 30-day money-back guarantee. If you're not satisfied, contact us for a full refund within 30 days of purchase.",
  },
];

export function PricingPage() {
  const [highlightedIndex, setHighlightedIndex] = useState(1);
  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-block mb-4">
              <span className="text-sm font-medium text-[#f37003] tracking-wide uppercase">
                Pricing Plans
              </span>
            </div>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-foreground mb-6">
              Choose Your <span className="text-[#f37003]">Perfect Plan</span>
            </h1>
            <p className="text-lg text-foreground/60 leading-relaxed">
              Start free and upgrade as you grow. All plans include our core
              features to help you achieve your wellness goals.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 lg:gap-8">
            {plans.map((plan, index) => (
              <Card
                key={index}
                onClick={() => setHighlightedIndex(index)}
                className={`relative overflow-hidden transition-all duration-200 ${
                  highlightedIndex === index
                    ? "border-2 border-[#f37003] shadow-[0_0_7px_#f37003]"
                    : "border-2 border-border/50"
                }`}
              >
                {index === 1 && (
                  <div className="absolute top-0 left-0 right-0 bg-[#f37003] text-white text-center py-[0.3rem] text-sm font-medium">
                    Most Popular
                  </div>
                )}

                <div className="p-8">
                  {/* Plan Header */}
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-sm text-foreground/60 mb-6">
                      {plan.description}
                    </p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl lg:text-5xl font-bold text-foreground">
                        {plan.price}
                      </span>
                      <span className="text-foreground/60">/{plan.period}</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button
                    className={`w-full mb-8  ${
                      highlightedIndex === index
                        ? "bg-[#f37003] hover:bg-[#d86302] text-white"
                        : "bg-foreground hover:bg-foreground/90 text-white"
                    }`}
                  >
                    {plan.cta}
                  </Button>

                  {/* Features List */}
                  <div className="space-y-4">
                    <p className="text-sm font-medium text-foreground/80">
                      What's included:
                    </p>
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="mt-0.5 h-5 w-5 rounded-full bg-[#f37003]/10 flex items-center justify-center flex-shrink-0">
                          <Check
                            className="h-3 w-3 text-[#f37003]"
                            strokeWidth={3}
                          />
                        </div>
                        <span className="text-sm text-foreground/80">
                          {feature}
                        </span>
                      </div>
                    ))}
                    {plan.notIncluded.length > 0 && (
                      <>
                        {plan.notIncluded.map((feature, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-3 opacity-40"
                          >
                            <div className="mt-0.5 h-5 w-5 rounded-full bg-foreground/10 flex items-center justify-center flex-shrink-0">
                              <svg
                                className="h-3 w-3 text-foreground"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={3}
                                  d="M6 18L18 6M6 6l12 12"
                                />
                              </svg>
                            </div>
                            <span className="text-sm text-foreground/60">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Enterprise CTA */}
          <div className="mt-16 text-center">
            <Card className="p-12 border-border/50 bg-gradient-to-br from-muted/50 to-background">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Looking for Enterprise Solutions?
              </h3>
              <p className="text-foreground/60 mb-6 max-w-2xl mx-auto">
                Custom plans for teams, studios, and organizations. Get
                dedicated support, advanced analytics, and flexible pricing.
              </p>
              <Button
                variant="outline"
                className="border-[#f37003] text-[#f37003] hover:bg-[#f37003]/10"
              >
                Contact Sales Team
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 lg:py-32 bg-muted/30">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-foreground/60">
              Everything you need to know about our pricing
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="p-6 border-border/50 bg-white">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {faq.question}
                </h3>
                <p className="text-foreground/60 leading-relaxed">
                  {faq.answer}
                </p>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-foreground/60 mb-4">Still have questions?</p>
            <a
              href="#"
              className="inline-flex items-center text-[#f37003] font-medium hover:text-[#d86302] transition-colors group"
            >
              Contact our support team
              <svg
                className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform"
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
          </div>
        </div>
      </section>
    </div>
  );
}
