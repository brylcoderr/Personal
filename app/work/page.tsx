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
    <main className="min-h-screen bg-neo-bg texture-grid">
      <Navbar />
      
      <section className="pt-44 pb-32">
        <div className="section-container mb-24 text-center">
          <span className="inline-block bg-neo-accent border-2 border-black px-3 py-1 text-xs font-black uppercase tracking-widest text-white shadow-[2px_2px_0px_0px_#000] mb-6">Execution & Impact</span>
          <h1 className="text-5xl md:text-[90px] font-black text-black leading-none mb-8 uppercase tracking-tighter">
            Selected <span className="bg-neo-secondary px-4">Works</span>
          </h1>
          <p className="text-2xl text-black max-w-2xl mx-auto font-bold leading-tight uppercase tracking-tight">
            Engineering results that scale. A showcase of architectural precision and technical mastery.
          </p>
        </div>
        
        <div className="section-container grid lg:grid-cols-3 gap-12">
          {[
            { 
              stat: '40%', 
              label: 'FASTER LOAD', 
              name: 'Enterprise Analytics', 
              client: 'Logistics Leader', 
              color: 'bg-neo-accent'
            },
            { 
              stat: '70%', 
              label: 'CONVERSION UP', 
              name: 'FinTech Growth', 
              client: 'FinTech Startup', 
              color: 'bg-neo-secondary'
            },
            { 
              stat: '95%+', 
              label: 'CODE COVERAGE', 
              name: 'AI Discovery Hub', 
              client: 'AI Startup', 
              color: 'bg-neo-muted'
            }
          ].map((caseStudy, i) => (
            <FadeInUp key={i} delay={i * 0.1} className="neo-card bg-white flex flex-col items-start h-full group">
               <div className={cn("w-full py-16 neo-border-b flex flex-col items-center justify-center border-b-4 border-black", caseStudy.color)}>
                  <span className="text-7xl font-black text-black block mb-2">{caseStudy.stat}</span>
                  <span className="text-sm font-black uppercase tracking-widest text-black">{caseStudy.label}</span>
               </div>
               
               <div className="p-10 flex flex-col flex-1">
                  <h4 className="text-3xl font-black text-black mb-3 uppercase tracking-tight leading-none">{caseStudy.name}</h4>
                  <div className="inline-block px-3 py-1 bg-black text-white font-black uppercase tracking-widest text-[10px] mb-6">
                     CLIENT: {caseStudy.client}
                  </div>
                  
                  <p className="text-black font-bold leading-tight flex-1">
                     I build high-performance ecosystems with audited security and scalable architectures.
                  </p>
                  
                  <Link href={`/case-studies/enterprise-ecosystem`} className="neo-btn bg-white text-black mt-10 w-full text-center group flex items-center justify-center gap-2">
                     READ CASE STUDY <MoveRight className="group-hover:translate-x-2 transition-transform" strokeWidth={3} />
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
