"use client"

import { motion } from "framer-motion"
import { GraduationCap } from "@phosphor-icons/react"

const institutions = [
  "University Logos",
  "Engineering Colleges",
  "Medical Universities",
  "Private Institutions",
  "Government Universities",
  "Autonomous Colleges",
  "Research Institutions",
  "Education Groups",
]

export function LogoCloud() {
  return (
    <div className="relative z-20 pb-24 pt-8" style={{ backgroundColor: "#09090B" }}>
      <div className="w-full flex justify-center px-6">
        <div className="w-full max-w-4xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-lg text-zinc-300 mb-2 font-medium tracking-tight"
          >
            Trusted by Forward-Thinking Educational Institutions.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-zinc-500 mb-16"
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
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-16 gap-y-10 items-center justify-items-center transition-all duration-300 group-hover:blur-[2.5px] group-hover:opacity-50">
              {institutions.map((name) => (
                <div key={name} className="text-white font-semibold text-sm md:text-base flex items-center gap-2 tracking-tight">
                  <GraduationCap className="w-5 h-5 flex-shrink-0" weight="duotone" style={{ color: "#1e81ce" }} />
                  {name}
                </div>
              ))}
            </div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="px-5 py-2.5 backdrop-blur-sm border rounded-full text-sm text-zinc-300 flex items-center gap-2" style={{ backgroundColor: "rgba(30,129,206,0.15)", borderColor: "rgba(30,129,206,0.35)" }}>
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
