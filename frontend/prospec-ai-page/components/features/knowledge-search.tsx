"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Search, FileText, Sparkles } from "lucide-react"

const queries = ["NAAC policy", "Attendance regulation", "Semester fee structure"]

const resultsByQuery: Record<string, string[]> = {
  "NAAC policy": ["NAAC_Manual_2024.pdf — Section 3.2", "Accreditation_Criteria.pdf — Page 12", "Quality_Assurance_Policy.pdf"],
  "Attendance regulation": ["Attendance_Policy_UG.pdf — Clause 4.1", "Academic_Regulations_2024.pdf", "Circular_2024_089.pdf"],
  "Semester fee structure": ["Fee_Structure_2024-25.pdf", "Scholarship_Adjustment_Policy.pdf", "Payment_Schedule.pdf"],
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export function KnowledgeSearch() {
  const [displayText, setDisplayText] = useState("")
  const [activeQuery, setActiveQuery] = useState(queries[0])
  const [showResults, setShowResults] = useState(false)

  useEffect(() => {
    let cancelled = false

    async function loop() {
      let qi = 0
      while (!cancelled) {
        const query = queries[qi % queries.length]
        for (let i = 1; i <= query.length; i++) {
          if (cancelled) return
          setDisplayText(query.slice(0, i))
          await sleep(45)
        }
        if (cancelled) return
        setActiveQuery(query)
        setShowResults(true)
        await sleep(1600)
        if (cancelled) return
        setShowResults(false)
        await sleep(200)
        for (let i = query.length; i >= 0; i--) {
          if (cancelled) return
          setDisplayText(query.slice(0, i))
          await sleep(22)
        }
        await sleep(300)
        qi++
      }
    }

    loop()
    return () => {
      cancelled = true
    }
  }, [])

  const results = resultsByQuery[activeQuery] ?? []

  return (
    <section id="search" className="relative py-28 bg-[#f4f6fb] dark:bg-[#09090B] transition-colors scroll-mt-28">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 mb-6"
        >
          <div className="w-2 h-2 rounded-full bg-blue-500" />
          <span className="text-muted-foreground text-sm">Intelligent Search</span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl text-foreground text-balance mb-14"
          style={{ letterSpacing: "-0.03em", fontWeight: 600, lineHeight: 1.1 }}
        >
          Ask, and Prospec finds it
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-2xl border border-border/60 bg-white/60 dark:bg-zinc-900/50 backdrop-blur-sm p-6 text-left"
        >
          {/* search bar mockup */}
          <div className="flex items-center gap-3 rounded-full border border-border/70 bg-white/70 dark:bg-zinc-800/60 px-4 py-3 mb-5">
            <Search className="w-4 h-4 text-muted-foreground shrink-0" />
            <span className="text-sm text-foreground font-mono">
              {displayText}
              <span className="inline-block w-[2px] h-4 bg-blue-500 align-middle ml-0.5 animate-pulse" />
            </span>
          </div>

          {/* results */}
          <div className="min-h-[132px]">
            {showResults && (
              <motion.div
                key={activeQuery}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-1.5 text-xs text-blue-400 mb-3">
                  <Sparkles className="w-3.5 h-3.5" />
                  AI found {results.length} results instantly
                </div>
                <div className="space-y-2">
                  {results.map((r, i) => (
                    <motion.div
                      key={r}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.08 }}
                      className="flex items-center gap-2.5 rounded-lg bg-white/50 dark:bg-zinc-800/40 border border-border/50 px-3 py-2"
                    >
                      <FileText className="w-3.5 h-3.5 text-muted-foreground shrink-0" />
                      <span className="text-xs text-foreground">{r}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
