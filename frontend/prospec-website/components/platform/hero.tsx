"use client"

import { motion } from "framer-motion"
import { Sparkle, ArrowRight } from "@phosphor-icons/react"

const NODES = [
  "Admissions", "Faculty", "Students", "Finance", "HR",
  "Library", "Hostel", "Placement", "Examination", "Analytics",
]

const CENTER = 260
const RADIUS = 205

function nodePos(i: number, total: number) {
  const angle = (i / total) * Math.PI * 2 - Math.PI / 2
  return { x: CENTER + RADIUS * Math.cos(angle), y: CENTER + RADIUS * Math.sin(angle) }
}

function Ecosystem() {
  return (
    <div className="relative w-full max-w-[520px] mx-auto aspect-square">
      {/* rotating network lines behind */}
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 520 520" className="w-full h-full">
          {NODES.map((_, i) => {
            const p = nodePos(i, NODES.length)
            return (
              <line
                key={i}
                x1={CENTER} y1={CENTER} x2={p.x} y2={p.y}
                stroke="url(#lineGrad)" strokeWidth="1.5"
              />
            )
          })}
          <circle cx={CENTER} cy={CENTER} r={RADIUS} fill="none" stroke="#1e81ce" strokeOpacity="0.12" strokeWidth="1" strokeDasharray="4 6" />
          <defs>
            <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#1e81ce" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#3ba3f5" stopOpacity="0.05" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* soft central glow */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          top: "50%", left: "50%", transform: "translate(-50%,-50%)",
          width: "260px", height: "260px",
          background: "radial-gradient(circle, rgba(30,129,206,0.18) 0%, transparent 70%)",
        }}
      />

      {/* Center AI brain */}
      <motion.div
        className="absolute z-20 flex flex-col items-center justify-center rounded-2xl text-white"
        style={{
          top: "50%", left: "50%", transform: "translate(-50%,-50%)",
          width: "108px", height: "108px",
          background: "linear-gradient(135deg, #1e81ce 0%, #0e5d9e 100%)",
          boxShadow: "0 12px 40px rgba(30,129,206,0.45), inset 0 1px 0 rgba(255,255,255,0.25)",
        }}
        animate={{ scale: [1, 1.04, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <Sparkle className="w-7 h-7 mb-1" weight="fill" />
        <span className="text-sm font-semibold tracking-tight">AI Brain</span>
      </motion.div>

      {/* Nodes */}
      {NODES.map((label, i) => {
        const p = nodePos(i, NODES.length)
        return (
          <motion.div
            key={label}
            className="absolute z-10"
            style={{ top: p.y, left: p.x, transform: "translate(-50%,-50%)" }}
            animate={{ y: [0, i % 2 === 0 ? -6 : 6, 0] }}
            transition={{ duration: 3 + (i % 4), repeat: Infinity, ease: "easeInOut", delay: i * 0.15 }}
          >
            <div
              className="px-3 py-1.5 rounded-full bg-white border text-xs font-medium text-slate-700 whitespace-nowrap flex items-center gap-1.5"
              style={{ borderColor: "#E2E8F0", boxShadow: "0 4px 14px rgba(15,23,42,0.08)" }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#1e81ce" }} />
              {label}
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}

export function PlatformHero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-20 md:pb-28 px-6" style={{ backgroundColor: "#FFFFFF" }}>
      {/* subtle top gradient */}
      <div
        className="absolute inset-x-0 top-0 h-[420px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(30,129,206,0.06) 0%, transparent 70%)" }}
      />
      <div className="relative z-10 max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        {/* Left — copy */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-6 border"
            style={{ backgroundColor: "rgba(30,129,206,0.08)", borderColor: "rgba(30,129,206,0.2)", color: "#1e81ce" }}
          >
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: "#1e81ce" }} />
            Now in public beta — AI for Universities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-4xl md:text-5xl lg:text-[58px] font-semibold text-slate-900 leading-[1.05] text-balance"
            style={{ letterSpacing: "-0.033em" }}
          >
            The AI that runs your university—so your team can focus on students.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-6 text-lg text-slate-600 leading-relaxed max-w-xl"
          >
            Admissions. Academics. Administration. Finance. Student support. One intelligent AI
            platform handling millions of repetitive tasks every year.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#cta"
              className="px-6 py-3 text-white font-semibold rounded-xl text-sm transition-all"
              style={{ background: "linear-gradient(135deg, #1e81ce 0%, #0e5d9e 100%)", boxShadow: "0 8px 24px rgba(30,129,206,0.3)" }}
            >
              Schedule AI Demo
            </a>
            <a href="#capabilities" className="flex items-center gap-2 text-sm text-slate-700 font-medium hover:text-slate-900 transition-colors">
              Explore AI Platform
              <ArrowRight className="w-4 h-4" weight="bold" />
            </a>
          </motion.div>
        </div>

        {/* Right — ecosystem */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <Ecosystem />
        </motion.div>
      </div>
    </section>
  )
}
