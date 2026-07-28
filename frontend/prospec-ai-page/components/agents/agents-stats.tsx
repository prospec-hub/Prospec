"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"

interface Stat {
  target: number
  suffix: string
  decimals?: number
  label: string
  display?: string // for non-numeric like "24×7"
}

const stats: Stat[] = [
  { target: 25, suffix: "+", label: "Specialized AI Agents" },
  { target: 0, suffix: "", label: "Always Available", display: "24×7" },
  { target: 100, suffix: "+", label: "Workflows Automated" },
  { target: 10, suffix: "M+", label: "AI Conversations Processed" },
]

function useCountUp(target: number, active: boolean, duration = 1600, decimals = 0) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (!active) return
    let raf = 0
    let start: number | null = null
    const step = (ts: number) => {
      if (start === null) start = ts
      const p = Math.min((ts - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setValue(target * eased)
      if (p < 1) raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [target, active, duration])
  return decimals ? value.toFixed(decimals) : Math.round(value).toString()
}

function StatItem({ stat, active, index }: { stat: Stat; active: boolean; index: number }) {
  const count = useCountUp(stat.target, active, 1600, stat.decimals)
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative text-center px-6 py-2"
    >
      <div className="text-4xl md:text-5xl font-semibold text-foreground tracking-tight tabular-nums">
        {stat.display ? stat.display : (
          <>
            {count}
            <span className="text-blue-500">{stat.suffix}</span>
          </>
        )}
      </div>
      <div className="mt-2 text-sm text-muted-foreground">{stat.label}</div>
    </motion.div>
  )
}

export function AgentsStats() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="relative py-20 bg-[#f4f6fb] dark:bg-[#09090B] transition-colors">
      <div ref={ref} className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 divide-x-0 md:divide-x divide-border/60 rounded-2xl border border-border/60 bg-white/40 dark:bg-zinc-900/30 backdrop-blur-sm py-10">
          {stats.map((stat, i) => (
            <StatItem key={stat.label} stat={stat} active={inView} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
