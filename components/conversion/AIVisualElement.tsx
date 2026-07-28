'use client'

import { useEffect, useRef, useState } from 'react'

type IconName = 'mail' | 'calendar' | 'chat' | 'trend' | 'check' | 'user'

type FeedItem = {
  id: number
  icon: IconName
  title: string
  sub: string
}

const POOL: Omit<FeedItem, 'id'>[] = [
  { icon: 'mail', title: 'New lead — Sarah M.', sub: 'Answered in 8 seconds' },
  { icon: 'calendar', title: 'Call booked — Thursday 2:00pm', sub: 'No back-and-forth needed' },
  { icon: 'chat', title: 'Pricing question answered', sub: 'Replied at 11:47pm' },
  { icon: 'trend', title: 'Follow-up sent — 4 prospects', sub: 'While you were asleep' },
  { icon: 'check', title: 'Quote delivered — Ramirez Co.', sub: 'Straight from the form' },
  { icon: 'user', title: 'New lead — Marcus T.', sub: 'Qualified automatically' },
]

const STAMPS = ['just now', '4m', '12m']

function Icon({ name }: { name: IconName }) {
  const common = {
    fill: 'none',
    stroke: 'currentColor',
    viewBox: '0 0 24 24',
    strokeWidth: 2,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  }

  switch (name) {
    case 'mail':
      return (
        <svg {...common}>
          <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    case 'calendar':
      return (
        <svg {...common}>
          <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    case 'chat':
      return (
        <svg {...common}>
          <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.86 9.86 0 01-4-.8L3 20l1.4-3.5A7.9 7.9 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      )
    case 'trend':
      return (
        <svg {...common}>
          <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    case 'check':
      return (
        <svg {...common}>
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    case 'user':
      return (
        <svg {...common}>
          <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
  }
}

export default function AIVisualElement() {
  const [items, setItems] = useState<FeedItem[]>([
    { id: 0, ...POOL[0] },
    { id: 1, ...POOL[1] },
    { id: 2, ...POOL[2] },
  ])

  // Cursor lives outside the state updater so React's dev-mode double
  // invocation can't advance it twice per tick.
  const cursor = useRef(POOL.length > 3 ? 3 : 0)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const timer = setInterval(() => {
      const entry = { id: cursor.current, ...POOL[cursor.current % POOL.length] }
      cursor.current += 1
      setItems((prev) => [entry, ...prev].slice(0, 3))
    }, 2800)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="laptop w-full max-w-[450px] mx-auto select-none">
      {/* Lid */}
      <div className="relative rounded-[16px] bg-[#33363d] p-[9px] pt-[18px] ring-1 ring-white/10 shadow-2xl">
        {/* Camera */}
        <div className="absolute top-[7px] left-1/2 -translate-x-1/2 w-[5px] h-[5px] rounded-full bg-[#14161a] ring-1 ring-[#4b4f57]" />

        {/* Screen */}
        <div className="rounded-[7px] bg-white overflow-hidden">
          {/* App chrome */}
          <div className="flex items-center gap-2 px-5 py-3 border-b border-gray-100">
            <div className="w-2.5 h-2.5 rounded-full bg-gray-200" />
            <div className="w-2.5 h-2.5 rounded-full bg-gray-200" />
            <div className="w-2.5 h-2.5 rounded-full bg-gray-200" />
            <div className="ml-auto flex items-center gap-1.5">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-60 animate-ping" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-blue-600" />
              </span>
              <span className="text-[11px] font-medium text-gray-400 tracking-wide">Live</span>
            </div>
          </div>

          {/* Feed */}
          <div className="feed px-5 py-2 overflow-hidden">
            {items.map((item, i) => (
              <div
                key={item.id}
                className="feed-row flex items-start gap-3.5 py-[7px]"
              >
                <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 p-[7px]">
                  <Icon name={item.icon} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[13px] font-semibold text-gray-900 truncate">{item.title}</div>
                  <div className="text-[12px] text-gray-500 mt-0.5 truncate">{item.sub}</div>
                </div>
                <div className="text-[11px] text-gray-400 flex-shrink-0 pt-0.5">{STAMPS[i]}</div>
              </div>
            ))}
          </div>

          {/* Footer stat */}
          <div className="px-5 py-3 border-t border-gray-100 flex items-baseline gap-3">
            <div className="text-2xl font-bold text-gray-900 leading-none">14</div>
            <div className="text-[12px] text-gray-500 leading-snug">
              hours of your week, handled automatically
            </div>
          </div>
        </div>
      </div>

      {/* Hinge + base */}
      <div className="relative">
        <div
          className="h-[11px] bg-[#c2c6cd]"
          style={{
            width: '114%',
            marginLeft: '-7%',
            clipPath: 'polygon(0 0, 100% 0, 97.5% 100%, 2.5% 100%)',
            borderBottomLeftRadius: '10px',
            borderBottomRightRadius: '10px',
          }}
        />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[70px] h-[5px] rounded-b-full bg-[#9ba0a8]" />
        <div
          className="h-[4px] mx-auto bg-[#8d929a]/40 blur-[2px]"
          style={{ width: '104%', marginLeft: '-2%' }}
        />
      </div>

      <style jsx>{`
        @keyframes feedIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .feed-row {
          animation: feedIn 450ms ease-out;
        }

        /* Row count follows the laptop's own width (container query), not
           the viewport — the hero splits into two columns at md, which
           shrinks the lid without shrinking the window. Three rows keeps
           the screen near 16:10; a narrow lid drops to two so it never
           goes square. */
        .laptop {
          container-type: inline-size;
        }

        .feed {
          height: 186px;
        }

        @container (max-width: 380px) {
          .feed {
            height: 128px;
          }
          .feed-row:nth-child(3) {
            display: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .feed-row {
            animation: none;
          }
        }
      `}</style>
    </div>
  )
}
