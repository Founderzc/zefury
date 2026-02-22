"use client"

import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import PortfolioSection from "@/components/Portfolio-section"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navbar Section */}
      <Navbar />
      
      {/* Hero Section (Welcome Page) */}
      <Hero />

      {/* Tesla Style Spacer */}
      <div className="py-20 text-center bg-black">
        <h2 className="text-5xl font-extralight tracking-widest uppercase mt-10">
          Zeeshan Baba <span className="font-bold text-red-600">Fitter</span>
        </h2>
        <p className="text-gray-500 mt-4 tracking-widest italic">
          Premium Thumbnails Showroom
        </p>
      </div>

      {/* Projects/Thumbnails Section */}
      <div className="bg-black pb-20">
         <PortfolioSection />
      </div>

      {/* Footer Section */}
      <Footer />
    </main>