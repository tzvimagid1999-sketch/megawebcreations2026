interface FooterProps {
  onContactClick: () => void
}

export default function Footer({ onContactClick }: FooterProps) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark-lighter border-t border-accent/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-accent rounded flex items-center justify-center font-bold text-dark text-sm">M</div>
              <span className="font-bold text-white">MegaWebCreations</span>
            </div>
            <p className="text-gray-400 text-sm">
              SEO, local SEO, and conversion-focused web design that help small businesses get found on Google.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="/services" className="text-gray-400 hover:text-accent transition text-sm">SEO</a></li>
              <li><a href="/services" className="text-gray-400 hover:text-accent transition text-sm">Local SEO</a></li>
              <li><a href="/services" className="text-gray-400 hover:text-accent transition text-sm">Web Design</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-400 hover:text-accent transition text-sm">About Us</a></li>
              <li><a href="/services" className="text-gray-400 hover:text-accent transition text-sm">Services</a></li>
              <li><button onClick={onContactClick} className="text-gray-400 hover:text-accent transition text-sm">Contact</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Get in Touch</h4>
            <p className="text-gray-400 text-sm mb-4">
              <a href="mailto:Megwebcraetions@gmail.com" className="hover:text-accent transition">
                Megwebcraetions@gmail.com
              </a>
            </p>
            <button
              onClick={onContactClick}
              className="px-4 py-2 bg-accent text-dark font-semibold rounded text-sm hover:shadow-lg glow-accent transition"
            >
              Start Project
            </button>
          </div>
        </div>

        <div className="border-t border-accent/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm">
              © {currentYear} MegaWebCreations. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="/privacy" className="text-gray-400 hover:text-accent transition text-sm">Privacy Policy</a>
              <a href="mailto:Megwebcraetions@gmail.com" className="text-gray-400 hover:text-accent transition text-sm">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
