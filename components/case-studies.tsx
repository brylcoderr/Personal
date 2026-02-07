'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Terminal, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import projects from '@/src/data/case-studies.json'
import profile from '@/src/data/profile.json'
import { Carousel } from '@/components/ui/carousel'

export function CaseStudies() {
  return (
    <section id="projects" className="py-16 bg-background border-y border-border/20">
      <div className="section-container">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="space-y-4">
            <div className="code-label">
              Blueprint_Repository
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight glow-text uppercase">
              Engineering <span className="text-primary italic">Case Studies</span>
            </h2>
          </div>
          <div className="text-muted-foreground font-mono text-[10px] max-w-sm border-l border-primary/20 pl-6 py-2 uppercase tracking-widest leading-loose">
            <span className="token-key">await</span> projects.<span className="token-func">load</span>(); <br />
            // Showing <span className="token-num">{projects.length}</span> mission-critical deployments
          </div>
        </div>

        {/* Projects Carousel */}
        <Carousel 
          autoPlay={true} 
          delay={5000}
          slideClassName="md:flex-[0_0_100%] lg:flex-[0_0_50%]"
        >
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group flex flex-col ide-panel bg-secondary/10 hover:border-primary/40 transition-all duration-500 h-full"
            >
              {/* Project Image */}
              <div className="relative aspect-video overflow-hidden border-b border-border/50">
                <Image
                  src={project.coverImage}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col p-6 font-mono text-[9px] leading-relaxed overflow-hidden">
                  <div className="flex items-center gap-2 mb-4 text-primary font-bold border-b border-primary/20 pb-2 uppercase tracking-tighter">
                     <Terminal size={10} />
                     <span>0x{project.id.slice(0, 4).toUpperCase()}: SECURE_LINK</span>
                  </div>
                  <div className="space-y-1 text-muted-foreground/60">
                     <p className="text-green-500/80"><span className="opacity-40">›</span> Connecting to <span className="token-func">{project.id}</span>.prod_node...</p>
                     <p><span className="opacity-40">›</span> Handshake: <span className="token-key">rsa-key_0x8f2</span></p>
                     <p><span className="opacity-40">›</span> Linking system dependencies...</p>
                     <p><span className="opacity-40">›</span> Build artifacts: <span className="token-num">{project.stack.length} modules</span></p>
                     <p><span className="opacity-40">›</span> Status: <span className="token-str">STABLE</span></p>
                     <p className="animate-pulse text-primary mt-2">_INIT_COMPLETE</p>
                  </div>
                  
                  <div className="mt-auto flex flex-col items-center gap-4 z-10">
                    <div className="flex gap-4">
                      <a 
                        href={project.deployUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-3 bg-primary text-primary-foreground rounded-full hover:scale-110 transition-transform active:scale-95"
                        title="Live Demo"
                      >
                        <ExternalLink size={20} />
                      </a>
                      <a 
                        href={project.repoUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-3 bg-white text-black rounded-full hover:scale-110 transition-transform active:scale-95"
                        title="Source Code"
                      >
                        <Github size={20} />
                      </a>
                    </div>
                    <Link 
                      href={`/case-studies/${project.id}`}
                      className="w-full text-center py-2 bg-secondary/50 border border-border/50 rounded uppercase tracking-widest hover:border-primary/50 transition-colors"
                    >
                      view_blueprint
                    </Link>
                  </div>
                </div>
                
                {/* Tech Badges on Image */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  {project.stack.slice(0, 2).map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-black/60 backdrop-blur-md text-[9px] font-mono text-white rounded border border-white/10 uppercase tracking-tighter">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-start justify-between mb-4">
                  <Link href={`/case-studies/${project.id}`}>
                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors cursor-pointer">
                      {project.title}
                    </h3>
                  </Link>
                  <span className="font-mono text-[10px] text-muted-foreground/40 mt-1">
                    [0{idx + 1}]
                  </span>
                </div>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-8 flex-1">
                  {project.challenge}
                </p>

                {/* Footer Metadata */}
                <div className="mt-auto pt-6 border-t border-border/30 flex items-center justify-between">
                  <div className="flex flex-wrap gap-x-4 gap-y-2">
                    {project.stack.slice(0, 3).map((tech) => (
                      <div key={tech} className="flex items-center gap-1.5 font-mono text-[10px] text-primary/60">
                        <span className="w-1 h-1 rounded-full bg-primary/40" />
                        {tech}
                      </div>
                    ))}
                  </div>
                  <Link 
                    href={`/case-studies/${project.id}`}
                    className="text-[10px] font-mono font-bold text-primary flex items-center gap-1 group/link"
                  >
                    SPEC <ArrowRight size={12} className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </Carousel>

        {/* View All Callout */}
        <div className="mt-20 flex flex-col items-center">
          <div className="w-px h-16 bg-linear-to-b from-primary/50 to-transparent" />
          <a 
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground hover:text-primary transition-colors flex items-center gap-3"
          >
            <Github size={14} /> 
            Discovery_More_On_Github
          </a>
        </div>
      </div>
    </section>
  )
}
