"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check, Plus } from "lucide-react"
import { marketplaceAgents, type AgentTag } from "@/lib/agents-data"

const tagStyle: Record<AgentTag, string> = {
  Active: "border-emerald-500/30 bg-emerald-500/10 text-emerald-400",
  Beta: "border-amber-500/30 bg-amber-500/10 text-amber-400",
  Popular: "border-blue-500/30 bg-blue-500/10 text-blue-400",
  Enterprise: "border-violet-500/30 bg-violet-500/10 text-violet-400",
}

export function AgentMarketplace() {
  const [installed, setInstalled] = useState<Record<string, boolean>>({})

  return (
    <section className="relative py-28 bg-[#f4f6fb] dark:bg-[#09090B] transition-colors">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2 mb-6"
            >
              <div className="w-2 h-2 rounded-full bg-blue-500" />
              <span className="text-muted-foreground text-sm">Agent Marketplace</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl text-foreground text-balance max-w-lg"
              style={{ letterSpacing: "-0.03em", fontWeight: 600, lineHeight: 1.1 }}
            >
              Deploy any agent in one click
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground max-w-sm leading-relaxed"
          >
            Start with one department or roll out your whole workforce—add agents whenever you&apos;re ready.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {marketplaceAgents.map((agent, i) => {
            const Icon = agent.icon
            const isInstalled = installed[agent.name]
            return (
              <motion.div
                key={agent.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i % 4) * 0.06 }}
                className="group flex flex-col rounded-2xl border border-border/60 bg-white/50 dark:bg-zinc-900/40 backdrop-blur-sm p-4 hover:border-border transition-colors"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-11 h-11 rounded-xl ${agent.bg} flex items-center justify-center`}>
                    <Icon className={`w-5 h-5 ${agent.accent}`} />
                  </div>
                  <span
                    className={`text-[10px] font-medium px-2 py-0.5 rounded-full border ${tagStyle[agent.tag]}`}
                  >
                    {agent.tag}
                  </span>
                </div>
                <h3 className="text-sm font-semibold text-foreground mb-4">{agent.name}</h3>
                <button
                  onClick={() => setInstalled((s) => ({ ...s, [agent.name]: !s[agent.name] }))}
                  className={`mt-auto inline-flex items-center justify-center gap-1.5 text-xs font-medium py-1.5 rounded-lg transition-colors ${
                    isInstalled
                      ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30"
                      : "bg-blue-600 text-white hover:bg-blue-700"
                  }`}
                >
                  {isInstalled ? (
                    <>
                      <Check className="w-3.5 h-3.5" /> Installed
                    </>
                  ) : (
                    <>
                      <Plus className="w-3.5 h-3.5" /> Install
                    </>
                  )}
                </button>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
