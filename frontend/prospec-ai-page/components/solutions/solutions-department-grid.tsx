"use client"

import { motion } from "framer-motion"
import { GraduationCap, Users, BookOpen, ClipboardList, Wallet, UserCog, Building2, Briefcase, HeartHandshake } from "lucide-react"

interface Department {
  icon: typeof GraduationCap
  accent: string
  bg: string
  title: string
  description: string
  features: string[]
}

const departments: Department[] = [
  {
    icon: GraduationCap,
    accent: "text-blue-400",
    bg: "bg-blue-500/10",
    title: "Admissions",
    description: "Acquire, qualify, enroll, and onboard students faster with AI-powered admissions.",
    features: ["Lead Management", "Application Tracking", "Document Verification", "Counseling Automation", "Eligibility Evaluation", "Admission Analytics"],
  },
  {
    icon: Users,
    accent: "text-violet-400",
    bg: "bg-violet-500/10",
    title: "Student Success",
    description: "Deliver personalized student experiences throughout the academic journey.",
    features: ["AI Student Assistant", "Attendance Monitoring", "Academic Progress", "Scholarship Guidance", "Campus Services", "Student Support"],
  },
  {
    icon: BookOpen,
    accent: "text-indigo-400",
    bg: "bg-indigo-500/10",
    title: "Academic Operations",
    description: "Digitize and automate academic management.",
    features: ["Curriculum Management", "Timetable", "Assessment", "Faculty Workflows", "CO-PO Mapping", "Learning Analytics"],
  },
  {
    icon: ClipboardList,
    accent: "text-purple-400",
    bg: "bg-purple-500/10",
    title: "Examination Management",
    description: "A modern examination ecosystem, end to end.",
    features: ["Exam Scheduling", "Hall Ticket", "Result Processing", "Grade Management", "Revaluation", "Digital Evaluation"],
  },
  {
    icon: Wallet,
    accent: "text-emerald-400",
    bg: "bg-emerald-500/10",
    title: "Finance & Accounts",
    description: "Complete financial visibility across the institution.",
    features: ["Fee Collection", "Online Payments", "Scholarship Management", "Budget Planning", "Financial Reports", "Revenue Analytics"],
  },
  {
    icon: UserCog,
    accent: "text-teal-400",
    bg: "bg-teal-500/10",
    title: "Human Resources",
    description: "Manage faculty and staff, from hiring to retirement.",
    features: ["Recruitment", "Leave Management", "Payroll Integration", "Performance Review", "Document Management", "Employee Self Service"],
  },
  {
    icon: Building2,
    accent: "text-orange-400",
    bg: "bg-orange-500/10",
    title: "Administration",
    description: "Centralize institutional operations in one digital office.",
    features: ["Circulars", "Approvals", "Document Workflow", "Compliance", "Meetings", "Digital Office"],
  },
  {
    icon: Briefcase,
    accent: "text-blue-400",
    bg: "bg-blue-500/10",
    title: "Placement Cell",
    description: "Improve student employability with intelligent placement tools.",
    features: ["Company Management", "Student Profiles", "Interview Scheduling", "Placement Analytics", "Resume Builder", "Employer Portal"],
  },
  {
    icon: HeartHandshake,
    accent: "text-violet-400",
    bg: "bg-violet-500/10",
    title: "Alumni Relations",
    description: "Build lifelong connections with your graduates.",
    features: ["Alumni Portal", "Donations", "Networking", "Events", "Career Support", "Community Management"],
  },
]

export function SolutionsDepartmentGrid() {
  return (
    <section id="departments" className="relative py-28 bg-[#f4f6fb] dark:bg-[#09090B] transition-colors scroll-mt-28">
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
            <span className="text-muted-foreground text-sm">Unified University Ecosystem</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl text-foreground text-balance max-w-2xl mx-auto"
            style={{ letterSpacing: "-0.03em", fontWeight: 600, lineHeight: 1.1 }}
          >
            One Platform. Every Department.
            <br />
            One Source of Intelligence.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {departments.map((dept, i) => {
            const Icon = dept.icon
            return (
              <motion.div
                key={dept.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i % 6) * 0.07 }}
                className="rounded-2xl border border-border/60 hover:border-border bg-white/50 dark:bg-zinc-900/40 backdrop-blur-sm p-6 transition-colors"
              >
                <div className={`w-11 h-11 rounded-xl ${dept.bg} flex items-center justify-center mb-4`}>
                  <Icon className={`w-5 h-5 ${dept.accent}`} />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-1.5">{dept.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed mb-4">{dept.description}</p>

                <div className="pt-4 border-t border-border/40">
                  <div className="text-[9px] uppercase tracking-wider text-muted-foreground/70 mb-2">Features</div>
                  <div className="flex flex-wrap gap-1.5">
                    {dept.features.map((f) => (
                      <span
                        key={f}
                        className="text-[10px] px-2 py-0.5 rounded-full bg-muted/60 text-muted-foreground"
                      >
                        {f}
                      </span>
                    ))}
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
