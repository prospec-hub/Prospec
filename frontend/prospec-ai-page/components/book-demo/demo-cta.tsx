"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function DemoCTA() {
  return (
    <section className="relative py-28 bg-[#f4f6fb] dark:bg-[#09090B] transition-colors">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl border border-blue-500/30 bg-gradient-to-b from-blue-500/[0.08] to-transparent dark:from-blue-600/15 px-8 py-16 text-center"
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(59,130,246,0.18), transparent 60%)" }}
          />
          <div className="relative">
            <h2
              className="text-3xl sm:text-4xl md:text-5xl text-foreground text-balance max-w-2xl mx-auto"
              style={{ letterSpacing: "-0.03em", fontWeight: 600, lineHeight: 1.1 }}
            >
              Let&apos;s Build the Intelligent University Together
            </h2>
            <p className="mt-5 text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Whether you&apos;re planning a digital transformation initiative, exploring AI adoption, or modernizing
              campus operations, our experts will help you define the right roadmap for your institution.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#demo-form" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors text-sm">
                Schedule Enterprise Demo <ArrowRight className="w-4 h-4" />
              </a>
              <button className="px-6 py-3 rounded-lg border border-border bg-white/50 dark:bg-zinc-900/40 text-foreground font-medium hover:border-border/80 transition-colors text-sm">
                Talk to a Solutions Expert
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
