'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

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

export default function ProcessPage() {
  return (
    <main className="min-h-screen bg-neo-bg texture-grid overflow-x-hidden">
      <Navbar />
      
      <section className="pt-32 md:pt-44 pb-20 md:pb-32 relative overflow-hidden">
        <div className="section-container text-center mb-12 md:mb-24 relative z-10">
          <span className="inline-block bg-neo-accent border-2 border-black px-3 py-1 text-[10px] md:text-xs font-black uppercase tracking-widest text-white shadow-[2px_2px_0px_0px_#000] mb-6">Execution Strategy</span>
          <h1 className="text-4xl md:text-[90px] font-black text-black leading-[0.9] md:leading-none mb-6 md:mb-8 uppercase tracking-tighter text-pretty">
            The <span className="bg-neo-secondary px-2 md:px-4">Protocol</span>
          </h1>
          <p className="text-lg md:text-2xl text-black max-w-2xl mx-auto font-bold leading-tight uppercase tracking-tight">
            Production-grade reliability from architect to deployment.
          </p>
        </div>
        
        <div className="section-container relative z-10">
          <div className="space-y-8 md:space-y-16 relative">
            {[
              { 
                step: '01', 
                title: 'Discovery & Strategy', 
                duration: '1–2 WEEKS', 
                desc: 'Mapping business goals and defining a clear delivery roadmap with measurable milestones.' 
              },
              { 
                step: '02', 
                title: 'UX & System Design', 
                duration: '2–3 WEEKS', 
                desc: 'Blueprints and architecture reviews before a single line of production code is written.' 
              },
              { 
                step: '03', 
                title: 'Build & Integration', 
                duration: '4–6 WEEKS', 
                desc: 'Modular, auditable development with weekly production-ready reviews and parallel sprints.' 
              },
              { 
                step: '04', 
                title: 'QA & Hardening', 
                duration: '1–2 WEEKS', 
                desc: 'Rigorous testing, performance benchmarking, security audits, and 95%+ code coverage.' 
              },
              { 
                step: '05', 
                title: 'Launch & Support', 
                duration: 'ONGOING', 
                desc: 'Zero-downtime deployment. Post-launch monitoring and dedicated expert support.' 
              }
            ].map((item, i) => (
              <FadeInUp key={i} className={cn("flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-start", i % 2 !== 0 && "md:flex-row-reverse")}>
                <div className="w-16 h-16 md:w-24 md:h-24 bg-neo-secondary neo-border flex items-center justify-center text-2xl md:text-4xl font-black text-black shrink-0 z-10 neo-shadow-sm rotate-6">
                  {item.step}
                </div>
                <div className={cn("flex-1 p-6 md:p-12 bg-white neo-border neo-shadow-md w-full", i % 2 !== 0 ? "md:text-right" : "text-left")}>
                  <div className={cn("flex flex-col md:flex-row md:items-end gap-2 md:gap-4 mb-4", i % 2 !== 0 && "md:flex-row-reverse")}>
                    <h4 className="text-2xl md:text-4xl font-black text-black uppercase tracking-tight leading-none">{item.title}</h4>
                    <span className="text-[10px] md:text-sm font-black text-neo-accent uppercase tracking-widest leading-none">{item.duration}</span>
                  </div>
                  <p className="text-base md:text-xl text-black font-bold leading-tight max-w-xl inline-block uppercase tracking-tight">
                    {item.desc}
                  </p>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
