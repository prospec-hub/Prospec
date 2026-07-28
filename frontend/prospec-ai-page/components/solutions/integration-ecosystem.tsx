"use client"

import { motion } from "framer-motion"
import {
  Server, BookOpen, Wallet, UserCog, Library, Fingerprint, Mail, MessageSquare,
  MessageCircle, AppWindow, Chrome, Code2, CreditCard, FileArchive,
} from "lucide-react"

const nodes = [
  { icon: Server, label: "ERP", color: "text-blue-400", ring: "border-blue-500/40" },
  { icon: BookOpen, label: "LMS", color: "text-indigo-400", ring: "border-indigo-500/40" },
  { icon: Wallet, label: "Finance", color: "text-emerald-400", ring: "border-emerald-500/40" },
  { icon: UserCog, label: "HRMS", color: "text-purple-400", ring: "border-purple-500/40" },
  { icon: Library, label: "Library", color: "text-violet-400", ring: "border-violet-500/40" },
  { icon: Fingerprint, label: "Biometric", color: "text-orange-400", ring: "border-orange-500/40" },
  { icon: Mail, label: "Email", color: "text-blue-400", ring: "border-blue-500/40" },
  { icon: MessageSquare, label: "SMS", color: "text-indigo-400", ring: "border-indigo-500/40" },
  { icon: MessageCircle, label: "WhatsApp", color: "text-emerald-400", ring: "border-emerald-500/40" },
  { icon: AppWindow, label: "Microsoft 365", color: "text-purple-400", ring: "border-purple-500/40" },
  { icon: Chrome, label: "Google Workspace", color: "text-orange-400", ring: "border-orange-500/40" },
  { icon: Code2, label: "REST APIs", color: "text-blue-400", ring: "border-blue-500/40" },
  { icon: CreditCard, label: "Payment Gateway", color: "text-violet-400", ring: "border-violet-500/40" },
  { icon: FileArchive, label: "Document Storage", color: "text-indigo-400", ring: "border-indigo-500/40" },
]

export function IntegrationEcosystem() {
  const radius = 260
  const cx = 320
  const cy = 320

  const placed = nodes.map((n, i) => {
    const angle = (i / nodes.length) * Math.PI * 2 - Math.PI / 2
    return {
      ...n,
      x: Math.round((cx + radius * Math.cos(angle)) * 100) / 100,
      y: Math.round((cy + radius * Math.sin(angle)) * 100) / 100,
    }
  })

  return (
    <section className="relative py-28 bg-[#f4f6fb] dark:bg-[#09090B] transition-colors">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-6"
          >
            <div className="w-2 h-2 rounded-full bg-indigo-500" />
            <span className="text-muted-foreground text-sm">Connected Digital Campus</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl text-foreground text-balance max-w-2xl mx-auto"
            style={{ letterSpacing: "-0.03em", fontWeight: 600, lineHeight: 1.1 }}
          >
            Integration Ecosystem
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-[640px] aspect-square"
        >
          <svg viewBox="0 0 640 640" className="absolute inset-0 w-full h-full">
            <defs>
              <radialGradient id="integration-hub-glow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="rgba(99,102,241,0.3)" />
                <stop offset="100%" stopColor="rgba(99,102,241,0)" />
              </radialGradient>
            </defs>
            {placed.map((n, i) => (
              <g key={`line-${i}`}>
                <line x1={cx} y1={cy} x2={n.x} y2={n.y} stroke="currentColor" className="text-zinc-300 dark:text-zinc-700" strokeWidth="1" />
                <circle r="2.5" fill="#6366f1">
                  <animateMotion dur={`${2 + i * 0.15}s`} repeatCount="indefinite" path={`M${cx},${cy} L${n.x},${n.y}`} />
                  <animate attributeName="opacity" values="0;1;0" dur={`${2 + i * 0.15}s`} repeatCount="indefinite" />
                </circle>
              </g>
            ))}
            <circle cx={cx} cy={cy} r="110" fill="url(#integration-hub-glow)" />
          </svg>

          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center rounded-2xl border border-indigo-500/40 bg-white/70 dark:bg-zinc-900/80 backdrop-blur-md shadow-[0_0_36px_rgba(99,102,241,0.22)]"
            style={{ width: 108, height: 108 }}
          >
            <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center mb-1">
              <span className="text-white font-bold text-xs">P</span>
            </div>
            <span className="text-[10px] font-semibold text-foreground">PROSPEC</span>
          </div>

          {placed.map((n, i) => {
            const Icon = n.icon
            return (
              <motion.div
                key={n.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.05 }}
                className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1"
                style={{ left: `${(n.x / 640) * 100}%`, top: `${(n.y / 640) * 100}%` }}
              >
                <div className={`w-9 h-9 rounded-lg border ${n.ring} bg-white/80 dark:bg-zinc-900/90 backdrop-blur-sm flex items-center justify-center`}>
                  <Icon className={`w-3.5 h-3.5 ${n.color}`} />
                </div>
                <span className="text-[8px] font-medium text-muted-foreground whitespace-nowrap">{n.label}</span>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
