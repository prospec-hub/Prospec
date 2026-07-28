"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ShieldCheck, Lock, KeyRound, ScrollText, BadgeCheck, Server, Cloud, Code2, ArrowRight } from "lucide-react"

const cards = [
  { icon: ShieldCheck, label: "Role Based Access" },
  { icon: Lock, label: "Private AI" },
  { icon: KeyRound, label: "Encryption" },
  { icon: ScrollText, label: "Audit Logs" },
  { icon: BadgeCheck, label: "Compliance" },
  { icon: Server, label: "On-premise" },
  { icon: Cloud, label: "Cloud" },
  { icon: Code2, label: "API Security" },
]

export function FeaturesSecurity() {
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
            <div className="w-2 h-2 rounded-full bg-blue-500" />
            <span className="text-muted-foreground text-sm">Security</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl text-foreground text-balance max-w-2xl mx-auto"
            style={{ letterSpacing: "-0.03em", fontWeight: 600, lineHeight: 1.1 }}
          >
            Enterprise Security by Design
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {cards.map((card, i) => {
            const Icon = card.icon
            return (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i % 4) * 0.08 }}
                whileHover={{ y: -3 }}
                className="flex flex-col items-center text-center gap-3 rounded-2xl border border-border/60 hover:border-blue-500/40 bg-white/50 dark:bg-zinc-900/40 backdrop-blur-sm p-5 transition-colors"
              >
                <div className="w-11 h-11 rounded-xl bg-blue-500/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-blue-400" />
                </div>
                <span className="text-sm font-medium text-foreground">{card.label}</span>
              </motion.div>
            )
          })}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/security"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors font-medium"
          >
            Explore the full Security page <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
