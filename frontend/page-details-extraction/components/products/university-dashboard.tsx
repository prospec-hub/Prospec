"use client"

import { useState, useEffect, useRef } from "react"

type Metric = { label: string; value: string; change?: string }
type Dept = {
  key: string
  title: string
  metrics: Metric[]
  bars: number[]
}

const departments: Dept[] = [
  {
    key: "Admissions",
    title: "Admissions Dashboard",
    metrics: [
      { label: "Applications", value: "8,420", change: "+23%" },
      { label: "Offers sent", value: "3,110" },
      { label: "Enrolled", value: "2,540" },
      { label: "Conversion", value: "30%", change: "+4%" },
    ],
    bars: [42, 55, 50, 63, 72, 68, 85, 90],
  },
  {
    key: "Student Portal",
    title: "Student Portal",
    metrics: [
      { label: "Active students", value: "14.2k" },
      { label: "Attendance", value: "91%", change: "+2%" },
      { label: "Assignments due", value: "320" },
      { label: "Fees cleared", value: "87%" },
    ],
    bars: [60, 64, 58, 70, 74, 80, 78, 88],
  },
  {
    key: "Faculty",
    title: "Faculty Portal",
    metrics: [
      { label: "Faculty", value: "640" },
      { label: "Avg rating", value: "4.6/5", change: "+0.3" },
      { label: "Classes today", value: "210" },
      { label: "Research papers", value: "78" },
    ],
    bars: [50, 52, 60, 58, 66, 70, 74, 80],
  },
  {
    key: "Finance",
    title: "Finance Dashboard",
    metrics: [
      { label: "Collected", value: "₹48.2 Cr", change: "+12%" },
      { label: "Pending", value: "₹6.1 Cr" },
      { label: "Scholarships", value: "₹3.4 Cr" },
      { label: "Payroll", value: "₹9.8 Cr" },
    ],
    bars: [40, 48, 56, 52, 64, 72, 80, 86],
  },
  {
    key: "AI Assistant",
    title: "PROSPEC AI Assistant",
    metrics: [
      { label: "Queries handled", value: "12.4k" },
      { label: "Auto-resolved", value: "82%", change: "+9%" },
      { label: "Avg response", value: "1.2s" },
      { label: "Escalations", value: "4%" },
    ],
    bars: [30, 45, 55, 62, 70, 78, 84, 92],
  },
  {
    key: "Placement",
    title: "Placement Dashboard",
    metrics: [
      { label: "Placed", value: "92%", change: "+6%" },
      { label: "Companies", value: "210" },
      { label: "Highest", value: "₹42 LPA" },
      { label: "Average", value: "₹8.6 LPA" },
    ],
    bars: [55, 60, 64, 70, 76, 82, 88, 92],
  },
  {
    key: "Analytics",
    title: "Executive Analytics",
    metrics: [
      { label: "Revenue", value: "₹61 Cr", change: "+18%" },
      { label: "Enrollment", value: "+18%" },
      { label: "Retention", value: "88%", change: "+3%" },
      { label: "Accreditation", value: "A++" },
    ],
    bars: [48, 54, 60, 66, 72, 80, 86, 94],
  },
]

export default function UniversityDashboard() {
  const [active, setActive] = useState(0)
  const [progress, setProgress] = useState(0)
  const mounted = useRef(true)

  useEffect(() => {
    mounted.current = true
    const interval = setInterval(() => {
      if (!mounted.current) return
      setProgress((prev) => {
        if (prev >= 100) {
          setActive((cur) => (cur + 1) % departments.length)
          return 0
        }
        return prev + 2
      })
    }, 90)
    return () => {
      mounted.current = false
      clearInterval(interval)
    }
  }, [])

  const select = (i: number) => {
    setActive(i)
    setProgress(0)
  }

  const dept = departments[active]

  return (
    <div className="w-full max-w-[960px] mx-auto">
      {/* Browser window */}
      <div className="w-full bg-white rounded-xl md:rounded-2xl border border-[rgba(55,50,47,0.12)] shadow-[0px_20px_60px_rgba(55,50,47,0.15)] overflow-hidden">
        {/* chrome */}
        <div className="h-10 border-b border-[rgba(55,50,47,0.08)] flex items-center gap-2 px-4 bg-[#F7F5F3]">
          <span className="w-2.5 h-2.5 rounded-full bg-[rgba(55,50,47,0.18)]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[rgba(55,50,47,0.18)]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[rgba(55,50,47,0.18)]" />
          <div className="ml-3 px-3 py-1 rounded-md bg-white border border-[rgba(55,50,47,0.10)] text-[11px] text-[#847971] font-sans">
            app.prospec.edu / {dept.key.toLowerCase().replace(" ", "-")}
          </div>
        </div>

        {/* body */}
        <div className="p-5 md:p-7 min-h-[300px] md:min-h-[360px]">
          <div key={active} className="animate-[fadeIn_0.5s_ease]">
            <div className="flex items-center justify-between mb-5">
              <div>
                <h3 className="text-[#37322F] text-lg md:text-xl font-serif">{dept.title}</h3>
                <p className="text-[#847971] text-xs font-sans">Live overview · academic year 2025–26</p>
              </div>
              <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#F7F5F3] border border-[rgba(55,50,47,0.10)] text-[11px] text-[#37322F] font-sans">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500" /> Real-time
              </span>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-5">
              {dept.metrics.map((m) => (
                <div key={m.label} className="p-3.5 rounded-xl bg-[#F7F5F3] border border-[rgba(55,50,47,0.08)]">
                  <div className="text-[#847971] text-[11px] font-sans mb-1">{m.label}</div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-[#37322F] text-lg md:text-xl font-serif">{m.value}</span>
                    {m.change && <span className="text-green-600 text-[11px] font-sans">{m.change}</span>}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-end gap-1.5 h-20 md:h-24 p-4 rounded-xl bg-[#F7F5F3] border border-[rgba(55,50,47,0.08)]">
              {dept.bars.map((b, i) => (
                <div key={i} className="flex-1 rounded-t-sm bg-[#37322F]/80" style={{ height: `${b}%` }} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Department tabs */}
      <div className="mt-4 flex flex-wrap justify-center gap-2">
        {departments.map((d, i) => (
          <button
            key={d.key}
            onClick={() => select(i)}
            className={`relative overflow-hidden px-3.5 py-2 rounded-full text-[12px] md:text-[13px] font-medium font-sans border transition-colors ${
              i === active
                ? "bg-[#37322F] text-white border-[#37322F]"
                : "bg-white text-[#605A57] border-[rgba(55,50,47,0.14)] hover:border-[#37322F]"
            }`}
          >
            {i === active && (
              <span className="absolute bottom-0 left-0 h-0.5 bg-white/60" style={{ width: `${progress}%` }} />
            )}
            {d.key}
          </button>
        ))}
      </div>

      <style>{`@keyframes fadeIn{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)}}`}</style>
    </div>
  )
}
