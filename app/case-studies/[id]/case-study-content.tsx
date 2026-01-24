'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { 
  ArrowLeft, 
  Terminal, 
  FileCode, 
  Github, 
  Globe, 
  Calendar, 
  User, 
  Layers, 
  BarChart3,
  ChevronRight,
  Info
} from 'lucide-react'
import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import caseStudies from '@/src/data/case-studies.json'
import { cn } from '@/lib/utils'

interface CaseStudyContentProps {
  study: (typeof caseStudies)[0]
}

export function CaseStudyContent({ study }: CaseStudyContentProps) {
  return (
    <main className="min-h-screen bg-background text-foreground relative selection:bg-primary/30">
      <Navbar />

      <div className="pt-24 pb-32">
        <div className="section-container">
          {/* Breadcrumb / File Path */}
          <div className="mb-12 flex items-center gap-4">
            <Link 
              href="/#projects" 
              className="p-2 hover:bg-secondary rounded-md transition-colors text-muted-foreground hover:text-primary"
            >
              <ArrowLeft size={20} />
            </Link>
            <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground/60 bg-secondary/30 px-4 py-2 rounded border border-border/50">
              <span className="opacity-40">projects</span>
              <span className="text-primary/40">/</span>
              <span className="text-foreground font-bold">{study.id}.doc</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-12">
            {/* Sidebar Meta Architecture (IDE File Info Look) */}
            <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-32 h-fit order-2 lg:order-1">
              <div className="ide-panel bg-secondary/10">
                <div className="px-6 py-4 border-b border-border/50 bg-secondary/30 flex items-center gap-3">
                  <Info size={14} className="text-primary" />
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider">File_Metadata</span>
                </div>
                <div className="p-6 space-y-8 font-mono">
                  {/* Meta items as code properties */}
                  <div className="space-y-4">
                    <div className="flex flex-col gap-1">
                      <span className="text-[9px] text-muted-foreground/40 uppercase tracking-widest flex items-center gap-2">
                        <User size={10} /> Client_Reference
                      </span>
                      <span className="text-sm text-foreground overflow-hidden text-ellipsis">{String(study.client)}</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-[9px] text-muted-foreground/40 uppercase tracking-widest flex items-center gap-2">
                        <Calendar size={10} /> Compiled_On
                      </span>
                      <span className="text-sm text-foreground">{new Date(study.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-[9px] text-muted-foreground/40 uppercase tracking-widest flex items-center gap-2">
                        <Layers size={10} /> Core_Role
                      </span>
                      <span className="text-sm text-foreground">{study.role}</span>
                    </div>
                  </div>

                  {/* Tech Stack as Dependencies */}
                  <div className="pt-6 border-t border-border/20">
                    <span className="text-[9px] text-muted-foreground/40 uppercase tracking-widest mb-4 block">Engine_Dependencies[]</span>
                    <div className="flex flex-wrap gap-2">
                      {study.stack.map(tech => (
                        <span key={tech} className="px-2 py-1 bg-background border border-border rounded text-[9px] font-bold text-primary/60 uppercase">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-8 space-y-3">
                    {study.deployUrl && (
                      <a 
                        href={study.deployUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full py-3 bg-primary text-primary-foreground rounded font-mono text-[10px] font-bold uppercase tracking-widest hover:bg-primary/90 transition-all glow-accent"
                      >
                        <Globe size={14} />
                        Live_Deployment
                      </a>
                    )}
                    {study.repoUrl && (
                      <a 
                        href={study.repoUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full py-3 bg-background border border-border rounded font-mono text-[10px] font-bold uppercase tracking-widest hover:bg-secondary transition-all"
                      >
                        <Github size={14} />
                        Source_Repository
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Status Indicator */}
              <div className="p-4 bg-secondary/5 border border-border/50 rounded flex items-center justify-between font-mono text-[9px] uppercase tracking-widest text-muted-foreground/40">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500/40" />
                  <span>Verified: PRODUCTION</span>
                </div>
                <span>Size: 42.8KB</span>
              </div>
            </aside>

            {/* Core Blueprint Content */}
            <div className="lg:col-span-8 space-y-12 order-1 lg:order-2">
              {/* Header Card */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="ide-panel p-8 md:p-12 bg-secondary/5 border-primary/20"
              >
                <div className="mb-8 flex flex-wrap gap-2">
                  {study.tags.map(tag => (
                    <span key={tag} className="code-label text-primary">
                      {tag}
                    </span>
                  ))}
                </div>
                <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-8">
                  {study.title}
                </h1>
                
                <div className="relative aspect-video rounded-md overflow-hidden border border-border/50 bg-secondary/20">
                  <Image
                    src={study.coverImage || "/placeholder.svg"}
                    alt={study.title}
                    fill
                    className="object-cover opacity-80"
                    priority
                  />
                  <div className="absolute inset-0 bg-linear-to-b from-transparent via-background/20 to-background/80" />
                </div>
              </motion.div>

              {/* Documentation Sections */}
              <div className="space-y-12">
                {/* 01: Challenge */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="ide-panel"
                >
                  <div className="px-6 py-3 border-b border-border/50 bg-secondary/30 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Terminal size={14} className="text-primary" />
                      <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-muted-foreground/60">Doc // 01.The_Core_Problem</span>
                    </div>
                  </div>
                  <div className="p-8 md:p-12">
                    <p className="text-xl md:text-2xl font-light leading-relaxed text-foreground/80 indent-12">
                      {study.challenge}
                    </p>
                  </div>
                </motion.div>

                {/* 02: Approach */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="ide-panel bg-secondary/5"
                >
                  <div className="px-6 py-3 border-b border-border/50 bg-secondary/30 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <FileCode size={14} className="text-primary" />
                      <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-muted-foreground/60">Doc // 02.System_Implementation</span>
                    </div>
                  </div>
                  <div className="p-8 md:p-12 prose prose-invert max-w-none">
                    <p className="text-lg leading-relaxed text-muted-foreground border-l-2 border-primary/20 pl-8 ml-4">
                      {study.approach}
                    </p>
                  </div>
                </motion.div>

                {/* 03: Performance Metrics */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="ide-panel border-primary/10"
                >
                  <div className="px-6 py-3 border-b border-border/50 bg-secondary/30 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <BarChart3 size={14} className="text-primary" />
                      <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-muted-foreground/60">Doc // 03.Execution_Results</span>
                    </div>
                  </div>
                  <div className="p-8 md:p-12">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                      {study.metrics.map((metric, idx) => (
                        <div key={idx} className="space-y-2 p-4 bg-background border border-border/50 rounded group hover:border-primary/40 transition-colors">
                          <div className="text-2xl font-black text-foreground tracking-tight group-hover:text-primary transition-colors">
                            {metric.value}
                          </div>
                          <div className="text-[9px] font-mono text-muted-foreground/40 uppercase tracking-widest leading-tight">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="p-8 bg-primary/5 rounded border border-primary/10 relative overflow-hidden group">
                      <div className="absolute top-0 right-0 p-4 opacity-5">
                        <Terminal size={80} />
                      </div>
                      <p className="text-lg text-foreground/70 font-light italic leading-relaxed relative z-10">
                        {`" ${study.outcome} "`}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Switch Systems / Footer Grid */}
      <section className="py-24 bg-secondary/5 border-t border-border/20">
        <div className="section-container">
          <div className="flex items-center justify-between mb-12 font-mono">
             <div className="text-[10px] text-muted-foreground/30 uppercase tracking-[0.5em]">Other_Systems.load()</div>
             <Link href="/#projects" className="text-[10px] text-primary hover:text-primary/70 uppercase tracking-widest transition-colors flex items-center gap-2">
               Full_Matrix <ChevronRight size={14} />
             </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies
              .filter((cs) => cs.id !== study.id)
              .slice(0, 2)
              .map((related) => (
                <Link key={related.id} href={`/case-studies/${related.id}`} className="group ide-panel overflow-hidden block hover:border-primary/40 transition-all duration-500">
                  <div className="aspect-video relative overflow-hidden border-b border-border/50">
                    <Image
                      src={related.coverImage || "/placeholder.svg"}
                      alt={related.title}
                      fill
                      className="object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                       <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg">
                          <ChevronRight size={24} />
                       </div>
                    </div>
                  </div>
                  <div className="p-6 bg-background">
                    <h4 className="text-xl font-bold group-hover:text-primary transition-colors">
                      {related.title}
                    </h4>
                    <p className="text-[9px] font-mono text-muted-foreground uppercase tracking-widest mt-2">
                       {String(related.client)}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
