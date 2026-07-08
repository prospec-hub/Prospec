export default function ProspecOneShowcase() {
  const includedProducts = [
    "PROSPEC ERP",
    "PROSPEC Admissions",
    "PROSPEC Campus (SIS)",
    "PROSPEC Faculty",
    "PROSPEC Learn (LMS)",
    "PROSPEC Exam",
    "PROSPEC Finance",
    "PROSPEC Hostel",
    "PROSPEC Library",
    "PROSPEC Transport",
    "PROSPEC Placement",
    "PROSPEC Connect",
    "PROSPEC CRM",
    "PROSPEC Insight",
    "PROSPEC AI",
    "PROSPEC Mobile",
    "PROSPEC Identity",
    "PROSPEC Docs",
    "PROSPEC Workflow",
    "PROSPEC APIs",
  ]

  const keyBenefits = [
    "Complete Digital University Ecosystem",
    "AI Integrated Across Every Department",
    "Single Login & Unified Experience",
    "Modular & Scalable Architecture",
    "Enterprise Security",
    "Cloud & On-Premise Deployment",
    "Real-Time Analytics & Executive Dashboards",
    "API-First Integrations",
    "Mobile Apps for Students, Faculty, Parents & Administrators",
  ]

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 border-t border-b border-[#e0dedb]">
      <div className="max-w-[1060px] mx-auto px-4 md:px-8 lg:px-0">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <div className="px-4 py-2 bg-white border border-[#e0dedb] rounded-full shadow-sm">
            <span className="text-sm font-medium text-[#49423d]">⭐ Flagship Platform</span>
          </div>
        </div>

        {/* Title and Tagline */}
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-[#37322f] mb-3 md:mb-4">
            PROSPEC One
          </h2>
          <p className="text-xl md:text-2xl font-medium text-[#605a57] mb-4">
            One Platform. Every Department. Complete University Transformation.
          </p>
        </div>

        {/* Description */}
        <div className="max-w-2xl mx-auto text-center mb-10 md:mb-12">
          <p className="text-base md:text-lg leading-relaxed text-[#49423d]">
            PROSPEC One is our flagship all-in-one university operating system that unifies every department into a single intelligent platform. Instead of purchasing multiple disconnected software solutions, institutions get one integrated ecosystem powered by AI, automation, analytics, and enterprise-grade security.
          </p>
        </div>

        {/* Included Products */}
        <div className="mb-12 md:mb-16">
          <h3 className="text-lg md:text-xl font-semibold text-[#49423d] mb-6 text-center">
            Included Products
          </h3>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {includedProducts.map((product, index) => (
              <div
                key={index}
                className="px-4 py-2 bg-[#F7F5F3] border border-[#e0dedb] rounded-full text-sm md:text-base font-medium text-[#49423d] hover:bg-white hover:shadow-sm transition-all"
              >
                {product}
              </div>
            ))}
          </div>
        </div>

        {/* Key Benefits */}
        <div className="mb-12 md:mb-16">
          <h3 className="text-lg md:text-xl font-semibold text-[#49423d] mb-6 text-center">
            Key Benefits
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {keyBenefits.map((benefit, index) => (
              <div
                key={index}
                className="p-6 bg-white border border-[#e0dedb] rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <p className="text-sm md:text-base font-medium text-[#49423d]">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-6">
          <button className="px-8 md:px-12 py-3 md:py-[10px] bg-[#37322F] text-white rounded-full font-medium text-sm md:text-base shadow-[0px_0px_0px_2.5px_rgba(255,255,255,0.08)_inset] hover:bg-[#2A2520] transition-colors">
            Explore PROSPEC One
          </button>
          <button className="px-8 md:px-12 py-3 md:py-[10px] bg-white text-[#37322F] border border-[#e0dedb] rounded-full font-medium text-sm md:text-base hover:bg-[#F7F5F3] transition-colors">
            Book Enterprise Demo
          </button>
        </div>
      </div>
    </section>
  )
}
