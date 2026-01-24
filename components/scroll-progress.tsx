'use client'

import { memo, useMemo } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'

export const ScrollProgress = memo(function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  
  const springConfig = useMemo(() => ({
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  }), [])
  
  const scaleX = useSpring(scrollYProgress, springConfig)

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-100 h-1 bg-primary origin-left pointer-events-none shadow-[0_0_15px_rgba(139,92,246,0.5)]"
      style={{ scaleX }}
      aria-hidden="true"
    />
  )
})
