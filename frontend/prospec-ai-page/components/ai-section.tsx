"use client"

import { motion } from "framer-motion"
import { ChevronRight, Check, Paperclip, Globe, Lightbulb } from "lucide-react"

const agents = [
  { name: "Student Assistant", selected: true, icon: "◇", badge: "Active" },
  { name: "Admission AI", selected: false, icon: "◉", badge: "AI" },
  { name: "Faculty AI", selected: false, icon: "◈", badge: "AI" },
  { name: "Administration AI", selected: false, icon: "◎", badge: "AI" },
  { name: "Finance AI", selected: false, icon: "○", badge: "AI" },
  { name: "Placement AI", selected: false, icon: "◎", badge: "AI" },
]

export function AISection() {
  return (
    <div id="ai-workspace" className="relative z-20 py-40 bg-[#f4f6fb] dark:bg-[#09090B] transition-colors scroll-mt-28">
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none"
        style={{
          height: "20%",
          background: "linear-gradient(to bottom, rgba(59,130,246,0.03) 0%, transparent 100%)",
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
            <div className="w-2 h-2 rounded-full bg-blue-500" />
            <span className="text-muted-foreground text-sm">Artificial Intelligence</span>
            <ChevronRight className="w-4 h-4 text-muted-foreground/50" />
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] text-foreground max-w-3xl mb-8 text-balance"
            style={{
              letterSpacing: "-0.03em",
              fontWeight: 600,
              lineHeight: 1.1,
            }}
          >
            AI That Understands Your University
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground max-w-md mb-8 leading-relaxed"
          >
            <span className="text-foreground font-medium">Unlike generic chatbots,</span> Prospec AI understands your
            institution, learns from university data, follows role-based permissions, and automates real campus
            operations.
          </motion.p>

          {/* Learn more button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm flex items-center gap-2 mb-16 font-medium"
          >
            Learn about AI
            <ChevronRight className="w-4 h-4" />
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
                    border: "1px solid rgba(66,66,66,0.5)",
                    background: "linear-gradient(rgba(255,255,255,0.08) 40%, rgba(8,9,10,0.1) 100%)",
                    borderRadius: "8px",
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    boxShadow:
                      "inset 0 1.503px 5.261px rgba(255,255,255,0.04), inset 0 -0.752px 0.752px rgba(255,255,255,0.1)",
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
                  <span className="text-zinc-500 italic text-sm">Assign AI Agent...</span>
                </div>

                {/* Dropdown options */}
                <div className="bg-zinc-900/90 border border-t-0 border-zinc-700 rounded-b-xl py-1">
                  {agents.map((agent, index) => (
                    <div
                      key={agent.name}
                      style={
                        agent.selected
                          ? {
                              transform: "scale(1.04) rotateX(17deg)",
                              background: "linear-gradient(#343434 0%, #2d2d2d 100%)",
                              borderRadius: "6px",
                              height: "48px",
                              position: "relative",
                              boxShadow:
                                "inset 0 -2.75px 4.75px rgba(255,255,255,0.14), 0 54px 73px 3px rgba(0,0,0,0.5)",
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
                          <span className={agent.selected ? "text-white font-medium text-sm" : "text-zinc-300 text-sm"}>
                            {agent.name}
                          </span>
                          <span className="text-xs bg-blue-600/30 text-blue-400 px-2 py-0.5 rounded">
                            {agent.badge}
                          </span>
                        </div>
                        {agent.selected && <Check className="w-4 h-4 text-blue-400" />}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bottom two-column section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16"
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Left column */}
              <div className="border-t border-r border-b border-border/60 pt-12 pr-12 pb-16">
                <h3 className="text-foreground font-semibold text-xl mb-3">Intelligent Campus Automation</h3>
                <p className="text-muted-foreground text-base mb-8">
                  Automate student queries, admissions, fee processing, exam queries, hostel support, and scholarship
                  guidance with AI workflows.
                </p>

                {/* Query Intelligence Card */}
                <div className="bg-zinc-900/30 dark:bg-zinc-900/30 border border-border/60 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-5">
                    <div className="w-4 h-4 rounded-full bg-blue-500/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-blue-500" />
                    </div>
                    <span className="text-muted-foreground text-sm">
                      Student Query <span className="text-foreground">Intelligence</span>
                    </span>
                  </div>

                  {/* Flow rows */}
                  {[
                    { label: "Admission Query", color: "bg-blue-500" },
                    { label: "Fee Assistance", color: "bg-indigo-500" },
                    { label: "Exam Information", color: "bg-purple-500" },
                    { label: "Hostel Support", color: "bg-violet-500" },
                    { label: "Scholarship Guidance", color: "bg-blue-400" },
                    { label: "AI Recommendation", color: "bg-emerald-500" },
                  ].map((row, i, arr) => (
                    <div key={row.label} className="flex flex-col items-start">
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${row.color}`} />
                        <span className="text-zinc-300 text-xs">{row.label}</span>
                      </div>
                      {i < arr.length - 1 && (
                        <div className="ml-[3px] w-px h-3 bg-zinc-700 my-0.5" />
                      )}
                    </div>
                  ))}

                  <button className="w-full mt-4 flex items-center justify-center gap-2 bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 text-sm py-2.5 rounded-md transition-colors border border-blue-600/30">
                    <Check className="w-4 h-4" />
                    Resolve Automatically
                  </button>
                </div>
              </div>

              {/* Right column */}
              <div className="border-t border-b border-border/60 pt-12 pl-12 pb-16">
                <h3 className="text-foreground font-semibold text-xl mb-3">University AI Workspace</h3>
                <p className="text-muted-foreground text-base mb-8">
                  Connect institutional knowledge, university ERP, LMS, HRMS, and documents into one centralized AI
                  intelligence layer.
                </p>

                {/* Integration Status */}
                <div className="bg-zinc-900/30 dark:bg-zinc-900/30 border border-border/60 rounded-xl p-5">
                  <div className="space-y-2 mb-4 font-mono text-sm">
                    {[
                      { label: "University API", status: "Connected", color: "text-emerald-400" },
                      { label: "ERP", status: "Connected", color: "text-emerald-400" },
                      { label: "Knowledge Base", status: "Synced", color: "text-emerald-400" },
                      { label: "Documents", status: "Indexed", color: "text-blue-400" },
                      { label: "Analytics", status: "Ready", color: "text-blue-400" },
                      { label: "AI Agent", status: "Active", color: "text-emerald-400" },
                    ].map((item) => (
                      <div key={item.label} className="flex items-center justify-between">
                        <span className="text-zinc-500 text-xs">{item.label}</span>
                        <span className={`text-xs ${item.color}`}>{item.status}</span>
                      </div>
                    ))}
                  </div>

                  {/* Ask input */}
                  <div className="bg-zinc-800/40 rounded-lg p-3 mt-4">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-0.5 h-4 bg-blue-500" />
                      <span className="text-zinc-600 text-xs">Ask your university anything...</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="flex items-center gap-1.5 border border-zinc-700/60 text-zinc-500 text-xs px-2.5 py-1 rounded-full hover:bg-zinc-700/30 transition-colors">
                        <Paperclip className="w-3 h-3" />
                        Attach
                      </button>
                      <button className="flex items-center gap-1.5 border border-zinc-700/60 text-zinc-500 text-xs px-2.5 py-1 rounded-full hover:bg-zinc-700/30 transition-colors">
                        <Globe className="w-3 h-3" />
                        Search
                      </button>
                      <button className="flex items-center gap-1.5 border border-zinc-700/60 text-zinc-500 text-xs px-2.5 py-1 rounded-full hover:bg-zinc-700/30 transition-colors">
                        <Lightbulb className="w-3 h-3" />
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
