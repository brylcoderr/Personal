'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MoveRight } from 'lucide-react'
import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { cn } from '@/lib/utils'

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

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-neo-bg texture-grid overflow-x-hidden">
      <Navbar />
      
      <section className="pt-32 md:pt-44 pb-20 md:pb-32 relative overflow-hidden">
        <div className="section-container mb-12 md:mb-24 text-center relative z-10">
          <span className="inline-block bg-neo-accent border-2 border-black px-3 py-1 text-[10px] md:text-xs font-black uppercase tracking-widest text-white shadow-[2px_2px_0px_0px_#000] mb-6">Execution & Impact</span>
          <h1 className="text-4xl md:text-[90px] font-black text-black leading-[0.9] md:leading-none mb-6 md:mb-8 uppercase tracking-tighter">
            Selected <span className="bg-neo-secondary px-2 md:px-4">Works</span>
          </h1>
          <p className="text-lg md:text-2xl text-black max-w-2xl mx-auto font-bold leading-tight uppercase tracking-tight">
            Engineering results that scale. A showcase of architectural precision and technical mastery.
          </p>
        </div>
        
        <div className="section-container grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 relative z-10">
          {[
            { 
              id: 'enterprise-ecosystem',
              stat: '40%', 
              label: 'FASTER LOAD', 
              name: 'Enterprise Analytics', 
              client: 'Logistics Leader', 
              color: 'bg-neo-accent'
            },
            { 
              id: 'growth-acceleration',
              stat: '70%', 
              label: 'CONVERSION UP', 
              name: 'FinTech Growth', 
              client: 'FinTech Startup', 
              color: 'bg-neo-secondary'
            },
            { 
              id: 'ai-transformation',
              stat: '95%+', 
              label: 'CODE COVERAGE', 
              name: 'AI Discovery Hub', 
              client: 'AI Startup', 
              color: 'bg-neo-muted'
            }
          ].map((caseStudy, i) => (
            <FadeInUp key={i} delay={i * 0.1} className="neo-card bg-white flex flex-col items-start h-full group">
               <div className={cn("w-full py-12 md:py-16 neo-border-b flex flex-col items-center justify-center border-b-4 border-black", caseStudy.color)}>
                  <span className="text-6xl md:text-7xl font-black text-black block mb-2 drop-shadow-[3px_3px_0px_#fff] md:drop-shadow-[4px_4px_0px_#fff]">{caseStudy.stat}</span>
                  <span className="text-[10px] md:text-sm font-black uppercase tracking-widest text-black underline decoration-4 underline-offset-4">{caseStudy.label}</span>
               </div>
               
               <div className="p-8 md:p-10 flex flex-col flex-1 w-full">
                  <h4 className="text-2xl md:text-3xl font-black text-black mb-3 uppercase tracking-tight leading-tight">{caseStudy.name}</h4>
                  <div className="inline-block px-3 py-1 bg-black text-white font-black uppercase tracking-widest text-[9px] md:text-[10px] mb-6 self-start">
                     CLIENT: {caseStudy.client}
                  </div>
                  
                  <p className="text-sm md:text-base text-black font-bold leading-tight flex-1 uppercase tracking-tight">
                     I build high-performance ecosystems with audited security and scalable architectures.
                  </p>
                  
                  <Link href={`/case-studies/${caseStudy.id}`} className="neo-btn bg-white text-black mt-8 md:mt-10 w-full text-center group flex items-center justify-center gap-2 py-3 text-sm md:text-base">
                     READ CASE STUDY <MoveRight className="group-hover:translate-x-2 transition-transform w-4 h-4 md:w-5 md:h-5" strokeWidth={3} />
                  </Link>
               </div>
            </FadeInUp>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}
