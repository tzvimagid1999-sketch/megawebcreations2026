'use client'

import { useState } from 'react'

interface HeaderProps {
  onContactClick: () => void
}

export default function Header({ onContactClick }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white backdrop-blur border-b border-accent/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <div className="w-8 h-8 bg-gradient-accent rounded flex items-center justify-center font-bold text-white text-sm">M</div>
          <span className="text-xl font-bold text-text-primary">MegaWebCreations</span>
        </a>

        <nav className="hidden md:flex items-center gap-2">
          <a href="/" className="text-text-secondary hover:text-accent bg-accent/5 hover:bg-accent/10 px-4 py-2 rounded-lg transition-all duration-base">
            Home
          </a>
          <a href="/services" className="text-text-secondary hover:text-accent bg-accent/5 hover:bg-accent/10 px-4 py-2 rounded-lg transition-all duration-base">
            Services
          </a>
          <a href="#why-us" className="text-text-secondary hover:text-accent bg-accent/5 hover:bg-accent/10 px-4 py-2 rounded-lg transition-all duration-base">
            Why Us
          </a>
          <a href="#how-it-works" className="text-text-secondary hover:text-accent bg-accent/5 hover:bg-accent/10 px-4 py-2 rounded-lg transition-all duration-base">
            How It Works
          </a>
          <a href="#results" className="text-text-secondary hover:text-accent bg-accent/5 hover:bg-accent/10 px-4 py-2 rounded-lg transition-all duration-base">
            Results
          </a>
          <a
            href="/get-started"
            className="px-6 py-2 bg-accent text-white font-semibold rounded hover:shadow-glow-lg transition-all duration-base transform hover:scale-110 active:scale-95 will-change-transform inline-block"
          >
            Start Project
          </a>
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
        <div className="md:hidden bg-bg-light border-t border-accent/10 animate-slide-down">
          <nav className="flex flex-col gap-4 p-4">
            <a href="/" className="text-text-secondary hover:text-accent transition-colors duration-base">Home</a>
            <a href="/services" className="text-text-secondary hover:text-accent transition-colors duration-base">Services</a>
            <a href="#why-us" className="text-text-secondary hover:text-accent transition-colors duration-base">Why Us</a>
            <a href="#how-it-works" className="text-text-secondary hover:text-accent transition-colors duration-base">How It Works</a>
            <a href="#results" className="text-text-secondary hover:text-accent transition-colors duration-base">Results</a>
            <a
              href="/get-started"
              className="w-full text-center px-6 py-2 bg-accent text-white font-semibold rounded hover:shadow-glow-lg transition-all duration-base transform hover:scale-105 active:scale-95 will-change-transform inline-block"
            >
              Start Project
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
