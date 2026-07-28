"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { faqCategories } from "@/lib/resources-data"

export function ResourceFAQ() {
  const [active, setActive] = useState(faqCategories[0].id)
  const category = faqCategories.find((c) => c.id === active)!

  return (
    <section id="faq" className="relative py-24 bg-[#f4f6fb] dark:bg-[#09090B] transition-colors scroll-mt-28">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-5"
          >
            <div className="w-2 h-2 rounded-full bg-blue-500" />
            <span className="text-muted-foreground text-sm">FAQ Center</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-[42px] text-foreground text-balance"
            style={{ letterSpacing: "-0.03em", fontWeight: 600, lineHeight: 1.1 }}
          >
            Frequently Asked Questions
          </motion.h2>
        </div>

        {/* category chips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {faqCategories.map((cat) => {
            const Icon = cat.icon
            const selected = cat.id === active
            return (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-2 text-xs font-medium transition-colors ${
                  selected
                    ? "border-blue-500/50 bg-blue-500/10 text-foreground"
                    : "border-border/60 bg-white/40 dark:bg-zinc-900/30 text-muted-foreground hover:border-border hover:text-foreground"
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${selected ? "text-blue-400" : ""}`} />
                {cat.label}
              </button>
            )
          })}
        </motion.div>

        {/* answers — keyed remount replays entrance per category */}
        <motion.div
          key={category.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="rounded-2xl border border-border/60 bg-white/50 dark:bg-zinc-900/40 backdrop-blur-sm px-6"
        >
          <Accordion type="single" collapsible className="w-full">
            {category.faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-border/60">
                <AccordionTrigger className="text-foreground hover:no-underline text-[15px]">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
