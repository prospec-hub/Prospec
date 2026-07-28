import {
  GraduationCap,
  BookOpen,
  Building,
  Briefcase,
  Wallet,
  Heart,
  Target,
  FileCheck,
} from "lucide-react"

const stakeholders = [
  { icon: GraduationCap, role: "Students", line: "One app for classes, fees, results, hostel and an AI assistant for everything else." },
  { icon: BookOpen, role: "Faculty", line: "Timetables, attendance, grading and research — without the paperwork." },
  { icon: Building, role: "Administration", line: "Every department on one system, with automated approvals and clean records." },
  { icon: Target, role: "Management", line: "Live dashboards across admissions, finance and outcomes in one glance." },
  { icon: Wallet, role: "Finance", line: "Fees, payroll, budgets and audit-ready reports that reconcile automatically." },
  { icon: Heart, role: "Parents", line: "Transparent visibility into attendance, performance, fees and communication." },
  { icon: Briefcase, role: "Placement Cell", line: "Recruiter drives, AI resume screening and outcome tracking end to end." },
  { icon: FileCheck, role: "Examination Cell", line: "Question banks, secure online exams, proctoring and instant result analysis." },
]

export default function SolutionsSection() {
  return (
    <section id="solutions" className="w-full border-b border-[rgba(55,50,47,0.12)] bg-white">
      <div className="max-w-[1060px] mx-auto px-4 sm:px-6 md:px-8 lg:px-0 py-16 md:py-24">
        <div className="max-w-[640px] mx-auto text-center mb-12 md:mb-14">
          <div className="inline-flex items-center gap-2 px-[14px] py-[6px] bg-[#F7F5F3] rounded-full border border-[rgba(2,6,23,0.08)] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#37322F]" />
            <span className="text-[#37322F] text-xs font-medium font-sans">Built for Everyone</span>
          </div>
          <h2 className="text-[#37322F] text-3xl md:text-4xl lg:text-5xl font-serif leading-[1.1] tracking-tight mb-4">
            Whoever you are, this was built for you
          </h2>
          <p className="text-[#605A57] text-base md:text-lg font-sans leading-relaxed">
            A university is many people with very different needs. PROSPEC gives each of them their own experience on one platform.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {stakeholders.map((s) => {
            const Icon = s.icon
            return (
              <div key={s.role} className="group p-6 bg-[#F7F5F3] border border-[rgba(55,50,47,0.10)] rounded-2xl hover:bg-white hover:shadow-[0px_8px_24px_rgba(55,50,47,0.08)] hover:-translate-y-0.5 transition-all duration-300">
                <div className="w-11 h-11 rounded-xl bg-white border border-[rgba(55,50,47,0.12)] flex items-center justify-center mb-4 group-hover:bg-[#37322F] transition-colors">
                  <Icon className="w-5 h-5 text-[#37322F] group-hover:text-white transition-colors" strokeWidth={1.6} />
                </div>
                <h3 className="text-[#37322F] text-base font-semibold font-sans mb-1.5">{s.role}</h3>
                <p className="text-[#605A57] text-[13px] font-sans leading-relaxed">{s.line}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
