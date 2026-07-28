"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { articles } from "@/lib/resources-data"

export function LatestArticles() {
  return (
    <section className="relative py-24 bg-[#f4f6fb] dark:bg-[#09090B] transition-colors">
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
            <span className="text-muted-foreground text-sm">Latest Articles</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-[42px] text-foreground text-balance max-w-2xl"
            style={{ letterSpacing: "-0.03em", fontWeight: 600, lineHeight: 1.1 }}
          >
            Editorial Insight from the Prospec Team
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {articles.map((a, i) => (
            <motion.a
              href="#"
              key={a.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.07 }}
              className="group relative flex flex-col justify-between rounded-2xl border border-border/60 hover:border-border bg-white/50 dark:bg-zinc-900/40 backdrop-blur-sm p-6 min-h-[190px] overflow-hidden transition-colors"
            >
              <div
                className="absolute -top-16 -right-16 w-40 h-40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(59,130,246,0.14), transparent 70%)" }}
              />
              <div className="relative">
                <div className="flex items-center gap-2 text-[11px] text-muted-foreground mb-4">
                  <span className="text-blue-400 font-medium">{a.category}</span>
                  <span className="w-1 h-1 rounded-full bg-muted-foreground/40" />
                  <span>{a.readTime}</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground leading-snug tracking-tight">{a.title}</h3>
              </div>
              <div className="relative mt-6 inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                Read article
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
