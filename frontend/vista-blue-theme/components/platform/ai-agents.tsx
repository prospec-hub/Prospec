"use client"

import { motion } from "framer-motion"
import {
  GraduationCap, ChatCircle, Books, CurrencyDollar, UsersThree,
  Briefcase, BookBookmark, Flask, Funnel,
} from "@phosphor-icons/react"

const agents = [
  { icon: GraduationCap, name: "Admission AI", dept: "Admissions", automation: 92 },
  { icon: ChatCircle, name: "Student AI", dept: "Student Services", automation: 94 },
  { icon: Books, name: "Faculty AI", dept: "Academics", automation: 85 },
  { icon: CurrencyDollar, name: "Finance AI", dept: "Finance", automation: 90 },
  { icon: UsersThree, name: "HR AI", dept: "Human Resources", automation: 78 },
  { icon: Briefcase, name: "Placement AI", dept: "Placements", automation: 88 },
  { icon: BookBookmark, name: "Library AI", dept: "Library", automation: 82 },
  { icon: Flask, name: "Research AI", dept: "Research", automation: 75 },
  { icon: Funnel, name: "Administration AI", dept: "Administration", automation: 86 },
]

export function AIAgents() {
  return (
    <section id="agents-preview" className="px-6 py-24 md:py-32" style={{ backgroundColor: "#F8FAFC" }}>
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-14">
          <p className="text-sm font-medium tracking-wide uppercase mb-3" style={{ color: "#1e81ce" }}>
            AI Agent Suite
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight leading-[1.1]">
            A dedicated AI agent for every department
          </h2>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed">
            Each agent runs 24/7, trained on your data and secured by role-based permissions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {agents.map((a, i) => {
            const Icon = a.icon
            return (
              <motion.div
                key={a.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.07 }}
                className="group bg-white border rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1"
                style={{ borderColor: "#E2E8F0", boxShadow: "0 1px 3px rgba(15,23,42,0.05)" }}
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="w-11 h-11 rounded-2xl flex items-center justify-center" style={{ backgroundColor: "rgba(30,129,206,0.1)" }}>
                    <Icon className="w-5 h-5" weight="duotone" style={{ color: "#1e81ce" }} />
                  </div>
                  <span className="flex items-center gap-1.5 text-[11px] font-medium px-2.5 py-1 rounded-full" style={{ backgroundColor: "rgba(34,197,94,0.1)", color: "#16a34a" }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" /> Running 24/7
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-slate-900 tracking-tight">{a.name}</h3>
                <p className="text-sm text-slate-500 mb-5">{a.dept}</p>

                <div className="flex items-center justify-between text-xs text-slate-500 mb-1.5">
                  <span>Automation</span>
                  <span className="font-semibold" style={{ color: "#1e81ce" }}>{a.automation}%</span>
                </div>
                <div className="h-1.5 rounded-full bg-slate-100 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${a.automation}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                    className="h-full rounded-full"
                    style={{ background: "linear-gradient(90deg,#1e81ce,#3ba3f5)" }}
                  />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
