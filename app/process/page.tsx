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
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function ProcessPage() {
  return (
    <main className="min-h-screen bg-[#F1E9DA]">
      <Navbar />
      
      <section className="pt-44 pb-32">
        <div className="section-container text-center mb-20">
          <span className="text-[13px] font-semibold uppercase tracking-[0.14em] text-[#541388] mb-4 block">Methodology</span>
          <h1 className="text-5xl md:text-[80px] font-black text-[#2E294E] leading-tight mb-8">
            Engineered for <span className="text-[#541388]">Precision</span>
          </h1>
          <p className="text-xl text-[#2E294E]/70 max-w-2xl mx-auto font-medium leading-relaxed">
            Our deployment protocol is built for production-grade reliability, ensuring every launch is a success.
          </p>
        </div>
        
        <div className="section-container relative">
          <div className="absolute left-[30px] md:left-1/2 top-0 bottom-0 w-px bg-[#541388]/10 hidden md:block" />
          
          <div className="space-y-24 relative">
            {[
              { 
                step: '01', 
                title: 'Discovery & Strategy', 
                duration: '1–2 Weeks', 
                desc: 'We map your business goals, technical requirements, and define a clear delivery roadmap with measurable milestones.' 
              },
              { 
                step: '02', 
                title: 'UX & System Design', 
                duration: '2–3 Weeks', 
                desc: 'Wireframes, architecture blueprints, and high-fidelity UI designs reviewed and approved before a single line is written.' 
              },
              { 
                step: '03', 
                title: 'Build & Integration', 
                duration: '4–6 Weeks', 
                desc: 'Modular, auditable development with weekly progress reviews. Frontend, backend, and integrations delivered in parallel sprints.' 
              },
              { 
                step: '04', 
                title: 'QA & Hardening', 
                duration: '1–2 Weeks', 
                desc: 'Rigorous testing across devices and edge cases. Performance benchmarking, security audits, and 95%+ code coverage.' 
              },
              { 
                step: '05', 
                title: 'Launch & Support', 
                duration: 'Ongoing', 
                desc: 'Zero-downtime deployment. Post-launch monitoring, performance tracking, and dedicated LTS support.' 
              }
            ].map((item, i) => (
              <FadeInUp key={i} className={cn("flex flex-col md:flex-row gap-12 items-center", i % 2 !== 0 && "md:flex-row-reverse")}>
                <div className="w-16 h-16 bg-[#FFD400] rounded-full flex items-center justify-center text-xl font-black text-[#541388] shrink-0 z-10 scale-125 border-4 border-white shadow-lg">
                  {item.step}
                </div>
                <div className={cn("flex-1 p-10 bg-white rounded-[2.5rem] border border-[#541388]/5 shadow-xl", i % 2 !== 0 ? "text-right" : "text-left")}>
                  <div className={cn("flex items-end gap-4 mb-4", i % 2 !== 0 && "flex-row-reverse")}>
                    <h4 className="text-3xl font-black text-[#2E294E]">{item.title}</h4>
                    <span className="text-sm font-bold text-[#541388] opacity-60 pb-1">{item.duration}</span>
                  </div>
                  <p className="text-lg text-[#2E294E]/70 font-medium leading-relaxed max-w-xl inline-block">
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
