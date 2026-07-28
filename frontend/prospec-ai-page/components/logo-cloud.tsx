"use client"

import { motion } from "framer-motion"

const institutions = [
  "Engineering Colleges",
  "Medical Universities",
  "Private Institutions",
  "Government Universities",
  "Autonomous Colleges",
  "Research Institutions",
  "Education Groups",
  "Multi-Campus Networks",
]

export function LogoCloud() {
  return (
    <div className="relative z-20 pb-24 pt-8 bg-[#f4f6fb] dark:bg-[#09090B] transition-colors">
      <div className="w-full flex justify-center px-6">
        <div className="w-full max-w-4xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-lg text-foreground font-medium mb-2"
          >
            Trusted by Forward-Thinking Educational Institutions
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base text-muted-foreground mb-16"
          >
            Helping universities transform operations through intelligent automation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group cursor-pointer"
          >
            {/* Institution type grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-10 gap-y-8 items-center justify-items-center transition-all duration-300 group-hover:blur-[2.5px] group-hover:opacity-50">
              {institutions.map((name, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-card text-card-foreground shadow-sm"
                >
                  <div className="w-2 h-2 rounded-full bg-blue-500 shrink-0" />
                  <span className="text-sm font-medium text-foreground whitespace-nowrap">{name}</span>
                </div>
              ))}
            </div>

            {/* Hover overlay button */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="px-5 py-2.5 bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm border border-border rounded-full text-sm text-foreground flex items-center gap-2 shadow-md">
                View Success Stories
                <span aria-hidden="true">›</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
