"use client"

import { motion } from "framer-motion"

const weeks = [
  { week: "Week 1", title: "Discovery", desc: "We map your departments, systems and goals." },
  { week: "Week 2", title: "Knowledge Upload", desc: "Your documents, policies and ERP data are ingested." },
  { week: "Week 3", title: "Integration", desc: "Connect ERP, LMS, HRMS, finance and comms channels." },
  { week: "Week 4", title: "Testing", desc: "Agents are validated against real institutional queries." },
  { week: "Week 5", title: "Training", desc: "Staff onboarding and role-based access configuration." },
  { week: "Week 6", title: "Go Live", desc: "AI goes live across your campus, fully supported." },
]

export function Implementation() {
  return (
    <section className="px-6 py-24 md:py-32" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-medium tracking-wide uppercase mb-3" style={{ color: "#1e81ce" }}>
            Implementation
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight leading-[1.1]">
            Live in six weeks
          </h2>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed">
            A structured, guided rollout—our team does the heavy lifting.
          </p>
        </div>

        <div className="relative">
          {/* horizontal line desktop */}
          <div className="hidden lg:block absolute top-5 left-0 right-0 h-px bg-slate-200" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-4">
            {weeks.map((w, i) => (
              <motion.div
                key={w.week}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative"
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-semibold mb-4 relative z-10"
                  style={{ background: "linear-gradient(135deg,#1e81ce,#0e5d9e)", boxShadow: "0 4px 14px rgba(30,129,206,0.35)" }}
                >
                  {i + 1}
                </div>
                <div className="text-xs font-medium uppercase tracking-wide mb-1" style={{ color: "#1e81ce" }}>{w.week}</div>
                <h3 className="text-base font-semibold text-slate-900 tracking-tight mb-1">{w.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{w.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
