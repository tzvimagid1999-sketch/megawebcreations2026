'use client'

export default function DeviceMockup() {
  return (
    <div className="grid lg:grid-cols-2 gap-2xl items-center">
      {/* Laptop Mockup */}
      <div className="relative animate-bounce-slow">
        {/* Laptop */}
        <div className="bg-black rounded-2xl shadow-2xl overflow-hidden" style={{ aspectRatio: '16/10' }}>
          {/* Screen */}
          <div className="bg-gradient-to-br from-black to-slate-900 h-full flex flex-col">
            {/* Browser bar */}
            <div className="bg-slate-800 border-b border-green-500/20 px-4 py-3 flex items-center gap-2">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="ml-2 text-xs text-green-400">megawebcreations.com</div>
            </div>

            {/* Content */}
            <div className="flex-1 p-6 overflow-hidden">
              <div className="space-y-4">
                <div className="h-8 bg-green-500 rounded w-3/4 animate-pulse"></div>
                <div className="space-y-2">
                  <div className="h-3 bg-green-500/30 rounded animate-pulse" style={{ animationDelay: '0.1s' }}></div>
                  <div className="h-3 bg-green-500/30 rounded w-5/6 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                </div>

                {/* Chat bubble demo */}
                <div className="mt-6 space-y-3">
                  <div className="flex justify-end animate-slide-in-right" style={{ animationDelay: '0.3s' }}>
                    <div className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm max-w-xs">
                      I need help scaling my leads
                    </div>
                  </div>
                  <div className="flex justify-start animate-slide-in-left" style={{ animationDelay: '0.6s' }}>
                    <div className="bg-slate-700 text-green-400 px-4 py-2 rounded-lg text-sm max-w-xs">
                      ✓ Let me qualify this for you...
                    </div>
                  </div>
                  <div className="flex justify-start animate-slide-in-left" style={{ animationDelay: '0.9s' }}>
                    <div className="bg-green-500/20 text-green-400 px-4 py-2 rounded-lg text-sm font-semibold border border-green-500">
                      ✓ Meeting scheduled for Thursday
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Laptop stand */}
        <div className="flex justify-center gap-12 mt-2">
          <div className="w-1 h-4 bg-black"></div>
          <div className="w-1 h-4 bg-black"></div>
        </div>
      </div>

      {/* Phone Mockup */}
      <div className="relative mx-auto max-w-xs animate-bounce-slow" style={{ animationDelay: '0.2s' }}>
        {/* Phone body */}
        <div className="bg-black rounded-3xl shadow-2xl overflow-hidden p-2" style={{ aspectRatio: '9/16' }}>
          {/* Screen */}
          <div className="bg-gradient-to-br from-black to-slate-900 h-full rounded-2xl overflow-hidden flex flex-col">
            {/* Notch */}
            <div className="bg-black h-6 flex items-center justify-center border-b border-green-500/20">
              <div className="text-green-400 text-xs font-bold">9:41</div>
            </div>

            {/* Content */}
            <div className="flex-1 p-4 overflow-auto">
              <div className="space-y-3">
                <div className="h-6 bg-green-500 rounded w-2/3 animate-pulse"></div>
                <div className="space-y-2">
                  <div className="h-2 bg-green-500/30 rounded animate-pulse" style={{ animationDelay: '0.1s' }}></div>
                  <div className="h-2 bg-green-500/30 rounded w-5/6 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                </div>

                {/* Chat */}
                <div className="mt-6 space-y-2">
                  <div className="flex justify-end animate-slide-in-right" style={{ animationDelay: '0.3s' }}>
                    <div className="bg-green-600 text-white px-3 py-1.5 rounded-lg text-xs max-w-xs">
                      Hi there
                    </div>
                  </div>
                  <div className="flex justify-start animate-slide-in-left" style={{ animationDelay: '0.6s' }}>
                    <div className="bg-slate-700 text-green-400 px-3 py-1.5 rounded-lg text-xs">
                      Hello! How can I help?
                    </div>
                  </div>
                  <div className="flex justify-end animate-slide-in-right" style={{ animationDelay: '0.9s' }}>
                    <div className="bg-green-600 text-white px-3 py-1.5 rounded-lg text-xs">
                      Need a site
                    </div>
                  </div>
                  <div className="flex justify-start animate-slide-in-left" style={{ animationDelay: '1.2s' }}>
                    <div className="bg-green-500/20 text-green-400 px-3 py-1.5 rounded-lg text-xs font-semibold border border-green-500">
                      Booking you now ✓
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }

        .animate-slide-in-right {
          animation: slide-in-right 0.5s ease-out forwards;
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  )
}
