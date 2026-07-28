"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { agentCategories } from "@/lib/agents-data"

export function AgentCategories() {
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
              <span className="text-muted-foreground text-sm">Agent Categories</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl text-foreground text-balance max-w-lg"
              style={{ letterSpacing: "-0.03em", fontWeight: 600, lineHeight: 1.1 }}
            >
              A team for every department
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground max-w-sm leading-relaxed"
          >
            Six departments of AI agents, ready to deploy across your entire campus.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {agentCategories.map((cat, i) => {
            const Icon = cat.icon
            return (
              <motion.a
                href="#featured-agents"
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                whileHover={{ y: -4 }}
                className="group relative overflow-hidden rounded-2xl border border-border/60 hover:border-border bg-white/50 dark:bg-zinc-900/40 backdrop-blur-sm p-6 transition-colors"
              >
                {/* category tint on hover */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${cat.bg}`} />
                <div className="relative">
                  <div className="flex items-start justify-between mb-8">
                    <div className={`w-12 h-12 rounded-xl ${cat.bg} flex items-center justify-center`}>
                      <Icon className={`w-6 h-6 ${cat.accent}`} />
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground/50 group-hover:text-foreground transition-colors" />
                  </div>
                  <div className={`text-3xl font-semibold ${cat.accent} tabular-nums`}>{cat.count}</div>
                  <div className="text-sm text-muted-foreground -mt-0.5 mb-3">AI Agents</div>
                  <h3 className="text-base font-semibold text-foreground mb-1.5">{cat.name}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{cat.blurb}</p>
                </div>
              </motion.a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
