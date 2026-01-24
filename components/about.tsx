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

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[200px] md:auto-rows-[160px]">
          
          {/* Featured Function Card (Large) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-8 md:row-span-3 lg:row-span-4 rounded-xl overflow-hidden shadow-2xl"
          >
            <FeaturedFunction />
          </motion.div>

          {/* Scalability Card */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-4 md:row-span-2 ide-panel p-8 flex flex-col justify-between editor-selection group"
          >
            <div className="flex justify-between items-start">
              <div className="p-3 rounded bg-primary/10 text-primary">
                <Maximize2 size={24} />
              </div>
              <div className="flex gap-1">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-1 h-4 bg-primary/20 rounded-full group-hover:bg-primary/50 transition-all group-hover:scale-y-125" style={{ animationDelay: `${i * 0.2}s` }} />
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Scalable Architecture</h3>
              <p className="text-xs text-muted-foreground leading-relaxed font-mono italic">
                // Designing for massive concurrent growth
              </p>
            </div>
          </motion.div>

          {/* Performance Card */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="md:col-span-4 md:row-span-1 ide-panel px-8 py-6 flex items-center gap-6 editor-selection"
          >
            <div className="p-3 rounded bg-green-500/10 text-green-500">
               <Zap size={20} />
            </div>
            <div className="flex-1">
               <div className="flex justify-between items-baseline mb-1">
                 <span className="text-[10px] font-mono text-muted-foreground">Load_Time</span>
                 <span className="text-xs font-mono text-green-500">{"< 0.8s"}</span>
               </div>
               <div className="h-1 bg-secondary rounded-full overflow-hidden">
                 <motion.div 
                   initial={{ width: 0 }}
                   whileInView={{ width: '92%' }}
                   className="h-full bg-green-500"
                 />
               </div>
            </div>
          </motion.div>

          {/* Security Card */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="md:col-span-4 md:row-span-1 ide-panel px-8 py-6 flex items-center gap-6 bg-secondary/20"
          >
             <div className="p-3 rounded bg-blue-500/10 text-blue-500">
               <ShieldCheck size={20} />
             </div>
             <div className="font-mono">
               <div className="text-[10px] text-muted-foreground uppercase">Encryption</div>
               <div className="text-xs font-bold">AES-256-GCM</div>
             </div>
             <Activity size={16} className="ml-auto text-blue-500/30 animate-pulse" />
          </motion.div>

          {/* Clean Code Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="md:col-span-4 md:row-span-1 ide-panel p-6 flex items-center gap-6 border-dashed border-primary/20"
          >
             <div className="p-3 rounded bg-purple-500/10 text-purple-400">
               <Code2 size={20} />
             </div>
             <div>
               <div className="text-xs font-bold leading-none mb-1">Clean Documentation</div>
               <div className="text-[10px] font-mono text-muted-foreground/40">TSDoc @standards</div>
             </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  )
}
