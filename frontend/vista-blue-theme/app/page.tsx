import { PlatformNavbar } from "@/components/platform/navbar"
import { PlatformHero } from "@/components/platform/hero"
import { PlatformStats } from "@/components/platform/stats"
import { DesignedFor } from "@/components/platform/designed-for"
import { PlatformFeatureCards } from "@/components/platform/feature-cards"
import { ProductPreview } from "@/components/platform/product-preview"
import { AIAgents } from "@/components/platform/ai-agents"
import { WorkflowFlow } from "@/components/platform/workflow"
import { Capabilities } from "@/components/platform/capabilities"
import { BeforeAfter } from "@/components/platform/before-after"
import { Security } from "@/components/platform/security"
import { Implementation } from "@/components/platform/implementation"
import { ROI } from "@/components/platform/roi"
import { Integrations } from "@/components/platform/integrations"
import { FAQ } from "@/components/platform/faq"
import { FinalCTA } from "@/components/platform/final-cta"
import { PlatformFooter } from "@/components/platform/footer"

export default function Home() {
  return (
    <main style={{ backgroundColor: "#FFFFFF" }} className="min-h-screen">
      <PlatformNavbar />
      <PlatformHero />
      <PlatformStats />
      <DesignedFor />
      <PlatformFeatureCards />
      <ProductPreview />
      <AIAgents />
      <WorkflowFlow />
      <Capabilities />
      <BeforeAfter />
      <Security />
      <Implementation />
      <ROI />
      <Integrations />
      <FAQ />
      <FinalCTA />
      <PlatformFooter />
    </main>
  )
}
