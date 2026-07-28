"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { MessageSquare, Users, Wallet, Server, BedDouble, Building2, CheckCircle2 } from "lucide-react"

const chain = [
  { icon: MessageSquare, label: "Student asks", color: "text-zinc-400", bg: "bg-zinc-500/10", ring: "ring-zinc-500/30" },
  { icon: Users, label: "Student AI", color: "text-violet-400", bg: "bg-violet-500/10", ring: "ring-violet-500/40" },
  { icon: Wallet, label: "Finance AI", color: "text-emerald-400", bg: "bg-emerald-500/10", ring: "ring-emerald-500/40" },
  { icon: Server, label: "ERP", color: "text-blue-400", bg: "bg-blue-500/10", ring: "ring-blue-500/40" },
  { icon: BedDouble, label: "Hostel AI", color: "text-orange-400", bg: "bg-orange-500/10", ring: "ring-orange-500/40" },
  { icon: Building2, label: "Administration AI", color: "text-indigo-400", bg: "bg-indigo-500/10", ring: "ring-indigo-500/40" },
  { icon: CheckCircle2, label: "Response generated", color: "text-blue-400", bg: "bg-blue-500/10", ring: "ring-blue-500/40" },
]

export function AgentCollaboration() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: false, margin: "-120px" })
  const [step, setStep] = useState(-1)

  useEffect(() => {
    if (!inView) return
    setStep(-1)
    const timers = chain.map((_, i) => setTimeout(() => setStep(i), 400 + i * 550))
    const loop = setInterval(() => {
      setStep(-1)
      chain.forEach((_, i) => setTimeout(() => setStep(i), 400 + i * 550))
    }, chain.length * 550 + 2200)
    return () => {
      timers.forEach(clearTimeout)
      clearInterval(loop)
    }
  }, [inView])

  return (
    <section className="relative py-28 bg-[#f4f6fb] dark:bg-[#09090B] transition-colors">
      <div className="max-w-5xl mx-auto px-6" ref={ref}>
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-6"
          >
            <div className="w-2 h-2 rounded-full bg-blue-500" />
            <span className="text-muted-foreground text-sm">Agent Collaboration</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl text-foreground text-balance max-w-2xl mx-auto"
            style={{ letterSpacing: "-0.03em", fontWeight: 600, lineHeight: 1.1 }}
          >
            Agents that work together
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-muted-foreground max-w-xl mx-auto leading-relaxed"
          >
            One question routes across multiple agents and systems—resolved autonomously, end to end.
          </motion.p>
        </div>

        {/* Flow */}
        <div className="flex flex-wrap items-stretch justify-center gap-2 sm:gap-3">
          {chain.map((node, i) => {
            const Icon = node.icon
            const activeNode = step >= i
            const isCurrent = step === i
            return (
              <div key={node.label} className="flex items-center gap-2 sm:gap-3">
                <motion.div
                  animate={{
                    scale: isCurrent ? 1.06 : 1,
                    opacity: activeNode ? 1 : 0.45,
                  }}
                  transition={{ duration: 0.35 }}
                  className={`flex flex-col items-center gap-2 rounded-2xl border px-4 py-4 w-[110px] sm:w-[128px] ${
                    activeNode ? "border-border bg-white/70 dark:bg-zinc-900/60" : "border-border/50 bg-white/30 dark:bg-zinc-900/20"
                  } ${isCurrent ? `ring-2 ${node.ring}` : ""}`}
                >
                  <div className={`relative w-11 h-11 rounded-xl ${node.bg} flex items-center justify-center`}>
                    <Icon className={`w-5 h-5 ${node.color}`} />
                    {isCurrent && (
                      <motion.span
                        className={`absolute inset-0 rounded-xl ring-2 ${node.ring}`}
                        initial={{ opacity: 0.8, scale: 1 }}
                        animate={{ opacity: 0, scale: 1.6 }}
                        transition={{ duration: 1, repeat: Infinity }}
                      />
                    )}
                  </div>
                  <span className="text-[11px] font-medium text-center text-foreground leading-tight">
                    {node.label}
                  </span>
                </motion.div>

                {i < chain.length - 1 && (
                  <div className="relative w-4 sm:w-6 h-px bg-border">
                    <motion.div
                      className="absolute inset-0 bg-blue-500"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: step > i ? 1 : 0 }}
                      transition={{ duration: 0.4 }}
                      style={{ originX: 0 }}
                    />
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
