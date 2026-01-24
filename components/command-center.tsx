'use client'

import React, { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Search, 
  Terminal, 
  Command as CommandIcon, 
  FileCode, 
  User, 
  Mail, 
  Github, 
  Linkedin,
  ArrowRight,
  ChevronRight
} from 'lucide-react'
import { useRouter } from 'next/navigation'

const COMMANDS = [
  { id: 'projects', label: 'View Projects', icon: FileCode, action: '#projects' },
  { id: 'skills', label: 'Technical Stack', icon: Terminal, action: '#skills' },
  { id: 'experience', label: 'Work History', icon: User, action: '#experience' },
  { id: 'contact', label: 'Contact Interface', icon: Mail, action: '#contact' },
  { id: 'github', label: 'External: GitHub', icon: Github, action: 'https://github.com/brylcoderr' },
  { id: 'linkedin', label: 'External: LinkedIn', icon: Linkedin, action: 'https://linkedin.com/in/shubham-kushwah' },
]

export function CommandCenter() {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [activeIndex, setActiveIndex] = useState(0)
  const router = useRouter()

  const toggle = useCallback(() => setIsOpen(prev => !prev), [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        toggle()
      }
      if (e.key === 'Escape') setIsOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [toggle])

  const filteredCommands = COMMANDS.filter(cmd => 
    cmd.label.toLowerCase().includes(query.toLowerCase())
  )

  const handleSelect = (action: string) => {
    setIsOpen(false)
    if (action.startsWith('http')) {
      window.open(action, '_blank')
    } else {
      router.push(action)
    }
    setQuery('')
  }

  useEffect(() => {
    setActiveIndex(0)
  }, [query])

  const handleKeys = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setActiveIndex(prev => (prev + 1) % filteredCommands.length)
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault()
      setActiveIndex(prev => (prev - 1 + filteredCommands.length) % filteredCommands.length)
    }
    if (e.key === 'Enter') {
      handleSelect(filteredCommands[activeIndex].action)
    }
  }

  return (
    <>
      {/* Visual Trigger (Optional, could just be Cmd+K) */}
      <div className="fixed bottom-8 left-8 z-100 hidden lg:block">
        <button 
          onClick={toggle}
          className="p-3 bg-secondary/80 backdrop-blur-md border border-border/50 rounded-full hover:border-primary/50 transition-all group shadow-2xl"
        >
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                <CommandIcon size={16} />
             </div>
             <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mr-2 group-hover:text-foreground transition-all">
                Cmd+K
             </div>
          </div>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-10000 flex items-start justify-center pt-[15vh] px-4 overflow-hidden">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              className="w-full max-w-xl ide-panel bg-secondary border-primary/30 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.8)] relative z-10 overflow-hidden"
            >
              <div className="flex items-center gap-4 px-6 py-5 border-b border-border/50 bg-secondary/30 relative">
                <Search size={20} className="text-primary/60" />
                <input 
                  autoFocus
                  placeholder="Execute command or jump to section..."
                  className="bg-transparent border-none outline-none w-full font-mono text-sm placeholder:text-muted-foreground/30 text-foreground"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={handleKeys}
                />
                <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-black/40 border border-border/50 font-mono text-[9px] text-muted-foreground uppercase opacity-40">
                   ESC
                </div>
              </div>

              <div className="max-h-[350px] overflow-y-auto no-scrollbar py-2">
                {filteredCommands.length > 0 ? (
                  filteredCommands.map((cmd, idx) => {
                    const isActive = idx === activeIndex
                    return (
                      <button
                        key={cmd.id}
                        onClick={() => handleSelect(cmd.action)}
                        onMouseEnter={() => setActiveIndex(idx)}
                        className={`w-full flex items-center gap-4 px-6 py-4 text-left transition-all relative ${
                          isActive ? 'bg-primary/10' : 'hover:bg-primary/5'
                        }`}
                      >
                        {isActive && (
                          <motion.div 
                            layoutId="active-bg"
                            className="absolute inset-y-0 left-0 w-1 bg-primary"
                          />
                        )}
                        <div className={`p-2 rounded transition-colors ${
                          isActive ? 'bg-primary text-primary-foreground' : 'bg-background text-muted-foreground/40'
                        }`}>
                          <cmd.icon size={16} />
                        </div>
                        <div className="flex-1">
                          <div className={`text-sm font-bold tracking-tight ${isActive ? 'text-foreground' : 'text-muted-foreground'}`}>
                            {cmd.label}
                          </div>
                          <div className="text-[10px] font-mono text-muted-foreground/40 uppercase tracking-widest leading-none mt-1">
                            /{cmd.id}
                          </div>
                        </div>
                        {isActive && (
                           <ChevronRight size={14} className="text-primary/60" />
                        )}
                      </button>
                    )
                  })
                ) : (
                  <div className="p-12 text-center space-y-4">
                     <Terminal size={40} className="mx-auto text-muted-foreground/10" />
                     <div className="font-mono text-[10px] text-muted-foreground/30 uppercase tracking-[0.3em]">
                        No matching commands found
                     </div>
                  </div>
                )}
              </div>

              {/* Status Bar */}
              <div className="px-6 py-3 border-t border-border/10 bg-black/10 flex items-center justify-between font-mono text-[9px] text-muted-foreground/20 uppercase tracking-[0.2em]">
                 <div className="flex items-center gap-4">
                    <span>↑↓ TO NAVIGATE</span>
                    <span>ENTER TO SELECT</span>
                 </div>
                 <span>VERIFYING_COMMANDS...</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}
