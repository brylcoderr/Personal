'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Github, Linkedin, Mail, ChevronRight, Terminal } from 'lucide-react'
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

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [terminalLines, currentCommand, rotatingIndex])

  return (
    <section className="min-h-screen flex flex-col justify-center pt-24 pb-20 premium-bg overflow-hidden relative">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[15%] left-[10%] w-[400px] h-[400px] bg-primary/20 rounded-full blur-[100px] opacity-30 animate-pulse" />
        <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-accent/20 rounded-full blur-[100px] opacity-30 animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.03) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Side: Impact-Driven Content */}
          <div className="lg:col-span-12 xl:col-span-7 space-y-10">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-secondary/50 border border-border/50 rounded-full font-mono text-[10px] uppercase tracking-[0.2em] text-primary shadow-inner">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Active_Performance: OPEN_FOR_OPPORTUNITIES
              </div>
              
              <h1 className="text-6xl sm:text-7xl lg:text-[8.5rem] font-black tracking-tighter leading-[0.8] text-foreground glow-text">
                FULL-STACK <br />
                <span className="text-primary italic">ENGINEER.</span>
              </h1>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8 max-w-2xl"
            >
              <p className="text-2xl sm:text-3xl text-muted-foreground font-light leading-tight">
                I build <span className="text-foreground font-semibold">resilient, high-performance systems</span> that bridge the gap between complex backend engineering and seamless user experiences.
              </p>
              
              <div className="flex flex-wrap gap-3 pt-2">
                {['React.js / Next.js', 'Node.js / Express', 'TypeScript', 'System Architecture'].map((skill) => (
                  <div key={skill} className="px-4 py-2 bg-secondary/30 border border-border/50 rounded-md font-mono text-[11px] font-bold text-muted-foreground/80 hover:text-primary hover:border-primary/30 transition-colors">
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap items-center gap-6 pt-6"
            >
              <a 
                href="/shubham-resume.pdf"
                target="_blank"
                className="group relative px-8 py-4 bg-primary text-primary-foreground font-bold rounded-lg overflow-hidden transition-all hover:scale-[1.05] active:scale-[0.98] shadow-2xl flex items-center gap-3"
              >
                Download_CV
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a 
                href="#projects" 
                className="group px-8 py-4 bg-transparent text-foreground font-bold rounded-lg border border-border hover:bg-secondary/50 transition-all flex items-center gap-3"
              >
                View_Projects()
              </a>

              <div className="flex items-center gap-4 pl-4 border-l border-border/50">
                <a href={profile.links.linkedin} target="_blank" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin size={22} /></a>
                <a href={profile.links.github} target="_blank" className="text-muted-foreground hover:text-primary transition-colors"><Github size={22} /></a>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Technical Blueprint Visualization */}
          <div className="hidden xl:block lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative"
            >
              {/* Refined IDE Chassis */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-linear-to-r from-primary/20 to-accent/20 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative ide-panel p-2 bg-black border-border shadow-2xl rounded-xl overflow-hidden min-h-[500px]">
                  <div className="p-6 h-full font-mono text-[11px] space-y-8">
                    {/* Header Line */}
                    <div className="flex items-center justify-between text-muted-foreground/30 border-b border-border/10 pb-4">
                      <div className="flex items-center gap-2">
                        <Terminal size={14} className="text-primary/60" />
                        <span>System_Architecture_Blueprint</span>
                      </div>
                      <span className="animate-pulse text-green-500/50">LATEST_SYNC</span>
                    </div>

                    {/* Content Blocks */}
                    <div className="space-y-6 relative">
                      <div className="absolute -left-6 top-0 bottom-0 w-px bg-border/10 hidden sm:block" />
                      
                      <div className="p-5 border-l-2 border-primary/40 bg-primary/5 rounded-r-lg space-y-2 group/block transition-all hover:bg-primary/10 relative">
                        <div className="absolute -left-[26px] top-5 text-[9px] text-muted-foreground/20 font-mono hidden sm:block">01</div>
                        <div className="flex items-center justify-between">
                          <span className="text-primary font-bold"><span className="opacity-40 font-normal mr-1">0x01:</span> Domain: Frontend_Infrastructure</span>
                        </div>
                        <div className="text-muted-foreground/80 leading-relaxed font-mono">
                          <span className="token-key">stack</span>: [<span className="token-str">"Next.js"</span>, <span className="token-str">"React"</span>, <span className="token-str">"TypeScript"</span>];<br />
                          <span className="token-key">priority</span>: <span className="token-str">"Performance & Accessibility"</span>;<br />
                          <span className="token-key">metrics</span>: {`{`} <span className="token-func">SpeedIndex</span>: <span className="token-num">98</span>, <span className="token-func">WCAG</span>: <span className="token-num">2.1</span> {`}`};
                        </div>
                      </div>

                      <div className="p-5 border-l-2 border-accent/40 bg-accent/5 rounded-r-lg space-y-2 group/block transition-all hover:bg-accent/10 ml-6 relative">
                        <div className="absolute -left-[26px] top-5 text-[9px] text-muted-foreground/20 font-mono hidden sm:block">02</div>
                        <div className="flex items-center justify-between">
                          <span className="text-accent font-bold"><span className="opacity-40 font-normal mr-1">0x02:</span> Domain: Backend_Systems</span>
                        </div>
                        <div className="text-muted-foreground/80 leading-relaxed font-mono">
                          <span className="token-key">core</span>: [<span className="token-str">"Node.js"</span>, <span className="token-str">"Express"</span>, <span className="token-str">"PostgreSQL"</span>];<br />
                          <span className="token-key">architecture</span>: <span className="token-str">"Microservices / Event-Driven"</span>;<br />
                          <span className="token-key">security</span>: <span className="token-str">"Zero-Trust / OAuth2"</span>;
                        </div>
                      </div>

                      <div className="p-5 border-l-2 border-white/20 bg-white/2 rounded-r-lg space-y-2 opacity-50 relative">
                        <div className="absolute -left-[26px] top-5 text-[9px] text-muted-foreground/20 font-mono hidden sm:block">03</div>
                        <div className="flex items-center justify-between">
                          <span className="text-white font-bold"><span className="opacity-40 font-normal mr-1">0x03:</span> Domain: Cloud_Ops</span>
                        </div>
                        <div className="text-muted-foreground/80 leading-relaxed font-mono">
                          <span className="token-key">orchestration</span>: <span className="token-str">"Docker / CI-CD"</span>;<br />
                          <span className="token-key">provider</span>: <span className="token-str">"Vercel / AWS"</span>;
                        </div>
                      </div>
                    </div>

                    {/* Footer decoration */}
                    <div className="absolute bottom-6 left-6 right-6 flex justify-between text-[10px] text-muted-foreground/20 border-t border-border/10 pt-4">
                      <div className="flex gap-4">
                        <span>© 2024 SHUBHAM_KUSHWAH</span>
                      </div>
                      <div className="flex gap-4">
                        <span>UTF-8</span>
                        <span>PROD_v2.4</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Float Achievements / Badges */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-6 -right-6 px-4 py-3 bg-secondary/80 backdrop-blur-xl border border-primary/30 rounded-lg shadow-2xl"
              >
                <div className="text-[10px] uppercase tracking-widest text-primary font-bold">Full-Stack Expertise</div>
              </motion.div>
              
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-6 -left-6 px-4 py-3 bg-secondary/80 backdrop-blur-xl border border-accent/30 rounded-lg shadow-2xl"
              >
                <div className="text-[10px] uppercase tracking-widest text-accent font-bold">Impact-Driven Code</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
