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
  { id: 'arch', label: 'README.md', icon: Info, title: 'Engineering Philosophy' },
  { id: 'stack', label: 'arsenal.json', icon: Settings, title: 'Technical Stack' },
  { id: 'metrics', label: 'metrics.log', icon: Activity, title: 'Performance Metrics' }
]

const skillCategories = [
  { id: 'frontend', title: 'Frontend Systems', icon: Monitor, skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Redux / Zustand'] },
  { id: 'backend', title: 'Backend & APIs', icon: Layers, skills: ['Node.js', 'Go', 'Python (FastAPI)', 'PostgreSQL', 'Redis', 'GraphQL / REST'] },
  { id: 'infra', title: 'Infrastructure', icon: Cpu, skills: ['AWS / Vercel', 'Docker', 'Kubernetes', 'CI/CD (GitHub Actions)', 'Terraform', 'Linux'] },
  { id: 'strategic', title: 'Strategic Tools', icon: Workflow, skills: ['Jira / Agile', 'System Design', 'Git / SVN', 'Unit/E2E Testing', 'Performance Tuning', 'Code Review'] }
]

export function SystemCore() {
  const [activeTab, setActiveTab] = useState('arch')
  const [activeSkillCategory, setActiveSkillCategory] = useState(skillCategories[0].id)

  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      <div className="section-container relative z-10">
        
        {/* Simplified Global Header */}
        <div className="flex items-center gap-4 mb-12 font-mono">
           <div className="px-3 py-1 bg-primary/10 border border-primary/20 rounded text-[9px] text-primary uppercase tracking-[0.3em]">
              Strategic_Overview_v2.0
           </div>
           <div className="h-px flex-1 bg-border/20" />
           <div className="text-[10px] text-muted-foreground/30 uppercase tracking-widest hidden sm:block">
              Host: BRYLC_MAIN
           </div>
        </div>

        {/* The Unified Chassis */}
        <div className="ide-panel bg-secondary/5 border-primary/20 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] flex flex-col min-h-[640px] overflow-hidden">
           
           {/* Tab Bar (IDE Style) */}
           <div className="flex items-center bg-black/40 border-b border-border/50 overflow-x-auto no-scrollbar">
              {CORE_TABS.map((tab) => {
                 const isActive = activeTab === tab.id
                 return (
                    <button
                       key={tab.id}
                       onClick={() => setActiveTab(tab.id)}
                       className={`
                          flex items-center gap-3 px-8 py-4 border-r border-border/30 transition-all font-mono text-[11px] uppercase tracking-wider relative
                          ${isActive ? 'bg-secondary/20 text-foreground' : 'text-muted-foreground/40 hover:text-muted-foreground hover:bg-white/5'}
                       `}
                    >
                       {isActive && <motion.div layoutId="tab-active" className="absolute -bottom-px left-0 right-0 h-0.5 bg-primary shadow-[0_0_10px_var(--primary)]" />}
                       <tab.icon size={14} className={isActive ? 'text-primary' : 'opacity-40'} />
                       {tab.label}
                    </button>
                 )
              })}
              <div className="flex-1" />
           </div>

           {/* Tab Content Area */}
           <div className="flex-1 flex flex-col md:flex-row relative bg-[#050508]/40">
              
              {/* Internal Sidebar (For multi-level settings) */}
              <div className="w-full md:w-64 border-b md:border-b-0 md:border-r border-border/10 bg-black/20 shrink-0">
                 <div className="p-4 font-mono text-[9px] text-muted-foreground/40 uppercase tracking-widest border-b border-border/10">
                    Domain_Matrix
                 </div>
                 
                 <div className="py-4">
                    <AnimatePresence mode="wait">
                       {activeTab === 'stack' ? (
                          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-1">
                             {skillCategories.map((cat) => (
                                <button
                                   key={cat.id}
                                   onClick={() => setActiveSkillCategory(cat.id)}
                                   className={`w-full flex items-center gap-4 px-6 py-3 text-[10px] font-bold uppercase transition-all relative ${activeSkillCategory === cat.id ? 'text-primary bg-primary/5' : 'text-muted-foreground/40 hover:text-foreground hover:bg-white/5'}`}
                                >
                                   {activeSkillCategory === cat.id && <div className="absolute left-0 w-1 h-5 bg-primary shadow-[0_0_10px_var(--primary)]" />}
                                   <cat.icon size={16} />
                                   {cat.title}
                                </button>
                             ))}
                          </motion.div>
                       ) : (
                          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-6 space-y-6">
                             <div className="space-y-2">
                                <div className="text-[10px] text-muted-foreground uppercase opacity-40 font-mono tracking-tighter">Current_Node:</div>
                                <div className="text-[11px] text-primary font-bold uppercase tracking-widest">brylc-master.dev</div>
                             </div>
                             <div className="space-y-2">
                                <div className="text-[10px] text-muted-foreground uppercase opacity-40 font-mono tracking-tighter">Uptime:</div>
                                <div className="text-[11px] text-foreground font-bold uppercase tracking-widest flex items-center gap-2">
                                   <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                                   99.98%
                                </div>
                             </div>
                          </motion.div>
                       )}
                    </AnimatePresence>
                 </div>
              </div>

              {/* Main Workspace */}
              <div className="flex-1 p-8 md:p-12 relative overflow-y-auto no-scrollbar">
                 <AnimatePresence mode="wait">
                    
                    {/* Mode 1: Architectural README */}
                    {activeTab === 'arch' && (
                       <motion.div 
                          key="arch"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="h-full space-y-10"
                       >
                          <div className="space-y-4">
                             <h3 className="text-3xl font-black italic tracking-tighter uppercase text-primary glow-text">Strategic Objective</h3>
                             <p className="text-muted-foreground font-light text-lg leading-relaxed max-w-2xl font-mono">
                                <span className="token-key">const</span> <span className="token-func">focus</span> = [<span className="token-str">"Resilience"</span>, <span className="token-str">"Scalability"</span>, <span className="token-str">"System Integrity"</span>];<br />I bridge the gap between <span className="token-key">complex engineering</span> requirements and <span className="token-func">elegant systems</span>.
                             </p>
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                             {[
                                { title: 'Architectural Integrity', desc: 'Designing systems that handle 1M+ requests with zero-trust security and high availability.', icon: ShieldCheck },
                                { title: 'Performant Frontend', desc: 'Crafting pixel-perfect, high-performance web experiences with sub-second TTI.', icon: Zap },
                                { title: 'Distributed Systems', desc: 'Engineering robust backend infrastructures using microservices and event-driven patterns.', icon: Layers },
                                { title: 'Product Vision', desc: 'Aligning technical decisions with business goals to ensure long-term scalability.', icon: Maximize2 }
                             ].map((item, i) => (
                                <div key={i} className="p-6 border border-border/10 rounded bg-white/2 flex items-start gap-5 hover:border-primary/30 transition-all group">
                                   <div className="p-3 rounded bg-primary/5 text-primary group-hover:scale-110 transition-transform">
                                      <item.icon size={20} />
                                   </div>
                                   <div className="space-y-1">
                                      <div className="text-[11px] font-black uppercase tracking-widest">{item.title}</div>
                                      <p className="text-[10px] text-muted-foreground/60 leading-relaxed">{item.desc}</p>
                                   </div>
                                </div>
                             ))}
                          </div>
                       </motion.div>
                    )}

                    {/* Mode 2: Tech Stack Matrix */}
                    {activeTab === 'stack' && (
                       <motion.div 
                          key="stack"
                          initial={{ opacity: 0, scale: 0.98 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.98 }}
                          className="h-full"
                       >
                          <div className="mb-8 flex items-center justify-between border-b border-border/10 pb-4">
                             <div className="space-y-1">
                                <h3 className="text-xl font-bold text-primary uppercase">{activeSkillCategory}.manifest</h3>
                                <p className="text-[10px] text-muted-foreground/40 font-mono tracking-widest uppercase">Validated Core Technologies</p>
                             </div>
                             <span className="text-[9px] font-mono text-muted-foreground/20 px-3 py-1 border border-border/10 rounded uppercase">Ready for Deployment</span>
                          </div>
                          
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                             {skillCategories.find(c => c.id === activeSkillCategory)?.skills.map((skill, i) => (
                                <motion.div
                                   key={skill}
                                   initial={{ opacity: 0, x: -10 }}
                                   animate={{ opacity: 1, x: 0 }}
                                   transition={{ delay: i * 0.05 }}
                                   className="p-6 border border-border/10 rounded relative overflow-hidden group hover:border-primary/40 transition-all"
                                >
                                   <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-100 group-hover:text-primary transition-all">
                                      <Code2 size={12} />
                                   </div>
                                   <div className="space-y-4">
                                      <span className="text-sm font-bold tracking-tight text-foreground block">{skill}</span>
                                      <div className="h-1 w-full bg-secondary/50 rounded-full overflow-hidden">
                                         <motion.div 
                                            initial={{ width: 0 }}
                                            animate={{ width: `${85 + Math.random() * 10}%` }}
                                            transition={{ duration: 1.5, delay: 0.2 }}
                                            className="h-full bg-primary"
                                         />
                                      </div>
                                   </div>
                                </motion.div>
                             ))}
                          </div>
                       </motion.div>
                    )}

                    {/* Mode 3: Impact Metrics */}
                    {activeTab === 'metrics' && (
                       <motion.div 
                          key="metrics"
                          initial={{ opacity: 0, scale: 1.05 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="h-full grid grid-cols-2 gap-8 items-center"
                       >
                          <div className="space-y-12">
                             {[
                                { label: 'Years of Engineering', value: '7+', suffix: 'EXP' },
                                { label: 'Enterprise Systems', value: '12+', suffix: 'DEP' },
                                { label: 'Project Accuracy', value: '100', suffix: '%' },
                                { label: 'Uptime Reliability', value: '99.9', suffix: '%' }
                             ].map((stat, i) => (
                                <div key={i} className="group cursor-default">
                                   <div className="text-5xl font-black tabular-nums tracking-tighter group-hover:text-primary transition-colors">
                                      {stat.value}<span className="text-xl text-primary/40 ml-1">{stat.suffix}</span>
                                   </div>
                                   <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-[0.4em] mt-2 border-l border-primary/20 pl-4">
                                      {stat.label}
                                   </div>
                                </div>
                             ))}
                          </div>

                          <div className="hidden lg:block relative p-8">
                             <div className="absolute inset-0 border border-primary/10 rounded-full animate-spin-slow" />
                             <div className="absolute inset-4 border border-accent/10 rounded-full animate-spin-slow-reverse" />
                             <div className="relative z-10 p-12 bg-primary/5 rounded-full border border-primary/20 backdrop-blur-xl flex items-center justify-center">
                                <Activity size={80} className="text-primary animate-pulse" />
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






