"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import type { ResourceCard } from "@/lib/resources-data"

interface ResourceSectionProps {
  id?: string
  eyebrow: string
  heading: string
  cards: ResourceCard[]
  columns?: 2 | 3
  showCta?: boolean
  ctaLabel?: string
  compact?: boolean
}

export function ResourceSection({
  id,
  eyebrow,
  heading,
  cards,
  columns = 3,
  showCta = false,
  ctaLabel = "Read Guide",
  compact = false,
}: ResourceSectionProps) {
  const gridCols = columns === 2 ? "md:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3"

  return (
    <section
      id={id}
      className="relative py-24 bg-[#f4f6fb] dark:bg-[#09090B] transition-colors scroll-mt-28"
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 mb-5"
          >
            <div className="w-2 h-2 rounded-full bg-blue-500" />
            <span className="text-muted-foreground text-sm">{eyebrow}</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-[42px] text-foreground text-balance max-w-2xl"
            style={{ letterSpacing: "-0.03em", fontWeight: 600, lineHeight: 1.1 }}
          >
            {heading}
          </motion.h2>
        </div>

        <div className={`grid grid-cols-1 ${gridCols} gap-4`}>
          {cards.map((card, i) => {
            const Icon = card.icon
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i % 3) * 0.07 }}
                whileHover={{ y: -4 }}
                className="group flex flex-col rounded-2xl border border-border/60 hover:border-border bg-white/50 dark:bg-zinc-900/40 backdrop-blur-sm p-6 transition-colors"
              >
                <div className="flex items-start justify-between mb-5">
                  <div className={`w-11 h-11 rounded-xl ${card.bg} flex items-center justify-center`}>
                    <Icon className={`w-5 h-5 ${card.accent}`} />
                  </div>
                  {card.meta && (
                    <span className="text-[10px] font-medium px-2 py-0.5 rounded-full border border-border/70 text-muted-foreground">
                      {card.meta}
                    </span>
                  )}
                </div>

                <h3 className={`font-semibold text-foreground ${compact ? "text-sm" : "text-base"} mb-1.5`}>
                  {card.title}
                </h3>
                {card.description && (
                  <p className="text-xs text-muted-foreground leading-relaxed">{card.description}</p>
                )}

                {card.items && (
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {card.items.map((item) => (
                      <span key={item} className="text-[10px] px-2 py-0.5 rounded-full bg-muted/60 text-muted-foreground">
                        {item}
                      </span>
                    ))}
                  </div>
                )}

                {showCta && (
                  <div className="mt-auto pt-5">
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-blue-400 group-hover:gap-2.5 transition-all">
                      {ctaLabel} <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
