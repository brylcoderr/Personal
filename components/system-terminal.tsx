'use client'

import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Terminal, ChevronRight, X, Maximize2, Minimize2 } from 'lucide-react'

const COMMANDS: Record<string, string | (() => string)> = {
  help: 'Available commands: help, clear, about, projects, contact, status, secret',
  about: 'Shubham Kushwah: Full-Stack Architect specializing in scalable digital ecosystems.',
  projects: 'Listing active deployments... [System Core Console, CI/CD Pipeline Dashboard, Visual Diff Docs]',
  contact: 'Initialize handshake at: shubham@brylcodes.com',
  status: () => `SYSTEM_OK | LATENCY: 14ms | MEM: 128MB | UPTIME: ${Math.floor(performance.now()/1000)}s`,
  secret: 'REDACTED: Run "sudo override" to access kernel level logs.',
  'sudo override': 'ALERT: Kernel access granted. WARNING: Data corruption risk high.',
}

export function SystemTerminal() {
  const [history, setHistory] = useState<string[]>(['System Terminal v1.0.2 ready. Type "help" for options.'])
  const [input, setInput] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [history])

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const cmd = input.toLowerCase().trim()
    let result = ''

    if (cmd === 'clear') {
      setHistory([])
    } else if (COMMANDS[cmd]) {
      const output = typeof COMMANDS[cmd] === 'function' ? (COMMANDS[cmd] as any)() : COMMANDS[cmd]
      setHistory(prev => [...prev, `> ${input}`, output])
    } else {
      setHistory(prev => [...prev, `> ${input}`, `Error: Command "${cmd}" not recognized. Type "help" for a list of valid commands.`])
    }

    setInput('')
  }

  return (
    <div className="fixed bottom-8 right-8 z-100 group">
      <AnimatePresence>
        {!isOpen ? (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={() => setIsOpen(true)}
            className="w-12 h-12 rounded bg-primary text-primary-foreground flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all glow-accent"
          >
            <Terminal size={20} />
          </motion.button>
        ) : (
          <motion.div
            initial={{ y: 100, opacity: 0, scale: 0.9 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 100, opacity: 0, scale: 0.9 }}
            className="w-[350px] md:w-[450px] h-[300px] bg-[#0d0d0f]/95 backdrop-blur-md border border-primary/20 rounded-lg shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Terminal Header */}
            <div className="px-4 py-2 bg-secondary/30 border-b border-border/50 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Terminal size={12} className="text-primary" />
                <span className="font-mono text-[10px] uppercase tracking-widest font-bold">System_CLI.exe</span>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-red-500/20 text-muted-foreground hover:text-red-500 transition-colors rounded"
              >
                <X size={14} />
              </button>
            </div>

            {/* Terminal Logs */}
            <div 
              ref={scrollRef}
              className="flex-1 p-4 font-mono text-[11px] overflow-y-auto no-scrollbar space-y-1"
            >
              {history.map((line, i) => (
                <div key={i} className={line.startsWith('>') ? 'text-primary/80' : 'text-muted-foreground'}>
                  {line}
                </div>
              ))}
            </div>

            {/* Terminal Input */}
            <form onSubmit={handleCommand} className="p-4 border-t border-border/20 bg-black/40 flex items-center gap-2">
              <ChevronRight size={14} className="text-primary" />
              <input 
                autoFocus
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type command..."
                className="flex-1 bg-transparent border-none outline-none font-mono text-[11px] text-foreground placeholder:text-muted-foreground/20"
              />
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
