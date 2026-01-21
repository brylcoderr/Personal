'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Terminal, Code2, Sparkles } from 'lucide-react'
import { CodeBackground } from './code-background'
import gsap from 'gsap'

const terminalLines = [
  { delay: 0, text: '$ whoami', type: 'command' },
  { delay: 800, text: '> Shubham Kushwah - Full-Stack Developer', type: 'output' },
  { delay: 1400, text: '$ cat skills.txt', type: 'command' },
  { delay: 2000, text: '> React, Next.js, TypeScript, Node.js', type: 'output' },
  { delay: 2600, text: '> Python, PostgreSQL, MongoDB, Docker', type: 'output' },
  { delay: 3200, text: '$ echo $EXPERIENCE', type: 'command' },
  { delay: 3800, text: '> 5+ years building scalable applications', type: 'output' },
  { delay: 4400, text: '$ npm run build-amazing-projects', type: 'command' },
  { delay: 5000, text: '> ✓ Compiled successfully', type: 'success' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
}

const reducedMotionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

export function Hero() {
  const [visibleLines, setVisibleLines] = useState<number[]>([])
  const [currentLineIndex, setCurrentLineIndex] = useState(0)
  const [isClient, setIsClient] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient || shouldReduceMotion) {
      setVisibleLines(terminalLines.map((_, i) => i))
      return
    }

    if (currentLineIndex < terminalLines.length) {
      const timer = setTimeout(() => {
        setVisibleLines((prev) => [...prev, currentLineIndex])
        setCurrentLineIndex((prev) => prev + 1)
      }, terminalLines[currentLineIndex].delay)

      return () => clearTimeout(timer)
    }
  }, [currentLineIndex, isClient, shouldReduceMotion])

  useEffect(() => {
    if (heroRef.current && !shouldReduceMotion) {
      gsap.fromTo(
        heroRef.current.querySelectorAll('.stat-item'),
        { scale: 0.5, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'back.out(1.7)',
          delay: 5.5,
        }
      )
    } else if (heroRef.current && shouldReduceMotion) {
      gsap.set(heroRef.current.querySelectorAll('.stat-item'), { scale: 1, opacity: 1 })
    }
  }, [shouldReduceMotion])

  const variants = shouldReduceMotion ? reducedMotionVariants : itemVariants

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
      aria-label="Hero section"
    >
      {isClient && <CodeBackground />}

      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" style={{ zIndex: 1 }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
        >
          <div className="space-y-6 sm:space-y-8">
            <motion.div variants={variants}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium mb-4 sm:mb-6">
                <Sparkles size={16} className="text-primary" aria-hidden="true" />
                <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  Available for new projects
                </span>
              </div>
            </motion.div>

            <motion.div variants={variants}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-tight">
                <span className="text-foreground">Hi, I'm </span>
                <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Shubham
                </span>
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground/80 mt-3 sm:mt-4">
                Full-Stack Developer & System Architect
              </h2>
            </motion.div>

            <motion.p variants={variants} className="text-base sm:text-lg lg:text-xl text-foreground/70 max-w-xl">
              Passionate about creating efficient, scalable applications and solving complex problems through code. 
              Always learning and staying up-to-date with the latest industry trends.
            </motion.p>

            <motion.div
              variants={variants}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 pt-4"
            >
              <Button size="lg" className="group w-full sm:w-auto" asChild>
                <a href="#contact">
                  Let's Build Together
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} aria-hidden="true" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto" asChild>
                <a href="#case-studies">
                  <Code2 className="mr-2" size={20} aria-hidden="true" />
                  View My Work
                </a>
              </Button>
            </motion.div>

            <motion.div variants={variants} ref={statsRef} className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-6 sm:pt-8">
              {[
                { label: 'Years Exp.', value: '5+' },
                { label: 'Projects', value: '15+' },
                { label: 'Clients', value: '8+' },
                { label: 'Users', value: '10M+' },
              ].map((stat, i) => (
                <div key={`stat-${stat.label}`} className="stat-item p-3 sm:p-4 rounded-lg bg-primary/5 border border-primary/10">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-foreground/60">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div variants={variants} className="relative order-first lg:order-last">
            <div className="relative bg-zinc-900 dark:bg-zinc-950 rounded-xl shadow-2xl border border-zinc-800 overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 bg-zinc-800 border-b border-zinc-700">
                <div className="flex gap-2" role="presentation">
                  <div className="w-3 h-3 rounded-full bg-red-500" aria-label="Close" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" aria-label="Minimize" />
                  <div className="w-3 h-3 rounded-full bg-green-500" aria-label="Maximize" />
                </div>
                <div className="flex items-center gap-2 ml-4 text-zinc-400 text-sm">
                  <Terminal size={14} aria-hidden="true" />
                  <span>terminal</span>
                </div>
              </div>

              <div className="p-4 sm:p-6 font-mono text-xs sm:text-sm min-h-[300px] sm:min-h-[400px] space-y-2" role="log" aria-label="Terminal output">
                {visibleLines.map((lineIndex, mapIndex) => {
                  const line = terminalLines[lineIndex]
                  return (
                    <motion.div
                      key={`terminal-${mapIndex}`}
                      initial={shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className={`
                        ${line.type === 'command' ? 'text-green-400' : ''}
                        ${line.type === 'output' ? 'text-zinc-300' : ''}
                        ${line.type === 'success' ? 'text-emerald-400' : ''}
                      `}
                    >
                      {line.text}
                      {!shouldReduceMotion && lineIndex === visibleLines[visibleLines.length - 1] && (
                        <motion.span
                          className="inline-block w-2 h-4 bg-green-400 ml-1"
                          animate={{ opacity: [1, 0, 1] }}
                          transition={{ duration: 0.8, repeat: Infinity }}
                          aria-hidden="true"
                        />
                      )}
                    </motion.div>
                  )
                })}
              </div>
            </div>

            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-3xl" aria-hidden="true" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl" aria-hidden="true" />
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden sm:flex"
        animate={shouldReduceMotion ? {} : { y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        aria-hidden="true"
      >
        <div className="flex flex-col items-center gap-2 text-foreground/50">
          <p className="text-xs uppercase tracking-widest">Scroll to explore</p>
          <div className="w-6 h-10 border-2 border-current rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-current rounded-full animate-pulse"></div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
