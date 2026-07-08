export default function ProductsGrid() {
  const products = [
    {
      name: "PROSPEC One",
      description: "Complete all-in-one university operating system with all modules unified into one intelligent ecosystem.",
      featured: true,
    },
    {
      name: "PROSPEC ERP",
      description: "Enterprise resource planning system powering core university operations and financial management.",
      featured: false,
    },
    {
      name: "PROSPEC Admissions",
      description: "Streamlined admissions management from application to enrollment with intelligent automation.",
      featured: false,
    },
    {
      name: "PROSPEC Campus",
      description: "Student Information System connecting academic records, registrations, and institutional data.",
      featured: false,
    },
    {
      name: "PROSPEC Faculty",
      description: "Faculty management portal for schedules, evaluations, research tracking, and performance reviews.",
      featured: false,
    },
    {
      name: "PROSPEC Learn",
      description: "Learning Management System enabling virtual classrooms, course content, and student engagement.",
      featured: false,
    },
    {
      name: "PROSPEC Exam",
      description: "Online examination platform supporting various assessment formats and real-time result analysis.",
      featured: false,
    },
    {
      name: "PROSPEC Finance",
      description: "Financial management suite including accounting, budgeting, payroll, and fund management.",
      featured: false,
    },
    {
      name: "PROSPEC Hostel",
      description: "Hostel management system for room allocation, mess management, and resident administration.",
      featured: false,
    },
    {
      name: "PROSPEC Library",
      description: "Integrated library management system with cataloging, circulation, and digital resource access.",
      featured: false,
    },
    {
      name: "PROSPEC Transport",
      description: "Transportation management for bus routes, schedules, and vehicle tracking with GPS integration.",
      featured: false,
    },
    {
      name: "PROSPEC Placement",
      description: "Placement and career services platform connecting students with recruiters and opportunities.",
      featured: false,
    },
    {
      name: "PROSPEC Connect",
      description: "Alumni engagement platform for networking, events, and lifelong institutional relationships.",
      featured: false,
    },
    {
      name: "PROSPEC CRM",
      description: "Customer relationship management for student recruitment, retention, and stakeholder engagement.",
      featured: false,
    },
    {
      name: "PROSPEC Insight",
      description: "Advanced analytics and business intelligence platform delivering data-driven institutional insights.",
      featured: false,
    },
    {
      name: "PROSPEC AI",
      description: "Artificial intelligence suite with predictive analytics, automation, and intelligent recommendations.",
      featured: false,
    },
    {
      name: "PROSPEC Mobile",
      description: "Mobile applications for students, faculty, parents, and administrators with offline functionality.",
      featured: false,
    },
    {
      name: "PROSPEC Identity",
      description: "Enterprise identity and access management with Single Sign-On and role-based security controls.",
      featured: false,
    },
    {
      name: "PROSPEC Docs",
      description: "Collaborative documentation platform for institutional knowledge management and documentation.",
      featured: false,
    },
    {
      name: "PROSPEC Workflow",
      description: "Workflow automation engine for automating repetitive processes across all modules.",
      featured: false,
    },
    {
      name: "PROSPEC APIs",
      description: "Comprehensive API framework enabling seamless integrations with third-party applications.",
      featured: false,
    },
  ]

  return (
    <section className="w-full py-12 md:py-16 lg:py-20">
      <div className="max-w-[1060px] mx-auto px-4 md:px-8 lg:px-0">
        <h2 className="text-3xl md:text-4xl font-serif text-[#37322f] mb-12 text-center">
          Our Complete Product Ecosystem
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className={`p-6 md:p-8 rounded-lg border transition-all hover:shadow-md ${
                product.featured
                  ? "lg:col-span-2 lg:row-span-1 bg-white border-[#37322F] shadow-lg md:p-10"
                  : "bg-white border-[#e0dedb] shadow-sm"
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className={`${product.featured ? "text-2xl md:text-3xl" : "text-lg md:text-xl"} font-semibold text-[#49423d]`}>
                  {product.name}
                </h3>
                {product.featured && (
                  <span className="text-sm font-medium bg-[#F7F5F3] px-3 py-1 rounded-full text-[#49423d]">
                    Flagship
                  </span>
                )}
              </div>
              <p className={`${product.featured ? "text-base md:text-lg" : "text-sm md:text-base"} text-[#605a57] leading-relaxed mb-4`}>
                {product.description}
              </p>
              <button className="text-sm font-medium text-[#37322F] hover:text-[#1f1b19] transition-colors">
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
