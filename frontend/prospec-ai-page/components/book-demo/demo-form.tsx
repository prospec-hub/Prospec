"use client"

import { useMemo, useState } from "react"
import { motion } from "framer-motion"
import { Check, CheckCircle2, Circle, ChevronDown, CalendarCheck } from "lucide-react"
import {
  institutionTypes, designations, studentCounts, timeSlots,
  interestModules, meetingModes, successSteps,
} from "@/lib/book-demo-data"

interface FormState {
  institutionName: string
  institutionType: string
  fullName: string
  designation: string
  email: string
  phone: string
  country: string
  studentCount: string
  erp: string
  interests: string[]
  challenges: string
  date: string
  time: string
  mode: string
}

const initialState: FormState = {
  institutionName: "", institutionType: "", fullName: "", designation: "",
  email: "", phone: "", country: "", studentCount: "", erp: "",
  interests: [], challenges: "", date: "", time: "", mode: "",
}

// 4 logical steps, each with the required fields it owns
const steps = [
  { label: "Institution Details", fields: ["institutionName", "institutionType"] as (keyof FormState)[] },
  { label: "Your Details", fields: ["fullName", "designation", "email", "phone", "country"] as (keyof FormState)[] },
  { label: "Requirements", fields: ["studentCount", "interests"] as (keyof FormState)[] },
  { label: "Scheduling", fields: ["date", "time", "mode"] as (keyof FormState)[] },
]

function fieldFilled(state: FormState, key: keyof FormState) {
  const v = state[key]
  return Array.isArray(v) ? v.length > 0 : v.trim() !== ""
}

export function DemoForm() {
  const [state, setState] = useState<FormState>(initialState)
  const [submitted, setSubmitted] = useState(false)

  const set = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setState((s) => ({ ...s, [key]: value }))

  const toggleInterest = (id: string) =>
    setState((s) => ({
      ...s,
      interests: s.interests.includes(id) ? s.interests.filter((x) => x !== id) : [...s.interests, id],
    }))

  const { progress, currentStep } = useMemo(() => {
    const allRequired = steps.flatMap((st) => st.fields)
    const filled = allRequired.filter((f) => fieldFilled(state, f)).length
    const pct = Math.round((filled / allRequired.length) * 100)
    const idx = steps.findIndex((st) => st.fields.some((f) => !fieldFilled(state, f)))
    return { progress: pct, currentStep: idx === -1 ? steps.length - 1 : idx }
  }, [state])

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="demo-form" className="relative py-24 bg-[#f4f6fb] dark:bg-[#09090B] transition-colors scroll-mt-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-5"
          >
            <div className="w-2 h-2 rounded-full bg-blue-500" />
            <span className="text-muted-foreground text-sm">Demo Request Form</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl text-foreground text-balance"
            style={{ letterSpacing: "-0.03em", fontWeight: 600, lineHeight: 1.1 }}
          >
            Schedule Your Personalized Demonstration
          </motion.h2>
        </div>

        {submitted ? (
          <SuccessScreen name={state.fullName} interests={state.interests} />
        ) : (
          <div className="grid lg:grid-cols-[1fr_360px] gap-6 items-start">
            {/* FORM */}
            <form
              onSubmit={onSubmit}
              className="rounded-2xl border border-border/60 bg-white/50 dark:bg-zinc-900/40 backdrop-blur-sm p-6 sm:p-8 space-y-6"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Institution Name" required>
                  <input className={inputCls} value={state.institutionName} onChange={(e) => set("institutionName", e.target.value)} placeholder="e.g. National University" />
                </Field>
                <Field label="Institution Type" required>
                  <Select value={state.institutionType} onChange={(v) => set("institutionType", v)} options={institutionTypes} placeholder="Select type" />
                </Field>
                <Field label="Full Name" required>
                  <input className={inputCls} value={state.fullName} onChange={(e) => set("fullName", e.target.value)} placeholder="Your name" />
                </Field>
                <Field label="Designation" required>
                  <Select value={state.designation} onChange={(v) => set("designation", v)} options={designations} placeholder="Select designation" />
                </Field>
                <Field label="Official Email" required>
                  <input type="email" className={inputCls} value={state.email} onChange={(e) => set("email", e.target.value)} placeholder="you@university.edu" />
                </Field>
                <Field label="Phone Number" required>
                  <input className={inputCls} value={state.phone} onChange={(e) => set("phone", e.target.value)} placeholder="+1 555 000 0000" />
                </Field>
                <Field label="Country" required>
                  <input className={inputCls} value={state.country} onChange={(e) => set("country", e.target.value)} placeholder="Country" />
                </Field>
                <Field label="Number of Students" required>
                  <Select value={state.studentCount} onChange={(v) => set("studentCount", v)} options={studentCounts} placeholder="Select range" />
                </Field>
              </div>

              <Field label="Current ERP / Student Information System">
                <input className={inputCls} value={state.erp} onChange={(e) => set("erp", e.target.value)} placeholder="e.g. SAP, custom ERP, none" />
              </Field>

              {/* Interests */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-3">Areas of Interest</label>
                <div className="flex flex-wrap gap-2">
                  {interestModules.map((m) => {
                    const Icon = m.icon
                    const active = state.interests.includes(m.id)
                    return (
                      <button
                        type="button"
                        key={m.id}
                        onClick={() => toggleInterest(m.id)}
                        className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
                          active
                            ? "border-blue-500/50 bg-blue-500/10 text-foreground"
                            : "border-border/60 bg-white/40 dark:bg-zinc-800/40 text-muted-foreground hover:border-border hover:text-foreground"
                        }`}
                      >
                        <Icon className={`w-3.5 h-3.5 ${active ? m.accent : ""}`} />
                        {m.label}
                        {active && <Check className="w-3 h-3 text-blue-400" />}
                      </button>
                    )
                  })}
                </div>
              </div>

              <Field label="Current Challenges">
                <textarea
                  rows={4}
                  className={`${inputCls} resize-none`}
                  value={state.challenges}
                  onChange={(e) => set("challenges", e.target.value)}
                  placeholder="Tell us about your current operational challenges or digital transformation objectives."
                />
              </Field>

              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Preferred Meeting Date" required>
                  <input type="date" className={inputCls} value={state.date} onChange={(e) => set("date", e.target.value)} />
                </Field>
                <Field label="Preferred Time" required>
                  <Select value={state.time} onChange={(v) => set("time", v)} options={timeSlots} placeholder="Select a slot" />
                </Field>
              </div>

              {/* Meeting mode cards */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-3">Preferred Meeting Mode</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {meetingModes.map((m) => {
                    const Icon = m.icon
                    const active = state.mode === m.id
                    return (
                      <button
                        type="button"
                        key={m.id}
                        onClick={() => set("mode", m.id)}
                        className={`flex flex-col items-center gap-2 rounded-xl border px-3 py-4 transition-colors ${
                          active
                            ? "border-blue-500/50 bg-blue-500/10"
                            : "border-border/60 bg-white/40 dark:bg-zinc-800/40 hover:border-border"
                        }`}
                      >
                        <Icon className={`w-5 h-5 ${active ? "text-blue-400" : "text-muted-foreground"}`} />
                        <span className={`text-[11px] font-medium text-center leading-tight ${active ? "text-foreground" : "text-muted-foreground"}`}>
                          {m.label}
                        </span>
                      </button>
                    )
                  })}
                </div>
              </div>

              <div className="pt-2">
                <button type="submit" className="w-full sm:w-auto px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors text-sm">
                  Schedule My Demo
                </button>
                <p className="mt-3 text-xs text-muted-foreground">
                  A Prospec Solutions Consultant will contact you within one business day.
                </p>
              </div>
            </form>

            {/* RIGHT PANEL — progress + live module viz */}
            <div className="lg:sticky lg:top-28 space-y-4">
              <div className="rounded-2xl border border-border/60 bg-white/50 dark:bg-zinc-900/40 backdrop-blur-sm p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-blue-400">
                    Step {currentStep + 1} of {steps.length}
                  </span>
                  <span className="text-xs text-muted-foreground tabular-nums">{progress}%</span>
                </div>
                <div className="text-sm font-semibold text-foreground mb-4">{steps[currentStep].label}</div>
                <div className="h-2 rounded-full bg-border/70 overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-blue-500 to-violet-500"
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  />
                </div>
                <div className="flex gap-1.5 mt-4">
                  {steps.map((st, i) => (
                    <div
                      key={st.label}
                      className={`h-1 flex-1 rounded-full transition-colors ${i <= currentStep ? "bg-blue-500" : "bg-border/70"}`}
                    />
                  ))}
                </div>
              </div>

              {/* Live module visualization */}
              <div className="rounded-2xl border border-border/60 bg-white/50 dark:bg-zinc-900/40 backdrop-blur-sm p-6">
                <div className="text-xs uppercase tracking-wider text-muted-foreground mb-4">Your Tailored Demo</div>
                <div className="grid grid-cols-2 gap-2">
                  {interestModules.map((m) => {
                    const Icon = m.icon
                    const active = state.interests.includes(m.id)
                    return (
                      <motion.div
                        key={m.id}
                        animate={active ? { scale: [1, 1.05, 1] } : { scale: 1 }}
                        transition={{ duration: 0.4 }}
                        className={`flex items-center gap-2 rounded-lg border px-2.5 py-2 transition-colors ${
                          active
                            ? "border-blue-500/50 bg-blue-500/10"
                            : "border-border/50 bg-white/30 dark:bg-zinc-800/30 opacity-60"
                        }`}
                      >
                        <Icon className={`w-3.5 h-3.5 shrink-0 ${active ? m.accent : "text-muted-foreground"}`} />
                        <span className={`text-[10px] font-medium truncate ${active ? "text-foreground" : "text-muted-foreground"}`}>
                          {m.label}
                        </span>
                      </motion.div>
                    )
                  })}
                </div>
                <div className="mt-4 text-[11px] text-muted-foreground text-center">
                  {state.interests.length === 0
                    ? "Select areas of interest to tailor your session"
                    : `${state.interests.length} module${state.interests.length > 1 ? "s" : ""} added to your demo`}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

const inputCls =
  "w-full px-3.5 py-2.5 rounded-lg border border-border bg-white/70 dark:bg-zinc-800/60 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none focus:border-blue-500/50 transition-colors"

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-sm font-medium text-foreground mb-1.5">
        {label} {required && <span className="text-blue-400">*</span>}
      </span>
      {children}
    </label>
  )
}

function Select({ value, onChange, options, placeholder }: { value: string; onChange: (v: string) => void; options: string[]; placeholder: string }) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`${inputCls} appearance-none pr-9 ${value === "" ? "text-muted-foreground/60" : ""}`}
      >
        <option value="" disabled>{placeholder}</option>
        {options.map((o) => (
          <option key={o} value={o} className="text-foreground">{o}</option>
        ))}
      </select>
      <ChevronDown className="w-4 h-4 text-muted-foreground absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
    </div>
  )
}

function SuccessScreen({ name, interests }: { name: string; interests: string[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-2xl mx-auto rounded-3xl border border-blue-500/30 bg-gradient-to-b from-blue-500/[0.08] to-transparent dark:from-blue-600/15 p-8 sm:p-10 text-center"
    >
      <div className="w-16 h-16 rounded-2xl bg-blue-500/15 flex items-center justify-center mx-auto mb-6">
        <CalendarCheck className="w-8 h-8 text-blue-400" />
      </div>
      <h3 className="text-2xl sm:text-3xl font-semibold text-foreground tracking-tight">
        Thank you{name ? `, ${name.split(" ")[0]}` : ""}!
      </h3>
      <p className="mt-3 text-muted-foreground max-w-md mx-auto leading-relaxed text-sm">
        Your demo request has been received. A Prospec Solutions Consultant will reach out within one business day to
        confirm your session{interests.length ? ` covering ${interests.length} focus area${interests.length > 1 ? "s" : ""}` : ""}.
      </p>

      <div className="mt-8 text-left max-w-sm mx-auto space-y-3">
        {successSteps.map((step, i) => (
          <motion.div
            key={step.label}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 + i * 0.15 }}
            className="flex items-center gap-3"
          >
            {step.done ? (
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
            ) : (
              <Circle className="w-5 h-5 text-muted-foreground/40 shrink-0" />
            )}
            <span className={`text-sm ${step.done ? "text-foreground font-medium" : "text-muted-foreground"}`}>
              {step.label}
            </span>
            {step.done && <span className="ml-auto text-[10px] text-emerald-400 font-medium">Done</span>}
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
