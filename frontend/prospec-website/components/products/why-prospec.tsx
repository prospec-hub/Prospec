import {
  FileClock,
  Unplug,
  Users2,
  CopyX,
  Hourglass,
  Frown,
  BarChartHorizontal,
  BrainCircuit,
} from "lucide-react"

const problems = [
  { icon: FileClock, title: "Manual Admissions", desc: "Paper forms, spreadsheets and endless follow-ups slow enrollment to a crawl." },
  { icon: Unplug, title: "Disconnected Software", desc: "Departments run on tools that don't talk to each other." },
  { icon: Users2, title: "Multiple Vendors", desc: "A dozen contracts, a dozen support lines, no single owner." },
  { icon: CopyX, title: "Duplicate Data", desc: "The same student re-entered across ten systems, never in sync." },
  { icon: Hourglass, title: "Slow Approvals", desc: "Requests sit in inboxes while files move desk to desk." },
  { icon: Frown, title: "Poor Student Experience", desc: "Students chase departments for answers they should get instantly." },
  { icon: BarChartHorizontal, title: "No Real-Time Analytics", desc: "Leadership waits two weeks for a report that's already outdated." },
  { icon: BrainCircuit, title: "No AI", desc: "Every routine question and task is still handled entirely by people." },
]

export default function WhyProspec() {
  return (
    <section id="why" className="w-full border-b border-[rgba(55,50,47,0.12)] bg-[#F7F5F3]">
      <div className="max-w-[1060px] mx-auto px-4 sm:px-6 md:px-8 lg:px-0 py-16 md:py-24">
        {/* Header */}
        <div className="max-w-[620px] mx-auto text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-[14px] py-[6px] bg-white shadow-[0px_0px_0px_4px_rgba(55,50,47,0.05)] rounded-full border border-[rgba(2,6,23,0.08)] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#37322F]" />
            <span className="text-[#37322F] text-xs font-medium font-sans">The Problem</span>
          </div>
          <h2 className="text-[#37322F] text-3xl md:text-4xl lg:text-5xl font-serif leading-[1.1] tracking-tight mb-4">
            Running a university shouldn&apos;t feel like fighting your own systems
          </h2>
          <p className="text-[#605A57] text-base md:text-lg font-sans leading-relaxed">
            Most institutions don&apos;t need another piece of software. They need the friction to disappear.
          </p>
        </div>

        {/* Problems grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[rgba(55,50,47,0.10)] border border-[rgba(55,50,47,0.10)] rounded-2xl overflow-hidden">
          {problems.map((p) => {
            const Icon = p.icon
            return (
              <div
                key={p.title}
                className="bg-[#F7F5F3] p-6 md:p-7 flex flex-col gap-3 hover:bg-white transition-colors duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-white border border-[rgba(55,50,47,0.12)] flex items-center justify-center">
                  <Icon className="w-[18px] h-[18px] text-[#37322F]" strokeWidth={1.6} />
                </div>
                <h3 className="text-[#37322F] text-[15px] font-semibold font-sans leading-snug">{p.title}</h3>
                <p className="text-[#605A57] text-[13px] font-sans leading-relaxed">{p.desc}</p>
              </div>
            )
          })}
        </div>

        {/* Solution statement */}
        <div className="mt-12 md:mt-16 text-center">
          <p className="max-w-[760px] mx-auto text-[#37322F] text-xl md:text-2xl lg:text-[28px] font-serif leading-[1.35] tracking-tight">
            PROSPEC solves all of these through{" "}
            <span className="relative inline-block">
              one intelligent platform
              <span className="absolute -bottom-1 left-0 right-0 h-2.5 bg-[rgba(55,50,47,0.10)]" />
            </span>
            .
          </p>
        </div>
      </div>
    </section>
  )
}
