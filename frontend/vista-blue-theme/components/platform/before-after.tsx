"use client"

import { motion } from "framer-motion"
import { X, Check } from "@phosphor-icons/react"

const before = ["Manual Queries", "Endless Phone Calls", "Paper Files", "Long Queues", "Delayed Reports", "Human Dependency"]
const after = ["Instant AI Answers", "24/7 Support", "Full Automation", "Smart Reports", "Knowledge Search", "Predictive Analytics"]

export function BeforeAfter() {
  return (
    <section className="px-6 py-24 md:py-32" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-14">
          <p className="text-sm font-medium tracking-wide uppercase mb-3" style={{ color: "#1e81ce" }}>
            The difference
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight leading-[1.1]">
            From overwhelmed to intelligent
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {/* Traditional */}
          <motion.div
            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl p-8 border bg-slate-50" style={{ borderColor: "#E2E8F0" }}
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="w-8 h-8 rounded-lg bg-slate-200 flex items-center justify-center">
                <X className="w-4 h-4 text-slate-500" weight="bold" />
              </span>
              <h3 className="text-lg font-semibold text-slate-500">Traditional University</h3>
            </div>
            <ul className="space-y-3">
              {before.map((b) => (
                <li key={b} className="flex items-center gap-3 text-slate-500">
                  <X className="w-4 h-4 shrink-0 text-slate-400" weight="bold" />
                  <span className="line-through decoration-slate-300">{b}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* AI */}
          <motion.div
            initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-3xl p-8 border relative overflow-hidden"
            style={{ borderColor: "rgba(30,129,206,0.3)", background: "linear-gradient(160deg, rgba(30,129,206,0.06), rgba(255,255,255,1))", boxShadow: "0 20px 50px rgba(30,129,206,0.12)" }}
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(135deg,#1e81ce,#0e5d9e)" }}>
                <Check className="w-4 h-4 text-white" weight="bold" />
              </span>
              <h3 className="text-lg font-semibold text-slate-900">AI-Powered University</h3>
            </div>
            <ul className="space-y-3">
              {after.map((a) => (
                <li key={a} className="flex items-center gap-3 text-slate-800 font-medium">
                  <Check className="w-4 h-4 shrink-0" weight="bold" style={{ color: "#1e81ce" }} />
                  {a}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
