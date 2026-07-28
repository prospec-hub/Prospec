"use client"

import { motion } from "framer-motion"
import { agendaSteps } from "@/lib/book-demo-data"

export function DemoAgenda() {
  return (
    <section className="relative py-24 bg-[#f4f6fb] dark:bg-[#09090B] transition-colors">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 mb-5"
          >
            <div className="w-2 h-2 rounded-full bg-blue-500" />
            <span className="text-muted-foreground text-sm">Demo Agenda</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl text-foreground text-balance"
            style={{ letterSpacing: "-0.03em", fontWeight: 600, lineHeight: 1.1 }}
          >
            Your Session Roadmap
          </motion.h2>
        </div>

        <div className="relative">
          {/* vertical rail */}
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border hidden sm:block">
            <motion.div
              className="w-full bg-gradient-to-b from-blue-500 via-indigo-500 to-violet-500"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.6, ease: "easeInOut" }}
              style={{ originY: 0, height: "100%" }}
            />
          </div>

          <div className="space-y-4">
            {agendaSteps.map((step, i) => (
              <motion.div
                key={step.no}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative flex gap-5"
              >
                <div className="relative z-10 shrink-0 w-10 h-10 rounded-full border border-blue-500/40 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm flex items-center justify-center">
                  <span className="text-xs font-bold text-blue-400">{step.no}</span>
                </div>
                <div className="flex-1 rounded-2xl border border-border/60 bg-white/50 dark:bg-zinc-900/40 backdrop-blur-sm p-5">
                  <h3 className="text-base font-semibold text-foreground mb-3">{step.title}</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {step.items.map((item) => (
                      <span key={item} className="text-[11px] px-2 py-0.5 rounded-full bg-muted/60 text-muted-foreground">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
