"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const products = [
  { name: "PROSPEC One", tagline: "The complete university operating system.", featured: true },
  { name: "PROSPEC ERP", tagline: "The operational core of the institution." },
  { name: "PROSPEC AI", tagline: "Intelligence across every department." },
  { name: "Student Portal", tagline: "One app for a student's entire campus life." },
  { name: "Faculty Portal", tagline: "Teaching, research and evaluation, unified." },
  { name: "Admissions", tagline: "From application to enrollment, automated." },
];

export function EcosystemPreview() {
  const [isVisible, setIsVisible] = useState(false);
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

  return (
    <section id="products-preview" ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 lg:mb-20">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
              <span className="w-8 h-px bg-foreground/30" />
              The ecosystem
            </span>
            <h2 className={`text-4xl lg:text-6xl font-display tracking-tight transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              Explore the
              <br />
              PROSPEC ecosystem.
            </h2>
          </div>
          <a href="/products" className="inline-flex items-center gap-2 text-base font-medium group shrink-0">
            Explore all products
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-foreground/10 border border-foreground/10">
          {products.map((p, index) => (
            <a
              key={p.name}
              href="/products"
              className={`group relative bg-background p-8 lg:p-10 flex flex-col min-h-[220px] transition-all duration-500 hover:bg-foreground/[0.02] ${
                p.featured ? "md:col-span-2 lg:col-span-1 lg:row-span-1" : ""
              } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              {p.featured && (
                <span className="absolute top-8 right-8 px-3 py-1 bg-foreground text-background text-[10px] font-mono uppercase tracking-widest">
                  Flagship
                </span>
              )}
              <div className="flex-1">
                <h3 className="text-2xl lg:text-3xl font-display mb-3 group-hover:translate-x-1 transition-transform duration-300">
                  {p.name}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{p.tagline}</p>
              </div>
              <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                Learn more
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
