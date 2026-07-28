"use client"

import { useState } from "react"

type Node = {
  id: string
  label: string
  x: number
  y: number
  hub?: boolean
  ai?: boolean
}

// Positions on a 1000 x 640 viewBox
const nodes: Node[] = [
  { id: "ai", label: "PROSPEC AI", x: 500, y: 70, ai: true },
  { id: "erp", label: "ERP Core", x: 500, y: 330, hub: true },
  { id: "admissions", label: "Admissions", x: 205, y: 175 },
  { id: "finance", label: "Finance", x: 795, y: 175 },
  { id: "learning", label: "Learning", x: 150, y: 355 },
  { id: "exams", label: "Exams", x: 850, y: 355 },
  { id: "campus", label: "Campus (SIS)", x: 300, y: 540 },
  { id: "placement", label: "Placement", x: 500, y: 575 },
  { id: "library", label: "Library", x: 700, y: 540 },
]

const edges: [string, string][] = [
  ["erp", "admissions"],
  ["erp", "finance"],
  ["erp", "learning"],
  ["erp", "exams"],
  ["erp", "campus"],
  ["erp", "placement"],
  ["erp", "library"],
  ["admissions", "campus"],
  ["campus", "learning"],
  ["learning", "exams"],
  ["campus", "placement"],
  ["campus", "library"],
  // AI weaves through everything
  ["ai", "erp"],
  ["ai", "admissions"],
  ["ai", "finance"],
  ["ai", "learning"],
  ["ai", "exams"],
  ["ai", "campus"],
  ["ai", "placement"],
  ["ai", "library"],
]

const nodeById = Object.fromEntries(nodes.map((n) => [n.id, n]))

export default function EcosystemVisualization() {
  const [hovered, setHovered] = useState<string | null>(null)

  const isEdgeActive = (a: string, b: string) =>
    hovered === null ? false : hovered === a || hovered === b
  const isNodeActive = (id: string) => {
    if (hovered === null) return false
    if (hovered === id) return true
    return edges.some(
      ([a, b]) => (a === hovered && b === id) || (b === hovered && a === id),
    )
  }
  const isDimmed = (id: string) => hovered !== null && !isNodeActive(id)

  const pillWidth = (label: string) => Math.max(96, label.length * 8.5 + 34)

  return (
    <section id="ecosystem" className="w-full border-b border-[rgba(55,50,47,0.12)] bg-white">
      <div className="max-w-[1060px] mx-auto px-4 sm:px-6 md:px-8 lg:px-0 py-16 md:py-24">
        <div className="max-w-[640px] mx-auto text-center mb-10 md:mb-12">
          <div className="inline-flex items-center gap-2 px-[14px] py-[6px] bg-[#F7F5F3] rounded-full border border-[rgba(2,6,23,0.08)] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#37322F]" />
            <span className="text-[#37322F] text-xs font-medium font-sans">One Connected System</span>
          </div>
          <h2 className="text-[#37322F] text-3xl md:text-4xl lg:text-5xl font-serif leading-[1.1] tracking-tight mb-4">
            Every department, intelligently connected
          </h2>
          <p className="text-[#605A57] text-base md:text-lg font-sans leading-relaxed">
            Hover any module to see how data flows across the university. Nothing lives in a silo — and AI runs through all of it.
          </p>
        </div>

        <div className="relative rounded-2xl border border-[rgba(55,50,47,0.12)] bg-[#F7F5F3] p-3 md:p-6 shadow-[0px_2px_20px_rgba(55,50,47,0.06)]">
          <svg viewBox="0 0 1000 640" className="w-full h-auto" role="img" aria-label="PROSPEC connected ecosystem">
            {/* Edges */}
            {edges.map(([a, b], i) => {
              const na = nodeById[a]
              const nb = nodeById[b]
              const active = isEdgeActive(a, b)
              const aiEdge = a === "ai" || b === "ai"
              return (
                <line
                  key={i}
                  x1={na.x}
                  y1={na.y}
                  x2={nb.x}
                  y2={nb.y}
                  stroke={active ? "#37322F" : "rgba(55,50,47,0.14)"}
                  strokeWidth={active ? 2 : 1}
                  strokeDasharray={aiEdge ? "5 6" : undefined}
                  className="transition-all duration-300"
                  opacity={hovered !== null && !active ? 0.35 : 1}
                />
              )
            })}

            {/* Nodes */}
            {nodes.map((n) => {
              const w = pillWidth(n.label)
              const active = isNodeActive(n.id)
              const dim = isDimmed(n.id)
              const fill = n.hub || n.ai ? "#37322F" : active ? "#37322F" : "#ffffff"
              const textColor = n.hub || n.ai || active ? "#ffffff" : "#37322F"
              return (
                <g
                  key={n.id}
                  onMouseEnter={() => setHovered(n.id)}
                  onMouseLeave={() => setHovered(null)}
                  className="cursor-pointer transition-all duration-300"
                  style={{ opacity: dim ? 0.4 : 1 }}
                >
                  <rect
                    x={n.x - w / 2}
                    y={n.y - 21}
                    width={w}
                    height={42}
                    rx={21}
                    fill={fill}
                    stroke={n.hub || n.ai ? "#37322F" : "rgba(55,50,47,0.18)"}
                    strokeWidth={1}
                    className="transition-all duration-300"
                    style={{
                      filter: n.ai || n.hub ? "drop-shadow(0px 6px 16px rgba(55,50,47,0.22))" : "none",
                    }}
                  />
                  {n.ai && (
                    <circle cx={n.x - w / 2 + 20} cy={n.y} r={3} fill="#ffffff" opacity={0.9} />
                  )}
                  <text
                    x={n.ai ? n.x + 6 : n.x}
                    y={n.y + 1}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill={textColor}
                    className="font-sans transition-all duration-300"
                    style={{ fontSize: n.hub ? 16 : 14, fontWeight: n.hub || n.ai ? 600 : 500 }}
                  >
                    {n.label}
                  </text>
                </g>
              )
            })}
          </svg>

          {/* Legend */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 pt-2 pb-1 text-[12px] text-[#605A57] font-sans">
            <span className="flex items-center gap-2">
              <span className="w-6 h-px bg-[#37322F]" /> Data flow
            </span>
            <span className="flex items-center gap-2">
              <span className="w-6 border-t border-dashed border-[#37322F]" /> AI layer
            </span>
            <span className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#37322F]" /> Core &amp; intelligence
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
