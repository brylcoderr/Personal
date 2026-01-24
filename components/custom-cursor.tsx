'use client'

import React, { useEffect, useState } from 'react'
import { motion, useSpring, useMotionValue } from 'framer-motion'

export function CustomCursor() {
  const [isPointer, setIsPointer] = useState(false)
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  
  const springConfig = { damping: 25, stiffness: 200 }
  const x = useSpring(cursorX, springConfig)
  const y = useSpring(cursorY, springConfig)

  const [coords, setCoords] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
      setCoords({ x: e.clientX, y: e.clientY })

      const target = e.target as HTMLElement
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' || 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON'
      )
    }

    window.addEventListener('mousemove', moveCursor)
    return () => window.removeEventListener('mousemove', moveCursor)
  }, [cursorX, cursorY])

  return (
    <div className="fixed inset-0 pointer-events-none z-9999 hidden md:block">
      {/* Main Crosshair */}
      <motion.div
        style={{ x, y }}
        className="absolute -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
      >
        {/* Outer Ring */}
        <motion.div 
          animate={{ 
            width: isPointer ? 40 : 24, 
            height: isPointer ? 40 : 24,
            rotate: isPointer ? 90 : 0,
            borderColor: isPointer ? 'hsl(var(--primary))' : 'rgba(139, 92, 246, 0.3)'
          }}
          className="rounded-sm border absolute"
        />
        
        {/* Inner Dot */}
        <motion.div 
          animate={{ 
            scale: isPointer ? 0 : 1,
            backgroundColor: 'hsl(var(--primary))'
          }}
          className="w-1 h-1 rounded-full absolute"
        />

        {/* Coordinates Labels */}
        <div className="absolute top-6 left-6 font-mono text-[6px] text-primary/40 uppercase tracking-widest whitespace-nowrap">
           LOC_X: {coords.x} <br />
           LOC_Y: {coords.y}
        </div>
        
        {/* Decorative Corner Lines */}
        <div className="absolute -top-4 -left-4 w-2 h-2 border-t border-l border-primary/20" />
        <div className="absolute -bottom-4 -right-4 w-2 h-2 border-b border-r border-primary/20" />
      </motion.div>

      {/* Trailing Dot Layer */}
      <motion.div
        style={{ 
          x: useSpring(cursorX, { damping: 40, stiffness: 250 }), 
          y: useSpring(cursorY, { damping: 40, stiffness: 250 }) 
        }}
        className="absolute -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-primary/5 blur-xl pointer-events-none"
      />
    </div>
  )
}
