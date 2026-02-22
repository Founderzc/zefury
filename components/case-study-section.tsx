"use client"

import Image from "next/image"
import { ArrowUpRight, Eye, TrendingUp, Zap, Target } from "lucide-react"

const caseStudyThumbnails = [
  { src: "/images/first-5-years.jpg", alt: "First 5 Years Matter" },
  { src: "/images/after-escape-plan.png", alt: "The Escape Plan 2026" },
  { src: "/images/24k-product.png", alt: "$24K From 1 Product" },
  { src: "/images/plan-fails-70.png", alt: "Plan Fails at 70" },
  { src: "/images/bear-hunt.jpg", alt: "Bear Hunt Gone Wrong" },
  { src: "/images/viral-niches-2026.jpg", alt: "Viral USA Niches 2026" },
]

const metrics = [
  { icon: Eye, value: "2.5M+", label: "Impressions Generated" },
  { icon: TrendingUp, value: "12.4%", label: "Average CTR" },
  { icon: Zap, value: "500+", label: "Thumbnails Delivered" },
  { icon: Target, value: "98%", label: "Client Retention" },
]

export function CaseStudySection() {
  return (
    <section id="case-study" className="bg-background py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-6 pb-16">
          <div className="inline-flex items-center gap-2 text-xs font-medium text-muted-foreground uppercase tracking-widest">
            <span className="h-px w-8 bg-accent" />
            Featured Case Study
            <span className="h-px w-8 bg-accent" />
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight text-balance">
            High-Impact Thumbnail
            <br />
            <span className="text-accent">Collection 2026</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl font-mono leading-relaxed">
            A deep dive into the strategy, psychology, and cinematic craft behind thumbnails that consistently outperform. Every design is built to win the click-war.
          </p>
        </div>

        {/* Metrics Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pb-16">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="flex flex-col items-center gap-3 rounded-2xl bg-card border border-border p-6 hover:border-accent/40 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-accent/10 text-accent">
                <metric.icon className="h-6 w-6" />
              </div>
              <p className="text-3xl font-bold text-foreground">{metric.value}</p>
              <p className="text-xs text-muted-foreground text-center">{metric.label}</p>
            </div>
          ))}
        </div>

        {/* Thumbnail Showcase Grid */}
        <div className="relative pb-16">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {caseStudyThumbnails.map((thumb, i) => (
              <a
                key={thumb.alt}
                href="https://www.behance.net/gallery/242444841/High-Impact-Thumbnail-Collection-2026"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-xl border border-border bg-card shadow-sm hover:shadow-xl hover:border-accent/30 transition-all duration-500"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={thumb.src}
                    alt={thumb.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/50 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 flex items-center gap-2 text-primary-foreground font-semibold text-sm bg-accent px-4 py-2 rounded-lg">
                      View on Behance
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Decorative glow */}
          <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-accent/10 rounded-full blur-3xl pointer-events-none" />
        </div>

        {/* Process Breakdown */}
        <div className="relative max-w-4xl mx-auto pb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground text-center pb-10">
            The Process Behind Every Click
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                title: "Research & Strategy",
                description: "I study the niche, analyze top-performing thumbnails, and identify what triggers the audience to click.",
              },
              {
                step: "02",
                title: "Visual Psychology",
                description: "Facial expressions, color contrasts, and text hierarchy are engineered to capture attention in under 2 seconds.",
              },
              {
                step: "03",
                title: "Cinematic Execution",
                description: "Every element from lighting to composition is crafted with cinematic precision for maximum visual impact.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="relative flex flex-col gap-4 rounded-2xl bg-card border border-border p-6 hover:border-accent/40 transition-colors"
              >
                <span className="text-5xl font-bold text-accent/20">{item.step}</span>
                <h4 className="text-lg font-bold text-foreground">{item.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed font-mono">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center text-center gap-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 border border-accent/20 px-5 py-2.5">
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-medium text-accent">Full case study available on Behance</span>
          </div>

          <a
            href="https://www.behance.net/gallery/242444841/High-Impact-Thumbnail-Collection-2026"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-xl bg-primary px-8 py-4 text-base font-bold text-primary-foreground hover:opacity-90 transition-opacity shadow-lg"
          >
            Watch Full Case Study
            <ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>

          <p className="text-sm text-muted-foreground font-mono">
            Includes breakdowns, before/after comparisons, and design rationale
          </p>
        </div>
      </div>
    </section>
  )
}
