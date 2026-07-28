"use client"

import { motion } from "framer-motion"
import { Lock, ScrollText, ShieldCheck, UserCheck, KeyRound, Building2, ArrowRight } from "lucide-react"

const security = [
  { icon: ShieldCheck, label: "Role-based permissions" },
  { icon: Lock, label: "Encrypted end to end" },
  { icon: ScrollText, label: "Full audit trail" },
  { icon: UserCheck, label: "Human approval gates" },
  { icon: KeyRound, label: "Private knowledge" },
  { icon: Building2, label: "University ownership" },
]

export function AgentsCTA() {
  return (
    <section className="relative py-28 bg-[#f4f6fb] dark:bg-[#09090B] transition-colors">
      <div className="max-w-5xl mx-auto px-6">
        {/* Security band */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="text-center text-[11px] uppercase tracking-wider text-muted-foreground mb-6">
            Enterprise-grade governance on every agent
          </div>
          <div className="flex flex-wrap justify-center gap-2.5">
            {security.map((s) => {
              const Icon = s.icon
              return (
                <div
                  key={s.label}
                  className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-white/50 dark:bg-zinc-900/40 px-3.5 py-2"
                >
                  <Icon className="w-3.5 h-3.5 text-blue-400" />
                  <span className="text-xs text-foreground">{s.label}</span>
                </div>
              )
            })}
          </div>
        </motion.div>

        {/* CTA card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl border border-blue-500/30 bg-gradient-to-b from-blue-500/[0.08] to-transparent dark:from-blue-600/15 px-8 py-16 text-center"
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse at 50% 0%, rgba(59,130,246,0.18), transparent 60%)",
            }}
          />
          <div className="relative">
            <h2
              className="text-3xl sm:text-4xl md:text-5xl text-foreground text-balance max-w-2xl mx-auto"
              style={{ letterSpacing: "-0.03em", fontWeight: 600, lineHeight: 1.1 }}
            >
              Ready to build your university&apos;s AI workforce?
            </h2>
            <p className="mt-5 text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Deploy intelligent AI agents that support every department, automate routine operations, and deliver
              24×7 assistance across your campus.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors text-sm">
                Schedule Live Demo <ArrowRight className="w-4 h-4" />
              </button>
              <button className="px-6 py-3 rounded-lg border border-border bg-white/50 dark:bg-zinc-900/40 text-foreground font-medium hover:border-border/80 transition-colors text-sm">
                Talk to AI Experts
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
