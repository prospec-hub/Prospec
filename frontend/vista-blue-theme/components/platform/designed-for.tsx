"use client"

import { motion } from "framer-motion"
import { GraduationCap } from "@phosphor-icons/react"

const institutions = [
  "Universities", "Engineering Colleges", "Medical Colleges", "Private Institutions",
  "Government Universities", "Autonomous Colleges", "Research Institutes", "Skill Universities",
]

export function DesignedFor() {
  return (
    <section className="px-6 py-20 md:py-24" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm font-medium tracking-wide uppercase mb-3" style={{ color: "#1e81ce" }}>
          Designed For
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 tracking-tight mb-14">
          Purpose-built for every kind of institution
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {institutions.map((name, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: (i % 4) * 0.06 }}
              className="flex items-center gap-2.5 justify-center px-4 py-5 rounded-2xl bg-white border transition-all hover:-translate-y-0.5"
              style={{ borderColor: "#E2E8F0", boxShadow: "0 1px 3px rgba(15,23,42,0.05)" }}
            >
              <GraduationCap className="w-5 h-5 shrink-0" weight="duotone" style={{ color: "#1e81ce" }} />
              <span className="text-sm font-medium text-slate-700 text-left">{name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
