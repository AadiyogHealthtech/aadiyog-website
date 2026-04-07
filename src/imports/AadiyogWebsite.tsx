import svgPaths from "./svg-z2pxcm21ra";

function Group() {
  return (
    <div className="absolute css-2chd6x css-8zr56v left-1/2 size-[14px] top-1/2" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.001 14">
        <g id="Group">
          <path d={svgPaths.p228c81f0} fill="var(--fill-0, black)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function IconHome() {
  return (
    <div className="css-8zr56v relative shrink-0 size-[14px]" data-name="icon-home">
      <Group />
    </div>
  );
}

function PageTitle() {
  return (
    <div className="bg-[#e4e2df] h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Page Title">
      <div className="css-1lkilf css-gxdil1 flex-row items-center size-full">
        <div className="content-stretch css-1lkilf gap-[8px] items-center px-[12px] py-[2px] relative size-full">
          <IconHome />
          <p className="css-8zr56v css-g0mm18 css-sepkz3 flex-[1_0_0] font-['Roboto:Medium',sans-serif] font-medium leading-[20px] min-h-px min-w-px relative text-[14px] text-black text-ellipsis">Home</p>
        </div>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch css-1lkilf flex-col items-start relative shrink-0 w-full" data-name="Text">
      <p className="css-3insbv css-4hzbpn css-8zr56v font-['Roboto:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[13px] text-black w-[180px]">Navbar</p>
    </div>
  );
}

function Navbar() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="Navbar">
      <div aria-hidden="true" className="absolute border border-black border-solid css-gs60ek inset-0 pointer-events-none rounded-[6px]" />
      <div className="css-1lkilf flex-col justify-center size-full">
        <div className="content-stretch css-1lkilf flex-col items-start justify-center px-[10px] py-[8px] relative w-full">
          <Text />
        </div>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch css-1lkilf flex-col gap-[3px] items-start leading-[normal] relative shrink-0 text-black w-full" data-name="Text">
      <p className="css-3insbv css-4hzbpn css-8zr56v font-['Roboto:Medium',sans-serif] font-medium relative shrink-0 text-[13px] w-[180px]">Hero Header Section</p>
      <p className="css-3insbv css-4hzbpn css-8zr56v font-['Roboto:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[10px] w-[min-content]">{`Introduction to Aadiyog's holistic fitness platform with a call-to-action to learn more.`}</p>
    </div>
  );
}

function HeroHeaderSection() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="Hero Header Section">
      <div aria-hidden="true" className="absolute border border-black border-solid css-gs60ek inset-0 pointer-events-none rounded-[6px]" />
      <div className="css-1lkilf flex-col justify-center size-full">
        <div className="content-stretch css-1lkilf flex-col items-start justify-center px-[10px] py-[8px] relative w-full">
          <Text1 />
        </div>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch css-1lkilf flex-col gap-[3px] items-start leading-[normal] relative shrink-0 text-black w-full" data-name="Text">
      <p className="css-3insbv css-4hzbpn css-8zr56v font-['Roboto:Medium',sans-serif] font-medium relative shrink-0 text-[13px] w-[180px]">Features List Section</p>
      <p className="css-3insbv css-4hzbpn css-8zr56v font-['Roboto:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[10px] w-[min-content]">Brief overview of the key features: Posture and Breathing Correction, Personal AI Coach, and Social Media Element.</p>
    </div>
  );
}

function FeaturesListSection() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="Features List Section">
      <div aria-hidden="true" className="absolute border border-black border-solid css-gs60ek inset-0 pointer-events-none rounded-[6px]" />
      <div className="css-1lkilf flex-col justify-center size-full">
        <div className="content-stretch css-1lkilf flex-col items-start justify-center px-[10px] py-[8px] relative w-full">
          <Text2 />
        </div>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch css-1lkilf flex-col gap-[3px] items-start leading-[normal] relative shrink-0 text-black w-full" data-name="Text">
      <p className="css-3insbv css-4hzbpn css-8zr56v font-['Roboto:Medium',sans-serif] font-medium relative shrink-0 text-[13px] w-[180px]">Benefits Section</p>
      <p className="css-3insbv css-4hzbpn css-8zr56v font-['Roboto:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[10px] w-[min-content]">Highlight the benefits of using Aadiyog, such as improved fitness, personalized coaching, and community support.</p>
    </div>
  );
}

function BenefitsSection() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="Benefits Section">
      <div aria-hidden="true" className="absolute border border-black border-solid css-gs60ek inset-0 pointer-events-none rounded-[6px]" />
      <div className="css-1lkilf flex-col justify-center size-full">
        <div className="content-stretch css-1lkilf flex-col items-start justify-center px-[10px] py-[8px] relative w-full">
          <Text3 />
        </div>
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="content-stretch css-1lkilf flex-col gap-[3px] items-start leading-[normal] relative shrink-0 text-black w-full" data-name="Text">
      <p className="css-3insbv css-4hzbpn css-8zr56v font-['Roboto:Medium',sans-serif] font-medium relative shrink-0 text-[13px] w-[180px]">How It Works Section</p>
      <p className="css-3insbv css-4hzbpn css-8zr56v font-['Roboto:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[10px] w-[min-content]">Step-by-step explanation of how users can get started with Aadiyog and what they can expect from the platform.</p>
    </div>
  );
}

function HowItWorksSection() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="How It Works Section">
      <div aria-hidden="true" className="absolute border border-black border-solid css-gs60ek inset-0 pointer-events-none rounded-[6px]" />
      <div className="css-1lkilf flex-col justify-center size-full">
        <div className="content-stretch css-1lkilf flex-col items-start justify-center px-[10px] py-[8px] relative w-full">
          <Text4 />
        </div>
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="content-stretch css-1lkilf flex-col gap-[3px] items-start leading-[normal] relative shrink-0 text-black w-full" data-name="Text">
      <p className="css-3insbv css-4hzbpn css-8zr56v font-['Roboto:Medium',sans-serif] font-medium relative shrink-0 text-[13px] w-[180px]">Testimonial Section</p>
      <p className="css-3insbv css-4hzbpn css-8zr56v font-['Roboto:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[10px] w-[min-content]">Showcase positive user feedback and success stories to build trust and credibility.</p>
    </div>
  );
}

function TestimonialSection() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="Testimonial Section">
      <div aria-hidden="true" className="absolute border border-black border-solid css-gs60ek inset-0 pointer-events-none rounded-[6px]" />
      <div className="css-1lkilf flex-col justify-center size-full">
        <div className="content-stretch css-1lkilf flex-col items-start justify-center px-[10px] py-[8px] relative w-full">
          <Text5 />
        </div>
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="content-stretch css-1lkilf flex-col gap-[3px] items-start leading-[normal] relative shrink-0 text-black w-full" data-name="Text">
      <p className="css-3insbv css-4hzbpn css-8zr56v font-['Roboto:Medium',sans-serif] font-medium relative shrink-0 text-[13px] w-[180px]">CTA Section</p>
      <p className="css-3insbv css-4hzbpn css-8zr56v font-['Roboto:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[10px] w-[min-content]">Encourage visitors to sign up for a free trial or create an account to get started with Aadiyog.</p>
    </div>
  );
}

function CtaSection() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="CTA Section">
      <div aria-hidden="true" className="absolute border border-black border-solid css-gs60ek inset-0 pointer-events-none rounded-[6px]" />
      <div className="css-1lkilf flex-col justify-center size-full">
        <div className="content-stretch css-1lkilf flex-col items-start justify-center px-[10px] py-[8px] relative w-full">
          <Text6 />
        </div>
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="content-stretch css-1lkilf flex-col items-start relative shrink-0 w-full" data-name="Text">
      <p className="css-3insbv css-4hzbpn css-8zr56v font-['Roboto:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[13px] text-black w-[180px]">Footer</p>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="Footer">
      <div aria-hidden="true" className="absolute border border-black border-solid css-gs60ek inset-0 pointer-events-none rounded-[6px]" />
      <div className="css-1lkilf flex-col justify-center size-full">
        <div className="content-stretch css-1lkilf flex-col items-start justify-center px-[10px] py-[8px] relative w-full">
          <Text7 />
        </div>
      </div>
    </div>
  );
}

function PageWrapper() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Page Wrapper">
      <div className="css-1lkilf flex-col items-center size-full">
        <div className="content-stretch css-1lkilf flex-col gap-[10px] items-center p-[10px] relative w-full">
          <Navbar />
          <HeroHeaderSection />
          <FeaturesListSection />
          <BenefitsSection />
          <HowItWorksSection />
          <TestimonialSection />
          <CtaSection />
          <Footer />
        </div>
      </div>
    </div>
  );
}

function Home() {
  return (
    <div className="absolute content-stretch css-1lkilf css-gxdil1 flex-col gap-[8px] items-center left-[411px] rounded-[10px] top-0 w-[220px]" data-name="Home">
      <PageTitle />
      <PageWrapper />
    </div>
  );
}

function IconPage() {
  return (
    <div className="css-8zr56v relative shrink-0 size-[14px]" data-name="icon-page">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="icon-page">
          <path d={svgPaths.p3f2c3f80} fill="var(--fill-0, black)" id="Icon color" />
        </g>
      </svg>
    </div>
  );
}

function PageTitle1() {
  return (
    <div className="bg-[#e4e2df] h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Page Title">
      <div className="css-1lkilf css-gxdil1 flex-row items-center size-full">
        <div className="content-stretch css-1lkilf gap-[8px] items-center px-[12px] py-[2px] relative size-full">
          <IconPage />
          <p className="css-8zr56v css-g0mm18 css-sepkz3 flex-[1_0_0] font-['Roboto:Medium',sans-serif] font-medium leading-[20px] min-h-px min-w-px relative text-[14px] text-black text-ellipsis">About Us</p>
        </div>
      </div>
    </div>
  );
}

function Text8() {
  return (
    <div className="content-stretch css-1lkilf flex-col items-start relative shrink-0 w-full" data-name="Text">
      <p className="css-3insbv css-4hzbpn css-8zr56v font-['Roboto:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[13px] text-black w-[180px]">Navbar</p>
    </div>
  );
}

function Navbar1() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="Navbar">
      <div aria-hidden="true" className="absolute border border-black border-solid css-gs60ek inset-0 pointer-events-none rounded-[6px]" />
      <div className="css-1lkilf flex-col justify-center size-full">
        <div className="content-stretch css-1lkilf flex-col items-start justify-center px-[10px] py-[8px] relative w-full">
          <Text8 />
        </div>
      </div>
    </div>
  );
}

function Text9() {
  return (
    <div className="content-stretch css-1lkilf flex-col gap-[3px] items-start leading-[normal] relative shrink-0 text-black w-full" data-name="Text">
      <p className="css-3insbv css-4hzbpn css-8zr56v font-['Roboto:Medium',sans-serif] font-medium relative shrink-0 text-[13px] w-[180px]">Header Section</p>
      <p className="css-3insbv css-4hzbpn css-8zr56v font-['Roboto:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[10px] w-[min-content]">Introduction to the mission and vision of Aadiyog, emphasizing the goal of creating a holistic platform for fitness enthusiasts.</p>
    </div>
  );
}

function HeaderSection() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="Header Section">
      <div aria-hidden="true" className="absolute border border-black border-solid css-gs60ek inset-0 pointer-events-none rounded-[6px]" />
      <div className="css-1lkilf flex-col justify-center size-full">
        <div className="content-stretch css-1lkilf flex-col items-start justify-center px-[10px] py-[8px] relative w-full">
          <Text9 />
        </div>
      </div>
    </div>
  );
}

function Text10() {
  return (
    <div className="content-stretch css-1lkilf flex-col gap-[3px] items-start leading-[normal] relative shrink-0 text-black w-full" data-name="Text">
      <p className="css-3insbv css-4hzbpn css-8zr56v font-['Roboto:Medium',sans-serif] font-medium relative shrink-0 text-[13px] w-[180px]">About Section</p>
      <p className="css-3insbv css-4hzbpn css-8zr56v font-['Roboto:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[10px] w-[min-content]">Detailed story of how Aadiyog was founded, the inspiration behind the platform, and the journey so far.</p>
    </div>
  );
}

function AboutSection() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="About Section">
      <div aria-hidden="true" className="absolute border border-black border-solid css-gs60ek inset-0 pointer-events-none rounded-[6px]" />
      <div className="css-1lkilf flex-col justify-center size-full">
        <div className="content-stretch css-1lkilf flex-col items-start justify-center px-[10px] py-[8px] relative w-full">
          <Text10 />
        </div>
      </div>
    </div>
  );
}

function Text11() {
  return (
    <div className="content-stretch css-1lkilf flex-col gap-[3px] items-start leading-[normal] relative shrink-0 text-black w-full" data-name="Text">
      <p className="css-3insbv css-4hzbpn css-8zr56v font-['Roboto:Medium',sans-serif] font-medium relative shrink-0 text-[13px] w-[180px]">Team Section</p>
      <p className="css-3insbv css-4hzbpn css-8zr56v font-['Roboto:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[10px] w-[min-content]">Introduction to the core team members behind Aadiyog, including their roles and brief bios.</p>
    </div>
  );
}

function TeamSection() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="Team Section">
      <div aria-hidden="true" className="absolute border border-black border-solid css-gs60ek inset-0 pointer-events-none rounded-[6px]" />
      <div className="css-1lkilf flex-col justify-center size-full">
        <div className="content-stretch css-1lkilf flex-col items-start justify-center px-[10px] py-[8px] relative w-full">
          <Text11 />
        </div>
      </div>
    </div>
  );
}

function Text12() {
  return (
    <div className="content-stretch css-1lkilf flex-col gap-[3px] items-start leading-[normal] relative shrink-0 text-black w-full" data-name="Text">
      <p className="css-3insbv css-4hzbpn css-8zr56v font-['Roboto:Medium',sans-serif] font-medium relative shrink-0 text-[13px] w-[180px]">Timeline Section</p>
      <p className="css-3insbv css-4hzbpn css-8zr56v font-['Roboto:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[10px] w-[min-content]">Chronological timeline showcasing key milestones and achievements of Aadiyog since its inception.</p>
    </div>
  );
}

function TimelineSection() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="Timeline Section">
      <div aria-hidden="true" className="absolute border border-black border-solid css-gs60ek inset-0 pointer-events-none rounded-[6px]" />
      <div className="css-1lkilf flex-col justify-center size-full">
        <div className="content-stretch css-1lkilf flex-col items-start justify-center px-[10px] py-[8px] relative w-full">
          <Text12 />
        </div>
      </div>
    </div>
  );
}

function Text13() {
  return (
    <div className="content-stretch css-1lkilf flex-col gap-[3px] items-start leading-[normal] relative shrink-0 text-black w-full" data-name="Text">
      <p className="css-3insbv css-4hzbpn css-8zr56v font-['Roboto:Medium',sans-serif] font-medium relative shrink-0 text-[13px] w-[180px]">Client Logos List Section</p>
      <p className="css-3insbv css-4hzbpn css-8zr56v font-['Roboto:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[10px] w-[min-content]">Display logos of notable clients and partners who have collaborated with Aadiyog.</p>
    </div>
  );
}

function ClientLogosListSection() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="Client Logos List Section">
      <div aria-hidden="true" className="absolute border border-black border-solid css-gs60ek inset-0 pointer-events-none rounded-[6px]" />
      <div className="css-1lkilf flex-col justify-center size-full">
        <div className="content-stretch css-1lkilf flex-col items-start justify-center px-[10px] py-[8px] relative w-full">
          <Text13 />
        </div>
      </div>
    </div>
  );
}

function Text14() {
  return (
    <div className="content-stretch css-1lkilf flex-col gap-[3px] items-start leading-[normal] relative shrink-0 text-black w-full" data-name="Text">
      <p className="css-3insbv css-4hzbpn css-8zr56v font-['Roboto:Medium',sans-serif] font-medium relative shrink-0 text-[13px] w-[180px]">Testimonial Section</p>
      <p className="css-3insbv css-4hzbpn css-8zr56v font-['Roboto:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[10px] w-[min-content]">{`Feature testimonials from satisfied users and partners to highlight the platform's impact and success.`}</p>
    </div>
  );
}

function TestimonialSection1() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="Testimonial Section">
      <div aria-hidden="true" className="absolute border border-black border-solid css-gs60ek inset-0 pointer-events-none rounded-[6px]" />
      <div className="css-1lkilf flex-col justify-center size-full">
        <div className="content-stretch css-1lkilf flex-col items-start justify-center px-[10px] py-[8px] relative w-full">
          <Text14 />
        </div>
      </div>
    </div>
  );
}

function Text15() {
  return (
    <div className="content-stretch css-1lkilf flex-col gap-[3px] items-start leading-[normal] relative shrink-0 text-black w-full" data-name="Text">
      <p className="css-3insbv css-4hzbpn css-8zr56v font-['Roboto:Medium',sans-serif] font-medium relative shrink-0 text-[13px] w-[180px]">CTA Section</p>
      <p className="css-3insbv css-4hzbpn css-8zr56v font-['Roboto:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[10px] w-[min-content]">Encourage visitors to join the Aadiyog community, sign up for updates, or get in touch for more information.</p>
    </div>
  );
}

function CtaSection1() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="CTA Section">
      <div aria-hidden="true" className="absolute border border-black border-solid css-gs60ek inset-0 pointer-events-none rounded-[6px]" />
      <div className="css-1lkilf flex-col justify-center size-full">
        <div className="content-stretch css-1lkilf flex-col items-start justify-center px-[10px] py-[8px] relative w-full">
          <Text15 />
        </div>
      </div>
    </div>
  );
}

function Text16() {
  return (
    <div className="content-stretch css-1lkilf flex-col items-start relative shrink-0 w-full" data-name="Text">
      <p className="css-3insbv css-4hzbpn css-8zr56v font-['Roboto:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[13px] text-black w-[180px]">Footer</p>
    </div>
  );
}

function Footer1() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="Footer">
      <div aria-hidden="true" className="absolute border border-black border-solid css-gs60ek inset-0 pointer-events-none rounded-[6px]" />
      <div className="css-1lkilf flex-col justify-center size-full">
        <div className="content-stretch css-1lkilf flex-col items-start justify-center px-[10px] py-[8px] relative w-full">
          <Text16 />
        </div>
      </div>
    </div>
  );
}

function PageWrapper1() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Page Wrapper">
      <div className="css-1lkilf flex-col items-center size-full">
        <div className="content-stretch css-1lkilf flex-col gap-[10px] items-center p-[10px] relative w-full">
          <Navbar1 />
          <HeaderSection />
          <AboutSection />
          <TeamSection />
          <TimelineSection />
          <ClientLogosListSection />
          <TestimonialSection1 />
          <CtaSection1 />
          <Footer1 />
        </div>
      </div>
    </div>
  );
}

function AboutUs() {
  return (
    <div className="absolute content-stretch css-1lkilf css-gxdil1 flex-col gap-[8px] items-center left-0 rounded-[10px] top-[682px] w-[220px]" data-name="About Us">
      <PageTitle1 />
      <PageWrapper1 />
    </div>
  );
}

function IconPage1() {
  return (
    <div className="css-8zr56v relative shrink-0 size-[14px]" data-name="icon-page">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="icon-page">
          <path d={svgPaths.p3f2c3f80} fill="var(--fill-0, black)" id="Icon color" />
        </g>
      </svg>
    </div>
  );
}

function PageTitle2() {
  return (
    <div className="bg-[#e4e2df] h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Page Title">
      <div className="css-1lkilf css-gxdil1 flex-row items-center size-full">
        <div className="content-stretch css-1lkilf gap-[8px] items-center px-[12px] py-[2px] relative size-full">
          <IconPage1 />
          <p className="css-8zr56v css-g0mm18 css-sepkz3 flex-[1_0_0] font-['Roboto:Medium',sans-serif] font-medium leading-[20px] min-h-px min-w-px relative text-[14px] text-black text-ellipsis">Features</p>
        </div>
      </div>
    </div>
  );
}

function Text17() {
  return (
    <div className="content-stretch css-1lkilf flex-col items-start relative shrink-0 w-full" data-name="Text">
      <p className="css-3insbv css-4hzbpn css-8zr56v font-['Roboto:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[13px] text-black w-[180px]">Navbar</p>
    </div>
  );
}

function Navbar2() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="Navbar">
      <div aria-hidden="true" className="absolute border border-black border-solid css-gs60ek inset-0 pointer-events-none rounded-[6px]" />
      <div className="css-1lkilf flex-col justify-center size-full">
        <div className="content-stretch css-1lkilf flex-col items-start justify-center px-[10px] py-[8px] relative w-full">
          <Text17 />
        </div>
      </div>
    </div>
  );
}

function Text18() {
  return (
    <div className="content-stretch css-1lkilf flex-col gap-[3px] items-start leading-[normal] relative shrink-0 text-black w-full" data-name="Text">
      <p className="css-3insbv css-4hzbpn css-8zr56v font-['Roboto:Medium',sans-serif] font-medium relative shrink-0 text-[13px] w-[180px]">Header Section</p>
      <p className="css-3insbv css-4hzbpn css-8zr56v font-['Roboto:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[10px] w-[min-content]">{`Introduction to the features of Aadiyog's holistic fitness platform.`}</p>
    </div>
  );
}

function HeaderSection1() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="Header Section">
      <div aria-hidden="true" className="absolute border border-black border-solid css-gs60ek inset-0 pointer-events-none rounded-[6px]" />
      <div className="css-1lkilf flex-col justify-center size-full">
        <div className="content-stretch css-1lkilf flex-col items-start justify-center px-[10px] py-[8px] relative w-full">
          <Text18 />
        </div>
      </div>
    </div>
  );
}

function Text19() {
  return (
    <div className="content-stretch css-1lkilf flex-col gap-[3px] items-start leading-[normal] relative shrink-0 text-black w-full" data-name="Text">
      <p className="css-3insbv css-4hzbpn css-8zr56v font-['Roboto:Medium',sans-serif] font-medium relative shrink-0 text-[13px] w-[180px]">Features List Section</p>
      <p className="css-3insbv css-4hzbpn css-8zr56v font-['Roboto:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[10px] w-[min-content]">Overview of the three main features: Posture and Breathing Correction, Personal AI Coach, and Social Media Element.</p>
    </div>
  );
}

function FeaturesListSection1() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="Features List Section">
      <div aria-hidden="true" className="absolute border border-black border-solid css-gs60ek inset-0 pointer-events-none rounded-[6px]" />
      <div className="css-1lkilf flex-col justify-center size-full">
        <div className="content-stretch css-1lkilf flex-col items-start justify-center px-[10px] py-[8px] relative w-full">
          <Text19 />
        </div>
      </div>
    </div>
  );
}

function Text20() {
  return (
    <div className="content-stretch css-1lkilf flex-col gap-[3px] items-start leading-[normal] relative shrink-0 text-black w-full" data-name="Text">
      <p className="css-3insbv css-4hzbpn css-8zr56v font-['Roboto:Medium',sans-serif] font-medium relative shrink-0 text-[13px] w-[180px]">Feature Section</p>
      <p className="css-3insbv css-4hzbpn css-8zr56v font-['Roboto:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[10px] w-[min-content]">Detailed description of Posture and Breathing Correction, including how the AI coach provides instant feedback to improve technique and prevent injuries.</p>
    </div>
  );
}

function FeatureSection() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="Feature Section">
      <div aria-hidden="true" className="absolute border border-black border-solid css-gs60ek inset-0 pointer-events-none rounded-[6px]" />
      <div className="css-1lkilf flex-col justify-center size-full">
        <div className="content-stretch css-1lkilf flex-col items-start justify-center px-[10px] py-[8px] relative w-full">
          <Text20 />
        </div>
      </div>
    </div>
  );
}

function Text21() {
  return (
    <div className="content-stretch css-1lkilf flex-col gap-[3px] items-start leading-[normal] relative shrink-0 text-black w-full" data-name="Text">
      <p className="css-3insbv css-4hzbpn css-8zr56v font-['Roboto:Medium',sans-serif] font-medium relative shrink-0 text-[13px] w-[180px]">Feature Section</p>
      <p className="css-3insbv css-4hzbpn css-8zr56v font-['Roboto:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[10px] w-[min-content]">Detailed description of the Personal AI Coach, explaining how it offers tailored guidance, goal planning, and follow-ups for consistent progress and motivation.</p>
    </div>
  );
}

function FeatureSection1() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="Feature Section">
      <div aria-hidden="true" className="absolute border border-black border-solid css-gs60ek inset-0 pointer-events-none rounded-[6px]" />
      <div className="css-1lkilf flex-col justify-center size-full">
        <div className="content-stretch css-1lkilf flex-col items-start justify-center px-[10px] py-[8px] relative w-full">
          <Text21 />
        </div>
      </div>
    </div>
  );
}

function Text22() {
  return (
    <div className="content-stretch css-1lkilf flex-col gap-[3px] items-start leading-[normal] relative shrink-0 text-black w-full" data-name="Text">
      <p className="css-3insbv css-4hzbpn css-8zr56v font-['Roboto:Medium',sans-serif] font-medium relative shrink-0 text-[13px] w-[180px]">Feature Section</p>
      <p className="css-3insbv css-4hzbpn css-8zr56v font-['Roboto:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[10px] w-[min-content]">Detailed description of the Social Media Element, detailing how users can share progress, engage in group workouts, and rank their performances to increase competition and motivation.</p>
    </div>
  );
}

function FeatureSection2() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="Feature Section">
      <div aria-hidden="true" className="absolute border border-black border-solid css-gs60ek inset-0 pointer-events-none rounded-[6px]" />
      <div className="css-1lkilf flex-col justify-center size-full">
        <div className="content-stretch css-1lkilf flex-col items-start justify-center px-[10px] py-[8px] relative w-full">
          <Text22 />
        </div>
      </div>
    </div>
  );
}

function Text23() {
  return (
    <div className="content-stretch css-1lkilf flex-col gap-[3px] items-start leading-[normal] relative shrink-0 text-black w-full" data-name="Text">
      <p className="css-3insbv css-4hzbpn css-8zr56v font-['Roboto:Medium',sans-serif] font-medium relative shrink-0 text-[13px] w-[180px]">Benefits Section</p>
      <p className="css-3insbv css-4hzbpn css-8zr56v font-['Roboto:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[10px] w-[min-content]">Summary of the benefits of these features, such as improved technique, personalized coaching, and community support.</p>
    </div>
  );
}

function BenefitsSection1() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="Benefits Section">
      <div aria-hidden="true" className="absolute border border-black border-solid css-gs60ek inset-0 pointer-events-none rounded-[6px]" />
      <div className="css-1lkilf flex-col justify-center size-full">
        <div className="content-stretch css-1lkilf flex-col items-start justify-center px-[10px] py-[8px] relative w-full">
          <Text23 />
        </div>
      </div>
    </div>
  );
}

function Text24() {
  return (
    <div className="content-stretch css-1lkilf flex-col gap-[3px] items-start leading-[normal] relative shrink-0 text-black w-full" data-name="Text">
      <p className="css-3insbv css-4hzbpn css-8zr56v font-['Roboto:Medium',sans-serif] font-medium relative shrink-0 text-[13px] w-[180px]">Pricing Section</p>
      <p className="css-3insbv css-4hzbpn css-8zr56v font-['Roboto:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[10px] w-[min-content]">Overview of pricing plans available for users to access these features.</p>
    </div>
  );
}

function PricingSection() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="Pricing Section">
      <div aria-hidden="true" className="absolute border border-black border-solid css-gs60ek inset-0 pointer-events-none rounded-[6px]" />
      <div className="css-1lkilf flex-col justify-center size-full">
        <div className="content-stretch css-1lkilf flex-col items-start justify-center px-[10px] py-[8px] relative w-full">
          <Text24 />
        </div>
      </div>
    </div>
  );
}

function Text25() {
  return (
    <div className="content-stretch css-1lkilf flex-col gap-[3px] items-start leading-[normal] relative shrink-0 text-black w-full" data-name="Text">
      <p className="css-3insbv css-4hzbpn css-8zr56v font-['Roboto:Medium',sans-serif] font-medium relative shrink-0 text-[13px] w-[180px]">CTA Section</p>
      <p className="css-3insbv css-4hzbpn css-8zr56v font-['Roboto:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[10px] w-[min-content]">Encourage visitors to sign up for a free trial or create an account to access the platform and its features.</p>
    </div>
  );
}

function CtaSection2() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="CTA Section">
      <div aria-hidden="true" className="absolute border border-black border-solid css-gs60ek inset-0 pointer-events-none rounded-[6px]" />
      <div className="css-1lkilf flex-col justify-center size-full">
        <div className="content-stretch css-1lkilf flex-col items-start justify-center px-[10px] py-[8px] relative w-full">
          <Text25 />
        </div>
      </div>
    </div>
  );
}

function Text26() {
  return (
    <div className="content-stretch css-1lkilf flex-col items-start relative shrink-0 w-full" data-name="Text">
      <p className="css-3insbv css-4hzbpn css-8zr56v font-['Roboto:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[13px] text-black w-[180px]">Footer</p>
    </div>
  );
}

function Footer2() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="Footer">
      <div aria-hidden="true" className="absolute border border-black border-solid css-gs60ek inset-0 pointer-events-none rounded-[6px]" />
      <div className="css-1lkilf flex-col justify-center size-full">
        <div className="content-stretch css-1lkilf flex-col items-start justify-center px-[10px] py-[8px] relative w-full">
          <Text26 />
        </div>
      </div>
    </div>
  );
}

function PageWrapper2() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Page Wrapper">
      <div className="css-1lkilf flex-col items-center size-full">
        <div className="content-stretch css-1lkilf flex-col gap-[10px] items-center p-[10px] relative w-full">
          <Navbar2 />
          <HeaderSection1 />
          <FeaturesListSection1 />
          <FeatureSection />
          <FeatureSection1 />
          <FeatureSection2 />
          <BenefitsSection1 />
          <PricingSection />
          <CtaSection2 />
          <Footer2 />
        </div>
      </div>
    </div>
  );
}

function Features() {
  return (
    <div className="absolute content-stretch css-1lkilf css-gxdil1 flex-col gap-[8px] items-center left-[274px] rounded-[10px] top-[682px] w-[220px]" data-name="Features">
      <PageTitle2 />
      <PageWrapper2 />
    </div>
  );
}

function IconPage2() {
  return (
    <div className="css-8zr56v relative shrink-0 size-[14px]" data-name="icon-page">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="icon-page">
          <path d={svgPaths.p3f2c3f80} fill="var(--fill-0, black)" id="Icon color" />
        </g>
      </svg>
    </div>
  );
}

function PageTitle3() {
  return (
    <div className="bg-[#e4e2df] h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Page Title">
      <div className="css-1lkilf css-gxdil1 flex-row items-center size-full">
        <div className="content-stretch css-1lkilf gap-[8px] items-center px-[12px] py-[2px] relative size-full">
          <IconPage2 />
          <p className="css-8zr56v css-g0mm18 css-sepkz3 flex-[1_0_0] font-['Roboto:Medium',sans-serif] font-medium leading-[20px] min-h-px min-w-px relative text-[14px] text-black text-ellipsis">Contact Us</p>
        </div>
      </div>
    </div>
  );
}

function Text27() {
  return (
    <div className="content-stretch css-1lkilf flex-col items-start relative shrink-0 w-full" data-name="Text">
      <p className="css-3insbv css-4hzbpn css-8zr56v font-['Roboto:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[13px] text-black w-[180px]">Navbar</p>
    </div>
  );
}

function Navbar3() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="Navbar">
      <div aria-hidden="true" className="absolute border border-black border-solid css-gs60ek inset-0 pointer-events-none rounded-[6px]" />
      <div className="css-1lkilf flex-col justify-center size-full">
        <div className="content-stretch css-1lkilf flex-col items-start justify-center px-[10px] py-[8px] relative w-full">
          <Text27 />
        </div>
      </div>
    </div>
  );
}

function Text28() {
  return (
    <div className="content-stretch css-1lkilf flex-col gap-[3px] items-start leading-[normal] relative shrink-0 text-black w-full" data-name="Text">
      <p className="css-3insbv css-4hzbpn css-8zr56v font-['Roboto:Medium',sans-serif] font-medium relative shrink-0 text-[13px] w-[180px]">Header Section</p>
      <p className="css-3insbv css-4hzbpn css-8zr56v font-['Roboto:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[10px] w-[min-content]">Introduction to the Contact Us page, encouraging users to reach out with any questions or feedback.</p>
    </div>
  );
}

function HeaderSection2() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="Header Section">
      <div aria-hidden="true" className="absolute border border-black border-solid css-gs60ek inset-0 pointer-events-none rounded-[6px]" />
      <div className="css-1lkilf flex-col justify-center size-full">
        <div className="content-stretch css-1lkilf flex-col items-start justify-center px-[10px] py-[8px] relative w-full">
          <Text28 />
        </div>
      </div>
    </div>
  );
}

function Text29() {
  return (
    <div className="content-stretch css-1lkilf flex-col gap-[3px] items-start leading-[normal] relative shrink-0 text-black w-full" data-name="Text">
      <p className="css-3insbv css-4hzbpn css-8zr56v font-['Roboto:Medium',sans-serif] font-medium relative shrink-0 text-[13px] w-[180px]">Contact Section</p>
      <p className="css-3insbv css-4hzbpn css-8zr56v font-['Roboto:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[10px] w-[min-content]">Provide contact information including address, phone number, and email.</p>
    </div>
  );
}

function ContactSection() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="Contact Section">
      <div aria-hidden="true" className="absolute border border-black border-solid css-gs60ek inset-0 pointer-events-none rounded-[6px]" />
      <div className="css-1lkilf flex-col justify-center size-full">
        <div className="content-stretch css-1lkilf flex-col items-start justify-center px-[10px] py-[8px] relative w-full">
          <Text29 />
        </div>
      </div>
    </div>
  );
}

function Text30() {
  return (
    <div className="content-stretch css-1lkilf flex-col gap-[3px] items-start leading-[normal] relative shrink-0 text-black w-full" data-name="Text">
      <p className="css-3insbv css-4hzbpn css-8zr56v font-['Roboto:Medium',sans-serif] font-medium relative shrink-0 text-[13px] w-[180px]">Contact Form Section</p>
      <p className="css-3insbv css-4hzbpn css-8zr56v font-['Roboto:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[10px] w-[min-content]">A form for users to fill out with their name, email, subject, and message.</p>
    </div>
  );
}

function ContactFormSection() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="Contact Form Section">
      <div aria-hidden="true" className="absolute border border-black border-solid css-gs60ek inset-0 pointer-events-none rounded-[6px]" />
      <div className="css-1lkilf flex-col justify-center size-full">
        <div className="content-stretch css-1lkilf flex-col items-start justify-center px-[10px] py-[8px] relative w-full">
          <Text30 />
        </div>
      </div>
    </div>
  );
}

function Text31() {
  return (
    <div className="content-stretch css-1lkilf flex-col gap-[3px] items-start leading-[normal] relative shrink-0 text-black w-full" data-name="Text">
      <p className="css-3insbv css-4hzbpn css-8zr56v font-['Roboto:Medium',sans-serif] font-medium relative shrink-0 text-[13px] w-[180px]">FAQ Section</p>
      <p className="css-3insbv css-4hzbpn css-8zr56v font-['Roboto:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[10px] w-[min-content]">Answer common questions to assist users before they reach out.</p>
    </div>
  );
}

function FaqSection() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="FAQ Section">
      <div aria-hidden="true" className="absolute border border-black border-solid css-gs60ek inset-0 pointer-events-none rounded-[6px]" />
      <div className="css-1lkilf flex-col justify-center size-full">
        <div className="content-stretch css-1lkilf flex-col items-start justify-center px-[10px] py-[8px] relative w-full">
          <Text31 />
        </div>
      </div>
    </div>
  );
}

function Text32() {
  return (
    <div className="content-stretch css-1lkilf flex-col gap-[3px] items-start leading-[normal] relative shrink-0 text-black w-full" data-name="Text">
      <p className="css-3insbv css-4hzbpn css-8zr56v font-['Roboto:Medium',sans-serif] font-medium relative shrink-0 text-[13px] w-[180px]">CTA Section</p>
      <p className="css-3insbv css-4hzbpn css-8zr56v font-['Roboto:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[10px] w-[min-content]">Encourage users to follow Aadiyog on social media for updates and community engagement.</p>
    </div>
  );
}

function CtaSection3() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="CTA Section">
      <div aria-hidden="true" className="absolute border border-black border-solid css-gs60ek inset-0 pointer-events-none rounded-[6px]" />
      <div className="css-1lkilf flex-col justify-center size-full">
        <div className="content-stretch css-1lkilf flex-col items-start justify-center px-[10px] py-[8px] relative w-full">
          <Text32 />
        </div>
      </div>
    </div>
  );
}

function Text33() {
  return (
    <div className="content-stretch css-1lkilf flex-col items-start relative shrink-0 w-full" data-name="Text">
      <p className="css-3insbv css-4hzbpn css-8zr56v font-['Roboto:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[13px] text-black w-[180px]">Footer</p>
    </div>
  );
}

function Footer3() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="Footer">
      <div aria-hidden="true" className="absolute border border-black border-solid css-gs60ek inset-0 pointer-events-none rounded-[6px]" />
      <div className="css-1lkilf flex-col justify-center size-full">
        <div className="content-stretch css-1lkilf flex-col items-start justify-center px-[10px] py-[8px] relative w-full">
          <Text33 />
        </div>
      </div>
    </div>
  );
}

function PageWrapper3() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Page Wrapper">
      <div className="css-1lkilf flex-col items-center size-full">
        <div className="content-stretch css-1lkilf flex-col gap-[10px] items-center p-[10px] relative w-full">
          <Navbar3 />
          <HeaderSection2 />
          <ContactSection />
          <ContactFormSection />
          <FaqSection />
          <CtaSection3 />
          <Footer3 />
        </div>
      </div>
    </div>
  );
}

function ContactUs() {
  return (
    <div className="absolute content-stretch css-1lkilf css-gxdil1 flex-col gap-[8px] items-center left-[548px] rounded-[10px] top-[682px] w-[220px]" data-name="Contact Us">
      <PageTitle3 />
      <PageWrapper3 />
    </div>
  );
}

function IconPage3() {
  return (
    <div className="css-8zr56v relative shrink-0 size-[14px]" data-name="icon-page">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="icon-page">
          <path d={svgPaths.p3f2c3f80} fill="var(--fill-0, black)" id="Icon color" />
        </g>
      </svg>
    </div>
  );
}

function PageTitle4() {
  return (
    <div className="bg-[#e4e2df] h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Page Title">
      <div className="css-1lkilf css-gxdil1 flex-row items-center size-full">
        <div className="content-stretch css-1lkilf gap-[8px] items-center px-[12px] py-[2px] relative size-full">
          <IconPage3 />
          <p className="css-8zr56v css-g0mm18 css-sepkz3 flex-[1_0_0] font-['Roboto:Medium',sans-serif] font-medium leading-[20px] min-h-px min-w-px relative text-[14px] text-black text-ellipsis">Blog</p>
        </div>
      </div>
    </div>
  );
}

function Text34() {
  return (
    <div className="content-stretch css-1lkilf flex-col items-start relative shrink-0 w-full" data-name="Text">
      <p className="css-3insbv css-4hzbpn css-8zr56v font-['Roboto:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[13px] text-black w-[180px]">Navbar</p>
    </div>
  );
}

function Navbar4() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="Navbar">
      <div aria-hidden="true" className="absolute border border-black border-solid css-gs60ek inset-0 pointer-events-none rounded-[6px]" />
      <div className="css-1lkilf flex-col justify-center size-full">
        <div className="content-stretch css-1lkilf flex-col items-start justify-center px-[10px] py-[8px] relative w-full">
          <Text34 />
        </div>
      </div>
    </div>
  );
}

function Text35() {
  return (
    <div className="content-stretch css-1lkilf flex-col gap-[3px] items-start leading-[normal] relative shrink-0 text-black w-full" data-name="Text">
      <p className="css-3insbv css-4hzbpn css-8zr56v font-['Roboto:Medium',sans-serif] font-medium relative shrink-0 text-[13px] w-[180px]">Featured Blog List Header Section</p>
      <p className="css-3insbv css-4hzbpn css-8zr56v font-['Roboto:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[10px] w-[min-content]">Introduction to the Aadiyog Blog with a call-to-action to explore the articles.</p>
    </div>
  );
}

function FeaturedBlogListHeaderSection() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="Featured Blog List Header Section">
      <div aria-hidden="true" className="absolute border border-black border-solid css-gs60ek inset-0 pointer-events-none rounded-[6px]" />
      <div className="css-1lkilf flex-col justify-center size-full">
        <div className="content-stretch css-1lkilf flex-col items-start justify-center px-[10px] py-[8px] relative w-full">
          <Text35 />
        </div>
      </div>
    </div>
  );
}

function Text36() {
  return (
    <div className="content-stretch css-1lkilf flex-col gap-[3px] items-start leading-[normal] relative shrink-0 text-black w-full" data-name="Text">
      <p className="css-3insbv css-4hzbpn css-8zr56v font-['Roboto:Medium',sans-serif] font-medium relative shrink-0 text-[13px] w-[180px]">Blog List Section</p>
      <p className="css-3insbv css-4hzbpn css-8zr56v font-['Roboto:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[10px] w-[min-content]">A list of blog posts, including articles on why tracking posture helps yogis in the long run, diet tips, and more.</p>
    </div>
  );
}

function BlogListSection() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="Blog List Section">
      <div aria-hidden="true" className="absolute border border-black border-solid css-gs60ek inset-0 pointer-events-none rounded-[6px]" />
      <div className="css-1lkilf flex-col justify-center size-full">
        <div className="content-stretch css-1lkilf flex-col items-start justify-center px-[10px] py-[8px] relative w-full">
          <Text36 />
        </div>
      </div>
    </div>
  );
}

function Text37() {
  return (
    <div className="content-stretch css-1lkilf flex-col items-start relative shrink-0 w-full" data-name="Text">
      <p className="css-3insbv css-4hzbpn css-8zr56v font-['Roboto:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[13px] text-black w-[180px]">Footer</p>
    </div>
  );
}

function Footer4() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="Footer">
      <div aria-hidden="true" className="absolute border border-black border-solid css-gs60ek inset-0 pointer-events-none rounded-[6px]" />
      <div className="css-1lkilf flex-col justify-center size-full">
        <div className="content-stretch css-1lkilf flex-col items-start justify-center px-[10px] py-[8px] relative w-full">
          <Text37 />
        </div>
      </div>
    </div>
  );
}

function PageWrapper4() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Page Wrapper">
      <div className="css-1lkilf flex-col items-center size-full">
        <div className="content-stretch css-1lkilf flex-col gap-[10px] items-center p-[10px] relative w-full">
          <Navbar4 />
          <FeaturedBlogListHeaderSection />
          <BlogListSection />
          <Footer4 />
        </div>
      </div>
    </div>
  );
}

function Blog() {
  return (
    <div className="absolute content-stretch css-1lkilf css-gxdil1 flex-col gap-[8px] items-center left-[822px] rounded-[10px] top-[682px] w-[220px]" data-name="Blog">
      <PageTitle4 />
      <PageWrapper4 />
    </div>
  );
}

function Lines() {
  return (
    <div className="absolute css-2tpw8s left-[110px] top-[628px]" data-name="Lines">
      <div className="absolute border border-solid border-white css-8zr56v h-[27px] left-[384px] top-[655px] w-px" data-name="Rectangle" />
      <div className="absolute border border-solid border-white css-8zr56v h-[27px] left-[658px] top-[655px] w-px" data-name="Rectangle" />
      <div className="absolute border-l border-r border-solid border-t border-white css-8zr56v h-[27px] left-[110px] rounded-tl-[16px] rounded-tr-[16px] top-[655px] w-[822px]" data-name="Rectangle" />
      <div className="absolute border border-solid border-white css-8zr56v h-[27px] left-[521px] top-[628px] w-px" data-name="Rectangle" />
    </div>
  );
}

export default function AadiyogWebsite() {
  return (
    <div className="css-8zr56v relative size-full" data-name="Aadiyog Website">
      <Home />
      <AboutUs />
      <Features />
      <ContactUs />
      <Blog />
      <Lines />
    </div>
  );
}