"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check, Zap, Globe, Clock, ArrowRight } from "lucide-react"
import { featuredAgents } from "@/lib/agents-data"

const kpiIcons = [Clock, Zap, Globe]

export function FeaturedAgents() {
  const [active, setActive] = useState(0)
  const agent = featuredAgents[active]
  const Icon = agent.icon

  return (
    <section
      id="featured-agents"
      className="relative py-28 bg-[#f4f6fb] dark:bg-[#09090B] transition-colors scroll-mt-28"
    >
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none"
        style={{ height: "20%", background: "linear-gradient(to bottom, rgba(59,130,246,0.04), transparent)" }}
      />
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 mb-6"
        >
          <div className="w-2 h-2 rounded-full bg-blue-500" />
          <span className="text-muted-foreground text-sm">Meet the Team</span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl text-foreground text-balance max-w-2xl mb-14"
          style={{ letterSpacing: "-0.03em", fontWeight: 600, lineHeight: 1.1 }}
        >
          Featured AI Agents, ready to hire
        </motion.h2>

        <div className="grid lg:grid-cols-[280px_1fr] gap-6">
          {/* Roster */}
          <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible scrollbar-hide -mx-6 px-6 lg:mx-0 lg:px-0">
            {featuredAgents.map((a, i) => {
              const AIcon = a.icon
              const selected = i === active
              return (
                <button
                  key={a.id}
                  onClick={() => setActive(i)}
                  className={`shrink-0 lg:shrink text-left flex items-center gap-3 rounded-xl border px-4 py-3 transition-all ${
                    selected
                      ? "border-blue-500/50 bg-blue-500/5 dark:bg-blue-500/10"
                      : "border-border/60 bg-white/40 dark:bg-zinc-900/30 hover:border-border"
                  }`}
                >
                  <div className={`w-9 h-9 rounded-lg ${a.bg} flex items-center justify-center shrink-0`}>
                    <AIcon className={`w-4 h-4 ${a.accent}`} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-medium text-foreground whitespace-nowrap lg:whitespace-normal">
                      {a.name}
                    </div>
                    <div className="text-[11px] text-muted-foreground whitespace-nowrap lg:whitespace-normal">
                      {a.role}
                    </div>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Profile card — keyed remount replays the entrance on each switch */}
          <div className="relative">
            <motion.div
              key={agent.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="relative overflow-hidden rounded-2xl border border-border/60 bg-white/60 dark:bg-zinc-900/50 backdrop-blur-sm p-7"
            >
              {/* header */}
              <div className="flex items-start justify-between gap-4 mb-6">
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-2xl ${agent.bg} flex items-center justify-center`}>
                    <Icon className={`w-7 h-7 ${agent.accent}`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{agent.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {agent.role} · <span className="text-foreground/70">{agent.worksFor}</span>
                    </p>
                  </div>
                </div>
                <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 whitespace-nowrap">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Deployed
                </span>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {/* responsibilities */}
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-muted-foreground mb-3">
                    Responsibilities
                  </div>
                  <ul className="space-y-2">
                    {agent.responsibilities.map((r) => (
                      <li key={r} className="flex items-center gap-2 text-sm text-foreground">
                        <Check className={`w-4 h-4 ${agent.accent} shrink-0`} />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* systems + automation */}
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-muted-foreground mb-3">
                    Systems Connected
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {agent.systems.map((s) => (
                      <span
                        key={s}
                        className="text-xs px-2.5 py-1 rounded-md border border-border/70 bg-white/50 dark:bg-zinc-800/50 text-muted-foreground"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  <div className="text-[11px] uppercase tracking-wider text-muted-foreground mb-2">
                    Automation Level
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-2 rounded-full bg-border/70 overflow-hidden">
                      <motion.div
                        key={agent.id + "-bar"}
                        initial={{ width: 0 }}
                        animate={{ width: `${agent.automation}%` }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="h-full rounded-full bg-gradient-to-r from-blue-500 to-violet-500"
                      />
                    </div>
                    <span className="text-sm font-semibold text-foreground tabular-nums">{agent.automation}%</span>
                  </div>
                </div>
              </div>

              {/* KPIs */}
              <div className="grid grid-cols-3 gap-3 mt-7 pt-6 border-t border-border/60">
                {agent.kpis.map((k, i) => {
                  const KIcon = kpiIcons[i % kpiIcons.length]
                  return (
                    <div key={k.label} className="text-center">
                      <KIcon className="w-4 h-4 text-muted-foreground/60 mx-auto mb-1.5" />
                      <div className="text-lg font-semibold text-foreground leading-none">{k.value}</div>
                      <div className="text-[11px] text-muted-foreground mt-1">{k.label}</div>
                    </div>
                  )
                })}
              </div>

              <button className="mt-7 w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
                View Agent <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
