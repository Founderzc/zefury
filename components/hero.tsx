"use client"

import Image from "next/image"
import { ArrowDown, Instagram, ExternalLink } from "lucide-react"

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background"
    >
      <div className="mx-auto max-w-7xl px-6 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 rounded-full bg-card border border-border px-4 py-2 w-fit">
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              <span className="text-xs font-medium text-muted-foreground tracking-wide uppercase">
                Available for Projects
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-foreground">
              {"HEY, I'M"}
              <br />
              <span className="text-accent">ZEESHAN.</span>
            </h1>

            <p className="text-sm font-medium text-accent uppercase tracking-wider">
              Visual Strategist & Thumbnail Designer
            </p>

            <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed font-mono">
              I help YouTube creators turn impressions into views. My designs are not just art — they are data-driven visual strategies built to win the click-war.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
              >
                View Portfolio
                <ArrowDown className="h-4 w-4" />
              </a>
              <a
                href="https://wa.me/923035408206?text=Hi%20Zeeshan!%20I%27d%20like%20a%20free%20thumbnail%20test."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border-2 border-accent bg-transparent px-6 py-3 text-sm font-semibold text-accent hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                Get Free Thumbnail Test
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4 pt-4">
              <a
                href="https://www.instagram.com/zscore_pix"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex items-center justify-center h-10 w-10 rounded-full bg-card border border-border text-muted-foreground hover:text-accent hover:border-accent transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://www.tiktok.com/@zscore_pix"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="flex items-center justify-center h-10 w-10 rounded-full bg-card border border-border text-muted-foreground hover:text-accent hover:border-accent transition-colors"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.98a8.18 8.18 0 004.76 1.52V7.05a4.83 4.83 0 01-1-.36z"/>
                </svg>
              </a>
              <a
                href="https://www.behance.net/gallery/242444841/High-Impact-Thumbnail-Collection-2026"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Behance"
                className="flex items-center justify-center h-10 w-10 rounded-full bg-card border border-border text-muted-foreground hover:text-accent hover:border-accent transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Right - Profile Card */}
          <div className="relative flex items-center justify-center">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-accent/20 rounded-3xl blur-2xl" />

              {/* Profile card */}
              <div className="relative bg-card rounded-2xl border border-border p-3 shadow-xl">
                <div className="relative aspect-[4/5] w-full max-w-[380px] overflow-hidden rounded-xl">
                  <Image
                    src="/images/profile.jpg"
                    alt="Zeeshan - YouTube Thumbnail Designer"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="flex items-center justify-between px-2 pt-3 pb-1">
                  <div>
                    <p className="font-bold text-foreground text-sm">Zeeshan <span className="text-accent">| Z Score</span></p>
                    <p className="text-xs text-muted-foreground">Visual Strategist & Thumbnail Designer</p>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-accent" />
                    <span className="text-xs text-accent font-medium">Online</span>
                  </div>
                </div>
              </div>

              {/* Floating stats card */}
              <div className="absolute -bottom-6 -left-6 bg-card rounded-xl border border-border px-4 py-3 shadow-lg">
                <p className="text-2xl font-bold text-foreground">500+</p>
                <p className="text-xs text-muted-foreground">Thumbnails Designed</p>
              </div>

              {/* Floating CTR card */}
              <div className="absolute -top-4 -right-4 bg-accent rounded-xl px-4 py-3 shadow-lg">
                <p className="text-2xl font-bold text-accent-foreground">12%</p>
                <p className="text-xs text-accent-foreground/80">Avg. CTR Boost</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
