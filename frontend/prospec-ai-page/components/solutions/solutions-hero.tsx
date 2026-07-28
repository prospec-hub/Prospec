"use client"

import { motion } from "framer-motion"
import {
  GraduationCap, Users, BookOpen, ClipboardList, Wallet, UserCog, Building2,
  FlaskConical, Library, Briefcase, HeartHandshake, Crown,
} from "lucide-react"

const orbitNodes = [
  { icon: GraduationCap, label: "Admissions", color: "text-blue-400", ring: "border-blue-500/40", glow: "rgba(59,130,246,0.5)" },
  { icon: Users, label: "Student Services", color: "text-violet-400", ring: "border-violet-500/40", glow: "rgba(139,92,246,0.5)" },
  { icon: BookOpen, label: "Academics", color: "text-indigo-400", ring: "border-indigo-500/40", glow: "rgba(99,102,241,0.5)" },
  { icon: ClipboardList, label: "Examinations", color: "text-purple-400", ring: "border-purple-500/40", glow: "rgba(168,85,247,0.5)" },
  { icon: Wallet, label: "Finance", color: "text-emerald-400", ring: "border-emerald-500/40", glow: "rgba(16,185,129,0.5)" },
  { icon: UserCog, label: "Human Resources", color: "text-teal-400", ring: "border-teal-500/40", glow: "rgba(45,212,191,0.5)" },
  { icon: Building2, label: "Administration", color: "text-orange-400", ring: "border-orange-500/40", glow: "rgba(249,115,22,0.5)" },
  { icon: FlaskConical, label: "Research", color: "text-blue-400", ring: "border-blue-500/40", glow: "rgba(59,130,246,0.5)" },
  { icon: Library, label: "Library", color: "text-violet-400", ring: "border-violet-500/40", glow: "rgba(139,92,246,0.5)" },
  { icon: Briefcase, label: "Placement", color: "text-indigo-400", ring: "border-indigo-500/40", glow: "rgba(99,102,241,0.5)" },
  { icon: HeartHandshake, label: "Alumni", color: "text-purple-400", ring: "border-purple-500/40", glow: "rgba(168,85,247,0.5)" },
  { icon: Crown, label: "Executive Office", color: "text-orange-400", ring: "border-orange-500/40", glow: "rgba(249,115,22,0.5)" },
]

export function SolutionsHero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#f4f6fb] dark:bg-[#09090B] transition-colors">
      <div
        className="absolute pointer-events-none"
        style={{
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -30%)",
          width: "1300px",
          height: "1000px",
          background: "radial-gradient(ellipse at center, rgba(99,102,241,0.10) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 pt-32 pb-24 flex flex-col items-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-500 text-xs font-medium mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
          Enterprise Solutions
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-[56px] font-semibold text-foreground leading-[1.08] text-balance max-w-4xl"
          style={{ letterSpacing: "-0.03em" }}
        >
          Intelligent Solutions for
          <br />
          <span className="bg-gradient-to-r from-indigo-500 via-violet-400 to-blue-500 bg-clip-text text-transparent">
            Every University Department
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed"
        >
          Prospec transforms institutional operations with AI-powered solutions designed specifically for higher
          education. From admissions and academics to finance, administration, student services, and executive
          decision-making, every department operates through one connected intelligent ecosystem.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 flex items-center gap-4"
        >
          <a
            href="#"
            className="px-6 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors text-sm"
          >
            Schedule Enterprise Demo
          </a>
          <a
            href="#departments"
            className="text-muted-foreground font-medium hover:text-foreground transition-colors flex items-center gap-2 text-sm"
          >
            Explore Solutions <span aria-hidden="true">→</span>
          </a>
        </motion.div>

        <EcosystemNetwork />
      </div>
    </section>
  )
}

function EcosystemNetwork() {
  const radius = 250
  const cx = 320
  const cy = 320

  const nodes = orbitNodes.map((node, i) => {
    const angle = (i / orbitNodes.length) * Math.PI * 2 - Math.PI / 2
    return {
      ...node,
      x: Math.round((cx + radius * Math.cos(angle)) * 100) / 100,
      y: Math.round((cy + radius * Math.sin(angle)) * 100) / 100,
    }
  })

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="relative mt-16 w-full max-w-[660px] aspect-square"
    >
      <svg viewBox="0 0 640 640" className="absolute inset-0 w-full h-full">
        <defs>
          <radialGradient id="ecosystem-hub-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(99,102,241,0.35)" />
            <stop offset="100%" stopColor="rgba(99,102,241,0)" />
          </radialGradient>
        </defs>

        {nodes.map((n, i) => (
          <g key={`line-${i}`}>
            <line
              x1={cx}
              y1={cy}
              x2={n.x}
              y2={n.y}
              stroke="currentColor"
              className="text-zinc-300 dark:text-zinc-700"
              strokeWidth="1"
            />
            <circle r="3" fill="#6366f1">
              <animateMotion
                dur={`${2.4 + i * 0.2}s`}
                repeatCount="indefinite"
                path={`M${cx},${cy} L${n.x},${n.y}`}
              />
              <animate attributeName="opacity" values="0;1;0" dur={`${2.4 + i * 0.2}s`} repeatCount="indefinite" />
            </circle>
          </g>
        ))}

        <circle cx={cx} cy={cy} r="130" fill="url(#ecosystem-hub-glow)" />
      </svg>

      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center rounded-2xl border border-indigo-500/40 bg-white/70 dark:bg-zinc-900/80 backdrop-blur-md shadow-[0_0_40px_rgba(99,102,241,0.25)]"
        style={{ width: 132, height: 132 }}
      >
        <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center mb-1.5">
          <span className="text-white font-bold text-sm">P</span>
        </div>
        <span className="text-[12px] font-semibold text-foreground leading-tight">PROSPEC</span>
        <span className="text-[8px] text-muted-foreground text-center leading-tight mt-0.5 px-2">
          University Intelligence Platform
        </span>
      </div>

      {nodes.map((n, i) => {
        const Icon = n.icon
        return (
          <motion.div
            key={n.label}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 + i * 0.06 }}
            className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1.5"
            style={{ left: `${(n.x / 640) * 100}%`, top: `${(n.y / 640) * 100}%` }}
          >
            <div
              className={`w-11 h-11 rounded-xl border ${n.ring} bg-white/80 dark:bg-zinc-900/90 backdrop-blur-sm flex items-center justify-center`}
              style={{ boxShadow: `0 0 18px ${n.glow}` }}
            >
              <Icon className={`w-4 h-4 ${n.color}`} />
            </div>
            <span className="text-[9px] font-medium text-muted-foreground whitespace-nowrap">{n.label}</span>
          </motion.div>
        )
      })}
    </motion.div>
  )
}
