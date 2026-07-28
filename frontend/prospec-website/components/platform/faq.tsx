"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus } from "@phosphor-icons/react"

const faqs = [
  { q: "Can PROSPEC AI integrate with our existing ERP?", a: "Yes. PROSPEC connects to SAP, Oracle, and custom university ERPs — as well as LMS, HRMS, finance and library systems — through open connectors and REST APIs. No rip-and-replace required." },
  { q: "Is our student data secure?", a: "Absolutely. Data is encrypted end-to-end, isolated per institution, governed by role-based access, and every AI action is captured in a tamper-evident audit log." },
  { q: "Cloud or on-premise?", a: "Both. Deploy on our secure managed cloud or entirely within your own infrastructure, depending on your data-residency and IT policies." },
  { q: "How long does implementation take?", a: "A typical rollout goes live in about six weeks through our structured Discovery → Knowledge Upload → Integration → Testing → Training → Go-Live process." },
  { q: "Can the AI learn our own documents?", a: "Yes. PROSPEC indexes your policies, circulars, NAAC/NBA reports, regulations and ERP data into a private institutional knowledge base the AI answers from." },
  { q: "How many users can it support?", a: "The platform scales from a few hundred to well over 100,000 students and staff, with no latency degradation during peak enrolment or exam seasons." },
  { q: "Is AI usage unlimited?", a: "Enterprise plans include unlimited AI usage across all connected departments — there are no per-query charges." },
  { q: "What does pricing look like?", a: "Pricing is tailored to your institution's size, deployment model and selected modules. Book a consultation and we'll scope a proposal for you." },
]

function Item({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(index === 0)
  return (
    <div className="border rounded-2xl overflow-hidden bg-white" style={{ borderColor: "#E2E8F0" }}>
      <button onClick={() => setOpen((o) => !o)} className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left">
        <span className="text-base font-medium text-slate-900">{q}</span>
        <span className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all" style={{ backgroundColor: open ? "#1e81ce" : "rgba(30,129,206,0.1)" }}>
          <Plus className="w-4 h-4 transition-transform duration-300" weight="bold" style={{ color: open ? "#fff" : "#1e81ce", transform: open ? "rotate(45deg)" : "none" }} />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <p className="px-6 pb-5 text-sm text-slate-600 leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function FAQ() {
  return (
    <section id="faq" className="px-6 py-24 md:py-32" style={{ backgroundColor: "#F8FAFC" }}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-medium tracking-wide uppercase mb-3" style={{ color: "#1e81ce" }}>
            FAQ
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight leading-[1.1]">
            Questions, answered
          </h2>
        </div>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <Item key={f.q} q={f.q} a={f.a} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
