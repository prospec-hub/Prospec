import {
  FileText,
  Boxes,
  Rocket,
  Code2,
  BookMarked,
  Server,
  Lock,
  MonitorPlay,
  ArrowUpRight,
} from "lucide-react"

const resources = [
  { icon: FileText, title: "Product Documentation", desc: "Full reference for every module and feature." },
  { icon: Boxes, title: "Architecture", desc: "How the platform is designed to scale and integrate." },
  { icon: Rocket, title: "Implementation Guide", desc: "Our phased rollout and go-live methodology." },
  { icon: Code2, title: "API Docs", desc: "REST endpoints, webhooks and developer guides." },
  { icon: BookMarked, title: "Case Studies", desc: "How institutions transform with PROSPEC." },
  { icon: Server, title: "Deployment Guide", desc: "Cloud and on-premise setup options." },
  { icon: Lock, title: "Security Whitepaper", desc: "Encryption, compliance and data governance." },
  { icon: MonitorPlay, title: "Portal Demos", desc: "Interactive student and faculty portal walkthroughs." },
]

export default function DocumentationSection() {
  return (
    <section id="resources" className="w-full border-b border-[rgba(55,50,47,0.12)] bg-white">
      <div className="max-w-[1060px] mx-auto px-4 sm:px-6 md:px-8 lg:px-0 py-16 md:py-24">
        <div className="max-w-[640px] mx-auto text-center mb-12 md:mb-14">
          <div className="inline-flex items-center gap-2 px-[14px] py-[6px] bg-[#F7F5F3] rounded-full border border-[rgba(2,6,23,0.08)] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#37322F]" />
            <span className="text-[#37322F] text-xs font-medium font-sans">Resources</span>
          </div>
          <h2 className="text-[#37322F] text-3xl md:text-4xl lg:text-5xl font-serif leading-[1.1] tracking-tight mb-4">
            Everything you need to evaluate PROSPEC
          </h2>
          <p className="text-[#605A57] text-base md:text-lg font-sans leading-relaxed">
            Documentation, architecture and demos for decision-makers, IT teams and developers alike.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {resources.map((r) => {
            const Icon = r.icon
            return (
              <a
                key={r.title}
                href="#"
                className="group p-6 bg-[#F7F5F3] border border-[rgba(55,50,47,0.10)] rounded-2xl hover:bg-white hover:shadow-[0px_8px_24px_rgba(55,50,47,0.08)] transition-all duration-300 flex flex-col"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-white border border-[rgba(55,50,47,0.12)] flex items-center justify-center group-hover:bg-[#37322F] transition-colors">
                    <Icon className="w-5 h-5 text-[#37322F] group-hover:text-white transition-colors" strokeWidth={1.6} />
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#9a9189] group-hover:text-[#37322F] transition-colors" strokeWidth={2} />
                </div>
                <h3 className="text-[#37322F] text-base font-semibold font-sans mb-1.5">{r.title}</h3>
                <p className="text-[#605A57] text-[13px] font-sans leading-relaxed">{r.desc}</p>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
