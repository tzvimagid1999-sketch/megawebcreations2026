'use client'

import { useState, useEffect } from 'react'

export default function AIDemo() {
  const [messages, setMessages] = useState<Array<{ type: 'user' | 'ai'; text: string }>>([])
  const [currentStep, setCurrentStep] = useState(0)

  const conversation = [
    { type: 'user', text: 'Hi, I need help with my website' },
    { type: 'ai', text: 'Sure! I can help. What specific issue are you facing?' },
    { type: 'user', text: 'I want to increase my leads' },
    { type: 'ai', text: '✓ Understood. Let me qualify this: What\'s your current monthly lead volume?' },
    { type: 'user', text: 'Around 10-15 per month' },
    { type: 'ai', text: '✓ Perfect. Scheduling a call with our team for you on Thursday at 2 PM. Confirmation sent to your email.' },
  ] as const

  useEffect(() => {
    if (currentStep < conversation.length) {
      const timer = setTimeout(() => {
        setMessages(prev => [...prev, conversation[currentStep]])
        setCurrentStep(prev => prev + 1)
      }, 1500)
      return () => clearTimeout(timer)
    } else {
      const resetTimer = setTimeout(() => {
        setMessages([])
        setCurrentStep(0)
      }, 5000)
      return () => clearTimeout(resetTimer)
    }
  }, [currentStep])

  return (
    <div className="grid md:grid-cols-2 gap-2xl items-center">
      {/* Left: Laptop Mockup */}
      <div className="relative">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-8 border-gray-900">
          {/* Laptop bezel */}
          <div className="bg-gray-900 p-1">
            <div className="bg-gray-100 p-4 min-h-96 rounded">
              {/* Website header */}
              <div className="mb-4 pb-4 border-b border-gray-300">
                <div className="font-bold text-gray-900 text-sm">Your Business Website</div>
                <div className="text-xs text-gray-500 mt-1">www.yourbusiness.com</div>
              </div>

              {/* Chat demo */}
              <div className="space-y-3 text-xs">
                {messages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`animate-fade ${msg.type === 'user' ? 'text-right' : 'text-left'}`}
                  >
                    <div
                      className={`inline-block px-3 py-2 rounded-lg max-w-xs ${
                        msg.type === 'user'
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-200 text-gray-900'
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}
                {currentStep === conversation.length && messages.length > 0 && (
                  <div className="text-left mt-4 pt-4 border-t border-gray-300">
                    <div className="inline-block bg-green-100 text-green-900 px-3 py-2 rounded-lg text-xs font-semibold">
                      ✓ Automation Complete
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Laptop stand */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full w-3/4 h-3 bg-gray-900 rounded-b-lg"></div>
      </div>

      {/* Right: Description */}
      <div className="space-y-lg">
        <h3 className="text-3xl font-bold text-text-primary">AI That Works 24/7</h3>

        <div className="space-y-md">
          <div className="flex gap-lg">
            <div className="text-2xl flex-shrink-0">💬</div>
            <div>
              <div className="font-semibold text-text-primary">Instant Responses</div>
              <div className="text-sm text-text-secondary">AI answers customer questions immediately, any time of day</div>
            </div>
          </div>

          <div className="flex gap-lg">
            <div className="text-2xl flex-shrink-0">🎯</div>
            <div>
              <div className="font-semibold text-text-primary">Qualify Leads</div>
              <div className="text-sm text-text-secondary">Automatically identify serious prospects and collect their info</div>
            </div>
          </div>

          <div className="flex gap-lg">
            <div className="text-2xl flex-shrink-0">📅</div>
            <div>
              <div className="font-semibold text-text-primary">Schedule Meetings</div>
              <div className="text-sm text-text-secondary">Book appointments directly without back-and-forth emails</div>
            </div>
          </div>

          <div className="flex gap-lg">
            <div className="text-2xl flex-shrink-0">⚡</div>
            <div>
              <div className="font-semibold text-text-primary">Save 15+ Hours/Week</div>
              <div className="text-sm text-text-secondary">Automation handles repetitive tasks so your team focuses on closing</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
