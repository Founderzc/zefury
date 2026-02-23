"use client"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navbar Section */}
      <nav className="fixed top-0 w-full bg-black bg-opacity-90 backdrop-blur-md z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-widest">ZEESHAN</h1>
          <div className="hidden md:flex gap-8">
            <a href="#portfolio" className="text-gray-400 hover:text-white transition">Portfolio</a>
            <a href="#about" className="text-gray-400 hover:text-white transition">About</a>
            <a href="#contact" className="text-gray-400 hover:text-white transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 text-center">
        <h2 className="text-6xl md:text-7xl font-bold mb-6 tracking-tighter">
          Premium Thumbnail
          <br />
          <span className="text-red-600">Designer</span>
        </h2>
        <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
          Crafting eye-catching thumbnails that drive engagement and conversions
        </p>
        <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded transition">
          View Portfolio
        </button>
      </section>

      {/* Spacer */}
      <div className="py-20 text-center bg-black">
        <h3 className="text-5xl font-extralight tracking-widest uppercase mt-10">
          Zeeshan Baba <span className="font-bold text-red-600">Fitter</span>
        </h3>
        <p className="text-gray-500 mt-4 tracking-widest italic">
          Premium Thumbnails Showroom
        </p>
      </div>

      {/* Portfolio Section */}
      <section id="portfolio" className="bg-black pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Featured Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="bg-gray-900 rounded-lg overflow-hidden hover:scale-105 transition">
                <div className="w-full h-40 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                  <span className="text-4xl font-bold text-gray-700">Thumbnail {item}</span>
                </div>
                <div className="p-4">
                  <h3 className="font-bold mb-2">Project {item}</h3>
                  <p className="text-gray-400 text-sm">Professional thumbnail design showcasing premium quality and engagement optimization.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-900 border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-400">© 2024 Zeeshan Baba Fitter. All rights reserved.</p>
          <div className="mt-4 flex gap-6 justify-center">
            <a href="#" className="text-gray-400 hover:text-white transition">Twitter</a>
            <a href="#" className="text-gray-400 hover:text-white transition">Instagram</a>
            <a href="#" className="text-gray-400 hover:text-white transition">LinkedIn</a>
          </div>
        </div>
      </footer>
    </main>
  )
}
