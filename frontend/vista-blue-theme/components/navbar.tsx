"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export function Navbar() {
  const pathname = usePathname()

  const navLinks = [
    { label: "AI Platform", href: "/" },
    { label: "AI Agents", href: "/agents" },
    { label: "Features", href: "#" },
    { label: "Solutions", href: "#" },
    { label: "Security", href: "#" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800 bg-[#09090B]/80 backdrop-blur-md">
      <div className="w-full flex justify-center px-6 py-4">
        <div className="w-full max-w-4xl flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <div
              className="w-7 h-7 rounded-md overflow-hidden flex items-center justify-center shrink-0"
              style={{ backgroundColor: "#000" }}
            >
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/34e98a9a8c676ddbd8960f6756a859d6-GV8yP0JYGhHHhjTArVS7eu4l4axe8P.jpg"
                alt="Prospec logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-white font-semibold tracking-tight">PROSPEC</span>
              <span className="text-[10px] text-zinc-500 hidden sm:block">Building Intelligent Systems</span>
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
                  style={{ color: active ? "#ffffff" : "#71717a" }}
                >
                  {label}
                </Link>
              )
            })}
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="text-sm text-zinc-400 hover:text-white transition-colors">Login</a>
            <a
              href="#"
              className="text-sm text-white px-3.5 py-1.5 rounded-md border transition-colors font-medium"
              style={{
                background: "linear-gradient(135deg, #1e81ce 0%, #0e5d9e 100%)",
                borderColor: "#3ba3f5",
                boxShadow: "0 0 12px rgba(30,129,206,0.35)",
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
