'use client'

import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function ScrollStressMonitor() {
  const [scrollDelta, setScrollDelta] = useState(0)
  const [isStressed, setIsStressed] = useState(false)
  const [lastY, setLastY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      const delta = Math.abs(currentY - lastY)
      setScrollDelta(delta)
      setLastY(currentY)

      if (delta > 150) {
        setIsStressed(true)
        const timer = setTimeout(() => setIsStressed(false), 500)
        return () => clearTimeout(timer)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastY])

  return (
    <>
      <AnimatePresence>
        {isStressed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-80 pointer-events-none"
          >
             {/* Glitch Overlay */}
             <div className="absolute inset-0 bg-primary/2 mix-blend-overlay animate-pulse" />
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-mono text-[10px] text-primary/40 uppercase tracking-[0.5em] whitespace-nowrap">
                BUFFER_OVERLOAD: DATA_SYNC_CRITICAL
             </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Recovery Marker */}
      <div className="fixed bottom-10 right-10 z-70 font-mono text-[7px] text-muted-foreground/10 uppercase tracking-widest hidden md:block">
         SYNC_FREQ: {scrollDelta}Hz / {isStressed ? 'STRESSED' : 'STABLE'}
      </div>
    </>
  )
}
