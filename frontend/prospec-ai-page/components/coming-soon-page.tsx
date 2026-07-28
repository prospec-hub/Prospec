"use client"

import Link from "next/link"
import { motion } from "framer-motion"

interface ComingSoonPageProps {
  badge: string
  title: string
  description: string
}

export function ComingSoonPage({ badge, title, description }: ComingSoonPageProps) {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#f4f6fb] dark:bg-[#09090B] transition-colors">
      {/* Subtle glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -30%)",
          width: "1200px",
          height: "800px",
          background: "radial-gradient(ellipse at center, rgba(59, 130, 246, 0.07) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 pt-28 flex flex-col items-center px-6">
        <div className="w-full max-w-3xl text-center mt-20 md:mt-28">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-500 text-xs font-medium mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            {badge}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-[56px] font-semibold text-foreground leading-[1.1] text-balance"
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            {description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-10 flex items-center justify-center gap-4"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-background/60 text-sm text-muted-foreground">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              Content coming soon
            </span>
            <Link
              href="/"
              className="text-muted-foreground font-medium hover:text-foreground transition-colors flex items-center gap-2 text-sm"
            >
              Back to AI Platform
              <span aria-hidden="true">→</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
