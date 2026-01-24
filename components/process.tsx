'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Search, 
  Code, 
  Terminal, 
  Workflow, 
  Cpu, 
  ShieldCheck, 
  Rocket,
  Play,
  CheckCircle2,
  Box,
  BarChart3,
  Palette,
  CheckCircle,
  Headphones,
  ChevronRight,
  ChevronLeft
} from 'lucide-react'
import process from '@/src/data/process.json'

const iconMap: Record<string, React.ComponentType<{ size: number }>> = {
  Search,
  Code,
  Terminal,
  Workflow,
  Cpu,
  ShieldCheck,
  Rocket,
  BarChart3,
  Palette,
  CheckCircle,
  Headphones,
}

export function Process() {
  const [activeStep, setActiveStep] = useState(0)

  const activeData = process[activeStep]
  const IconComponent = iconMap[activeData.icon] || Search

  return (
    <section id="approach" className="py-16 bg-background relative overflow-hidden">
      <div className="section-container relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div className="space-y-4">
            <div className="code-label">
               CI/CD_Pipeline_v1.0
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">
              Deployment <span className="text-primary italic">Strategy</span>
            </h2>
          </div>
          <div className="text-muted-foreground font-mono text-[10px] max-w-sm border-l border-border pl-6 py-2 uppercase tracking-widest">
            env.Node_Project = 'personal_portfolio'; <br />
            // Execution sequence for zero-downtime delivery
          </div>
        </div>

        {/* Compressed Pipeline Dashboard */}
        <div className="grid lg:grid-cols-12 gap-8">
          
          {/* Left: Job Navigation (Pipeline Track) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2 font-mono text-[9px] text-muted-foreground/30 uppercase tracking-[0.3em] pl-2 mb-4">
              <Workflow size={12} />
              Pipeline_Jobs[]
            </div>
            <div className="grid grid-cols-1 gap-2">
              {process.map((step: any, idx: number) => {
                const StepIcon = iconMap[step.icon] || Search
                const isActive = activeStep === idx

                return (
                  <button
                    key={idx}
                    onClick={() => setActiveStep(idx)}
                    className={`
                      relative flex items-center gap-4 p-4 ide-panel transition-all duration-300 text-left
                      ${isActive ? 'bg-primary/10 border-primary/40' : 'bg-secondary/5 hover:bg-secondary/10 border-border/30'}
                    `}
                  >
                    <div className={`
                      w-8 h-8 rounded flex items-center justify-center transition-colors
                      ${isActive ? 'bg-primary text-primary-foreground' : 'bg-background text-muted-foreground/40'}
                    `}>
                      <StepIcon size={14} />
                    </div>
                    <div className="flex-1">
                      <div className={`text-[11px] font-bold tracking-tight ${isActive ? 'text-foreground' : 'text-muted-foreground'}`}>
                        {step.title}
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                         <div className={`w-1 h-1 rounded-full ${isActive ? 'bg-green-500 animate-pulse' : 'bg-green-500/20'}`} />
                         <span className="font-mono text-[8px] text-muted-foreground/40 uppercase tracking-tighter">Passed</span>
                      </div>
                    </div>
                    {isActive && (
                      <motion.div layoutId="pipeline-active" className="absolute right-4">
                         <ChevronRight size={14} className="text-primary" />
                      </motion.div>
                    )}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Right: Job Details (Console View) */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="ide-panel bg-secondary/10 h-full flex flex-col border-primary/20"
              >
                {/* Console Header */}
                <div className="px-6 py-4 bg-secondary/30 border-b border-border/50 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Terminal size={14} className="text-primary/60" />
                    <h3 className="text-sm font-bold tracking-tight uppercase font-mono">
                      Runner_Log: <span className="text-primary">{activeData.title.toUpperCase()}</span>
                    </h3>
                  </div>
                  <div className="flex items-center gap-4">
                     <span className="font-mono text-[9px] text-muted-foreground/40 uppercase">Job-{activeData.id}</span>
                     <div className="px-3 py-1 rounded bg-background border border-border/50 font-mono text-[9px] text-primary/60">
                        LATENCY: {activeData.duration}
                     </div>
                  </div>
                </div>

                {/* Console Body */}
                <div className="p-8 flex-1">
                  <div className="mb-10">
                    <div className="flex items-center gap-2 font-mono text-[9px] text-primary/40 uppercase tracking-[0.3em] mb-4">
                      <Play size={10} />
                      Execution_Description:
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl font-mono">
                      {activeData.description}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-2 font-mono text-[9px] text-primary/40 uppercase tracking-[0.3em] mb-4">
                      <Box size={10} />
                      Artifacts_Generated:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {activeData.deliverables.map((item: string, dIdx: number) => (
                        <div key={dIdx} className="flex items-center gap-3 p-3 bg-black/40 border border-border/20 rounded font-mono text-[10px] text-muted-foreground/60 hover:text-foreground hover:border-primary/20 transition-all group/artifact selection:bg-primary/20">
                          <CheckCircle2 size={14} className="text-green-500/40 group-hover/artifact:text-green-500 transition-colors" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Console Footer */}
                <div className="p-6 border-t border-border/10 bg-black/5 flex flex-wrap items-center justify-between gap-4 font-mono text-[9px] text-muted-foreground/30">
                  <div className="flex gap-4">
                    <span className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-green-500/30" /> Exit Code: 0</span>
                    <span className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-primary/30" /> Memory: 128MB</span>
                  </div>
                  <div className="flex items-center gap-3">
                     <button onClick={() => setActiveStep(prev => Math.max(0, prev - 1))} className="hover:text-primary transition-colors">PREV_JOB</button>
                     <span className="opacity-10">|</span>
                     <button onClick={() => setActiveStep(prev => Math.min(process.length - 1, prev + 1))} className="hover:text-primary transition-colors">NEXT_JOB</button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
