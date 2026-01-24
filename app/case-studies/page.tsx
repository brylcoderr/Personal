'use client'

import { motion } from 'framer-motion'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Terminal, Brackets, ArrowRight, ExternalLink } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import caseStudies from '@/src/data/case-studies.json'

export default function AllCaseStudiesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-hidden selection:bg-primary/30">
      <Navbar />
      
      {/* Background Decoration */}
      <div className="fixed inset-0 code-grid-bg pointer-events-none opacity-50" />
      <div className="fixed -top-24 -left-20 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Hero Section */}
      <section className="pt-40 pb-20 relative">
        <div className="section-container relative">
          <div className="flex flex-col gap-6 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded font-mono text-[10px] tracking-widest uppercase text-primary">
              <Terminal size={12} />
              Repository_Index
            </div>
            <h1 className="text-5xl sm:text-7xl font-black tracking-tight leading-[0.9]">
              The Full <br />
              <span className="text-primary italic">Matrix.</span>
            </h1>
            <p className="text-xl text-muted-foreground font-medium max-w-xl leading-tight">
              A collection of architectural documents and performance records across multiple digital domains.
            </p>
          </div>

          <div className="absolute top-0 right-0 hidden lg:block">
            <div className="text-[200px] font-mono text-primary/5 select-none pointer-events-none font-thin leading-none translate-x-20 -translate-y-10">
              {`{ }`}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-32 relative z-10">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
            {caseStudies.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group flex flex-col ide-panel bg-secondary/10 hover:border-primary/40 transition-all duration-500"
              >
                {/* Image Component */}
                <div className="relative aspect-[16/9] overflow-hidden border-b border-border/50">
                  <Image
                    src={project.coverImage}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-4">
                    <Link 
                      href={`/case-studies/${project.id}`}
                      className="px-6 py-3 bg-primary text-primary-foreground rounded-sm font-mono text-xs font-bold uppercase tracking-widest hover:scale-105 transition-all shadow-[0_0_20px_rgba(139,92,246,0.3)]"
                    >
                      Read_Documentation
                    </Link>
                  </div>
                  
                  {/* Floating ID */}
                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded border border-white/10 font-mono text-[10px] text-white/50">
                    ID: {project.id.toUpperCase()}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 md:p-10 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-6">
                    <h3 className="text-3xl font-bold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <span className="font-mono text-[10px] text-muted-foreground/30 mt-2 tracking-[0.2em]">
                       VERSION_1.0
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground text-base leading-relaxed mb-10 flex-1">
                    {project.challenge}
                  </p>

                  {/* High-Level Metrics */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-border/30">
                    {project.metrics.slice(0, 4).map((m, mIdx) => (
                      <div key={mIdx} className="space-y-1">
                        <div className="font-mono text-lg font-black text-primary/80">{m.value}</div>
                        <div className="text-[9px] font-mono text-muted-foreground/40 uppercase tracking-widest">{m.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Navigation Footer */}
                  <div className="mt-10 flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {project.stack.slice(0, 3).map(tech => (
                        <span key={tech} className="px-2 py-0.5 bg-secondary border border-border rounded text-[9px] font-mono text-muted-foreground">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <Link 
                      href={`/case-studies/${project.id}`}
                      className="text-[11px] font-mono font-bold text-primary flex items-center gap-2 group/link"
                    >
                      FULL_SPEC <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mt-32 p-12 md:p-20 ide-panel bg-secondary/5 border-dashed border-primary/20 text-center relative overflow-hidden"
          >
            <div className="relative z-10 max-w-2xl mx-auto space-y-8">
              <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
                Ready to Architect <br />
                <span className="text-primary italic">Something Great?</span>
              </h2>
              <p className="text-lg text-muted-foreground font-medium max-w-xl mx-auto">
                Whether it's a new system or improving an existing landscape, 
                let's discuss the strategy for your next project.
              </p>
              <div className="flex justify-center pt-4">
                <Link 
                  href="/#contact" 
                  className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-primary-foreground font-black rounded hover:bg-primary/90 transition-all hover:scale-[1.05] active:scale-[0.95] glow-accent uppercase text-xs tracking-[0.2em]"
                >
                  <Terminal size={16} />
                  Initialize_Discovery
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
