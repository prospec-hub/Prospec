"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, ArrowRight, GraduationCap, Users, BookOpen, Settings, BarChart3, Database, Layers } from "lucide-react"

const carouselCards = [
  {
    id: 1,
    category: "Admissions AI",
    title: "Automate applications and counseling",
    icon: ArrowRight,
    MockupIcon: GraduationCap,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },
  {
    id: 2,
    category: "Student AI",
    title: "24/7 Student Support",
    icon: ArrowRight,
    MockupIcon: Users,
    color: "text-indigo-400",
    bg: "bg-indigo-500/10",
  },
  {
    id: 3,
    category: "Faculty AI",
    title: "Teaching & Assessment Intelligence",
    icon: ArrowRight,
    MockupIcon: BookOpen,
    color: "text-violet-400",
    bg: "bg-violet-500/10",
  },
  {
    id: 4,
    category: "Administration AI",
    title: "Automate institutional workflows",
    icon: ArrowRight,
    MockupIcon: Settings,
    color: "text-purple-400",
    bg: "bg-purple-500/10",
  },
  {
    id: 5,
    category: "Analytics AI",
    title: "Predictive decision making",
    icon: ArrowRight,
    MockupIcon: BarChart3,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },
  {
    id: 6,
    category: "Knowledge AI",
    title: "Search every institutional document",
    icon: ArrowRight,
    MockupIcon: Database,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
  {
    id: 7,
    category: "Open AI Platform",
    title: "Integrate ERP, LMS, Finance, HRMS & APIs",
    icon: ArrowRight,
    MockupIcon: Layers,
    color: "text-orange-400",
    bg: "bg-orange-500/10",
  },
]

function CardMockup({ card }: { card: typeof carouselCards[0] }) {
  const Icon = card.MockupIcon
  return (
    <div className="flex flex-col items-center justify-center h-full gap-4 p-6">
      <div className={`w-16 h-16 rounded-2xl ${card.bg} flex items-center justify-center`}>
        <Icon className={`w-8 h-8 ${card.color}`} />
      </div>
      <div className="space-y-1.5 w-full">
        {[80, 60, 70].map((w, i) => (
          <div key={i} className={`h-1.5 bg-zinc-700/50 rounded`} style={{ width: `${w}%` }} />
        ))}
      </div>
    </div>
  )
}

export function WorkflowsSection() {
  const [scrollPosition, setScrollPosition] = useState(0)

  const scrollLeft = () => {
    setScrollPosition(Math.max(0, scrollPosition - 1))
  }

  const scrollRight = () => {
    setScrollPosition(Math.min(carouselCards.length - 4, scrollPosition + 1))
  }

  return (
    <section id="automation" className="relative py-24 bg-[#f4f6fb] dark:bg-[#09090B] transition-colors scroll-mt-28">
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none"
        style={{
          height: "20%",
          background: "linear-gradient(to bottom, rgba(59,130,246,0.03), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-16">
          <div className="lg:max-w-xl">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-blue-500" />
              <span className="text-sm text-muted-foreground">AI Ecosystem</span>
              <ChevronRight className="w-4 h-4 text-muted-foreground/50" />
            </div>

            <h2 className="text-4xl md:text-5xl font-semibold text-foreground leading-[1.1] text-balance">
              Connect AI Across
              <br />
              Your Campus
            </h2>
          </div>

          <p className="text-muted-foreground lg:max-w-sm lg:pt-12 leading-relaxed">
            Integrate Prospec AI with every system already running inside your institution—ERP, LMS, HRMS, and more.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative overflow-hidden">
          <div
            className="flex gap-4 transition-transform duration-300 ease-out"
            style={{ transform: `translateX(-${scrollPosition * (100 / 4)}%)` }}
          >
            {carouselCards.map((card) => (
              <div key={card.id} className="flex-shrink-0 w-[calc(25%-12px)] min-w-[280px]">
                <div className="bg-zinc-900/80 dark:bg-zinc-900/50 border border-zinc-800/50 rounded-xl overflow-hidden h-[340px] flex flex-col">
                  {/* Mockup area */}
                  <div className="flex-1 relative overflow-hidden">
                    <CardMockup card={card} />
                    <div
                      className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
                      style={{
                        background: "linear-gradient(to top, rgba(9,9,11,0.9), transparent)",
                      }}
                    />
                  </div>

                  {/* Card footer */}
                  <div className="p-4 border-t border-zinc-800/30">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-zinc-500 mb-1">{card.category}</p>
                        <p className="text-sm text-zinc-200 leading-snug">{card.title}</p>
                      </div>
                      <button className="flex-shrink-0 w-8 h-8 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-500 hover:text-zinc-300 hover:border-zinc-600 transition-colors">
                        <card.icon className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation arrows */}
        <div className="flex items-center justify-center gap-2 mt-8">
          <button
            onClick={scrollLeft}
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-border/80 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            disabled={scrollPosition === 0}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={scrollRight}
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-border/80 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            disabled={scrollPosition >= carouselCards.length - 4}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
