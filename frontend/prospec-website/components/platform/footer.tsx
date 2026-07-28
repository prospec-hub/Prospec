export function PlatformFooter() {
  const footerLinks = {
    "AI Platform": ["Student AI", "Faculty AI", "Knowledge AI", "Workflow AI", "Analytics AI", "Voice AI"],
    Solutions: ["Universities", "Engineering Colleges", "Medical Colleges", "Private Institutions", "Government Universities", "Multi-campus"],
    Platform: ["Features", "Security", "Integrations", "API", "Pricing", "Roadmap"],
    Resources: ["Documentation", "Help Center", "Case Studies", "Blog", "Developer Docs", "Privacy"],
    Company: ["About", "Careers", "Partners", "Contact", "LinkedIn", "YouTube"],
  }

  return (
    <footer className="border-t py-16 px-6" style={{ backgroundColor: "#F8FAFC", borderColor: "#E2E8F0" }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-md flex items-center justify-center" style={{ background: "linear-gradient(135deg,#1e81ce,#0e5d9e)" }}>
                <svg width="16" height="16" viewBox="0 0 100 100" fill="none">
                  <path d="M20 30 L50 12 L80 30 L80 70 L50 88 L20 70 Z" fill="#fff" fillOpacity="0.95" />
                  <path d="M50 12 L50 50 L20 30" fill="#1e81ce" opacity="0.5" />
                </svg>
              </div>
              <span className="text-slate-900 font-semibold text-sm tracking-tight">PROSPEC</span>
            </div>
            <p className="text-slate-500 text-xs mt-2">Building Intelligent Systems</p>
          </div>
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-slate-900 font-semibold text-sm mb-4 tracking-tight">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-slate-500 hover:text-slate-900 transition-colors text-sm">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-3" style={{ borderColor: "#E2E8F0" }}>
          <p className="text-slate-400 text-sm">© 2026 PROSPEC. All rights reserved.</p>
          <p className="text-slate-400 text-sm">The AI Operating System for Modern Universities</p>
        </div>
      </div>
    </footer>
  )
}
