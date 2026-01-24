'use client'

import React, { createContext, useContext, useState, useCallback } from 'react'

interface SoundContextType {
  isMuted: boolean
  toggleMute: () => void
  playScan: () => void
  playClick: () => void
  playSuccess: () => void
}

const SoundContext = createContext<SoundContextType | undefined>(undefined)

export function SoundProvider({ children }: { children: React.ReactNode }) {
  const [isMuted, setIsMuted] = useState(true)

  const playOscillator = useCallback((freq: number, type: OscillatorType, duration: number, volume: number) => {
    if (isMuted) return
    
    try {
      const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)()
      const osc = audioCtx.createOscillator()
      const gain = audioCtx.createGain()

      osc.type = type
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime)
      
      gain.gain.setValueAtTime(volume, audioCtx.currentTime)
      gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + duration)

      osc.connect(gain)
      gain.connect(audioCtx.destination)

      osc.start()
      osc.stop(audioCtx.currentTime + duration)
    } catch (e) {
      console.warn('Audio context blocked or not supported')
    }
  }, [isMuted])

  const playScan = () => playOscillator(150, 'sine', 0.1, 0.05)
  const playClick = () => playOscillator(800, 'square', 0.05, 0.02)
  const playSuccess = () => {
    playOscillator(440, 'sine', 0.1, 0.05)
    setTimeout(() => playOscillator(880, 'sine', 0.2, 0.05), 100)
  }

  const toggleMute = () => setIsMuted(prev => !prev)

  return (
    <SoundContext.Provider value={{ isMuted, toggleMute, playScan, playClick, playSuccess }}>
      {children}
    </SoundContext.Provider>
  )
}

export function useSound() {
  const context = useContext(SoundContext)
  if (context === undefined) {
    throw new Error('useSound must be used within a SoundProvider')
  }
  return context
}
