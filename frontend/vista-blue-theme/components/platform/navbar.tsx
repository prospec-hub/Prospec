"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

const navLinks = [
  { label: "AI Platform", href: "/" },
  { label: "AI Agents", href: "/agents" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Security", href: "#security" },
  { label: "Pricing", href: "#faq" },
]

export function PlatformNavbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.6)",
        backdropFilter: "blur(14px)",
        borderBottom: scrolled ? "1px solid #E2E8F0" : "1px solid transparent",
      }}
    >
      <div className="w-full flex justify-center px-6 py-3.5">
        <div className="w-full max-w-6xl flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <div
              className="w-7 h-7 rounded-md flex items-center justify-center shrink-0"
              style={{ background: "linear-gradient(135deg, #1e81ce 0%, #0e5d9e 100%)" }}
            >
              <svg width="16" height="16" viewBox="0 0 100 100" fill="none">
                <path d="M20 30 L50 12 L80 30 L80 70 L50 88 L20 70 Z" fill="#fff" fillOpacity="0.95" />
                <path d="M50 12 L50 50 L20 30" fill="#1e81ce" opacity="0.5" />
              </svg>
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-slate-900 font-semibold tracking-tight">PROSPEC</span>
              <span className="text-[10px] text-slate-400 hidden sm:block">Building Intelligent Systems</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(({ label, href }) => {
              const active = pathname === href
              return (
                <Link
                  key={label}
                  href={href}
                  className="text-sm transition-colors"
                  style={{ color: active ? "#1e81ce" : "#475569" }}
                >
                  {label}
                </Link>
              )
            })}
          </div>

          <div className="flex items-center gap-3">
            <a href="#" className="text-sm text-slate-600 hover:text-slate-900 transition-colors hidden sm:block">
              Login
            </a>
            <a
              href="#cta"
              className="text-sm text-white px-4 py-2 rounded-lg font-medium transition-all"
              style={{
                background: "linear-gradient(135deg, #1e81ce 0%, #0e5d9e 100%)",
                boxShadow: "0 1px 2px rgba(15,23,42,0.08), 0 0 0 1px rgba(30,129,206,0.1)",
              }}
            >
              Book Demo
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
