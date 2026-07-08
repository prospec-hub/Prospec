"use client"

import { useState, useEffect } from "react"

const navLinks = [
  { name: "PROSPEC One", href: "/products#prospec-one" },
  { name: "Products", href: "/products#products" },
  { name: "Solutions", href: "/products#solutions" },
  { name: "Packages", href: "/products#packages" },
  { name: "Resources", href: "/products#resources" },
]

/**
 * Unified PROSPEC navigation used across every page.
 * Warm editorial light theme, premium enterprise feel.
 * Shrinks into a floating rounded bar on scroll.
 */
export function SiteNavigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed z-50 transition-all duration-500 ${
        isScrolled ? "top-3 left-3 right-3" : "top-0 left-0 right-0"
      }`}
    >
      <nav
        className={`mx-auto transition-all duration-500 ${
          isScrolled || isMobileMenuOpen
            ? "bg-[#F7F5F3]/85 backdrop-blur-xl border border-[rgba(55,50,47,0.12)] rounded-full shadow-[0px_8px_30px_rgba(55,50,47,0.10)] max-w-[1080px]"
            : "bg-transparent max-w-[1240px]"
        }`}
      >
        <div
          className={`flex items-center justify-between transition-all duration-500 px-5 sm:px-6 lg:px-8 ${
            isScrolled ? "h-14" : "h-16 lg:h-[76px]"
          }`}
        >
          {/* Logo */}
          <a href="/" className="flex items-center gap-1.5 group">
            <span
              className={`font-serif tracking-tight text-[#37322F] transition-all duration-500 ${
                isScrolled ? "text-xl" : "text-2xl"
              }`}
            >
              PROSPEC
            </span>
            <span
              className={`text-[rgba(55,50,47,0.45)] font-sans transition-all duration-500 ${
                isScrolled ? "text-[9px] mt-0.5" : "text-[10px] mt-1"
              }`}
            >
              ™
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[13px] font-medium text-[rgba(55,50,47,0.75)] hover:text-[#37322F] transition-colors duration-300 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#37322F] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3 lg:gap-4">
            <a
              href="#"
              className={`font-medium text-[rgba(55,50,47,0.75)] hover:text-[#37322F] transition-all duration-500 ${
                isScrolled ? "text-xs" : "text-[13px]"
              }`}
            >
              Log in
            </a>
            <a
              href="/products#cta"
              className={`bg-[#37322F] hover:bg-[#2A2520] text-white rounded-full font-medium transition-all duration-500 flex items-center justify-center ${
                isScrolled ? "px-4 h-8 text-xs" : "px-5 h-9 text-[13px]"
              }`}
            >
              Book a Demo
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-[#37322F]"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu - Full Screen Overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-[#F7F5F3] z-40 transition-all duration-500 ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ top: 0 }}
      >
        <div className="flex flex-col h-full px-8 pt-28 pb-8">
          <div className="flex-1 flex flex-col justify-center gap-6">
            {navLinks.map((link, i) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-4xl font-serif text-[#37322F] hover:text-[#605A57] transition-all duration-500 ${
                  isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: isMobileMenuOpen ? `${i * 75}ms` : "0ms" }}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div
            className={`flex gap-4 pt-8 border-t border-[rgba(55,50,47,0.12)] transition-all duration-500 ${
              isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: isMobileMenuOpen ? "300ms" : "0ms" }}
          >
            <a
              href="#"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex-1 rounded-full h-14 flex items-center justify-center text-base font-medium border border-[rgba(55,50,47,0.20)] text-[#37322F]"
            >
              Log in
            </a>
            <a
              href="/products#cta"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex-1 bg-[#37322F] text-white rounded-full h-14 flex items-center justify-center text-base font-medium"
            >
              Book a Demo
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
