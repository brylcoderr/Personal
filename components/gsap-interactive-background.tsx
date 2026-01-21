'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export function GSAPInteractiveBackground() {
  const containerRef = useRef<HTMLDivElement>(null)
  const blobsRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    if (!containerRef.current) return

    // Create animated blobs
    const createBlobs = () => {
      const container = containerRef.current
      if (!container) return

      // Clear existing blobs
      container.innerHTML = ''
      blobsRef.current = []

      const blobCount = 4
      for (let i = 0; i < blobCount; i++) {
        const blob = document.createElement('div')
        blob.className = 'blob'
        blob.style.cssText = `
          position: absolute;
          width: ${200 + Math.random() * 200}px;
          height: ${200 + Math.random() * 200}px;
          background: radial-gradient(circle at 30% 30%, rgba(168, 85, 247, 0.3) 0%, rgba(147, 51, 234, 0.1) 50%, transparent 80%);
          border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
          filter: blur(40px);
          mix-blend-mode: screen;
        `
        blob.style.left = Math.random() * 100 + '%'
        blob.style.top = Math.random() * 100 + '%'
        blob.style.transform = 'translate(-50%, -50%)'

        container.appendChild(blob)
        blobsRef.current.push(blob)

        // Animate each blob
        gsap.to(blob, {
          x: Math.random() * 200 - 100,
          y: Math.random() * 200 - 100,
          duration: 20 + Math.random() * 15,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        })

        // Rotation animation
        gsap.to(blob, {
          rotation: 360,
          duration: 40 + Math.random() * 20,
          repeat: -1,
          ease: 'none',
        })
      }
    }

    createBlobs()

    // Mouse interaction
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return

      const { clientX, clientY } = e
      const { width, height, left, top } = containerRef.current.getBoundingClientRect()

      const x = (clientX - left) / width - 0.5
      const y = (clientY - top) / height - 0.5

      blobsRef.current.forEach((blob, index) => {
        gsap.to(blob, {
          x: x * 30,
          y: y * 30,
          duration: 1,
          overwrite: 'auto',
        })
      })
    }

    window.addEventListener('mousemove', handleMouseMove)

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 -z-10 overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at 20% 50%, rgba(168, 85, 247, 0.08) 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, rgba(147, 51, 234, 0.08) 0%, transparent 50%),
          linear-gradient(135deg, #0f0f1e 0%, #1a0a3e 50%, #0f0f1e 100%)
        `,
      }}
    />
  )
}
