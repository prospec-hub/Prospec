"use client";

import { useEffect, useRef, useState } from "react";

const modules = [
  { name: "Admissions", tagline: "Every application, captured and scored.", connects: ["Campus", "Finance", "CRM"] },
  { name: "Campus", tagline: "One student record, shared everywhere.", connects: ["Learning", "Hostel", "Library"] },
  { name: "Learning", tagline: "Courses, content and engagement, live.", connects: ["Exams", "Faculty", "AI"] },
  { name: "Examinations", tagline: "Assessments and results in real time.", connects: ["Campus", "Insight", "AI"] },
  { name: "Finance", tagline: "Fees, payroll and budgets, reconciled.", connects: ["Admissions", "ERP", "Insight"] },
  { name: "Placement", tagline: "Careers, recruiters and outcomes.", connects: ["Campus", "Alumni", "AI"] },
  { name: "Alumni", tagline: "Lifelong relationships, one network.", connects: ["Connect", "CRM", "Finance"] },
  { name: "AI", tagline: "Intelligence woven through every module.", connects: ["Every module"] },
];

export function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % modules.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const active = modules[activeStep];

  return (
    <section
      id="ecosystem"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-foreground text-background overflow-hidden"
    >
      {/* Diagonal lines pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(-45deg, transparent, transparent 40px, currentColor 40px, currentColor 41px)`
        }} />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="mb-16 lg:mb-24 max-w-3xl">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-background/50 mb-6">
            <span className="w-8 h-px bg-background/30" />
            The ecosystem
          </span>
          <h2 className={`text-4xl lg:text-6xl font-display tracking-tight transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            One connected
            <br />
            <span className="text-background/50">university ecosystem.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Module flow */}
          <div className="space-y-0">
            {modules.map((m, index) => (
              <button
                key={m.name}
                type="button"
                onClick={() => setActiveStep(index)}
                className={`w-full text-left py-5 border-b border-background/10 transition-all duration-500 group flex items-center gap-6 ${
                  activeStep === index ? "opacity-100" : "opacity-40 hover:opacity-70"
                }`}
              >
                <span className="font-mono text-sm text-background/40 w-6">{String(index + 1).padStart(2, "0")}</span>
                <span className="text-2xl lg:text-3xl font-display group-hover:translate-x-2 transition-transform duration-300 flex-1">
                  {m.name}
                </span>
                {activeStep === index && (
                  <span className="hidden sm:block w-24 h-px bg-background/20 overflow-hidden">
                    <span className="block h-full bg-background w-0" style={{ animation: "ecoProgress 3.5s linear forwards" }} />
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Spotlight panel */}
          <div className="lg:sticky lg:top-32 self-start">
            <div className="border border-background/10">
              <div className="px-6 py-4 border-b border-background/10 flex items-center justify-between">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-background/20" />
                  <div className="w-3 h-3 rounded-full bg-background/20" />
                  <div className="w-3 h-3 rounded-full bg-background/20" />
                </div>
                <span className="text-xs font-mono text-background/40">prospec.ecosystem</span>
              </div>

              <div key={activeStep} className="p-8 lg:p-12 min-h-[280px] flex flex-col justify-center animate-[ecoFade_0.5s_ease]">
                <span className="font-mono text-xs text-background/40 mb-4">PROSPEC {active.name}</span>
                <h3 className="text-4xl lg:text-5xl font-display mb-4">{active.name}</h3>
                <p className="text-background/60 text-lg leading-relaxed mb-8">{active.tagline}</p>
                <div>
                  <span className="font-mono text-xs text-background/40 block mb-3">Connects to</span>
                  <div className="flex flex-wrap gap-2">
                    {active.connects.map((c) => (
                      <span key={c} className="px-3 py-1.5 border border-background/15 text-sm text-background/80">{c}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="px-6 py-4 border-t border-background/10 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs font-mono text-background/40">Syncing in real time</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes ecoProgress { from { width: 0%; } to { width: 100%; } }
        @keyframes ecoFade { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </section>
  );
}
