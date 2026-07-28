"use client"

import { motion } from "framer-motion"
import {
  Server, BookOpen, UserCog, Wallet, Library, CreditCard, Fingerprint, Mail,
  MessageCircle, MessageSquare, AppWindow, Chrome, Code2,
} from "lucide-react"

const integrations = [
  { name: "ERP", icon: Server },
  { name: "LMS", icon: BookOpen },
  { name: "HRMS", icon: UserCog },
  { name: "Finance", icon: Wallet },
  { name: "Library", icon: Library },
  { name: "Payment Gateway", icon: CreditCard },
  { name: "Biometric", icon: Fingerprint },
  { name: "Email", icon: Mail },
  { name: "WhatsApp", icon: MessageCircle },
  { name: "SMS", icon: MessageSquare },
  { name: "Microsoft", icon: AppWindow },
  { name: "Google", icon: Chrome },
  { name: "REST APIs", icon: Code2 },
]

export function IntegrationsGrid() {
  return (
    <section id="integrations" className="relative py-28 bg-[#f4f6fb] dark:bg-[#09090B] transition-colors scroll-mt-28">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-6"
          >
            <div className="w-2 h-2 rounded-full bg-blue-500" />
            <span className="text-muted-foreground text-sm">Integrations</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl text-foreground text-balance max-w-2xl mx-auto"
            style={{ letterSpacing: "-0.03em", fontWeight: 600, lineHeight: 1.1 }}
          >
            Works with every system you already use
          </motion.h2>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {integrations.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: (i % 8) * 0.05 }}
                whileHover={{ y: -3 }}
                className="inline-flex items-center gap-2.5 rounded-full border border-border/60 bg-white/60 dark:bg-zinc-900/40 backdrop-blur-sm pl-3 pr-4 py-2.5 hover:border-blue-500/40 transition-colors"
              >
                <span className="w-7 h-7 rounded-full bg-blue-500/10 flex items-center justify-center">
                  <Icon className="w-3.5 h-3.5 text-blue-400" />
                </span>
                <span className="text-sm text-foreground font-medium">{item.name}</span>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
