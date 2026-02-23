export default function PortfolioSection() {
  const portfolio = [
    { id: 1, title: "Tech Review" },
    { id: 2, title: "Gaming Series" },
    { id: 3, title: "Music Channel" },
  ]

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold text-white mb-12">Featured Work</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {portfolio.map((item) => (
          <div key={item.id} className="bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition">
            <div className="aspect-video bg-gray-800 flex items-center justify-center">
              <span className="text-gray-600 text-lg">{item.title}</span>
            </div>
            <div className="p-4">
              <h3 className="text-white font-semibold">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
