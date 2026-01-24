'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useUI } from './ui-provider'

export function SystemLoadIndicators() {
  const { isCodeView } = useUI()
  const [stats, setStats] = useState({
    cpu: 0,
    mem: 0,
    temp: 0
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setStats({
        cpu: Math.floor(Math.random() * 15) + 5,
        mem: Math.floor(Math.random() * 10) + 30,
        temp: Math.floor(Math.random() * 5) + 38
      })
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  if (!isCodeView) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-60 overflow-hidden">
      {/* Top Left Indicator */}
      <div className="fixed top-24 left-8 z-60 hidden md:flex flex-col gap-6 select-none animate-in fade-in transition-all duration-700">
        <div className="flex items-center gap-2">
          <span className="w-1 h-1 rounded-full bg-primary/40 animate-pulse" />
          CORE_SYNC: ACTIVE
        </div>
        <div>CLOCK: 4.82GHz</div>
      </div>

      {/* Top Right Indicator */}
      <div className="absolute top-24 right-8 font-mono text-[8px] text-primary/30 uppercase tracking-[0.2em] text-right space-y-1">
        <div>TEMP: {stats.temp}°C</div>
        <div>FAN_SPEED: 2400RPM</div>
      </div>

      {/* Bottom Left Indicator (Above status bar) */}
      <div className="absolute bottom-12 left-8 font-mono text-[8px] text-primary/30 uppercase tracking-[0.2em] space-y-1">
        <div>CPU_LOAD: {stats.cpu}%</div>
        <div>MEM_USAGE: {stats.mem}%</div>
      </div>

      {/* Vertical Line Numbers Decor */}
      <div className="absolute top-0 bottom-0 left-2 w-4 border-r border-primary/5 flex flex-col items-center py-24 gap-4 opacity-20">
         {[1,2,3,4,5,6,7,8,9,0].map(n => (
           <span key={n} className="font-mono text-[8px]">{n * 100}</span>
         ))}
      </div>

      {/* Horizontal Scanline Effect */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-primary/1 to-transparent pointer-events-none w-full animate-scanline" />
    </div>
  )
}
