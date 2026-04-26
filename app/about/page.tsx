'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { Brain, Workflow, Layers, ShieldCheck, BarChart3, Globe, MoveRight, CalendarCheck } from 'lucide-react'
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
      
      {/* Hero */}
      <section className="pt-32 md:pt-44 pb-20 md:pb-32 relative overflow-hidden">
        <div className="section-container text-center mb-12 md:mb-24 relative z-10">
          <span className="inline-block bg-neo-accent border-2 border-black px-3 py-1 text-[10px] md:text-xs font-black uppercase tracking-widest text-white shadow-[2px_2px_0px_0px_#000] mb-6">ABOUT BRYLCODES</span>
          <h1 className="text-4xl md:text-[80px] font-black text-black leading-[0.9] md:leading-none mb-6 md:mb-8 uppercase tracking-tighter">
            An AI <span className="bg-neo-secondary px-2 md:px-4">Agency</span> Built Different
          </h1>
          <p className="text-lg md:text-2xl text-black max-w-3xl mx-auto font-bold leading-tight uppercase tracking-tight">
            We founded BrylCodes to bridge the gap between cutting-edge AI and real business outcomes. No hype — just intelligent systems that work.
          </p>
        </div>
        
        {/* Story + Image */}
        <div className="section-container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
            <FadeInUp className="space-y-8">
              <h2 className="text-3xl md:text-6xl font-black text-black leading-[0.9] md:leading-none uppercase tracking-tighter">
                From engineering <span className="text-neo-accent italic underline decoration-4 decoration-black underline-offset-4 md:underline-offset-8">excellence</span> to AI mastery.
              </h2>
              
              <div className="space-y-6 text-base md:text-lg text-black font-bold leading-tight uppercase tracking-tight">
                <p>
                  With 6+ years of battle-tested experience across government platforms, enterprise startups, and high-growth SaaS companies, we've built the engineering foundation that makes our AI solutions reliable, scalable, and production-ready.
                </p>
                <p>
                  Our agency combines deep full-stack expertise (Next.js, Node.js, Python) with cutting-edge AI capabilities — from LLM integrations and RAG architectures to autonomous agent systems and workflow automation.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/contact" className="neo-btn bg-neo-accent text-white text-center py-4 px-8">
                  START A PROJECT <MoveRight className="inline-block ml-2 w-5 h-5" strokeWidth={3} />
                </Link>
                <a href="https://cal.com/brylcodes/30min" target="_blank" rel="noopener noreferrer" className="neo-btn bg-white text-black flex items-center justify-center gap-2 py-4 px-8">
                  <CalendarCheck className="w-5 h-5" strokeWidth={3} /> BOOK A SYNC
                </a>
              </div>
            </FadeInUp>
            
            <div className="relative aspect-square p-2 md:p-8 mt-12 lg:mt-0">
              <div className="absolute inset-0 bg-neo-muted neo-border -rotate-2 md:-rotate-3 neo-shadow-sm" />
              <div className="absolute inset-0 bg-neo-secondary neo-border rotate-2 md:rotate-3 flex items-center justify-center neo-shadow-md overflow-hidden">
                 <Image 
                    src="/my.png" 
                    alt="BrylCodes — AI Development Agency Founder" 
                    fill 
                    className="object-cover grayscale contrast-110" 
                 />
              </div>
              <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-neo-accent text-white px-4 py-3 md:px-6 md:py-4 neo-border neo-shadow-sm rotate-6 z-20">
                <span className="text-3xl md:text-4xl font-black block text-white drop-shadow-[2px_2px_0px_#000]">6+</span>
                <span className="text-[8px] md:text-[10px] font-black uppercase tracking-widest leading-none">Years Expertise</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 md:py-32 bg-white border-y-4 border-black relative overflow-hidden">
        <div className="section-container">
          <span className="inline-block bg-neo-secondary border-2 border-black px-3 py-1 text-xs font-black uppercase tracking-widest shadow-[2px_2px_0px_0px_#000] mb-6">OUR CAPABILITIES</span>
          <h2 className="text-3xl md:text-7xl font-black text-black leading-[0.9] mb-12 md:mb-20 uppercase tracking-tighter">
            What We <span className="bg-neo-secondary px-2">Build</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {[
              { icon: Brain, title: 'Custom AI Agents', desc: 'Autonomous agents with LLM reasoning, RAG memory, and multi-step task execution for complex business workflows.' },
              { icon: Workflow, title: 'Workflow Automation', desc: 'End-to-end automation with n8n, Make.com, and custom pipelines that eliminate manual processes at scale.' },
              { icon: Layers, title: 'Full-Stack + AI Apps', desc: 'Production-grade Next.js applications with embedded AI intelligence, real-time processing, and cloud infrastructure.' },
              { icon: ShieldCheck, title: 'AI Chatbots', desc: 'Intelligent conversational agents for WhatsApp, Slack, Discord, and Telegram with context-aware responses.' },
              { icon: BarChart3, title: 'Data & Analytics', desc: 'AI-powered analytics dashboards, B2B lead intelligence, and automated reporting pipelines.' },
              { icon: Globe, title: 'API Integrations', desc: 'Seamless connections between your existing tools with custom middleware and intelligent data routing.' }
            ].map((item, i) => (
              <FadeInUp key={i} delay={i * 0.1} className="neo-card bg-white p-8 md:p-10 group">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-neo-bg neo-border flex items-center justify-center mb-6 group-hover:bg-neo-accent transition-colors duration-100 neo-shadow-sm group-hover:translate-x-[2px] group-hover:translate-y-[2px] group-hover:shadow-none">
                  <item.icon className="text-black group-hover:text-white transition-colors duration-100 w-7 h-7 md:w-8 md:h-8" strokeWidth={3} />
                </div>
                <h4 className="text-xl md:text-2xl font-black text-black mb-3 uppercase tracking-tight leading-none">{item.title}</h4>
                <p className="text-sm md:text-base text-black font-bold leading-tight uppercase tracking-tight">{item.desc}</p>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 md:py-32 bg-neo-bg border-b-4 border-black relative overflow-hidden">
        <div className="section-container">
          <span className="inline-block bg-neo-accent text-white border-2 border-black px-3 py-1 text-xs font-black uppercase tracking-widest shadow-[2px_2px_0px_0px_#000] mb-6">THE FOUNDER</span>
          <h2 className="text-3xl md:text-7xl font-black text-black leading-[0.9] mb-12 md:mb-16 uppercase tracking-tighter">
            Led by <span className="bg-neo-secondary px-2">Experience</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
            <div className="space-y-6">
              <p className="text-base md:text-xl text-black font-bold leading-tight uppercase tracking-tight">
                BrylCodes is led by Shubham Kushwah, a full-stack engineer with 6+ years of experience building production systems for government platforms, enterprise SaaS, and high-growth startups.
              </p>
              <p className="text-base md:text-xl text-black font-bold leading-tight uppercase tracking-tight">
                His engineering journey spans Nippon Data Systems (government-scale React platforms), Ensaar Global (microservices architecture & SSR/SSG engines), and numerous AI automation projects for global clients.
              </p>
            </div>
            
            <div className="space-y-6 py-6 md:py-8 border-y-4 border-l-0 md:border-l-4 border-black border-dashed md:pl-12">
              {[
                { title: 'NIPPON DATA', detail: 'Accessible, WCAG-compliant government platform engineering.' },
                { title: 'ENSAAR GLOBAL', detail: 'Microservices, RESTful APIs, and SSR/SSG architecture.' },
                { title: '50+ PROJECTS', detail: 'AI chatbots, automation workflows, and full-stack applications.' },
                { title: '10M+ USERS', detail: 'Systems serving millions across enterprise and consumer products.' }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 md:gap-6 items-start group">
                  <div className="w-3 h-3 bg-neo-accent neo-border shrink-0 mt-1.5" />
                  <div>
                    <span className="font-black text-black text-base md:text-lg uppercase tracking-tighter leading-none block mb-1">{item.title}</span>
                    <span className="text-black/60 font-bold text-xs md:text-sm uppercase tracking-tight leading-tight group-hover:text-black transition-colors">{item.detail}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
