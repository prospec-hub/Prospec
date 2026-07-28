"use client"

import { motion } from "framer-motion"
import { Brain, Workflow, BarChart3, Database, FileText, Mic, Plug, ShieldCheck } from "lucide-react"

const capabilities = [
  { icon: Brain, accent: "text-blue-400", bg: "bg-blue-500/10", title: "Artificial Intelligence", description: "University-trained AI models." },
  { icon: Workflow, accent: "text-indigo-400", bg: "bg-indigo-500/10", title: "Workflow Automation", description: "Automate repetitive institutional tasks." },
  { icon: BarChart3, accent: "text-violet-400", bg: "bg-violet-500/10", title: "Analytics", description: "Predictive institutional intelligence." },
  { icon: Database, accent: "text-purple-400", bg: "bg-purple-500/10", title: "Knowledge Platform", description: "Institution-wide searchable knowledge." },
  { icon: FileText, accent: "text-emerald-400", bg: "bg-emerald-500/10", title: "Document Intelligence", description: "Extract and understand documents." },
  { icon: Mic, accent: "text-teal-400", bg: "bg-teal-500/10", title: "Voice AI", description: "Natural conversations." },
  { icon: Plug, accent: "text-blue-400", bg: "bg-blue-500/10", title: "Integrations", description: "Connect ERP, LMS, HRMS, Finance." },
  { icon: ShieldCheck, accent: "text-orange-400", bg: "bg-orange-500/10", title: "Security", description: "Enterprise-grade protection." },
]

export function EnterpriseCapabilities() {
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
            <span className="text-muted-foreground text-sm">Enterprise Academic Platform</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl text-foreground text-balance max-w-2xl mx-auto"
            style={{ letterSpacing: "-0.03em", fontWeight: 600, lineHeight: 1.1 }}
          >
            Enterprise Capabilities
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {capabilities.map((c, i) => {
            const Icon = c.icon
            return (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i % 4) * 0.08 }}
                whileHover={{ y: -3 }}
                className="rounded-2xl border border-border/60 hover:border-border bg-white/50 dark:bg-zinc-900/40 backdrop-blur-sm p-6 transition-colors"
              >
                <div className={`w-12 h-12 rounded-xl ${c.bg} flex items-center justify-center mb-5`}>
                  <Icon className={`w-6 h-6 ${c.accent}`} />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-1.5">{c.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{c.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
