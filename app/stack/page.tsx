'use client'

import React from 'react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

export default function StackPage() {
  const stack = [
    { name: 'Next.js', icon: 'https://img.icons8.com/color/96/nextjs.png' },
    { name: 'React', icon: 'https://img.icons8.com/color/96/react-native.png' },
    { name: 'TypeScript', icon: 'https://img.icons8.com/color/96/typescript.png' },
    { name: 'Node.js', icon: 'https://img.icons8.com/color/96/nodejs.png' },
    { name: 'PostgreSQL', icon: 'https://img.icons8.com/color/96/postgreesql.png' },
    { name: 'Docker', icon: 'https://img.icons8.com/color/96/docker.png' },
    { name: 'AWS', icon: 'https://img.icons8.com/color/96/amazon-web-services.png' },
    { name: 'Tailwind', icon: 'https://img.icons8.com/color/96/tailwind-css.png' },
    { name: 'Framer', icon: 'https://img.icons8.com/color/96/framer.png' },
    { name: 'Vercel', icon: 'https://img.icons8.com/color/96/vercel.png' },
    { name: 'Redis', icon: 'https://img.icons8.com/color/96/redis.png' },
    { name: 'GraphQL', icon: 'https://img.icons8.com/color/96/graphql.png' }
  ]

  return (
    <main className="min-h-screen bg-neo-bg texture-grid overflow-x-hidden">
      <Navbar />
      
      <section className="pt-32 md:pt-44 pb-20 md:pb-32 relative overflow-hidden">
        <div className="section-container text-center mb-12 md:mb-24 relative z-10">
          <span className="inline-block bg-neo-accent border-2 border-black px-3 py-1 text-[10px] md:text-xs font-black uppercase tracking-widest text-white shadow-[2px_2px_0px_0px_#000] mb-6">Engineered for Scale</span>
          <h1 className="text-4xl md:text-[90px] font-black text-black leading-[0.9] md:leading-none mb-6 md:mb-8 uppercase tracking-tighter">
            The <span className="bg-neo-secondary px-2 md:px-4">Stack</span>
          </h1>
          <p className="text-lg md:text-2xl text-black max-w-2xl mx-auto font-bold leading-tight uppercase tracking-tight">
            I leverage best-in-class technologies to build resilient, scalable systems with architectural precision.
          </p>
        </div>
        
        <div className="section-container grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-8 lg:gap-12 relative z-10">
          {stack.map((tech) => (
            <div key={tech.name} className="neo-card bg-white p-4 md:p-8 flex items-center justify-center aspect-square group">
                <div className="relative w-16 h-16 md:w-24 md:h-24 transition-all duration-300 group-hover:scale-110">
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
