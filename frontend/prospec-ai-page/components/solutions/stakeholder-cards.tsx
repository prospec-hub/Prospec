"use client"

import { motion } from "framer-motion"
import { Crown, BookOpen, Users, Building2, Wallet, Server } from "lucide-react"

interface Stakeholder {
  icon: typeof Crown
  accent: string
  bg: string
  title: string
  description: string
  tags: string[]
}

const stakeholders: Stakeholder[] = [
  {
    icon: Crown,
    accent: "text-orange-400",
    bg: "bg-orange-500/10",
    title: "University Leadership",
    description: "Gain real-time institutional intelligence.",
    tags: ["Executive Dashboards", "Strategic Analytics", "Performance Indicators", "Risk Monitoring", "Decision Support"],
  },
  {
    icon: BookOpen,
    accent: "text-indigo-400",
    bg: "bg-indigo-500/10",
    title: "Faculty",
    description: "Spend less time on administration.",
    tags: ["AI Lesson Planning", "Assessments", "Reports", "Attendance", "Academic Analytics"],
  },
  {
    icon: Users,
    accent: "text-violet-400",
    bg: "bg-violet-500/10",
    title: "Students",
    description: "Everything students need from one intelligent assistant.",
    tags: ["Timetable", "Fees", "Attendance", "Results", "Scholarships", "Career Guidance"],
  },
  {
    icon: Building2,
    accent: "text-purple-400",
    bg: "bg-purple-500/10",
    title: "Administrative Teams",
    description: "Automate repetitive operations.",
    tags: ["Letters", "Circulars", "Approvals", "Compliance", "Documentation"],
  },
  {
    icon: Wallet,
    accent: "text-emerald-400",
    bg: "bg-emerald-500/10",
    title: "Finance Teams",
    description: "Increase operational efficiency.",
    tags: ["Revenue Tracking", "Fee Analytics", "Payment Intelligence", "Budget Monitoring"],
  },
  {
    icon: Server,
    accent: "text-blue-400",
    bg: "bg-blue-500/10",
    title: "IT Teams",
    description: "Enterprise deployment without disruption.",
    tags: ["APIs", "SSO", "Cloud", "Security", "Monitoring"],
  },
]

export function StakeholderCards() {
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
            <span className="text-muted-foreground text-sm">Every Stakeholder</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl text-foreground text-balance max-w-2xl mx-auto"
            style={{ letterSpacing: "-0.03em", fontWeight: 600, lineHeight: 1.1 }}
          >
            Designed for Every Stakeholder
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {stakeholders.map((s, i) => {
            const Icon = s.icon
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
                whileHover={{ y: -3 }}
                className="rounded-2xl border border-border/60 hover:border-border bg-white/50 dark:bg-zinc-900/40 backdrop-blur-sm p-6 transition-colors"
              >
                <div className={`w-11 h-11 rounded-xl ${s.bg} flex items-center justify-center mb-4`}>
                  <Icon className={`w-5 h-5 ${s.accent}`} />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-1.5">{s.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed mb-4">{s.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {s.tags.map((t) => (
                    <span key={t} className="text-[10px] px-2 py-0.5 rounded-full bg-muted/60 text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
