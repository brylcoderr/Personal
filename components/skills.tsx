'use client'

import { motion } from 'framer-motion'
import { Code2, Cpu, Globe2, Layers, Server, Terminal, Wrench } from 'lucide-react'
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

export function Skills() {
  return (
    <section id="skills" className="py-32 relative overflow-hidden bg-background">
      <div className="section-container relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4">
            <div className="code-label">
              Technical_Stack
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">
              My <span className="text-primary italic">Arsenal</span>
            </h2>
          </div>
          <p className="text-muted-foreground font-mono text-xs max-w-sm border-l border-border pl-6 py-2">
            const skills = {`{`} <br />
            &nbsp;&nbsp;level: 'Expert', <br />
            &nbsp;&nbsp;focus: 'Scalability' <br />
            {`}`}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="ide-panel group hover:border-primary/30 transition-all duration-300"
            >
              <div className="px-6 py-4 bg-secondary/30 border-b border-border/50 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <category.icon size={18} className="text-primary" />
                  <h3 className="font-mono text-sm font-bold uppercase tracking-wider">{category.title}</h3>
                </div>
                <span className="text-[10px] font-mono text-muted-foreground/40 group-hover:text-primary/40 transition-colors">
                  0{idx + 1}
                </span>
              </div>
              
              <div className="p-6">
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1.5 bg-background border border-border/80 rounded font-mono text-[11px] text-muted-foreground hover:text-primary hover:border-primary/50 transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Decorative elements */}
        <div className="mt-20 flex items-center justify-center">
            <div className="w-full h-px bg-border/20 relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 bg-background text-[10px] font-mono text-muted-foreground/30 uppercase tracking-[0.3em]">
                    End_of_Definition
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}
