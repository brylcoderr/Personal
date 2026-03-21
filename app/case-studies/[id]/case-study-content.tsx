'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { 
  ArrowLeft, 
  Terminal, 
  FileCode, 
  Github, 
  Globe, 
  Calendar, 
  User, 
  Layers, 
  BarChart3,
  ChevronRight,
  Info
} from 'lucide-react'
import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import caseStudies from '@/src/data/case-studies.json'
import { cn } from '@/lib/utils'

interface CaseStudyContentProps {
  study: (typeof caseStudies)[0]
}

export function CaseStudyContent({ study }: CaseStudyContentProps) {
  return (
    <main className="min-h-screen bg-[#F1E9DA] selection:bg-[#541388]/10 font-sans">
      <Navbar />

      {/* Hero Section - Professional White Background */}
      <section className="pt-32 pb-24 bg-white border-b border-[#541388]/5">
        <div className="section-container">
          <div className="mb-12">
            <Link 
              href="/work" 
              className="inline-flex items-center gap-2 text-sm font-bold text-[#541388] hover:text-[#D90368] transition-colors group"
            >
              <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
              Back to Solutions
            </Link>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {study.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-[#541388]/5 text-[#541388] rounded-full text-[10px] font-black uppercase tracking-widest border border-[#541388]/10">
                      {tag}
                    </span>
                  ))}
                </div>
                <h1 className="text-5xl md:text-7xl font-black tracking-tight text-[#2E294E] leading-[0.9]">
                  {study.title}
                </h1>
                <p className="text-xl text-[#2E294E]/60 font-medium">
                  {String(study.client)} &bull; {new Date(study.date).getFullYear()}
                </p>
              </div>

              <div className="flex flex-wrap gap-12 pt-4">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#541388]/40 mb-2">Duration</p>
                  <p className="text-lg font-bold text-[#2E294E]">{study.timeline}</p>
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#541388]/40 mb-2">Model</p>
                  <p className="text-lg font-bold text-[#2E294E]">{study.role}</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative aspect-square rounded-4xl overflow-hidden shadow-2xl border-8 border-[#F1E9DA]"
            >
              <Image
                src={study.coverImage || "/placeholder.svg"}
                alt={study.title}
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content - Cream Background */}
      <section className="py-24">
        <div className="section-container">
          <div className="grid lg:grid-cols-12 gap-16">
            
            {/* Left Column: Details */}
            <div className="lg:col-span-8 space-y-24">
              
              {/* Challenge */}
              <div className="space-y-8">
                <h2 className="text-3xl font-black text-[#2E294E] flex items-center gap-4">
                  <span className="w-12 h-px bg-[#D90368]" /> 
                  Project Overview
                </h2>
                <p className="text-2xl md:text-3xl text-[#2E294E]/80 leading-relaxed font-medium">
                  {study.challenge}
                </p>
              </div>

              {/* Approach */}
              <div className="space-y-8">
                <h2 className="text-3xl font-black text-[#2E294E] flex items-center gap-4">
                  <span className="w-12 h-px bg-[#D90368]" /> 
                  Strategic Solution
                </h2>
                <div className="p-10 bg-white rounded-[2.5rem] shadow-xl border border-white relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#541388]/5 rounded-bl-[100%] transition-transform group-hover:scale-110" />
                  <p className="text-xl text-[#2E294E]/70 leading-relaxed relative z-10">
                    {study.approach}
                  </p>
                </div>
              </div>

              {/* Tech Stack */}
              <div className="space-y-8">
                <h2 className="text-3xl font-black text-[#2E294E] flex items-center gap-4">
                  <span className="w-12 h-px bg-[#D90368]" /> 
                  Technology Stack
                </h2>
                <div className="flex flex-wrap gap-4">
                  {study.stack.map(tech => (
                    <div key={tech} className="px-6 py-3 bg-white rounded-2xl shadow-sm border border-[#541388]/5 font-bold text-[#541388] hover:border-[#D90368] transition-colors">
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Success Metrics */}
            <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit space-y-8">
              <div className="p-8 bg-[#541388] rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden">
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
                <h3 className="text-xl font-black uppercase tracking-widest mb-10 opacity-60">Impact Analysis</h3>
                
                <div className="space-y-10">
                  {study.metrics.map((metric, idx) => (
                    <div key={idx} className="space-y-2 group">
                      <div className="text-4xl font-black text-[#FFD400] transition-transform group-hover:translate-x-1 inline-block">
                        {metric.value}
                      </div>
                      <div className="text-[10px] font-black uppercase tracking-[0.2em] text-white/50">
                        {metric.label}
                      </div>
                      <div className="w-full h-px bg-white/10 mt-4" />
                    </div>
                  ))}
                </div>

                <div className="mt-12 pt-8 border-t border-white/10 font-bold text-white/80 italic leading-relaxed">
                  "{study.outcome}"
                </div>
              </div>

              {/* Contact Callout */}
              <div className="p-8 bg-[#D90368] rounded-[2.5rem] text-white text-center space-y-6">
                <h4 className="text-2xl font-black">Ready to scale?</h4>
                <Link href="/contact" className="w-full py-4 bg-white text-[#D90368] rounded-2xl font-black uppercase tracking-widest text-sm hover:scale-105 transition-transform block text-center">
                  Get a Proposal
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Projects */}
      <section className="py-32 bg-white/50">
        <div className="section-container">
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-4xl font-black text-[#2E294E]">Recent Explorations</h2>
            <Link href="/work" className="text-[#541388] font-bold hover:text-[#D90368] transition-colors flex items-center gap-2">
              View All <ChevronRight size={18} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies
              .filter((cs) => cs.id !== study.id)
              .slice(0, 2)
              .map((related) => (
                <Link key={related.id} href={`/case-studies/${related.id}`} className="group relative aspect-video rounded-4xl overflow-hidden">
                  <Image
                    src={related.coverImage || "/placeholder.svg"}
                    alt={related.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-[#541388]/80 opacity-0 group-hover:opacity-100 transition-all duration-500 p-12 flex flex-col justify-end">
                    <h4 className="text-3xl font-black text-white mb-2">{related.title}</h4>
                    <p className="text-white/60 font-bold">{String(related.client)}</p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
