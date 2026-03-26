'use client'

import React from 'react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

export default function StackPage() {
  const stack = [
    { name: 'Next.js', icon: 'https://www.vectorlogo.zone/logos/nextjs/nextjs-icon.svg' },
    { name: 'React', icon: 'https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg' },
    { name: 'TypeScript', icon: 'https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg' },
    { name: 'Node.js', icon: 'https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg' },
    { name: 'PostgreSQL', icon: 'https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg' },
    { name: 'Docker', icon: 'https://www.vectorlogo.zone/logos/docker/docker-icon.svg' },
    { name: 'AWS', icon: 'https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg' },
    { name: 'Tailwind', icon: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg' },
    { name: 'Framer', icon: 'https://www.vectorlogo.zone/logos/framer/framer-icon.svg' },
    { name: 'Vercel', icon: 'https://www.vectorlogo.zone/logos/vercel/vercel-icon.svg' },
    { name: 'Redis', icon: 'https://www.vectorlogo.zone/logos/redis/redis-icon.svg' },
    { name: 'GraphQL', icon: 'https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg' }
  ]

  return (
    <main className="min-h-screen bg-neo-bg texture-grid">
      <Navbar />
      
      <section className="pt-44 pb-32">
        <div className="section-container text-center mb-24">
          <span className="inline-block bg-neo-accent border-2 border-black px-3 py-1 text-xs font-black uppercase tracking-widest text-white shadow-[2px_2px_0px_0px_#000] mb-6">Engineered for Scale</span>
          <h1 className="text-5xl md:text-[90px] font-black text-black leading-none mb-8 uppercase tracking-tighter">
            The <span className="bg-neo-secondary px-4">Stack</span>
          </h1>
          <p className="text-2xl text-black max-w-2xl mx-auto font-bold leading-tight uppercase tracking-tight">
            I leverage best-in-class technologies to build resilient, scalable systems with architectural precision.
          </p>
        </div>
        
        <div className="section-container grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12">
          {stack.map((tech) => (
            <div key={tech.name} className="neo-card bg-white p-8 flex items-center justify-center aspect-square group">
                <div className="relative w-24 h-24 grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-110">
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
