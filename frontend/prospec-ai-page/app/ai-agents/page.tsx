import { AgentsHero } from "@/components/agents/agents-hero"
import { AgentsStats } from "@/components/agents/agents-stats"
import { WhatIsAgent } from "@/components/agents/what-is-agent"
import { AgentCategories } from "@/components/agents/agent-categories"
import { FeaturedAgents } from "@/components/agents/featured-agents"
import { AgentCollaboration } from "@/components/agents/agent-collaboration"
import { AgentMarketplace } from "@/components/agents/agent-marketplace"
import { AgentCapabilities } from "@/components/agents/agent-capabilities"
import { AgentLifecycle } from "@/components/agents/agent-lifecycle"
import { AgentComparison } from "@/components/agents/agent-comparison"
import { AgentsFAQ } from "@/components/agents/agents-faq"
import { AgentsCTA } from "@/components/agents/agents-cta"

export default function AIAgentsPage() {
  return (
    <main>
      <AgentsHero />
      <AgentsStats />
      <WhatIsAgent />
      <AgentCategories />
      <FeaturedAgents />
      <AgentCollaboration />
      <AgentMarketplace />
      <AgentCapabilities />
      <AgentLifecycle />
      <AgentComparison />
      <AgentsFAQ />
      <AgentsCTA />
    </main>
  )
}
