"use client"

import { CalendarCheck, SlidersHorizontal, MessageSquare } from "lucide-react"

const actions = [
  { icon: CalendarCheck, label: "Schedule Executive Demo", primary: true, href: "#" },
  { icon: SlidersHorizontal, label: "Create Custom Package", primary: false, href: "#configurator" },
  { icon: MessageSquare, label: "Talk to a Solution Architect", primary: false, href: "#" },
]

export default function CTASection() {
  return (
    <section id="cta" className="w-full relative overflow-hidden border-b border-[rgba(55,50,47,0.12)] bg-[#F7F5F3]">
      {/* diagonal texture */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="w-full h-full relative">
          {Array.from({ length: 300 }).map((_, i) => (
            <div
              key={i}
              className="absolute h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.06)]"
              style={{ top: `${i * 16 - 120}px`, left: "-100%", width: "300%" }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-[1060px] mx-auto px-4 sm:px-6 md:px-8 lg:px-0 py-20 md:py-28 flex flex-col items-center text-center">
        <h2 className="max-w-[760px] text-[#37322F] text-4xl md:text-5xl lg:text-6xl font-serif leading-[1.05] tracking-tight mb-5">
          Ready to build your intelligent university?
        </h2>
        <p className="max-w-[560px] text-[#605A57] text-base md:text-lg font-sans leading-relaxed mb-10">
          See how every department can run on one intelligent platform. Talk to our team and
          scope a rollout tailored to your institution.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
          {actions.map((a) => {
            const Icon = a.icon
            return (
              <a
                key={a.label}
                href={a.href}
                className={`inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-medium text-sm transition-colors ${
                  a.primary
                    ? "bg-[#37322F] text-white hover:bg-[#2A2520] shadow-[0px_0px_0px_2.5px_rgba(255,255,255,0.5)_inset]"
                    : "bg-white text-[#37322F] border border-[rgba(55,50,47,0.14)] hover:bg-[#F7F5F3]"
                }`}
              >
                <Icon className="w-4 h-4" strokeWidth={1.8} />
                {a.label}
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
