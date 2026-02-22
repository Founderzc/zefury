"use client"

import Image from "next/image"
import { Palette, Monitor, Camera, Zap, Target, TrendingUp } from "lucide-react"

const skills = [
  { icon: Palette, label: "Cinematic Design", desc: "Bold visuals with dramatic lighting and depth" },
  { icon: Monitor, label: "YouTube Strategy", desc: "Data-driven layouts that maximize CTR" },
  { icon: Camera, label: "Photo Manipulation", desc: "Seamless composites and retouching" },
  { icon: Zap, label: "Fast Turnaround", desc: "24-48 hour delivery for most projects" },
  { icon: Target, label: "Viewer Psychology", desc: "Every element engineered to stop the scroll" },
  { icon: TrendingUp, label: "Growth Focused", desc: "Designs that drive real channel growth" },
]

const timeline = [
  { year: "2022", title: "Started Designing", desc: "Began creating YouTube thumbnails as a freelancer" },
  { year: "2023", title: "First Big Client", desc: "Landed a 100K+ subscriber channel as a ghost designer" },
  { year: "2024", title: "Z Score Founded", desc: "Launched Z Score / Zefury as a design brand" },
  { year: "2025", title: "Agency Growth", desc: "Scaled to serving multiple 500K+ channels" },
  { year: "2026", title: "500+ Thumbnails", desc: "Crossed 500 thumbnails with 50M+ total views generated" },
]

export function AboutSection() {
  return (
    <section id="about" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-4 pb-16">
          <div className="inline-flex items-center gap-2 text-xs font-medium text-muted-foreground uppercase tracking-widest">
            <span className="h-px w-8 bg-accent" />
            About Me
            <span className="h-px w-8 bg-accent" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight text-balance">
            The Person Behind the <span className="text-accent">Pixels</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl font-mono leading-relaxed">
            {"I'm Zeeshan, a Visual Strategist & Thumbnail Designer from Sargodha, Pakistan. I don't just make thumbnails look good \u2014 I engineer them to perform."}
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left - Photo + Bio */}
          <div className="flex flex-col gap-8">
            {/* Profile Image with accent frame */}
            <div className="relative group w-fit mx-auto lg:mx-0">
              <div className="absolute -inset-3 rounded-2xl border-2 border-accent/20 animate-glow-pulse" />
              <div className="relative rounded-2xl overflow-hidden border border-border shadow-xl transition-transform duration-500 group-hover:scale-[1.02]">
                <Image
                  src="/images/profile.jpg"
                  alt="Zeeshan - Visual Strategist"
                  width={480}
                  height={360}
                  className="w-full max-w-md h-auto object-cover"
                />
              </div>
            </div>

            {/* Bio text */}
            <div className="flex flex-col gap-5">
              <p className="text-foreground leading-relaxed">
                {"I'm dedicated to mastering the art of visual storytelling. My approach blends creative expression with data-driven aesthetics and strategic, click-driven design."}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {"I don't just create thumbnails \u2014 I craft visual strategies that win the most critical battle in the YouTube game: the Click-Through Rate. Whether it's a high-stakes finance channel or a fast-paced tech review, I combine cinematic composition with viewer psychology to create the visual hook that viewers can't scroll past."}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {"If you're looking for a design partner who understands 3D depth, cinematic lighting, and the psychology of getting clicks, let's build something together."}
              </p>

              {/* Quick Info */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="rounded-xl bg-card border border-border p-4 hover:border-accent/50 hover:-translate-y-1 transition-all duration-300">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">Location</p>
                  <p className="text-sm font-semibold text-foreground mt-1">Sargodha, Pakistan</p>
                </div>
                <div className="rounded-xl bg-card border border-border p-4 hover:border-accent/50 hover:-translate-y-1 transition-all duration-300">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">Brand</p>
                  <p className="text-sm font-semibold text-foreground mt-1">Z Score / Zefury</p>
                </div>
                <div className="rounded-xl bg-card border border-border p-4 hover:border-accent/50 hover:-translate-y-1 transition-all duration-300">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">Experience</p>
                  <p className="text-sm font-semibold text-foreground mt-1">4+ Years</p>
                </div>
                <div className="rounded-xl bg-card border border-border p-4 hover:border-accent/50 hover:-translate-y-1 transition-all duration-300">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">Availability</p>
                  <div className="flex items-center gap-1.5 mt-1">
                    <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                    <p className="text-sm font-semibold text-accent">Open for Work</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Skills + Timeline */}
          <div className="flex flex-col gap-12">

            {/* What I Do */}
            <div className="flex flex-col gap-6">
              <h3 className="text-2xl font-bold text-foreground tracking-tight">
                What I <span className="text-accent">Do</span>
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {skills.map((skill, i) => (
                  <div
                    key={skill.label}
                    className="flex items-start gap-4 rounded-xl bg-card border border-border p-5 hover:border-accent/50 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                    style={{ transitionDelay: `${i * 50}ms` }}
                  >
                    <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-accent/10 text-accent shrink-0 transition-transform duration-300 hover:scale-110 hover:rotate-3">
                      <skill.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{skill.label}</p>
                      <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{skill.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Journey Timeline */}
            <div className="flex flex-col gap-6">
              <h3 className="text-2xl font-bold text-foreground tracking-tight">
                My <span className="text-accent">Journey</span>
              </h3>
              <div className="relative flex flex-col gap-0">
                {/* Vertical line */}
                <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border" />

                {timeline.map((item, i) => (
                  <div
                    key={item.year}
                    className="relative flex items-start gap-5 py-4 group"
                  >
                    {/* Dot */}
                    <div
                      className="relative z-10 flex items-center justify-center h-10 w-10 rounded-full bg-card border-2 border-border shrink-0 group-hover:border-accent transition-colors duration-300"
                      style={{ transitionDelay: `${i * 60}ms` }}
                    >
                      <span className="text-xs font-bold text-muted-foreground group-hover:text-accent transition-colors duration-300">
                        {item.year.slice(2)}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col gap-0.5 pt-1.5">
                      <div className="flex items-center gap-3">
                        <p className="text-sm font-semibold text-foreground">{item.title}</p>
                        <span className="text-xs text-muted-foreground font-mono">{item.year}</span>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <a
              href="https://wa.me/923035408206?text=Hi%20Zeeshan!%20I%20want%20to%20discuss%20a%20thumbnail%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground hover:opacity-90 transition-opacity w-full sm:w-auto"
            >
              {"Let's Work Together"}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
