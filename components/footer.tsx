"use client"

import { Mail, ArrowUpRight, Youtube, Instagram, Twitter, Linkedin, MessageCircle, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground">
      {/* CTA Section */}
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex flex-col items-center text-center gap-8">
          <div className="inline-flex items-center gap-2 text-xs font-medium text-primary-foreground/60 uppercase tracking-widest">
            <span className="h-px w-8 bg-accent" />
            {"Let's Work Together"}
            <span className="h-px w-8 bg-accent" />
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight max-w-2xl">
            {"Want Higher CTR? "}
            <span className="text-accent">{"Let's Talk."}</span>
          </h2>

          <p className="text-lg text-primary-foreground/60 max-w-lg font-mono">
            Ready to transform your YouTube channel with thumbnails that actually get clicked? Drop me a message.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href="https://wa.me/923035408206?text=Hi%20Zeeshan!%20I%20want%20to%20discuss%20a%20thumbnail%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground hover:opacity-90 transition-opacity"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp Me
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="mailto:hello@zeeshan.design"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-primary-foreground/20 bg-transparent px-6 py-3 text-sm font-semibold text-primary-foreground hover:border-primary-foreground/40 transition-colors"
            >
              <Mail className="h-4 w-4" />
              Email Me
            </a>
          </div>

          {/* WhatsApp number display */}
          <div className="flex items-center gap-2 pt-2">
            <Phone className="h-4 w-4 text-accent" />
            <a
              href="https://wa.me/923035408206"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary-foreground/60 hover:text-accent transition-colors font-mono"
            >
              +92 303 540 8206
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4 pt-8">
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
                className="flex items-center justify-center h-10 w-10 rounded-full border border-primary-foreground/20 text-primary-foreground/60 hover:text-accent hover:border-accent transition-colors"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary-foreground/40 font-mono">
            {"© 2026 Zeeshan. All rights reserved."}
          </p>
          <p className="text-sm text-primary-foreground/40 font-mono">
            Designed with precision. Built with purpose.
          </p>
        </div>
      </div>
    </footer>
  )
}
