'use client'

export default function AIVisualElement() {
  return (
    <div className="relative w-full h-full min-h-96 flex items-center justify-center">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-accent/5 rounded-2xl"></div>

      {/* Animated background circles */}
      <div className="absolute inset-0 overflow-hidden rounded-2xl">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 w-full px-lg">
        {/* Top card - Lead Capture */}
        <div className="mb-lg animate-fade" style={{ animationDelay: '0.2s' }}>
          <div className="bg-white/80 backdrop-blur border border-accent/20 rounded-xl p-lg shadow-lg hover:shadow-xl transition-shadow duration-base">
            <div className="flex items-center gap-md">
              <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center text-white font-bold text-sm flex-shrink-0">1</div>
              <div className="flex-1 text-center">
                <div className="font-semibold text-text-primary text-sm">Captures Leads</div>
                <div className="text-xs text-text-secondary mt-xs">24/7 Lead Generation</div>
              </div>
            </div>
          </div>
        </div>

        {/* Animated connector */}
        <div className="flex justify-center mb-lg">
          <div className="w-1 h-8 bg-gradient-to-b from-accent to-transparent animate-pulse"></div>
        </div>

        {/* Middle card - Qualification */}
        <div className="mb-lg animate-fade" style={{ animationDelay: '0.4s' }}>
          <div className="bg-white/80 backdrop-blur border border-accent/20 rounded-xl p-lg shadow-lg hover:shadow-xl transition-shadow duration-base">
            <div className="flex items-center gap-md">
              <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center text-white font-bold text-sm flex-shrink-0">2</div>
              <div className="flex-1 text-center">
                <div className="font-semibold text-text-primary text-sm">Qualifies & Schedules</div>
                <div className="text-xs text-text-secondary mt-xs">Instant Meetings Booked</div>
              </div>
            </div>
          </div>
        </div>

        {/* Animated connector */}
        <div className="flex justify-center mb-lg">
          <div className="w-1 h-8 bg-gradient-to-b from-accent to-transparent animate-pulse"></div>
        </div>

        {/* Bottom card - Growth */}
        <div className="animate-fade" style={{ animationDelay: '0.6s' }}>
          <div className="bg-gradient-accent rounded-xl p-lg shadow-lg">
            <div className="flex items-center gap-md">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center text-white font-bold text-sm flex-shrink-0">3</div>
              <div className="flex-1 text-center">
                <div className="font-semibold text-white text-sm">Your Business Grows</div>
                <div className="text-xs text-white/80 mt-xs">More Revenue, Less Work</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom decorative element */}
        <div className="flex justify-center mt-lg gap-md animate-fade" style={{ animationDelay: '0.8s' }}>
          <div className="w-2 h-2 bg-accent rounded-full"></div>
          <div className="w-2 h-2 bg-accent/50 rounded-full"></div>
          <div className="w-2 h-2 bg-accent/30 rounded-full"></div>
        </div>
      </div>
    </div>
  )
}
