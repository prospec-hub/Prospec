"use client"

import { useState } from "react"
import { Sparkles, Clock, Users, Layers, TrendingUp } from "lucide-react"

const MODULES = [
  "PROSPEC ERP", "PROSPEC Admissions", "PROSPEC Campus", "PROSPEC Faculty",
  "PROSPEC Learn", "PROSPEC Exam", "PROSPEC Finance", "PROSPEC Hostel",
  "PROSPEC Library", "PROSPEC Transport", "PROSPEC Placement", "PROSPEC Connect",
  "PROSPEC CRM", "PROSPEC Insight", "PROSPEC AI", "PROSPEC Mobile",
  "PROSPEC Identity", "PROSPEC Docs", "PROSPEC Workflow", "PROSPEC APIs",
]

const MODULE_PRICING: { [key: string]: number } = {
  "PROSPEC ERP": 2.5, "PROSPEC Admissions": 2.0, "PROSPEC Campus": 2.5, "PROSPEC Faculty": 1.5,
  "PROSPEC Learn": 2.0, "PROSPEC Exam": 1.8, "PROSPEC Finance": 2.5, "PROSPEC Hostel": 1.2,
  "PROSPEC Library": 1.0, "PROSPEC Transport": 1.2, "PROSPEC Placement": 1.5, "PROSPEC Connect": 1.0,
  "PROSPEC CRM": 1.8, "PROSPEC Insight": 2.0, "PROSPEC AI": 3.0, "PROSPEC Mobile": 1.5,
  "PROSPEC Identity": 1.5, "PROSPEC Docs": 0.8, "PROSPEC Workflow": 1.5, "PROSPEC APIs": 1.0,
}

const AI_MODULES = new Set([
  "PROSPEC AI", "PROSPEC Admissions", "PROSPEC Finance", "PROSPEC Insight",
  "PROSPEC Learn", "PROSPEC Exam", "PROSPEC Hostel", "PROSPEC Transport",
  "PROSPEC Placement", "PROSPEC CRM", "PROSPEC Workflow", "PROSPEC ERP",
])

export default function PackageConfigurator() {
  const [selectedModules, setSelectedModules] = useState<string[]>([])
  const [institutionName, setInstitutionName] = useState("")
  const [studentCount, setStudentCount] = useState("")

  const toggleModule = (module: string) => {
    setSelectedModules((prev) =>
      prev.includes(module) ? prev.filter((m) => m !== module) : [...prev, module],
    )
  }

  const count = selectedModules.length
  const basePrice = 8
  const selectedPrice = selectedModules.reduce((sum, m) => sum + (MODULE_PRICING[m] || 2), 0)
  const totalEstimate = basePrice + selectedPrice

  const implementationWeeks = count === 0 ? 0 : 6 + Math.ceil(count * 1.5)
  const teamSize = count === 0 ? 0 : 2 + Math.ceil(count / 4)
  const coverage = Math.round((count / MODULES.length) * 100)
  const aiCount = selectedModules.filter((m) => AI_MODULES.has(m)).length

  const getRecommendation = () => {
    if (count >= 18) return { package: "PROSPEC One", price: "Custom", badge: "⭐" }
    if (totalEstimate >= 35) return { package: "Enterprise", price: "₹42 L", badge: "🟣" }
    if (totalEstimate >= 20) return { package: "Professional", price: "₹28 L", badge: "🔵" }
    if (count > 0) return { package: "Standard", price: "₹15 L", badge: "🟢" }
    return null
  }
  const recommendation = getRecommendation()

  const stats = [
    { icon: Clock, label: "Implementation", value: count ? `${implementationWeeks} wks` : "—" },
    { icon: Users, label: "Rollout team", value: count ? `${teamSize} people` : "—" },
    { icon: Layers, label: "Ecosystem coverage", value: `${coverage}%` },
    { icon: Sparkles, label: "AI-enabled modules", value: count ? `${aiCount}` : "—" },
  ]

  return (
    <section id="configurator" className="w-full border-b border-[rgba(55,50,47,0.12)] bg-white">
      <div className="max-w-[1060px] mx-auto px-4 sm:px-6 md:px-8 lg:px-0 py-16 md:py-24">
        <div className="max-w-[640px] mx-auto text-center mb-12 md:mb-14">
          <div className="inline-flex items-center gap-2 px-[14px] py-[6px] bg-[#F7F5F3] rounded-full border border-[rgba(2,6,23,0.08)] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#37322F]" />
            <span className="text-[#37322F] text-xs font-medium font-sans">Build Your Own</span>
          </div>
          <h2 className="text-[#37322F] text-3xl md:text-4xl lg:text-5xl font-serif leading-[1.1] tracking-tight mb-4">
            Design your university&apos;s perfect solution
          </h2>
          <p className="text-[#605A57] text-base md:text-lg font-sans leading-relaxed">
            Pick the modules you need and watch cost, timeline and team size update live.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Left: module selection */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-[#37322F] text-lg font-semibold font-sans">Choose your modules</h3>
              <button
                onClick={() => setSelectedModules(selectedModules.length === MODULES.length ? [] : [...MODULES])}
                className="text-[13px] font-medium text-[#37322F] hover:underline"
              >
                {selectedModules.length === MODULES.length ? "Clear all" : "Select all"}
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {MODULES.map((module) => {
                const active = selectedModules.includes(module)
                return (
                  <button
                    key={module}
                    onClick={() => toggleModule(module)}
                    className={`p-4 rounded-xl border text-left transition-all text-sm ${
                      active
                        ? "bg-[#37322F] text-white border-[#37322F]"
                        : "bg-white text-[#49423d] border-[rgba(55,50,47,0.12)] hover:border-[#37322F]"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded border-2 flex items-center justify-center shrink-0 ${active ? "bg-white border-white" : "border-[#d0ccc9]"}`}>
                        {active && (
                          <svg className="w-3 h-3 text-[#37322F]" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        )}
                      </div>
                      <span className="flex items-center gap-1.5">
                        {module}
                        {AI_MODULES.has(module) && (
                          <Sparkles className={`w-3 h-3 ${active ? "text-white/80" : "text-[#9a9189]"}`} strokeWidth={2} />
                        )}
                      </span>
                    </div>
                  </button>
                )
              })}
            </div>

            {/* Institution details */}
            <div className="mt-8">
              <h3 className="text-[#37322F] text-lg font-semibold font-sans mb-4">Institution details</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Institution name"
                  value={institutionName}
                  onChange={(e) => setInstitutionName(e.target.value)}
                  className="w-full px-4 py-3 border border-[rgba(55,50,47,0.14)] rounded-xl text-[#37322F] placeholder-[#9a9189] focus:outline-none focus:border-[#37322F] transition-colors"
                />
                <input
                  type="text"
                  placeholder="Number of students"
                  value={studentCount}
                  onChange={(e) => setStudentCount(e.target.value)}
                  className="w-full px-4 py-3 border border-[rgba(55,50,47,0.14)] rounded-xl text-[#37322F] placeholder-[#9a9189] focus:outline-none focus:border-[#37322F] transition-colors"
                />
              </div>
            </div>
          </div>

          {/* Right: live summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 p-6 bg-[#F7F5F3] border border-[rgba(55,50,47,0.12)] rounded-2xl">
              <h3 className="text-[#37322F] text-lg font-semibold font-sans mb-5">
                Your configuration
                {institutionName && <span className="block text-[13px] font-normal text-[#605A57] mt-0.5">for {institutionName}</span>}
              </h3>

              {/* live stat tiles */}
              <div className="grid grid-cols-2 gap-2.5 mb-5">
                {stats.map((s) => {
                  const Icon = s.icon
                  return (
                    <div key={s.label} className="p-3 bg-white border border-[rgba(55,50,47,0.10)] rounded-xl">
                      <Icon className="w-4 h-4 text-[#37322F] mb-2" strokeWidth={1.6} />
                      <div className="text-[#37322F] text-lg font-serif leading-none">{s.value}</div>
                      <div className="text-[#847971] text-[11px] font-sans mt-1.5 leading-tight">{s.label}</div>
                    </div>
                  )
                })}
              </div>

              {/* selected modules */}
              <p className="text-[11px] uppercase tracking-wide text-[#9a9189] font-semibold font-sans mb-2">
                Selected modules ({count})
              </p>
              <div className="space-y-1.5 max-h-32 overflow-y-auto mb-4">
                {count > 0 ? (
                  selectedModules.map((m) => (
                    <div key={m} className="flex items-center justify-between text-[13px] text-[#49423d] bg-white px-2.5 py-1.5 rounded-lg">
                      <span className="truncate">{m.replace("PROSPEC ", "")}</span>
                      <span className="font-medium shrink-0 ml-2">₹{MODULE_PRICING[m]?.toFixed(1)} L</span>
                    </div>
                  ))
                ) : (
                  <p className="text-[13px] text-[#9a9189] italic">No modules selected yet</p>
                )}
              </div>

              {/* cost */}
              <div className="border-t border-[rgba(55,50,47,0.14)] pt-4 mb-4">
                <div className="flex justify-between items-center mb-1.5">
                  <span className="text-[13px] text-[#605A57] font-sans">Base platform</span>
                  <span className="text-[13px] font-medium text-[#37322F]">₹{basePrice} L</span>
                </div>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-[13px] text-[#605A57] font-sans">Modules</span>
                  <span className="text-[13px] font-medium text-[#37322F]">₹{selectedPrice.toFixed(1)} L</span>
                </div>
                <div className="flex justify-between items-center bg-white px-3 py-3 rounded-xl border border-[rgba(55,50,47,0.12)]">
                  <span className="text-sm font-semibold text-[#37322F] font-sans">Estimated investment</span>
                  <span className="text-lg font-serif text-[#37322F]">₹{totalEstimate.toFixed(1)} L</span>
                </div>
              </div>

              {/* AI recommendation */}
              {recommendation && (
                <div className="bg-[#37322F] p-4 rounded-xl mb-5">
                  <p className="flex items-center gap-1.5 text-[11px] uppercase tracking-wide text-[#B2AEA9] font-semibold font-sans mb-2">
                    <TrendingUp className="w-3.5 h-3.5" strokeWidth={2} />
                    AI recommendation
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-base font-semibold text-white font-sans">
                      {recommendation.badge} {recommendation.package}
                    </span>
                    <span className="text-sm font-medium text-[#D2C6BF]">{recommendation.price}</span>
                  </div>
                </div>
              )}

              <div className="space-y-2.5">
                <a href="#cta" className="block w-full px-4 py-3 bg-[#37322F] text-white rounded-full font-medium text-sm text-center hover:bg-[#2A2520] transition-colors">
                  Request detailed proposal
                </a>
                <a href="#cta" className="block w-full px-4 py-3 bg-white text-[#37322F] border border-[rgba(55,50,47,0.14)] rounded-full font-medium text-sm text-center hover:bg-[#F7F5F3] transition-colors">
                  Book a consultation
                </a>
              </div>

              <p className="text-[11px] text-[#9a9189] mt-3 leading-relaxed font-sans">
                Every PROSPEC module integrates natively — 100% compatibility, no third-party glue required.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
