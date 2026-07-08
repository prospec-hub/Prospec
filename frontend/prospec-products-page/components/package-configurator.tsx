"use client"

import { useState } from "react"

const MODULES = [
  "PROSPEC ERP",
  "PROSPEC Admissions",
  "PROSPEC Campus",
  "PROSPEC Faculty",
  "PROSPEC Learn",
  "PROSPEC Exam",
  "PROSPEC Finance",
  "PROSPEC Hostel",
  "PROSPEC Library",
  "PROSPEC Transport",
  "PROSPEC Placement",
  "PROSPEC Connect",
  "PROSPEC CRM",
  "PROSPEC Insight",
  "PROSPEC AI",
  "PROSPEC Mobile",
  "PROSPEC Identity",
  "PROSPEC Docs",
  "PROSPEC Workflow",
  "PROSPEC APIs",
]

const MODULE_PRICING: { [key: string]: number } = {
  "PROSPEC ERP": 2.5,
  "PROSPEC Admissions": 2.0,
  "PROSPEC Campus": 2.5,
  "PROSPEC Faculty": 1.5,
  "PROSPEC Learn": 2.0,
  "PROSPEC Exam": 1.8,
  "PROSPEC Finance": 2.5,
  "PROSPEC Hostel": 1.2,
  "PROSPEC Library": 1.0,
  "PROSPEC Transport": 1.2,
  "PROSPEC Placement": 1.5,
  "PROSPEC Connect": 1.0,
  "PROSPEC CRM": 1.8,
  "PROSPEC Insight": 2.0,
  "PROSPEC AI": 3.0,
  "PROSPEC Mobile": 1.5,
  "PROSPEC Identity": 1.5,
  "PROSPEC Docs": 0.8,
  "PROSPEC Workflow": 1.5,
  "PROSPEC APIs": 1.0,
}

export default function PackageConfigurator() {
  const [selectedModules, setSelectedModules] = useState<string[]>([])
  const [institutionName, setInstitutionName] = useState("")
  const [studentCount, setStudentCount] = useState("")

  const toggleModule = (module: string) => {
    setSelectedModules((prev) =>
      prev.includes(module) ? prev.filter((m) => m !== module) : [...prev, module]
    )
  }

  const basePrice = 8
  const selectedPrice = selectedModules.reduce((sum, module) => sum + (MODULE_PRICING[module] || 2), 0)
  const totalEstimate = basePrice + selectedPrice

  const getRecommendation = () => {
    if (selectedModules.length >= 18) {
      return { package: "PROSPEC One", price: 42, badge: "⭐" }
    }
    if (totalEstimate >= 35) {
      return { package: "Enterprise", price: 42, badge: "🟣" }
    }
    if (totalEstimate >= 20) {
      return { package: "Professional", price: 28, badge: "🔵" }
    }
    if (selectedModules.length > 0) {
      return { package: "Standard", price: 15, badge: "🟢" }
    }
    return null
  }

  const recommendation = getRecommendation()

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 border-t border-b border-[#e0dedb]">
      <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-0">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#37322f] mb-3 md:mb-4">
            Build Your University&apos;s Perfect Solution
          </h2>
          <p className="text-base md:text-lg text-[#605a57]">
            Choose only the modules your institution needs and instantly receive an estimated project cost.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Module Selection */}
          <div className="lg:col-span-2">
            <h3 className="text-lg md:text-xl font-semibold text-[#49423d] mb-6">Module Selection</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {MODULES.map((module) => (
                <button
                  key={module}
                  onClick={() => toggleModule(module)}
                  className={`p-4 rounded-lg border text-left transition-all text-sm md:text-base ${
                    selectedModules.includes(module)
                      ? "bg-[#37322F] text-white border-[#37322F]"
                      : "bg-white text-[#49423d] border-[#e0dedb] hover:border-[#37322F]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                        selectedModules.includes(module)
                          ? "bg-white border-white"
                          : "border-[#d0ccc9]"
                      }`}
                    >
                      {selectedModules.includes(module) && (
                        <svg className="w-3 h-3 text-[#37322F]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                    <span>{module}</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Institution Details Form */}
            <div className="mt-10">
              <h3 className="text-lg md:text-xl font-semibold text-[#49423d] mb-6">Institution Details</h3>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Institution Name"
                  value={institutionName}
                  onChange={(e) => setInstitutionName(e.target.value)}
                  className="w-full px-4 py-3 border border-[#e0dedb] rounded-lg text-[#37322F] placeholder-[#9a9189] focus:outline-none focus:border-[#37322F]"
                />
                <input
                  type="text"
                  placeholder="Number of Students"
                  value={studentCount}
                  onChange={(e) => setStudentCount(e.target.value)}
                  className="w-full px-4 py-3 border border-[#e0dedb] rounded-lg text-[#37322F] placeholder-[#9a9189] focus:outline-none focus:border-[#37322F]"
                />
              </div>
            </div>
          </div>

          {/* Right Column - Summary Panel */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 p-6 md:p-8 bg-[#F7F5F3] border border-[#e0dedb] rounded-lg">
              <h3 className="text-lg font-semibold text-[#49423d] mb-6">Summary</h3>

              {/* Selected Modules */}
              <div className="mb-6">
                <p className="text-xs uppercase tracking-wide text-[#9a9189] font-semibold mb-3">
                  Selected Modules ({selectedModules.length})
                </p>
                <div className="space-y-2 max-h-40 overflow-y-auto">
                  {selectedModules.length > 0 ? (
                    selectedModules.map((module) => (
                      <div
                        key={module}
                        className="flex items-center justify-between text-sm text-[#49423d] bg-white p-2 rounded"
                      >
                        <span>✓ {module}</span>
                        <span className="font-medium">₹{MODULE_PRICING[module]?.toFixed(1)} L</span>
                      </div>
                    ))
                  ) : (
                    <p className="text-sm text-[#9a9189] italic">No modules selected</p>
                  )}
                </div>
              </div>

              <div className="border-t border-[#d0ccc9] pt-4 mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-[#605a57]">Base Platform</span>
                  <span className="font-medium text-[#37322F]">₹{basePrice} L</span>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-[#605a57]">Modules</span>
                  <span className="font-medium text-[#37322F]">₹{selectedPrice.toFixed(1)} L</span>
                </div>
                <div className="flex justify-between items-center bg-white p-3 rounded-lg border border-[#e0dedb]">
                  <span className="text-base font-semibold text-[#37322F]">Estimated Investment</span>
                  <span className="text-lg font-bold text-[#37322F]">₹{totalEstimate.toFixed(1)} L</span>
                </div>
                <p className="text-xs text-[#9a9189] mt-3 italic">
                  This is an approximate estimate. Final pricing depends on institution size, deployment model, integrations, custom development, and implementation scope.
                </p>
              </div>

              {/* Recommendation */}
              {recommendation && (
                <div className="bg-white border-2 border-[#37322F] p-4 rounded-lg mb-6">
                  <p className="text-xs uppercase tracking-wide text-[#9a9189] font-semibold mb-2">
                    Recommended Package
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-base font-semibold text-[#37322F]">
                      {recommendation.badge} {recommendation.package}
                    </span>
                    <span className="text-sm font-medium text-[#605a57]">
                      ₹{recommendation.price} L
                    </span>
                  </div>
                </div>
              )}

              {/* Final CTAs */}
              <div className="space-y-3">
                <button className="w-full px-4 py-3 bg-[#37322F] text-white rounded-lg font-medium text-sm hover:bg-[#2A2520] transition-colors">
                  Request Detailed Proposal
                </button>
                <button className="w-full px-4 py-3 bg-white text-[#37322F] border border-[#e0dedb] rounded-lg font-medium text-sm hover:bg-[#F7F5F3] transition-colors">
                  Book Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
