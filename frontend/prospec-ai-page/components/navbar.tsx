"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { Sun, Moon } from "lucide-react"
import { navMenus } from "@/lib/nav-data"
import { NavTrigger, MegaMenuPanel } from "@/components/nav-mega-menu"
import { NavMobileMenu } from "@/components/nav-mobile-menu"

export function Navbar() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const pathname = usePathname()
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isLight = theme === "light"

  const openMenu = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setActiveMenu(label)
  }

  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    closeTimer.current = setTimeout(() => setActiveMenu(null), 150)
  }

  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
  }

  const active = navMenus.find((m) => m.label === activeMenu)

  return (
    <nav className="fixed top-9 left-0 right-0 z-50 border-b border-white/10 dark:border-zinc-800 bg-white/80 dark:bg-[#09090B]/80 backdrop-blur-md transition-colors">
      <div className="w-full flex justify-center px-6 py-4">
        <div className="w-full max-w-5xl flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-md bg-blue-600 flex items-center justify-center shrink-0">
              <span className="text-white font-bold text-xs">P</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-foreground font-bold text-sm tracking-wide">PROSPEC</span>
              <span className="text-muted-foreground text-[9px] tracking-wider uppercase">Building Intelligent Systems</span>
            </div>
          </Link>

          {/* Nav mega menus */}
          <div className="hidden md:flex items-center gap-7 relative" onMouseLeave={scheduleClose}>
            {navMenus.map((menu) => (
              <NavTrigger
                key={menu.label}
                menu={menu}
                isOpen={activeMenu === menu.label}
                isActive={pathname === menu.href}
                onEnter={() => openMenu(menu.label)}
                onFocus={() => openMenu(menu.label)}
              />
            ))}

            {active && (
              <MegaMenuPanel
                key={active.label}
                menu={active}
                onMouseEnter={cancelClose}
                onMouseLeave={scheduleClose}
              />
            )}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            {/* Theme toggle */}
            {mounted && (
              <button
                onClick={() => setTheme(isLight ? "dark" : "light")}
                className="w-8 h-8 flex items-center justify-center rounded-md border border-border text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                aria-label="Toggle theme"
              >
                {isLight ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
              </button>
            )}
            <a href="#" className="hidden sm:inline text-sm text-muted-foreground hover:text-foreground transition-colors">
              Login
            </a>
            <Link
              href="/book-demo"
              className="hidden sm:inline text-sm text-white bg-blue-600 hover:bg-blue-700 px-4 py-1.5 rounded-md transition-colors font-medium"
            >
              Book Demo
            </Link>
            <NavMobileMenu />
          </div>
        </div>
      </div>
    </nav>
  )
}
