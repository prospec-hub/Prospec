"use client"

import { motion } from "framer-motion"
import { X, Check } from "lucide-react"

const without = [
  "Manual staff & office hours",
  "Slow approvals & paperwork",
  "Endless emails and calls",
  "Long queues at every desk",
  "No real-time visibility",
]

const with_ = [
  "Digital workforce, 24×7",
  "Automated approvals & workflows",
  "Instant multilingual responses",
  "Zero queues, self-serve",
  "Real-time, predictive analytics",
]

export function AgentComparison() {
  return (
    <section className="relative py-28 bg-[#f4f6fb] dark:bg-[#09090B] transition-colors">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-6"
          >
            <div className="w-2 h-2 rounded-full bg-blue-500" />
            <span className="text-muted-foreground text-sm">The Difference</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl text-foreground text-balance max-w-2xl mx-auto"
            style={{ letterSpacing: "-0.03em", fontWeight: 600, lineHeight: 1.1 }}
          >
            Hire 30 more staff, or deploy AI
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {/* Without */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-border/60 bg-white/40 dark:bg-zinc-900/30 p-7"
          >
            <div className="text-sm font-semibold text-muted-foreground mb-6">Without AI</div>
            <ul className="space-y-3.5">
              {without.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <span className="w-5 h-5 rounded-full bg-red-500/10 flex items-center justify-center shrink-0">
                    <X className="w-3 h-3 text-red-400" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* With */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-2xl border border-blue-500/40 bg-gradient-to-b from-blue-500/[0.07] to-transparent dark:from-blue-500/10 p-7"
          >
            <div
              className="absolute -top-20 -right-20 w-56 h-56 rounded-full pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(59,130,246,0.18), transparent 70%)" }}
            />
            <div className="relative">
              <div className="text-sm font-semibold text-foreground mb-6 inline-flex items-center gap-2">
                With Prospec Agents
                <span className="text-[10px] font-medium px-2 py-0.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400">
                  Recommended
                </span>
              </div>
              <ul className="space-y-3.5">
                {with_.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-foreground">
                    <span className="w-5 h-5 rounded-full bg-emerald-500/15 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-emerald-400" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
