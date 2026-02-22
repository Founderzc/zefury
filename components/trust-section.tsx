"use client"

import { Users } from "lucide-react"

const creators = [
  { name: "Azul Welz", subscribers: "357K subscribers" },
  { name: "Hustle Ninjas", subscribers: "301K subscribers" },
  { name: "Rob Lipsett", subscribers: "497K subscribers" },
  { name: "Kristen & Siya", subscribers: "529K subscribers" },
]

export function TrustSection() {
  return (
    <section className="bg-card py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center text-center gap-6">
          {/* Icon */}
          <div className="flex items-center justify-center h-16 w-16 rounded-2xl bg-accent/10 text-accent">
            <Users className="h-8 w-8" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            The Silent Force
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl font-mono">
            Served as a Ghost Designer for several
            <br className="hidden sm:block" />
            100K+ and 900K+ Subscriber channels.
          </p>

          {/* Creator Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 pt-8 w-full max-w-3xl">
            {creators.map((creator, i) => (
              <div
                key={creator.name}
                className="flex flex-col items-center gap-3 rounded-xl bg-background border border-border p-6 hover:border-accent/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                style={{ animationDelay: `${i * 120}ms` }}
              >
                {/* Avatar placeholder */}
                <div className="h-14 w-14 rounded-full bg-muted flex items-center justify-center text-lg font-bold text-muted-foreground transition-colors duration-300 group-hover:bg-accent/10">
                  {creator.name.charAt(0)}
                </div>
                <div className="text-center">
                  <p className="font-semibold text-foreground text-sm">{creator.name}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{creator.subscribers}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-xs text-muted-foreground pt-4 max-w-md font-mono">
            All logos are property of their respective owners. Designs were created as a part of agency-led projects for these creators.
          </p>
        </div>
      </div>
    </section>
  )
}
