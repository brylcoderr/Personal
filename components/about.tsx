'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  ShieldCheck, 
  Cpu, 
  Zap, 
  Code2, 
  Server, 
  Activity,
  Maximize2
} from 'lucide-react'
import { FeaturedFunction } from './featured-function'

export function About() {
  return (
    <section id="about" className="py-16 relative overflow-hidden bg-background">
      <div className="section-container relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="space-y-4">
            <div className="code-label">
              System_Overview
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">
              Architectural <span className="text-primary italic">Philosophy</span>
            </h2>
          </div>
          <div className="text-muted-foreground font-mono text-xs max-w-sm border-l border-border pl-6 py-2">
            Status: OPERATIONAL; <br />
            // Core principles driving every deployment
          </div>
        </div>

        {/* Condensed Bento Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[140px]">
          
          {/* Featured Function Card (Hero) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-7 md:row-span-3 rounded-xl overflow-hidden shadow-xl"
          >
            <FeaturedFunction />
          </motion.div>

          {/* Performance & Security (Combined Vertical Stack) */}
          <div className="md:col-span-5 md:row-span-3 grid grid-cols-1 gap-4">
             {/* Performance Card */}
             <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="ide-panel px-6 py-4 flex items-center gap-4 bg-secondary/5"
             >
                <div className="p-2.5 rounded bg-green-500/10 text-green-500">
                   <Zap size={18} />
                </div>
                <div className="flex-1">
                   <div className="text-[10px] font-mono text-muted-foreground uppercase opacity-40 mb-1">P99_Latency</div>
                   <div className="h-1 bg-secondary rounded-full overflow-hidden">
                      <motion.div initial={{ width: 0 }} whileInView={{ width: '92%' }} className="h-full bg-green-500" />
                   </div>
                </div>
             </motion.div>

             {/* Security Card */}
             <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
                className="ide-panel px-6 py-4 flex items-center gap-4 bg-secondary/20"
             >
                <div className="p-2.5 rounded bg-blue-500/10 text-blue-500">
                   <ShieldCheck size={18} />
                </div>
                <div className="font-mono flex-1">
                   <div className="text-[10px] text-muted-foreground uppercase opacity-40">System_Hardening</div>
                   <div className="text-xs font-bold">AES-256-GCM / TLS 1.3</div>
                </div>
                <Activity size={14} className="text-blue-500/30 animate-pulse" />
             </motion.div>

             {/* Scalability Summary */}
             <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="ide-panel px-6 py-4 flex flex-col justify-center border-dashed border-primary/20"
             >
                <div className="flex items-center gap-3">
                   <div className="p-2 rounded bg-primary/10 text-primary">
                      <Maximize2 size={18} />
                   </div>
                   <h3 className="text-sm font-bold">Autoscale: Ready</h3>
                </div>
                <div className="mt-2 text-[9px] font-mono text-muted-foreground/40 italic">
                   // Horizontal distribution across edge nodes
                </div>
             </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
