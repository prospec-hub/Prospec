"use client"

import { CaretRight } from "@phosphor-icons/react"

export function ProductDirectionSection() {
  return (
    <section className="relative py-40 px-6 md:px-12 lg:px-24" style={{ backgroundColor: "#09090B" }}>
      <div
        className="absolute inset-x-0 top-0 pointer-events-none"
        style={{ height: "20%", background: "linear-gradient(to bottom, rgba(255,255,255,0.05), transparent 100%)" }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-2 mb-6">
          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#1e81ce" }} />
          <span className="text-zinc-400 text-sm">Institution Intelligence</span>
          <CaretRight className="w-4 h-4 text-zinc-500" weight="bold" />
        </div>

        {/* Section heading */}
        <h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-semibold text-white mb-8 max-w-3xl"
          style={{ letterSpacing: "-0.033em", lineHeight: 1.1 }}
        >
          Transform Every Department with AI
        </h2>

        {/* Description */}
        <p className="text-zinc-400 text-lg max-w-md mb-16">
          <span className="text-white font-semibold">Deploy specialized AI systems</span> that work together across the
          entire university ecosystem—from admissions to alumni.
        </p>

        {/* 3D Timeline Visualization */}
        <div className="relative w-full mb-16" style={{ perspective: "1200px" }}>
          <div
            className="relative"
            style={{ transform: "rotateX(50deg) rotateZ(-35deg)", transformStyle: "preserve-3d", transformOrigin: "center center" }}
          >
            <div className="relative h-[400px]">
              <div
                className="absolute w-[1px]"
                style={{
                  height: "600px",
                  left: "55%",
                  top: "-100px",
                  backgroundImage: "repeating-linear-gradient(to bottom, transparent, transparent 4px, rgba(30,129,206,0.4) 4px, rgba(30,129,206,0.4) 8px)",
                }}
              />

              <div className="absolute top-0 left-0 right-0 flex items-end">
                <div className="flex items-end gap-[3px] absolute bottom-0 left-[5%] right-0">
                  {Array.from({ length: 60 }).map((_, i) => (
                    <div
                      key={i}
                      style={{
                        width: "1px",
                        height: i % 7 === 0 ? "16px" : "8px",
                        backgroundColor: "rgba(30,129,206,0.4)",
                      }}
                    />
                  ))}
                </div>
              </div>

              {["Admissions","Enrollment","Academic Journey","Examinations","Graduation","Placements","Alumni"].map((label, i) => {
                const positions = [
                  { left: "5%", top: "80px" },
                  { left: "18%", top: "55px" },
                  { left: "32%", top: "35px" },
                  { left: "48%", top: "15px" },
                  { left: "58%", top: "-10px" },
                  { left: "72%", top: "-5px" },
                  { left: "88%", top: "-25px" },
                ]
                const isGraduation = label === "Graduation"
                return (
                  <div
                    key={label}
                    className="absolute text-sm"
                    style={{
                      ...positions[i],
                      color: isGraduation ? "#e4e4e7" : i > 4 ? "rgba(113,113,122,0.5)" : "#71717a",
                      ...(isGraduation ? {
                        padding: "4px 12px",
                        borderRadius: "6px",
                        backgroundColor: "rgba(30,129,206,0.15)",
                        border: "1px solid rgba(30,129,206,0.3)",
                        fontWeight: 600,
                      } : {}),
                    }}
                  >
                    {label}
                  </div>
                )
              })}

              {/* Bars */}
              <div className="absolute rounded-lg border px-4 py-3 flex items-center gap-3" style={{ left: "5%", top: "100px", width: "45%", height: "48px", backgroundColor: "rgba(30,129,206,0.1)", borderColor: "rgba(30,129,206,0.3)" }}>
                <div className="w-4 h-4 rotate-45" style={{ backgroundColor: "rgba(30,129,206,0.5)" }} />
                <span className="text-zinc-300 text-sm font-semibold">Admissions AI</span>
                <div className="absolute w-5 h-5 border-2 rotate-45" style={{ borderColor: "#22c55e", right: "15%", top: "50%", transform: "translateY(-50%) rotate(45deg)" }} />
              </div>

              <div className="absolute rounded-lg border px-4 py-3 flex items-center gap-3" style={{ left: "15%", top: "155px", width: "25%", height: "44px", backgroundColor: "rgba(14,93,158,0.08)", borderColor: "rgba(30,129,206,0.2)" }}>
                <div className="w-3 h-3 rotate-45" style={{ backgroundColor: "rgba(30,129,206,0.4)" }} />
                <span className="text-zinc-500 text-sm">Faculty AI</span>
              </div>

              <div className="absolute rounded-lg border px-4 py-3 flex items-center justify-between" style={{ left: "45%", top: "155px", width: "45%", height: "48px", backgroundColor: "rgba(30,129,206,0.1)", borderColor: "rgba(30,129,206,0.3)" }}>
                <span className="text-zinc-400 text-sm">Student AI</span>
                <div className="flex gap-0.5">
                  {[0,1,2].map(i => <div key={i} className="w-2.5 h-2.5 rotate-45" style={{ backgroundColor: "rgba(30,129,206,0.5)" }} />)}
                </div>
              </div>

              <div className="absolute rounded-lg border px-4 py-3 flex items-center justify-between" style={{ left: "35%", top: "240px", width: "28%", height: "48px", backgroundColor: "rgba(14,93,158,0.08)", borderColor: "rgba(30,129,206,0.2)" }}>
                <span className="text-zinc-400 text-sm">Administration AI</span>
                <div className="flex gap-0.5">
                  {[0,1].map(i => <div key={i} className="w-2.5 h-2.5 rotate-45" style={{ backgroundColor: "rgba(30,129,206,0.4)" }} />)}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom two-column section */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="border-t border-r border-b border-zinc-800 pt-10 pr-10 pb-16">
            <h3 className="text-xl font-semibold text-zinc-200 mb-3 tracking-tight">AI Operations Dashboard</h3>
            <p className="text-zinc-500 text-base leading-relaxed mb-8">
              Monitor every AI system and campus operation in one centralized location.
            </p>
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
              <h4 className="text-lg font-semibold text-zinc-200 mb-5 tracking-tight">University Overview</h4>
              <div className="flex flex-col gap-3">
                {[
                  { label: "Admissions", value: null, badge: "Live", badgeColor: "#22c55e" },
                  { label: "Students", value: "52,431", badge: null },
                  { label: "Faculty", value: "2,114", badge: null },
                  { label: "AI Requests", value: "3.8M", badge: null },
                  { label: "Departments", value: "18", badge: null },
                  { label: "Automation Status", value: null, badge: "Running", badgeColor: "#22c55e" },
                ].map(({ label, value, badge, badgeColor }) => (
                  <div key={label} className="flex items-center justify-between">
                    <span className="text-zinc-500 text-sm">{label}</span>
                    {value && <span className="text-zinc-300 text-sm font-medium">{value}</span>}
                    {badge && (
                      <span className="flex items-center gap-1.5 px-2 py-1 rounded bg-zinc-800 text-xs font-medium" style={{ color: badgeColor }}>
                        <span className="w-2 h-2 rounded-full" style={{ backgroundColor: badgeColor }} />
                        {badge}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-b border-zinc-800 pt-10 pl-10 pb-16">
            <h3 className="text-xl font-semibold text-zinc-200 mb-3 tracking-tight">AI Insights</h3>
            <p className="text-zinc-500 text-base leading-relaxed mb-8">
              Stay on top of campus health with real-time, AI-generated status insights.
            </p>
            <div className="relative h-48">
              <div className="absolute rounded-lg bg-zinc-800/40 border border-zinc-700/30 px-4 py-2" style={{ top: 0, left: "10%", width: "80%" }}>
                <span className="flex items-center gap-2 text-zinc-500 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-500" />Critical Alert
                </span>
              </div>
              <div className="absolute rounded-lg bg-zinc-800/60 border border-zinc-700/40 px-4 py-2" style={{ top: "30px", left: "5%", width: "85%" }}>
                <span className="flex items-center gap-2 text-zinc-400 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-400" />Attention Required
                </span>
              </div>
              <div className="absolute rounded-xl bg-zinc-800/90 border border-zinc-700/50 px-5 py-4" style={{ top: "60px", left: 0, width: "95%" }}>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                    <svg className="w-3 h-3 text-green-500" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z" />
                    </svg>
                  </span>
                  <span className="text-green-500 font-semibold text-sm">Everything Running Smoothly</span>
                </div>
                <p className="text-zinc-300 text-sm mb-3">Campus operations running normally</p>
                <span className="text-zinc-500 text-xs">Today</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 border-b border-zinc-800">
          <div className="border-r border-zinc-800 pt-16 pr-10 pb-16 flex flex-col justify-center">
            <h3 className="text-2xl font-semibold text-zinc-200 mb-8 leading-tight tracking-tight">
              AI Helps Every<br />Department
            </h3>
            <div className="flex flex-col gap-3">
              {[
                { label: "Admissions Automation", opacity: 1.0, textColor: "text-zinc-200" },
                { label: "Academic Intelligence", opacity: 0.8, textColor: "text-zinc-300" },
                { label: "Finance Operations", opacity: 0.6, textColor: "text-zinc-400" },
                { label: "Student Success", opacity: 0.5, textColor: "text-zinc-400" },
                { label: "Placement Support", opacity: 0.4, textColor: "text-zinc-500" },
                { label: "Research Assistance", opacity: 0.3, textColor: "text-zinc-500" },
              ].map(({ label, opacity, textColor }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="w-1 h-5 rounded-full" style={{ backgroundColor: `rgba(30,129,206,${opacity})` }} />
                  <span className={`${textColor} font-medium`}>{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-10 pl-10 pb-16">
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-zinc-800 text-zinc-400 text-sm">
                <svg className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M3.5 2A1.5 1.5 0 002 3.5v9A1.5 1.5 0 003.5 14h9a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0012.5 2h-9z" />
                </svg>
                <span>University AI Knowledge</span>
                <span className="text-zinc-600">›</span>
                <span>Institutional Intelligence</span>
                <span className="ml-auto text-zinc-600">•••</span>
              </div>
              <div className="p-5">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: "rgba(30,129,206,0.15)" }}>
                  <svg className="w-5 h-5" style={{ color: "#1e81ce" }} viewBox="0 0 16 16" fill="currentColor">
                    <path d="M8 8a2 2 0 100-4 2 2 0 000 4zM8 9c-2.67 0-8 1.34-8 4v1h16v-1c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
                <div className="mb-3 relative inline-block">
                  <span className="text-zinc-200 text-lg font-semibold">Institutional</span>
                  <span className="relative mx-1">
                    <span className="text-zinc-200 text-lg font-semibold px-0.5" style={{ backgroundColor: "rgba(30,129,206,0.2)" }}>Intelligence</span>
                    <span className="absolute -top-4 right-0 px-1.5 py-0.5 rounded text-[10px] text-white font-medium" style={{ backgroundColor: "#1e81ce" }}>AI</span>
                  </span>
                </div>
                <ul className="text-zinc-400 text-sm leading-relaxed mb-4 space-y-1">
                  {["University policies","Academic regulations","NAAC documents","NBA reports","UGC guidelines","Internal circulars","HR policies","ERP information"].map(item => <li key={item}>{item}</li>)}
                </ul>
                <p className="text-zinc-300 text-sm font-semibold mb-6">All searchable with AI.</p>
                <div className="flex flex-col gap-2 mt-8">
                  <div className="flex gap-2 flex-wrap">
                    <div className="h-2 bg-zinc-700/50 rounded w-16" />
                    <div className="h-2 bg-zinc-700/30 rounded w-24" />
                    <div className="h-2 bg-zinc-700/50 rounded w-12" />
                    <div className="h-2 rounded w-20" style={{ backgroundColor: "rgba(30,129,206,0.3)" }} />
                    <div className="h-2 bg-zinc-700/30 rounded w-16" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-16">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <svg className="w-5 h-5 text-zinc-400" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="10" cy="10" r="8" /><circle cx="10" cy="10" r="4" /><circle cx="10" cy="10" r="1" fill="currentColor" />
              </svg>
              <span className="text-zinc-200 font-semibold">Students Supported</span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed">52,000+ students across partner institutions</p>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-3">
              <svg className="w-5 h-5" style={{ color: "#1e81ce" }} viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 2a8 8 0 100 16A8 8 0 0010 2zm1 11H9V9h2v4zm0-6H9V5h2v2z" />
              </svg>
              <span className="text-zinc-200 font-semibold">AI Queries Resolved</span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed">3.8M+ queries auto-resolved by AI</p>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-3">
              <svg className="w-5 h-5 text-zinc-400" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4 4h12v12H4z" /><path d="M8 8h4v4H8z" />
              </svg>
              <span className="text-zinc-200 font-semibold">Departments Automated</span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed">18+ departments running AI workflows</p>
          </div>
        </div>
      </div>
    </section>
  )
}
