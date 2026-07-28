"use client"

import { motion } from "framer-motion"
import { Landmark, Layers, Sparkles, Network } from "lucide-react"

const reasons = [
  {
    icon: Landmark,
    accent: "text-blue-400",
    bg: "bg-blue-500/10",
    title: "Built Exclusively for Higher Education",
    description:
      "Unlike generic enterprise software, every capability is designed around university workflows, governance, academic structures, and regulatory requirements.",
  },
  {
    icon: Layers,
    accent: "text-indigo-400",
    bg: "bg-indigo-500/10",
    title: "One Connected Platform",
    description:
      "Replace fragmented systems with one intelligent platform that unifies departments, data, and operations.",
  },
  {
    icon: Sparkles,
    accent: "text-violet-400",
    bg: "bg-violet-500/10",
    title: "Enterprise AI",
    description: "AI trained using institutional knowledge—not public internet content.",
  },
  {
    icon: Network,
    accent: "text-emerald-400",
    bg: "bg-emerald-500/10",
    title: "Scalable Architecture",
    description: "Deploy across one campus or an entire university network with centralized governance.",
  },
]

export function WhyChooseProspec() {
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
            <span className="text-muted-foreground text-sm">Institutional Intelligence Layer</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl text-foreground text-balance max-w-2xl mx-auto"
            style={{ letterSpacing: "-0.03em", fontWeight: 600, lineHeight: 1.1 }}
          >
            Why Universities Choose Prospec
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {reasons.map((r, i) => {
            const Icon = r.icon
            return (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl border border-border/60 bg-white/50 dark:bg-zinc-900/40 backdrop-blur-sm p-8"
              >
                <div className={`w-14 h-14 rounded-2xl ${r.bg} flex items-center justify-center mb-6`}>
                  <Icon className={`w-7 h-7 ${r.accent}`} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{r.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{r.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
