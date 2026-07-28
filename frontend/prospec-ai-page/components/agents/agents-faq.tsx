"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    q: "Can we deploy only the Admissions AI to start?",
    a: "Yes. Every agent works standalone. Start with a single department and add more from the marketplace whenever you're ready—no rip-and-replace.",
  },
  {
    q: "Can agents work together on one request?",
    a: "Absolutely. Agents collaborate automatically—one query can route through Student AI, Finance AI, your ERP and back, resolved end to end.",
  },
  {
    q: "Can agents access our ERP and existing systems?",
    a: "Agents connect securely to your ERP, LMS, HRMS, finance and document systems through governed integrations and role-based permissions.",
  },
  {
    q: "Can we create or train custom agents?",
    a: "Yes. Configure agents on your institutional knowledge, workflows and policies, and train them on your own data with full oversight.",
  },
  {
    q: "Do agents support multiple languages?",
    a: "Every agent is multilingual out of the box, supporting 50+ languages across chat and voice.",
  },
  {
    q: "Who controls permissions and data?",
    a: "You do. Your institution owns its data. Access is role-based, encrypted, fully audit-logged, and sensitive actions can require human approval.",
  },
]

export function AgentsFAQ() {
  return (
    <section className="relative py-28 bg-[#f4f6fb] dark:bg-[#09090B] transition-colors">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-6"
          >
            <div className="w-2 h-2 rounded-full bg-blue-500" />
            <span className="text-muted-foreground text-sm">FAQ</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl text-foreground text-balance"
            style={{ letterSpacing: "-0.03em", fontWeight: 600, lineHeight: 1.1 }}
          >
            Questions, answered
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-2xl border border-border/60 bg-white/50 dark:bg-zinc-900/40 backdrop-blur-sm px-6"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-border/60">
                <AccordionTrigger className="text-foreground hover:no-underline text-[15px]">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
