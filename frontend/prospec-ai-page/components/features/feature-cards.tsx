"use client"

import { motion } from "framer-motion"
import {
  Bot, Check, Search, Workflow, Mic, TrendingUp, BookOpen, Building2, Users, Wallet, Crown, Plug,
  Database,
} from "lucide-react"

type CardKind = "checklist" | "chips" | "chat"

interface FeatureCard {
  id?: string
  icon: typeof Bot
  accent: string
  bg: string
  glow: string
  title: string
  description: string
  kind: CardKind
  items: string[]
}

const cards: FeatureCard[] = [
  {
    id: "ai-assistant",
    icon: Bot,
    accent: "text-blue-400",
    bg: "bg-blue-500/10",
    glow: "rgba(59,130,246,0.35)",
    title: "AI Assistant",
    description: "Your institution's conversational intelligence layer.",
    kind: "checklist",
    items: ["Instant Answers", "Context Awareness", "Multi-language", "Personalized Responses"],
  },
  {
    id: "knowledge-base",
    icon: Database,
    accent: "text-indigo-400",
    bg: "bg-indigo-500/10",
    glow: "rgba(99,102,241,0.35)",
    title: "University Knowledge Base",
    description: "Search every institutional document instantly.",
    kind: "checklist",
    items: ["Policies", "Circulars", "Regulations", "Accreditation", "ERP Records"],
  },
  {
    icon: Search,
    accent: "text-violet-400",
    bg: "bg-violet-500/10",
    glow: "rgba(139,92,246,0.35)",
    title: "Intelligent Search",
    description: "Find information in seconds, across every system.",
    kind: "chips",
    items: ["PDF", "ERP", "LMS", "Emails", "Circulars", "Policies"],
  },
  {
    icon: Workflow,
    accent: "text-emerald-400",
    bg: "bg-emerald-500/10",
    glow: "rgba(16,185,129,0.35)",
    title: "Workflow Automation",
    description: "Automate repetitive university tasks end to end.",
    kind: "checklist",
    items: ["Leave Approval", "Fee Reminder", "Admission Processing", "Document Verification", "Certificate Generation"],
  },
  {
    icon: Mic,
    accent: "text-blue-400",
    bg: "bg-blue-500/10",
    glow: "rgba(59,130,246,0.35)",
    title: "Voice AI",
    description: "Natural conversations with institutional systems.",
    kind: "chat",
    items: ["What's my attendance?", "Pay my fees", "Show my timetable"],
  },
  {
    icon: TrendingUp,
    accent: "text-orange-400",
    bg: "bg-orange-500/10",
    glow: "rgba(249,115,22,0.35)",
    title: "Predictive Analytics",
    description: "Forecast institutional outcomes before they happen.",
    kind: "checklist",
    items: ["Dropout Prediction", "Admission Trends", "Revenue Forecast", "Student Performance"],
  },
  {
    icon: BookOpen,
    accent: "text-indigo-400",
    bg: "bg-indigo-500/10",
    glow: "rgba(99,102,241,0.35)",
    title: "Faculty Intelligence",
    description: "AI built specifically for faculty workflows.",
    kind: "chips",
    items: ["Lesson Plans", "Question Papers", "CO Mapping", "Assessment", "Rubrics", "Reports"],
  },
  {
    icon: Building2,
    accent: "text-purple-400",
    bg: "bg-purple-500/10",
    glow: "rgba(168,85,247,0.35)",
    title: "Administration Suite",
    description: "Reduce paperwork across every department.",
    kind: "chips",
    items: ["Letters", "Circulars", "Minutes", "Emails", "Reports", "Approvals"],
  },
  {
    icon: Users,
    accent: "text-violet-400",
    bg: "bg-violet-500/10",
    glow: "rgba(139,92,246,0.35)",
    title: "Student Success",
    description: "Improve engagement, retention and outcomes.",
    kind: "checklist",
    items: ["Attendance Alerts", "Placement Guidance", "Scholarships", "Career Advice", "Campus Information"],
  },
  {
    icon: Wallet,
    accent: "text-emerald-400",
    bg: "bg-emerald-500/10",
    glow: "rgba(16,185,129,0.35)",
    title: "Finance Intelligence",
    description: "Fee management and financial forecasting.",
    kind: "chips",
    items: ["Fee Management", "Payment Analytics", "Revenue Reports", "Financial Forecasting"],
  },
  {
    icon: Crown,
    accent: "text-orange-400",
    bg: "bg-orange-500/10",
    glow: "rgba(249,115,22,0.35)",
    title: "Executive Dashboard",
    description: "Institution-wide AI insight for leadership.",
    kind: "checklist",
    items: ["Admissions", "Revenue", "Performance", "Compliance", "Risk Alerts", "Decision Support"],
  },
  {
    icon: Plug,
    accent: "text-blue-400",
    bg: "bg-blue-500/10",
    glow: "rgba(59,130,246,0.35)",
    title: "Open Integration Platform",
    description: "Connect every system your institution runs on.",
    kind: "chips",
    items: ["ERP", "LMS", "Library", "HRMS", "Finance", "Google Workspace", "Microsoft 365", "APIs"],
  },
]

function CardReveal({ card }: { card: FeatureCard }) {
  if (card.kind === "chips") {
    return (
      <div className="flex flex-wrap gap-1.5">
        {card.items.map((item, i) => (
          <span
            key={item}
            className="text-[10px] px-2 py-0.5 rounded-full border border-border/60 text-muted-foreground opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300"
            style={{ transitionDelay: `${i * 50}ms` }}
          >
            {item}
          </span>
        ))}
      </div>
    )
  }

  if (card.kind === "chat") {
    return (
      <div className="flex flex-col gap-1.5 items-start">
        {card.items.map((line, i) => (
          <div
            key={line}
            className="text-[10px] bg-blue-600/10 text-foreground rounded-lg px-2.5 py-1.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
            style={{ transitionDelay: `${i * 90}ms` }}
          >
            "{line}"
          </div>
        ))}
      </div>
    )
  }

  return (
    <ul className="space-y-1.5">
      {card.items.map((item, i) => (
        <li
          key={item}
          className={`flex items-center gap-2 text-xs text-muted-foreground opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300`}
          style={{ transitionDelay: `${i * 60}ms` }}
        >
          <Check className={`w-3 h-3 ${card.accent} shrink-0`} />
          {item}
        </li>
      ))}
    </ul>
  )
}

export function FeatureCards() {
  return (
    <section id="core-features" className="relative py-28 bg-[#f4f6fb] dark:bg-[#09090B] transition-colors scroll-mt-28">
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
            <span className="text-muted-foreground text-sm">Core Features</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl text-foreground text-balance max-w-2xl mx-auto"
            style={{ letterSpacing: "-0.03em", fontWeight: 600, lineHeight: 1.1 }}
          >
            Built Around University Operations
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cards.map((card, i) => {
            const Icon = card.icon
            return (
              <motion.div
                key={card.title}
                id={card.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i % 6) * 0.06 }}
                className="group relative overflow-hidden rounded-2xl border border-border/60 hover:border-border bg-white/50 dark:bg-zinc-900/40 backdrop-blur-sm p-6 transition-colors flex flex-col scroll-mt-28"
                style={{ minHeight: 290 }}
              >
                <div
                  className={`w-12 h-12 rounded-xl ${card.bg} flex items-center justify-center mb-5 transition-shadow duration-300 group-hover:shadow-[0_0_26px_var(--card-glow)]`}
                  style={{ "--card-glow": card.glow } as Record<string, string>}
                >
                  <Icon className={`w-6 h-6 ${card.accent}`} />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-1.5">{card.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed mb-4">{card.description}</p>

                <div className="mt-auto pt-4 border-t border-border/40">
                  <CardReveal card={card} />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
