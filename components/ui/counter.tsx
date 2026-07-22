'use client'

import { useEffect, useRef } from 'react'
import { useInView, useMotionValue, useSpring, useTransform } from 'framer-motion'

interface CounterProps {
  value: number
  direction?: 'up' | 'down'
  duration?: number
  delay?: number
  className?: string
  suffix?: string
}

export function Counter({
  value,
  direction = 'up',
  duration = 2,
  delay = 0,
  className = '',
  suffix = '',
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const motionValue = useMotionValue(direction === 'down' ? value : 0)
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  })
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  useEffect(() => {
    if (isInView) {
      setTimeout(() => {
        motionValue.set(direction === 'down' ? 0 : value)
      }, delay * 1000)
    }
  }, [motionValue, isInView, delay, value, direction])

  const displayValue = useTransform(springValue, (latest) => {
    return Math.floor(latest).toLocaleString()
  })

  useEffect(() => {
    const unsubscribe = displayValue.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent = latest + suffix
      }
    })
    return () => unsubscribe()
  }, [displayValue, suffix])

  return (
    <span
      ref={ref}
      className={className}
    >
      {direction === 'down' ? value : 0}
      {suffix}
    </span>
  )
}
