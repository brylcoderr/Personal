'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  Search, 
  Code, 
  Terminal, 
  Workflow, 
  Cpu, 
  ShieldCheck, 
  Rocket 
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
}

import { Carousel } from '@/components/ui/carousel'

export function Process() {
  return (
    <section id="approach" className="py-32 bg-background relative overflow-hidden">
      <div className="section-container relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded font-mono text-[10px] tracking-widest uppercase text-primary">
              <Workflow size={12} />
              Dev_Workflow
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">
              How I <span className="text-primary italic">Think</span>
            </h2>
          </div>
          <div className="text-muted-foreground font-mono text-xs max-w-sm border-l border-border pl-6 py-2">
            const approach = 'systematic'; <br />
            // Optimized for delivery speed & quality
          </div>
        </div>

        {/* Workflow Carousel */}
        <Carousel 
          autoPlay={true} 
          delay={6000}
          slideClassName="md:flex-[0_0_100%] lg:flex-[0_0_100%]"
        >
          {process.map((step: any, idx: number) => {
            const IconComponent = iconMap[step.icon] || Search
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="ide-panel group hover:border-primary/30 transition-all duration-300 h-full"
              >
                <div className="flex flex-col md:flex-row h-full">
                  {/* Step Number & Icon */}
                  <div className="md:w-64 p-8 flex md:flex-col items-center justify-between md:justify-center gap-8 bg-secondary/20 border-b md:border-b-0 md:border-r border-border/50">
                    <div className="font-mono text-5xl font-black text-primary/20 group-hover:text-primary/40 transition-colors">
                      0{idx + 1}
                    </div>
                    <div className="w-16 h-16 rounded bg-primary/10 flex items-center justify-center text-primary">
                      <IconComponent size={32} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-8 md:p-12">
                    <div className="flex flex-wrap items-center gap-4 mb-6">
                      <h3 className="text-3xl font-bold">{step.title}</h3>
                      <span className="px-3 py-1 bg-background border border-border rounded font-mono text-[12px] text-muted-foreground uppercase tracking-widest">
                        {step.duration}
                      </span>
                    </div>
                    
                    <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-3xl">
                      {step.description}
                    </p>

                    {/* Deliverables Code Block */}
                    <div className="bg-black/40 rounded-md border border-border/50 p-6 font-mono text-[12px]">
                      <div className="flex items-center gap-2 text-primary/60 mb-4 border-b border-border/20 pb-2 uppercase tracking-widest font-black">
                        <Terminal size={14} />
                        <span>Key_Outputs[]</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-12">
                        {step.deliverables.map((item: string, dIdx: number) => (
                          <div key={dIdx} className="flex items-center gap-3 text-muted-foreground/80 group/output">
                            <span className="text-primary/20 font-mono text-[9px] min-w-[24px] group-hover/output:text-primary/50 transition-colors">
                              [{String(dIdx + 1).padStart(2, '0')}]
                            </span>
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </Carousel>
      </div>
    </section>
  )
}
