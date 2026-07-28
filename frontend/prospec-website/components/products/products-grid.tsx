"use client"

import { Sparkles, ArrowUpRight } from "lucide-react"

type Product = {
  name: string
  dept: string
  description: string
  capabilities: string[]
  ai?: string
  popular?: boolean
}

const products: Product[] = [
  { name: "ERP", dept: "Administration", description: "The operational core powering finance, HR and university-wide processes.", capabilities: ["Central records", "Process automation"], ai: "AI Analytics" },
  { name: "Admissions", dept: "Communication", description: "From application to enrollment with intelligent, automated workflows.", capabilities: ["Application tracking", "Automated offers"], ai: "AI Powered", popular: true },
  { name: "Campus (SIS)", dept: "Campus Operations", description: "The student information system connecting records, registration and results.", capabilities: ["Student profiles", "Registrations"] },
  { name: "Faculty", dept: "Academic", description: "Schedules, evaluations, research tracking and performance for teaching staff.", capabilities: ["Timetables", "Appraisals"] },
  { name: "Learn (LMS)", dept: "Academic", description: "Virtual classrooms, course content and student engagement in one place.", capabilities: ["Courseware", "Assessments"], ai: "Adaptive Learning", popular: true },
  { name: "Exam", dept: "Academic", description: "Online examinations across formats with real-time result analysis.", capabilities: ["Question banks", "Auto grading"], ai: "AI Proctoring" },
  { name: "Finance", dept: "Finance", description: "Accounting, budgeting, payroll and fund management for the institution.", capabilities: ["Fee collection", "Payroll"], ai: "AI Reports", popular: true },
  { name: "Hostel", dept: "Campus Operations", description: "Room allocation, mess management and resident administration.", capabilities: ["Allocation", "Mess billing"], ai: "AI Complaint Routing" },
  { name: "Library", dept: "Academic", description: "Cataloging, circulation and digital resource access, fully integrated.", capabilities: ["Cataloging", "Digital access"] },
  { name: "Transport", dept: "Campus Operations", description: "Bus routes, schedules and live vehicle tracking with GPS.", capabilities: ["Live tracking", "Route plans"], ai: "AI Route Optimization" },
  { name: "Placement", dept: "Student Experience", description: "Career services connecting students with recruiters and opportunities.", capabilities: ["Recruiter portal", "Drives"], ai: "AI Resume Analysis" },
  { name: "Connect", dept: "Communication", description: "Alumni networking, events and lifelong institutional relationships.", capabilities: ["Alumni network", "Events"] },
  { name: "CRM", dept: "Communication", description: "Recruitment, retention and stakeholder engagement in one pipeline.", capabilities: ["Lead pipeline", "Campaigns"], ai: "AI Engagement" },
  { name: "Insight", dept: "AI & Analytics", description: "Business intelligence delivering data-driven institutional insight.", capabilities: ["Dashboards", "Predictions"], ai: "AI Analytics" },
  { name: "AI", dept: "AI & Analytics", description: "The intelligence suite — predictions, automation and recommendations across every module.", capabilities: ["Copilots", "Automation"], ai: "Core AI" },
  { name: "Mobile", dept: "Student Experience", description: "Apps for students, faculty, parents and administrators — with offline support.", capabilities: ["iOS & Android", "Offline mode"] },
  { name: "Identity", dept: "Identity & Security", description: "Enterprise identity and access with SSO and role-based controls.", capabilities: ["Single Sign-On", "RBAC"] },
  { name: "Docs", dept: "Administration", description: "Collaborative documentation and institutional knowledge management.", capabilities: ["Knowledge base", "Collaboration"] },
  { name: "Workflow", dept: "Administration", description: "Automate repetitive approvals and processes across all modules.", capabilities: ["Approvals", "No-code flows"], ai: "AI Automation" },
  { name: "APIs", dept: "Integrations", description: "A comprehensive API framework for seamless third-party integration.", capabilities: ["REST & webhooks", "Developer docs"] },
]

export default function ProductsGrid() {
  return (
    <section id="products" className="w-full border-b border-[rgba(55,50,47,0.12)] bg-[#F7F5F3]">
      <div className="max-w-[1060px] mx-auto px-4 sm:px-6 md:px-8 lg:px-0 py-16 md:py-24">
        <div className="max-w-[640px] mx-auto text-center mb-12 md:mb-14">
          <div className="inline-flex items-center gap-2 px-[14px] py-[6px] bg-white shadow-[0px_0px_0px_4px_rgba(55,50,47,0.05)] rounded-full border border-[rgba(2,6,23,0.08)] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#37322F]" />
            <span className="text-[#37322F] text-xs font-medium font-sans">The Complete Ecosystem</span>
          </div>
          <h2 className="text-[#37322F] text-3xl md:text-4xl lg:text-5xl font-serif leading-[1.1] tracking-tight mb-4">
            Every product your university runs on
          </h2>
          <p className="text-[#605A57] text-base md:text-lg font-sans leading-relaxed">
            Buy the modules you need today. Every one is included in PROSPEC One.
          </p>
        </div>

        {/* Featured flagship card */}
        <div className="mb-5 p-8 md:p-10 rounded-2xl bg-[#37322F] shadow-[0px_20px_50px_rgba(55,50,47,0.22)] flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="max-w-[560px]">
            <div className="flex items-center gap-2 mb-3">
              <span className="px-2.5 py-1 rounded-full bg-white/10 border border-white/20 text-white text-[11px] font-medium font-sans uppercase tracking-wide">Flagship</span>
              <span className="px-2.5 py-1 rounded-full bg-white/10 border border-white/20 text-white text-[11px] font-medium font-sans">All 20 modules</span>
            </div>
            <h3 className="text-white text-2xl md:text-3xl font-serif mb-2">PROSPEC One</h3>
            <p className="text-[#D2C6BF] text-sm md:text-base font-sans leading-relaxed">
              The complete all-in-one university operating system — every module unified into a single intelligent ecosystem.
            </p>
          </div>
          <a href="#packages" className="shrink-0 px-6 py-3 bg-white text-[#37322F] rounded-full font-medium text-sm text-center hover:bg-[#F7F5F3] transition-colors">
            View packages
          </a>
        </div>

        {/* Module grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {products.map((p) => (
            <div
              key={p.name}
              className="group flex flex-col p-6 bg-white border border-[rgba(55,50,47,0.10)] rounded-2xl hover:shadow-[0px_10px_30px_rgba(55,50,47,0.10)] hover:-translate-y-0.5 transition-all duration-300"
            >
              {/* Top row: dept + badges */}
              <div className="flex items-start justify-between gap-2 mb-3">
                <span className="text-[11px] font-medium font-sans uppercase tracking-[0.08em] text-[#9a9189]">{p.dept}</span>
                <div className="flex flex-wrap justify-end gap-1.5">
                  {p.popular && (
                    <span className="px-2 py-0.5 rounded-full bg-[#37322F] text-white text-[10px] font-medium font-sans">Popular</span>
                  )}
                  {p.ai && (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#F7F5F3] border border-[rgba(55,50,47,0.14)] text-[#37322F] text-[10px] font-medium font-sans">
                      <Sparkles className="w-2.5 h-2.5" strokeWidth={2} />
                      {p.ai}
                    </span>
                  )}
                </div>
              </div>

              <h3 className="text-[#37322F] text-lg font-semibold font-sans mb-1.5">
                PROSPEC {p.name}
              </h3>
              <p className="text-[#605A57] text-[13.5px] font-sans leading-relaxed mb-4 flex-1">{p.description}</p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {p.capabilities.map((c) => (
                  <span key={c} className="px-2 py-0.5 rounded-md bg-[#F7F5F3] text-[#605A57] text-[11px] font-sans">{c}</span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-[rgba(55,50,47,0.08)]">
                <span className="text-[11px] text-[#9a9189] font-sans">In PROSPEC One</span>
                <button className="inline-flex items-center gap-1 text-[13px] font-medium text-[#37322F] group-hover:gap-1.5 transition-all">
                  Learn more
                  <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={2} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
