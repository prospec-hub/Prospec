import {
  ShieldCheck,
  Activity,
  Headset,
  Scaling,
  BrainCircuit,
  Plug,
  Cloud,
  Route,
} from "lucide-react"

const stats = [
  { value: "20", label: "integrated modules" },
  { value: "99.9%", label: "uptime SLA" },
  { value: "24/7", label: "enterprise support" },
  { value: "100%", label: "native integration" },
]

const pillars = [
  { icon: ShieldCheck, title: "Enterprise Security", desc: "End-to-end encryption, role-based access, audit logs and data isolation by design." },
  { icon: Activity, title: "99.9% Availability", desc: "SLA-backed uptime with redundant infrastructure and continuous monitoring." },
  { icon: Headset, title: "Dedicated Support", desc: "A named account manager and 24/7 support for enterprise institutions." },
  { icon: Scaling, title: "Scalable Architecture", desc: "From a single department to a multi-campus university with millions of records." },
  { icon: BrainCircuit, title: "AI-Ready", desc: "Intelligence woven through every module — not bolted on as an afterthought." },
  { icon: Plug, title: "API-First", desc: "A complete API framework to integrate with any existing system you run." },
  { icon: Cloud, title: "Cloud & On-Premise", desc: "Deploy the way your institution's policy requires — we support both." },
  { icon: Route, title: "Proven Methodology", desc: "A structured, phased implementation with data migration and training built in." },
]

export default function TestimonialsSection() {
  return (
    <section id="why-choose" className="w-full border-b border-[rgba(55,50,47,0.12)] bg-[#F7F5F3]">
      <div className="max-w-[1060px] mx-auto px-4 sm:px-6 md:px-8 lg:px-0 py-16 md:py-24">
        <div className="max-w-[640px] mx-auto text-center mb-12 md:mb-14">
          <div className="inline-flex items-center gap-2 px-[14px] py-[6px] bg-white shadow-[0px_0px_0px_4px_rgba(55,50,47,0.05)] rounded-full border border-[rgba(2,6,23,0.08)] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#37322F]" />
            <span className="text-[#37322F] text-xs font-medium font-sans">Built to be Trusted</span>
          </div>
          <h2 className="text-[#37322F] text-3xl md:text-4xl lg:text-5xl font-serif leading-[1.1] tracking-tight mb-4">
            Why universities choose PROSPEC
          </h2>
          <p className="text-[#605A57] text-base md:text-lg font-sans leading-relaxed">
            Trust isn&apos;t a logo wall. It&apos;s engineering, security and a support model your institution can depend on.
          </p>
        </div>

        {/* Stat band */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[rgba(55,50,47,0.10)] border border-[rgba(55,50,47,0.10)] rounded-2xl overflow-hidden mb-6">
          {stats.map((s) => (
            <div key={s.label} className="bg-white px-6 py-8 text-center">
              <div className="text-[#37322F] text-4xl md:text-5xl font-serif leading-none mb-2">{s.value}</div>
              <div className="text-[#605A57] text-[13px] font-sans">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Trust pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {pillars.map((p) => {
            const Icon = p.icon
            return (
              <div key={p.title} className="p-6 bg-white border border-[rgba(55,50,47,0.10)] rounded-2xl hover:shadow-[0px_8px_24px_rgba(55,50,47,0.08)] transition-shadow">
                <div className="w-11 h-11 rounded-xl bg-[#37322F] flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-white" strokeWidth={1.6} />
                </div>
                <h3 className="text-[#37322F] text-base font-semibold font-sans mb-1.5">{p.title}</h3>
                <p className="text-[#605A57] text-[13px] font-sans leading-relaxed">{p.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
