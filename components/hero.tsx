'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Github, Linkedin, Mail, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import profile from '@/src/data/profile.json'

interface TerminalCommand {
  type: 'input' | 'output'
  text: string
  delay: number
  color?: string
}

const terminalCommands: TerminalCommand[] = [
  { type: 'input', text: 'whoami', delay: 0 },
  { type: 'output', text: 'shubham_kushwah', delay: 500 },
  { type: 'input', text: 'cat skills.txt', delay: 1200 },
  { type: 'output', text: 'React | Next.js | TypeScript | Node.js', delay: 1800 },
  { type: 'input', text: 'echo $AVAILABILITY', delay: 2600 },
  { type: 'output', text: 'Scanning network for opportunities...', delay: 3200 },
]

const rotatingStatuses = [
  'Available for freelance work',
  'Open for full-time positions',
  'Hire me for system architecture',
  'Ready for worldwide collaboration'
]

export function Hero() {
  const [terminalLines, setTerminalLines] = useState<Array<{ type: string; text: string; color?: string }>>([])
  const [currentCommand, setCurrentCommand] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [rotatingIndex, setRotatingIndex] = useState(0)
  const [showRotating, setShowRotating] = useState(false)
  const terminalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let timeouts: NodeJS.Timeout[] = []
    
    terminalCommands.forEach((cmd, index) => {
      const timeout = setTimeout(() => {
        if (cmd.type === 'input') {
          setIsTyping(true)
          let charIndex = 0
          const typingInterval = setInterval(() => {
            if (charIndex <= cmd.text.length) {
              setCurrentCommand(cmd.text.slice(0, charIndex))
              charIndex++
            } else {
              clearInterval(typingInterval)
              setIsTyping(false)
              setTerminalLines(prev => [...prev, { type: 'input', text: cmd.text }])
              setCurrentCommand('')
            }
          }, 30)
        } else {
          setTerminalLines(prev => [...prev, { type: 'output', text: cmd.text, color: cmd.color }])
          if (index === terminalCommands.length - 1) {
            setTimeout(() => setShowRotating(true), 1000)
          }
        }
      }, cmd.delay)
      timeouts.push(timeout)
    })

    return () => timeouts.forEach(clearTimeout)
  }, [])

  useEffect(() => {
    if (!showRotating) return
    
    const interval = setInterval(() => {
      setRotatingIndex(prev => (prev + 1) % rotatingStatuses.length)
    }, 3000)
    
    return () => clearInterval(interval)
  }, [showRotating])

  // Scroll terminal to bottom when lines change
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [terminalLines, currentCommand, rotatingIndex])

  return (
    <section className="min-h-screen flex flex-col justify-center pt-24 pb-20 code-grid-bg overflow-hidden">
      <div className="section-container relative">
        {/* Background Decoration */}
        <div className="absolute -top-24 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-24 -right-20 w-96 h-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

        {/* Floating Code Artifacts */}
        <div className="absolute top-1/4 right-0 font-mono text-[10px] text-primary/10 select-none pointer-events-none hidden lg:block rotate-90 origin-right">
          {`// system_init_sequence: SUCCESS`}
        </div>
        <div className="absolute bottom-1/4 left-0 font-mono text-[10px] text-primary/10 select-none pointer-events-none hidden lg:block -rotate-90 origin-left">
          {`import { Future } from '@architect/vision'`}
        </div>
        <div className="absolute top-10 left-1/2 -translate-x-1/2 font-mono text-[10px] text-primary/5 select-none pointer-events-none hidden lg:block tracking-[1em] uppercase">
          {`Environment.Node_Production`}
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Content */}
          <div className="lg:col-span-7 space-y-10 order-2 lg:order-1">
            {/* Status Badge & Path */}
            <div className="flex flex-wrap items-center gap-4">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-secondary border border-border/50 rounded-full font-mono text-[10px] tracking-widest uppercase text-muted-foreground">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                System.Status: <span className="text-primary font-bold">Online</span>
              </div>
              <div className="font-mono text-[10px] text-muted-foreground/30 uppercase tracking-[0.2em]">
                {`~/bryl-codes/init`}
              </div>
            </div>

            {/* Name & Title */}
            <div className="space-y-6">
              <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black tracking-tight leading-[0.9]">
                Architecting <br />
                <span className="text-primary">Digital</span> Solutions.
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground font-medium max-w-2xl leading-tight">
                {profile.title} specialized in building high-performance, enterprise-grade applications.
              </p>
            </div>

            {/* Description */}
            <div className="flex gap-4">
              <div className="w-1 bg-border/50 rounded-full" />
              <p className="text-muted-foreground leading-relaxed max-w-xl text-lg font-light">
                Engineering seamless user experiences with 
                <span className="text-foreground font-semibold"> React.js</span>, 
                <span className="text-foreground font-semibold"> Node.js</span>, and 
                <span className="text-foreground font-semibold"> TypeScript</span>. 
                Focused on scalability, performance, and clean architectural patterns.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-6 pt-4">
              <a 
                href="#projects" 
                className="group inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-bold rounded hover:bg-primary/90 transition-all hover:scale-[1.02] active:scale-[0.98] glow-accent"
              >
                Execute_Projects()
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <div className="flex items-center gap-3">
                <a 
                  href={profile.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 text-muted-foreground hover:text-foreground hover:bg-secondary border border-transparent hover:border-border rounded transition-all focus-ring"
                  aria-label="GitHub"
                >
                  <Github size={22} />
                </a>
                <a 
                  href={profile.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 text-muted-foreground hover:text-foreground hover:bg-secondary border border-transparent hover:border-border rounded transition-all focus-ring"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={22} />
                </a>
              </div>
            </div>
          </div>

          {/* Right: Terminal Component */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="relative">
              {/* Terminal Frame */}
              <div className="terminal-panel shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] border-primary/20 backdrop-blur-xl">
                {/* Terminal Header */}
                <div className="flex items-center justify-between px-5 py-4 bg-secondary/50 border-b border-border/50">
                  <div className="flex gap-2.5">
                    <div className="w-3.5 h-3.5 rounded-full bg-[#ff5f56]/80 border border-black/10" />
                    <div className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e]/80 border border-black/10" />
                    <div className="w-3.5 h-3.5 rounded-full bg-[#27c93f]/80 border border-black/10" />
                  </div>
                  <div className="flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-widest text-muted-foreground/60">
                    <span className="w-2 h-2 rounded-full bg-primary/40 animate-pulse" />
                    Bryl_Terminal_v2.0
                  </div>
                </div>

                {/* Terminal Body */}
                <div 
                  ref={terminalRef}
                  className="p-6 h-[340px] sm:h-[400px] font-mono text-[13px] leading-relaxed overflow-auto no-scrollbar scroll-smooth relative"
                >
                  <div className="scanline" />
                  {/* System Header */}
                  <div className="text-muted-foreground/40 mb-6 text-[10px] border-b border-border/20 pb-2 flex justify-between">
                    <span>Session: STABLE</span>
                    <span>Last Login: {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                  </div>

                  {/* Terminal Lines */}
                  {terminalLines.map((line, i) => (
                    <div 
                      key={i} 
                      className={cn(
                        "mb-3 flex gap-3",
                        line.type === 'input' ? 'text-foreground font-bold' : line.color || 'text-muted-foreground/80'
                      )}
                    >
                      {line.type === 'input' && (
                        <span className="text-primary font-black">λ</span>
                      )}
                      {line.type === 'output' && (
                        <span className="w-1 bg-border/20 ml-1 mr-2" />
                      )}
                      <span className="flex-1">{line.text}</span>
                    </div>
                  ))}

                  {/* Dynamic/Rotating Line */}
                  {showRotating && (
                    <motion.div 
                      initial={{ opacity: 0, x: -5 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="mb-3 flex gap-3 text-green-400 font-bold"
                    >
                      <span className="w-1 bg-green-500/20 ml-1 mr-2" />
                      <span className="flex-1 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                        {rotatingStatuses[rotatingIndex]}
                      </span>
                    </motion.div>
                  )}

                  {/* Current typing line */}
                  {!showRotating && (
                    <div className="flex items-center text-foreground font-bold">
                      <span className="text-primary mr-3 font-black">λ</span>
                      <span>{currentCommand}</span>
                      <span className={cn(
                        "w-2 h-[1.2rem] bg-primary ml-1",
                        isTyping ? "animate-pulse" : "animate-[blink_1s_step-end_infinite]"
                      )} />
                    </div>
                  )}
                </div>

                {/* Terminal Footer */}
                <div className="px-5 py-3 bg-secondary/30 border-t border-border/50 flex items-center justify-between text-[10px] font-mono font-bold text-muted-foreground/40 uppercase tracking-tighter">
                  <div className="flex gap-4">
                    <span className="text-primary/60">main*</span>
                    <span>TypeScript</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span>UTF-8</span>
                    <span className="bg-primary/10 text-primary px-2 py-0.5 rounded">Ln 14, Col 32</span>
                  </div>
                </div>
              </div>

              {/* Decorative brackets */}
              <div className="absolute -top-10 -right-10 text-[180px] font-mono text-primary/5 select-none pointer-events-none -z-10 font-thin leading-none">
                ]
              </div>
              <div className="absolute -bottom-10 -left-10 text-[180px] font-mono text-primary/5 select-none pointer-events-none -z-10 font-thin leading-none">
                [
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
    </section>
  )
}
