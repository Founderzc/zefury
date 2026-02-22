"use client"

import Image from "next/image"

export function DesignLab() {
  return (
    <section id="design-lab" className="bg-card py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center text-center gap-6 pb-16">
          <div className="inline-flex items-center gap-2 text-xs font-medium text-muted-foreground uppercase tracking-widest">
            <span className="h-px w-8 bg-accent" />
            Experimental Work
            <span className="h-px w-8 bg-accent" />
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight">
            Design Lab
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl font-mono">
            A collection of designs created to push the boundaries of cinematic storytelling and visual psychology.
          </p>

          <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 border border-accent/20 px-4 py-2">
            <span className="text-xs font-medium text-accent">
              Experimental work: Expressions modified via AI to demonstrate visual storytelling and high-impact CTR potential.
            </span>
          </div>
        </div>

        {/* Before / After */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="flex flex-col gap-4 hover:-translate-y-1 transition-transform duration-300">
            <div className="relative group overflow-hidden rounded-xl border border-border shadow-sm hover:shadow-xl transition-shadow duration-300">
              <div className="relative aspect-video">
                <Image
                  src="/images/before-raw.png"
                  alt="Before - Raw unedited photo of fitness model"
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute top-3 left-3 bg-destructive text-destructive-foreground px-3 py-1 rounded-md text-xs font-bold uppercase">
                Before
              </div>
            </div>
            <p className="text-sm text-muted-foreground text-center font-mono">
              Raw photo, no composition, plain background
            </p>
          </div>

          <div className="flex flex-col gap-4 hover:-translate-y-1 transition-transform duration-300">
            <div className="relative group overflow-hidden rounded-xl border-2 border-accent/40 shadow-lg shadow-accent/10 hover:shadow-xl hover:shadow-accent/20 transition-shadow duration-300">
              <div className="relative aspect-video">
                <Image
                  src="/images/after-escape-plan.png"
                  alt="After - The Escape Plan 2026 cinematic thumbnail design"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute top-3 left-3 bg-accent text-accent-foreground px-3 py-1 rounded-md text-xs font-bold uppercase">
                After
              </div>
            </div>
            <p className="text-sm text-muted-foreground text-center font-mono">
              Cinematic lighting, bold text, icon storytelling, high CTR
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
