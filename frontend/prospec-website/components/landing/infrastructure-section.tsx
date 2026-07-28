"use client";

import { useEffect, useState, useRef } from "react";

const capabilities = [
  { title: "Cloud & On-Premise", detail: "Deploy the way your policy requires." },
  { title: "Multi-Campus Ready", detail: "One platform across every campus." },
  { title: "Unlimited Students", detail: "Scales from a college to a university system." },
  { title: "Role-Based Access", detail: "Precise control for every kind of user." },
  { title: "Enterprise Security", detail: "Encryption, isolation and audit by design." },
  { title: "Scalable Architecture", detail: "Built to grow without re-platforming." },
];

export function InfrastructureSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

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
      setActiveItem((prev) => (prev + 1) % capabilities.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="platform" ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Content */}
          <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
              <span className="w-8 h-px bg-foreground/30" />
              Enterprise platform
            </span>
            <h2 className="text-4xl lg:text-6xl font-display tracking-tight mb-8">
              Built for
              <br />
              enterprise universities.
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-12">
              PROSPEC is engineered for the scale and governance real institutions demand —
              deployed your way, secured to the core, and ready for every campus.
            </p>

            <div className="grid grid-cols-3 gap-8">
              <div>
                <div className="text-4xl lg:text-5xl font-display mb-2">∞</div>
                <div className="text-sm text-muted-foreground">Students</div>
              </div>
              <div>
                <div className="text-4xl lg:text-5xl font-display mb-2">Multi</div>
                <div className="text-sm text-muted-foreground">Campus ready</div>
              </div>
              <div>
                <div className="text-4xl lg:text-5xl font-display mb-2">2</div>
                <div className="text-sm text-muted-foreground">Cloud &amp; on-prem</div>
              </div>
            </div>
          </div>

          {/* Right: Capability list */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
            <div className="border border-foreground/10">
              <div className="px-6 py-4 border-b border-foreground/10 flex items-center justify-between">
                <span className="text-sm font-mono text-muted-foreground">Platform Capabilities</span>
                <span className="flex items-center gap-2 text-xs font-mono text-green-600">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  Enterprise-ready
                </span>
              </div>

              <div>
                {capabilities.map((c, index) => (
                  <div
                    key={c.title}
                    className={`px-6 py-5 border-b border-foreground/5 last:border-b-0 flex items-center justify-between transition-all duration-300 ${
                      activeItem === index ? "bg-foreground/[0.02]" : ""
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span className={`w-2 h-2 rounded-full transition-colors duration-300 ${activeItem === index ? "bg-foreground" : "bg-foreground/20"}`} />
                      <div>
                        <div className="font-medium">{c.title}</div>
                        <div className="text-sm text-muted-foreground">{c.detail}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
