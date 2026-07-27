'use client'

import { useState } from 'react'

interface HeaderProps {
  onContactClick: () => void
}

export default function Header({ onContactClick }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-dark-lighter backdrop-blur border-b border-accent/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-accent rounded flex items-center justify-center font-bold text-dark text-sm">M</div>
          <span className="text-xl font-bold text-white">MegaWebCreations</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="/services" className="text-gray-300 hover:text-accent transition">Services</a>
          <a href="#why-us" className="text-gray-300 hover:text-accent transition">Why Us</a>
          <a href="#how-it-works" className="text-gray-300 hover:text-accent transition">How It Works</a>
          <a href="#results" className="text-gray-300 hover:text-accent transition">Results</a>
          <button
            onClick={onContactClick}
            className="px-6 py-2 bg-accent text-dark font-semibold rounded hover:shadow-lg glow-accent transition"
          >
            Start Project
          </button>
        </nav>

        <button
          className="md:hidden text-accent"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-dark-lighter border-t border-accent/10">
          <nav className="flex flex-col gap-4 p-4">
            <a href="/services" className="text-gray-300 hover:text-accent transition">Services</a>
            <a href="#why-us" className="text-gray-300 hover:text-accent transition">Why Us</a>
            <a href="#how-it-works" className="text-gray-300 hover:text-accent transition">How It Works</a>
            <a href="#results" className="text-gray-300 hover:text-accent transition">Results</a>
            <button
              onClick={onContactClick}
              className="w-full px-6 py-2 bg-accent text-dark font-semibold rounded hover:shadow-lg glow-accent transition"
            >
              Start Project
            </button>
          </nav>
        </div>
      )}
    </header>
  )
}
