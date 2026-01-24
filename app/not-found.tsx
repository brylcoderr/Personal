'use client'

import React from "react"
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Terminal, Home, ArrowLeft, AlertTriangle, MonitorX, Command } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4 overflow-hidden relative selection:bg-primary/30 selection:text-white">
      {/* Immersive Background Architecture */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-size-[40px_40px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[160px] pointer-events-none opacity-50" />
        <div className="absolute -bottom-48 -right-48 w-96 h-96 bg-purple-500/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute -top-48 -left-48 w-96 h-96 bg-blue-500/10 rounded-full blur-[140px] pointer-events-none" />
      </div>

      {/* Scratched Overlay Effect */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150" />

      <div className="max-w-3xl w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-12 text-center space-y-12">
            {/* Status Indicator */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-[10px] font-black text-red-500 uppercase tracking-[0.3em]"
            >
              <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              Critical Logic Breach: 404
            </motion.div>

            {/* Error Glyph */}
            <div className="relative inline-block group">
              <motion.div
                initial={{ opacity: 0, rotate: -10 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-[12rem] sm:text-[16rem] font-black tracking-tighter leading-none italic text-transparent bg-linear-to-b from-white via-white/20 to-transparent bg-clip-text select-none group-hover:from-primary group-hover:to-transparent transition-all duration-1000"
              >
                404
              </motion.div>
              <motion.div
                animate={{ 
                  x: [0, -2, 2, -1, 0],
                  opacity: [0.3, 0.5, 0.3, 0.6, 0.3]
                }}
                transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                className="absolute inset-0 text-[12rem] sm:text-[16rem] font-black tracking-tighter leading-none italic text-primary/10 blur-sm pointer-events-none"
              >
                404
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="space-y-6 max-w-xl mx-auto"
            >
              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase italic underline decoration-primary/20 underline-offset-8">
                Path Not Found.
              </h2>
              <p className="text-lg sm:text-xl text-white/40 font-light leading-relaxed">
                The requested memory address is currently unreadable or has been 
                purged from the system architecture.
              </p>
            </motion.div>

            {/* Action Matrix */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4"
            >
              <Button asChild size="lg" className="h-16 px-10 rounded-2xl bg-white text-black hover:bg-white/90 font-black uppercase tracking-widest text-sm shadow-2xl transition-all hover:scale-105 active:scale-95 group">
                <Link href="/">
                  <Home className="mr-3" size={18} strokeWidth={3} />
                  Return to Core
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                onClick={() => window.history.back()}
                className="h-16 px-10 rounded-2xl border-white/10 hover:bg-white/5 hover:text-white font-black uppercase tracking-widest text-sm transition-all hover:-translate-y-1"
              >
                <ArrowLeft className="mr-3" size={18} strokeWidth={3} />
                Retrace Path
              </Button>
            </motion.div>

            {/* Terminal Diagnostic */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="mt-20 p-8 rounded-4xl bg-zinc-900/40 border border-white/5 font-mono text-xs text-left shadow-3xl backdrop-blur-xl relative group max-w-2xl mx-auto overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-20 transition-opacity">
                 <Command size={48} />
              </div>
              <div className="flex gap-2 mb-6">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/30" />
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
              </div>
              <div className="space-y-3 font-mono tracking-tight">
                <div className="flex gap-3">
                  <span className="text-primary opacity-50">root@bryl_os:</span>
                  <span className="text-zinc-200">$ status --diagnose current_route</span>
                </div>
                <div className="text-zinc-500 leading-relaxed">
                  [SYSTEM] Querying routing table v2.4.0... <br />
                  [SYSTEM] Analyzing SSL certificates for path encryption... <br />
                  [ERROR] <span className="text-red-400 font-bold underline decoration-red-400/20 underline-offset-4 tracking-normal italic uppercase">ENOENT_REACHABILITY_FAILURE</span> <br />
                  [INFO] Safe recovery points detected at <span className="text-white font-bold tracking-normal italic">/home</span> and <span className="text-white font-bold tracking-normal italic">/case-studies</span>.
                </div>
                <div className="flex gap-3 pt-2">
                  <span className="text-primary opacity-50">root@bryl_os:</span>
                  <span className="animate-pulse inline-block w-2.5 h-4 bg-primary/50" />
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Version Tag */}
      <div className="absolute bottom-12 flex items-center gap-4 opacity-20 pointer-events-none">
        <div className="h-px w-24 bg-linear-to-r from-transparent to-white/50" />
        <span className="text-[10px] font-black uppercase tracking-[0.4em]">Bryl_Core.v3.0.4.NotFound</span>
        <div className="h-px w-24 bg-linear-to-l from-transparent to-white/50" />
      </div>
    </div>
  )
}
