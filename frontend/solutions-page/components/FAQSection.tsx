"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus } from "lucide-react"
type FAQItem = {
  question: string
  answer: string
}
type FAQSectionProps = {
  title?: string
  faqs?: FAQItem[]
}
const defaultFAQs: FAQItem[] = [
  {
    question: "What does ProsPec do?",
    answer:
      "ProsPec is an AI-powered software engineering company specializing in custom software development, enterprise applications, workflow automation, cloud solutions, mobile applications, and intelligent business platforms. We help organizations modernize operations through scalable technology tailored to your specific business needs and growth objectives.",
  },
  {
    question: "What industries does ProsPec serve?",
    answer:
      "We build solutions for organizations across agriculture, manufacturing, retail, healthcare, education, logistics, finance, technology, and professional services. Our approach is tailored to each industry&apos;s operational needs and growth objectives, drawing on deep domain expertise and best practices.",
  },
  {
    question: "Can ProsPec build custom software for our business?",
    answer:
      "Absolutely. Every business operates differently, which is why we specialize in fully customized software solutions. From enterprise platforms and dealer management systems to AI-powered dashboards and mobile applications, every product is designed around your workflows and unique requirements.",
  },
  {
    question: "How does ProsPec use Artificial Intelligence?",
    answer:
      "Artificial Intelligence is integrated into our solutions to automate repetitive processes, analyze business data, generate intelligent insights, improve decision-making, and enhance operational efficiency. Depending on your requirements, AI can support reporting, predictive analytics, intelligent search, computer vision, chat assistants, and workflow optimization.",
  },
  {
    question: "Is security a priority?",
    answer:
      "Yes. Security is built into every stage of development. Our solutions include encrypted communication, role-based access control, secure authentication, audit logging, cloud security best practices, regular backups, and scalable infrastructure designed for enterprise environments.",
  },
  {
    question: "Can ProsPec integrate with our existing software?",
    answer:
      "Yes. We develop secure APIs and integrations that connect your existing systems, including CRMs, ERPs, accounting software, payment gateways, cloud platforms, HR systems, and third-party business applications, ensuring seamless data synchronization.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary depending on complexity. A business website may take a few weeks, while enterprise software or AI-powered platforms may require several months. After understanding your requirements, we provide a detailed roadmap with milestones and delivery timelines.",
  },
  {
    question: "What happens after deployment?",
    answer:
      "Our partnership doesn&apos;t end at launch. We provide ongoing maintenance, performance monitoring, feature enhancements, technical support, security updates, and continuous improvements to ensure your software evolves alongside your business.",
  },
]
export const FAQSection = ({ title = "Frequently Asked Questions", faqs = defaultFAQs }: FAQSectionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }
  return (
    <section className="w-full py-24 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16">
          {/* Left Column - Title */}
          <div className="lg:col-span-4">
            <h2
              className="text-[40px] leading-tight font-normal text-[#202020] tracking-tight sticky top-24"
              style={{
                fontWeight: "600",
                fontWeight: "400",
                fontSize: "40px",
              }}
            >
              {title}
            </h2>
          </div>

          {/* Right Column - FAQ Items */}
          <div className="lg:col-span-8">
            <div className="space-y-0">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-[#e5e5e5] last:border-b-0">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between py-6 text-left group hover:opacity-70 transition-opacity duration-150"
                    aria-expanded={openIndex === index}
                  >
                    <span
                      className="text-lg leading-7 text-[#202020] pr-8"
                      style={{
                        fontWeight: "600",
                        fontWeight: "400",
                      }}
                    >
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{
                        rotate: openIndex === index ? 45 : 0,
                      }}
                      transition={{
                        duration: 0.2,
                        ease: [0.4, 0, 0.2, 1],
                      }}
                      className="flex-shrink-0"
                    >
                      <Plus className="w-6 h-6 text-[#202020]" strokeWidth={1.5} />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {openIndex === index && (
                      <motion.div
                        initial={{
                          height: 0,
                          opacity: 0,
                        }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        transition={{
                          duration: 0.3,
                          ease: [0.4, 0, 0.2, 1],
                        }}
                        className="overflow-hidden"
                      >
                        <div className="pb-6 pr-12">
                          <p
                            className="text-lg leading-6 text-[#666666]"
                            style={{
                              fontWeight: "600",
                            }}
                          >
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
