import {
  GraduationCap,
  Building2,
  ClipboardList,
  Landmark,
  Smartphone,
  BrainCircuit,
  Megaphone,
  ShieldCheck,
  Webhook,
} from "lucide-react"

const categories = [
  { icon: GraduationCap, name: "Academic", modules: ["Learn (LMS)", "Exam", "Library", "Faculty"] },
  { icon: Building2, name: "Campus Operations", modules: ["Campus (SIS)", "Hostel", "Transport"] },
  { icon: ClipboardList, name: "Administration", modules: ["ERP", "Workflow", "Docs"] },
  { icon: Landmark, name: "Finance", modules: ["Finance"] },
  { icon: Smartphone, name: "Student Experience", modules: ["Mobile", "Placement"] },
  { icon: BrainCircuit, name: "AI & Analytics", modules: ["AI", "Insight"] },
  { icon: Megaphone, name: "Communication", modules: ["Admissions", "CRM", "Connect"] },
  { icon: ShieldCheck, name: "Identity & Security", modules: ["Identity"] },
  { icon: Webhook, name: "Integrations", modules: ["APIs"] },
]

export default function ProductCategories() {
  return (
    <section id="categories" className="w-full border-b border-[rgba(55,50,47,0.12)] bg-white">
      <div className="max-w-[1060px] mx-auto px-4 sm:px-6 md:px-8 lg:px-0 py-16 md:py-24">
        <div className="max-w-[620px] mx-auto text-center mb-12 md:mb-14">
          <div className="inline-flex items-center gap-2 px-[14px] py-[6px] bg-[#F7F5F3] rounded-full border border-[rgba(2,6,23,0.08)] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#37322F]" />
            <span className="text-[#37322F] text-xs font-medium font-sans">Explore by Category</span>
          </div>
          <h2 className="text-[#37322F] text-3xl md:text-4xl lg:text-5xl font-serif leading-[1.1] tracking-tight mb-4">
            Twenty products, nine simple categories
          </h2>
          <p className="text-[#605A57] text-base md:text-lg font-sans leading-relaxed">
            Find exactly what your institution needs without the noise.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {categories.map((c) => {
            const Icon = c.icon
            return (
              <div
                key={c.name}
                className="group p-6 bg-[#F7F5F3] border border-[rgba(55,50,47,0.10)] rounded-2xl hover:bg-white hover:shadow-[0px_8px_28px_rgba(55,50,47,0.08)] hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-[#37322F] flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-white" strokeWidth={1.6} />
                </div>
                <h3 className="text-[#37322F] text-lg font-semibold font-sans mb-3">{c.name}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {c.modules.map((m) => (
                    <span
                      key={m}
                      className="px-2.5 py-1 rounded-md bg-white border border-[rgba(55,50,47,0.12)] text-[#605A57] text-xs font-sans group-hover:border-[rgba(55,50,47,0.2)] transition-colors"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
