'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Terminal, Shield, Cpu, Binary } from 'lucide-react'

export function SystemBoot() {
  const [loading, setLoading] = useState(true)
  const [logs, setLogs] = useState<string[]>([])
  
  const bootLogs = [
    "[INFO] INITIALIZING_KERNEL_MODULES...",
    "[INFO] LOADING_ARCHITECTURAL_BLUEPRINTS...",
    "[INFO] CONNECTING_CDN_ARTIFACTS...",
    "[INFO] VERIFYING_ENCRYPTION_LAYER...",
    "[INFO] OPTIMIZING_DOM_RENDERERS...",
    "[SUCCESS] SYSTEM_STABLE_V1.0.4",
  ]

  useEffect(() => {
    let currentLog = 0
    const logInterval = setInterval(() => {
      if (currentLog < bootLogs.length) {
        setLogs(prev => [...prev, bootLogs[currentLog]])
        currentLog++
      } else {
        clearInterval(logInterval)
        setTimeout(() => setLoading(false), 800)
      }
    }, 250)

    return () => clearInterval(logInterval)
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-background flex flex-col items-center justify-center p-6 selection:bg-primary/20"
        >
          {/* Central Terminal Window */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-lg ide-panel bg-secondary/10 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]"
          >
            <div className="px-5 py-3 border-b border-border/50 bg-secondary/30 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/30" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/30" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/30" />
                </div>
                <div className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground/40 border-l border-border/20 pl-4">
                  <Terminal size={12} />
                  <span>system_boot_sequence</span>
                </div>
              </div>
            </div>

            <div className="p-8 font-mono text-[11px] min-h-[220px] flex flex-col">
              <div className="flex-1 space-y-2">
                {logs.map((log, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className={log.startsWith('[SUCCESS]') ? 'text-primary font-bold' : 'text-muted-foreground/60'}
                  >
                    {log}
                  </motion.div>
                ))}
              </div>

              {/* Progress Bar Animation */}
              <div className="mt-8 space-y-3">
                <div className="flex justify-between text-[9px] text-muted-foreground uppercase opacity-40">
                  <span>Loading_State</span>
                  <span>{Math.min(logs.length * 16.6, 100).toFixed(0)}%</span>
                </div>
                <div className="h-1 bg-secondary rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${(logs.length / bootLogs.length) * 100}%` }}
                    className="h-full bg-primary glow-accent"
                  />
                </div>
              </div>
            </div>
            
            <div className="px-5 py-2 border-t border-border/10 bg-black/20 flex items-center justify-between font-mono text-[8px] text-muted-foreground/20 uppercase tracking-widest">
               <span>Kernel_Built: 2026.01.25</span>
               <span>v1.0.4-LTS</span>
            </div>
          </motion.div>

          {/* Background Decoration */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] pointer-events-none -z-10 opacity-5">
             <div className="grid grid-cols-6 gap-20 p-20 text-[100px] text-primary">
                <Binary size={100} />
                <Cpu size={100} />
                <Shield size={100} />
                <Binary size={100} />
                <Binary size={100} />
                <Shield size={100} />
             </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
