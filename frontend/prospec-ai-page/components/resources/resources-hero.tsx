"use client"

import { motion } from "framer-motion"
import { Sparkles, BookOpen, FileText, ScrollText, BookMarked, Code2, Check, Download } from "lucide-react"

// Card-based knowledge network — positions in a 460×460 coordinate space (no trig → SSR-stable).
const cards = [
  { id: 1, label: "AI Guide", icon: Sparkles, accent: "text-blue-400", bg: "bg-blue-500/10", x: 95, y: 110, dur: 4.2, delay: 0 },
  { id: 2, label: "Implementation Handbook", icon: BookOpen, accent: "text-indigo-400", bg: "bg-indigo-500/10", x: 300, y: 58, dur: 5.1, delay: 0.6 },
  { id: 3, label: "Case Study", icon: FileText, accent: "text-violet-400", bg: "bg-violet-500/10", x: 388, y: 200, dur: 4.6, delay: 1.1 },
  { id: 4, label: "Whitepaper", icon: ScrollText, accent: "text-emerald-400", bg: "bg-emerald-500/10", x: 235, y: 250, dur: 5.4, delay: 0.3 },
  { id: 5, label: "Product Documentation", icon: BookMarked, accent: "text-purple-400", bg: "bg-purple-500/10", x: 96, y: 315, dur: 4.9, delay: 0.9 },
  { id: 6, label: "API Docs", icon: Code2, accent: "text-orange-400", bg: "bg-orange-500/10", x: 300, y: 400, dur: 4.4, delay: 1.4 },
]

const links: [number, number][] = [
  [1, 2], [2, 3], [3, 4], [4, 5], [5, 1], [2, 4], [4, 6], [5, 6],
]

const SPACE = 460
const pos = (id: number) => cards.find((c) => c.id === id)!

export function ResourcesHero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#f4f6fb] dark:bg-[#09090B] transition-colors">
      <div
        className="absolute pointer-events-none"
        style={{
          top: "42%",
          left: "62%",
          transform: "translate(-50%, -30%)",
          width: "1000px",
          height: "820px",
          background: "radial-gradient(ellipse at center, rgba(59,130,246,0.10) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 pt-32 pb-24 px-6 max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left copy */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-500 text-xs font-medium mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            Knowledge Hub
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-[52px] font-semibold text-foreground leading-[1.08] text-balance"
            style={{ letterSpacing: "-0.03em" }}
          >
            Insights, Guides &amp; Resources for{" "}
            <span className="bg-gradient-to-r from-blue-500 via-indigo-400 to-violet-500 bg-clip-text text-transparent">
              Modern Universities
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed"
          >
            Explore expert resources on digital transformation, artificial intelligence, institutional operations,
            compliance, student success, and technology adoption—created for higher education leaders.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#featured-resources"
              className="px-6 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors text-sm"
            >
              Browse Resources
            </a>
            <a
              href="#downloads"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border bg-white/50 dark:bg-zinc-900/40 text-foreground font-medium hover:border-border/80 transition-colors text-sm"
            >
              <Download className="w-4 h-4" /> Download Guides
            </a>
          </motion.div>
        </div>

        {/* Right: floating card knowledge network */}
        <KnowledgeNetwork />
      </div>
    </section>
  )
}

function KnowledgeNetwork() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full max-w-[520px] mx-auto aspect-square"
    >
      {/* connecting lines */}
      <svg viewBox={`0 0 ${SPACE} ${SPACE}`} className="absolute inset-0 w-full h-full">
        {links.map(([a, b], i) => {
          const pa = pos(a)
          const pb = pos(b)
          return (
            <g key={`${a}-${b}`}>
              <line
                x1={pa.x} y1={pa.y} x2={pb.x} y2={pb.y}
                stroke="currentColor"
                className="text-zinc-300/70 dark:text-zinc-700/70"
                strokeWidth="1"
              />
              <circle r="2.5" fill="#3b82f6">
                <animateMotion dur={`${2.6 + i * 0.2}s`} repeatCount="indefinite" path={`M${pa.x},${pa.y} L${pb.x},${pb.y}`} />
                <animate attributeName="opacity" values="0;1;0" dur={`${2.6 + i * 0.2}s`} repeatCount="indefinite" />
              </circle>
            </g>
          )
        })}
      </svg>

      {/* floating cards */}
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
