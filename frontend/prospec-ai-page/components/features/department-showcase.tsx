"use client"

import { motion } from "framer-motion"
import { GraduationCap, Users, BookOpen, Wallet, UserCog, Building2, Briefcase, Crown } from "lucide-react"

interface Department {
  name: string
  icon: typeof GraduationCap
  accent: string
  bg: string
  features: string[]
  aiTools: string[]
  workflows: string[]
  integrations: string[]
}

const departments: Department[] = [
  {
    name: "Admissions",
    icon: GraduationCap,
    accent: "text-blue-400",
    bg: "bg-blue-500/10",
    features: ["Application tracking", "Eligibility checks"],
    aiTools: ["Admission AI", "Document Verification AI"],
    workflows: ["Auto offer letters", "Counseling scheduler"],
    integrations: ["CRM", "Payment Gateway"],
  },
  {
    name: "Student Services",
    icon: Users,
    accent: "text-violet-400",
    bg: "bg-violet-500/10",
    features: ["Attendance tracking", "Scholarship guidance"],
    aiTools: ["Student AI"],
    workflows: ["Attendance alerts", "Fee reminders"],
    integrations: ["ERP", "LMS"],
  },
  {
    name: "Academics",
    icon: BookOpen,
    accent: "text-indigo-400",
    bg: "bg-indigo-500/10",
    features: ["Lesson plans", "Question papers"],
    aiTools: ["Faculty AI"],
    workflows: ["CO-PO mapping", "Assessment generation"],
    integrations: ["LMS", "Exam System"],
  },
  {
    name: "Finance",
    icon: Wallet,
    accent: "text-emerald-400",
    bg: "bg-emerald-500/10",
    features: ["Fee collection", "Payroll processing"],
    aiTools: ["Finance AI"],
    workflows: ["Payment reminders", "Reconciliation"],
    integrations: ["Finance ERP", "Payment Gateway"],
  },
  {
    name: "HR",
    icon: UserCog,
    accent: "text-purple-400",
    bg: "bg-purple-500/10",
    features: ["Recruitment", "Leave management"],
    aiTools: ["HR AI"],
    workflows: ["Leave approval", "Onboarding"],
    integrations: ["HRMS", "Email"],
  },
  {
    name: "Administration",
    icon: Building2,
    accent: "text-orange-400",
    bg: "bg-orange-500/10",
    features: ["Approvals", "Documentation"],
    aiTools: ["Administration AI"],
    workflows: ["Circulars", "Meeting minutes"],
    integrations: ["ERP", "Email"],
  },
  {
    name: "Placement",
    icon: Briefcase,
    accent: "text-blue-400",
    bg: "bg-blue-500/10",
    features: ["Resume building", "Interview prep"],
    aiTools: ["Placement AI"],
    workflows: ["Drive scheduling", "Employer outreach"],
    integrations: ["Job Portals", "Email"],
  },
  {
    name: "Executive Office",
    icon: Crown,
    accent: "text-orange-400",
    bg: "bg-orange-500/10",
    features: ["Institution dashboards", "Risk alerts"],
    aiTools: ["Executive AI"],
    workflows: ["Decision briefings", "Forecasting"],
    integrations: ["Analytics", "All ERP Modules"],
  },
]

function TagRow({ label, tags }: { label: string; tags: string[] }) {
  return (
    <div>
      <div className="text-[9px] uppercase tracking-wider text-muted-foreground/70 mb-1">{label}</div>
      <div className="flex flex-wrap gap-1">
        {tags.map((t) => (
          <span
            key={t}
            className="text-[10px] px-1.5 py-0.5 rounded-md bg-muted/60 text-muted-foreground"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}

export function DepartmentShowcase() {
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
            <span className="text-muted-foreground text-sm">Department Coverage</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl text-foreground text-balance max-w-2xl mx-auto mb-4"
            style={{ letterSpacing: "-0.03em", fontWeight: 600, lineHeight: 1.1 }}
          >
            Every department, connected
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground max-w-md mx-auto"
          >
            Hover a department to see its features, AI tools, workflows and integrations.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {departments.map((dept, i) => {
            const Icon = dept.icon
            return (
              <motion.div
                key={dept.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i % 4) * 0.08 }}
                className="group relative rounded-2xl border border-border/60 hover:border-border bg-white/50 dark:bg-zinc-900/40 backdrop-blur-sm overflow-hidden transition-[max-height,border-color] duration-500 ease-in-out max-h-[104px] hover:max-h-[420px]"
              >
                <div className="p-4">
                  <div className="flex items-center gap-2.5">
                    <div className={`w-9 h-9 rounded-lg ${dept.bg} flex items-center justify-center shrink-0`}>
                      <Icon className={`w-4 h-4 ${dept.accent}`} />
                    </div>
                    <span className="text-sm font-semibold text-foreground leading-tight">{dept.name}</span>
                  </div>

                  <div className="mt-4 space-y-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150">
                    <TagRow label="Features" tags={dept.features} />
                    <TagRow label="AI Tools" tags={dept.aiTools} />
                    <TagRow label="Workflows" tags={dept.workflows} />
                    <TagRow label="Integrations" tags={dept.integrations} />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
