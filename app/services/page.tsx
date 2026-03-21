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

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#F1E9DA]">
      <Navbar />
      
      <section className="pt-44 pb-32">
        <div className="section-container text-center mb-24">
          <span className="text-[13px] font-semibold uppercase tracking-[0.14em] text-[#541388] mb-4 block">Our Expertise</span>
          <h1 className="text-5xl md:text-[80px] font-black text-[#2E294E] leading-tight mb-8">
            World-Class <span className="text-[#541388]">Engineering</span> Services
          </h1>
          <p className="text-xl text-[#2E294E]/70 max-w-2xl mx-auto font-medium leading-relaxed">
            Discover how BrylCodes solves complex technical challenges to drive measurable business outcomes.
          </p>
        </div>
        
        <div className="section-container grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { 
              outcome: 'Speed to Market', 
              title: 'Full-Stack Web Development', 
              desc: 'High-performance applications built for conversion and growth.',
              metrics: ['Sub-1s Load Time', '98 Lighthouse', 'SEO-Ready']
            },
            { 
              outcome: 'Reliability', 
              title: 'API & Backend Engineering', 
              desc: 'Robust infrastructure serving millions of data points securely.',
              metrics: ['99.9% Uptime', 'Low Latency', 'Secure Auth']
            },
            { 
              outcome: 'Conversion', 
              title: 'React / Next.js Frontends', 
              desc: 'Premium digital experiences that turn visitors into loyal customers.',
              metrics: ['Pixel-Perfect UI', 'WCAG 2.1', 'Fast TTI']
            },
            { 
              outcome: 'Scalability', 
              title: 'System Architecture', 
              desc: 'Designing distributed systems that scale as your business grows.',
              metrics: ['Microservices', 'Event-Driven', 'Cloud-Native']
            },
            { 
              outcome: 'User Retention', 
              title: 'Mobile App Development', 
              desc: 'Native-feel performance across iOS and Android ecosystems.',
              metrics: ['Flutter / RN', 'Smooth UX', 'App Store Ready']
            },
            { 
              outcome: 'Revenue', 
              title: 'eCommerce Platforms', 
              desc: 'Scalable shop environments designed for high-volume transactions.',
              metrics: ['25% AOV Lift', 'Smart Catalog', 'Secure Checkout']
            }
          ].map((service, i) => (
            <FadeInUp key={i} delay={i * 0.1} className="agency-card bg-white p-10 flex flex-col h-full border border-[#541388]/5">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#541388] opacity-60 mb-6 flex items-center gap-2">
                Outcome: {service.outcome}
              </span>
              <h4 className="text-2xl font-black text-[#2E294E] mb-4">{service.title}</h4>
              <p className="text-[#2E294E]/60 font-medium mb-10 flex-1">{service.desc}</p>
              
              <div className="flex flex-wrap gap-2 mb-10">
                {service.metrics.map((m, j) => (
                  <span key={j} className="text-[9px] font-black uppercase tracking-widest px-3 py-1 bg-[#FFD400] text-[#2E294E] rounded-full">
                    {m}
                  </span>
                ))}
              </div>
              
              <Link href="/contact" className="text-sm font-black uppercase tracking-widest text-[#D90368] group flex items-center gap-2 underline underline-offset-4 decoration-2 decoration-[#D90368]/20">
                View Details <MoveRight className="group-hover:translate-x-2 transition-transform" size={16} />
              </Link>
            </FadeInUp>
          ))}
        </div>
      </section>

      {/* Call to Action for Services */}
      <section className="py-32 bg-[#541388]">
        <div className="section-container text-center">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8">Ready to architect your success?</h2>
            <Link href="/contact" className="px-12 py-5 bg-[#D90368] text-white rounded-lg font-black uppercase tracking-widest hover:scale-105 transition-transform inline-block">
                Get a Strategy Session
            </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
