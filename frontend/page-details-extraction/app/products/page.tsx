import { SiteNavigation } from "@/components/shared/site-navigation"
import UniversityDashboard from "@/components/products/university-dashboard"
import WhyProspec from "@/components/products/why-prospec"
import ProspecOneShowcase from "@/components/products/prospec-one-showcase"
import EcosystemVisualization from "@/components/products/ecosystem-visualization"
import ProductCategories from "@/components/products/product-categories"
import ProductsGrid from "@/components/products/products-grid"
import HowItConnects from "@/components/products/how-it-connects"
import SolutionsSection from "@/components/products/solutions-section"
import ExecutiveSection from "@/components/products/executive-section"
import PackagesComparison from "@/components/products/packages-comparison"
import PackageConfigurator from "@/components/products/package-configurator"
import TestimonialsSection from "@/components/products/testimonials-section"
import DocumentationSection from "@/components/products/documentation-section"
import FAQSection from "@/components/products/faq-section"
import CTASection from "@/components/products/cta-section"
import FooterSection from "@/components/products/footer-section"

export default function ProductsPage() {
  return (
    <div className="theme-products w-full min-h-screen relative bg-[#F7F5F3] overflow-x-hidden">
      <SiteNavigation />

      {/* ===== Hero (Vision) ===== */}
      <section className="relative w-full border-b border-[rgba(55,50,47,0.12)] overflow-hidden">
        {/* framing guide lines */}
        <div className="pointer-events-none absolute inset-y-0 left-1/2 -translate-x-1/2 w-full max-w-[1060px] hidden lg:block">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-[rgba(55,50,47,0.08)]" />
          <div className="absolute right-0 top-0 bottom-0 w-px bg-[rgba(55,50,47,0.08)]" />
        </div>

        {/* soft pattern behind hero */}
        <div className="absolute top-[220px] left-1/2 -translate-x-1/2 z-0 pointer-events-none opacity-40">
          <img
            src="/mask-group-pattern.svg"
            alt=""
            className="w-[1200px] md:w-[2000px] h-auto mix-blend-multiply"
            style={{ filter: "saturate(0.6) brightness(1.15)" }}
          />
        </div>

        <div className="relative z-10 max-w-[1060px] mx-auto px-4 sm:px-6 md:px-8 lg:px-0 pt-32 md:pt-40 pb-16 md:pb-20 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-[14px] py-[6px] bg-white shadow-[0px_0px_0px_4px_rgba(55,50,47,0.05)] rounded-full border border-[rgba(2,6,23,0.08)] mb-7">
            <span className="w-1.5 h-1.5 rounded-full bg-[#37322F]" />
            <span className="text-[#37322F] text-xs font-medium font-sans">The University Operating System</span>
          </div>

          <h1 className="max-w-[900px] text-[#37322F] text-[40px] xs:text-5xl sm:text-6xl md:text-7xl lg:text-[88px] font-serif leading-[0.98] tracking-tight mb-6">
            The Operating System for
            <br className="hidden sm:block" /> Modern Universities
          </h1>

          <p className="max-w-[600px] text-[#605A57] text-base md:text-xl font-sans leading-relaxed mb-9">
            PROSPEC unifies every department — admissions to alumni — into one intelligent,
            AI-powered platform. Not a collection of tools. A complete digital transformation.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3 mb-16 md:mb-20">
            <a href="#products" className="px-8 py-3.5 bg-[#37322F] text-white rounded-full font-medium text-sm hover:bg-[#2A2520] transition-colors shadow-[0px_0px_0px_2.5px_rgba(255,255,255,0.5)_inset]">
              Explore the Platform
            </a>
            <a href="#cta" className="px-8 py-3.5 bg-white text-[#37322F] border border-[rgba(55,50,47,0.14)] rounded-full font-medium text-sm hover:bg-[#F7F5F3] transition-colors">
              Book a Demo
            </a>
          </div>

          {/* Rotating university dashboard */}
          <UniversityDashboard />
        </div>
      </section>

      {/* ===== Narrative ===== */}
      <WhyProspec />
      <ProspecOneShowcase />
      <EcosystemVisualization />
      <ProductCategories />
      <ProductsGrid />
      <HowItConnects />
      <SolutionsSection />
      <ExecutiveSection />
      <PackagesComparison />
      <PackageConfigurator />
      <TestimonialsSection />
      <DocumentationSection />
      <FAQSection />
      <CTASection />

      {/* Footer inside the framed column look */}
      <div className="max-w-[1060px] mx-auto px-4 sm:px-6 md:px-8 lg:px-0">
        <FooterSection />
      </div>
    </div>
  )
}
