'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Terminal, 
  Settings, 
  Cpu, 
  Workflow, 
  Activity, 
  Maximize2, 
  ShieldCheck, 
  Zap,
  Code2,
  ChevronRight,
  Monitor,
  Layout,
  Layers,
  FileCode,
  Info
} from 'lucide-react'
import { SkillRadar } from './skill-radar'
import { FeaturedFunction } from './featured-function'
import profile from '@/src/data/profile.json'
import { Code } from 'lucide-react'

// Tab definitions for the Unified Console
const CORE_TABS = [
  { id: 'arch', label: 'README.md', icon: Info, title: 'Architectural Philosophy' },
  { id: 'stack', label: 'arsenal.json', icon: Settings, title: 'Technical Stack' },
  { id: 'telemetry', label: 'radar.sh', icon: Activity, title: 'System Telemetry' }
]

const skillCategories = [
  { id: 'languages', title: 'Languages', icon: Code2, skills: profile.skills.languages },
  { id: 'frontend', title: 'Frontend', icon: Monitor, skills: profile.skills.frameworks },
  { id: 'backend', title: 'Backend', icon: ServerSlot, skills: profile.skills.backend }, // Using fallback icon logic below
  { id: 'devops', title: 'DevOps', icon: Cpu, skills: profile.skills.devops },
  { id: 'tooling', title: 'Tools', icon: Workflow, skills: profile.skills.tooling }
]

export function SystemCore() {
  const [activeTab, setActiveTab] = useState('arch')
  const [activeSkillCategory, setActiveSkillCategory] = useState(skillCategories[0].id)

  return (
    <section id="about" className="py-12 bg-background relative overflow-hidden">
      <div className="section-container relative z-10">
        
        {/* Simplified Global Header */}
        <div className="flex items-center gap-4 mb-8 font-mono">
           <div className="px-3 py-1 bg-primary/10 border border-primary/20 rounded text-[9px] text-primary uppercase tracking-[0.3em]">
              System_Specification_v4.5
           </div>
           <div className="h-px flex-1 bg-border/20" />
           <div className="text-[10px] text-muted-foreground/30 uppercase tracking-widest hidden sm:block">
              Host: BRYL-MAIN-FRAME
           </div>
        </div>

        {/* The Unified Chassis */}
        <div className="ide-panel bg-secondary/5 border-primary/30 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] flex flex-col min-h-[600px] overflow-hidden">
           
           {/* Tab Bar (IDE Style) */}
           <div className="flex items-center bg-black/40 border-b border-border/50 overflow-x-auto no-scrollbar">
              {CORE_TABS.map((tab) => {
                 const isActive = activeTab === tab.id
                 return (
                    <button
                       key={tab.id}
                       onClick={() => setActiveTab(tab.id)}
                       className={`
                          flex items-center gap-2 px-6 py-3 border-r border-border/30 transition-all font-mono text-[10px] uppercase tracking-wider relative
                          ${isActive ? 'bg-secondary/30 text-foreground' : 'text-muted-foreground/40 hover:text-muted-foreground hover:bg-white/5'}
                       `}
                    >
                       {isActive && <motion.div layoutId="tab-active" className="absolute bottom-[-1px] left-0 right-0 h-0.5 bg-primary" />}
                       <tab.icon size={12} className={isActive ? 'text-primary' : 'opacity-40'} />
                       {tab.label}
                    </button>
                 )
              })}
              <div className="flex-1" />
              <div className="px-6 py-3 border-l border-border/30 flex gap-2">
                 <div className="w-1.5 h-1.5 rounded-full bg-primary/20" />
                 <div className="w-1.5 h-1.5 rounded-full bg-primary/10" />
              </div>
           </div>

           {/* Tab Content Area */}
           <div className="flex-1 flex flex-col md:flex-row relative">
              
              {/* Internal Sidebar (For multi-level settings) */}
              <div className="w-full md:w-56 border-b md:border-b-0 md:border-r border-border/30 bg-black/20 shrink-0">
                 <div className="p-4 font-mono text-[9px] text-muted-foreground/40 uppercase tracking-widest bg-secondary/10">
                    File_Explorer
                 </div>
                 
                 <div className="py-2">
                    <AnimatePresence mode="wait">
                       {activeTab === 'stack' ? (
                          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-1">
                             {skillCategories.map((cat) => (
                                <button
                                   key={cat.id}
                                   onClick={() => setActiveSkillCategory(cat.id)}
                                   className={`w-full flex items-center gap-3 px-6 py-2 text-[10px] font-bold uppercase transition-colors relative ${activeSkillCategory === cat.id ? 'text-primary bg-primary/5' : 'text-muted-foreground/50 hover:text-foreground'}`}
                                >
                                   {activeSkillCategory === cat.id && <div className="absolute left-0 w-0.5 h-4 bg-primary" />}
                                   <cat.icon size={14} />
                                   {cat.title}
                                </button>
                             ))}
                          </motion.div>
                       ) : (
                          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-6 space-y-4">
                             <div className="flex items-center gap-2 text-[10px] text-muted-foreground uppercase opacity-40">
                                <Cpu size={12} /> Root_Core
                             </div>
                             <div className="flex items-center gap-2 text-[10px] text-muted-foreground uppercase opacity-40">
                                <Activity size={12} /> Status_Monitor
                             </div>
                          </motion.div>
                       )}
                    </AnimatePresence>
                 </div>
              </div>

              {/* Main Workspace */}
              <div className="flex-1 p-6 md:p-10 relative overflow-y-auto no-scrollbar bg-black/10">
                 <AnimatePresence mode="wait">
                    
                    {/* Mode 1: Architectural README */}
                    {activeTab === 'arch' && (
                       <motion.div 
                          key="arch"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="h-full grid lg:grid-cols-2 gap-10"
                       >
                          <div className="space-y-6">
                             <div className="space-y-2">
                                <h3 className="text-2xl font-black italic tracking-tighter uppercase text-primary">01. Philosophy</h3>
                                <p className="text-muted-foreground font-mono text-xs leading-relaxed max-w-sm">
                                   Designing digital ecosystems with precision, scalability, and absolute integrity.
                                </p>
                             </div>
                             
                             <div className="grid grid-cols-1 gap-3">
                                <div className="flex items-center gap-4 p-4 border border-border/50 rounded bg-secondary/5 group hover:border-primary/30 transition-all">
                                   <div className="p-2 rounded bg-primary/10 text-primary">
                                      <Maximize2 size={16} />
                                   </div>
                                   <div>
                                      <div className="text-[10px] font-bold uppercase">Elastic Scaling</div>
                                      <div className="text-[9px] font-mono text-muted-foreground/50">Load-balanced edge architecture</div>
                                   </div>
                                </div>
                                <div className="flex items-center gap-4 p-4 border border-border/50 rounded bg-secondary/5 group hover:border-primary/30 transition-all">
                                   <div className="p-2 rounded bg-green-500/10 text-green-500">
                                      <ShieldCheck size={16} />
                                   </div>
                                   <div>
                                      <div className="text-[10px] font-bold uppercase">Zero-Trust Security</div>
                                      <div className="text-[9px] font-mono text-muted-foreground/50">End-to-end encrypted tunnels</div>
                                   </div>
                                </div>
                             </div>
                          </div>

                          <div className="hidden lg:block relative scale-90">
                             <FeaturedFunction />
                          </div>
                       </motion.div>
                    )}

                    {/* Mode 2: Tech Stack Loader */}
                    {activeTab === 'stack' && (
                       <motion.div 
                          key="stack"
                          initial={{ opacity: 0, scale: 1.02 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.98 }}
                          className="h-full"
                       >
                          <div className="mb-6 flex items-center justify-between">
                            <h3 className="text-lg font-bold font-mono text-primary uppercase">{activeSkillCategory}.manifest</h3>
                            <span className="text-[9px] font-mono text-muted-foreground/30">LATEST_SYNC: {new Date().toLocaleTimeString()}</span>
                          </div>
                          
                          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                             {skillCategories.find(c => c.id === activeSkillCategory)?.skills.map((skill, i) => (
                                <motion.div
                                   key={skill}
                                   initial={{ opacity: 0, x: -10 }}
                                   animate={{ opacity: 1, x: 0 }}
                                   transition={{ delay: i * 0.03 }}
                                   className="p-4 border border-border/50 rounded aspect-square flex flex-col justify-between hover:border-primary/40 hover:bg-primary/5 transition-all group"
                                >
                                   <span className="font-mono text-[9px] text-muted-foreground group-hover:text-primary transition-colors">0{i+1}</span>
                                   <span className="text-[11px] font-black uppercase tracking-tighter leading-none">{skill}</span>
                                   <div className="h-0.5 w-full bg-secondary rounded-full overflow-hidden mt-3">
                                      <div className="h-full bg-primary/40 w-[85%]" />
                                   </div>
                                </motion.div>
                             ))}
                          </div>
                       </motion.div>
                    )}

                    {/* Mode 3: Telemetry Radar */}
                    {activeTab === 'telemetry' && (
                       <motion.div 
                          key="telemetry"
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          className="h-full flex flex-col items-center justify-center space-y-8"
                       >
                          <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
                             <SkillRadar />
                             <div className="absolute inset-0 pointer-events-none border border-primary/10 rounded-full animate-ping opacity-20" />
                          </div>
                          <div className="flex gap-12 font-mono text-[10px] text-muted-foreground uppercase opacity-40">
                             <div className="flex flex-col items-center">
                                <span>Stability</span>
                                <span className="text-white">99.8%</span>
                             </div>
                             <div className="flex flex-col items-center">
                                <span>Core_Freq</span>
                                <span className="text-white">4.8GHz</span>
                             </div>
                          </div>
                       </motion.div>
                    )}

                 </AnimatePresence>
              </div>
           </div>

           {/* Console Bottom Bar */}
           <div className="px-6 py-3 bg-black/40 border-t border-border/50 flex items-center justify-between text-[8px] font-mono uppercase tracking-[0.4em] text-muted-foreground/30">
              <div className="flex items-center gap-4">
                 <div className="flex items-center gap-1.5"><div className="w-1 h-1 rounded-full bg-green-500/50" /> System_Main_01: ONLINE</div>
                 <div className="flex items-center gap-1.5"><div className="w-1 h-1 rounded-full bg-primary/50" /> Buffer: 0.0s</div>
              </div>
              <div className="flex items-center gap-4">
                 <span>UTF-8 // JSON-LD</span>
                 <span className="text-primary/30 selection:bg-primary/20 cursor-default">Compiled.SUCCESS</span>
              </div>
           </div>
        </div>
      </div>
    </section>
  )
}

function ServerSlot(props: any) {
  return (
    <svg 
      {...props} 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    >
      <rect width="20" height="8" x="2" y="2" rx="2" ry="2"/>
      <rect width="20" height="8" x="2" y="14" rx="2" ry="2"/>
      <line x1="6" x2="6.01" y1="6" y2="6"/>
      <line x1="6" x2="6.01" y1="18" y2="18"/>
    </svg>
  )
}
