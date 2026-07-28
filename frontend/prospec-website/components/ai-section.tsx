"use client"

import { motion } from "framer-motion"
import { CaretRight, Check, Paperclip, Globe, Lightbulb } from "@phosphor-icons/react"

const agents = [
  { name: "Student Assistant", isAgent: true, selected: true, icon: "◇" },
  { name: "Admission AI", isAgent: true, selected: false, icon: "◉" },
  { name: "Faculty AI", isAgent: true, selected: false, icon: "◈" },
  { name: "Administration AI", isAgent: true, selected: false, icon: "○" },
  { name: "Finance AI", isAgent: true, selected: false, icon: "◎" },
  { name: "Placement AI", isAgent: true, selected: false, icon: "○" },
]

export function AISection() {
  return (
    <div className="relative z-20 py-40" style={{ backgroundColor: "#09090B" }}>
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none"
        style={{
          height: "20%",
          background: "linear-gradient(to bottom, rgba(255,255,255,0.05) 0%, transparent 100%)",
        }}
      />
      <div className="w-full flex justify-center px-6">
        <div className="w-full max-w-5xl">
          {/* Section label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 mb-6"
          >
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#1e81ce" }} />
            <span className="text-zinc-400 text-sm">Artificial Intelligence</span>
            <CaretRight className="w-4 h-4 text-zinc-500" weight="bold" />
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] text-white max-w-3xl mb-8"
            style={{ letterSpacing: "-0.033em", fontWeight: 600, lineHeight: 1.1 }}
          >
            AI That Understands Your University
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-zinc-400 max-w-md mb-8"
          >
            <span className="text-white font-semibold">Unlike generic chatbots,</span> Prospec AI understands your
            institution, learns from university data, follows role-based permissions, and automates real campus
            operations.
          </motion.p>

          {/* Learn more button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="px-5 py-2.5 text-zinc-300 rounded-lg border transition-colors text-sm flex items-center gap-2 mb-16"
            style={{
              backgroundColor: "rgba(30,129,206,0.12)",
              borderColor: "rgba(30,129,206,0.35)",
            }}
          >
            Learn about AI
            <CaretRight className="w-4 h-4" weight="bold" />
          </motion.button>

          {/* Agent dropdown mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center mb-24"
          >
            <div
              style={{
                perspective: "900px",
                userSelect: "none",
                WebkitUserSelect: "none",
                width: "100%",
                maxWidth: "720px",
                position: "relative",
              }}
            >
              <div
                style={{
                  transformOrigin: "top",
                  willChange: "transform",
                  transform: "translateY(0%) rotateX(30deg) scale(1.15)",
                  position: "relative",
                }}
              >
                {/* Glass overlay */}
                <div
                  style={{
                    border: "1px solid rgba(30, 129, 206, 0.25)",
                    background: "linear-gradient(rgba(30, 129, 206, 0.06) 40%, rgba(8, 9, 10, 0.1) 100%)",
                    borderRadius: "8px",
                    position: "absolute",
                    top: 0, bottom: 0, left: 0, right: 0,
                    boxShadow: "inset 0 1.503px 5.261px rgba(30,129,206,0.06), inset 0 -0.752px 0.752px rgba(255,255,255,0.06)",
                    pointerEvents: "none",
                    zIndex: 10,
                  }}
                />
                <div
                  style={{
                    background: "linear-gradient(180deg, transparent 0%, #09090B 100%)",
                    height: "80%",
                    position: "absolute",
                    bottom: "-2px",
                    left: "-180px",
                    right: "-180px",
                    pointerEvents: "none",
                    zIndex: 11,
                  }}
                />

                {/* Input field */}
                <div className="bg-zinc-800/50 border border-zinc-700 rounded-t-xl px-5 py-4">
                  <span className="text-zinc-500 italic">Assign AI Agent...</span>
                </div>

                {/* Dropdown options */}
                <div className="bg-zinc-900/80 border border-t-0 border-zinc-700 rounded-b-xl py-1">
                  {agents.map((agent, index) => (
                    <div
                      key={agent.name}
                      style={
                        agent.selected
                          ? {
                              transform: "scale(1.04) rotateX(17deg)",
                              background: "linear-gradient(#1a3a5e 0%, #0e2a4a 100%)",
                              borderRadius: "6px",
                              height: "48px",
                              position: "relative",
                              boxShadow: "inset 0 -2.75px 4.75px rgba(30,129,206,0.25), 0 54px 73px 3px rgba(0,0,0,0.5)",
                              zIndex: 20,
                              marginLeft: "-12px",
                              marginRight: "-12px",
                            }
                          : {
                              opacity: 1 - index * 0.15,
                              height: "42px",
                            }
                      }
                    >
                      <div
                        className="flex items-center justify-between h-full"
                        style={{ paddingLeft: "24px", paddingRight: "24px", gap: "12px" }}
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-zinc-400 text-lg">{agent.icon}</span>
                          <span className={agent.selected ? "text-white font-semibold" : "text-zinc-300"}>
                            {agent.name}
                          </span>
                          {agent.isAgent && (
                            <span
                              className="text-xs px-2 py-0.5 rounded font-medium"
                              style={{ backgroundColor: "rgba(30,129,206,0.2)", color: "#3ba3f5" }}
                            >
                              AI Agent
                            </span>
                          )}
                        </div>
                        {agent.selected && <Check className="w-4 h-4" style={{ color: "#3ba3f5" }} weight="bold" />}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bottom two columns */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16"
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Left column */}
              <div className="border-t border-r border-b border-zinc-800/60 pt-12 pr-12 pb-16">
                <h3 className="text-zinc-200 font-semibold text-xl mb-3 tracking-tight">Intelligent Campus Automation</h3>
                <p className="text-zinc-500 text-base mb-8">
                  Streamline your campus operations with AI assistance for routine student and administrative queries.
                </p>

                <div className="bg-zinc-900/30 border border-zinc-800/60 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-5">
                    <svg className="w-4 h-4 text-zinc-500" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M8 0L9.5 5.5L15 7L9.5 8.5L8 14L6.5 8.5L1 7L6.5 5.5L8 0Z" />
                    </svg>
                    <span className="text-zinc-500 text-sm">
                      Student Query <span className="text-zinc-300">Intelligence</span>
                    </span>
                  </div>

                  <div className="flex flex-col gap-1 mb-4">
                    {["Admission Query","Fee Assistance","Exam Information","Hostel Support","Scholarship Guidance"].map((row) => (
                      <div key={row} className="flex flex-col">
                        <span className="flex items-center gap-2 bg-zinc-800/30 rounded-md px-3 py-1.5 text-sm text-zinc-400">
                          <span className="w-2 h-2 bg-zinc-600 rounded-full" />
                          {row}
                        </span>
                        <span className="text-zinc-700 text-xs pl-4" aria-hidden="true">↓</span>
                      </div>
                    ))}
                    <span
                      className="flex items-center gap-2 rounded-md px-3 py-1.5 text-sm text-white font-medium"
                      style={{ background: "linear-gradient(135deg, #1e81ce, #0e5d9e)" }}
                    >
                      <span className="w-2 h-2 bg-white/60 rounded-full" />
                      AI Recommendation
                    </span>
                  </div>

                  <div className="bg-zinc-800/40 rounded-lg p-4 ml-4">
                    <p className="text-zinc-500 text-xs mb-2">Why this resolution was suggested</p>
                    <p className="text-zinc-500 text-sm mb-4">
                      Similar queries were resolved automatically using the university knowledge base and ERP records.
                    </p>
                    <button
                      className="w-full flex items-center justify-center gap-2 text-sm py-2.5 rounded-md transition-colors font-medium"
                      style={{ backgroundColor: "rgba(30,129,206,0.15)", color: "#3ba3f5", border: "1px solid rgba(30,129,206,0.3)" }}
                    >
                      <Check className="w-4 h-4" weight="bold" />
                      Resolve Automatically
                    </button>
                  </div>
                </div>
              </div>

              {/* Right column */}
              <div className="border-t border-b border-zinc-800/60 pt-12 pl-12 pb-16">
                <h3 className="text-zinc-200 font-semibold text-xl mb-3 tracking-tight">University AI Workspace</h3>
                <p className="text-zinc-500 text-base mb-8">
                  Connect institutional knowledge, university ERP, LMS, HRMS, and documents into one centralized AI intelligence layer.
                </p>

                <div className="bg-zinc-900/30 border border-zinc-800/60 rounded-xl p-5 font-mono text-sm">
                  <p className="text-zinc-700 mb-3">//University API</p>
                  <div className="space-y-1.5 mb-6">
                    {[
                      { label: "ERP Connected", color: "#22c55e" },
                      { label: "Knowledge Base Synced", color: "#22c55e" },
                      { label: "Documents Indexed", color: "#22c55e" },
                      { label: "Analytics Ready", color: "#22c55e" },
                      { label: "AI Active", color: "#1e81ce" },
                    ].map(({ label, color }) => (
                      <p key={label} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: color }} />
                        <span className="text-zinc-400">{label}</span>
                      </p>
                    ))}
                  </div>

                  <div className="bg-zinc-800/40 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="w-0.5 h-5" style={{ backgroundColor: "#1e81ce" }} />
                      <span className="text-zinc-600">Ask your university anything...</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        className="flex items-center gap-1.5 text-zinc-500 text-sm px-3 py-1.5 rounded-full transition-colors border border-zinc-700/60 hover:border-[#1e81ce]/50 hover:text-zinc-300"
                      >
                        <Paperclip className="w-3.5 h-3.5" weight="bold" />
                        Attach
                      </button>
                      <button className="flex items-center gap-1.5 border border-zinc-700/60 text-zinc-500 text-sm px-3 py-1.5 rounded-full hover:bg-zinc-700/30 transition-colors">
                        <Globe className="w-3.5 h-3.5" weight="bold" />
                        Search
                      </button>
                      <button className="flex items-center gap-1.5 border border-zinc-700/60 text-zinc-500 text-sm px-3 py-1.5 rounded-full hover:bg-zinc-700/30 transition-colors">
                        <Lightbulb className="w-3.5 h-3.5" weight="bold" />
                        Reason
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
