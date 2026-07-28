"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { DashboardMockup } from "./dashboard-mockup"
import { Navbar } from "./navbar"
import { LogoCloud } from "./logo-cloud"
import { FeatureCardsSection } from "./feature-cards-section"
import { AISection } from "./ai-section"
import { ProductDirectionSection } from "./product-direction-section"
import { WorkflowsSection } from "./workflows-section"
import { CTASection } from "./cta-section"
import { Footer } from "./footer"

export function Hero3DStage() {
  const [yOffset, setYOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const offset = Math.min(scrollY / 300, 1) * -20
      setYOffset(offset)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const baseTransform = {
    translateX: 2,
    scale: 1.2,
    rotateX: 47,
    rotateY: 31,
    rotateZ: 324,
  }

  return (
    <>
      <section className="relative min-h-screen overflow-hidden" style={{ backgroundColor: "#09090B" }}>
        <Navbar />

        {/* Vista Blue glow */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -30%)",
            width: "1200px",
            height: "800px",
            background: "radial-gradient(ellipse at center, rgba(30, 129, 206, 0.10) 0%, rgba(14, 93, 158, 0.04) 40%, transparent 70%)",
          }}
        />

        {/* Main content */}
        <div className="relative z-10 pt-28 flex flex-col">
          {/* Hero text */}
          <div className="w-full flex justify-center px-6 mt-16">
            <div className="w-full max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-6 border"
                style={{
                  backgroundColor: "rgba(30,129,206,0.1)",
                  borderColor: "rgba(30,129,206,0.3)",
                  color: "#3ba3f5",
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full animate-pulse"
                  style={{ backgroundColor: "#1e81ce" }}
                />
                Now in public beta — AI for Universities
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl lg:text-[56px] font-semibold text-white leading-[1.1] text-balance"
                style={{ letterSpacing: "-0.033em" }}
              >
                The AI Operating System for Modern Universities
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mt-6 text-lg text-zinc-400 leading-relaxed"
              >
                Deploy intelligent AI across admissions, academics, administration, finance,
                <br className="hidden md:block" />
                student services, and campus operations—all from one secure platform designed exclusively for
                higher education.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-8 flex items-center gap-6"
              >
                <button
                  className="px-5 py-2.5 text-white font-semibold rounded-lg transition-all text-sm"
                  style={{
                    background: "linear-gradient(135deg, #1e81ce 0%, #0e5d9e 100%)",
                    boxShadow: "0 0 24px rgba(30,129,206,0.45), 0 2px 8px rgba(0,0,0,0.4)",
                  }}
                >
                  Schedule AI Demo
                </button>
                <button className="text-zinc-300 font-medium hover:text-white transition-colors flex items-center gap-2 text-sm">
                  Explore AI Platform
                  <span aria-hidden="true">→</span>
                </button>
              </motion.div>
            </div>
          </div>

          {/* 3D Stage */}
          <div
            className="relative mt-16"
            style={{
              width: "100vw",
              marginLeft: "-50vw",
              marginRight: "-50vw",
              position: "relative",
              left: "50%",
              right: "50%",
              height: "700px",
              marginTop: "-60px",
            }}
          >
            <div
              className="absolute bottom-0 left-0 right-0 h-72 z-10 pointer-events-none"
              style={{ background: "linear-gradient(to top, #09090B 20%, transparent 100%)" }}
            />

            {/* Vista Blue edge glow on 3D card */}
            <div
              className="absolute inset-0 pointer-events-none z-20"
              style={{
                background: "radial-gradient(ellipse at 60% 80%, rgba(30,129,206,0.07) 0%, transparent 60%)",
              }}
            />

            <div
              style={{
                transform: `translateY(${yOffset}px)`,
                transition: "transform 0.1s ease-out",
                contain: "strict",
                perspective: "4000px",
                perspectiveOrigin: "100% 0",
                width: "100%",
                height: "100%",
                transformStyle: "preserve-3d",
                position: "relative",
              }}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  backgroundColor: "#0a0a0f",
                  transformOrigin: "0 0",
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                  border: "1px solid rgba(30,129,206,0.2)",
                  borderRadius: "10px",
                  boxShadow: "0 0 60px rgba(30,129,206,0.08)",
                  width: "1600px",
                  height: "900px",
                  margin: "280px auto auto",
                  position: "absolute",
                  top: 0, bottom: 0, left: 0, right: 0,
                  transform: `translate(${baseTransform.translateX}%) scale(${baseTransform.scale}) rotateX(${baseTransform.rotateX}deg) rotateY(${baseTransform.rotateY}deg) rotate(${baseTransform.rotateZ}deg)`,
                  transformStyle: "preserve-3d",
                  overflow: "hidden",
                }}
              >
                <DashboardMockup />
              </motion.div>
            </div>
          </div>

          <LogoCloud />
          <FeatureCardsSection />
          <AISection />
          <ProductDirectionSection />
          <WorkflowsSection />
          <CTASection />
          <Footer />
        </div>
      </section>
    </>
  )
}
