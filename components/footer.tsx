"use client"

import Image from "next/image"
import { Mail, ArrowUpRight, Instagram, ExternalLink, MessageCircle, Phone } from "lucide-react"

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

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight max-w-2xl text-balance">
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
              href="mailto:infozedscoreteam@gmail.com"
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

          {/* Email display */}
          <div className="flex items-center gap-2 pt-2">
            <Mail className="h-4 w-4 text-accent" />
            <a
              href="mailto:infozedscoreteam@gmail.com"
              className="text-sm text-primary-foreground/60 hover:text-accent transition-colors font-mono"
            >
              infozedscoreteam@gmail.com
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4 pt-8">
            <a
              href="https://www.instagram.com/zscore_pix"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex items-center justify-center h-10 w-10 rounded-full border border-primary-foreground/20 text-primary-foreground/60 hover:text-accent hover:border-accent hover:scale-110 transition-all duration-300"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="https://www.tiktok.com/@zscore_pix"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="flex items-center justify-center h-10 w-10 rounded-full border border-primary-foreground/20 text-primary-foreground/60 hover:text-accent hover:border-accent hover:scale-110 transition-all duration-300"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.98a8.18 8.18 0 004.76 1.52V7.05a4.83 4.83 0 01-1-.36z"/>
              </svg>
            </a>
            <a
              href="https://www.behance.net/gallery/242444841/High-Impact-Thumbnail-Collection-2026"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Behance Portfolio"
              className="flex items-center justify-center h-10 w-10 rounded-full border border-primary-foreground/20 text-primary-foreground/60 hover:text-accent hover:border-accent hover:scale-110 transition-all duration-300"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Image
              src="/images/zscore-logo.png"
              alt="Z Score Logo"
              width={28}
              height={28}
              className="h-7 w-7 invert"
            />
            <p className="text-sm text-primary-foreground/40 font-mono">
              {"© 2026 Z Score | Zefury. All rights reserved."}
            </p>
          </div>
          <p className="text-sm text-primary-foreground/40 font-mono">
            Designed with precision. Built with purpose.
          </p>
        </div>
      </div>
    </footer>
  )
}
