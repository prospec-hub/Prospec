"use client"

import { useState } from "react"

interface FAQItem {
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    question: "What is PROSPEC One?",
    answer:
      "PROSPEC One is our flagship all-in-one university operating system. It unifies all 20 PROSPEC modules — from admissions to alumni — into a single intelligent platform with one login, shared data and AI woven throughout.",
  },
  {
    question: "Can we purchase individual modules instead of the whole platform?",
    answer:
      "Yes. Every module works on its own and can be bought individually. Because they all share the same core, you can start with a few and add more over time without re-integration or data migration.",
  },
  {
    question: "Can we upgrade later?",
    answer:
      "Absolutely. Institutions typically start with a package like Standard or Professional and scale up as needs grow. Adding modules or moving to PROSPEC One is seamless — your existing data carries over.",
  },
  {
    question: "Cloud or on-premise?",
    answer:
      "Both. PROSPEC deploys on our secure cloud or within your own infrastructure, depending on your institution's data-residency and IT policies.",
  },
  {
    question: "How long does implementation take?",
    answer:
      "It depends on the modules and institution size. A focused rollout can go live in 6–10 weeks; a full PROSPEC One deployment follows a structured, phased methodology with data migration and staff training built in.",
  },
  {
    question: "Is there a limit on the number of students?",
    answer:
      "No. The architecture scales from a single department to large, multi-campus universities with millions of records. Enterprise and PROSPEC One packages support unlimited students.",
  },
  {
    question: "Can PROSPEC integrate with our existing systems?",
    answer:
      "Yes. PROSPEC is API-first, with a complete REST and webhook framework, so it connects with your existing finance, identity, payment and third-party systems.",
  },
  {
    question: "How does data migration work?",
    answer:
      "Data migration is part of every implementation. Our team maps, cleans and imports your existing records — students, staff, finance and academic history — with validation at each step.",
  },
  {
    question: "What AI capabilities are included?",
    answer:
      "AI runs across the ecosystem: admissions lead scoring, adaptive learning, exam proctoring, financial reporting, complaint routing, resume analysis, predictive analytics and copilots for students and staff.",
  },
  {
    question: "How secure is our institutional data?",
    answer:
      "PROSPEC uses enterprise-grade security — end-to-end encryption, role-based access control, audit logging and data isolation — with redundant, monitored infrastructure and SLA-backed availability.",
  },
  {
    question: "What kind of support do you provide?",
    answer:
      "All institutions get onboarding and documentation. Professional and above include priority support, and Enterprise / PROSPEC One add a dedicated account manager with 24/7 support and an SLA.",
  },
]

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([0])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  return (
    <section id="faq" className="w-full border-b border-[rgba(55,50,47,0.12)] bg-[#F7F5F3]">
      <div className="max-w-[1060px] mx-auto px-4 md:px-8 lg:px-0 py-16 md:py-24 flex flex-col lg:flex-row justify-start items-start gap-8 lg:gap-16">
        {/* Left Column - Header */}
        <div className="w-full lg:flex-1 flex flex-col justify-center items-start gap-4 lg:sticky lg:top-24">
          <div className="inline-flex items-center gap-2 px-[14px] py-[6px] bg-white shadow-[0px_0px_0px_4px_rgba(55,50,47,0.05)] rounded-full border border-[rgba(2,6,23,0.08)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#37322F]" />
            <span className="text-[#37322F] text-xs font-medium font-sans">FAQ</span>
          </div>
          <h2 className="text-[#37322F] text-3xl md:text-4xl lg:text-5xl font-serif leading-[1.1] tracking-tight">
            Frequently asked questions
          </h2>
          <p className="text-[#605A57] text-base font-sans leading-7">
            Everything universities ask before choosing PROSPEC. Need more?{" "}
            <a href="#cta" className="text-[#37322F] underline underline-offset-2">Talk to a solution architect.</a>
          </p>
        </div>

        {/* Right Column - FAQ Items */}
        <div className="w-full lg:flex-1 flex flex-col">
          {faqData.map((item, index) => {
            const isOpen = openItems.includes(index)
            return (
              <div key={index} className="w-full border-b border-[rgba(73,66,61,0.16)] overflow-hidden">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full py-[18px] flex justify-between items-center gap-5 text-left hover:opacity-70 transition-opacity duration-200"
                  aria-expanded={isOpen}
                >
                  <span className="flex-1 text-[#49423D] text-base font-medium leading-6 font-sans">{item.question}</span>
                  <ChevronDownIcon className={`w-5 h-5 text-[rgba(73,66,61,0.60)] transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                  <div className="pb-[18px] text-[#605A57] text-sm font-normal leading-6 font-sans">{item.answer}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
