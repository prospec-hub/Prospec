"use client"

import { motion } from "framer-motion"
import { Sparkle, DownloadSimple, GraduationCap, Books, Check } from "@phosphor-icons/react"

const cardBase = "bg-white border rounded-3xl p-6"
const cardStyle = { borderColor: "#E2E8F0", boxShadow: "0 1px 3px rgba(15,23,42,0.05)" }

function StatRow({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className="flex items-center justify-between py-2">
      <span className="text-sm text-slate-500">{label}</span>
      <span className="text-sm font-semibold" style={{ color: accent ? "#1e81ce" : "#0F172A" }}>{value}</span>
    </div>
  )
}

export function ProductPreview() {
  return (
    <section className="px-6 py-24 md:py-32" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-14">
          <p className="text-sm font-medium tracking-wide uppercase mb-3" style={{ color: "#1e81ce" }}>
            See it in action
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight leading-[1.1]">
            Real answers, real automation
          </h2>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed">
            Every query resolved from live university data—instantly, accurately, around the clock.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* AI Chat widget (spans 1) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className={cardBase} style={cardStyle}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(135deg,#1e81ce,#0e5d9e)" }}>
                <Sparkle className="w-4 h-4 text-white" weight="fill" />
              </div>
              <span className="text-sm font-semibold text-slate-900">Student AI Chat</span>
              <span className="ml-auto flex items-center gap-1.5 text-[11px] text-slate-400">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" /> Online
              </span>
            </div>

            <div className="flex justify-end mb-3">
              <div className="px-3.5 py-2 rounded-2xl rounded-br-sm text-sm text-white max-w-[80%]" style={{ backgroundColor: "#1e81ce" }}>
                When is my exam?
              </div>
            </div>
            <div className="flex justify-start">
              <div className="px-3.5 py-3 rounded-2xl rounded-bl-sm text-sm bg-slate-50 border w-full" style={{ borderColor: "#E2E8F0" }}>
                <p className="text-slate-700 mb-2">Here are your semester exam details:</p>
                <div className="divide-y" style={{ borderColor: "#F1F5F9" }}>
                  <StatRow label="Semester Exam" value="12 August" />
                  <StatRow label="Room" value="A-304" />
                  <StatRow label="Seat Number" value="1024" />
                  <StatRow label="Attendance" value="89%" accent />
                </div>
                <button className="mt-3 w-full flex items-center justify-center gap-2 text-sm font-medium py-2 rounded-lg text-white" style={{ background: "linear-gradient(135deg,#1e81ce,#0e5d9e)" }}>
                  <DownloadSimple className="w-4 h-4" weight="bold" /> Download Hall Ticket
                </button>
              </div>
            </div>
          </motion.div>

          {/* Admissions widget */}
          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className={`${cardBase} flex flex-col`} style={cardStyle}
          >
            <div className="flex items-center gap-2 mb-5">
              <GraduationCap className="w-5 h-5" weight="duotone" style={{ color: "#1e81ce" }} />
              <span className="text-sm font-semibold text-slate-900">Admissions</span>
              <span className="ml-auto flex items-center gap-1.5 text-[11px] font-medium px-2 py-0.5 rounded-full" style={{ backgroundColor: "rgba(34,197,94,0.1)", color: "#16a34a" }}>
                <span className="w-1.5 h-1.5 rounded-full bg-green-500" /> Live
              </span>
            </div>
            <div className="text-center py-4">
              <div className="text-5xl font-semibold tracking-tight text-slate-900">642</div>
              <div className="text-sm text-slate-500 mt-1">Applications Today</div>
            </div>
            <div className="mt-auto grid grid-cols-2 gap-3">
              <div className="rounded-2xl p-4 text-center" style={{ backgroundColor: "rgba(30,129,206,0.06)" }}>
                <div className="text-2xl font-semibold" style={{ color: "#1e81ce" }}>588</div>
                <div className="text-xs text-slate-500 mt-0.5">AI Resolved</div>
              </div>
              <div className="rounded-2xl p-4 text-center bg-slate-50">
                <div className="text-2xl font-semibold text-slate-900">54</div>
                <div className="text-xs text-slate-500 mt-0.5">Pending</div>
              </div>
            </div>
          </motion.div>

          {/* Faculty widget */}
          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.16 }}
            className={`${cardBase} flex flex-col`} style={cardStyle}
          >
            <div className="flex items-center gap-2 mb-5">
              <Books className="w-5 h-5" weight="duotone" style={{ color: "#1e81ce" }} />
              <span className="text-sm font-semibold text-slate-900">Faculty AI</span>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center text-center py-4">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4" style={{ backgroundColor: "rgba(30,129,206,0.1)" }}>
                <Check className="w-7 h-7" weight="bold" style={{ color: "#1e81ce" }} />
              </div>
              <div className="text-sm text-slate-500">Question Papers Generated</div>
              <div className="text-4xl font-semibold tracking-tight text-slate-900 mt-1">127 <span className="text-lg text-slate-400 font-normal">today</span></div>
            </div>
            <div className="mt-auto space-y-2">
              {["CO-PO mapping attached", "Bloom's taxonomy tagged", "Answer key generated"].map((t) => (
                <div key={t} className="flex items-center gap-2 text-sm text-slate-600">
                  <Check className="w-4 h-4 shrink-0" weight="bold" style={{ color: "#16a34a" }} />
                  {t}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
