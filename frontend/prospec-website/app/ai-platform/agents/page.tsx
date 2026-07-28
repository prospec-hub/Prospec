"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import {
  GraduationCap,
  ChatCircle,
  Books,
  Funnel,
  ChartBar,
  MagnifyingGlass,
  CurrencyDollar,
  Briefcase,
  CaretRight,
  ArrowRight,
  Plus,
  Check,
  Sparkle,
  Lightning,
  ShieldCheck,
  Plug,
  ArrowsOut,
} from "@phosphor-icons/react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import {
  AdmissionsAgentMockup,
  StudentSupportMockup,
  FacultyAIMockup,
  AdministrationMockup,
  AnalyticsMockup,
  KnowledgeMockup,
  FinanceMockup,
} from "@/components/agents/agent-mockups"

/* ─── Agent data ─── */
const agents = [
  {
    id: "admissions",
    name: "Admissions AI",
    tagline: "Automate every step of the admissions funnel",
    description:
      "Handles enquiries, verifies documents, checks eligibility, scores applications, sends offer letters, and schedules counseling — all without human intervention.",
    icon: GraduationCap,
    color: "#3ba3f5",
    features: ["Document verification", "Merit-list generation", "Auto offer letters", "Counseling scheduler"],
    stat: { value: "10×", label: "faster processing" },
    Mockup: AdmissionsAgentMockup,
  },
  {
    id: "student",
    name: "Student Support AI",
    tagline: "24/7 intelligent campus companion",
    description:
      "Answers every student query — fees, exams, hostels, attendance, placements, scholarships — instantly from the university knowledge base.",
    icon: ChatCircle,
    color: "#34d399",
    features: ["Multilingual support", "Fee & deadline alerts", "Exam schedule queries", "Hostel & transport info"],
    stat: { value: "94%", label: "queries auto-resolved" },
    Mockup: StudentSupportMockup,
  },
  {
    id: "faculty",
    name: "Faculty AI",
    tagline: "Intelligent teaching and assessment assistant",
    description:
      "Generates lesson plans, question papers with Bloom's taxonomy tags, CO-PO mappings, rubrics, assessment reports, and attendance insights.",
    icon: Books,
    color: "#a78bfa",
    features: ["Question paper generation", "CO-PO mapping", "Lesson plans", "Assessment rubrics"],
    stat: { value: "3 hrs", label: "saved per faculty/week" },
    Mockup: FacultyAIMockup,
  },
  {
    id: "administration",
    name: "Administration AI",
    tagline: "End-to-end campus workflow automation",
    description:
      "Manages timetables, NOC approvals, circular publishing, leave processing, and inter-department communication with zero manual effort.",
    icon: Funnel,
    color: "#fb923c",
    features: ["Timetable generation", "Circular automation", "NOC & approvals", "Leave management"],
    stat: { value: "80%", label: "less admin overhead" },
    Mockup: AdministrationMockup,
  },
  {
    id: "analytics",
    name: "Analytics AI",
    tagline: "Predictive intelligence across your institution",
    description:
      "Surfaces real-time dashboards for retention, placement rates, academic performance, and flags at-risk students before they drop out.",
    icon: ChartBar,
    color: "#f472b6",
    features: ["Student retention scoring", "Placement prediction", "Performance trends", "At-risk alerts"],
    stat: { value: "47%", label: "drop-out reduction" },
    Mockup: AnalyticsMockup,
  },
  {
    id: "knowledge",
    name: "Knowledge AI",
    tagline: "Search your entire institution in seconds",
    description:
      "Indexes all university documents — NAAC reports, UGC circulars, ERP data, policies, rulebooks — and lets staff and students ask in plain language.",
    icon: MagnifyingGlass,
    color: "#1e81ce",
    features: ["Document indexing", "Natural language search", "Policy Q&A", "Accreditation ready"],
    stat: { value: "500K+", label: "documents searchable" },
    Mockup: KnowledgeMockup,
  },
  {
    id: "finance",
    name: "Finance AI",
    tagline: "Intelligent fee management and financial ops",
    description:
      "Tracks collections, auto-notifies defaulters, processes scholarship disbursals, flags anomalies, and produces real-time financial summaries.",
    icon: CurrencyDollar,
    color: "#fbbf24",
    features: ["Fee collection tracking", "Auto reminders", "Scholarship disbursal", "Anomaly detection"],
    stat: { value: "99.2%", label: "collection accuracy" },
    Mockup: FinanceMockup,
  },
  {
    id: "placement",
    name: "Placement AI",
    tagline: "Smart career services at scale",
    description:
      "Matches students to job opportunities, automates drive registrations, preps interview coaching, and tracks campus placement outcomes in real time.",
    icon: Briefcase,
    color: "#34d399",
    features: ["Job matching engine", "Drive automation", "Interview prep", "Outcome tracking"],
    stat: { value: "2.3×", label: "placement rate uplift" },
    Mockup: AnalyticsMockup,
  },
]

/* ─── 3D Card with mockup ─── */
function AgentCard({
  agent,
  index,
}: {
  agent: (typeof agents)[0]
  index: number
}) {
  const { name, tagline, description, icon: Icon, color, features, stat, Mockup } = agent

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex flex-col"
      style={{ borderRadius: "28px" }}
    >
      {/* Card shell — same border/bg language as feature cards */}
      <div
        className="relative overflow-hidden flex flex-col border transition-all duration-500 group-hover:border-zinc-600"
        style={{
          borderRadius: "28px",
          backgroundColor: "#0d1117",
          borderColor: "rgba(30,129,206,0.18)",
          height: "100%",
        }}
      >
        {/* Hover glow */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at top left, ${color}14 0%, transparent 65%)`,
            borderRadius: "28px",
          }}
        />

        {/* Top accent line */}
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{
            background: `linear-gradient(to right, transparent 10%, ${color}50 50%, transparent 90%)`,
          }}
        />

        {/* 3D Mockup panel */}
        <div
          className="relative overflow-hidden"
          style={{
            height: "220px",
            background: "linear-gradient(160deg, #0a0a0f 0%, #111318 100%)",
            borderBottom: "1px solid rgba(255,255,255,0.04)",
          }}
        >
          {/* Perspective wrapper — same 3D stage approach from hero */}
          <div
            className="absolute inset-0"
            style={{ perspective: "800px", perspectiveOrigin: "50% 0%" }}
          >
            <motion.div
              initial={{ opacity: 0, rotateX: 18, y: 20 }}
              whileInView={{ opacity: 1, rotateX: 8, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 + index * 0.05, ease: [0.22, 1, 0.36, 1] }}
              style={{
                transformStyle: "preserve-3d",
                transformOrigin: "center top",
                border: "1px solid rgba(30,129,206,0.15)",
                borderRadius: "12px",
                overflow: "hidden",
                backgroundColor: "#0a0a0f",
                margin: "16px 20px 0",
                boxShadow: `0 20px 60px rgba(0,0,0,0.6), 0 0 30px ${color}10`,
              }}
            >
              <Mockup />
            </motion.div>
          </div>

          {/* Bottom fade */}
          <div
            className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
            style={{ background: "linear-gradient(to top, #0d1117, transparent)" }}
          />

          {/* Icon badge */}
          <div
            className="absolute top-4 right-5 w-8 h-8 rounded-xl flex items-center justify-center z-10"
            style={{ backgroundColor: `${color}18`, border: `1px solid ${color}30` }}
          >
            <Icon className="w-4 h-4" weight="duotone" style={{ color }} />
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-3 p-6 flex-1">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3
                className="text-white font-semibold text-lg leading-tight tracking-tight"
              >
                {name}
              </h3>
              <p className="text-zinc-500 text-sm mt-0.5 leading-snug">{tagline}</p>
            </div>
            <div
              className="w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-all group-hover:border-[#1e81ce]"
              style={{ borderColor: "rgba(30,129,206,0.3)", color: "#1e81ce" }}
            >
              <Plus className="w-4 h-4" weight="bold" />
            </div>
          </div>

          <p className="text-zinc-500 text-sm leading-relaxed">{description}</p>

          {/* Feature pills */}
          <div className="flex flex-wrap gap-1.5 mt-1">
            {features.map((f) => (
              <span
                key={f}
                className="text-[11px] px-2.5 py-1 rounded-full font-medium"
                style={{
                  backgroundColor: "rgba(30,129,206,0.08)",
                  color: "#71717a",
                  border: "1px solid rgba(30,129,206,0.15)",
                }}
              >
                {f}
              </span>
            ))}
          </div>

          {/* Stat + CTA */}
          <div className="flex items-center justify-between mt-auto pt-4 border-t border-zinc-800/60">
            <div>
              <span className="text-white font-bold text-xl tracking-tight" style={{ color }}>{stat.value}</span>
              <span className="text-zinc-500 text-xs ml-1.5">{stat.label}</span>
            </div>
            <button
              className="flex items-center gap-1.5 text-xs font-medium transition-colors group/btn"
              style={{ color: "#3ba3f5" }}
            >
              Learn more
              <ArrowRight
                className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5"
                weight="bold"
              />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

/* ─── How It Works step ─── */
function StepCard({ number, title, description, delay }: { number: string; title: string; description: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex flex-col gap-4"
    >
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm border shrink-0"
        style={{
          background: "linear-gradient(135deg, rgba(30,129,206,0.2) 0%, rgba(14,93,158,0.1) 100%)",
          borderColor: "rgba(30,129,206,0.3)",
          color: "#3ba3f5",
        }}
      >
        {number}
      </div>
      <div>
        <h3 className="text-white font-semibold text-base mb-1.5 tracking-tight">{title}</h3>
        <p className="text-zinc-500 text-sm leading-relaxed">{description}</p>
      </div>
    </motion.div>
  )
}

/* ─── Page ─── */
export default function AgentsPage() {
  const [yOffset, setYOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setYOffset(Math.min(window.scrollY / 300, 1) * -20)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div style={{ backgroundColor: "#09090B" }} className="min-h-screen font-sans">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden pt-32 pb-24 px-6">
        {/* Background glow */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: "0%",
            left: "50%",
            transform: "translate(-50%, -20%)",
            width: "1000px",
            height: "600px",
            background:
              "radial-gradient(ellipse at center, rgba(30,129,206,0.12) 0%, rgba(14,93,158,0.05) 45%, transparent 70%)",
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Label pill */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-8 border"
            style={{
              backgroundColor: "rgba(30,129,206,0.1)",
              borderColor: "rgba(30,129,206,0.3)",
              color: "#3ba3f5",
            }}
          >
            <Sparkle className="w-3.5 h-3.5" weight="duotone" />
            8 Specialized AI Agents — Purpose-Built for Universities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.05 }}
            className="text-4xl md:text-5xl lg:text-[60px] font-semibold text-white leading-[1.05] text-balance"
            style={{ letterSpacing: "-0.033em" }}
          >
            Meet the AI Agents
            <br />
            Running Your University
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.12 }}
            className="mt-6 text-lg text-zinc-400 leading-relaxed max-w-2xl"
          >
            Each agent is trained on university-specific data, integrated with your ERP, and
            operates within role-based permissions — so intelligence reaches every department
            without compromising security or control.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <button
              className="px-5 py-2.5 text-white font-semibold rounded-lg text-sm transition-all"
              style={{
                background: "linear-gradient(135deg, #1e81ce 0%, #0e5d9e 100%)",
                boxShadow: "0 0 24px rgba(30,129,206,0.4), 0 2px 8px rgba(0,0,0,0.4)",
              }}
            >
              Request AI Demo
            </button>
            <button className="flex items-center gap-2 text-sm text-zinc-300 font-medium hover:text-white transition-colors">
              View all capabilities
              <CaretRight className="w-4 h-4" weight="bold" />
            </button>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.3 }}
            className="mt-16 flex flex-wrap gap-8"
          >
            {[
              { value: "8", label: "Specialized Agents" },
              { value: "3.8M+", label: "Queries Resolved" },
              { value: "52K+", label: "Students Served" },
              { value: "99.9%", label: "Uptime SLA" },
            ].map(({ value, label }) => (
              <div key={label}>
                <p className="text-2xl font-bold text-white tracking-tight" style={{ letterSpacing: "-0.033em" }}>{value}</p>
                <p className="text-zinc-500 text-sm mt-0.5">{label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Agents Grid ── */}
      <section className="px-6 pb-32">
        <div className="max-w-6xl mx-auto">
          {/* Section label */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 mb-12"
          >
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#1e81ce" }} />
            <span className="text-zinc-400 text-sm">AI Agent Suite</span>
            <CaretRight className="w-4 h-4 text-zinc-600" weight="bold" />
            <span className="text-zinc-600 text-sm">8 agents, one platform</span>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {agents.map((agent, i) => (
              <AgentCard key={agent.id} agent={agent} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── How Agents Work — with 3D stage ── */}
      <section className="relative py-32 px-6 overflow-hidden border-t border-zinc-800/40">
        {/* Subtle glow */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: "50%",
            left: "30%",
            transform: "translate(-50%, -50%)",
            width: "800px",
            height: "600px",
            background: "radial-gradient(ellipse at center, rgba(30,129,206,0.06) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-20">
            {/* Left — copy */}
            <div className="lg:w-[420px] shrink-0">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-2 mb-6"
              >
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#1e81ce" }} />
                <span className="text-zinc-400 text-sm">How It Works</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.05 }}
                className="text-3xl md:text-4xl font-semibold text-white leading-[1.1] text-balance mb-6"
                style={{ letterSpacing: "-0.033em" }}
              >
                Agents that think,
                <br />
                act, and learn
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-zinc-400 leading-relaxed mb-12"
              >
                Every Prospec AI agent follows a perceive → reason → act loop, grounded in your
                institutional data and secured by role-based access policies.
              </motion.p>

              <div className="grid grid-cols-1 gap-8">
                {[
                  {
                    number: "01",
                    title: "Connect Your Data",
                    description: "Prospec ingests your ERP, LMS, HRMS, documents, and policies into a secure institutional knowledge graph.",
                  },
                  {
                    number: "02",
                    title: "Deploy Agents",
                    description: "Choose from 8 purpose-built agents or configure custom workflows. Each agent operates within strict role-based access controls.",
                  },
                  {
                    number: "03",
                    title: "AI Reasons & Acts",
                    description: "Agents parse intent, retrieve context from the knowledge graph, generate responses, and trigger downstream automations.",
                  },
                  {
                    number: "04",
                    title: "Monitor & Improve",
                    description: "Track every interaction in the unified dashboard. Agents learn from corrections and improve resolution accuracy over time.",
                  },
                ].map(({ number, title, description }, i) => (
                  <StepCard key={number} number={number} title={title} description={description} delay={0.1 + i * 0.08} />
                ))}
              </div>
            </div>

            {/* Right — stacked 3D card panel */}
            <div className="flex-1 relative flex items-center justify-center">
              <div
                className="relative w-full max-w-lg"
                style={{ perspective: "1200px", perspectiveOrigin: "50% 40%" }}
              >
                {/* Back card (Analytics) */}
                <motion.div
                  initial={{ opacity: 0, rotateX: 20, rotateY: -10, y: 40 }}
                  whileInView={{ opacity: 1, rotateX: 12, rotateY: -6, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    position: "absolute",
                    top: "-40px",
                    left: "40px",
                    right: "-20px",
                    transformStyle: "preserve-3d",
                    transformOrigin: "center top",
                    border: "1px solid rgba(30,129,206,0.12)",
                    borderRadius: "20px",
                    backgroundColor: "#0d1117",
                    overflow: "hidden",
                    boxShadow: "0 40px 80px rgba(0,0,0,0.5)",
                    zIndex: 1,
                  }}
                >
                  <div style={{ height: "260px" }}>
                    <AnalyticsMockup />
                  </div>
                </motion.div>

                {/* Middle card (Knowledge) */}
                <motion.div
                  initial={{ opacity: 0, rotateX: 16, rotateY: -5, y: 30 }}
                  whileInView={{ opacity: 1, rotateX: 8, rotateY: -3, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    position: "absolute",
                    top: "20px",
                    left: "20px",
                    right: "0px",
                    transformStyle: "preserve-3d",
                    transformOrigin: "center top",
                    border: "1px solid rgba(30,129,206,0.16)",
                    borderRadius: "20px",
                    backgroundColor: "#0d1117",
                    overflow: "hidden",
                    boxShadow: "0 30px 60px rgba(0,0,0,0.5), 0 0 30px rgba(30,129,206,0.06)",
                    zIndex: 2,
                  }}
                >
                  <div style={{ height: "280px" }}>
                    <KnowledgeMockup />
                  </div>
                </motion.div>

                {/* Front card (Admissions) */}
                <motion.div
                  initial={{ opacity: 0, rotateX: 10, y: 20 }}
                  whileInView={{ opacity: 1, rotateX: 4, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    position: "relative",
                    top: "80px",
                    transformStyle: "preserve-3d",
                    transformOrigin: "center top",
                    border: "1px solid rgba(30,129,206,0.22)",
                    borderRadius: "20px",
                    backgroundColor: "#0d1117",
                    overflow: "hidden",
                    boxShadow: "0 20px 50px rgba(0,0,0,0.5), 0 0 40px rgba(30,129,206,0.08)",
                    zIndex: 3,
                    marginBottom: "80px",
                  }}
                >
                  {/* Top accent */}
                  <div
                    className="absolute top-0 left-0 right-0 h-px"
                    style={{ background: "linear-gradient(to right, transparent 10%, rgba(30,129,206,0.5) 50%, transparent 90%)" }}
                  />
                  <div style={{ height: "300px" }}>
                    <AdmissionsAgentMockup />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Trust / Capabilities strip ── */}
      <section className="py-20 px-6 border-t border-zinc-800/40">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ backgroundColor: "#1c1c21" }}>
            {[
              {
                icon: ShieldCheck,
                title: "Enterprise-grade security",
                desc: "Role-based access, end-to-end encryption, audit logs, and data residency compliance for every agent interaction.",
              },
              {
                icon: Plug,
                title: "Integrates with your stack",
                desc: "Connects to SAP, Oracle ERP, Moodle, Canvas, Microsoft 365, Google Workspace, and custom REST APIs via open connectors.",
              },
              {
                icon: ArrowsOut,
                title: "Scales with your campus",
                desc: "From 500 students to 100,000 — infrastructure auto-scales with zero latency degradation during peak enrolment seasons.",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex flex-col gap-4 p-8"
                style={{ backgroundColor: "#09090B" }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: "rgba(30,129,206,0.12)", border: "1px solid rgba(30,129,206,0.2)" }}
                >
                  <Icon className="w-5 h-5" weight="duotone" style={{ color: "#1e81ce" }} />
                </div>
                <h3 className="text-white font-semibold text-base tracking-tight">{title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-2xl p-12 flex flex-col md:flex-row items-center justify-between gap-8"
            style={{
              background: "linear-gradient(135deg, rgba(30,129,206,0.12) 0%, rgba(14,93,158,0.06) 100%)",
              border: "1px solid rgba(30,129,206,0.25)",
              boxShadow: "0 0 60px rgba(30,129,206,0.08)",
            }}
          >
            <div className="max-w-lg">
              <div className="flex items-center gap-2 mb-4">
                <Lightning className="w-4 h-4" weight="fill" style={{ color: "#1e81ce" }} />
                <span className="text-zinc-400 text-sm">Ready to deploy</span>
              </div>
              <h2
                className="text-3xl md:text-4xl font-semibold text-white tracking-tight text-balance"
                style={{ letterSpacing: "-0.033em" }}
              >
                Deploy all 8 agents in under a week
              </h2>
              <p className="mt-3 text-zinc-400 text-sm leading-relaxed">
                Our implementation team handles ERP integration, knowledge base setup, and agent
                configuration — so your university is live within days, not months.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
              <button
                className="w-full sm:w-auto px-6 py-3 border text-white font-medium rounded-lg hover:bg-zinc-800 transition-colors text-sm"
                style={{ borderColor: "rgba(30,129,206,0.35)" }}
              >
                Book AI Consultation
              </button>
              <button
                className="w-full sm:w-auto px-6 py-3 text-white font-semibold rounded-lg transition-all text-sm flex items-center justify-center gap-2"
                style={{
                  background: "linear-gradient(135deg, #1e81ce 0%, #0e5d9e 100%)",
                  boxShadow: "0 0 20px rgba(30,129,206,0.4)",
                }}
              >
                Request Live Demo
                <ArrowRight className="w-4 h-4" weight="bold" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
