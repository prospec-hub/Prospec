"use client"

import { motion } from "framer-motion"
import {
  ChatCircle, Books, GraduationCap, MagnifyingGlass, ChartBar, Funnel, ArrowRight, Check,
} from "@phosphor-icons/react"

const cards = [
  {
    icon: ChatCircle,
    title: "Student AI",
    summary: "A 24/7 campus companion answering every student question instantly.",
    benefit: "Cuts support load by 90%",
    features: ["Fees, exams & attendance", "Hostel & transport info", "Scholarship guidance", "Multilingual replies"],
  },
  {
    icon: Books,
    title: "Faculty AI",
    summary: "Generates papers, plans and reports so teachers can teach.",
    benefit: "Saves 3 hrs / faculty / week",
    features: ["Question paper generation", "CO-PO mapping", "Lesson plans", "Assessment rubrics"],
  },
  {
    icon: GraduationCap,
    title: "Admissions AI",
    summary: "Runs the entire admissions funnel from enquiry to enrollment.",
    benefit: "10× faster processing",
    features: ["Document verification", "Eligibility checks", "Auto offer letters", "Counseling scheduler"],
  },
  {
    icon: MagnifyingGlass,
    title: "Knowledge AI",
    summary: "Ask your institution anything—policies, circulars, ERP data.",
    benefit: "500K+ documents searchable",
    features: ["Natural language search", "Policy Q&A", "NAAC / NBA ready", "Instant retrieval"],
  },
  {
    icon: ChartBar,
    title: "Analytics AI",
    summary: "Predictive dashboards that flag risks before they happen.",
    benefit: "47% drop-out reduction",
    features: ["Retention scoring", "Placement prediction", "Performance trends", "At-risk alerts"],
  },
  {
    icon: Funnel,
    title: "Workflow AI",
    summary: "Automates approvals and processes across every department.",
    benefit: "80% less admin overhead",
    features: ["Approvals & NOCs", "Timetables", "Circular automation", "Leave management"],
  },
]

function FeatureCard({ card, index }: { card: (typeof cards)[0]; index: number }) {
  const Icon = card.icon
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay: (index % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex flex-col p-7 bg-white border rounded-3xl transition-all duration-300 hover:-translate-y-1"
      style={{ borderColor: "#E2E8F0", boxShadow: "0 1px 3px rgba(15,23,42,0.05)" }}
    >
      {/* hover glow */}
      <div
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ boxShadow: "0 20px 50px rgba(30,129,206,0.14)" }}
      />
      <div className="relative">
        <div
          className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-colors"
          style={{ backgroundColor: "rgba(30,129,206,0.1)" }}
        >
          <Icon className="w-6 h-6" weight="duotone" style={{ color: "#1e81ce" }} />
        </div>
        <h3 className="text-xl font-semibold text-slate-900 tracking-tight mb-2">{card.title}</h3>
        <p className="text-slate-600 text-sm leading-relaxed">{card.summary}</p>

        {/* expand-on-hover detail (grid-rows 0fr → 1fr) */}
        <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out">
          <div className="overflow-hidden">
            <ul className="space-y-2 pt-5">
              {card.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-slate-600">
                  <Check className="w-4 h-4 shrink-0" weight="bold" style={{ color: "#1e81ce" }} />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex items-center justify-between mt-5 pt-4 border-t" style={{ borderColor: "#F1F5F9" }}>
          <span className="text-sm font-semibold" style={{ color: "#1e81ce" }}>{card.benefit}</span>
          <span className="inline-flex items-center gap-1 text-sm font-medium text-slate-500 group-hover:text-slate-900 transition-colors">
            Learn more
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" weight="bold" />
          </span>
        </div>
      </div>
    </motion.div>
  )
}

export function PlatformFeatureCards() {
  return (
    <section className="px-6 py-24 md:py-32" style={{ backgroundColor: "#F8FAFC" }}>
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-14">
          <p className="text-sm font-medium tracking-wide uppercase mb-3" style={{ color: "#1e81ce" }}>
            The AI Suite
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight leading-[1.1]">
            Purpose-built AI for higher education
          </h2>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed">
            Six specialized systems—designed for universities, not generic chatbots. Hover to see what each one does.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map((card, i) => (
            <FeatureCard key={card.title} card={card} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
