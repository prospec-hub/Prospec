"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "@phosphor-icons/react"

export function FinalCTA() {
  // deterministic particle positions (no Math.random for SSR safety)
  const particles = Array.from({ length: 18 }, (_, i) => ({
    left: `${(i * 53) % 100}%`,
    top: `${(i * 37) % 100}%`,
    delay: (i % 6) * 0.5,
    size: 3 + (i % 3) * 2,
  }))

  return (
    <section id="cta" className="px-6 py-24 md:py-32" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[32px] px-8 py-16 md:px-16 md:py-24 text-center"
          style={{ background: "linear-gradient(135deg, #1e81ce 0%, #0e5d9e 55%, #0a4578 100%)" }}
        >
          {/* floating particles */}
          {particles.map((p, i) => (
            <motion.span
              key={i}
              className="absolute rounded-full bg-white/40 pointer-events-none"
              style={{ left: p.left, top: p.top, width: p.size, height: p.size }}
              animate={{ y: [0, -18, 0], opacity: [0.15, 0.6, 0.15] }}
              transition={{ duration: 4 + (i % 4), repeat: Infinity, delay: p.delay, ease: "easeInOut" }}
            />
          ))}
          {/* glow */}
          <div className="absolute pointer-events-none" style={{ top: "-30%", left: "50%", transform: "translateX(-50%)", width: "600px", height: "400px", background: "radial-gradient(ellipse at center, rgba(255,255,255,0.25) 0%, transparent 65%)" }} />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl lg:text-[56px] font-semibold text-white tracking-tight leading-[1.05] text-balance max-w-3xl mx-auto" style={{ letterSpacing: "-0.033em" }}>
              Ready to build an AI-powered university?
            </h2>
            <p className="mt-5 text-lg text-white/80 max-w-xl mx-auto leading-relaxed">
              Experience intelligent automation across every department with Prospec AI.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#" className="w-full sm:w-auto px-7 py-3.5 bg-white text-slate-900 font-semibold rounded-xl text-sm transition-all hover:bg-slate-50 flex items-center justify-center gap-2" style={{ boxShadow: "0 8px 24px rgba(0,0,0,0.15)" }}>
                Schedule AI Strategy Session
                <ArrowRight className="w-4 h-4" weight="bold" />
              </a>
              <a href="#" className="w-full sm:w-auto px-7 py-3.5 text-white font-semibold rounded-xl text-sm transition-all border border-white/40 hover:bg-white/10">
                Request Personalized Demo
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
