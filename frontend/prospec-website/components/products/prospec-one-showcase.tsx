import { Check } from "lucide-react"

const includedProducts = [
  "ERP", "Admissions", "Campus (SIS)", "Faculty", "Learn (LMS)", "Exam",
  "Finance", "Hostel", "Library", "Transport", "Placement", "Connect",
  "CRM", "Insight", "AI", "Mobile", "Identity", "Docs", "Workflow", "APIs",
]

const keyBenefits = [
  "Complete digital university ecosystem",
  "AI integrated across every department",
  "Single login & unified experience",
  "Modular & scalable architecture",
  "Enterprise-grade security",
  "Cloud & on-premise deployment",
  "Real-time executive dashboards",
  "API-first integrations",
  "Apps for students, faculty & parents",
]

export default function ProspecOneShowcase() {
  return (
    <section id="prospec-one" className="w-full border-b border-[rgba(55,50,47,0.12)] bg-[#F7F5F3]">
      <div className="max-w-[1060px] mx-auto px-4 sm:px-6 md:px-8 lg:px-0 py-20 md:py-28">
        {/* Eyebrow + Title */}
        <div className="text-center mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 px-[14px] py-[6px] bg-white shadow-[0px_0px_0px_4px_rgba(55,50,47,0.05)] rounded-full border border-[rgba(2,6,23,0.08)] mb-8">
            <span className="text-sm">⭐</span>
            <span className="text-[#37322F] text-xs font-medium font-sans tracking-wide uppercase">Flagship Platform</span>
          </div>
          <h2 className="text-[#37322F] text-5xl md:text-7xl lg:text-8xl font-serif leading-[0.95] tracking-tight mb-6">
            PROSPEC One
          </h2>
          <p className="max-w-[680px] mx-auto text-[#605A57] text-lg md:text-2xl font-sans leading-relaxed">
            One platform. Every department.
            <br className="hidden sm:block" />
            Complete university transformation.
          </p>
        </div>

        {/* Premium dark flagship panel */}
        <div className="relative rounded-[28px] bg-[#37322F] overflow-hidden shadow-[0px_30px_80px_rgba(55,50,47,0.28)]">
          {/* subtle grid texture */}
          <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
            <div className="w-full h-full" style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
          </div>
          <div className="relative px-6 md:px-14 py-12 md:py-16">
            <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-16 items-center">
              {/* Left: statement */}
              <div>
                <div className="flex items-baseline gap-3 mb-6">
                  <span className="text-white text-6xl md:text-7xl font-serif leading-none">20</span>
                  <span className="text-[#D2C6BF] text-lg md:text-xl font-sans">products,<br />one platform</span>
                </div>
                <p className="text-[#E7E2DE] text-base md:text-lg font-sans leading-relaxed mb-8">
                  Instead of buying a dozen disconnected systems, institutions get one integrated
                  operating system — powered by AI, automation, analytics and enterprise-grade security.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a href="#products" className="px-8 py-3 bg-white text-[#37322F] rounded-full font-medium text-sm text-center hover:bg-[#F7F5F3] transition-colors">
                    Explore PROSPEC One
                  </a>
                  <a href="#cta" className="px-8 py-3 bg-transparent text-white border border-white/25 rounded-full font-medium text-sm text-center hover:bg-white/10 transition-colors">
                    Book Enterprise Demo
                  </a>
                </div>
              </div>

              {/* Right: product chips */}
              <div className="flex flex-wrap gap-2 md:gap-2.5 content-center">
                {includedProducts.map((p) => (
                  <span
                    key={p}
                    className="px-3.5 py-1.5 rounded-full border border-white/15 bg-white/[0.06] text-[#EFEAE6] text-[13px] font-sans hover:bg-white/[0.12] hover:border-white/30 transition-colors"
                  >
                    PROSPEC {p}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Key benefits */}
        <div className="mt-12 md:mt-16">
          <h3 className="text-center text-[#605A57] text-xs font-semibold uppercase tracking-[0.14em] font-sans mb-8">
            Why it changes everything
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {keyBenefits.map((b) => (
              <div key={b} className="flex items-start gap-3 p-5 bg-white border border-[rgba(55,50,47,0.10)] rounded-xl hover:shadow-[0px_4px_16px_rgba(55,50,47,0.08)] transition-shadow">
                <div className="mt-0.5 w-5 h-5 rounded-full bg-[#37322F] flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 text-white" strokeWidth={3} />
                </div>
                <span className="text-[#49423D] text-sm font-medium font-sans leading-snug">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
