export function Footer() {
  const footerLinks = {
    "AI Platform": ["Student AI", "Faculty AI", "Knowledge AI", "Workflow AI", "Analytics AI", "Voice AI"],
    Solutions: ["Universities", "Engineering Colleges", "Medical Colleges", "Private Institutions", "Government Universities", "Multi-campus"],
    Platform: ["Features", "Security", "Integrations", "API", "Pricing", "Roadmap"],
    Resources: ["Documentation", "Help Center", "Case Studies", "Blog", "Developer Docs", "Privacy"],
    Company: ["About", "Careers", "Partners", "Contact", "LinkedIn", "YouTube"],
  }

  return (
    <footer className="border-t border-zinc-800 py-16 px-6" style={{ backgroundColor: "#09090B" }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2">
              <svg width="20" height="20" viewBox="0 0 100 100" fill="none">
                <path d="M20 30 L50 10 L80 30 L80 70 L50 90 L20 70 Z" fill="#1e81ce" stroke="#3ba3f5" strokeWidth="2" />
                <path d="M50 10 L50 50 L20 30" fill="#09090B" opacity="0.6" />
                <path d="M50 50 L80 70 L50 90" fill="#09090B" opacity="0.6" />
              </svg>
              <span className="text-white font-semibold text-sm tracking-tight">PROSPEC</span>
            </div>
            <p className="text-zinc-500 text-xs mt-2">Building Intelligent Systems</p>
          </div>
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold text-sm mb-4 tracking-tight">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-zinc-500 hover:text-zinc-300 transition-colors text-sm">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}
