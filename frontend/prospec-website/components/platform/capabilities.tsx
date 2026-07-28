"use client"

import { motion } from "framer-motion"
import {
  ChatText, Microphone, Scan, Translate, Image, FileText,
  TrendUp, ThumbsUp, TextAlignLeft, Gear, MagicWand, MagnifyingGlass,
} from "@phosphor-icons/react"

const capabilities = [
  { icon: ChatText, label: "Natural Language" },
  { icon: Microphone, label: "Voice AI" },
  { icon: Scan, label: "OCR" },
  { icon: Translate, label: "Translation" },
  { icon: Image, label: "Image Understanding" },
  { icon: FileText, label: "Document Intelligence" },
  { icon: TrendUp, label: "Prediction" },
  { icon: ThumbsUp, label: "Recommendation" },
  { icon: TextAlignLeft, label: "Summarization" },
  { icon: Gear, label: "Automation" },
  { icon: MagicWand, label: "Generation" },
  { icon: MagnifyingGlass, label: "Knowledge Search" },
]

export function Capabilities() {
  return (
    <section id="capabilities" className="px-6 py-24 md:py-32" style={{ backgroundColor: "#F8FAFC" }}>
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-14">
          <p className="text-sm font-medium tracking-wide uppercase mb-3" style={{ color: "#1e81ce" }}>
            AI Capabilities
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight leading-[1.1]">
            Every kind of intelligence, built in
          </h2>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed">
            One platform, twelve core AI capabilities working together across your campus.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {capabilities.map((c, i) => {
            const Icon = c.icon
            return (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.45, delay: (i % 4) * 0.05 }}
                className="group flex items-center gap-3 p-5 bg-white border rounded-2xl transition-all duration-300 hover:-translate-y-1"
                style={{ borderColor: "#E2E8F0", boxShadow: "0 1px 3px rgba(15,23,42,0.05)" }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors group-hover:scale-105"
                  style={{ backgroundColor: "rgba(30,129,206,0.1)" }}
                >
                  <Icon className="w-5 h-5" weight="duotone" style={{ color: "#1e81ce" }} />
                </div>
                <span className="text-sm font-medium text-slate-800 leading-tight">{c.label}</span>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
