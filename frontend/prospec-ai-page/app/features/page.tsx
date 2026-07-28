import { FeaturesHero } from "@/components/features/features-hero"
import { FeaturesStats } from "@/components/features/features-stats"
import { FeatureCards } from "@/components/features/feature-cards"
import { WorkflowPipeline } from "@/components/features/workflow-pipeline"
import { KnowledgeSearch } from "@/components/features/knowledge-search"
import { DepartmentShowcase } from "@/components/features/department-showcase"
import { FeaturesSecurity } from "@/components/features/features-security"
import { IntegrationsGrid } from "@/components/features/integrations-grid"
import { FeaturesComparison } from "@/components/features/features-comparison"
import { WhyProspec } from "@/components/features/why-prospec"
import { FeaturesCTA } from "@/components/features/features-cta"

export default function FeaturesPage() {
  return (
    <main>
      <FeaturesHero />
      <FeaturesStats />
      <FeatureCards />
      <WorkflowPipeline />
      <KnowledgeSearch />
      <DepartmentShowcase />
      <FeaturesComparison />
      <FeaturesSecurity />
      <IntegrationsGrid />
      <WhyProspec />
      <FeaturesCTA />
    </main>
  )
}
