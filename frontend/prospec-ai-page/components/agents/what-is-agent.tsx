"use client"

import { motion } from "framer-motion"
import { Users, Bot, Server, TrendingUp, ArrowRight } from "lucide-react"

const stages = [
  { icon: Users, label: "Human Departments", sub: "Requests & intent", color: "text-zinc-400", bg: "bg-zinc-500/10" },
  { icon: Bot, label: "AI Agents", sub: "Understand & decide", color: "text-blue-400", bg: "bg-blue-500/10" },
  { icon: Server, label: "University Systems", sub: "ERP · LMS · HRMS", color: "text-violet-400", bg: "bg-violet-500/10" },
  { icon: TrendingUp, label: "Results", sub: "Actions & outcomes", color: "text-emerald-400", bg: "bg-emerald-500/10" },
]

const traits = [
  "Understands institutional knowledge",
  "Follows department workflows",
  "Collaborates with other agents",
  "Completes tasks autonomously",
  "Keeps humans in control",
]

export function WhatIsAgent() {
  return (
    <section className="relative py-28 bg-[#f4f6fb] dark:bg-[#09090B] transition-colors">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 mb-6"
        >
          <div className="w-2 h-2 rounded-full bg-blue-500" />
          <span className="text-muted-foreground text-sm">What is an AI Agent?</span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl text-foreground text-balance"
              style={{ letterSpacing: "-0.03em", fontWeight: 600, lineHeight: 1.1 }}
            >
              More Than a Chatbot
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-5 text-muted-foreground leading-relaxed max-w-md"
            >
              Each Prospec AI Agent is a <span className="text-foreground font-medium">specialized digital employee</span>{" "}
              trained for a specific university department—working autonomously while administrators keep full oversight.
            </motion.p>

            <ul className="mt-8 space-y-3">
              {traits.map((t, i) => (
                <motion.li
                  key={t}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.25 + i * 0.08 }}
                  className="flex items-center gap-3 text-sm text-foreground"
                >
                  <span className="w-5 h-5 rounded-full bg-blue-500/15 flex items-center justify-center shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  </span>
                  {t}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Flow illustration */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="rounded-2xl border border-border/60 bg-white/50 dark:bg-zinc-900/40 backdrop-blur-sm p-6"
          >
            <div className="flex flex-col gap-3">
              {stages.map((s, i) => {
                const Icon = s.icon
                return (
                  <div key={s.label}>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.45, delay: 0.3 + i * 0.15 }}
                      className="flex items-center gap-4 rounded-xl border border-border/50 bg-white/60 dark:bg-zinc-900/60 px-4 py-3.5"
                    >
                      <div className={`w-11 h-11 rounded-xl ${s.bg} flex items-center justify-center shrink-0`}>
                        <Icon className={`w-5 h-5 ${s.color}`} />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-foreground">{s.label}</div>
                        <div className="text-xs text-muted-foreground">{s.sub}</div>
                      </div>
                    </motion.div>
                    {i < stages.length - 1 && (
                      <div className="flex justify-center py-1">
                        <motion.div
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 0.4 + i * 0.15 }}
                        >
                          <ArrowRight className="w-4 h-4 text-blue-500 rotate-90" />
                        </motion.div>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
