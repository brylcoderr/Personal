'use client'

import React from 'react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

export default function StackPage() {
  return (
    <main className="min-h-screen bg-[#F1E9DA]">
      <Navbar />
      
      <section className="pt-44 pb-32">
        <div className="section-container text-center mb-20">
          <span className="text-[13px] font-semibold uppercase tracking-[0.14em] text-[#541388] mb-4 block">The Engine Room</span>
          <h1 className="text-5xl md:text-[80px] font-black text-[#2E294E] leading-tight mb-8">
            Built for <span className="text-[#541388]">Performance</span>
          </h1>
          <p className="text-xl text-[#2E294E]/70 max-w-2xl mx-auto font-medium leading-relaxed">
            Platform-agnostic by design. We leverage best-in-class technologies to build resilient, scalable systems.
          </p>
        </div>
        
        <div className="section-container grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 text-center">
          {[
            { name: 'Next.js', type: 'Frontend' },
            { name: 'React', type: 'Frontend' },
            { name: 'TypeScript', type: 'Language' },
            { name: 'Node.js', type: 'Backend' },
            { name: 'Express', type: 'Backend' },
            { name: 'PostgreSQL', type: 'Database' },
            { name: 'MongoDB', type: 'Database' },
            { name: 'Docker', type: 'DevOps' },
            { name: 'AWS', type: 'Cloud' },
            { name: 'Vercel', type: 'Deployment' },
            { name: 'Redis', type: 'Caching' },
            { name: 'GraphQL', type: 'API' }
          ].map((tech) => (
            <div key={tech.name} className="bg-white p-8 rounded-2xl shadow-sm border border-[#541388]/5 flex flex-col items-center justify-center gap-4 hover:border-[#D90368] transition-all cursor-default group">
              <span className="text-xl font-black text-[#2E294E] group-hover:text-[#D90368] transition-colors">{tech.name}</span>
              <span className="text-[9px] font-black uppercase tracking-widest text-[#541388]/40">{tech.type}</span>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}
