import svgPaths from "../imports/svg-q3u4lye6vd";

const steps = [
  {
    title: "Share Your Profile",
    description:
      "Tell us about your health, fitness level, and wellness goals. Our system learns what works best for you.",
    icon: (
      <svg
        className="size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 28 28"
      >
        <g>
          <path
            d={svgPaths.p1fa66600}
            stroke="var(--stroke-0, #F37003)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.75"
          />
          <path
            d={svgPaths.p2c5ba380}
            stroke="var(--stroke-0, #F37003)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.75"
          />
          <path
            d={svgPaths.p1a262bc0}
            stroke="var(--stroke-0, #F37003)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.75"
          />
        </g>
      </svg>
    ),
  },
  {
    title: "AI Creates Your Plan",
    description:
      "Our AI analyzes your profile and curates personalized yoga workouts tailored specifically to your needs and goals.",
    icon: (
      <svg
        className="size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 28 28"
      >
        <g>
          <path
            d={svgPaths.p2d278480}
            stroke="var(--stroke-0, #F37003)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.75"
          />
          <path
            d="M23.3333 2.33333V7"
            stroke="var(--stroke-0, #F37003)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.75"
          />
          <path
            d="M25.6667 4.66667H21"
            stroke="var(--stroke-0, #F37003)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.75"
          />
          <path
            d={svgPaths.p1076900}
            stroke="var(--stroke-0, #F37003)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.75"
          />
        </g>
      </svg>
    ),
  },
  {
    title: "Practice with Guidance",
    description:
      "Start your workout with camera-assisted coaching. Follow on-screen paths, receive real-time feedback, and perfect your poses.",
    icon: (
      <svg
        className="size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 28 28"
      >
        <g>
          <path
            d={svgPaths.p1f450000}
            stroke="var(--stroke-0, #F37003)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.75"
          />
          <path
            d={svgPaths.p36776c00}
            stroke="var(--stroke-0, #F37003)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.75"
          />
        </g>
      </svg>
    ),
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 lg:py-32 bg-[rgba(236,236,240,0.3)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 relative">
          <div className="inline-block mb-4">
            <span className="font-['Arimo:Regular',sans-serif] text-[14px] font-normal text-[#f37003] tracking-[0.35px] uppercase">
              How It Works
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-['Arimo:Bold',sans-serif] font-bold tracking-[-1.2px] text-[#0a0a0a] mb-6">
            Your Journey to <span className="text-[#f37003]">Wellness</span>
          </h2>
          <p className="text-[18px] font-['Arimo:Regular',sans-serif] text-[rgba(10,10,10,0.6)] leading-[29.25px]">
            Get started in minutes with our simple, AI-powered approach to
            personalized fitness
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center text-center"
            >
              {/* Connector Line (Desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-[28px] left-[calc(50%+20px)] w-full h-px z-0">
                  <div className="w-full h-full bg-gradient-to-l from-[rgba(243,112,3,0.3)] to-transparent" />
                </div>
              )}

              {/* Icon */}
              <div className="relative z-10 mb-8">
                <div className="bg-[rgba(243,112,3,0.1)] rounded-[14px] size-[56px] flex items-center justify-center">
                  <div className="size-[28px]">{step.icon}</div>
                </div>
              </div>

              {/* Title */}
              <h3 className="font-['Arimo:Bold',sans-serif] font-bold text-[20px] leading-[28px] text-[#0a0a0a] mb-3">
                {step.title}
              </h3>

              {/* Description */}
              <p className="font-['Arimo:Regular',sans-serif] text-[14px] leading-[22.75px] text-[rgba(10,10,10,0.6)] max-w-xs mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="flex flex-col items-center justify-center gap-4 mt-20">
          <p className="font-['Arimo:Regular',sans-serif] text-[16px] text-[rgba(10,10,10,0.6)]">
            Ready to get started?
          </p>
          <a
            href="https://play.google.com/store/apps/details?id=in.aadiyog.app.twa"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-['Arimo:Bold',sans-serif] font-bold text-[16px] text-[#f37003] hover:text-[#d86302] transition-colors"
          >
            Start your free trial
            <svg
              className="size-[20px]"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 20 20"
            >
              <path
                d={svgPaths.p6561400}
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.66667"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
