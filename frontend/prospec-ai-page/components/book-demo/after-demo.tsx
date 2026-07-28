"use client"

import { motion } from "framer-motion"
import { afterDemoTimeline } from "@/lib/book-demo-data"
import { ArrowRight } from "lucide-react"

export function AfterDemo() {
  return (
    <section className="relative py-24 bg-[#f4f6fb] dark:bg-[#09090B] transition-colors">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-5"
          >
            <div className="w-2 h-2 rounded-full bg-blue-500" />
            <span className="text-muted-foreground text-sm">Enterprise Assurance</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl text-foreground text-balance"
            style={{ letterSpacing: "-0.03em", fontWeight: 600, lineHeight: 1.1 }}
          >
            What Happens After Your Demo?
          </motion.h2>
        </div>

        <div className="flex flex-wrap items-stretch justify-center gap-2.5">
          {afterDemoTimeline.map((stage, i) => (
            <div key={stage} className="flex items-center gap-2.5">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-center gap-2.5 rounded-xl border border-border/60 bg-white/50 dark:bg-zinc-900/40 backdrop-blur-sm px-4 py-3"
              >
                <span className="w-6 h-6 rounded-full bg-blue-500/10 flex items-center justify-center text-[10px] font-bold text-blue-400 shrink-0">
                  {i + 1}
                </span>
                <span className="text-xs font-medium text-foreground whitespace-nowrap">{stage}</span>
              </motion.div>
              {i < afterDemoTimeline.length - 1 && (
                <ArrowRight className="w-4 h-4 text-muted-foreground/40 shrink-0 hidden sm:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
