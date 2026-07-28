"use client"

import { motion } from "framer-motion"
import { X, Check, ArrowRight } from "lucide-react"

const rows = [
  { before: "Manual Paperwork", after: "AI Automation" },
  { before: "Office Hours", after: "24×7 AI" },
  { before: "Scattered Information", after: "Unified Knowledge" },
  { before: "Manual Reporting", after: "AI Reports" },
  { before: "Reactive Decisions", after: "Predictive Analytics" },
  { before: "Department Silos", after: "Connected AI Ecosystem" },
]

export function FeaturesComparison() {
  return (
    <section className="relative py-28 bg-[#f4f6fb] dark:bg-[#09090B] transition-colors">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-6"
          >
            <div className="w-2 h-2 rounded-full bg-blue-500" />
            <span className="text-muted-foreground text-sm">Traditional University vs Prospec AI</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl text-foreground text-balance"
            style={{ letterSpacing: "-0.03em", fontWeight: 600, lineHeight: 1.1 }}
          >
            The shift is structural
          </motion.h2>
        </div>

        <div className="rounded-2xl border border-border/60 bg-white/50 dark:bg-zinc-900/40 backdrop-blur-sm divide-y divide-border/50 overflow-hidden">
          {rows.map((row, i) => (
            <motion.div
              key={row.before}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex items-center justify-between gap-3 px-5 py-4 sm:px-6"
            >
              <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                <span className="w-5 h-5 rounded-full bg-red-500/10 flex items-center justify-center shrink-0">
                  <X className="w-3 h-3 text-red-400" />
                </span>
                <span className="hidden sm:inline">{row.before}</span>
                <span className="sm:hidden">{row.before.split(" ")[0]}</span>
              </span>

              <ArrowRight className="w-4 h-4 text-muted-foreground/50 shrink-0" />

              <span className="inline-flex items-center gap-2 text-sm font-medium text-foreground">
                <span className="w-5 h-5 rounded-full bg-emerald-500/15 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 text-emerald-400" />
                </span>
                {row.after}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
