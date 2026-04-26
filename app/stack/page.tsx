'use client'

import React, { useRef } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { MoveRight } from 'lucide-react'
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

const stackCategories = [
  {
    category: 'AI & LLMs',
    description: 'The intelligence layer — models, frameworks, and tools we use to build smart systems.',
    tools: [
      { name: 'OpenAI GPT', icon: 'https://img.icons8.com/ios-glyphs/30/chatgpt.png', desc: 'GPT-4o for agents, chat, and content generation' },
      { name: 'Claude', icon: 'https://img.icons8.com/fluency/48/claude-ai.png', desc: 'Anthropic Claude for safe, nuanced AI reasoning' },
      { name: 'Python', icon: 'https://img.icons8.com/color/96/python.png', desc: 'Core language for AI/ML pipelines and scripting' },
      { name: 'LangChain', icon: 'https://img.icons8.com/color/96/python.png', desc: 'Framework for building LLM-powered applications' },
    ]
  },
  {
    category: 'Automation',
    description: 'Workflow orchestration tools that connect your systems and eliminate manual tasks.',
    tools: [
      { name: 'n8n', icon: 'https://cdn.simpleicons.org/n8n/FF6D5A', desc: 'Self-hosted workflow automation with full control' },
      { name: 'Make.com', icon: 'https://cdn.simpleicons.org/make/EA3860', desc: 'Visual automation for complex multi-step workflows' },
      { name: 'Zapier', icon: 'https://img.icons8.com/color/96/zapier.png', desc: 'Quick integrations for 5000+ app connections' },
    ]
  },
  {
    category: 'Frontend',
    description: 'Modern, performant UI frameworks for building world-class user experiences.',
    tools: [
      { name: 'React', icon: 'https://img.icons8.com/color/96/react-native.png', desc: 'Component-based UI with hooks and state management' },
      { name: 'Next.js', icon: 'https://img.icons8.com/color/96/nextjs.png', desc: 'Full-stack React framework with SSR/SSG/ISR' },
      { name: 'Tailwind CSS', icon: 'https://img.icons8.com/color/48/tailwind_css.png', desc: 'Utility-first CSS for rapid, consistent styling' },
      { name: 'Framer Motion', icon: 'https://img.icons8.com/color/96/framer.png', desc: 'Production-ready animations and transitions' },
    ]
  },
  {
    category: 'Backend & APIs',
    description: 'Server-side technologies for scalable, secure business logic.',
    tools: [
      { name: 'Node.js', icon: 'https://img.icons8.com/color/96/nodejs.png', desc: 'JavaScript runtime for fast, scalable backends' },
      { name: 'NestJS', icon: 'https://img.icons8.com/color/48/nestjs.png', desc: 'Enterprise-grade Node.js framework with DI & modules' },
      { name: 'GraphQL', icon: 'https://img.icons8.com/color/96/graphql.png', desc: 'Flexible API query language for complex data needs' },
      { name: 'PostgreSQL', icon: 'https://img.icons8.com/color/96/postgreesql.png', desc: 'Advanced relational database with JSON support' },
    ]
  },
  {
    category: 'DevOps & Cloud',
    description: 'Infrastructure and deployment tools for reliable, scalable systems.',
    tools: [
      { name: 'Docker', icon: 'https://img.icons8.com/color/96/docker.png', desc: 'Containerization for consistent environments' },
      { name: 'AWS', icon: 'https://img.icons8.com/color/96/amazon-web-services.png', desc: 'Cloud infrastructure (Lambda, S3, RDS, SQS)' },
      { name: 'Vercel', icon: 'https://img.icons8.com/color/96/vercel.png', desc: 'Edge-optimized deployment for Next.js apps' },
      { name: 'Redis', icon: 'https://img.icons8.com/color/96/redis.png', desc: 'In-memory caching and real-time data structures' },
    ]
  },
]

export default function StackPage() {
  return (
    <main className="min-h-screen bg-neo-bg texture-grid overflow-x-hidden">
      <Navbar />
      
      <section className="pt-32 md:pt-44 pb-20 md:pb-32 relative overflow-hidden">
        <div className="section-container text-center mb-12 md:mb-24 relative z-10">
          <span className="inline-block bg-neo-accent border-2 border-black px-3 py-1 text-[10px] md:text-xs font-black uppercase tracking-widest text-white shadow-[2px_2px_0px_0px_#000] mb-6">Our Technology Arsenal</span>
          <h1 className="text-4xl md:text-[90px] font-black text-black leading-[0.9] md:leading-none mb-6 md:mb-8 uppercase tracking-tighter">
            The AI <span className="bg-neo-secondary px-2 md:px-4">Stack</span>
          </h1>
          <p className="text-lg md:text-2xl text-black max-w-3xl mx-auto font-bold leading-tight uppercase tracking-tight">
            We leverage best-in-class AI, automation, and engineering tools to build intelligent systems that scale.
          </p>
        </div>
        
        <div className="section-container space-y-12 md:space-y-20 relative z-10">
          {stackCategories.map((cat, i) => (
            <FadeInUp key={i} delay={i * 0.05}>
              <div className="mb-6 md:mb-10">
                <h2 className="text-2xl md:text-5xl font-black text-black uppercase tracking-tighter leading-none mb-2">{cat.category}</h2>
                <p className="text-sm md:text-base text-black/60 font-bold uppercase tracking-tight">{cat.description}</p>
              </div>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                {cat.tools.map((tool, j) => (
                  <div key={j} className="neo-card bg-white p-6 md:p-8 group flex flex-col">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center p-2 neo-border bg-white shadow-[2px_2px_0px_0px_#000] group-hover:translate-x-[2px] group-hover:translate-y-[2px] group-hover:shadow-none transition-all shrink-0">
                        <img src={tool.icon} alt={tool.name} className="w-full h-full object-contain" />
                      </div>
                      <h4 className="text-lg md:text-xl font-black text-black uppercase tracking-tight leading-tight mt-1">{tool.name}</h4>
                    </div>
                    <p className="text-xs md:text-sm text-black/70 font-bold uppercase tracking-tight leading-tight">{tool.desc}</p>
                  </div>
                ))}
              </div>
            </FadeInUp>
          ))}
        </div>

        {/* CTA */}
        <div className="section-container mt-16 md:mt-24 text-center relative z-10">
          <Link href="/contact" className="neo-btn bg-neo-accent text-white inline-flex items-center gap-3 py-4 px-10 md:py-6 md:px-16 md:text-lg group">
            BUILD WITH OUR STACK <MoveRight className="group-hover:translate-x-2 transition-transform w-5 h-5 md:w-6 md:h-6" strokeWidth={3} />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
