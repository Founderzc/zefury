export default function Hero() {
  return (
    <section className="min-h-screen bg-black flex items-center justify-center pt-20">
      <div className="text-center">
        <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
          Premium <span className="text-red-600">Thumbnails</span>
        </h1>
        <p className="text-xl text-gray-400 mb-8 max-w-2xl">
          Elevate your content with stunning, professional-grade thumbnail designs
        </p>
        <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded transition">
          Get Started
        </button>
      </div>
    </section>
  )
}
