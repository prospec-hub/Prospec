"use client"

import { motion } from "framer-motion"
import { Clock } from "lucide-react"
import { experienceCards } from "@/lib/book-demo-data"

export function DemoExperience() {
  return (
    <section id="experience" className="relative py-24 bg-[#f4f6fb] dark:bg-[#09090B] transition-colors scroll-mt-28">
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
            <span className="text-muted-foreground text-sm">What You&apos;ll Experience</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl text-foreground text-balance"
            style={{ letterSpacing: "-0.03em", fontWeight: 600, lineHeight: 1.1 }}
          >
            More Than a Product Demo
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {experienceCards.map((card, i) => {
            const Icon = card.icon
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="flex flex-col rounded-2xl border border-border/60 hover:border-border bg-white/50 dark:bg-zinc-900/40 backdrop-blur-sm p-6 transition-colors"
              >
                <div className={`w-12 h-12 rounded-xl ${card.bg} flex items-center justify-center mb-5`}>
                  <Icon className={`w-6 h-6 ${card.accent}`} />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">{card.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed mb-5">{card.description}</p>
                <div className="mt-auto pt-4 border-t border-border/40 flex items-center gap-2 text-xs">
                  <Clock className="w-3.5 h-3.5 text-blue-400" />
                  <span className="text-muted-foreground">Duration</span>
                  <span className="ml-auto font-semibold text-foreground">{card.duration}</span>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
