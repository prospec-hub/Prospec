import { SolutionsHero } from "@/components/solutions/solutions-hero"
import { SolutionsDepartmentGrid } from "@/components/solutions/solutions-department-grid"
import { InstitutionalWorkflow } from "@/components/solutions/institutional-workflow"
import { StakeholderCards } from "@/components/solutions/stakeholder-cards"
import { EnterpriseCapabilities } from "@/components/solutions/enterprise-capabilities"
import { WhyChooseProspec } from "@/components/solutions/why-choose-prospec"
import { OutcomesMetrics } from "@/components/solutions/outcomes-metrics"
import { IntegrationEcosystem } from "@/components/solutions/integration-ecosystem"
import { SolutionsSecurity } from "@/components/solutions/solutions-security"
import { ImplementationFramework } from "@/components/solutions/implementation-framework"
import { SolutionsComparison } from "@/components/solutions/solutions-comparison"
import { SolutionsCTA } from "@/components/solutions/solutions-cta"

export default function SolutionsPage() {
  return (
    <main>
      <SolutionsHero />
      <SolutionsDepartmentGrid />
      <InstitutionalWorkflow />
      <StakeholderCards />
      <EnterpriseCapabilities />
      <WhyChooseProspec />
      <OutcomesMetrics />
      <IntegrationEcosystem />
      <SolutionsSecurity />
      <ImplementationFramework />
      <SolutionsComparison />
      <SolutionsCTA />
    </main>
  )
}
