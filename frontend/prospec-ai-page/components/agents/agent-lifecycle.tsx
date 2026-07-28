"use client"

import { motion } from "framer-motion"
import { Compass, SlidersHorizontal, GraduationCap, Plug, Rocket, Activity, TrendingUp } from "lucide-react"

const steps = [
  { icon: Compass, label: "Discover" },
  { icon: SlidersHorizontal, label: "Configure" },
  { icon: GraduationCap, label: "Train" },
  { icon: Plug, label: "Integrate" },
  { icon: Rocket, label: "Deploy" },
  { icon: Activity, label: "Monitor" },
  { icon: TrendingUp, label: "Improve" },
]

export function AgentLifecycle() {
  return (
    <section className="relative py-28 bg-[#f4f6fb] dark:bg-[#09090B] transition-colors">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-6"
          >
            <div className="w-2 h-2 rounded-full bg-blue-500" />
            <span className="text-muted-foreground text-sm">Agent Lifecycle</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl text-foreground text-balance max-w-2xl mx-auto"
            style={{ letterSpacing: "-0.03em", fontWeight: 600, lineHeight: 1.1 }}
          >
            From idea to impact, managed
          </motion.h2>
        </div>

        <div className="relative">
          {/* connecting track */}
          <div className="absolute top-7 left-0 right-0 h-px bg-border hidden md:block">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-500 to-violet-500"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.6, ease: "easeInOut" }}
              style={{ originX: 0 }}
            />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-6">
            {steps.map((s, i) => {
              const Icon = s.icon
              return (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.12 }}
                  className="relative flex flex-col items-center text-center"
                >
                  <div className="w-14 h-14 rounded-2xl border border-border/70 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-sm flex items-center justify-center mb-3 shadow-[0_0_20px_rgba(59,130,246,0.08)]">
                    <Icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <span className="text-[11px] font-medium text-muted-foreground mb-1">
                    Step {i + 1}
                  </span>
                  <span className="text-sm font-semibold text-foreground">{s.label}</span>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
