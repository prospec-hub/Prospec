"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"

interface Metric {
  target: number
  suffix: string
  decimals?: number
  label: string
  display?: string
}

const metrics: Metric[] = [
  { target: 80, suffix: "%", label: "Reduction in repetitive administrative work" },
  { target: 70, suffix: "%", label: "Faster response to student queries" },
  { target: 10, suffix: "×", label: "Faster institutional reporting" },
  { target: 0, suffix: "", label: "Continuous AI-powered support", display: "24×7" },
  { target: 95, suffix: "%", label: "Instant knowledge retrieval" },
  { target: 99.9, suffix: "%", decimals: 1, label: "Enterprise platform availability" },
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

function MetricTile({ metric, active, index }: { metric: Metric; active: boolean; index: number }) {
  const count = useCountUp(metric.target, active, 1600, metric.decimals)
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="rounded-2xl border border-border/60 bg-white/50 dark:bg-zinc-900/40 backdrop-blur-sm p-7 text-center"
    >
      <div className="text-4xl md:text-5xl font-semibold text-foreground tracking-tight tabular-nums">
        {metric.display ? metric.display : (
          <>
            {count}
            <span className="text-indigo-500">{metric.suffix}</span>
          </>
        )}
      </div>
      <div className="mt-3 text-sm text-muted-foreground leading-snug max-w-[220px] mx-auto">{metric.label}</div>
    </motion.div>
  )
}

export function OutcomesMetrics() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

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
            <div className="w-2 h-2 rounded-full bg-indigo-500" />
            <span className="text-muted-foreground text-sm">Measurable Institutional Outcomes</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl text-foreground text-balance max-w-2xl mx-auto"
            style={{ letterSpacing: "-0.03em", fontWeight: 600, lineHeight: 1.1 }}
          >
            Outcomes Institutions Can Measure
          </motion.h2>
        </div>

        <div ref={ref} className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {metrics.map((m, i) => (
            <MetricTile key={m.label} metric={m} active={inView} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
