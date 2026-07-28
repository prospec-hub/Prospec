"use client"

import { motion } from "framer-motion"
import { X, Check } from "lucide-react"

const rows = [
  { before: "Multiple disconnected systems", after: "Unified intelligent platform" },
  { before: "Manual approvals", after: "Automated workflows" },
  { before: "Department silos", after: "Connected operations" },
  { before: "Static reporting", after: "Real-time analytics" },
  { before: "Office-hour support", after: "24×7 AI assistance" },
  { before: "Reactive management", after: "Predictive decision-making" },
  { before: "Manual document search", after: "AI-powered knowledge retrieval" },
  { before: "Paper-driven administration", after: "Digital intelligent operations" },
]

export function SolutionsComparison() {
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
            <div className="w-2 h-2 rounded-full bg-indigo-500" />
            <span className="text-muted-foreground text-sm">Compare</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl text-foreground text-balance"
            style={{ letterSpacing: "-0.03em", fontWeight: 600, lineHeight: 1.1 }}
          >
            Traditional University vs Intelligent University
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="rounded-2xl border border-border/60 bg-white/50 dark:bg-zinc-900/40 backdrop-blur-sm overflow-hidden"
        >
          {/* header row */}
          <div className="relative grid grid-cols-2 divide-x divide-border/50">
            <div className="px-4 py-4 text-center text-sm font-semibold text-muted-foreground">
              Traditional Operations
            </div>
            <div className="px-4 py-4 text-center text-sm font-semibold text-foreground bg-indigo-500/5">
              Prospec Intelligent Campus
            </div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full border border-border bg-background flex items-center justify-center text-[10px] font-bold text-muted-foreground">
              VS
            </div>
          </div>

          {rows.map((row, i) => (
            <motion.div
              key={row.before}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.06 }}
              className="grid grid-cols-2 divide-x divide-border/50 border-t border-border/50"
            >
              <div className="px-4 py-3.5 flex items-center gap-2 text-sm text-muted-foreground">
                <span className="w-4 h-4 rounded-full bg-red-500/10 flex items-center justify-center shrink-0">
                  <X className="w-2.5 h-2.5 text-red-400" />
                </span>
                {row.before}
              </div>
              <div className="px-4 py-3.5 flex items-center gap-2 text-sm font-medium text-foreground bg-indigo-500/[0.03]">
                <span className="w-4 h-4 rounded-full bg-emerald-500/15 flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5 text-emerald-400" />
                </span>
                {row.after}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
