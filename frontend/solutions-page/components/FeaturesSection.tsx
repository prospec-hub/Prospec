"use client"

import { motion } from "framer-motion"
import { Sparkles, Workflow, BarChart3, LayoutGrid, Users, ShieldCheck, ArrowUpRight } from "lucide-react"
import type { LucideIcon } from "lucide-react"

type Feature = {
  icon: LucideIcon
  title: string
  description: string
  capabilities: string[]
}

const features: Feature[] = [
  {
    icon: Sparkles,
    title: "AI-Powered Decision Intelligence",
    description:
      "Move beyond basic analytics. ProsPec continuously analyzes operational data, predicts outcomes, and surfaces actionable recommendations before problems become costly.",
    capabilities: ["AI-generated insights", "Trend detection", "Performance forecasting", "Anomaly detection"],
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description:
      "Automate repetitive operations with powerful workflow engines that trigger actions based on events, approvals, deadlines, or custom business rules.",
    capabilities: ["Onboarding", "Lead management", "Approvals", "Invoicing"],
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description:
      "Live dashboards that update instantly, giving teams complete visibility into revenue, productivity, finances, and operational health from one place.",
    capabilities: ["Revenue tracking", "Growth metrics", "Live activity feed", "Custom widgets"],
  },
  {
    icon: LayoutGrid,
    title: "Smart Dashboards",
    description:
      "Personalized, drag-and-drop dashboards that display exactly what matters to each role — from executives to managers to individual contributors.",
    capabilities: ["Drag-and-drop widgets", "Multiple layouts", "Interactive charts", "Exports"],
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "Bring conversations, projects, files, and workflows together in one secure workspace. Eliminate silos and keep every team member aligned.",
    capabilities: ["Shared workspaces", "Task assignments", "File sharing", "Activity timeline"],
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Security",
    description:
      "Security is built into every layer. Modern standards keep your data protected, compliant, and accessible only to authorized users.",
    capabilities: ["End-to-end encryption", "MFA", "Role-based access", "Audit logs"],
  },
]

export const FeaturesSection = () => {
  return (
    <section id="features" className="w-full bg-white py-24 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-2xl mb-16"
        >
          <span
            className="inline-flex items-center gap-1.5 text-xs uppercase tracking-tight text-[#156d95] mb-5"
            style={{ fontFamily: "var(--font-geist-mono), 'Geist Mono', ui-monospace, monospace" }}
          >
            Intelligent Features
            <ArrowUpRight className="w-3 h-3" />
          </span>
          <h2
            className="text-[40px] leading-tight font-normal text-[#202020] tracking-tight mb-4"
            style={{ fontWeight: "600", fontWeight: 400 }}
          >
            Everything your business needs, in one platform.
          </h2>
          <p
            className="text-lg leading-7 text-[#666666]"
            style={{ fontWeight: "600" }}
          >
            Enterprise-grade capability, unified. From intelligent automation and AI-driven insights to enterprise
            security and seamless collaboration — every feature is engineered to help teams work smarter and scale
            confidently.
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.08, ease: "easeOut" }}
                className="group relative flex flex-col rounded-[24px] bg-[#fafafa] border border-black/[0.06] p-8 transition-all duration-200 hover:bg-white hover:border-black/[0.1] hover:shadow-[0_8px_32px_-8px_rgba(0,0,0,0.08)]"
              >
                <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-white border border-black/[0.06] text-[#156d95] mb-6 shadow-sm">
                  <Icon className="w-5 h-5" strokeWidth={1.75} />
                </div>

                <h3
                  className="text-xl leading-snug text-[#202020] mb-3"
                  style={{ fontWeight: "600", fontWeight: 500 }}
                >
                  {feature.title}
                </h3>

                <p
                  className="text-[15px] leading-6 text-[#666666] mb-6 flex-1"
                  style={{ fontWeight: "600" }}
                >
                  {feature.description}
                </p>

                <ul className="flex flex-wrap gap-1.5 mt-auto">
                  {feature.capabilities.map((cap) => (
                    <li
                      key={cap}
                      className="text-xs leading-5 text-[#404040] bg-white border border-black/[0.06] rounded-full px-2.5 py-1"
                      style={{ fontWeight: "600" }}
                    >
                      {cap}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
