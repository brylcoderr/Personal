'use client'

import React, { useEffect, useRef } from 'react'

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    setCanvasSize()
    window.addEventListener('resize', setCanvasSize)

    // Particles configuration
    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
      opacity: number
    }> = []

    // Initialize particles with purple/pink colors
    const initParticles = () => {
      particles.length = 0
      const particleCount = Math.min(50, Math.floor((canvas.width * canvas.height) / 20000))
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2 + 1,
          opacity: Math.random() * 0.5 + 0.2,
        })
      }
    }
    initParticles()

    // Animation loop
    const animate = () => {
      // Clear with semi-transparent dark background for trail effect
      ctx.fillStyle = 'rgba(14, 23, 41, 0.1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      particles.forEach((particle, idx) => {
        particle.x += particle.vx
        particle.y += particle.vy
        particle.opacity += (Math.random() - 0.5) * 0.02

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0

        // Keep opacity in bounds
        particle.opacity = Math.max(0.1, Math.min(0.8, particle.opacity))

        // Draw particle with gradient
        const gradient = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particle.size
        )
        gradient.addColorStop(0, `rgba(147, 51, 234, ${particle.opacity})`)
        gradient.addColorStop(1, `rgba(168, 85, 247, ${particle.opacity * 0.5})`)

        ctx.fillStyle = gradient
        ctx.fillRect(
          particle.x - particle.size,
          particle.y - particle.size,
          particle.size * 2,
          particle.size * 2
        )
      })

      // Draw connecting lines
      ctx.strokeStyle = 'rgba(147, 51, 234, 0.1)'
      ctx.lineWidth = 1
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 200) {
            ctx.globalAlpha = 0.1 * (1 - distance / 200)
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
            ctx.globalAlpha = 1
          }
        }
      }

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', setCanvasSize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 -z-10"
      style={{
        background: 'linear-gradient(135deg, #0a0e1a 0%, #1a0f3a 50%, #0f1929 100%)',
      }}
    />
  )
}
