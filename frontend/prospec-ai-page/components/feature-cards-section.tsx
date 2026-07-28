"use client"

import { motion } from "framer-motion"
import { ChevronRight, Plus, MessageSquare, BookOpen, Database } from "lucide-react"

const featureCards = [
  {
    title: "Intelligent Student Assistant",
    description:
      "Provides instant answers for admissions, attendance, fees, examinations, placements, scholarships, hostel services, and campus life 24/7.",
    illustration: (
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden p-6">
        <div className="w-full space-y-2">
          <div className="flex items-start gap-2">
            <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
              <MessageSquare className="w-3 h-3 text-blue-400" />
            </div>
            <div className="bg-zinc-800/60 rounded-lg px-3 py-2 text-[10px] text-zinc-300 max-w-[160px]">
              What are the hostel fee payment deadlines?
            </div>
          </div>
          <div className="flex items-start gap-2 justify-end">
            <div className="bg-blue-600/80 rounded-lg px-3 py-2 text-[10px] text-white max-w-[160px]">
              The hostel fee for Q3 is due by Nov 15. You can pay online via the student portal.
            </div>
            <div className="w-6 h-6 rounded-full bg-zinc-700 flex items-center justify-center shrink-0 text-[8px] text-zinc-300 font-bold">AI</div>
          </div>
          <div className="flex items-start gap-2">
            <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
              <MessageSquare className="w-3 h-3 text-blue-400" />
            </div>
            <div className="bg-zinc-800/60 rounded-lg px-3 py-2 text-[10px] text-zinc-300 max-w-[160px]">
              Show my exam schedule
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "AI Faculty Assistant",
    description:
      "Generates lesson plans, question papers, CO-PO mapping, assessments, rubrics, academic reports, and teaching insights.",
    illustration: (
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden p-6">
        <div className="w-full space-y-2">
          <div className="flex items-center gap-2 mb-3">
            <BookOpen className="w-4 h-4 text-indigo-400" />
            <span className="text-[10px] text-zinc-400 font-medium">Faculty AI Dashboard</span>
          </div>
          {[
            { label: "Lesson Plan – Unit 4", status: "Generated", color: "bg-emerald-500" },
            { label: "CO-PO Mapping", status: "In Progress", color: "bg-yellow-500" },
            { label: "Question Paper – Mid", status: "Draft", color: "bg-blue-500" },
            { label: "Assessment Rubric", status: "Generated", color: "bg-emerald-500" },
          ].map((item) => (
            <div key={item.label} className="flex items-center justify-between bg-zinc-800/50 rounded px-3 py-1.5">
              <span className="text-[10px] text-zinc-300">{item.label}</span>
              <span className={`text-[9px] text-white px-1.5 py-0.5 rounded-full ${item.color}`}>{item.status}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "University Knowledge AI",
    description:
      "Search and understand university regulations, policies, accreditation documents, circulars, ERP data, and institutional knowledge instantly.",
    illustration: (
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden p-6">
        <div className="w-full space-y-2">
          <div className="flex items-center gap-2 mb-3">
            <Database className="w-4 h-4 text-purple-400" />
            <span className="text-[10px] text-zinc-400 font-medium">Knowledge Base Connected</span>
          </div>
          <div className="bg-zinc-800/60 rounded-lg px-3 py-2 flex items-center gap-2 mb-2">
            <div className="w-0.5 h-4 bg-blue-500" />
            <span className="text-[10px] text-zinc-500">Search university knowledge...</span>
          </div>
          {[
            { label: "NAAC Documents", count: "142 files" },
            { label: "UGC Guidelines", count: "38 files" },
            { label: "Academic Policies", count: "91 files" },
          ].map((item) => (
            <div key={item.label} className="flex items-center justify-between bg-zinc-800/40 rounded px-3 py-1.5">
              <span className="text-[10px] text-zinc-300">{item.label}</span>
              <span className="text-[9px] text-zinc-500">{item.count}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
]

export function FeatureCardsSection() {
  return (
    <div id="knowledge" className="relative z-20 py-40 bg-[#f4f6fb] dark:bg-[#09090B] transition-colors scroll-mt-28">
      <div className="w-full flex justify-center px-6">
        <div className="w-full max-w-5xl">
          {/* Header row */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] text-foreground max-w-md text-balance"
              style={{
                letterSpacing: "-0.03em",
                fontWeight: 600,
                lineHeight: 1.1,
              }}
            >
              Purpose-Built AI for Higher Education
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="max-w-md"
            >
              <p className="text-muted-foreground leading-relaxed">
                Designed specifically for universities—not generic AI tools.{" "}
                <a href="#" className="text-foreground inline-flex items-center gap-1 hover:underline font-medium">
                  Explore all AI capabilities <ChevronRight className="w-4 h-4" />
                </a>
              </p>
            </motion.div>
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {featureCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="bg-zinc-900/90 dark:bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-colors cursor-pointer group overflow-hidden relative flex flex-col justify-end"
                style={{
                  aspectRatio: "336 / 380",
                  borderRadius: "24px",
                  height: "380px",
                  isolation: "isolate",
                }}
              >
                <div
                  className="absolute top-0 left-0 w-full"
                  style={{
                    height: "70%",
                    maskImage: "linear-gradient(#000 60%, transparent 95%)",
                    WebkitMaskImage: "linear-gradient(#000 60%, transparent 95%)",
                  }}
                >
                  {card.illustration}
                </div>
                <div
                  className="relative z-10 flex flex-col w-full"
                  style={{ padding: "0 24px 32px" }}
                >
                  <h3 className="text-white font-semibold text-base leading-tight mb-1">{card.title}</h3>
                  <p className="text-zinc-500 text-xs leading-relaxed mb-3">{card.description}</p>
                  <div className="flex justify-end">
                    <div className="w-7 h-7 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-500 group-hover:border-zinc-500 group-hover:text-zinc-300 transition-colors">
                      <Plus className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
