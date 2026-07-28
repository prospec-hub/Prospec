export function CTASection() {
  return (
    <section className="py-24 px-6" style={{ backgroundColor: "#09090B" }}>
      <div className="max-w-6xl mx-auto">
        <div
          className="rounded-2xl p-12 flex flex-col md:flex-row items-center justify-between gap-8"
          style={{
            background: "linear-gradient(135deg, rgba(30,129,206,0.12) 0%, rgba(14,93,158,0.06) 100%)",
            border: "1px solid rgba(30,129,206,0.25)",
            boxShadow: "0 0 60px rgba(30,129,206,0.08)",
          }}
        >
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-semibold text-white tracking-tight text-balance">
              Empower Your University with Intelligent AI
            </h2>
            <p className="mt-3 text-sm text-zinc-400 max-w-md">
              Join institutions modernizing education with enterprise AI designed exclusively for higher education.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button className="px-5 py-2.5 border text-white font-medium rounded-lg hover:bg-zinc-800 transition-colors text-sm" style={{ borderColor: "rgba(30,129,206,0.35)" }}>
              Book AI Consultation
            </button>
            <button
              className="px-5 py-2.5 text-white font-semibold rounded-lg transition-all text-sm"
              style={{
                background: "linear-gradient(135deg, #1e81ce 0%, #0e5d9e 100%)",
                boxShadow: "0 0 20px rgba(30,129,206,0.4)",
              }}
            >
              Request Live Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
