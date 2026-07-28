"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Student, Sparkle, MagnifyingGlass, Database, CurrencyDollar, BellRinging, CheckCircle } from "@phosphor-icons/react"

const steps = [
  { icon: Student, label: "Student", sub: "asks a question" },
  { icon: Sparkle, label: "Student AI", sub: "understands intent" },
  { icon: MagnifyingGlass, label: "Knowledge AI", sub: "finds the answer" },
  { icon: Database, label: "ERP", sub: "pulls live records" },
  { icon: CurrencyDollar, label: "Finance", sub: "checks dues" },
  { icon: BellRinging, label: "Notification", sub: "student notified" },
  { icon: CheckCircle, label: "Completed", sub: "auto-resolved" },
]

export function WorkflowFlow() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setActive((p) => (p + 1) % (steps.length + 1)), 850)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="px-6 py-24 md:py-32" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-medium tracking-wide uppercase mb-3" style={{ color: "#1e81ce" }}>
            Automation in motion
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight leading-[1.1]">
            One question. Zero human effort.
          </h2>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed">
            Watch a single student query flow through the platform and resolve itself end to end.
          </p>
        </div>

        {/* Flow */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 lg:gap-2">
          {steps.map((s, i) => {
            const Icon = s.icon
            const on = i <= active
            return (
              <div key={s.label} className="flex lg:flex-col items-center lg:flex-1 gap-4 lg:gap-0">
                {/* node */}
                <div className="flex flex-col items-center text-center shrink-0 lg:w-full">
                  <motion.div
                    animate={{
                      scale: i === active ? 1.1 : 1,
                      boxShadow: on ? "0 10px 30px rgba(30,129,206,0.35)" : "0 1px 3px rgba(15,23,42,0.06)",
                    }}
                    transition={{ duration: 0.3 }}
                    className="w-14 h-14 rounded-2xl flex items-center justify-center border"
                    style={{
                      background: on ? "linear-gradient(135deg,#1e81ce,#0e5d9e)" : "#fff",
                      borderColor: on ? "transparent" : "#E2E8F0",
                    }}
                  >
                    <Icon className="w-6 h-6" weight={on ? "fill" : "duotone"} style={{ color: on ? "#fff" : "#94A3B8" }} />
                  </motion.div>
                  <div className="mt-3">
                    <div className="text-sm font-semibold text-slate-900">{s.label}</div>
                    <div className="text-xs text-slate-500">{s.sub}</div>
                  </div>
                </div>

                {/* connector */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block flex-1 h-px relative mx-1 mt-7 self-start" style={{ minWidth: "12px" }}>
                    <div className="absolute inset-0 bg-slate-200" />
                    <motion.div
                      className="absolute inset-y-0 left-0"
                      animate={{ width: i < active ? "100%" : "0%" }}
                      transition={{ duration: 0.4 }}
                      style={{ background: "linear-gradient(90deg,#1e81ce,#3ba3f5)" }}
                    />
                  </div>
                )}
                {/* mobile connector */}
                {i < steps.length - 1 && (
                  <div className="lg:hidden w-px h-6 relative ml-7">
                    <div className="absolute inset-0 bg-slate-200" />
                    <motion.div className="absolute inset-x-0 top-0" animate={{ height: i < active ? "100%" : "0%" }} transition={{ duration: 0.4 }} style={{ background: "linear-gradient(180deg,#1e81ce,#3ba3f5)" }} />
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
