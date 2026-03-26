'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { Layers, ShieldCheck, BarChart3, Globe } from 'lucide-react'
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

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#F1E9DA]">
      <Navbar />
      
      <section className="pt-44 pb-32">
        <div className="section-container text-center mb-24">
          <span className="text-[13px] font-semibold uppercase tracking-[0.14em] text-[#541388] mb-4 block">My Mission</span>
          <h1 className="text-5xl md:text-[80px] font-black text-[#2E294E] leading-tight mb-8">
            Engineering <span className="text-[#541388]">Impact</span> Since 2019
          </h1>
          <p className="text-xl text-[#2E294E]/70 max-w-2xl mx-auto font-medium leading-relaxed">
            I founded <span className="text-[#541388] font-bold">BrylCodes</span> to bridge the gap between high-level architectural theory and real-world, revenue-driving production code.
          </p>
        </div>
        
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <FadeInUp>
              <h2 className="text-4xl md:text-5xl font-black text-[#2E294E] leading-tight mb-12">
                Engineering excellence as a competitive advantage.
              </h2>
              <div className="space-y-12">
                {[
                  { icon: Layers, title: 'Ownership Mindset', desc: 'I take personal responsibility for the architectural integrity and success of your digital ecosystem.' },
                  { icon: ShieldCheck, title: 'Resilience by Design', desc: 'I build systems that are secure, auditable, and prepared for high-volume enterprise production.' },
                  { icon: BarChart3, title: 'Metric-Driven Growth', desc: 'Every line of code I write is crafted with business performance and conversion in mind.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="w-14 h-14 bg-[#541388]/5 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-[#541388] transition-colors duration-500">
                      <item.icon className="text-[#541388] group-hover:text-white transition-colors duration-500" size={28} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-[#2E294E] mb-2">{item.title}</h4>
                      <p className="text-[#2E294E]/60 font-medium leading-relaxed max-w-md">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeInUp>
            
            <div className="relative aspect-square">
              <div className="absolute inset-0 bg-white rounded-[4rem] -rotate-3 border border-[#541388]/5 shadow-2xl" />
              <div className="absolute inset-0 bg-[#541388] rounded-[4rem] rotate-3 flex items-center justify-center shadow-2xl overflow-hidden">
                 <Image 
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000&auto=format&fit=crop" 
                    alt="Production Engineering Visualization" 
                    fill 
                    className="object-cover opacity-60" 
                 />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
