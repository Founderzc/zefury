"use client"

import Image from "next/image"

export function PhilosophySection() {
  return (
    <section id="about" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Quote */}
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 text-xs font-medium text-muted-foreground uppercase tracking-widest">
              <span className="h-px w-8 bg-accent" />
              My Philosophy
            </div>

            <blockquote className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-foreground">
              {"Thumbnails are not Art, they are "}
              <span className="text-accent">Science.</span>
            </blockquote>

            <p className="text-lg text-muted-foreground leading-relaxed font-mono max-w-lg">
              I analyze viewer psychology to ensure every pixel serves a purpose. From cinematic lighting to strategic text placement, I engineer thumbnails that maximize click-through rates and drive real results.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-4">
              {[
                { value: "500+", label: "Thumbnails" },
                { value: "12%", label: "Avg CTR" },
                { value: "50M+", label: "Views Generated" },
              ].map((stat, i) => (
                <div
                  key={stat.label}
                  className="text-center p-4 rounded-xl bg-card border border-border hover:border-accent/50 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Laptop mockup */}
          <div className="relative group">
            <div className="absolute -inset-8 bg-accent/5 rounded-3xl blur-3xl animate-glow-pulse" />
            <div className="relative rounded-2xl overflow-hidden border border-border shadow-2xl transition-transform duration-500 group-hover:scale-[1.02] group-hover:shadow-accent/10">
              <Image
                src="/images/laptop-mockup.jpg"
                alt="Thumbnail design workspace"
                width={700}
                height={467}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
