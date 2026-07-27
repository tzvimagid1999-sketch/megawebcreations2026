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
          <a href="/services" className="text-gray-300 hover:text-accent transition-colors duration-base relative group">
            Services
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-base"></span>
          </a>
          <a href="#why-us" className="text-gray-300 hover:text-accent transition-colors duration-base relative group">
            Why Us
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-base"></span>
          </a>
          <a href="#how-it-works" className="text-gray-300 hover:text-accent transition-colors duration-base relative group">
            How It Works
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-base"></span>
          </a>
          <a href="#results" className="text-gray-300 hover:text-accent transition-colors duration-base relative group">
            Results
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-base"></span>
          </a>
          <button
            onClick={onContactClick}
            className="px-6 py-2 bg-accent text-dark font-semibold rounded hover:shadow-glow-lg transition-all duration-base transform hover:scale-110 active:scale-95 will-change-transform"
          >
            Start Project
          </button>
        </nav>

        <button
          className="md:hidden text-accent transform transition-transform duration-base hover:scale-110 active:scale-95"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className={`w-6 h-6 transition-transform duration-base ${isMenuOpen ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-dark-lighter border-t border-accent/10 animate-slide-down">
          <nav className="flex flex-col gap-4 p-4">
            <a href="/services" className="text-gray-300 hover:text-accent transition-colors duration-base">Services</a>
            <a href="#why-us" className="text-gray-300 hover:text-accent transition-colors duration-base">Why Us</a>
            <a href="#how-it-works" className="text-gray-300 hover:text-accent transition-colors duration-base">How It Works</a>
            <a href="#results" className="text-gray-300 hover:text-accent transition-colors duration-base">Results</a>
            <button
              onClick={onContactClick}
              className="w-full px-6 py-2 bg-accent text-dark font-semibold rounded hover:shadow-glow-lg transition-all duration-base transform hover:scale-105 active:scale-95 will-change-transform"
            >
              Start Project
            </button>
          </nav>
        </div>
      )}
    </header>
  )
}
