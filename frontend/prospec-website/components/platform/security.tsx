"use client"

import { motion } from "framer-motion"
import {
  ShieldCheck, UserGear, LockKey, Cloud, ClipboardText, HardDrives, Plugs, Database,
} from "@phosphor-icons/react"

const items = [
  { icon: ShieldCheck, title: "Enterprise Security", desc: "Security controls built into every layer of the platform." },
  { icon: UserGear, title: "Role-Based Access", desc: "Every user sees only what their role permits." },
  { icon: LockKey, title: "Encrypted AI", desc: "End-to-end encryption for data at rest and in transit." },
  { icon: Cloud, title: "Private AI", desc: "Your models and data stay isolated to your institution." },
  { icon: ClipboardText, title: "Audit Logs", desc: "A complete, tamper-evident trail of every AI action." },
  { icon: HardDrives, title: "Cloud / On-Premise", desc: "Deploy in our cloud or fully within your infrastructure." },
  { icon: Plugs, title: "Secure APIs", desc: "Authenticated, rate-limited APIs for every integration." },
  { icon: Database, title: "Data Isolation", desc: "Tenant data is partitioned and never co-mingled." },
]

export function Security() {
  return (
    <section id="security" className="px-6 py-24 md:py-32" style={{ backgroundColor: "#F8FAFC" }}>
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-14">
          <p className="text-sm font-medium tracking-wide uppercase mb-3" style={{ color: "#1e81ce" }}>
            Security &amp; Trust
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight leading-[1.1]">
            Enterprise buyers care about security first
          </h2>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed">
            PROSPEC AI is built to meet the governance, privacy and compliance standards universities demand.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((it, i) => {
            const Icon = it.icon
            return (
              <motion.div
                key={it.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.45, delay: (i % 4) * 0.06 }}
                className="p-6 bg-white border rounded-3xl transition-all hover:-translate-y-1"
                style={{ borderColor: "#E2E8F0", boxShadow: "0 1px 3px rgba(15,23,42,0.05)" }}
              >
                <div className="w-11 h-11 rounded-2xl flex items-center justify-center mb-4" style={{ backgroundColor: "rgba(30,129,206,0.1)" }}>
                  <Icon className="w-5 h-5" weight="duotone" style={{ color: "#1e81ce" }} />
                </div>
                <h3 className="text-base font-semibold text-slate-900 tracking-tight mb-1.5">{it.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{it.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
