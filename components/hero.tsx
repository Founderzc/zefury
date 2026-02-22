"use client"

import Image from "next/image"
import { ArrowDown, Youtube, Instagram, Twitter, Linkedin } from "lucide-react"

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

            <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed font-mono">
              I design high-CTR YouTube thumbnails that stop the scroll. Cinematic visuals, bold storytelling, and viewer psychology — every pixel serves a purpose.
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
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg border-2 border-accent bg-transparent px-6 py-3 text-sm font-semibold text-accent hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                Get Free Thumbnail Test
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4 pt-4">
              {[
                { icon: Youtube, label: "YouTube", href: "#" },
                { icon: Instagram, label: "Instagram", href: "#" },
                { icon: Twitter, label: "Twitter", href: "#" },
                { icon: Linkedin, label: "LinkedIn", href: "#" },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex items-center justify-center h-10 w-10 rounded-full bg-card border border-border text-muted-foreground hover:text-accent hover:border-accent transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
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
                    <p className="font-bold text-foreground text-sm">Zeeshan</p>
                    <p className="text-xs text-muted-foreground">Thumbnail Designer</p>
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
