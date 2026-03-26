'use client'

import React from 'react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Briefcase, Calendar, MapPin, Stars, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const experiences = [
  {
    title: 'Front End Developer',
    company: 'Nippon Data Systems',
    period: 'DEC 2023 — PRESENT',
    location: 'Noida, India',
    description: 'Engineered responsive, accessible (WCAG compliant) front-end solutions for large-scale government platforms. I collaborate with cross-functional teams to deliver secure, scalable features while optimizing rendering performance and boosting Lighthouse scores.',
    tags: ['React', 'Next.js', 'Accessibility', 'Performance'],
    color: 'bg-neo-accent'
  },
  {
    title: 'Full Stack Developer',
    company: 'Ensaar Global Private Limited',
    period: 'MAR 2021 — APR 2023',
    location: 'Noida, India',
    description: 'Architected and optimized RESTful APIs and integrated them with Angular front-ends. I implemented microservices architecture to enhance system reliability and delivered high-performance SSR/SSG solutions boosting SEO and load speeds.',
    tags: ['Angular', 'Node.js', 'Microservices', 'SSR'],
    color: 'bg-neo-secondary'
  },
  {
    title: 'Web Developer',
    company: 'Round Pay',
    period: 'AUG 2019 — MAY 2020',
    location: 'Lucknow, India',
    description: 'Developed high-conversion e-commerce websites utilizing WordPress and custom JavaScript. I enhanced real-time data visualization and reduced page load times via lazy loading and CDN integration for optimized user journeys.',
    tags: ['WordPress', 'jQuery', 'E-commerce', 'CDN'],
    color: 'bg-neo-muted'
  }
]

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-neo-bg texture-grid">
      <Navbar />
      
      <section className="pt-44 pb-32">
        <div className="section-container text-center mb-24">
          <span className="inline-block bg-neo-accent border-2 border-black px-3 py-1 text-xs font-black uppercase tracking-widest text-white shadow-[2px_2px_0px_0px_#000] mb-6">CAREER LOG</span>
          <h1 className="text-5xl md:text-[90px] font-black text-black leading-none mb-8 uppercase tracking-tighter">
            Professional <span className="bg-neo-secondary px-4">Journey</span>
          </h1>
          <p className="text-2xl text-black max-w-2xl mx-auto font-bold leading-tight uppercase tracking-tight">
            Engineering excellence across government platforms, global enterprises, and high-growth startups.
          </p>
        </div>

        <div className="section-container max-w-5xl mx-auto">
          <div className="relative space-y-16">
            {/* Timeline Line */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-black hidden md:block" />

            {experiences.map((exp, i) => (
              <div key={i} className={cn(
                "relative flex flex-col md:flex-row items-center gap-12",
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              )}>
                {/* Connector Node */}
                <div className="absolute left-1/2 -translate-x-1/2 w-12 h-12 bg-white neo-border hidden md:flex items-center justify-center z-10 rotate-45 shadow-[4px_4px_0px_0px_#000]">
                   <Stars className="-rotate-45" size={24} strokeWidth={3} />
                </div>

                {/* Content Card */}
                <div className="w-full md:w-1/2 group">
                  <div className="neo-card bg-white p-10 hover:translate-x-2 transition-transform h-full">
                    <div className="flex justify-between items-start mb-6 border-b-4 border-black pb-6">
                       <div>
                          <h3 className="text-3xl font-black text-black uppercase tracking-tighter leading-none mb-2">{exp.title}</h3>
                          <p className="text-neo-accent font-black uppercase tracking-widest text-sm italic">{exp.company}</p>
                       </div>
                       <div className={cn("p-2 neo-border rotate-12 group-hover:rotate-0 transition-transform", exp.color)}>
                          <Briefcase size={24} strokeWidth={3} />
                       </div>
                    </div>

                    <div className="flex flex-wrap gap-4 mb-8">
                       <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-black/60">
                          <Calendar size={14} strokeWidth={3} /> {exp.period}
                       </div>
                       <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-black/60">
                          <MapPin size={14} strokeWidth={3} /> {exp.location}
                       </div>
                    </div>

                    <p className="text-lg text-black font-bold uppercase tracking-tight leading-tight mb-8">
                       {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                       {exp.tags.map((tag, j) => (
                         <span key={j} className="text-[10px] font-black uppercase tracking-widest bg-neo-bg px-3 py-1 neo-border shadow-[2px_2px_0px_0px_#000]">
                            {tag}
                         </span>
                       ))}
                    </div>
                  </div>
                </div>

                {/* Empty Space for layout */}
                <div className="hidden md:block w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Recall */}
      <section className="py-32 bg-black border-y-4 border-black relative overflow-hidden">
        <div className="absolute inset-0 texture-grid opacity-20 pointer-events-none" />
        <div className="section-container text-center relative z-10">
           <h2 className="text-5xl md:text-8xl font-black text-white mb-12 uppercase tracking-tighter leading-none">WANT TO <span className="text-neo-accent italic underline decoration-8 decoration-white">COLLABORATE?</span></h2>
           <div className="flex flex-wrap justify-center gap-8">
              <Link href="/contact" className="neo-btn bg-white text-black py-6 px-16 text-2xl flex items-center gap-4 group">
                 PROJECT INQUIRY <ArrowRight className="group-hover:translate-x-2 transition-transform" size={28} strokeWidth={4} />
              </Link>
           </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

import Link from 'next/link'
