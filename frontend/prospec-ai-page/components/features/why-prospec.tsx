"use client"

import { motion } from "framer-motion"
import { Sparkles, Brain, Layers, ShieldCheck, TrendingUp, RefreshCw } from "lucide-react"

const reasons = [
  { icon: Sparkles, label: "Purpose-built AI", accent: "text-blue-400", bg: "bg-blue-500/10" },
  { icon: Brain, label: "University Knowledge", accent: "text-indigo-400", bg: "bg-indigo-500/10" },
  { icon: Layers, label: "Department AI", accent: "text-violet-400", bg: "bg-violet-500/10" },
  { icon: ShieldCheck, label: "Secure Architecture", accent: "text-emerald-400", bg: "bg-emerald-500/10" },
  { icon: TrendingUp, label: "Scalable Platform", accent: "text-orange-400", bg: "bg-orange-500/10" },
  { icon: RefreshCw, label: "Continuous Learning", accent: "text-purple-400", bg: "bg-purple-500/10" },
]

export function WhyProspec() {
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
            <span className="text-muted-foreground text-sm">Why Prospec</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl text-foreground text-balance max-w-2xl mx-auto"
            style={{ letterSpacing: "-0.03em", fontWeight: 600, lineHeight: 1.1 }}
          >
            Built Specifically for Higher Education
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {reasons.map((r, i) => {
            const Icon = r.icon
            return (
              <motion.div
                key={r.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
                className="flex items-center gap-3 rounded-2xl border border-border/60 bg-white/50 dark:bg-zinc-900/40 backdrop-blur-sm p-5"
              >
                <div className={`w-10 h-10 rounded-xl ${r.bg} flex items-center justify-center shrink-0`}>
                  <Icon className={`w-5 h-5 ${r.accent}`} />
                </div>
                <span className="text-sm font-medium text-foreground">{r.label}</span>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
