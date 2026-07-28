"use client"

import { useState } from "react"
import {
  CaretLeft,
  CaretRight,
  Plus,
  ArrowRight,
  ChatCircle,
  GitBranch,
  PuzzlePiece,
  ChartBar,
  Buildings,
} from "@phosphor-icons/react"

const carouselCards = [
  { id: 1, category: "Admissions AI", title: "Automate applications and counseling", icon: ArrowRight, mockup: "github" },
  { id: 2, category: "Student AI", title: "24/7 Student Support", icon: Plus, mockup: "intercom" },
  { id: 3, category: "Faculty AI", title: "Teaching & Assessment Intelligence", icon: ArrowRight, mockup: "mobile" },
  { id: 4, category: "Administration AI", title: "Automate institutional workflows", icon: ArrowRight, mockup: "asks" },
  { id: 5, category: "Analytics AI", title: "Predictive decision making", icon: ArrowRight, mockup: "figma" },
  { id: 6, category: "Knowledge AI", title: "Search every institutional document", icon: ArrowRight, mockup: "integrations" },
  { id: 7, category: "Open AI Platform", title: "Integrate ERP, LMS, Finance, HRMS & APIs", icon: ArrowRight, mockup: "api" },
]

function StudentSupportMockup() {
  return (
    <div className="flex flex-col gap-3 p-4">
      <div className="flex items-center gap-2 text-xs text-zinc-400">
        <ChatCircle className="w-3.5 h-3.5" weight="fill" style={{ color: "#1e81ce" }} />
        <span>Student Chat</span>
        <span className="text-zinc-600">·</span>
        <span className="text-zinc-500">priya@student.edu</span>
      </div>
      <p className="text-sm text-zinc-300">
        When is the last date to pay <span className="text-zinc-500">semester fees...</span>
      </p>
      <div className="mt-2 flex items-center gap-2 bg-zinc-800/50 rounded-lg px-3 py-2">
        <div className="w-5 h-5 rounded flex items-center justify-center" style={{ backgroundColor: "rgba(30,129,206,0.2)" }}>
          <span className="text-[10px]" style={{ color: "#3ba3f5" }}>AI</span>
        </div>
        <span className="text-sm text-zinc-300">Student AI</span>
        <span className="text-xs text-zinc-500">Answering</span>
      </div>
      <div className="mt-1 flex items-center gap-2 bg-zinc-800/30 rounded-lg px-3 py-2">
        <div className="w-5 h-5 bg-yellow-500/20 rounded flex items-center justify-center">
          <span className="text-[10px] text-yellow-500">◆</span>
        </div>
        <span className="text-sm text-zinc-400">Fee deadline</span>
        <span className="text-xs text-zinc-500">June 30</span>
      </div>
      <div className="mt-1 flex items-center gap-2 px-3 py-2">
        <div className="w-4 h-4 rounded-full border border-green-600 bg-green-500/20" />
        <span className="text-sm text-zinc-500">Resolved instantly</span>
        <div className="ml-2 flex items-center gap-1 text-xs text-zinc-600"><span>24/7</span></div>
      </div>
    </div>
  )
}

function AdmissionsMockup() {
  return (
    <div className="flex flex-col gap-2 p-4">
      <div className="flex items-center gap-2 text-xs">
        <GitBranch className="w-3.5 h-3.5 text-zinc-500" weight="bold" />
        <span className="text-zinc-400">#APP-2043</span>
        <span className="text-zinc-500">B.Tech CSE</span>
        <span style={{ color: "#3ba3f5" }} className="opacity-70">application...</span>
      </div>
      <div className="mt-3 space-y-2">
        {[
          "Admissions AI verified documents auto...",
          "Admissions AI changed status to Eligible...",
          "Counseling AI scheduled counseling sess...",
          "Admissions AI sent offer letter to studen...",
        ].map((text, i) => (
          <div key={i} className="flex items-center gap-2 text-xs">
            <span className="text-zinc-600">↗</span>
            <span className="text-zinc-500">{text.split(" ")[0]} {text.split(" ")[1]}</span>
            <span className="text-zinc-600">{text.split(" ").slice(2).join(" ")}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function MobileMockup() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="relative w-32 h-56 bg-zinc-900 rounded-2xl border border-zinc-700 overflow-hidden">
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-zinc-800 rounded-full" />
        <div className="mt-6 px-3">
          <div className="text-[10px] text-zinc-400 mb-2">Faculty App</div>
          <div className="space-y-1.5">
            {[1,2,3,4].map((i) => (
              <div key={i} className="h-6 bg-zinc-800/50 rounded" />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function AdministrationMockup() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="w-24 h-24 rounded-2xl flex items-center justify-center" style={{ backgroundColor: "rgba(30,129,206,0.12)", border: "1px solid rgba(30,129,206,0.25)" }}>
        <Buildings className="w-12 h-12" style={{ color: "#1e81ce" }} weight="duotone" />
      </div>
    </div>
  )
}

function IntegrationsMockup() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="grid grid-cols-2 gap-2">
        {[1,2,3,4].map((i) => (
          <div key={i} className="w-10 h-10 rounded-lg bg-zinc-800/50 flex items-center justify-center" style={{ border: "1px solid rgba(30,129,206,0.2)" }}>
            <PuzzlePiece className="w-5 h-5" style={{ color: "#1e81ce" }} weight="duotone" />
          </div>
        ))}
      </div>
    </div>
  )
}

function AnalyticsMockup() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="flex flex-col items-center gap-3">
        <ChartBar className="w-14 h-14" style={{ color: "#1e81ce" }} weight="duotone" />
        <div className="flex items-end gap-1.5">
          {[10,18,14,24,20,28].map((h, i) => (
            <div key={i} className="w-2 rounded-sm" style={{ height: `${h}px`, backgroundColor: i === 5 ? "#1e81ce" : "rgba(30,129,206,0.35)" }} />
          ))}
        </div>
      </div>
    </div>
  )
}

function ApiMockup() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="rounded-lg px-4 py-2" style={{ backgroundColor: "rgba(30,129,206,0.1)", border: "1px solid rgba(30,129,206,0.3)" }}>
        <span className="text-xs font-mono" style={{ color: "#3ba3f5" }}>PROSPEC API</span>
      </div>
    </div>
  )
}

function CardMockup({ type }: { type: string }) {
  switch (type) {
    case "intercom": return <StudentSupportMockup />
    case "github": return <AdmissionsMockup />
    case "mobile": return <MobileMockup />
    case "asks": return <AdministrationMockup />
    case "integrations": return <IntegrationsMockup />
    case "figma": return <AnalyticsMockup />
    case "api": return <ApiMockup />
    default: return null
  }
}

export function WorkflowsSection() {
  const [scrollPosition, setScrollPosition] = useState(0)
  const scrollLeft = () => setScrollPosition(Math.max(0, scrollPosition - 1))
  const scrollRight = () => setScrollPosition(Math.min(carouselCards.length - 4, scrollPosition + 1))

  return (
    <section className="relative py-24" style={{ backgroundColor: "#09090B" }}>
      <div className="absolute top-0 left-0 right-0 pointer-events-none" style={{ height: "20%", background: "linear-gradient(to bottom, rgba(255,255,255,0.05), transparent)" }} />
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-16">
          <div className="lg:max-w-xl">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#1e81ce" }} />
              <span className="text-sm text-zinc-400">AI Ecosystem</span>
              <CaretRight className="w-4 h-4 text-zinc-600" weight="bold" />
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold text-white leading-[1.1] tracking-tight">
              Connect AI Across<br />Your Campus
            </h2>
          </div>
          <p className="text-zinc-400 lg:max-w-sm lg:pt-12">
            Integrate Prospec AI with every system already running inside your institution.
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div
            className="flex gap-4 transition-transform duration-300 ease-out"
            style={{ transform: `translateX(-${scrollPosition * (100 / 4)}%)` }}
          >
            {carouselCards.map((card) => (
              <div key={card.id} className="flex-shrink-0 w-[calc(25%-12px)] min-w-[280px]">
                <div
                  className="border rounded-xl overflow-hidden h-[340px] flex flex-col transition-all hover:border-[#1e81ce]/40"
                  style={{ backgroundColor: "#0d1117", borderColor: "rgba(30,129,206,0.15)" }}
                >
                  <div className="flex-1 relative overflow-hidden">
                    <CardMockup type={card.mockup} />
                    <div className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none" style={{ background: "linear-gradient(to top, rgba(9,9,11,0.9), transparent)" }} />
                  </div>
                  <div className="p-4 border-t border-zinc-800/30">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-zinc-500 mb-1">{card.category}</p>
                        <p className="text-sm text-zinc-200 leading-snug font-medium tracking-tight">{card.title}</p>
                      </div>
                      <button
                        className="flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-colors hover:border-[#1e81ce]"
                        style={{ borderColor: "rgba(30,129,206,0.3)", color: "#1e81ce" }}
                      >
                        <card.icon className="w-4 h-4" weight="bold" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 mt-8">
          <button
            onClick={scrollLeft}
            className="w-10 h-10 rounded-full border flex items-center justify-center transition-colors disabled:opacity-30 disabled:cursor-not-allowed hover:border-[#1e81ce]"
            style={{ borderColor: "rgba(30,129,206,0.3)", color: "#3ba3f5" }}
            disabled={scrollPosition === 0}
          >
            <CaretLeft className="w-5 h-5" weight="bold" />
          </button>
          <button
            onClick={scrollRight}
            className="w-10 h-10 rounded-full border flex items-center justify-center transition-colors disabled:opacity-30 disabled:cursor-not-allowed hover:border-[#1e81ce]"
            style={{ borderColor: "rgba(30,129,206,0.3)", color: "#3ba3f5" }}
            disabled={scrollPosition >= carouselCards.length - 4}
          >
            <CaretRight className="w-5 h-5" weight="bold" />
          </button>
        </div>
      </div>
    </section>
  )
}
