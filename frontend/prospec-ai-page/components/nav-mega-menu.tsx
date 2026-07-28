"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronDown, ArrowRight } from "lucide-react"
import type { NavMenu } from "@/lib/nav-data"

interface NavTriggerProps {
  menu: NavMenu
  isOpen: boolean
  isActive: boolean
  onEnter: () => void
  onFocus: () => void
}

export function NavTrigger({ menu, isOpen, isActive, onEnter, onFocus }: NavTriggerProps) {
  return (
    <Link
      href={menu.href}
      onMouseEnter={onEnter}
      onFocus={onFocus}
      className={`flex items-center gap-1 text-sm transition-colors ${
        isActive || isOpen ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground"
      }`}
    >
      {menu.label}
      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
    </Link>
  )
}

interface MegaMenuPanelProps {
  menu: NavMenu
  onMouseEnter: () => void
  onMouseLeave: () => void
}

export function MegaMenuPanel({ menu, onMouseEnter, onMouseLeave }: MegaMenuPanelProps) {
  return (
    <motion.div
      key={menu.label}
      initial={{ opacity: 0, y: -8, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -8, scale: 0.98 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[92vw] max-w-[680px] z-50"
    >
      <div className="rounded-2xl border border-border/60 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-xl shadow-2xl shadow-black/10 dark:shadow-black/50 p-3 flex gap-1">
        {/* Items grid */}
        <div className="grid grid-cols-2 gap-1 flex-1 min-w-0">
          {menu.items.map((item) => {
            const Icon = item.icon
            return (
              <Link
                key={item.title}
                href={item.href}
                className="group flex items-start gap-3 rounded-xl p-3 hover:bg-muted/60 transition-colors"
              >
                <span className={`w-9 h-9 rounded-lg ${menu.bg} flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform`}>
                  <Icon className={`w-4 h-4 ${menu.accent}`} />
                </span>
                <span className="min-w-0">
                  <span className="flex items-center gap-1 text-sm font-medium text-foreground">
                    {item.title}
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-muted-foreground shrink-0" />
                  </span>
                  <span className="block text-xs text-muted-foreground mt-0.5 leading-snug">
                    {item.description}
                  </span>
                </span>
              </Link>
            )
          })}
        </div>

        {/* Promo rail */}
        <div className="w-[200px] shrink-0 flex flex-col gap-2 pl-2 border-l border-border/60">
          {menu.promos.map((promo) => {
            const Icon = promo.icon
            return (
              <Link
                key={promo.title}
                href={promo.href}
                className={`group block rounded-xl border border-border/60 ${menu.ring} ${menu.bg} p-3.5 transition-colors`}
              >
                <Icon className={`w-4 h-4 mb-2.5 ${menu.accent}`} />
                <div className="text-[10px] uppercase tracking-wide text-muted-foreground mb-1">{promo.eyebrow}</div>
                <div className="text-[13px] font-semibold text-foreground leading-snug mb-1.5">{promo.title}</div>
                <div className="text-xs text-muted-foreground flex items-center gap-1 group-hover:text-foreground transition-colors">
                  {promo.cta} <ArrowRight className="w-3 h-3" />
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </motion.div>
  )
}
