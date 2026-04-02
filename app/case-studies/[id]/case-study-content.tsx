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
    <main className="min-h-screen bg-neo-bg texture-grid selection:bg-neo-accent selection:text-white overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 md:pt-44 pb-20 md:pb-32 border-b-4 border-black relative overflow-hidden">
        <div className="absolute inset-0 texture-halftone opacity-5 pointer-events-none" />
        <div className="section-container relative z-10">
          <div className="mb-8 md:mb-16">
            <Link 
              href="/work" 
              className="neo-btn bg-white text-black inline-flex items-center gap-3 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-neo-lg transition-all group text-sm md:text-base py-2 px-4 md:py-3 md:px-6"
            >
              <ArrowLeft className="w-5 h-5 md:w-6 md:h-6 transition-transform group-hover:-translate-x-1" strokeWidth={3} />
              BACK TO CATALOG
            </Link>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
            <FadeInUp className="space-y-8 md:space-y-10">
              <div className="space-y-4 md:space-y-6">
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {study.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 md:px-4 md:py-1 bg-neo-secondary text-black font-black uppercase tracking-widest text-[8px] md:text-[10px] neo-border shadow-[2px_2px_0px_#000]">
                      {tag}
                    </span>
                  ))}
                </div>
                <h1 className="text-4xl md:text-8xl font-black text-black leading-[0.9] md:leading-[0.85] tracking-tighter uppercase drop-shadow-[4px_4px_0px_#FF6B6B] md:drop-shadow-[6px_6px_0px_#FF6B6B] text-pretty">
                  {study.title}
                </h1>
                <p className="text-lg md:text-2xl text-black/60 font-black uppercase tracking-tight">
                  CLIENT: {study.client} &bull; {new Date(study.date).getFullYear()}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 md:gap-12 pt-6 md:pt-8 border-t-4 border-black">
                <div>
                  <p className="text-[10px] md:text-xs font-black uppercase tracking-widest text-neo-accent mb-2 md:mb-3">DURATION</p>
                  <p className="text-xl md:text-3xl font-black text-black uppercase tracking-tighter leading-none">{study.timeline}</p>
                </div>
                <div>
                  <p className="text-[10px] md:text-xs font-black uppercase tracking-widest text-neo-accent mb-2 md:mb-3">MODEL</p>
                  <p className="text-xl md:text-3xl font-black text-black uppercase tracking-tighter leading-none">{study.role}</p>
                </div>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.2} className="relative group mt-8 lg:mt-0">
              <div className="absolute inset-0 bg-neo-secondary neo-border translate-x-2 translate-y-2 md:translate-x-6 md:translate-y-6 -z-10 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform" />
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
      <section className="py-12 md:py-20 bg-neo-accent border-b-4 border-black overflow-hidden relative">
        <div className="absolute inset-0 texture-grid opacity-20 pointer-events-none" />
        <div className="section-container relative z-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12">
                {study.metrics.map((metric, i) => (
                    <div key={i} className="bg-white neo-border p-4 md:p-8 neo-shadow-sm rotate-1 hover:rotate-0 transition-transform">
                        <p className="text-3xl md:text-7xl font-black text-black drop-shadow-[2px_2px_0px_#FFD93D] md:drop-shadow-[4px_4px_0px_#FFD93D] mb-1 md:mb-2 leading-none">{metric.value}</p>
                        <p className="text-[10px] md:text-xs font-black uppercase tracking-widest text-black/60 leading-tight">{metric.label}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Main Analysis */}
      <section className="py-20 md:py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 texture-halftone opacity-5 pointer-events-none" />
        <div className="section-container relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 md:gap-20">
            
            {/* Analysis Stream */}
            <div className="lg:col-span-8 space-y-16 md:space-y-32">
              
              {/* Challenge */}
              <FadeInUp className="space-y-6 md:space-y-10">
                <div className="flex items-center gap-4 md:gap-6">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-black neo-border flex items-center justify-center text-white shrink-0 neo-shadow-sm">
                      <Zap className="w-6 h-6 md:w-8 md:h-8" strokeWidth={3} />
                  </div>
                  <h2 className="text-2xl md:text-6xl font-black text-black uppercase tracking-tighter">The Challenge</h2>
                </div>
                <p className="text-xl md:text-4xl text-black font-bold leading-tight uppercase tracking-tight text-pretty">
                  "{study.challenge}"
                </p>
              </FadeInUp>

              {/* Approach */}
              <FadeInUp className="space-y-6 md:space-y-10">
                <div className="flex items-center gap-4 md:gap-6">
                   <div className="w-12 h-12 md:w-16 md:h-16 bg-neo-secondary neo-border flex items-center justify-center text-black shrink-0 neo-shadow-sm">
                      <Layers className="w-6 h-6 md:w-8 md:h-8" strokeWidth={3} />
                  </div>
                  <h2 className="text-2xl md:text-6xl font-black text-black uppercase tracking-tighter">Strategic Protocol</h2>
                </div>
                <div className="p-6 md:p-12 bg-neo-bg neo-border relative neo-shadow-md group overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 md:w-44 md:h-44 bg-neo-accent/10 rounded-bl-full -z-10 group-hover:scale-110 transition-transform" />
                  <p className="text-lg md:text-2xl text-black font-bold leading-tight uppercase tracking-tight relative z-10">
                    {study.approach}
                  </p>
                </div>
              </FadeInUp>

              {/* Technical Execution */}
              <FadeInUp className="space-y-6 md:space-y-10">
                <div className="flex items-center gap-4 md:gap-6">
                   <div className="w-12 h-12 md:w-16 md:h-16 bg-neo-muted neo-border flex items-center justify-center text-black shrink-0 neo-shadow-sm">
                      <Terminal className="w-6 h-6 md:w-8 md:h-8" strokeWidth={3} />
                  </div>
                  <h2 className="text-2xl md:text-6xl font-black text-black uppercase tracking-tighter">Hardened Stack</h2>
                </div>
                <div className="flex flex-wrap gap-2 md:gap-4">
                  {study.stack.map(tech => (
                    <div key={tech} className="px-4 py-2 md:px-8 md:py-4 bg-white neo-border font-black text-black uppercase tracking-widest text-sm md:text-lg hover:bg-neo-accent hover:text-white transition-colors cursor-default neo-shadow-sm">
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
                   <div className="neo-card bg-black p-8 md:p-12 text-white relative overflow-hidden">
                      <div className="absolute top-0 right-0 p-4">
                         <Stars className="text-neo-secondary animate-pulse w-6 h-6 md:w-8 md:h-8" />
                      </div>
                      <SectionEyebrow className="bg-neo-secondary text-black shadow-none mb-8 md:mb-12 text-[10px]">THE VERDICT</SectionEyebrow>
                      <div className="space-y-8 md:space-y-12">
                         <Quote className="text-neo-accent opacity-40 shrink-0 w-12 h-12 md:w-16 md:h-16" strokeWidth={4} />
                         <p className="text-xl md:text-3xl font-black uppercase tracking-tighter leading-[1.1] italic text-pretty">
                            "{study.outcome}"
                         </p>
                         <div className="pt-8 md:pt-10 border-t-4 border-white">
                            <p className="text-[10px] font-black uppercase tracking-widest text-neo-accent mb-2">PARTNER FEEDBACK</p>
                            <p className="text-lg md:text-xl font-black uppercase tracking-tight text-white mb-2 leading-tight">"{study.testimonial}"</p>
                            <p className="text-[10px] font-black uppercase tracking-widest text-white/40">&mdash; {study.testimonialAuthor}</p>
                         </div>
                      </div>
                   </div>

                   {/* Final CTA */}
                   <div className="bg-neo-secondary neo-border p-8 md:p-12 text-center group relative overflow-hidden">
                      <div className="absolute inset-0 texture-grid opacity-10 pointer-events-none" />
                      <h4 className="text-2xl md:text-3xl font-black text-black uppercase tracking-tighter mb-6 md:mb-8 relative z-10 leading-tight">READY FOR SIMILAR <span className="underline decoration-4">RESULTS?</span></h4>
                      <Link href="/contact" className="neo-btn bg-black text-white w-full py-4 md:py-6 text-lg md:text-xl shadow-[4px_4px_0px_#FF6B6B] md:shadow-[8px_8px_0px_#FF6B6B] group-hover:shadow-none group-hover:translate-x-2 group-hover:translate-y-2 transition-all relative z-10">
                        GET A PROPOSAL
                      </Link>
                   </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* More Explorations */}
      <section className="py-20 md:py-32 bg-neo-bg border-y-4 border-black relative overflow-hidden">
        <div className="absolute inset-0 texture-halftone opacity-5 pointer-events-none" />
        <div className="section-container relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8 mb-12 md:mb-20 pb-8 md:pb-12 border-b-4 border-black">
            <h2 className="text-4xl md:text-[100px] font-black text-black uppercase tracking-tighter leading-[0.85] text-pretty">Recent <br className="hidden md:block"/><span className="text-neo-accent">Outputs</span></h2>
            <Link href="/work" className="neo-btn bg-white text-black text-sm md:text-lg group py-3 px-6">
              VIEW FULL CATALOG <MoveRight className="inline-block ml-2 md:ml-4 group-hover:translate-x-2 transition-transform w-5 h-5 md:w-6 md:h-6" strokeWidth={3} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
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
                  <div className="absolute inset-0 bg-black/60 group-hover:bg-black/20 transition-all duration-500 p-6 md:p-12 flex flex-col justify-end">
                    <h4 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-3 md:mb-4 drop-shadow-[2px_2px_0px_#000] md:drop-shadow-[4px_4px_0px_#000]">{related.title}</h4>
                    <p className="text-[10px] font-black uppercase tracking-widest text-neo-secondary bg-black px-2 py-0.5 md:px-3 md:py-1 neo-border w-fit">{String(related.client)}</p>
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
