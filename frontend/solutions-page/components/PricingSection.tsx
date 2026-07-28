"use client"

import * as React from "react"
import { CheckIcon } from "@radix-ui/react-icons"
import { cn } from "@/lib/utils"

type PlanLevel = "starter" | "pro" | "enterprise"

interface PricingFeature {
  name: string
  included: PlanLevel | "all"
}

interface PricingPlan {
  name: string
  level: PlanLevel
  price: {
    monthly: number
    yearly: number
  }
  popular?: boolean
  description: string
  useCase: string
}

const features: PricingFeature[] = [
  { name: "Discovery & Business Consultation", included: "all" },
  { name: "UI/UX Design", included: "all" },
  { name: "Responsive Web Application", included: "all" },
  { name: "Mobile-Friendly Experience", included: "all" },
  { name: "Secure Cloud Deployment", included: "all" },
  { name: "Technical Documentation", included: "all" },
  { name: "Email Support", included: "all" },
  { name: "Project Management Dashboard", included: "all" },
  { name: "Version Control (Git)", included: "all" },
  { name: "Basic Performance Optimization", included: "all" },
  { name: "AI Feature Integration", included: "pro" },
  { name: "Workflow Automation", included: "pro" },
  { name: "REST API Development", included: "pro" },
  { name: "Third-Party API Integrations", included: "pro" },
  { name: "Admin Dashboard", included: "pro" },
  { name: "Role-Based Authentication", included: "pro" },
  { name: "Database Architecture", included: "pro" },
  { name: "Real-Time Analytics Dashboard", included: "pro" },
  { name: "Push Notifications", included: "pro" },
  { name: "Priority Technical Support", included: "pro" },
  { name: "Dedicated Project Manager", included: "pro" },
  { name: "Enterprise Software Architecture", included: "enterprise" },
  { name: "Custom AI Models & ML Solutions", included: "enterprise" },
  { name: "Microservices Architecture", included: "enterprise" },
  { name: "Cloud Infrastructure Design", included: "enterprise" },
  { name: "CI/CD Pipeline Setup", included: "enterprise" },
  { name: "DevOps & Infrastructure Automation", included: "enterprise" },
  { name: "Advanced Security & Compliance", included: "enterprise" },
  { name: "Single Sign-On (SSO)", included: "enterprise" },
  { name: "Multi-Tenant Architecture", included: "enterprise" },
  { name: "Custom Integrations", included: "enterprise" },
  { name: "White-Label Solution", included: "enterprise" },
  { name: "Dedicated Engineering Team", included: "enterprise" },
  { name: "Architecture Consultation", included: "enterprise" },
  { name: "24×7 Enterprise Support", included: "enterprise" },
  { name: "Service Level Agreement (SLA)", included: "enterprise" },
  { name: "Scalable Cloud Infrastructure", included: "enterprise" },
  { name: "Ongoing Maintenance & Feature Development", included: "enterprise" },
]

const plans: PricingPlan[] = [
  {
    name: "Starter",
    price: { monthly: 5000, yearly: 50000 },
    level: "starter",
    description: "Ideal for startups and small businesses beginning their digital transformation.",
    useCase: "Best for: MVP development, Business websites, Internal tools",
  },
  {
    name: "Professional",
    price: { monthly: 15000, yearly: 150000 },
    level: "pro",
    popular: true,
    description: "Designed for growing organizations requiring automation and intelligent business solutions.",
    useCase: "Best for: Growing businesses, Dealer Management Systems, CRM Platforms, AI dashboards",
  },
  {
    name: "Enterprise",
    price: { monthly: 0, yearly: 0 },
    level: "enterprise",
    description: "End-to-end digital transformation for large organizations with mission-critical needs.",
    useCase: "Best for: Custom solutions, Scalability, Enterprise security, White-label options",
  },
]

function shouldShowCheck(included: PricingFeature["included"], level: PlanLevel): boolean {
  if (included === "all") return true
  if (included === "enterprise" && level === "enterprise") return true
  if (included === "pro" && (level === "pro" || level === "enterprise")) return true
  if (included === "starter") return true
  return false
}

export function PricingSection() {
  const [isYearly, setIsYearly] = React.useState(false)
  const [selectedPlan, setSelectedPlan] = React.useState<PlanLevel>("pro")

  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-figtree text-[40px] font-normal leading-tight mb-4">Flexible Pricing for Every Stage of Growth</h2>
          <p className="font-figtree text-lg text-muted-foreground max-x-3xl mx-auto">
            Whether you&apos;re launching your first product, scaling operations, or transforming an enterprise, ProsPec offers engagement models that fit your business goals. Every project is backed by experienced engineers, transparent communication, and scalable architecture.
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-2 bg-secondary rounded-full p-1">
            <button
              type="button"
              onClick={() => setIsYearly(false)}
              className={cn(
                "px-6 py-2 rounded-full font-figtree text-lg transition-all",
                !isYearly ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground",
              )}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setIsYearly(true)}
              className={cn(
                "px-6 py-2 rounded-full font-figtree text-lg transition-all",
                isYearly ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground",
              )}
            >
              Yearly
              <span className="ml-2 text-sm text-[#156d95]">Save 17%</span>
            </button>
          </div>
        </div>

        {/* Plan Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {plans.map((plan) => (
            <button
              key={plan.name}
              type="button"
              onClick={() => setSelectedPlan(plan.level)}
              className={cn(
                "relative p-8 rounded-2xl text-left transition-all border-2",
                selectedPlan === plan.level
                  ? "border-[#156d95] bg-[#156d95]/5"
                  : "border-border hover:border-[#156d95]/50",
              )}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#156d95] text-white px-4 py-1 rounded-full text-sm font-figtree">
                  Most Popular
                </span>
              )}
              <div className="mb-6">
                <h3 className="font-figtree text-2xl font-medium mb-2">{plan.name}</h3>
                <p className="font-figtree text-sm text-muted-foreground mb-4">{plan.description}</p>
                <p className="font-figtree text-xs text-[#156d95] mb-4 font-medium">{plan.useCase}</p>
                <div className="flex items-baseline gap-1">
                  {plan.price.monthly === 0 ? (
                    <span className="font-figtree text-2xl text-muted-foreground">Custom pricing</span>
                  ) : (
                    <>
                      <span className="font-figtree text-4xl font-medium">
                        ${isYearly ? plan.price.yearly.toLocaleString() : plan.price.monthly.toLocaleString()}
                      </span>
                      <span className="font-figtree text-lg text-muted-foreground">/{isYearly ? "year" : "month"}</span>
                    </>
                  )}
                </div>
              </div>
              <div
                className={cn(
                  "w-full py-3 px-6 rounded-full font-figtree text-lg transition-all text-center",
                  selectedPlan === plan.level ? "bg-[#156d95] text-white" : "bg-secondary text-foreground",
                )}
              >
                {selectedPlan === plan.level ? "Selected" : "Select Plan"}
              </div>
            </button>
          ))}
        </div>

        {/* Features Table */}
        <div className="border border-border rounded-2xl overflow-hidden bg-card">
          <div className="overflow-x-auto">
            <div className="min-w-[768px]">
              {/* Table Header */}
              <div className="flex items-center p-6 bg-secondary border-b border-border">
                <div className="flex-1">
                  <h3 className="font-figtree text-xl font-medium">Features</h3>
                </div>
                <div className="flex items-center gap-8">
                  {plans.map((plan) => (
                    <div key={plan.level} className="w-24 text-center font-figtree text-lg font-medium">
                      {plan.name}
                    </div>
                  ))}
                </div>
              </div>

              {/* Feature Rows */}
              {features.map((feature, index) => (
                <div
                  key={feature.name}
                  className={cn(
                    "flex items-center p-6 transition-colors",
                    index % 2 === 0 ? "bg-background" : "bg-secondary/30",
                    feature.included === selectedPlan && "bg-[#156d95]/5",
                  )}
                >
                  <div className="flex-1">
                    <span className="font-figtree text-lg">{feature.name}</span>
                  </div>
                  <div className="flex items-center gap-8">
                    {plans.map((plan) => (
                      <div key={plan.level} className="w-24 flex justify-center">
                        {shouldShowCheck(feature.included, plan.level) ? (
                          <div className="w-6 h-6 rounded-full bg-[#156d95] flex items-center justify-center">
                            <CheckIcon className="w-4 h-4 text-white" />
                          </div>
                        ) : (
                          <span className="text-muted-foreground">-</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-12 text-center">
          <button className="bg-[#156d95] text-white px-[18px] py-[15px] rounded-full font-figtree text-lg hover:rounded-2xl transition-all">
            Get started with {plans.find((p) => p.level === selectedPlan)?.name}
          </button>
        </div>
      </div>
    </section>
  )
}
