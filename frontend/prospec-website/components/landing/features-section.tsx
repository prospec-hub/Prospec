"use client";

import { useEffect, useRef, useState } from "react";
import { Layers, Unplug, UserX, Database } from "lucide-react";

const problems = [
  {
    number: "01",
    icon: Unplug,
    title: "Disconnected Systems",
    description: "A dozen tools that don't talk to each other, each holding a fragment of the truth.",
  },
  {
    number: "02",
    icon: Layers,
    title: "Manual Operations",
    description: "Paper forms, spreadsheets and approvals that crawl from one desk to the next.",
  },
  {
    number: "03",
    icon: UserX,
    title: "Poor Student Experience",
    description: "Students chasing departments for answers they should get in a single tap.",
  },
  {
    number: "04",
    icon: Database,
    title: "No Unified Data",
    description: "The same record re-entered everywhere, and no single, real-time view for leadership.",
  },
];

function ProblemCard({ problem, index }: { problem: typeof problems[0]; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  const Icon = problem.icon;

  return (
    <div
      ref={cardRef}
      className={`group relative p-8 lg:p-10 border border-foreground/10 hover:bg-foreground/[0.02] transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex items-start justify-between mb-8">
        <div className="w-12 h-12 flex items-center justify-center border border-foreground/10 group-hover:bg-foreground group-hover:text-background transition-colors duration-300">
          <Icon className="w-5 h-5" strokeWidth={1.5} />
        </div>
        <span className="font-mono text-sm text-muted-foreground">{problem.number}</span>
      </div>
      <h3 className="text-2xl lg:text-3xl font-display mb-3 group-hover:translate-x-1 transition-transform duration-300">
        {problem.title}
      </h3>
      <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
    </div>
  );
}

export function FeaturesSection() {
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

  return (
    <section id="why" ref={sectionRef} className="relative py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="mb-16 lg:mb-24 max-w-3xl">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            Why change
          </span>
          <h2 className={`text-4xl lg:text-6xl font-display tracking-tight transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            Running a university is
            <br />
            <span className="text-muted-foreground">harder than it should be.</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-px bg-foreground/10 border border-foreground/10">
          {problems.map((problem, index) => (
            <ProblemCard key={problem.number} problem={problem} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
