"use client"

import { motion } from "framer-motion"
import { CountUp } from "./count-up"

const stats = [
  { end: 52000, suffix: "+", label: "Students Assisted" },
  { end: 18, suffix: "+", label: "Departments Connected" },
  { end: 3.8, decimals: 1, suffix: "M+", label: "AI Requests" },
  { end: 99.4, decimals: 1, suffix: "%", label: "Response Accuracy" },
]

export function PlatformStats() {
  return (
    <section className="px-6 py-16" style={{ backgroundColor: "#F8FAFC" }}>
      <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-px rounded-3xl overflow-hidden border" style={{ borderColor: "#E2E8F0", backgroundColor: "#E2E8F0" }}>
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="bg-white px-6 py-10 text-center"
          >
            <div className="text-4xl md:text-5xl font-semibold tracking-tight" style={{ color: "#1e81ce", letterSpacing: "-0.033em" }}>
              <CountUp end={s.end} decimals={s.decimals ?? 0} suffix={s.suffix} />
            </div>
            <div className="mt-2 text-sm text-slate-500">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
