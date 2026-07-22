'use client'

import React from 'react'
import { MoveRight } from 'lucide-react'
import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { FadeInUp } from '@/components/fade-in-up'
import { cn } from '@/lib/utils'

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-neo-bg texture-grid overflow-x-hidden">
      <Navbar />
      
      <section className="pt-32 md:pt-44 pb-20 md:pb-32 relative overflow-hidden">
        <div className="section-container mb-12 md:mb-24 text-center relative z-10">
          <span className="inline-block bg-neo-accent border-2 border-black px-3 py-1 text-[10px] md:text-xs font-black uppercase tracking-widest text-white shadow-[2px_2px_0px_0px_#000] mb-6">Execution & Impact</span>
          <h1 className="text-4xl md:text-[90px] font-black text-black leading-[0.9] md:leading-none mb-6 md:mb-8 uppercase tracking-tighter">
            Selected <span className="bg-neo-secondary px-2 md:px-4">Works</span>
          </h1>
          <p className="text-lg md:text-2xl text-black max-w-2xl mx-auto font-bold leading-tight uppercase tracking-tight">
            AI-powered systems and engineering results that scale. A showcase of what we deliver.
          </p>
        </div>
        
        <div className="section-container grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 relative z-10">
          {[
            { 
              id: 'nippon-data-portal',
              stat: '30%', 
              label: 'PERFORMANCE UP', 
              name: 'Government Platform', 
              client: 'Nippon Data Systems', 
              color: 'bg-neo-accent',
              desc: 'Engineered responsive, accessible front-end solutions for large-scale government platforms, significantly boosting Lighthouse scores.'
            },
            { 
              id: 'ensaar-microservices',
              stat: '40%', 
              label: 'RELIABILITY UP', 
              name: 'Microservices Arch.', 
              client: 'Ensaar Global', 
              color: 'bg-neo-secondary',
              desc: 'Architected RESTful APIs and transitioned to a microservices ecosystem, enhancing system reliability and SEO load speeds via SSR.'
            },
            { 
              id: 'round-pay-ecommerce',
              stat: '50%', 
              label: 'SALES INCREASE', 
              name: 'High-Conversion Web', 
              client: 'Round Pay', 
              color: 'bg-neo-muted',
              desc: 'Developed a high-conversion e-commerce platform with custom JS and CDN integrations, drastically reducing load times and boosting sales.'
            }
          ].map((caseStudy, i) => (
            <FadeInUp key={i} delay={i * 0.1} className="neo-card bg-white flex flex-col items-start h-full group">
               <div className={cn("w-full py-12 md:py-16 neo-border-b flex flex-col items-center justify-center border-b-4 border-black", caseStudy.color)}>
                  <span className="text-6xl md:text-7xl font-black text-black block mb-2 drop-shadow-[3px_3px_0px_#fff] md:drop-shadow-[4px_4px_0px_#fff]">{caseStudy.stat}</span>
                  <span className="text-[10px] md:text-sm font-black uppercase tracking-widest text-black underline decoration-4 underline-offset-4">{caseStudy.label}</span>
               </div>
               
               <div className="p-8 md:p-10 flex flex-col flex-1 w-full">
                  <h4 className="text-2xl md:text-3xl font-black text-black mb-3 uppercase tracking-tight leading-tight">{caseStudy.name}</h4>
                  <div className="inline-block px-3 py-1 bg-black text-white font-black uppercase tracking-widest text-[9px] md:text-[10px] mb-6 self-start">
                     CLIENT: {caseStudy.client}
                  </div>
                  
                  <p className="text-sm md:text-base text-black font-bold leading-tight flex-1 uppercase tracking-tight">
                     {caseStudy.desc}
                  </p>
                  
                  <Link href={`/case-studies/${caseStudy.id}`} className="neo-btn bg-white text-black mt-8 md:mt-10 w-full text-center group flex items-center justify-center gap-2 py-3 text-sm md:text-base">
                     READ CASE STUDY <MoveRight className="group-hover:translate-x-2 transition-transform w-4 h-4 md:w-5 md:h-5" strokeWidth={3} />
                  </Link>
               </div>
            </FadeInUp>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}
