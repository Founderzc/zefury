"use client"

import { AnimatedSection } from "@/components/animated-section"
import { TrustSection } from "@/components/trust-section"
import { PhilosophySection } from "@/components/philosophy-section"
import { DesignLab } from "@/components/design-lab"
import { PortfolioSection } from "@/components/portfolio-section"
import { Footer } from "@/components/footer"

export function ScrollAnimations() {
  return (
    <>
      <AnimatedSection>
        <TrustSection />
      </AnimatedSection>

      <AnimatedSection delay={100}>
        <PhilosophySection />
      </AnimatedSection>

      <AnimatedSection delay={100}>
        <DesignLab />
      </AnimatedSection>

      <AnimatedSection delay={100}>
        <PortfolioSection />
      </AnimatedSection>

      <AnimatedSection delay={100}>
        <Footer />
      </AnimatedSection>
    </>
  )
}
