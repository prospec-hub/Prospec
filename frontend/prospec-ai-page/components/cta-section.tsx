export function CTASection() {
  return (
    <section className="py-24 px-6 bg-[#f4f6fb] dark:bg-[#09090B] transition-colors">
      <div className="max-w-6xl mx-auto">
        <div className="rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-600/10 to-indigo-600/5 p-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-[42px] font-semibold text-foreground tracking-tight text-balance mb-3">
                Empower Your University with Intelligent AI
              </h2>
              <p className="text-muted-foreground text-base max-w-lg leading-relaxed">
                Join institutions modernizing education with enterprise AI designed exclusively for higher education.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
              <button className="px-6 py-2.5 border border-border text-foreground font-medium rounded-lg hover:bg-muted transition-colors text-sm whitespace-nowrap">
                Book AI Consultation
              </button>
              <button className="px-6 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors text-sm whitespace-nowrap">
                Request Live Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
