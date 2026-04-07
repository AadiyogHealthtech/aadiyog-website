import { Hero } from "../components/Hero";
import { Features } from "../components/Features";
import { Benefits } from "../components/Benefits";
import { HowItWorks } from "../components/HowItWorks";
import { Testimonials } from "../components/Testimonials";
import { CTA } from "../components/CTA";

export function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <Benefits />
      <HowItWorks />
      <Testimonials />
      <CTA />
    </>
  );
}
