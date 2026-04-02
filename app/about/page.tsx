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
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.3, delay, ease: "linear" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-neo-bg texture-grid overflow-x-hidden">
      <Navbar />
      
      <section className="pt-32 md:pt-44 pb-20 md:pb-32 relative overflow-hidden">
        <div className="section-container text-center mb-12 md:mb-24 relative z-10">
          <span className="inline-block bg-neo-accent border-2 border-black px-3 py-1 text-[10px] md:text-xs font-black uppercase tracking-widest text-white shadow-[2px_2px_0px_0px_#000] mb-6">MY MISSION</span>
          <h1 className="text-4xl md:text-[80px] font-black text-black leading-[0.9] md:leading-none mb-6 md:mb-8 uppercase tracking-tighter">
            Engineering <span className="bg-neo-secondary px-2 md:px-4">Impact</span> Since 2019
          </h1>
          <p className="text-lg md:text-2xl text-black max-w-2xl mx-auto font-bold leading-tight uppercase tracking-tight">
            I founded BrylCodes to bridge the gap between architectural theory and real-world, revenue-driving production code.
          </p>
        </div>
        
        <div className="section-container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
            <FadeInUp>
              <h2 className="text-3xl md:text-7xl font-black text-black leading-[0.9] md:leading-none mb-8 md:mb-12 uppercase tracking-tighter">
                Engineering excellence as <span className="text-neo-accent italic underline decoration-4 decoration-black underline-offset-4 md:underline-offset-8">competitive</span> advantage.
              </h2>
              <div className="space-y-8 md:space-y-12">
                {[
                  { icon: Layers, title: 'Ownership Mindset', desc: 'Taking responsibility for the architectural integrity and success of your digital ecosystem.' },
                  { icon: ShieldCheck, title: 'Resilience by Design', desc: 'Secure, auditable systems prepared for high-volume enterprise production.' },
                  { icon: BarChart3, title: 'Metric-Driven Growth', desc: 'Crafted with business performance and conversion results in mind.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 md:gap-8 group">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-white neo-border flex items-center justify-center shrink-0 group-hover:bg-neo-secondary transition-colors duration-100 neo-shadow-sm group-hover:translate-x-[2px] group-hover:translate-y-[2px] group-hover:shadow-none">
                      <item.icon className="text-black w-8 h-8" strokeWidth={3} />
                    </div>
                    <div>
                      <h4 className="text-xl md:text-3xl font-black text-black mb-1 md:mb-2 uppercase tracking-tight leading-none">{item.title}</h4>
                      <p className="text-sm md:text-base text-black font-bold leading-tight uppercase tracking-tight max-w-md">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeInUp>
            
            <div className="relative aspect-square p-2 md:p-8 mt-12 lg:mt-0 overflow-hidden">
              <div className="absolute inset-0 bg-neo-muted neo-border -rotate-2 md:-rotate-3 neo-shadow-sm" />
              <div className="absolute inset-0 bg-neo-secondary neo-border rotate-2 md:rotate-3 flex items-center justify-center neo-shadow-md overflow-hidden">
                 <Image 
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000&auto=format&fit=crop" 
                    alt="Production Engineering Visualization" 
                    fill 
                    className="object-cover grayscale" 
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
