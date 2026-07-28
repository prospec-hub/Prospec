"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function SolutionsCTA() {
  return (
    <section className="relative py-28 bg-[#f4f6fb] dark:bg-[#09090B] transition-colors">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl border border-indigo-500/30 bg-gradient-to-b from-indigo-500/[0.08] to-transparent dark:from-indigo-600/15 px-8 py-16 text-center"
        >
          {/* drifting glow */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(600px circle at 30% 20%, rgba(99,102,241,0.18), transparent 60%)",
            }}
            animate={{
              background: [
                "radial-gradient(600px circle at 20% 20%, rgba(99,102,241,0.18), transparent 60%)",
                "radial-gradient(600px circle at 80% 30%, rgba(139,92,246,0.18), transparent 60%)",
                "radial-gradient(600px circle at 30% 70%, rgba(59,130,246,0.18), transparent 60%)",
                "radial-gradient(600px circle at 20% 20%, rgba(99,102,241,0.18), transparent 60%)",
              ],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="relative">
            <h2
              className="text-3xl sm:text-4xl md:text-5xl text-foreground text-balance max-w-2xl mx-auto"
              style={{ letterSpacing: "-0.03em", fontWeight: 600, lineHeight: 1.1 }}
            >
              Ready to Build the Intelligent University of Tomorrow?
            </h2>
            <p className="mt-5 text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Transform every department with one enterprise platform that combines artificial intelligence,
              workflow automation, institutional knowledge, predictive analytics, and secure digital infrastructure.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors text-sm">
                Book an Enterprise Consultation <ArrowRight className="w-4 h-4" />
              </button>
              <button className="px-6 py-3 rounded-lg border border-border bg-white/50 dark:bg-zinc-900/40 text-foreground font-medium hover:border-border/80 transition-colors text-sm">
                Request a Personalized Demonstration
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
