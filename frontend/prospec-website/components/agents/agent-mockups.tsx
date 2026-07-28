"use client"

import { motion } from "framer-motion"
import {
  MagnifyingGlass,
  Check,
  CaretRight,
  ChatCircle,
  FileText,
  Sparkle,
  ChartBar,
  Books,
  Users,
  ArrowRight,
  SealCheck,
  ClockCountdown,
  Funnel,
  GraduationCap,
  CurrencyDollar,
  CalendarBlank,
} from "@phosphor-icons/react"

/* ─── Admissions Agent Mockup ─── */
export function AdmissionsAgentMockup() {
  const steps = [
    { label: "Application Received", done: true },
    { label: "Documents Verified", done: true },
    { label: "Eligibility Checked", done: true },
    { label: "Offer Letter Sent", done: false, active: true },
    { label: "Counseling Scheduled", done: false },
  ]
  return (
    <div className="w-full h-full flex flex-col p-5 gap-3">
      <div className="flex items-center gap-2 mb-1">
        <div className="w-6 h-6 rounded-md flex items-center justify-center" style={{ backgroundColor: "rgba(30,129,206,0.15)" }}>
          <GraduationCap className="w-3.5 h-3.5" weight="duotone" style={{ color: "#3ba3f5" }} />
        </div>
        <span className="text-zinc-300 text-xs font-semibold tracking-tight">Admissions AI</span>
        <span className="ml-auto text-[10px] px-2 py-0.5 rounded-full font-medium" style={{ backgroundColor: "rgba(34,197,94,0.15)", color: "#22c55e" }}>Live</span>
      </div>

      <div className="bg-zinc-800/40 rounded-lg p-3 text-xs text-zinc-400 border border-zinc-700/30">
        <span className="text-zinc-500">Application</span>{" "}
        <span className="font-mono" style={{ color: "#3ba3f5" }}>#APP-2043</span>
        {" · "}B.Tech Computer Science
      </div>

      <div className="flex flex-col gap-1.5">
        {steps.map((step, i) => (
          <div key={step.label} className="flex items-center gap-2.5">
            <div
              className="w-4 h-4 rounded-full border flex items-center justify-center shrink-0 transition-all"
              style={
                step.done
                  ? { backgroundColor: "#22c55e", borderColor: "#22c55e" }
                  : step.active
                  ? { borderColor: "#1e81ce", backgroundColor: "rgba(30,129,206,0.2)" }
                  : { borderColor: "#3f3f46" }
              }
            >
              {step.done && <Check className="w-2.5 h-2.5 text-white" weight="bold" />}
              {step.active && <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: "#1e81ce" }} />}
            </div>
            <span
              className="text-xs"
              style={{ color: step.done ? "#71717a" : step.active ? "#e4e4e7" : "#52525b" }}
            >
              {step.label}
            </span>
            {step.active && (
              <span className="ml-auto text-[10px]" style={{ color: "#1e81ce" }}>Processing…</span>
            )}
          </div>
        ))}
      </div>

      <div
        className="mt-auto rounded-lg p-3 border flex items-center gap-2 text-xs"
        style={{ backgroundColor: "rgba(30,129,206,0.08)", borderColor: "rgba(30,129,206,0.25)" }}
      >
        <Sparkle className="w-3.5 h-3.5 shrink-0" weight="duotone" style={{ color: "#3ba3f5" }} />
        <span className="text-zinc-400">AI processed <span className="text-white font-medium">847</span> applications today</span>
      </div>
    </div>
  )
}

/* ─── Student Support Agent Mockup ─── */
export function StudentSupportMockup() {
  const messages = [
    { from: "student", text: "When is the fee deadline for Semester 4?" },
    { from: "ai", text: "The last date to pay Semester 4 fees is June 30, 2025. Online payment is available via the student portal." },
    { from: "student", text: "How do I apply for a scholarship?" },
  ]
  return (
    <div className="w-full h-full flex flex-col p-5 gap-3">
      <div className="flex items-center gap-2 mb-1">
        <div className="w-6 h-6 rounded-md flex items-center justify-center" style={{ backgroundColor: "rgba(30,129,206,0.15)" }}>
          <ChatCircle className="w-3.5 h-3.5" weight="duotone" style={{ color: "#3ba3f5" }} />
        </div>
        <span className="text-zinc-300 text-xs font-semibold tracking-tight">Student Support AI</span>
        <span className="ml-auto flex items-center gap-1 text-[10px]" style={{ color: "#22c55e" }}>
          <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
          Online 24/7
        </span>
      </div>
      <div className="flex-1 flex flex-col gap-2 overflow-hidden">
        {messages.map((msg, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + i * 0.2 }}
            className={`flex ${msg.from === "student" ? "justify-end" : "justify-start"}`}
          >
            <div
              className="rounded-xl px-3 py-2 text-xs max-w-[85%] leading-relaxed"
              style={
                msg.from === "student"
                  ? { backgroundColor: "rgba(30,129,206,0.2)", color: "#e4e4e7", borderRadius: "12px 12px 4px 12px" }
                  : { backgroundColor: "#1c1c21", color: "#a1a1aa", borderRadius: "12px 12px 12px 4px", border: "1px solid #27272a" }
              }
            >
              {msg.text}
            </div>
          </motion.div>
        ))}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="flex justify-start"
        >
          <div className="flex items-center gap-1 px-3 py-2 rounded-xl" style={{ backgroundColor: "#1c1c21", border: "1px solid #27272a" }}>
            {[0, 1, 2].map(i => (
              <motion.div
                key={i}
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: "#3ba3f5" }}
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

/* ─── Faculty AI Mockup ─── */
export function FacultyAIMockup() {
  const docs = [
    { icon: FileText, label: "Lesson Plan — Unit 3", status: "Generated", color: "#22c55e" },
    { icon: FileText, label: "Question Paper — Mid Sem", status: "Generating…", color: "#1e81ce" },
    { icon: FileText, label: "CO-PO Mapping Report", status: "Queued", color: "#71717a" },
  ]
  return (
    <div className="w-full h-full flex flex-col p-5 gap-3">
      <div className="flex items-center gap-2 mb-1">
        <div className="w-6 h-6 rounded-md flex items-center justify-center" style={{ backgroundColor: "rgba(30,129,206,0.15)" }}>
          <Books className="w-3.5 h-3.5" weight="duotone" style={{ color: "#3ba3f5" }} />
        </div>
        <span className="text-zinc-300 text-xs font-semibold tracking-tight">Faculty AI</span>
      </div>

      <div className="bg-zinc-800/40 rounded-lg px-3 py-2 text-xs border border-zinc-700/30 flex items-center gap-2">
        <span className="text-zinc-600">Generate for</span>
        <span className="text-zinc-300 font-medium">Data Structures · Semester 3</span>
      </div>

      <div className="flex flex-col gap-2">
        {docs.map(({ icon: Icon, label, status, color }) => (
          <div
            key={label}
            className="flex items-center gap-2.5 rounded-lg p-2.5 border"
            style={{ backgroundColor: "#0d1117", borderColor: "#1c1c21" }}
          >
            <div className="w-7 h-7 rounded-md flex items-center justify-center shrink-0" style={{ backgroundColor: "rgba(30,129,206,0.1)" }}>
              <Icon className="w-4 h-4" weight="duotone" style={{ color: "#3ba3f5" }} />
            </div>
            <span className="text-zinc-300 text-xs flex-1 leading-tight">{label}</span>
            <span className="text-[10px] font-medium shrink-0" style={{ color }}>{status}</span>
          </div>
        ))}
      </div>

      <div className="mt-auto grid grid-cols-3 gap-2">
        {["Rubrics", "Attendance", "Analytics"].map(tag => (
          <div
            key={tag}
            className="rounded-lg py-1.5 text-center text-[10px] font-medium border"
            style={{ backgroundColor: "rgba(30,129,206,0.06)", borderColor: "rgba(30,129,206,0.2)", color: "#71717a" }}
          >
            {tag}
          </div>
        ))}
      </div>
    </div>
  )
}

/* ─── Administration Agent Mockup ─── */
export function AdministrationMockup() {
  const tasks = [
    { label: "Timetable Generated", count: "142 slots", icon: CalendarBlank, done: true },
    { label: "NOC Approvals", count: "23 pending", icon: SealCheck, done: false, urgent: true },
    { label: "Staff Leave Requests", count: "8 queued", icon: Users, done: false },
    { label: "Circular Published", count: "Just now", icon: FileText, done: true },
  ]
  return (
    <div className="w-full h-full flex flex-col p-5 gap-3">
      <div className="flex items-center gap-2 mb-1">
        <div className="w-6 h-6 rounded-md flex items-center justify-center" style={{ backgroundColor: "rgba(30,129,206,0.15)" }}>
          <Funnel className="w-3.5 h-3.5" weight="duotone" style={{ color: "#3ba3f5" }} />
        </div>
        <span className="text-zinc-300 text-xs font-semibold tracking-tight">Administration AI</span>
        <span className="ml-auto text-[10px] font-mono text-zinc-500">Today</span>
      </div>
      <div className="flex flex-col gap-2">
        {tasks.map(({ label, count, icon: Icon, done, urgent }) => (
          <div
            key={label}
            className="flex items-center gap-2.5 rounded-lg p-2.5 border transition-all"
            style={{
              backgroundColor: urgent ? "rgba(239,68,68,0.04)" : "#0d1117",
              borderColor: urgent ? "rgba(239,68,68,0.2)" : "#1c1c21",
            }}
          >
            <div
              className="w-7 h-7 rounded-md flex items-center justify-center shrink-0"
              style={{ backgroundColor: done ? "rgba(34,197,94,0.1)" : urgent ? "rgba(239,68,68,0.1)" : "rgba(30,129,206,0.1)" }}
            >
              <Icon className="w-4 h-4" weight="duotone" style={{ color: done ? "#22c55e" : urgent ? "#ef4444" : "#3ba3f5" }} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-zinc-300 text-xs leading-tight">{label}</p>
              <p className="text-zinc-600 text-[10px] mt-0.5">{count}</p>
            </div>
            {done && <Check className="w-3.5 h-3.5 shrink-0" weight="bold" style={{ color: "#22c55e" }} />}
            {urgent && <span className="text-[10px] font-medium shrink-0" style={{ color: "#ef4444" }}>Urgent</span>}
          </div>
        ))}
      </div>
    </div>
  )
}

/* ─── Analytics Agent Mockup ─── */
export function AnalyticsMockup() {
  const bars = [22, 38, 29, 45, 36, 52, 44, 60, 48, 55, 42, 65]
  return (
    <div className="w-full h-full flex flex-col p-5 gap-3">
      <div className="flex items-center gap-2 mb-1">
        <div className="w-6 h-6 rounded-md flex items-center justify-center" style={{ backgroundColor: "rgba(30,129,206,0.15)" }}>
          <ChartBar className="w-3.5 h-3.5" weight="duotone" style={{ color: "#3ba3f5" }} />
        </div>
        <span className="text-zinc-300 text-xs font-semibold tracking-tight">Analytics AI</span>
      </div>
      <div className="grid grid-cols-3 gap-2 mb-1">
        {[
          { label: "Retention", value: "91.4%", up: true },
          { label: "Placements", value: "88.7%", up: true },
          { label: "At-Risk", value: "47 students", up: false },
        ].map(({ label, value, up }) => (
          <div key={label} className="rounded-lg p-2 text-center border" style={{ backgroundColor: "#0d1117", borderColor: "#1c1c21" }}>
            <p className="text-white text-xs font-semibold">{value}</p>
            <p className="text-zinc-600 text-[9px] mt-0.5">{label}</p>
          </div>
        ))}
      </div>
      <div className="flex-1 flex items-end gap-1 px-1">
        {bars.map((h, i) => (
          <motion.div
            key={i}
            className="flex-1 rounded-sm"
            style={{ backgroundColor: i === bars.length - 1 ? "#1e81ce" : "rgba(30,129,206,0.25)" }}
            initial={{ height: 0 }}
            animate={{ height: `${h}%` }}
            transition={{ duration: 0.6, delay: 0.1 + i * 0.05, ease: [0.22, 1, 0.36, 1] }}
          />
        ))}
      </div>
      <div className="flex items-center justify-between text-[10px] text-zinc-600 px-1">
        <span>Jan</span><span>Jun</span><span>Dec</span>
      </div>
    </div>
  )
}

/* ─── Knowledge AI Mockup ─── */
export function KnowledgeMockup() {
  const results = [
    { title: "NAAC Self Study Report 2024", type: "Accreditation", pages: "342 pages" },
    { title: "UGC Guidelines — Semester System", type: "Regulation", pages: "48 pages" },
    { title: "Hostel Allotment Policy", type: "Policy", pages: "12 pages" },
  ]
  return (
    <div className="w-full h-full flex flex-col p-5 gap-3">
      <div className="flex items-center gap-2 mb-1">
        <div className="w-6 h-6 rounded-md flex items-center justify-center" style={{ backgroundColor: "rgba(30,129,206,0.15)" }}>
          <MagnifyingGlass className="w-3.5 h-3.5" weight="bold" style={{ color: "#3ba3f5" }} />
        </div>
        <span className="text-zinc-300 text-xs font-semibold tracking-tight">Knowledge AI</span>
      </div>
      <div className="flex items-center gap-2 bg-zinc-800/40 rounded-lg px-3 py-2 border border-zinc-700/30">
        <MagnifyingGlass className="w-3 h-3 text-zinc-500" weight="bold" />
        <span className="text-zinc-500 text-xs italic">What is the exam re-appear policy?</span>
      </div>
      <div className="flex items-center gap-1.5 text-[10px] text-zinc-500">
        <Sparkle className="w-3 h-3" weight="duotone" style={{ color: "#3ba3f5" }} />
        Found <span className="text-white font-medium mx-1">3 documents</span> across the knowledge base
      </div>
      <div className="flex flex-col gap-2">
        {results.map(({ title, type, pages }) => (
          <div
            key={title}
            className="rounded-lg p-2.5 border flex items-start gap-2 group cursor-pointer hover:border-zinc-600 transition-colors"
            style={{ backgroundColor: "#0d1117", borderColor: "#1c1c21" }}
          >
            <FileText className="w-4 h-4 shrink-0 mt-0.5" weight="duotone" style={{ color: "#3ba3f5" }} />
            <div className="flex-1 min-w-0">
              <p className="text-zinc-300 text-xs leading-tight truncate">{title}</p>
              <p className="text-zinc-600 text-[10px] mt-0.5">{type} · {pages}</p>
            </div>
            <CaretRight className="w-3 h-3 text-zinc-600 shrink-0 mt-0.5 group-hover:text-zinc-400 transition-colors" weight="bold" />
          </div>
        ))}
      </div>
    </div>
  )
}

/* ─── Finance Agent Mockup ─── */
export function FinanceMockup() {
  return (
    <div className="w-full h-full flex flex-col p-5 gap-3">
      <div className="flex items-center gap-2 mb-1">
        <div className="w-6 h-6 rounded-md flex items-center justify-center" style={{ backgroundColor: "rgba(30,129,206,0.15)" }}>
          <CurrencyDollar className="w-3.5 h-3.5" weight="duotone" style={{ color: "#3ba3f5" }} />
        </div>
        <span className="text-zinc-300 text-xs font-semibold tracking-tight">Finance AI</span>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {[
          { label: "Fees Collected", value: "₹4.2 Cr", sub: "This month", color: "#22c55e" },
          { label: "Pending Dues", value: "₹38.4 L", sub: "142 students", color: "#f59e0b" },
          { label: "Scholarships", value: "₹12.1 L", sub: "Disbursed", color: "#3ba3f5" },
          { label: "Defaulters", value: "23", sub: "Auto-notified", color: "#ef4444" },
        ].map(({ label, value, sub, color }) => (
          <div key={label} className="rounded-lg p-2.5 border" style={{ backgroundColor: "#0d1117", borderColor: "#1c1c21" }}>
            <p className="text-xs font-semibold" style={{ color }}>{value}</p>
            <p className="text-zinc-300 text-[10px] mt-0.5">{label}</p>
            <p className="text-zinc-600 text-[9px]">{sub}</p>
          </div>
        ))}
      </div>
      <div
        className="mt-auto rounded-lg p-2.5 border flex items-center gap-2 text-xs"
        style={{ backgroundColor: "rgba(30,129,206,0.06)", borderColor: "rgba(30,129,206,0.2)" }}
      >
        <ClockCountdown className="w-3.5 h-3.5 shrink-0" weight="duotone" style={{ color: "#3ba3f5" }} />
        <span className="text-zinc-400">Deadline reminders sent to <span className="text-white">23 students</span></span>
      </div>
    </div>
  )
}
