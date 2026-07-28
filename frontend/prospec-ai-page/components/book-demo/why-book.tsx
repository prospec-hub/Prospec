"use client"

import { motion } from "framer-motion"
import { whyCards } from "@/lib/book-demo-data"

export function WhyBook() {
  return (
    <section className="relative py-24 bg-[#f4f6fb] dark:bg-[#09090B] transition-colors">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-5"
          >
            <div className="w-2 h-2 rounded-full bg-blue-500" />
            <span className="text-muted-foreground text-sm">Why Book With Prospec</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl text-foreground text-balance"
            style={{ letterSpacing: "-0.03em", fontWeight: 600, lineHeight: 1.1 }}
          >
            Every Demo Is Tailored
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {whyCards.map((card, i) => {
            const Icon = card.icon
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i % 2) * 0.1 }}
                className="flex items-start gap-4 rounded-2xl border border-border/60 bg-white/50 dark:bg-zinc-900/40 backdrop-blur-sm p-6"
              >
                <div className={`w-11 h-11 rounded-xl ${card.bg} flex items-center justify-center shrink-0`}>
                  <Icon className={`w-5 h-5 ${card.accent}`} />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-foreground mb-1.5">{card.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{card.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
