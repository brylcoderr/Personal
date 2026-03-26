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
          <span className="text-[13px] font-semibold uppercase tracking-[0.14em] text-[#541388] mb-4 block">Engineered for Scale</span>
          <h1 className="text-5xl md:text-[80px] font-black text-[#2E294E] leading-tight mb-8">
            The <span className="text-[#541388]">BrylCodes</span> Stack
          </h1>
          <p className="text-xl text-[#2E294E]/70 max-w-2xl mx-auto font-medium leading-relaxed">
            I leverage best-in-class technologies to build resilient, scalable systems that solve mission-critical problems with architectural precision.
          </p>
        </div>
        
        <div className="section-container grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 text-center">
          {[
            { name: 'Next.js', icon: 'https://www.vectorlogo.zone/logos/nextjs/nextjs-icon.svg' },
            { name: 'React', icon: 'https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg' },
            { name: 'TypeScript', icon: 'https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg' },
            { name: 'Node.js', icon: 'https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg' },
            { name: 'Express', icon: 'https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg' },
            { name: 'PostgreSQL', icon: 'https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg' },
            { name: 'MongoDB', icon: 'https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg' },
            { name: 'Docker', icon: 'https://www.vectorlogo.zone/logos/docker/docker-icon.svg' },
            { name: 'AWS', icon: 'https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg' },
            { name: 'Vercel', icon: 'https://www.vectorlogo.zone/logos/vercel/vercel-icon.svg' },
            { name: 'Redis', icon: 'https://www.vectorlogo.zone/logos/redis/redis-icon.svg' },
            { name: 'GraphQL', icon: 'https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg' }
          ].map((tech) => (
            <div key={tech.name} className="flex items-center justify-center p-8 transition-all duration-500 cursor-pointer hover:scale-125" title={tech.name}>
                <div className="relative w-20 h-20 md:w-24 md:h-24">
                    <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain" />
                </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}
