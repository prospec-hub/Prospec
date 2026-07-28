"use client"

import { motion } from "framer-motion"
import {
  Database, GraduationCap, UsersThree, CurrencyDollar, BookBookmark, CreditCard,
  WhatsappLogo, ChatText, EnvelopeSimple, GoogleLogo, MicrosoftOutlookLogo, Fingerprint, Key, Plugs,
} from "@phosphor-icons/react"

const integrations = [
  { icon: Database, label: "ERP" },
  { icon: GraduationCap, label: "LMS" },
  { icon: UsersThree, label: "HRMS" },
  { icon: CurrencyDollar, label: "Finance" },
  { icon: BookBookmark, label: "Library" },
  { icon: CreditCard, label: "Payment Gateway" },
  { icon: WhatsappLogo, label: "WhatsApp" },
  { icon: ChatText, label: "SMS" },
  { icon: EnvelopeSimple, label: "Email" },
  { icon: GoogleLogo, label: "Google Workspace" },
  { icon: MicrosoftOutlookLogo, label: "Microsoft 365" },
  { icon: Fingerprint, label: "Biometric" },
  { icon: Key, label: "Single Sign-On" },
  { icon: Plugs, label: "REST API" },
]

export function Integrations() {
  return (
    <section className="px-6 py-24 md:py-32" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-14">
          <p className="text-sm font-medium tracking-wide uppercase mb-3" style={{ color: "#1e81ce" }}>
            Integrations
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight leading-[1.1]">
            Connects to everything your campus runs
          </h2>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed">
            PROSPEC AI plugs into your existing systems—no rip-and-replace required.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {integrations.map((it, i) => {
            const Icon = it.icon
            return (
              <motion.div
                key={it.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.4, delay: (i % 7) * 0.04 }}
                className="group flex flex-col items-center justify-center gap-3 p-5 bg-white border rounded-2xl transition-all duration-300 hover:-translate-y-1"
                style={{ borderColor: "#E2E8F0", boxShadow: "0 1px 3px rgba(15,23,42,0.05)" }}
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110" style={{ backgroundColor: "rgba(30,129,206,0.08)" }}>
                  <Icon className="w-6 h-6" weight="duotone" style={{ color: "#1e81ce" }} />
                </div>
                <span className="text-xs font-medium text-slate-700 text-center leading-tight">{it.label}</span>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
