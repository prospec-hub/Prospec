"use client"

import { ChevronRight } from "lucide-react"

const timelineStages = [
  { label: "Admissions", active: false },
  { label: "Enrollment", active: false },
  { label: "Academic Journey", active: false },
  { label: "Examinations", active: false },
  { label: "Placements", active: false },
  { label: "Graduation", active: true },
  { label: "Alumni", active: false },
]

const projectBars = [
  { label: "Admissions AI", left: "5%", width: "42%", opacity: 1 },
  { label: "Faculty AI", left: "15%", width: "24%", opacity: 0.7 },
  { label: "Student AI", left: "42%", width: "44%", opacity: 1 },
  { label: "Administration AI", left: "32%", width: "28%", opacity: 0.7 },
]

const stats = [
  { label: "Students Supported", value: "52,431" },
  { label: "Departments", value: "18" },
  { label: "AI Requests", value: "3.8M" },
  { label: "Documents Indexed", value: "12,400" },
  { label: "Automation Rate", value: "94%" },
  { label: "Avg Response Time", value: "1.2s" },
]

export function ProductDirectionSection() {
  return (
    <section id="analytics" className="relative py-40 px-6 md:px-12 lg:px-24 bg-[#f4f6fb] dark:bg-[#09090B] transition-colors scroll-mt-28">
      <div
        className="absolute inset-x-0 top-0 pointer-events-none"
        style={{
          height: "20%",
          background: "linear-gradient(to bottom, rgba(59,130,246,0.03), transparent 100%)",
        }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-2 mb-6">
          <div className="w-3 h-3 rounded-full bg-blue-500" />
          <span className="text-muted-foreground text-sm">Institution Intelligence</span>
          <ChevronRight className="w-4 h-4 text-muted-foreground/50" />
        </div>

        {/* Section heading */}
        <h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-semibold text-foreground mb-8 max-w-3xl text-balance"
          style={{
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
          }}
        >
          Transform Every Department with AI
        </h2>

        {/* Description */}
        <p className="text-muted-foreground text-lg max-w-md mb-16 leading-relaxed">
          <span className="text-foreground font-medium">Deploy specialized AI systems</span> that work together across
          the entire university ecosystem—from admissions to alumni.
        </p>

        {/* 3D Timeline Visualization */}
        <div
          className="relative w-full mb-16"
          style={{ perspective: "1200px" }}
        >
          <div
            className="relative"
            style={{
              transform: "rotateX(50deg) rotateZ(-35deg)",
              transformStyle: "preserve-3d",
              transformOrigin: "center center",
            }}
          >
            <div className="relative h-[400px]">
              {/* Dashed vertical line */}
              <div
                className="absolute w-[1px]"
                style={{
                  height: "600px",
                  left: "55%",
                  top: "-100px",
                  backgroundImage:
                    "repeating-linear-gradient(to bottom, transparent, transparent 4px, rgba(113,113,122,0.5) 4px, rgba(113,113,122,0.5) 8px)",
                }}
              />

              {/* Tick marks */}
              <div className="absolute top-0 left-0 right-0 flex items-end">
                <div className="flex items-end gap-[3px] absolute bottom-0 left-[5%] right-0">
                  {Array.from({ length: 60 }).map((_, i) => (
                    <div
                      key={i}
                      className="bg-zinc-600/60"
                      style={{ width: "1px", height: i % 7 === 0 ? "16px" : "8px" }}
                    />
                  ))}
                </div>
              </div>

              {/* Timeline stage labels */}
              {timelineStages.map((stage, i) => {
                const positions = ["8%", "20%", "32%", "44%", "52%", "62%", "76%"]
                const tops = ["80px", "60px", "42px", "25px", "10px", "-8px", "-20px"]
                return (
                  <div
                    key={stage.label}
                    className={`absolute text-sm font-medium px-2 py-0.5 rounded ${
                      stage.active
                        ? "bg-zinc-700/80 text-zinc-200"
                        : "text-zinc-500"
                    }`}
                    style={{ left: positions[i], top: tops[i] }}
                  >
                    {stage.label}
                  </div>
                )
              })}

              {/* Project bars */}
              {projectBars.map((bar) => (
                <div
                  key={bar.label}
                  className="absolute rounded-lg bg-zinc-800/90 border border-zinc-700/50 px-4 py-3 flex items-center gap-3"
                  style={{
                    left: bar.left,
                    width: bar.width,
                    height: "44px",
                    top: `${100 + projectBars.indexOf(bar) * 55}px`,
                    opacity: bar.opacity,
                  }}
                >
                  <div className="w-3 h-3 rotate-45 bg-blue-500/60" />
                  <span className="text-zinc-300 text-sm font-medium">{bar.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom two-column section */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left column - AI Operations Dashboard */}
          <div className="border-t border-r border-b border-border pt-10 pr-10 pb-16">
            <h3 className="text-xl font-semibold text-foreground mb-3">AI Operations Dashboard</h3>
            <p className="text-muted-foreground text-base leading-relaxed mb-8">
              Monitor every AI agent, workflow, and department from a unified university operations view.
            </p>

            <div className="rounded-xl border border-border bg-card p-5">
              <h4 className="text-base font-semibold text-foreground mb-5">University Overview</h4>

              <div className="space-y-3">
                {[
                  { label: "Admissions", value: "Live", badge: "bg-emerald-500" },
                  { label: "Students", value: "52,431", badge: null },
                  { label: "Faculty", value: "2,114", badge: null },
                  { label: "AI Requests", value: "3.8M", badge: null },
                  { label: "Departments", value: "18", badge: null },
                  { label: "Automation Status", value: "Running", badge: "bg-blue-500" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between">
                    <span className="text-muted-foreground text-sm">{item.label}</span>
                    <div className="flex items-center gap-2">
                      {item.badge && <div className={`w-1.5 h-1.5 rounded-full ${item.badge}`} />}
                      <span className="text-foreground text-sm font-medium">{item.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right column - AI Insights */}
          <div className="border-t border-b border-border pt-10 pl-10 pb-16">
            <h3 className="text-xl font-semibold text-foreground mb-3">AI Insights</h3>
            <p className="text-muted-foreground text-base leading-relaxed mb-8">
              Proactive alerts, health checks, and predictive analytics keep your institution running at peak efficiency.
            </p>

            <div className="relative h-48">
              {/* Critical Alert card (back) */}
              <div
                className="absolute rounded-lg border border-red-500/20 bg-red-500/5 px-4 py-2"
                style={{ top: 0, left: "10%", width: "80%" }}
              >
                <span className="flex items-center gap-2 text-red-400 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                  Critical Alert
                </span>
              </div>

              {/* Attention Required card (middle) */}
              <div
                className="absolute rounded-lg border border-yellow-500/20 bg-yellow-500/5 px-4 py-2"
                style={{ top: "34px", left: "5%", width: "85%" }}
              >
                <span className="flex items-center gap-2 text-yellow-400 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
                  Attention Required
                </span>
              </div>

              {/* Everything Running Smoothly card (front) */}
              <div
                className="absolute rounded-xl border border-emerald-500/20 bg-card px-5 py-4 shadow-md"
                style={{ top: "68px", left: 0, width: "95%" }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <svg className="w-3 h-3 text-emerald-500" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z" />
                    </svg>
                  </span>
                  <span className="text-emerald-500 font-medium text-sm">Campus operations running normally</span>
                </div>
                <p className="text-muted-foreground text-xs mb-1">All AI agents are active and responding within SLA</p>
                <span className="text-muted-foreground/60 text-xs">Today</span>
              </div>
            </div>
          </div>
        </div>

        {/* Second row */}
        <div className="grid grid-cols-1 md:grid-cols-2 border-b border-border">
          {/* Left column - Department list */}
          <div className="border-r border-border pt-16 pr-10 pb-16 flex flex-col justify-center">
            <h3 className="text-2xl font-semibold text-foreground mb-8 leading-tight">
              AI Helps Every
              <br />
              Department
            </h3>
            <div className="flex flex-col gap-3">
              {[
                { label: "Admissions Automation", opacity: "text-foreground" },
                { label: "Academic Intelligence", opacity: "text-muted-foreground" },
                { label: "Finance Operations", opacity: "text-muted-foreground" },
                { label: "Student Success", opacity: "text-muted-foreground/70" },
                { label: "Placement Support", opacity: "text-muted-foreground/50" },
                { label: "Research Assistance", opacity: "text-muted-foreground/40" },
              ].map((item, i) => (
                <div key={item.label} className="flex items-center gap-3">
                  <div
                    className={`w-1 h-5 rounded-full ${i === 0 ? "bg-blue-500" : i === 1 ? "bg-blue-500/60" : "bg-blue-500/30"}`}
                  />
                  <span className={`font-medium ${item.opacity}`}>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right column - Knowledge document */}
          <div className="pt-10 pl-10 pb-16">
            <div className="rounded-xl border border-border bg-card overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border text-muted-foreground text-sm">
                <svg className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M3.5 2A1.5 1.5 0 002 3.5v9A1.5 1.5 0 003.5 14h9a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0012.5 2h-9z" />
                </svg>
                <span>University AI Knowledge</span>
                <span className="text-muted-foreground/40">›</span>
                <span>Institutional Intelligence</span>
              </div>

              <div className="p-5">
                <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-blue-500" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M8 1a7 7 0 100 14A7 7 0 008 1zM6.5 7a1.5 1.5 0 113 0v3a1.5 1.5 0 01-3 0V7zM8 4a1 1 0 100 2 1 1 0 000-2z" />
                  </svg>
                </div>

                <p className="text-foreground text-sm font-medium mb-3">Institutional Intelligence</p>

                <ul className="space-y-1 mb-4">
                  {[
                    "University policies",
                    "Academic regulations",
                    "NAAC documents",
                    "NBA reports",
                    "UGC guidelines",
                    "Internal circulars",
                    "HR policies",
                    "ERP information",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-muted-foreground text-xs">
                      <div className="w-1 h-1 rounded-full bg-blue-500 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-muted-foreground/60 text-xs">All searchable with AI.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 pt-16">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-2xl font-bold text-foreground mb-1">{stat.value}</p>
              <p className="text-muted-foreground text-sm leading-snug">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
