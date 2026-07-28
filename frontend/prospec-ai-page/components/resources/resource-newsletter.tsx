"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Check } from "lucide-react"

export function ResourceNewsletter() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim()) setSubmitted(true)
  }

  return (
    <section className="relative py-24 bg-[#f4f6fb] dark:bg-[#09090B] transition-colors">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-border/60 bg-white/50 dark:bg-zinc-900/40 backdrop-blur-sm px-8 py-12 text-center"
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(59,130,246,0.12), transparent 60%)" }}
          />
          <div className="relative">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center mx-auto mb-6">
              <Mail className="w-6 h-6 text-blue-400" />
            </div>
            <h2
              className="text-2xl sm:text-3xl md:text-4xl text-foreground text-balance max-w-xl mx-auto"
              style={{ letterSpacing: "-0.03em", fontWeight: 600, lineHeight: 1.1 }}
            >
              Stay Ahead of Higher Education Innovation
            </h2>
            <p className="mt-4 text-muted-foreground max-w-lg mx-auto leading-relaxed text-sm">
              Receive expert insights, implementation strategies, product updates, and research directly in your inbox.
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-8 inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-sm font-medium"
              >
                <Check className="w-4 h-4" /> You&apos;re subscribed—thank you!
              </motion.div>
            ) : (
              <form onSubmit={onSubmit} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@university.edu"
                  className="w-full sm:flex-1 px-4 py-2.5 rounded-lg border border-border bg-white/70 dark:bg-zinc-800/60 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none focus:border-blue-500/50 transition-colors"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors text-sm whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
