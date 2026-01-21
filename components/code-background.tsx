'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const codeSnippets = [
  'const buildAmazing = () => {',
  'function createMagic() {',
  'import { React } from "react"',
  'export default App',
  'npm install awesome',
  'git commit -m "feat"',
  'docker build -t app .',
  'console.log("Hello")',
  '<div className="hero">',
  'async function fetch()',
  'const [state, setState]',
  'useEffect(() => {',
  'return <Component />',
  'type Props = {',
  'interface User {',
  'class Application {',
]

interface Particle {
  id: number
  initialX: number
  initialY: number
  animateX: number[]
  animateY: number[]
  snippet: string
  duration: number
  delay: number
}

export function CodeBackground() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    const width = window.innerWidth
    const height = window.innerHeight

    const newParticles: Particle[] = [...Array(20)].map((_, i) => ({
      id: i,
      initialX: Math.random() * width,
      initialY: Math.random() * height,
      animateX: [
        Math.random() * width,
        Math.random() * width,
        Math.random() * width,
      ],
      animateY: [
        Math.random() * height,
        Math.random() * height,
        Math.random() * height,
      ],
      snippet: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
      duration: Math.random() * 20 + 15,
      delay: Math.random() * 5,
    }))

    setParticles(newParticles)
  }, [])

  if (particles.length === 0) return null

  return (
    <div ref={containerRef} className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute text-xs md:text-sm font-mono text-primary/10 dark:text-primary/20 whitespace-nowrap"
          initial={{
            x: particle.initialX,
            y: particle.initialY,
            opacity: 0,
          }}
          animate={{
            x: particle.animateX,
            y: particle.animateY,
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: 'linear',
            delay: particle.delay,
          }}
        >
          {particle.snippet}
        </motion.div>
      ))}
    </div>
  )
}
