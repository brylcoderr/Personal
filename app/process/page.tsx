'use client'

import React, { useRef } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { CheckCircle2, MoveRight, CalendarCheck } from 'lucide-react'
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
          <span className="inline-block bg-neo-accent border-2 border-black px-3 py-1 text-[10px] md:text-xs font-black uppercase tracking-widest text-white shadow-[2px_2px_0px_0px_#000] mb-6">AI Development Process</span>
          <h1 className="text-4xl md:text-[90px] font-black text-black leading-[0.9] md:leading-none mb-6 md:mb-8 uppercase tracking-tighter text-pretty">
            Our AI <span className="bg-neo-secondary px-2 md:px-4">Protocol</span>
          </h1>
          <p className="text-lg md:text-2xl text-black max-w-3xl mx-auto font-bold leading-tight uppercase tracking-tight">
            From discovery to deployment — a battle-tested methodology designed specifically for AI and automation projects.
          </p>
        </div>
        
        <div className="section-container relative z-10">
          <div className="space-y-8 md:space-y-16 relative">
            {[
              { 
                step: '01', 
                title: 'AI Discovery & Scoping', 
                duration: '1–2 WEEKS', 
                desc: 'We map your business processes, identify automation opportunities, and evaluate which AI models and tools are the right fit.',
                deliverables: ['Process audit', 'AI opportunity map', 'Model selection', 'Project scope document']
              },
              { 
                step: '02', 
                title: 'Architecture & Prompt Design', 
                duration: '2–3 WEEKS', 
                desc: 'We design the system architecture — RAG pipelines, agent workflows, prompt strategies, and integration blueprints — before writing a single line of production code.',
                deliverables: ['System architecture diagram', 'Prompt engineering specs', 'Data flow mapping', 'API integration plan']
              },
              { 
                step: '03', 
                title: 'Build, Train & Iterate', 
                duration: '4–6 WEEKS', 
                desc: 'We build AI agents, automation flows, and full-stack interfaces with weekly demos. Every iteration is tested against real-world scenarios.',
                deliverables: ['Working AI prototypes', 'Weekly demo sessions', 'Automation workflows', 'Frontend interfaces']
              },
              { 
                step: '04', 
                title: 'Test & Validate', 
                duration: '1–2 WEEKS', 
                desc: 'Rigorous AI output testing — hallucination checks, edge case validation, prompt injection resistance, and end-to-end performance benchmarks.',
                deliverables: ['AI accuracy reports', 'Edge case testing', 'Security audit', 'Performance benchmarks']
              },
              { 
                step: '05', 
                title: 'Deploy & Optimize', 
                duration: 'ONGOING', 
                desc: 'Production deployment with monitoring dashboards, feedback loops, and continuous model/workflow optimization based on real usage data.',
                deliverables: ['Production deployment', 'Monitoring setup', 'Feedback loops', 'Ongoing optimization']
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
                  <p className="text-base md:text-xl text-black font-bold leading-tight max-w-xl inline-block uppercase tracking-tight mb-6">
                    {item.desc}
                  </p>
                  <div className={cn("flex flex-wrap gap-2", i % 2 !== 0 && "md:justify-end")}>
                    {item.deliverables.map((d, j) => (
                      <span key={j} className="text-[9px] md:text-[10px] font-black uppercase tracking-widest px-2 py-1 bg-neo-bg border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                        <CheckCircle2 className="inline-block w-3 h-3 mr-1 text-neo-accent" strokeWidth={3} />
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="section-container mt-16 md:mt-24 text-center relative z-10">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="neo-btn bg-neo-accent text-white inline-flex items-center gap-3 py-4 px-10 group">
              START YOUR AI PROJECT <MoveRight className="group-hover:translate-x-2 transition-transform w-5 h-5" strokeWidth={3} />
            </Link>
            <a href="https://cal.com/brylcodes/30min" target="_blank" rel="noopener noreferrer" className="neo-btn bg-white text-black inline-flex items-center gap-2 py-4 px-10">
              <CalendarCheck className="w-5 h-5" strokeWidth={3} /> BOOK A SYNC
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
