'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { 
  ArrowLeft, 
  Terminal, 
  Layers, 
  BarChart3,
  ChevronRight,
  MoveRight,
  Stars,
  Zap,
  ShieldCheck,
  Quote
} from 'lucide-react'
import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import caseStudies from '@/src/data/case-studies.json'
import { cn } from '@/lib/utils'

interface CaseStudyContentProps {
  study: (typeof caseStudies)[0]
}

const FadeInUp = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.3, delay, ease: "linear" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

const SectionEyebrow = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <span className={cn("inline-block bg-neo-accent border-2 border-black px-3 py-1 text-xs font-black uppercase tracking-widest text-white shadow-[2px_2px_0px_0px_#000] mb-6", className)}>
    {children}
  </span>
)

export function CaseStudyContent({ study }: CaseStudyContentProps) {
  return (
    <main className="min-h-screen bg-neo-bg texture-grid selection:bg-neo-accent selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-44 pb-32 border-b-4 border-black relative overflow-hidden">
        <div className="absolute inset-0 texture-halftone opacity-5 pointer-events-none" />
        <div className="section-container relative z-10">
          <div className="mb-16">
            <Link 
              href="/work" 
              className="neo-btn bg-white text-black inline-flex items-center gap-3 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-neo-lg transition-all group"
            >
              <ArrowLeft size={20} strokeWidth={3} className="transition-transform group-hover:-translate-x-1" />
              BACK TO CATALOG
            </Link>
          </div>

          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <FadeInUp className="space-y-10">
              <div className="space-y-6">
                <div className="flex flex-wrap gap-3">
                  {study.tags.map(tag => (
                    <span key={tag} className="px-4 py-1 bg-neo-secondary text-black font-black uppercase tracking-widest text-[10px] neo-border shadow-[2px_2px_0px_#000]">
                      {tag}
                    </span>
                  ))}
                </div>
                <h1 className="text-6xl md:text-8xl font-black text-black leading-[0.85] tracking-tighter uppercase drop-shadow-[6px_6px_0px_#FF6B6B]">
                  {study.title}
                </h1>
                <p className="text-2xl text-black/60 font-black uppercase tracking-tight">
                  CLIENT: {study.client} &bull; {new Date(study.date).getFullYear()}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-12 pt-8 border-t-4 border-black">
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-neo-accent mb-3">DURATION</p>
                  <p className="text-3xl font-black text-black uppercase tracking-tighter">{study.timeline}</p>
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-neo-accent mb-3">MODEL</p>
                  <p className="text-3xl font-black text-black uppercase tracking-tighter">{study.role}</p>
                </div>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.2} className="relative group">
              <div className="absolute inset-0 bg-neo-secondary neo-border translate-x-6 translate-y-6 -z-10 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform" />
              <div className="relative aspect-4/3 bg-black neo-border overflow-hidden neo-shadow-lg">
                <Image
                  src={study.coverImage || "/placeholder.svg"}
                  alt={study.title}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                  priority
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-20 bg-neo-accent border-b-4 border-black overflow-hidden relative">
        <div className="absolute inset-0 texture-grid opacity-20 pointer-events-none" />
        <div className="section-container relative z-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
                {study.metrics.map((metric, i) => (
                    <div key={i} className="bg-white neo-border p-8 neo-shadow-sm rotate-1 hover:rotate-0 transition-transform">
                        <p className="text-5xl md:text-7xl font-black text-black drop-shadow-[4px_4px_0px_#FFD93D] mb-2">{metric.value}</p>
                        <p className="text-xs font-black uppercase tracking-widest text-black/60">{metric.label}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Main Analysis */}
      <section className="py-32 bg-white relative">
        <div className="absolute inset-0 texture-halftone opacity-5 pointer-events-none" />
        <div className="section-container">
          <div className="grid lg:grid-cols-12 gap-20">
            
            {/* Analysis Stream */}
            <div className="lg:col-span-8 space-y-32">
              
              {/* Challenge */}
              <FadeInUp className="space-y-10">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-black neo-border flex items-center justify-center text-white shrink-0 neo-shadow-sm">
                      <Zap size={32} strokeWidth={3} />
                  </div>
                  <h2 className="text-4xl md:text-6xl font-black text-black uppercase tracking-tighter">The Challenge</h2>
                </div>
                <p className="text-3xl md:text-4xl text-black font-bold leading-tight uppercase tracking-tight">
                  "{study.challenge}"
                </p>
              </FadeInUp>

              {/* Approach */}
              <FadeInUp className="space-y-10">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-neo-secondary neo-border flex items-center justify-center text-black shrink-0 neo-shadow-sm">
                      <Layers size={32} strokeWidth={3} />
                  </div>
                  <h2 className="text-4xl md:text-6xl font-black text-black uppercase tracking-tighter">Strategic Protocol</h2>
                </div>
                <div className="p-12 bg-neo-bg neo-border relative neo-shadow-md group overflow-hidden">
                  <div className="absolute top-0 right-0 w-44 h-44 bg-neo-accent/10 rounded-bl-full -z-10 group-hover:scale-110 transition-transform" />
                  <p className="text-2xl text-black font-bold leading-tight uppercase tracking-tight relative z-10">
                    {study.approach}
                  </p>
                </div>
              </FadeInUp>

              {/* Technical Execution */}
              <FadeInUp className="space-y-10">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-neo-muted neo-border flex items-center justify-center text-black shrink-0 neo-shadow-sm">
                      <Terminal size={32} strokeWidth={3} />
                  </div>
                  <h2 className="text-4xl md:text-6xl font-black text-black uppercase tracking-tighter">Hardened Stack</h2>
                </div>
                <div className="flex flex-wrap gap-4">
                  {study.stack.map(tech => (
                    <div key={tech} className="px-8 py-4 bg-white neo-border font-black text-black uppercase tracking-widest text-lg hover:bg-neo-accent hover:text-white transition-colors cursor-default neo-shadow-sm">
                      {tech}
                    </div>
                  ))}
                </div>
              </FadeInUp>
            </div>

            {/* Sidebar Evidence */}
            <div className="lg:col-span-4 space-y-12">
               <div className="lg:sticky lg:top-32 space-y-12">
                   {/* Verdict Card */}
                   <div className="neo-card bg-black p-12 text-white relative overflow-hidden">
                      <div className="absolute top-0 right-0 p-4">
                         <Stars className="text-neo-secondary animate-pulse" size={32} />
                      </div>
                      <SectionEyebrow className="bg-neo-secondary text-black shadow-none mb-12">THE VERDICT</SectionEyebrow>
                      <div className="space-y-12">
                         <Quote className="text-neo-accent opacity-40 shrink-0" size={64} strokeWidth={4} />
                         <p className="text-3xl font-black uppercase tracking-tighter leading-[1.1] italic">
                            "{study.outcome}"
                         </p>
                         <div className="pt-10 border-t-4 border-white">
                            <p className="text-xs font-black uppercase tracking-widest text-neo-accent mb-2">PARTNER FEEDBACK</p>
                            <p className="text-xl font-black uppercase tracking-tight text-white mb-2">"{study.testimonial}"</p>
                            <p className="text-[10px] font-black uppercase tracking-widest text-white/40">&mdash; {study.testimonialAuthor}</p>
                         </div>
                      </div>
                   </div>

                   {/* Final CTA */}
                   <div className="bg-neo-secondary neo-border p-12 text-center group relative overflow-hidden">
                      <div className="absolute inset-0 texture-grid opacity-10 pointer-events-none" />
                      <h4 className="text-3xl font-black text-black uppercase tracking-tighter mb-8 relative z-10">READY FOR SIMILAR <span className="underline decoration-4">RESULTS?</span></h4>
                      <Link href="/contact" className="neo-btn bg-black text-white w-full py-6 text-xl shadow-[8px_8px_0px_#FF6B6B] group-hover:shadow-none group-hover:translate-x-2 group-hover:translate-y-2 transition-all relative z-10">
                        GET A PROPOSAL
                      </Link>
                   </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* More Explorations */}
      <section className="py-32 bg-neo-bg border-y-4 border-black relative overflow-hidden">
        <div className="absolute inset-0 texture-halftone opacity-5 pointer-events-none" />
        <div className="section-container relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 pb-12 border-b-4 border-black">
            <h2 className="text-5xl md:text-[100px] font-black text-black uppercase tracking-tighter leading-[0.85]">Recent <br/><span className="text-neo-accent">Outputs</span></h2>
            <Link href="/work" className="neo-btn bg-white text-black text-lg group">
              VIEW FULL CATALOG <MoveRight className="inline-block ml-4 group-hover:translate-x-2 transition-transform" strokeWidth={3} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {caseStudies
              .filter((cs) => cs.id !== study.id)
              .slice(0, 2)
              .map((related) => (
                <Link key={related.id} href={`/case-studies/${related.id}`} className="neo-card group relative aspect-video overflow-hidden">
                  <Image
                    src={related.coverImage || "/placeholder.svg"}
                    alt={related.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-black/60 group-hover:bg-black/20 transition-all duration-500 p-12 flex flex-col justify-end">
                    <h4 className="text-4xl font-black text-white uppercase tracking-tighter leading-none mb-4 drop-shadow-[4px_4px_0px_#000]">{related.title}</h4>
                    <p className="text-xs font-black uppercase tracking-widest text-neo-secondary bg-black px-3 py-1 neo-border w-fit">{String(related.client)}</p>
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
