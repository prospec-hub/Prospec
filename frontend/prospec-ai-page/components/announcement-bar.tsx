"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Sparkles, ArrowRight } from "lucide-react"

export function AnnouncementBar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-9 overflow-hidden bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600">
      {/* animated shimmer sweep */}
      <motion.div
        className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/15 to-transparent"
        initial={{ x: "-100%" }}
        animate={{ x: "300%" }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
      />
      <Link
        href="/ai-agents"
        className="relative h-9 flex items-center justify-center gap-2 px-4 text-white group"
      >
        <span className="inline-flex items-center gap-1 text-[11px] font-semibold bg-white/15 px-1.5 py-0.5 rounded">
          <Sparkles className="w-3 h-3" />
          New
        </span>
        <span className="text-xs sm:text-[13px] font-medium truncate">
          Introducing AI Workforce for Universities
        </span>
        <span className="hidden sm:inline-flex items-center gap-1 text-xs font-semibold group-hover:gap-1.5 transition-all">
          Explore <ArrowRight className="w-3.5 h-3.5" />
        </span>
      </Link>
    </div>
  )
}
