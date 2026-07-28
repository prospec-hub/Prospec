"use client"

import { motion } from "framer-motion"
import { CountUp } from "./count-up"

const roi = [
  { end: 80, suffix: "%", label: "Less Administrative Work" },
  { end: 65, suffix: "%", label: "Faster Student Support" },
  { end: 90, suffix: "%", label: "Instant Information Retrieval" },
  { end: 10, suffix: "×", label: "Faster Report Generation" },
]

export function ROI() {
  return (
    <section className="px-6 py-24 md:py-32" style={{ backgroundColor: "#F8FAFC" }}>
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-14 text-center mx-auto">
          <p className="text-sm font-medium tracking-wide uppercase mb-3" style={{ color: "#1e81ce" }}>
            The impact
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight leading-[1.1]">
            Measurable results from day one
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {roi.map((r, i) => (
            <motion.div
              key={r.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="p-8 bg-white border rounded-3xl text-center"
              style={{ borderColor: "#E2E8F0", boxShadow: "0 1px 3px rgba(15,23,42,0.05)" }}
            >
              <div className="text-5xl md:text-6xl font-semibold tracking-tight" style={{ color: "#1e81ce", letterSpacing: "-0.033em" }}>
                <CountUp end={r.end} suffix={r.suffix} />
              </div>
              <div className="mt-3 text-sm text-slate-600">{r.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
