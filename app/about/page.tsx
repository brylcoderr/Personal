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
    <main className="min-h-screen bg-neo-bg texture-grid">
      <Navbar />
      
      <section className="pt-44 pb-32">
        <div className="section-container text-center mb-24">
          <span className="inline-block bg-neo-accent border-2 border-black px-3 py-1 text-xs font-black uppercase tracking-widest text-white shadow-[2px_2px_0px_0px_#000] mb-6">MY MISSION</span>
          <h1 className="text-5xl md:text-[80px] font-black text-black leading-none mb-8 uppercase tracking-tighter">
            Engineering <span className="bg-neo-secondary px-4">Impact</span> Since 2019
          </h1>
          <p className="text-2xl text-black max-w-2xl mx-auto font-bold leading-tight">
            I founded BrylCodes to bridge the gap between architectural theory and real-world, revenue-driving production code.
          </p>
        </div>
        
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <FadeInUp>
              <h2 className="text-4xl md:text-7xl font-black text-black leading-none mb-12 uppercase tracking-tighter">
                Engineering excellence as <span className="text-neo-accent italic underline decoration-4 decoration-black underline-offset-8">competitive</span> advantage.
              </h2>
              <div className="space-y-12">
                {[
                  { icon: Layers, title: 'Ownership Mindset', desc: 'Taking responsibility for the architectural integrity and success of your digital ecosystem.' },
                  { icon: ShieldCheck, title: 'Resilience by Design', desc: 'Secure, auditable systems prepared for high-volume enterprise production.' },
                  { icon: BarChart3, title: 'Metric-Driven Growth', desc: 'Crafted with business performance and conversion results in mind.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-8 group">
                    <div className="w-20 h-20 bg-white neo-border flex items-center justify-center shrink-0 group-hover:bg-neo-secondary transition-colors duration-100 neo-shadow-sm group-hover:translate-x-[2px] group-hover:translate-y-[2px] group-hover:shadow-none">
                      <item.icon className="text-black" size={32} strokeWidth={3} />
                    </div>
                    <div>
                      <h4 className="text-3xl font-black text-black mb-2 uppercase tracking-tight">{item.title}</h4>
                      <p className="text-black font-bold leading-none max-w-md">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeInUp>
            
            <div className="relative aspect-square p-8">
              <div className="absolute inset-0 bg-neo-muted neo-border -rotate-3 neo-shadow-sm" />
              <div className="absolute inset-0 bg-neo-secondary neo-border rotate-3 flex items-center justify-center neo-shadow-md overflow-hidden">
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
