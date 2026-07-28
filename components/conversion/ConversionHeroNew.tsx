'use client'

import AIVisualElement from './AIVisualElement'

interface ConversionHeroProps {
  onCTA: () => void
}

export default function ConversionHeroNew({ onCTA }: ConversionHeroProps) {
  return (
    <section className="relative overflow-hidden bg-slate-900">
      {/* Animated gradient background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10">
        {/* Main hero section */}
        <div className="max-w-7xl mx-auto px-lg py-5xl md:py-6xl">
          <div className="grid md:grid-cols-2 gap-3xl items-center">
            {/* Left side - Text content */}
            <div className="space-y-lg">
              {/* Badge */}
              <div className="inline-block animate-fade" style={{ animationDelay: '0.1s' }}>
                <div className="bg-accent/10 border border-accent/30 rounded-full px-md py-sm flex items-center gap-sm">
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold text-accent">AI Automation Platform</span>
                </div>
              </div>

              {/* Main headline */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-text-primary leading-tight animate-slide-up" style={{ animationDelay: '0.2s' }}>
                Automate Your Business.
                <br />
                <span className="text-accent">Accelerate Your Growth.</span>
              </h1>

              {/* Subheadline */}
              <p className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-lg animate-fade" style={{ animationDelay: '0.3s' }}>
                Stop wasting time on repetitive tasks. Our AI systems work 24/7 to capture leads, qualify prospects, and keep your business running—so you can focus on what matters.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-lg pt-lg animate-fade" style={{ animationDelay: '0.4s' }}>
                {/* Primary button */}
                <button
                  onClick={onCTA}
                  className="px-xl py-lg bg-gradient-accent text-white font-bold text-lg rounded-lg hover:shadow-glow-lg transition-all duration-base transform hover:scale-105 active:scale-95 will-change-transform"
                >
                  Get Your Free AI Strategy Call
                </button>

                {/* Secondary button */}
                <button
                  onClick={onCTA}
                  className="px-xl py-lg border-2 border-accent text-accent font-bold text-lg rounded-lg hover:bg-accent/5 transition-all duration-base transform hover:scale-105 active:scale-95 will-change-transform"
                >
                  See How We Help →
                </button>
              </div>

              {/* Trust indicators */}
              <div className="flex flex-col sm:flex-row gap-lg pt-lg text-sm text-text-secondary animate-fade" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center gap-md">
                  <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-md">
                  <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>15-minute discovery call</span>
                </div>
                <div className="flex items-center gap-md">
                  <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Trusted by 150+ businesses</span>
                </div>
              </div>
            </div>

            {/* Right side - AI Visual */}
            <div className="animate-slide-in-right" style={{ animationDelay: '0.3s' }}>
              <AIVisualElement />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-slide-up {
          animation: slide-up 0.6s ease-out forwards;
        }

        .animate-fade {
          animation: fade 0.6s ease-out forwards;
        }

        .animate-slide-in-right {
          animation: slide-in-right 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  )
}
