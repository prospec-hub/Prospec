"use client"

import { motion } from "framer-motion"
import { Check, Sparkles, Brain, Presentation, Server, MessageSquare, Compass } from "lucide-react"
import { trustBadges } from "@/lib/book-demo-data"

// Floating card network — positions in a 460×460 space (no trig → SSR-stable).
const cards = [
  { id: 1, label: "Personalized Demo", icon: Presentation, accent: "text-blue-400", bg: "bg-blue-500/10", x: 100, y: 95, dur: 4.4, delay: 0 },
  { id: 2, label: "AI Consultation", icon: Brain, accent: "text-indigo-400", bg: "bg-indigo-500/10", x: 320, y: 70, dur: 5.2, delay: 0.5 },
  { id: 3, label: "Product Walkthrough", icon: Sparkles, accent: "text-violet-400", bg: "bg-violet-500/10", x: 380, y: 220, dur: 4.7, delay: 1.0 },
  { id: 4, label: "Architecture Review", icon: Server, accent: "text-emerald-400", bg: "bg-emerald-500/10", x: 92, y: 250, dur: 5.0, delay: 0.3 },
  { id: 5, label: "Q&A Session", icon: MessageSquare, accent: "text-purple-400", bg: "bg-purple-500/10", x: 300, y: 400, dur: 4.5, delay: 0.8 },
  { id: 6, label: "Implementation Roadmap", icon: Compass, accent: "text-orange-400", bg: "bg-orange-500/10", x: 110, y: 400, dur: 4.9, delay: 1.3 },
]

// center "Live Demo" hub at 230,230
const HUB = { x: 230, y: 235 }
const SPACE = 460

export function BookDemoHero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#f4f6fb] dark:bg-[#09090B] transition-colors">
      <div
        className="absolute pointer-events-none"
        style={{
          top: "42%", left: "64%", transform: "translate(-50%, -30%)",
          width: "1000px", height: "820px",
          background: "radial-gradient(ellipse at center, rgba(59,130,246,0.10) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 pt-32 pb-16 px-6 max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-500 text-xs font-medium mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            Enterprise Consultation
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-[52px] font-semibold text-foreground leading-[1.08] text-balance"
            style={{ letterSpacing: "-0.03em" }}
          >
            Experience the Future of{" "}
            <span className="bg-gradient-to-r from-blue-500 via-indigo-400 to-violet-500 bg-clip-text text-transparent">
              University Operations
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed"
          >
            Discover how Prospec transforms admissions, academics, administration, finance, examinations, and student
            services into one intelligent ecosystem. Schedule a personalized demonstration tailored to your
            institution's goals.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a href="#demo-form" className="px-6 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors text-sm">
              Schedule My Demo
            </a>
            <a href="#experience" className="text-muted-foreground font-medium hover:text-foreground transition-colors flex items-center gap-2 text-sm">
              What you&apos;ll experience <span aria-hidden="true">→</span>
            </a>
          </motion.div>

          {/* Trust strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-wrap gap-2.5"
          >
            {trustBadges.map((b) => {
              const Icon = b.icon
              return (
                <div key={b.label} className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-white/50 dark:bg-zinc-900/40 px-3 py-1.5">
                  <Icon className="w-3.5 h-3.5 text-blue-400" />
                  <span className="text-xs text-foreground">{b.label}</span>
                </div>
              )
            })}
          </motion.div>
        </div>

        <DemoNetwork />
      </div>
    </section>
  )
}

function DemoNetwork() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full max-w-[520px] mx-auto aspect-square"
    >
      <svg viewBox={`0 0 ${SPACE} ${SPACE}`} className="absolute inset-0 w-full h-full">
        {cards.map((c, i) => (
          <g key={c.id}>
            <line
              x1={HUB.x} y1={HUB.y} x2={c.x} y2={c.y}
              stroke="currentColor" className="text-zinc-300/70 dark:text-zinc-700/70" strokeWidth="1"
            />
            <circle r="2.5" fill="#3b82f6">
              <animateMotion dur={`${2.6 + i * 0.22}s`} repeatCount="indefinite" path={`M${HUB.x},${HUB.y} L${c.x},${c.y}`} />
              <animate attributeName="opacity" values="0;1;0" dur={`${2.6 + i * 0.22}s`} repeatCount="indefinite" />
            </circle>
          </g>
        ))}
      </svg>

      {/* center Live Demo pill */}
      <div
        className="absolute z-10"
        style={{ left: `${(HUB.x / SPACE) * 100}%`, top: `${(HUB.y / SPACE) * 100}%`, transform: "translate(-50%,-50%)" }}
      >
        <div className="flex items-center gap-2 rounded-full border border-blue-500/50 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md px-4 py-2 shadow-[0_0_30px_rgba(59,130,246,0.3)]">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75 animate-ping" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500" />
          </span>
          <span className="text-sm font-semibold text-foreground">Live Demo</span>
        </div>
      </div>

      {cards.map((card) => {
        const Icon = card.icon
        return (
          <div
            key={card.id}
            className="absolute"
            style={{ left: `${(card.x / SPACE) * 100}%`, top: `${(card.y / SPACE) * 100}%`, transform: "translate(-50%,-50%)" }}
          >
            <motion.div
              animate={{ y: [0, -9, 0] }}
              transition={{ duration: card.dur, delay: card.delay, repeat: Infinity, ease: "easeInOut" }}
              className="flex items-center gap-2 rounded-xl border border-border/70 bg-white/85 dark:bg-zinc-900/85 backdrop-blur-md px-3 py-2 shadow-lg shadow-black/5 dark:shadow-black/40 whitespace-nowrap"
            >
              <span className={`w-6 h-6 rounded-md ${card.bg} flex items-center justify-center shrink-0`}>
                <Icon className={`w-3.5 h-3.5 ${card.accent}`} />
              </span>
              <span className="text-[11px] font-medium text-foreground">{card.label}</span>
              <Check className="w-3 h-3 text-emerald-400 shrink-0" />
            </motion.div>
          </div>
        )
      })}
    </motion.div>
  )
}
