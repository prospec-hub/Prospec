"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { navMenus } from "@/lib/nav-data"

export function NavMobileMenu() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <button
        onClick={() => setOpen(true)}
        className="md:hidden w-8 h-8 flex items-center justify-center rounded-md border border-border text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
        aria-label="Open menu"
      >
        <Menu className="w-4 h-4" />
      </button>
      <SheetContent side="right" className="w-[85vw] sm:max-w-sm overflow-y-auto">
        <SheetHeader>
          <SheetTitle>
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-md bg-blue-600 flex items-center justify-center shrink-0">
                <span className="text-white font-bold text-xs">P</span>
              </div>
              <span className="text-foreground font-bold text-sm tracking-wide">PROSPEC</span>
            </div>
          </SheetTitle>
        </SheetHeader>

        <div className="px-4 pb-6">
          <Accordion type="single" collapsible className="w-full">
            {navMenus.map((menu) => (
              <AccordionItem key={menu.label} value={menu.label} className="border-border/60">
                <AccordionTrigger className="text-foreground hover:no-underline text-sm font-medium">
                  {menu.label}
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col gap-1">
                    {menu.items.map((item) => {
                      const Icon = item.icon
                      return (
                        <Link
                          key={item.title}
                          href={item.href}
                          onClick={() => setOpen(false)}
                          className="flex items-center gap-2.5 rounded-lg px-2 py-2 hover:bg-muted/60 transition-colors"
                        >
                          <span className={`w-7 h-7 rounded-md ${menu.bg} flex items-center justify-center shrink-0`}>
                            <Icon className={`w-3.5 h-3.5 ${menu.accent}`} />
                          </span>
                          <span className="text-sm text-foreground">{item.title}</span>
                        </Link>
                      )
                    })}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-6 flex flex-col gap-3">
            <Link
              href="#"
              onClick={() => setOpen(false)}
              className="text-sm text-center text-muted-foreground hover:text-foreground transition-colors py-2 border border-border rounded-lg"
            >
              Login
            </Link>
            <Link
              href="/book-demo"
              onClick={() => setOpen(false)}
              className="text-sm text-center text-white bg-blue-600 hover:bg-blue-700 py-2.5 rounded-lg transition-colors font-medium"
            >
              Book Demo
            </Link>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
