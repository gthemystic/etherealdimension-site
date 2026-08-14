"use client"

import { useEffect, useRef, useState } from "react"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Starter",
    price: "$49",
    period: "/month",
    description: "For small engineering teams getting started",
    features: ["1,000 document searches/mo", "Basic diagram analysis", "5 team members"],
    highlighted: false,
  },
  {
    name: "Professional",
    price: "$199",
    period: "/month",
    description: "For growing teams with complex documentation",
    features: ["Unlimited searches", "Full multi-modal RAG", "25 team members"],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For organizations with advanced requirements",
    features: ["Custom deployment", "Priority support", "Unlimited team members"],
    highlighted: false,
  },
]

export function PricingSection() {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="pricing"
      ref={ref}
      className="relative z-10 px-5 py-24 md:py-32"
    >
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            Start free, scale as your team grows.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`flex flex-col rounded-2xl border p-6 backdrop-blur-md transition-all duration-500 ${
                plan.highlighted
                  ? "border-primary/30 bg-primary/5 scale-[1.02] shadow-lg shadow-primary/5"
                  : "border-[var(--glass-border)] bg-[var(--glass-bg)]"
              } ${visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {plan.highlighted && (
                <div className="mb-4 w-fit rounded-full bg-primary/10 border border-primary/20 px-3 py-1 text-xs font-medium text-primary">
                  Recommended
                </div>
              )}
              <h3 className="text-lg font-semibold text-foreground">{plan.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{plan.description}</p>
              <div className="mt-5 flex items-baseline gap-1">
                <span className="text-3xl font-semibold text-foreground">{plan.price}</span>
                {plan.period && (
                  <span className="text-sm text-muted-foreground">{plan.period}</span>
                )}
              </div>
              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                    <Check size={14} className="shrink-0 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`mt-6 w-full rounded-xl py-3 text-sm font-medium transition-all duration-200 ${
                  plan.highlighted
                    ? "bg-primary text-primary-foreground hover:brightness-110"
                    : "border border-[var(--glass-border)] bg-[var(--glass-bg)] text-foreground hover:bg-[var(--glass-hover)]"
                }`}
              >
                {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
