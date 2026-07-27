'use client'

import { useEffect, useState } from 'react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

interface AnimatedCounterProps {
  end: number
  suffix?: string
  prefix?: string
  duration?: number
}

export default function AnimatedCounter({
  end,
  suffix = '',
  prefix = '',
  duration = 2000,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const { elementRef, isVisible } = useScrollAnimation()

  useEffect(() => {
    if (!isVisible) return

    let startTime: number
    let animationFrameId: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)

      setCount(Math.floor(progress * end))

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate)
      }
    }

    animationFrameId = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrameId)
  }, [isVisible, end, duration])

  return (
    <div ref={elementRef as React.RefObject<HTMLDivElement>}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </div>
  )
}
