import { Check } from "lucide-react"

type Tier = {
  name: string
  price: string
  priceNote: string
  tagline: string
  features: string[]
  cta: string
  badge?: string
  dark?: boolean
}

const tiers: Tier[] = [
  {
    name: "Standard",
    price: "₹15 L",
    priceNote: "starting, one-time",
    tagline: "For departments and smaller institutions.",
    features: ["Up to 6 core modules", "Up to 3,000 students", "Cloud deployment", "Standard support", "Mobile apps included"],
    cta: "Talk to Sales",
  },
  {
    name: "Professional",
    price: "₹28 L",
    priceNote: "starting, one-time",
    tagline: "For mid-size and growing universities.",
    features: ["Up to 12 modules", "Up to 15,000 students", "Cloud or on-premise", "Priority support", "AI suite included", "API access"],
    cta: "Talk to Sales",
    badge: "Most Popular",
  },
  {
    name: "Enterprise",
    price: "₹42 L",
    priceNote: "starting, one-time",
    tagline: "For large, multi-campus universities.",
    features: ["All 20 modules", "Unlimited students", "Dedicated account manager", "24/7 support & SLA", "Custom integrations", "SSO & advanced security"],
    cta: "Talk to Sales",
  },
  {
    name: "PROSPEC One",
    price: "Custom",
    priceNote: "tailored to your institution",
    tagline: "Complete AI-powered university transformation.",
    features: ["Everything in Enterprise", "Full ecosystem, unified", "Custom development", "White-glove implementation", "On-site rollout & training", "Dedicated solution architect"],
    cta: "Book Enterprise Demo",
    badge: "Best Value",
    dark: true,
  },
]

export default function PackagesComparison() {
  return (
    <section id="packages" className="w-full border-b border-[rgba(55,50,47,0.12)] bg-[#F7F5F3]">
      <div className="max-w-[1060px] mx-auto px-4 sm:px-6 md:px-8 lg:px-0 py-16 md:py-24">
        <div className="max-w-[640px] mx-auto text-center mb-12 md:mb-14">
          <div className="inline-flex items-center gap-2 px-[14px] py-[6px] bg-white shadow-[0px_0px_0px_4px_rgba(55,50,47,0.05)] rounded-full border border-[rgba(2,6,23,0.08)] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#37322F]" />
            <span className="text-[#37322F] text-xs font-medium font-sans">Enterprise Packages</span>
          </div>
          <h2 className="text-[#37322F] text-3xl md:text-4xl lg:text-5xl font-serif leading-[1.1] tracking-tight mb-4">
            Packages that scale with your institution
          </h2>
          <p className="text-[#605A57] text-base md:text-lg font-sans leading-relaxed">
            Universities don&apos;t buy software per user. Every engagement is scoped to your size, deployment and goals — these are starting points.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 items-stretch">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`relative flex flex-col rounded-2xl border p-6 md:p-7 transition-all duration-300 ${
                t.dark
                  ? "bg-[#37322F] border-[#37322F] shadow-[0px_20px_50px_rgba(55,50,47,0.28)]"
                  : "bg-white border-[rgba(55,50,47,0.12)] hover:shadow-[0px_10px_30px_rgba(55,50,47,0.10)]"
              }`}
            >
              {t.badge && (
                <span
                  className={`absolute -top-3 left-6 px-3 py-1 rounded-full text-[11px] font-semibold font-sans ${
                    t.dark ? "bg-white text-[#37322F]" : "bg-[#37322F] text-white"
                  }`}
                >
                  {t.badge}
                </span>
              )}

              <h3 className={`text-lg font-semibold font-sans mb-1 ${t.dark ? "text-white" : "text-[#37322F]"}`}>
                {t.name}
              </h3>
              <p className={`text-[13px] font-sans leading-snug mb-5 min-h-[36px] ${t.dark ? "text-[#D2C6BF]" : "text-[#605A57]"}`}>
                {t.tagline}
              </p>

              <div className="mb-5">
                <div className={`font-serif leading-none ${t.dark ? "text-white" : "text-[#37322F]"} text-4xl`}>{t.price}</div>
                <div className={`text-xs font-sans mt-2 ${t.dark ? "text-[#B2AEA9]" : "text-[#847971]"}`}>{t.priceNote}</div>
              </div>

              <a
                href="#cta"
                className={`mb-6 px-4 py-2.5 rounded-full text-center text-sm font-medium transition-colors ${
                  t.dark
                    ? "bg-white text-[#37322F] hover:bg-[#F7F5F3]"
                    : "bg-[#37322F] text-white hover:bg-[#2A2520]"
                }`}
              >
                {t.cta}
              </a>

              <ul className="flex flex-col gap-2.5">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <Check className={`w-4 h-4 mt-0.5 shrink-0 ${t.dark ? "text-white" : "text-[#37322F]"}`} strokeWidth={2.5} />
                    <span className={`text-[13px] font-sans leading-snug ${t.dark ? "text-[#EFEAE6]" : "text-[rgba(55,50,47,0.85)]"}`}>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-[#847971] text-[13px] font-sans">
          Indicative starting prices. Final pricing depends on institution size, deployment model, integrations and implementation scope.
        </p>
      </div>
    </section>
  )
}
