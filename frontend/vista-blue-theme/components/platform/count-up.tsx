"use client"

import { useEffect, useRef, useState } from "react"

/**
 * Animated count-up that fires once when scrolled into view.
 * Supports prefixes/suffixes and decimals.
 */
export function CountUp({
  end,
  decimals = 0,
  prefix = "",
  suffix = "",
  duration = 1800,
  className,
}: {
  end: number
  decimals?: number
  prefix?: string
  suffix?: string
  duration?: number
  className?: string
}) {
  const [value, setValue] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true)
          let raf = 0
          const start = performance.now()
          const tick = (now: number) => {
            const p = Math.min((now - start) / duration, 1)
            const eased = 1 - Math.pow(1 - p, 3)
            setValue(eased * end)
            if (p < 1) raf = requestAnimationFrame(tick)
          }
          raf = requestAnimationFrame(tick)
          return () => cancelAnimationFrame(raf)
        }
      },
      { threshold: 0.4 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [end, duration, started])

  const display =
    decimals > 0 ? value.toFixed(decimals) : Math.floor(value).toLocaleString()

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  )
}
