const steps = [
  { module: "Admissions", event: "A student applies", detail: "Application captured, scored and tracked automatically." },
  { module: "ERP", event: "Profile is created", detail: "One record is generated and shared across every module." },
  { module: "Campus (SIS)", event: "Student portal activates", detail: "Registration, records and schedules go live instantly." },
  { module: "Learn (LMS)", event: "Course access granted", detail: "The student is enrolled and courseware unlocks." },
  { module: "Library", event: "Library account created", detail: "Borrowing and digital resources are ready on day one." },
  { module: "Hostel", event: "Hostel allocated", detail: "Room and mess assignment flow from the same profile." },
  { module: "Finance", event: "Fee record set up", detail: "Fees, scholarships and payments reconcile automatically." },
  { module: "PROSPEC AI", event: "AI assistant activates", detail: "The student gets an always-on copilot for campus life." },
  { module: "Placement", event: "Placement begins", detail: "In the final year, career services and drives kick in." },
  { module: "Connect", event: "Becomes an alumnus", detail: "On graduation, the record moves seamlessly to alumni." },
]

export default function HowItConnects() {
  return (
    <section id="how-it-connects" className="w-full border-b border-[rgba(55,50,47,0.12)] bg-white">
      <div className="max-w-[1060px] mx-auto px-4 sm:px-6 md:px-8 lg:px-0 py-16 md:py-24">
        <div className="max-w-[640px] mx-auto text-center mb-14 md:mb-16">
          <div className="inline-flex items-center gap-2 px-[14px] py-[6px] bg-[#F7F5F3] rounded-full border border-[rgba(2,6,23,0.08)] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#37322F]" />
            <span className="text-[#37322F] text-xs font-medium font-sans">One Student, One Journey</span>
          </div>
          <h2 className="text-[#37322F] text-3xl md:text-4xl lg:text-5xl font-serif leading-[1.1] tracking-tight mb-4">
            How everything works together
          </h2>
          <p className="text-[#605A57] text-base md:text-lg font-sans leading-relaxed">
            Follow a single student through the platform. No re-entry, no silos — one record moving with them from application to alumni.
          </p>
        </div>

        <div className="relative max-w-[720px] mx-auto">
          {/* vertical line */}
          <div className="absolute left-[19px] md:left-1/2 md:-translate-x-1/2 top-2 bottom-2 w-px bg-[rgba(55,50,47,0.14)]" />

          <div className="flex flex-col gap-6 md:gap-3">
            {steps.map((s, i) => (
              <div
                key={s.module}
                className={`relative flex items-start gap-5 md:gap-0 md:items-center ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* node */}
                <div className="relative z-10 shrink-0 md:absolute md:left-1/2 md:-translate-x-1/2">
                  <div className="w-10 h-10 rounded-full bg-[#37322F] text-white flex items-center justify-center font-sans text-sm font-semibold shadow-[0px_4px_12px_rgba(55,50,47,0.25)]">
                    {i + 1}
                  </div>
                </div>

                {/* card */}
                <div className={`flex-1 md:w-[calc(50%-40px)] md:flex-none ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <div className="p-5 bg-[#F7F5F3] border border-[rgba(55,50,47,0.10)] rounded-xl hover:bg-white hover:shadow-[0px_6px_20px_rgba(55,50,47,0.08)] transition-all duration-300">
                    <span className={`inline-block mb-2 px-2.5 py-0.5 rounded-full bg-white border border-[rgba(55,50,47,0.14)] text-[#37322F] text-[11px] font-medium font-sans`}>
                      PROSPEC {s.module}
                    </span>
                    <h3 className="text-[#37322F] text-base font-semibold font-sans mb-1">{s.event}</h3>
                    <p className="text-[#605A57] text-[13px] font-sans leading-relaxed">{s.detail}</p>
                  </div>
                </div>

                {/* spacer for alternating layout */}
                <div className="hidden md:block md:w-[calc(50%-40px)]" />
              </div>
            ))}
          </div>
        </div>

        <p className="mt-14 text-center max-w-[620px] mx-auto text-[#37322F] text-lg md:text-xl font-serif leading-relaxed tracking-tight">
          Universities aren&apos;t buying ten products. They&apos;re buying{" "}
          <span className="relative inline-block">
            one ecosystem
            <span className="absolute -bottom-1 left-0 right-0 h-2 bg-[rgba(55,50,47,0.10)]" />
          </span>
          .
        </p>
      </div>
    </section>
  )
}
