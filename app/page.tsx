import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import PortfolioSection from "@/components/portfolio-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* 1. Top Bar */}
      <Navbar />
      
      {/* 2. Main Welcome Section */}
      <Hero />

      {/* 3. Your Thumbnails Showroom */}
      <div className="py-10">
        <PortfolioSection />
      </div>

      {/* 4. Bottom Section */}
      <Footer />
    </main>
  )
}