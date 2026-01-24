'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Code2, Cpu, Globe2, Layers, Server, Terminal, Wrench, ChevronRight } from 'lucide-react'
import profile from '@/src/data/profile.json'

const skillCategories = [
  {
    id: 'languages',
    title: 'Languages',
    icon: Code2,
    skills: profile.skills.languages
  },
  {
    id: 'frontend',
    title: 'Frontend Frameworks',
    icon: Globe2,
    skills: profile.skills.frameworks
  },
  {
    id: 'backend',
    title: 'Backend & APIs',
    icon: Server,
    skills: profile.skills.backend
  },
  {
    id: 'databases',
    title: 'Databases',
    icon: Layers,
    skills: profile.skills.databases
  },
  {
    id: 'devops',
    title: 'DevOps & Cloud',
    icon: Cpu,
    skills: profile.skills.devops
  },
  {
    id: 'tooling',
    title: 'Tools & Workflow',
    icon: Wrench,
    skills: profile.skills.tooling
  }
]

import { SkillRadar } from './skill-radar'

export function Skills() {
  const [activeSkillCategory, setActiveSkillCategory] = useState(skillCategories[0].id)

  return (
    <section id="skills" className="py-12 relative overflow-hidden bg-background">
      <div className="section-container relative z-10">
        
        {/* Compact System Header */}
        <div className="flex items-center gap-6 mb-8">
           <div className="flex flex-col gap-1">
              <div className="code-label py-1 px-4 text-[10px]!">Arsenal_Core_v4.2</div>
              <h2 className="text-2xl font-black tracking-tighter uppercase italic text-primary/80">Tech.Stack</h2>
           </div>
           <div className="h-px flex-1 bg-border/20 blur-[1px]" />
           <div className="hidden md:flex flex-col items-end font-mono text-[8px] text-muted-foreground/30 uppercase tracking-[0.3em]">
              <span>Latency: 0.12ms</span>
              <span>Uptime: 99.99%</span>
           </div>
        </div>

        {/* Unified Arsenal Chassis */}
        <div className="ide-panel bg-secondary/5 overflow-hidden grid md:grid-cols-[240px_1fr] min-h-[500px] border-primary/20 shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
           
           {/* Sidebar: Navigation & Telemetry */}
           <div className="border-r border-border/50 bg-black/20 flex flex-col">
              <div className="p-4 border-b border-border/30 bg-secondary/30 font-mono text-[9px] text-muted-foreground/40 uppercase tracking-widest flex items-center gap-2">
                 <Terminal size={12} className="text-primary/60" />
                 Modules[]
              </div>
              
              <div className="flex-1 py-2">
                 {skillCategories.map((category) => {
                    const isActive = activeSkillCategory === category.id
                    return (
                       <button
                          key={category.id}
                          onClick={() => setActiveSkillCategory(category.id)}
                          className={`w-full flex items-center gap-3 px-6 py-4 text-left transition-all relative group ${
                             isActive ? 'bg-primary/10' : 'hover:bg-white/5'
                          }`}
                       >
                          {isActive && <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary" />}
                          <category.icon size={16} className={isActive ? 'text-primary' : 'text-muted-foreground/40 group-hover:text-muted-foreground'} />
                          <span className={`text-[10px] font-bold uppercase tracking-widest ${isActive ? 'text-foreground' : 'text-muted-foreground/60'}`}>
                             {category.title.split(' ')[0]}
                          </span>
                          <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                             <ChevronRight size={12} className="text-primary/40" />
                          </div>
                       </button>
                    )
                 })}
              </div>

              {/* Mini Radar Hook in Sidebar (Visual Polish) */}
              <div className="p-6 mt-auto border-t border-border/10 bg-primary/2">
                 <div className="text-[8px] font-mono text-primary/40 uppercase tracking-[0.4em] mb-4">Core_Balance</div>
                 <div className="w-full aspect-square relative opacity-40 grayscale group-hover:grayscale-0 transition-all duration-700">
                    <SkillRadar />
                 </div>
              </div>
           </div>

           {/* Main Body: Skill Matrix & Console */}
           <div className="flex flex-col relative overflow-hidden">
              {/* Subtle Grid Background */}
              <div className="absolute inset-0 code-dot-bg opacity-10 pointer-events-none" />

              {/* Top: Status Bar */}
              <div className="px-8 py-3 border-b border-border/30 bg-secondary/10 flex items-center justify-between font-mono text-[9px] uppercase tracking-widest text-muted-foreground/40">
                 <div className="flex items-center gap-4">
                    <span>Root / {activeSkillCategory}</span>
                    <span className="text-primary/30">Stable_Build_v1.0</span>
                 </div>
                 <div className="flex gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500/20" />
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/20" />
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500/50 animate-pulse" />
                 </div>
              </div>

              {/* Center: Skill Cloud */}
              <div className="flex-1 p-8 md:p-12 z-10 overflow-y-auto no-scrollbar">
                 <AnimatePresence mode="wait">
                    <motion.div
                       key={activeSkillCategory}
                       initial={{ opacity: 0, y: 10 }}
                       animate={{ opacity: 1, y: 0 }}
                       exit={{ opacity: 0, y: -10 }}
                       className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
                    >
                       {skillCategories.find(c => c.id === activeSkillCategory)?.skills.map((skill, idx) => (
                          <motion.div
                             key={skill}
                             initial={{ opacity: 0, scale: 0.95 }}
                             animate={{ opacity: 1, scale: 1 }}
                             transition={{ delay: idx * 0.03 }}
                             className="group flex flex-col p-4 bg-background border border-border/80 hover:border-primary/40 hover:shadow-[0_0_20px_rgba(139,92,246,0.1)] transition-all cursor-default relative overflow-hidden"
                          >
                             <div className="flex items-center justify-between z-10">
                                <span className="font-mono text-[11px] text-foreground font-bold tracking-tight">
                                   {skill}
                                </span>
                                <div className="p-1 rounded bg-secondary/50">
                                   <div className="w-2 h-2 rounded-full bg-primary/20 group-hover:bg-primary transition-colors" />
                                </div>
                             </div>
                             <div className="mt-3 h-0.5 bg-secondary rounded-full overflow-hidden">
                                <motion.div 
                                   initial={{ width: 0 }}
                                   whileInView={{ width: `${Math.floor(Math.random() * 20) + 80}%` }}
                                   className="h-full bg-primary/40 group-hover:bg-primary transition-colors"
                                />
                             </div>
                             {/* Matrix Decoration */}
                             <div className="absolute inset-0 bg-primary/2" />
                             <div className="absolute top-0 right-0 p-1 opacity-0 group-hover:opacity-100 transition-opacity font-mono text-[6px] text-primary/20 pointer-events-none">
                                0x{Math.random().toString(16).substring(2, 6).toUpperCase()}
                             </div>
                          </motion.div>
                       ))}
                    </motion.div>
                 </AnimatePresence>
              </div>

              {/* Bottom: Component Footer */}
              <div className="px-8 py-6 border-t border-border/10 bg-black/40 flex flex-wrap items-center justify-between gap-6 overflow-hidden">
                 <div className="flex items-center gap-6">
                    <div className="flex flex-col">
                       <span className="text-[8px] font-mono text-muted-foreground/30 uppercase">Integrity</span>
                       <span className="text-[10px] font-bold text-green-500/60 uppercase">System_Healthy</span>
                    </div>
                    <div className="h-6 w-px bg-border/20" />
                    <div className="flex flex-col">
                       <span className="text-[8px] font-mono text-muted-foreground/30 uppercase">Active_Threads</span>
                       <span className="text-[10px] font-bold text-primary/60 uppercase">{activeSkillCategory === 'devops' ? '9.2k' : '4.8k'} requests</span>
                    </div>
                 </div>
                 <div className="ml-auto opacity-20 pointer-events-none hidden lg:block">
                    <svg width="100" height="20" viewBox="0 0 100 20">
                       <path d="M0 10 Q 25 2, 50 10 T 100 10" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary animate-pulse" />
                    </svg>
                 </div>
              </div>
           </div>
        </div>

        {/* Global End Marker */}
        <div className="mt-8 flex items-center justify-center">
            <div className="w-full h-px bg-border/20 relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 bg-background text-[10px] font-mono text-muted-foreground/20 uppercase tracking-[0.3em]">
                    Core_Matrix_Endpoint
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}
