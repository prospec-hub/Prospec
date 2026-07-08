import { TrendingUp, ArrowUpRight } from "lucide-react"

const kpis = [
  { label: "Fee Collection", value: "₹48.2 Cr", change: "+12%", bars: [40, 55, 48, 62, 70, 82] },
  { label: "Applications", value: "8,420", change: "+23%", bars: [30, 42, 50, 58, 72, 90] },
  { label: "Placement Rate", value: "92%", change: "+6%", bars: [60, 64, 70, 78, 85, 92] },
  { label: "Faculty Rating", value: "4.6/5", change: "+0.3", bars: [52, 58, 55, 66, 72, 80] },
]

export default function ExecutiveSection() {
  return (
    <section id="leadership" className="w-full border-b border-[rgba(55,50,47,0.12)] bg-[#F7F5F3]">
      <div className="max-w-[1060px] mx-auto px-4 sm:px-6 md:px-8 lg:px-0 py-16 md:py-24">
        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-10 lg:gap-16 items-center">
          {/* Left copy */}
          <div>
            <div className="inline-flex items-center gap-2 px-[14px] py-[6px] bg-white shadow-[0px_0px_0px_4px_rgba(55,50,47,0.05)] rounded-full border border-[rgba(2,6,23,0.08)] mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#37322F]" />
              <span className="text-[#37322F] text-xs font-medium font-sans">For Leadership</span>
            </div>
            <h2 className="text-[#37322F] text-3xl md:text-4xl lg:text-5xl font-serif leading-[1.1] tracking-tight mb-4">
              Built for the people who run the university
            </h2>
            <p className="text-[#605A57] text-base md:text-lg font-sans leading-relaxed mb-6">
              Vice-chancellors and directors don&apos;t want ten logins. They want one live view of the
              entire institution — revenue, admissions, faculty performance, placements and student
              success, with AI surfacing what needs attention.
            </p>
            <ul className="space-y-2.5 mb-8">
              {["Revenue & finance at a glance", "Admissions & enrollment trends", "Faculty & academic performance", "Placement & student success", "AI insights on risks and opportunities"].map((t) => (
                <li key={t} className="flex items-center gap-2.5 text-[#49423D] text-sm font-sans">
                  <ArrowUpRight className="w-4 h-4 text-[#37322F] shrink-0" strokeWidth={2} />
                  {t}
                </li>
              ))}
            </ul>
            <a href="#cta" className="inline-flex px-7 py-3 bg-[#37322F] text-white rounded-full font-medium text-sm hover:bg-[#2A2520] transition-colors">
              Schedule Executive Demo
            </a>
          </div>

          {/* Right: mock executive dashboard */}
          <div className="rounded-2xl bg-[#37322F] p-5 md:p-7 shadow-[0px_30px_70px_rgba(55,50,47,0.28)]">
            <div className="flex items-center justify-between mb-5">
              <div>
                <div className="text-white text-sm font-semibold font-sans">Executive Overview</div>
                <div className="text-[#B2AEA9] text-xs font-sans">Live · this academic year</div>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/10 border border-white/15">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                <span className="text-white text-[11px] font-sans">Real-time</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {kpis.map((k) => (
                <div key={k.label} className="p-4 rounded-xl bg-white/[0.06] border border-white/10">
                  <div className="text-[#D2C6BF] text-[11px] font-sans mb-1">{k.label}</div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-white text-xl font-serif">{k.value}</span>
                    <span className="inline-flex items-center gap-0.5 text-green-400 text-[11px] font-sans">
                      <TrendingUp className="w-3 h-3" strokeWidth={2} />
                      {k.change}
                    </span>
                  </div>
                  <div className="flex items-end gap-1 h-8 mt-3">
                    {k.bars.map((b, i) => (
                      <div key={i} className="flex-1 rounded-sm bg-white/25" style={{ height: `${b}%` }} />
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* AI insight strip */}
            <div className="mt-3 p-4 rounded-xl bg-white/[0.06] border border-white/10 flex items-start gap-3">
              <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                <span className="text-white text-xs">✦</span>
              </div>
              <div>
                <div className="text-white text-[13px] font-medium font-sans mb-0.5">AI Insight</div>
                <div className="text-[#D2C6BF] text-[12px] font-sans leading-relaxed">
                  3 student cohorts flagged as at-risk. Recommend outreach via Connect &amp; CRM this week.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
