"use client"

import { motion } from "framer-motion"
import { Download } from "lucide-react"
import { downloads, type DownloadCard } from "@/lib/resources-data"

const fileStyle: Record<DownloadCard["fileType"], string> = {
  PDF: "border-red-500/30 bg-red-500/10 text-red-400",
  Excel: "border-emerald-500/30 bg-emerald-500/10 text-emerald-400",
  PowerPoint: "border-orange-500/30 bg-orange-500/10 text-orange-400",
}

export function ResourceDownloads() {
  return (
    <section id="downloads" className="relative py-24 bg-[#f4f6fb] dark:bg-[#09090B] transition-colors scroll-mt-28">
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
            <span className="text-muted-foreground text-sm">Free Resources</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-[42px] text-foreground text-balance max-w-2xl"
            style={{ letterSpacing: "-0.03em", fontWeight: 600, lineHeight: 1.1 }}
          >
            Downloadable Toolkits &amp; Templates
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {downloads.map((d, i) => {
            const Icon = d.icon
            return (
              <motion.div
                key={d.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i % 3) * 0.07 }}
                className="group flex items-center gap-4 rounded-2xl border border-border/60 hover:border-border bg-white/50 dark:bg-zinc-900/40 backdrop-blur-sm p-5 transition-colors"
              >
                <div className="w-11 h-11 rounded-xl bg-muted/60 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-muted-foreground" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`text-[9px] font-semibold px-1.5 py-0.5 rounded border ${fileStyle[d.fileType]}`}>
                      {d.fileType}
                    </span>
                  </div>
                  <h3 className="text-sm font-medium text-foreground leading-snug">{d.title}</h3>
                </div>
                <button
                  aria-label={`Download ${d.title}`}
                  className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-muted-foreground group-hover:text-blue-400 group-hover:border-blue-500/40 transition-colors shrink-0"
                >
                  <Download className="w-4 h-4" />
                </button>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
