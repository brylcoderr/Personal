'use client'

import React from "react"
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Home, ArrowLeft, AlertTriangle, MonitorX, Command } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neo-bg px-4 overflow-hidden relative texture-grid">
      <div className="max-w-4xl w-full relative z-10 text-center space-y-12">
        {/* Status Indicator */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-4 px-6 py-2 bg-neo-accent neo-border neo-shadow-sm text-sm font-black text-white uppercase tracking-widest rotate-2 hover:rotate-0 transition-transform cursor-default"
        >
          <div className="w-3 h-3 bg-white neo-border animate-pulse" />
          SYSTEM ERROR: 404_NOT_FOUND
        </motion.div>

        {/* Error Glyph */}
        <div className="relative inline-block group pt-10">
          <motion.h1
            initial={{ scale: 0.5, rotate: -20, opacity: 0 }}
            animate={{ scale: 1, rotate: -5, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="text-[15rem] md:text-[22rem] font-black text-black leading-none tracking-tighter uppercase drop-shadow-[12px_12px_0px_#FF6B6B]"
          >
            404
          </motion.h1>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10">
             <span className="text-[25rem] font-black text-black uppercase tracking-tighter">LOST</span>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="space-y-8 max-w-2xl mx-auto"
        >
          <h2 className="text-4xl md:text-7xl font-black text-black uppercase tracking-tighter leading-none">
            Page <span className="bg-neo-secondary px-4 neo-border rotate-1 inline-block">Lost.</span>
          </h2>
          <p className="text-2xl text-black font-bold uppercase tracking-tight leading-tight">
            The page you are looking for has been purged or never existed in my architecture.
          </p>
        </motion.div>

        {/* Action Matrix */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-6"
        >
          <Link href="/" className="neo-btn bg-black text-white px-12 py-6 text-xl flex items-center gap-4 group shadow-[8px_8px_0px_0px_#FFD93D]">
            <Home size={28} strokeWidth={3} className="group-hover:-translate-y-1 transition-transform" />
            RETURN TO CORE
          </Link>
          <button 
            onClick={() => window.history.back()}
            className="neo-btn bg-white text-black px-12 py-6 text-xl flex items-center gap-4 group shadow-[8px_8px_0px_0px_#000]"
          >
            <ArrowLeft size={28} strokeWidth={3} className="group-hover:-translate-x-2 transition-transform" />
            RETRACE PATH
          </button>
        </motion.div>

        {/* Diagnostic Terminal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-24 p-10 bg-white neo-border neo-shadow-lg text-left max-w-2xl mx-auto relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-20 transition-opacity">
             <Command size={64} strokeWidth={3} />
          </div>
          <div className="flex gap-3 mb-8">
            <div className="w-4 h-4 bg-neo-accent neo-border" />
            <div className="w-4 h-4 bg-neo-secondary neo-border" />
            <div className="w-4 h-4 bg-neo-muted neo-border" />
          </div>
          <div className="space-y-4 font-black uppercase text-sm tracking-widest text-black">
             <div className="flex gap-4">
                <span className="text-neo-accent opacity-50">&gt;</span>
                <span>STATUS --DIAGNOSE CURRENT_ROUTE</span>
             </div>
             <div className="bg-neo-muted/10 p-4 neo-border border-dashed space-y-2 opacity-60">
                <div>[SYSTEM] QUERYING ROUTING TABLE V4.0.0...</div>
                <div>[ERROR] ENOENT_REACHABILITY_FAILURE</div>
                <div>[RECOVERY] SAFE POINTS AT /HOME AND /WORK</div>
             </div>
             <div className="flex gap-4 animate-pulse">
                <span className="text-neo-accent opacity-50">&gt;</span>
                <span className="w-4 h-6 bg-black" />
             </div>
          </div>
        </motion.div>
      </div>

      {/* Version Tag */}
      <div className="absolute bottom-12 flex items-center gap-6 opacity-40">
        <div className="h-1 w-24 bg-black" />
        <span className="text-xs font-black uppercase tracking-[0.4em]">CORE_SYSTEM_FAILURE_V4.04</span>
        <div className="h-1 w-24 bg-black" />
      </div>
    </div>
  )
}
