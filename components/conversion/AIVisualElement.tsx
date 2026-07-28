'use client'

export default function AIVisualElement() {
  return (
    <div className="relative w-full">
      <div className="bg-white rounded-2xl p-8 md:p-10" style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)' }}>
        {/* Browser chrome */}
        <div className="flex items-center gap-2 pb-6 mb-6 border-b border-gray-100">
          <div className="w-2.5 h-2.5 rounded-full bg-gray-200"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-gray-200"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-gray-200"></div>
          <div className="ml-3 text-xs text-gray-400 font-medium">Today</div>
        </div>

        {/* Live activity feed */}
        <div className="space-y-5">
          <div className="flex items-start gap-4">
            <div className="w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-semibold text-gray-900">New lead — Sarah M.</div>
              <div className="text-sm text-gray-500 mt-0.5">Answered in 8 seconds</div>
            </div>
            <div className="text-xs text-gray-400 flex-shrink-0">2m</div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-semibold text-gray-900">Call booked — Thursday 2:00pm</div>
              <div className="text-sm text-gray-500 mt-0.5">No back-and-forth needed</div>
            </div>
            <div className="text-xs text-gray-400 flex-shrink-0">6m</div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-semibold text-gray-900">Follow-up sent — 4 prospects</div>
              <div className="text-sm text-gray-500 mt-0.5">While you were asleep</div>
            </div>
            <div className="text-xs text-gray-400 flex-shrink-0">1h</div>
          </div>
        </div>

        {/* Footer stat */}
        <div className="mt-8 pt-6 border-t border-gray-100 flex items-baseline gap-3">
          <div className="text-3xl font-bold text-gray-900">14</div>
          <div className="text-sm text-gray-500">hours of your week, handled automatically</div>
        </div>
      </div>
    </div>
  )
}
