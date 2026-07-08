"use client";

import { useEffect, useRef, useState } from "react";

const journey = [
  "Student Applies",
  "Admissions",
  "Enrollment",
  "Learning",
  "Examinations",
  "Results",
  "Placement",
  "Alumni",
  "AI Lifetime Engagement",
];

export function TransformationJourney() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="journey" ref={sectionRef} className="relative py-24 lg:py-32 border-t border-foreground/10 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            The lifecycle
            <span className="w-8 h-px bg-foreground/30" />
          </span>
          <h2 className={`text-4xl lg:text-6xl font-display tracking-tight mb-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            One platform for the
            <br />
            entire student journey.
          </h2>
          <p className="text-xl text-muted-foreground">
            From the first application to lifelong alumni engagement &mdash; every stage, one intelligent system.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* connecting line (desktop) */}
          <div className="hidden lg:block absolute top-[13px] left-0 right-0 h-px bg-foreground/10" />
          <div
            className="hidden lg:block absolute top-[13px] left-0 h-px bg-foreground"
            style={{ width: isVisible ? "100%" : "0%", transition: "width 1600ms ease-out" }}
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:flex lg:justify-between gap-y-10 gap-x-4">
            {journey.map((step, index) => (
              <div
                key={step}
                className={`relative flex flex-col items-center lg:flex-1 text-center transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                <div className="w-[26px] h-[26px] rounded-full bg-background border border-foreground/20 flex items-center justify-center mb-4 relative z-10">
                  <span className="w-2 h-2 rounded-full bg-foreground" />
                </div>
                <span className="font-mono text-[10px] text-muted-foreground mb-1">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-sm font-medium leading-tight px-1">{step}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-16 lg:mt-20 text-center text-xl lg:text-2xl font-display text-muted-foreground max-w-2xl mx-auto">
          This isn&apos;t software for one department.
          <br />
          <span className="text-foreground">It&apos;s the platform behind an entire university.</span>
        </p>
      </div>
    </section>
  );
}
