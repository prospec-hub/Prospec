export function Footer() {
  const footerLinks = {
    "AI Platform": ["Student AI", "Faculty AI", "Knowledge AI", "Workflow AI", "Analytics AI", "Voice AI"],
    Solutions: [
      "Universities",
      "Engineering Colleges",
      "Medical Colleges",
      "Private Institutions",
      "Government Universities",
      "Multi-campus",
    ],
    Platform: ["Features", "Security", "Integrations", "API", "Pricing", "Roadmap"],
    Resources: ["Documentation", "Help Center", "Case Studies", "Blog", "Developer Docs", "Privacy"],
    Company: ["About", "Careers", "Partners", "Contact", "LinkedIn", "YouTube"],
  }

  return (
    <footer className="border-t border-border py-16 px-6 bg-[#f4f6fb] dark:bg-[#09090B] transition-colors">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          {/* Logo */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-md bg-blue-600 flex items-center justify-center shrink-0">
                <span className="text-white font-bold text-xs">P</span>
              </div>
              <span className="text-foreground font-bold text-sm tracking-wide">PROSPEC</span>
            </div>
            <p className="text-muted-foreground text-xs leading-relaxed">Building Intelligent Systems</p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-foreground font-semibold text-sm mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-xs">
            &copy; {new Date().getFullYear()} Prospec AI. All rights reserved.
          </p>
          <p className="text-muted-foreground text-xs">
            AI Operating System for Higher Education
          </p>
        </div>
      </div>
    </footer>
  )
}
