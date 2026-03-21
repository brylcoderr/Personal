'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MoveRight } from 'lucide-react'
import Link from 'next/link'
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

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-[#F1E9DA]">
      <Navbar />
      
      <section className="pt-44 pb-32">
        <div className="section-container mb-20 text-center">
          <span className="text-[13px] font-semibold uppercase tracking-[0.14em] text-[#541388] mb-4 block">Our Portfolio</span>
          <h1 className="text-5xl md:text-[80px] font-black text-[#2E294E] leading-tight mb-8">
            Case Studies in <span className="text-[#541388]">Success</span>
          </h1>
          <p className="text-xl text-[#2E294E]/70 max-w-2xl mx-auto font-medium leading-relaxed">
            Real engineering impact delivered for global enterprises and ambitious startups.
          </p>
        </div>
        
        <div className="section-container grid lg:grid-cols-3 gap-10">
          {[
            { 
              stat: '40%', 
              label: 'Faster Load Time', 
              name: 'Enterprise Analytics', 
              client: 'Logistics Leader', 
              desc: 'Rebuilt a data-heavy analytics dashboard with React + TypeScript, achieving sub-second TTI and handling complex real-time state.' 
            },
            { 
              stat: '70%', 
              label: 'Bounce Rate Elimination', 
              name: 'FinTech Growth', 
              client: 'FinTech Startup', 
              desc: 'Re-engineered a high-traffic landing page with SSR/SSG patterns, cutting mobile load time by 60% and tripling conversion rate.' 
            },
            { 
              stat: '95%+', 
              label: 'Code Coverage', 
              name: 'AI Discovery Hub', 
              client: 'AI Startup', 
              desc: 'Delivered a fully tested, production-hardened platform with automated CI/CD pipelines and zero critical bugs at launch.' 
            }
          ].map((caseStudy, i) => (
            <FadeInUp key={i} delay={i * 0.1} className="agency-card bg-white p-12 border border-[#541388]/5 flex flex-col items-start h-full">
               <div className="mb-8">
                  <span className="text-5xl font-black text-[#FFD400] block mb-2">{caseStudy.stat}</span>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#2E294E]/40 leading-none">{caseStudy.label}</span>
               </div>
               
               <h4 className="text-2xl font-black text-[#2E294E] mb-3">{caseStudy.name}</h4>
               <div className="px-3 py-1 bg-[#541388] text-white rounded-full text-[9px] font-black uppercase tracking-widest mb-6">
                  {caseStudy.client}
               </div>
               
               <p className="text-[#2E294E]/70 font-medium leading-relaxed flex-1">
                  {caseStudy.desc}
               </p>
               
               <Link href={`/case-studies/enterprise-ecosystem`} className="mt-10 group flex items-center gap-2 text-[#D90368] font-black uppercase tracking-widest text-[11px]">
                  Case Study <MoveRight className="group-hover:translate-x-2 transition-transform" />
               </Link>
            </FadeInUp>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}
