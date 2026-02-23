export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-white">Zeeshan</div>
        <div className="hidden md:flex gap-8">
          <a href="#" className="text-gray-300 hover:text-white transition">Portfolio</a>
          <a href="#" className="text-gray-300 hover:text-white transition">About</a>
          <a href="#" className="text-gray-300 hover:text-white transition">Contact</a>
        </div>
      </div>
    </nav>
  )
}
