import { PortfolioNavbar } from "@/components/solutions/PortfolioNavbar"
import { ProductTeaserCard } from "@/components/solutions/ProductTeaserCard"
import { BankingScaleHero } from "@/components/solutions/BankingScaleHero"
import { FeaturesSection } from "@/components/solutions/FeaturesSection"
import { CaseStudiesCarousel } from "@/components/solutions/CaseStudiesCarousel"
import { IntegrationCarousel } from "@/components/solutions/IntegrationCarousel"
import { PricingSection } from "@/components/solutions/PricingSection"
import { FAQSection } from "@/components/solutions/FAQSection"
import { Footer } from "@/components/solutions/Footer"

export default function Page() {
  return (
    <div className="theme-solutions bg-background text-foreground">
      <PortfolioNavbar />
      <ProductTeaserCard />
      <BankingScaleHero />
      <FeaturesSection />
      <CaseStudiesCarousel />
      <IntegrationCarousel />
      <PricingSection />
      <FAQSection />
      <Footer />
    </div>
  )
}
