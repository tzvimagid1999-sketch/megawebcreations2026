'use client'

export default function DeviceMockup() {
  return (
    <div className="grid lg:grid-cols-2 gap-2xl items-center">
      {/* Laptop Mockup */}
      <div className="relative">
        {/* Laptop */}
        <div className="bg-gray-900 rounded-2xl shadow-2xl overflow-hidden" style={{ aspectRatio: '16/10' }}>
          {/* Screen */}
          <div className="bg-gradient-to-br from-blue-50 to-slate-50 h-full flex flex-col">
            {/* Browser bar */}
            <div className="bg-white border-b border-gray-200 px-4 py-3 flex items-center gap-2">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <div className="ml-2 text-xs text-gray-500">megawebcreations.com</div>
            </div>

            {/* Content */}
            <div className="flex-1 p-6 overflow-hidden">
              <div className="space-y-4">
                <div className="h-8 bg-gray-900 rounded w-3/4"></div>
                <div className="space-y-2">
                  <div className="h-3 bg-gray-300 rounded"></div>
                  <div className="h-3 bg-gray-300 rounded w-5/6"></div>
                </div>

                {/* Chat bubble demo */}
                <div className="mt-6 space-y-3">
                  <div className="flex justify-end">
                    <div className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm max-w-xs">
                      I need help scaling my leads
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="bg-gray-200 text-gray-900 px-4 py-2 rounded-lg text-sm max-w-xs">
                      ✓ Let me qualify this for you...
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="bg-green-100 text-green-900 px-4 py-2 rounded-lg text-sm font-semibold">
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
          <div className="w-1 h-4 bg-gray-900"></div>
          <div className="w-1 h-4 bg-gray-900"></div>
        </div>
      </div>

      {/* Phone Mockup */}
      <div className="relative mx-auto max-w-xs">
        {/* Phone body */}
        <div className="bg-gray-900 rounded-3xl shadow-2xl overflow-hidden p-2" style={{ aspectRatio: '9/16' }}>
          {/* Screen */}
          <div className="bg-gradient-to-br from-blue-50 to-slate-50 h-full rounded-2xl overflow-hidden flex flex-col">
            {/* Notch */}
            <div className="bg-gray-900 h-6 flex items-center justify-center">
              <div className="text-white text-xs">9:41</div>
            </div>

            {/* Content */}
            <div className="flex-1 p-4 overflow-auto">
              <div className="space-y-3">
                <div className="h-6 bg-gray-900 rounded w-2/3"></div>
                <div className="space-y-2">
                  <div className="h-2 bg-gray-300 rounded"></div>
                  <div className="h-2 bg-gray-300 rounded w-5/6"></div>
                </div>

                {/* Chat */}
                <div className="mt-6 space-y-2">
                  <div className="flex justify-end">
                    <div className="bg-blue-500 text-white px-3 py-1.5 rounded-lg text-xs max-w-xs">
                      Hi there
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="bg-gray-200 text-gray-900 px-3 py-1.5 rounded-lg text-xs">
                      Hello! How can I help?
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="bg-blue-500 text-white px-3 py-1.5 rounded-lg text-xs">
                      Need a site
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="bg-green-100 text-green-900 px-3 py-1.5 rounded-lg text-xs font-semibold">
                      Booking you now ✓
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
