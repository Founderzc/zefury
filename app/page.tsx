"use client"

import Image from "next/image"
import { Mail, Instagram, Music, Twitter, Zap } from "lucide-react"

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      {/* Fixed Sidebar Navigation */}
      <aside className="fixed left-0 top-0 h-screen w-56 bg-accent text-accent-foreground p-8 flex flex-col z-40">
        <div className="mb-12">
          <h1 className="text-3xl font-bold tracking-wider">ZSCORE</h1>
          <p className="text-sm opacity-75 mt-1">Thumbnail Designer</p>
        </div>
        
        <nav className="flex-1 space-y-6">
          <a href="#home" className="block text-lg font-semibold hover:opacity-75 transition">HOME</a>
          <a href="#about" className="block text-lg font-semibold hover:opacity-75 transition">ABOUT ME</a>
          <a href="#process" className="block text-lg font-semibold hover:opacity-75 transition">PROCESS</a>
          <a href="#portfolio" className="block text-lg font-semibold hover:opacity-75 transition">PORTFOLIO</a>
          <a href="#testimonials" className="block text-lg font-semibold hover:opacity-75 transition">TESTIMONIALS</a>
          <a href="#contact" className="block text-lg font-semibold hover:opacity-75 transition">CONTACT</a>
        </nav>

        {/* Social Links */}
        <div className="space-y-4 border-t border-accent-foreground border-opacity-20 pt-6">
          <a href="https://www.instagram.com/zscore_pix" target="_blank" className="flex items-center gap-3 hover:opacity-75 transition">
            <Instagram size={20} />
            <span className="text-sm">@zscore_pix</span>
          </a>
          <a href="https://www.tiktok.com/@zscore_pix" target="_blank" className="flex items-center gap-3 hover:opacity-75 transition">
            <Music size={20} />
            <span className="text-sm">@zscore_pix</span>
          </a>
          <a href="mailto:zedscoreteam@gmail.com" className="flex items-center gap-3 hover:opacity-75 transition">
            <Mail size={20} />
            <span className="text-sm">Email</span>
          </a>
        </div>
      </aside>

      {/* Main Content */}
      <div className="ml-56">
        {/* Hero Section */}
        <section id="home" className="min-h-screen bg-gradient-to-br from-background via-background to-secondary flex items-center px-12 py-20">
          <div className="grid grid-cols-2 gap-12 max-w-6xl mx-auto w-full items-center">
            <div>
              <h2 className="text-7xl font-black mb-4 leading-tight">
                I DESIGN <span className="text-accent">THUMBNAILS</span> THAT GET <span className="text-accent">CLICKS</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Using proven psychology and storytelling techniques to maximize your click-through rate and engage your audience
              </p>
              <div className="flex gap-4">
                <a href="https://www.behance.net" target="_blank" className="bg-accent text-accent-foreground px-8 py-4 font-bold hover:opacity-90 transition">
                  Watch Case Study
                </a>
                <button className="border-2 border-accent text-accent px-8 py-4 font-bold hover:bg-accent hover:text-accent-foreground transition">
                  Free Thumbnail Test
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden border-8 border-accent shadow-2xl">
                <Image 
                  src="/profile.jpg" 
                  alt="Zscore Profile" 
                  width={400} 
                  height={400} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold text-2xl shadow-lg">
                10+
              </div>
            </div>
          </div>
        </section>

        {/* About Me Section */}
        <section id="about" className="py-20 px-12 bg-background border-t-8 border-accent">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-3 gap-8 mb-12">
              <div className="col-span-1">
                <div className="aspect-square rounded-xl overflow-hidden border-4 border-accent mb-6">
                  <Image 
                    src="/profile.jpg" 
                    alt="Zscore" 
                    width={200} 
                    height={200} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="col-span-2">
                <h2 className="text-5xl font-black mb-2">ABOUT ME</h2>
                <p className="text-accent text-lg font-bold mb-6">YouTube Thumbnail Designer & Content Creator</p>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  I'm a passionate thumbnail designer with over 10 years of experience creating high-impact visual content. My specialization is in designing YouTube thumbnails that not only look stunning but drive measurable engagement and click-through rates. I combine psychology, color theory, and data-driven insights to create thumbnails that stand out in crowded feeds.
                </p>
                
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  My approach is collaborative and results-oriented. I work closely with content creators and brands to understand their unique voice and target audience, ensuring every thumbnail perfectly represents their content while maximizing viewer engagement.
                </p>

                <div className="grid grid-cols-3 gap-6">
                  <div className="bg-card rounded-lg p-6 border border-border">
                    <Zap className="text-accent mb-3" size={32} />
                    <h3 className="font-bold text-accent mb-2">10+ Years</h3>
                    <p className="text-sm text-muted-foreground">Design Experience</p>
                  </div>
                  <div className="bg-card rounded-lg p-6 border border-border">
                    <Zap className="text-accent mb-3" size={32} />
                    <h3 className="font-bold text-accent mb-2">450+ Clients</h3>
                    <p className="text-sm text-muted-foreground">Projects Completed</p>
                  </div>
                  <div className="bg-card rounded-lg p-6 border border-border">
                    <Zap className="text-accent mb-3" size={32} />
                    <h3 className="font-bold text-accent mb-2">65%+ CTR</h3>
                    <p className="text-sm text-muted-foreground">Average Improvement</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Design Process Section */}
        <section id="process" className="py-20 px-12 bg-secondary">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-5xl font-black mb-4">MY DESIGN PROCESS</h2>
            <p className="text-muted-foreground text-xl mb-12">A systematic approach to creating high-impact thumbnails</p>
            
            <div className="grid grid-cols-3 gap-8">
              <div className="bg-background rounded-lg p-8 border-2 border-accent">
                <div className="text-accent text-4xl font-black mb-4">1</div>
                <h3 className="text-2xl font-bold mb-3">RESEARCH & STRATEGY</h3>
                <p className="text-muted-foreground">Analyze competitor thumbnails, understand your target audience, and develop a unique visual strategy that sets you apart.</p>
              </div>
              
              <div className="bg-background rounded-lg p-8 border-2 border-accent">
                <div className="text-accent text-4xl font-black mb-4">2</div>
                <h3 className="text-2xl font-bold mb-3">CONCEPT & IDEATION</h3>
                <p className="text-muted-foreground">Create multiple design concepts using proven psychological principles, color theory, and composition techniques.</p>
              </div>
              
              <div className="bg-background rounded-lg p-8 border-2 border-accent">
                <div className="text-accent text-4xl font-black mb-4">3</div>
                <h3 className="text-2xl font-bold mb-3">REFINEMENT & TESTING</h3>
                <p className="text-muted-foreground">Refine designs based on feedback, test variations, and optimize for maximum click-through and engagement.</p>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-8">
              <div className="bg-background rounded-lg p-8 border-2 border-accent">
                <h3 className="text-2xl font-bold mb-3">WHAT I FOCUS ON</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>✓ Bold, readable typography</li>
                  <li>✓ High contrast color combinations</li>
                  <li>✓ Emotional expressions and reactions</li>
                  <li>✓ Compelling visual hierarchy</li>
                  <li>✓ Consistent branding elements</li>
                </ul>
              </div>

              <div className="bg-background rounded-lg p-8 border-2 border-accent">
                <h3 className="text-2xl font-bold mb-3">TOOLS & TECHNOLOGIES</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>✓ Photoshop & Illustrator</li>
                  <li>✓ Figma for rapid prototyping</li>
                  <li>✓ AI-assisted design tools</li>
                  <li>✓ Analytics and A/B testing</li>
                  <li>✓ Adobe Creative Suite</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-20 px-12 bg-background">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl font-black mb-4">FEATURED WORK</h2>
            <p className="text-muted-foreground text-xl mb-12">Recent thumbnail designs that drive results</p>
            
            <div className="grid grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="group cursor-pointer">
                  <div className="aspect-video bg-gradient-to-br from-accent to-secondary rounded-lg overflow-hidden mb-3 border-2 border-border hover:border-accent transition">
                    <div className="w-full h-full flex items-center justify-center font-black text-xl text-accent-foreground group-hover:scale-110 transition">
                      Thumbnail {item}
                    </div>
                  </div>
                  <h3 className="font-bold group-hover:text-accent transition">Project {item}</h3>
                  <p className="text-sm text-muted-foreground">+25% CTR Improvement</p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <a href="https://www.behance.net" target="_blank" className="bg-accent text-accent-foreground px-8 py-4 font-bold hover:opacity-90 transition inline-block rounded-lg">
                View Full Portfolio on Behance
              </a>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 px-12 bg-secondary border-y-8 border-accent">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-5xl font-black mb-12">TESTIMONIALS</h2>
            
            <div className="grid grid-cols-2 gap-8">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="bg-background rounded-lg p-8 border-2 border-border">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-accent text-xl">★</span>
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic">
                    "{`Zscore's thumbnails completely transformed my YouTube channel. Our CTR increased by 40% within the first month! The professionalism and attention to detail is unmatched.`}"
                  </p>
                  <div>
                    <p className="font-bold">Client Name {item}</p>
                    <p className="text-sm text-muted-foreground">YouTube Channel with 500K+ Subscribers</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-12 bg-background">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-5xl font-black mb-4">LET'S WORK TOGETHER</h2>
            <p className="text-muted-foreground text-xl mb-12">
              Ready to boost your channel's performance with stunning thumbnails? Get in touch today.
            </p>
            
            <div className="space-y-6">
              <a href="mailto:zedscoreteam@gmail.com" className="block bg-accent text-accent-foreground px-8 py-4 font-bold hover:opacity-90 transition rounded-lg text-lg">
                Email: zedscoreteam@gmail.com
              </a>
              
              <div className="flex justify-center gap-8">
                <a href="https://www.instagram.com/zscore_pix" target="_blank" className="flex items-center gap-2 text-accent hover:text-accent-foreground transition">
                  <Instagram size={24} />
                  <span>@zscore_pix</span>
                </a>
                <a href="https://www.tiktok.com/@zscore_pix" target="_blank" className="flex items-center gap-2 text-accent hover:text-accent-foreground transition">
                  <Music size={24} />
                  <span>@zscore_pix</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-12 bg-secondary border-t-8 border-accent">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-muted-foreground">© 2024 Zscore. All thumbnails are original designs.</p>
            <p className="text-sm text-muted-foreground mt-2">Specializing in YouTube Thumbnail Design | High-Impact CTR Strategy</p>
          </div>
        </footer>
      </div>
    </main>
  )
}
