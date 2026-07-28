"use client"

import { motion } from "framer-motion"
import {
  MessageSquare, Mic, Brain, Search, Workflow, Bell, Sparkles, Languages,
  FileText, Image as ImageIcon, BarChart3, GitBranch, ShieldCheck, ScrollText, Lock,
} from "lucide-react"

const capabilities = [
  { icon: MessageSquare, label: "Natural Language" },
  { icon: Mic, label: "Voice" },
  { icon: Brain, label: "Memory & Reasoning" },
  { icon: Search, label: "Knowledge Search" },
  { icon: Workflow, label: "Workflow Execution" },
  { icon: Bell, label: "Notifications" },
  { icon: Sparkles, label: "Continuous Learning" },
  { icon: Languages, label: "Multilingual" },
  { icon: FileText, label: "Document Understanding" },
  { icon: ImageIcon, label: "Image Understanding" },
  { icon: BarChart3, label: "Analytics" },
  { icon: GitBranch, label: "Decision Support" },
  { icon: ShieldCheck, label: "Role Permissions" },
  { icon: ScrollText, label: "Audit Logs" },
  { icon: Lock, label: "Enterprise Security" },
]

export function AgentCapabilities() {
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
            <div className="w-2 h-2 rounded-full bg-blue-500" />
            <span className="text-muted-foreground text-sm">Every Agent Ships With</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl text-foreground text-balance max-w-2xl mx-auto"
            style={{ letterSpacing: "-0.03em", fontWeight: 600, lineHeight: 1.1 }}
          >
            Enterprise capabilities, built in
          </motion.h2>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {capabilities.map((cap, i) => {
            const Icon = cap.icon
            return (
              <motion.div
                key={cap.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: (i % 8) * 0.05 }}
                whileHover={{ y: -3 }}
                className="group inline-flex items-center gap-2.5 rounded-full border border-border/60 bg-white/60 dark:bg-zinc-900/40 backdrop-blur-sm pl-3 pr-4 py-2.5 hover:border-blue-500/40 transition-colors"
              >
                <span className="w-7 h-7 rounded-full bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                  <Icon className="w-3.5 h-3.5 text-blue-400" />
                </span>
                <span className="text-sm text-foreground font-medium">{cap.label}</span>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
