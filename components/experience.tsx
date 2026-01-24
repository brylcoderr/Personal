'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase, Calendar, Terminal, ChevronRight } from 'lucide-react'
import profile from '@/src/data/profile.json'

export function Experience() {
  return (
    <section id="experience" className="py-16 bg-background relative overflow-hidden">
      <div className="section-container relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="space-y-4">
            <div className="code-label">
              Professional_History
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">
              Work <span className="text-primary italic">Experience</span>
            </h2>
          </div>
          <div className="text-muted-foreground font-mono text-xs max-w-sm border-l border-border pl-6 py-2">
            git log --oneline --graph; <br />
            // Iterating through professional milestones
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-12">
          {profile.experience.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Timeline Connector */}
              {idx !== profile.experience.length - 1 && (
                <div className="absolute left-[19px] top-10 bottom-[-48px] w-px bg-border/50 group-hover:bg-primary/30 transition-colors" />
              )}

              <div className="flex gap-8 items-start">
                {/* Node */}
                <div className="shrink-0 pt-2 relative">
                  <div className="relative z-10 shrink-0 mt-1">
                    <div className="w-10 h-10 rounded bg-secondary border border-border group-hover:border-primary/50 flex items-center justify-center transition-all group-hover:scale-110">
                      <Briefcase size={18} className="text-primary/60 group-hover:text-primary transition-colors" />
                    </div>
                  </div>
                </div>

                {/* Content Panel */}
                <div className="flex-1 ide-panel bg-secondary/10 group-hover:border-primary/30 transition-all duration-500">
                  <div className="px-6 py-4 bg-secondary/30 border-b border-border/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <h3 className="text-xl font-bold">{exp.role}</h3>
                      <span className="hidden sm:block text-muted-foreground/30">|</span>
                      <span className="text-primary font-mono text-sm">{exp.company}</span>
                    </div>
                    <div className="flex items-center gap-2 font-mono text-[10px] text-muted-foreground uppercase tracking-widest bg-background/50 px-3 py-1 rounded border border-border/50">
                      <Calendar size={12} />
                      {exp.period}
                    </div>
                  </div>

                  <div className="p-8 space-y-6">
                    <div className="grid gap-4">
                      {exp.highlights.map((highlight, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-4 group/item editor-selection p-2 -ml-2 rounded transition-all">
                          <div className="font-mono text-[10px] text-muted-foreground/30 mt-1 select-none">
                            {String(hIdx + 1).padStart(2, '0')}
                          </div>
                          <p className="text-muted-foreground leading-relaxed text-sm">
                            {highlight}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* System Footer Tag */}
                    <ClientOnlyCommitId index={idx} company={exp.company} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ClientOnlyCommitId({ index, company }: { index: number, company: string }) {
  const [commitId, setCommitId] = React.useState<string>('')

  React.useEffect(() => {
    // Generate ID only on client to avoid hydration mismatch
    const id = Math.random().toString(36).substring(7).toUpperCase()
    setCommitId(id)
  }, [])

  if (!commitId) return null

  return (
    <div className="flex items-center gap-2 pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
      <div className="h-px flex-1 bg-linear-to-r from-border/50 to-transparent" />
      <div className="font-mono text-[8px] text-primary/40 uppercase tracking-[0.2em]">
        Commit_ID: {commitId}
      </div>
    </div>
  )
}
