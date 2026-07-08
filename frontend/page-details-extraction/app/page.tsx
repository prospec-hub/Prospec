import { SiteNavigation } from "@/components/shared/site-navigation"
import { HeroSection } from "@/components/landing/hero-section"
import { FeaturesSection } from "@/components/landing/features-section"
import { HowItWorksSection } from "@/components/landing/how-it-works-section"
import { InfrastructureSection } from "@/components/landing/infrastructure-section"
import { MetricsSection } from "@/components/landing/metrics-section"
import { IntegrationsSection } from "@/components/landing/integrations-section"
import { SecuritySection } from "@/components/landing/security-section"
import { EcosystemPreview } from "@/components/landing/ecosystem-preview"
import { TransformationJourney } from "@/components/landing/transformation-journey"
import { CtaSection } from "@/components/landing/cta-section"
import { FooterSection } from "@/components/landing/footer-section"

export default function Home() {
  return (
    <div className="theme-landing">
      <main className="relative min-h-screen overflow-x-hidden noise-overlay bg-background text-foreground">
        <SiteNavigation />
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <InfrastructureSection />
        <MetricsSection />
        <IntegrationsSection />
        <SecuritySection />
        <EcosystemPreview />
        <TransformationJourney />
        <CtaSection />
        <FooterSection />
      </main>
    </div>
  )
}
