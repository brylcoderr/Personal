'use client'

import { useEffect, useRef, useState } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
}

export function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const mouseRef = useRef({ x: 0, y: 0 })
  const frameRef = useRef<number | undefined>(undefined)
  const [isLowPerformance, setIsLowPerformance] = useState(false)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      setIsLowPerformance(true)
      return
    }

    const isMobile = window.innerWidth < 768
    if (isMobile) {
      setIsLowPerformance(true)
    }

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()

    const particleCount = isLowPerformance 
      ? Math.min(Math.floor((canvas.width * canvas.height) / 40000), 25)
      : Math.min(Math.floor((canvas.width * canvas.height) / 20000), 75)
    particlesRef.current = Array.from({ length: particleCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.4 + 0.2,
    }))

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }

    const animate = () => {
      if (!ctx || !canvas) return

      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const particles = particlesRef.current
      const len = particles.length

      for (let i = 0; i < len; i++) {
        const particle = particles[i]
        particle.x += particle.vx
        particle.y += particle.vy

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

        const dx = mouseRef.current.x - particle.x
        const dy = mouseRef.current.y - particle.y
        const distSq = dx * dx + dy * dy

        if (distSq < 22500) { // 150 * 150
          const dist = Math.sqrt(distSq)
          particle.vx -= dx * 0.0001
          particle.vy -= dy * 0.0001
        }

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(147, 51, 234, ${particle.opacity})`
        ctx.fill()

        for (let j = i + 1; j < len; j++) {
          const otherParticle = particles[j]
          const dx2 = particle.x - otherParticle.x
          const dy2 = particle.y - otherParticle.y
          const distSq2 = dx2 * dx2 + dy2 * dy2

          if (distSq2 < 14400) { // 120 * 120
            const dist2 = Math.sqrt(distSq2)
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)
            ctx.strokeStyle = `rgba(147, 51, 234, ${0.1 * (1 - dist2 / 120)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }

      frameRef.current = requestAnimationFrame(animate)
    }

    window.addEventListener('resize', resize)
    if (!isLowPerformance) {
      window.addEventListener('mousemove', handleMouseMove)
    }
    animate()

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', handleMouseMove)
      if (frameRef.current) cancelAnimationFrame(frameRef.current)
    }
  }, [isLowPerformance])

  if (isLowPerformance) return null

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none opacity-30 dark:opacity-50"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    />
  )
}
