"use client"

import { useState } from "react"
import Image from "next/image"

const categories = ["All", "Business", "Finance", "Gaming", "Lifestyle"]

const thumbnails = [
  {
    src: "/images/24k-product.png",
    alt: "$24K From 1 Product - E-commerce thumbnail design",
    category: "Business",
  },
  {
    src: "/images/first-5-years.jpg",
    alt: "First 5 Years Matter - Financial planning thumbnail",
    category: "Finance",
  },
  {
    src: "/images/rank-push.png",
    alt: "1V4 Clutch - PUBG Mobile gaming thumbnail",
    category: "Gaming",
  },
  {
    src: "/images/plan-fails-70.png",
    alt: "Plan Fails at 70 - Retirement planning thumbnail",
    category: "Finance",
  },
  {
    src: "/images/travel-picks-2026.png",
    alt: "2026 Travel Picks - Travel vlog thumbnail",
    category: "Lifestyle",
  },
  {
    src: "/images/viral-niches-2026.jpg",
    alt: "Viral USA Niches in 2026 - YouTube business thumbnail",
    category: "Business",
  },
  {
    src: "/images/bear-hunt.jpg",
    alt: "Bear Hunt Gone Wrong - Adventure story thumbnail",
    category: "Lifestyle",
  },
  {
    src: "/images/20k-fine.jpg",
    alt: "$20K Fine - Amazon business thumbnail",
    category: "Business",
  },
  {
    src: "/images/62-vs-70.png",
    alt: "62 vs 70 Big Mistake - Retirement age comparison thumbnail",
    category: "Finance",
  },
  {
    src: "/images/most-people-quit.jpg",
    alt: "Most People Quit - Etsy e-commerce motivation thumbnail",
    category: "Business",
  },
]

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filtered =
    activeCategory === "All"
      ? thumbnails
      : thumbnails.filter((t) => t.category === activeCategory)

  return (
    <section id="portfolio" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center text-center gap-6 pb-12">
          <div className="inline-flex items-center gap-2 text-xs font-medium text-muted-foreground uppercase tracking-widest">
            <span className="h-px w-8 bg-accent" />
            Selected Work
            <span className="h-px w-8 bg-accent" />
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight">
            Portfolio
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl font-mono">
            Bold thumbnails that blend cinematic visuals with high-impact CTR strategy.
          </p>

          <a
            href="https://www.behance.net/gallery/242444841/High-Impact-Thumbnail-Collection-2026"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
          >
            View full collection on Behance
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap items-center justify-center gap-3 pb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                activeCategory === cat
                  ? "bg-accent text-accent-foreground shadow-md"
                  : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-accent/50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Thumbnail Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((thumb, i) => (
            <div
              key={`${thumb.src}-${i}`}
              className="group relative overflow-hidden rounded-xl border border-border bg-card shadow-sm hover:shadow-xl hover:border-accent/30 transition-all duration-300"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={thumb.src}
                  alt={thumb.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-colors duration-300 flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-primary-foreground font-semibold text-sm bg-accent px-4 py-2 rounded-lg">
                    View Full Size
                  </span>
                </div>
              </div>
              <div className="px-4 py-3 flex items-center justify-between">
                <span className="text-xs font-medium text-muted-foreground">{thumb.category}</span>
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
