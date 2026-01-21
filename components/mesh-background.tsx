'use client'

import { useEffect, useRef } from 'react'

export function MeshBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Animated mesh/grid background
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
    gradient.addColorStop(0, '#0f0f1e')
    gradient.addColorStop(0.5, '#1a0a3e')
    gradient.addColorStop(1, '#0f0f1e')

    let time = 0
    const animate = () => {
      // Background
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Grid mesh
      const gridSize = 40
      ctx.strokeStyle = 'rgba(147, 51, 234, 0.1)'
      ctx.lineWidth = 1

      for (let x = 0; x < canvas.width; x += gridSize) {
        for (let y = 0; y < canvas.height; y += gridSize) {
          // Offset based on time and position
          const offset = Math.sin(time * 0.001 + x * 0.01 + y * 0.01) * 2
          const radius = Math.max(0.5, 2 + offset)
          
          ctx.strokeStyle = `rgba(147, 51, 234, ${Math.max(0, 0.05 + offset * 0.02)})`
          ctx.beginPath()
          ctx.arc(x, y, radius, 0, Math.PI * 2)
          ctx.stroke()

          // Horizontal line
          ctx.strokeStyle = `rgba(147, 51, 234, ${0.08 + offset * 0.01})`
          ctx.beginPath()
          ctx.moveTo(x, y)
          ctx.lineTo(x + gridSize, y)
          ctx.stroke()

          // Vertical line
          ctx.beginPath()
          ctx.moveTo(x, y)
          ctx.lineTo(x, y + gridSize)
          ctx.stroke()
        }
      }

      // Floating particles
      const particleCount = 20
      for (let i = 0; i < particleCount; i++) {
        const x = (Math.sin(time * 0.0001 + i) + 1) * (canvas.width / 2)
        const y = (Math.cos(time * 0.00008 + i * 1.5) + 1) * (canvas.height / 2)
        const size = Math.max(0.5, 2 + Math.sin(time * 0.0001 + i * 2) * 1)
        const opacity = Math.max(0, 0.3 + Math.sin(time * 0.001 + i) * 0.2)

        ctx.fillStyle = `rgba(147, 51, 234, ${opacity})`
        ctx.beginPath()
        ctx.arc(x, y, size, 0, Math.PI * 2)
        ctx.fill()
      }

      // Radial glow
      const glowGradient = ctx.createRadialGradient(
        canvas.width * 0.5,
        canvas.height * 0.3,
        0,
        canvas.width * 0.5,
        canvas.height * 0.3,
        canvas.width * 0.8
      )
      glowGradient.addColorStop(0, 'rgba(168, 85, 247, 0.1)')
      glowGradient.addColorStop(1, 'rgba(168, 85, 247, 0)')
      ctx.fillStyle = glowGradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      time++
      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 -z-10"
      style={{ display: 'block' }}
    />
  )
}
