'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import {
  Globe,
  Layers,
  BarChart3,
  ShieldCheck,
  MoveRight,
  Quote,
  Zap,
  Scissors,
  Activity,
  Split,
  Terminal,
  Database,
  Stars,
  GitFork,
  Menu,
  X,
  Brain,
  Bot,
  Workflow,
  CalendarCheck
} from 'lucide-react'
import useEmblaCarousel from 'embla-carousel-react'
import { cn } from '@/lib/utils'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ContactForm } from '@/components/contact-form'
import AutoScroll from 'embla-carousel-auto-scroll'
import { services } from '@/lib/services-data'
import { Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip'
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// SECTION COMPONENTS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

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

const SectionEyebrow = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <span className={cn("inline-block bg-neo-secondary border-2 border-black px-3 py-1 text-xs font-black uppercase tracking-widest shadow-[2px_2px_0px_0px_#000] mb-6", className)}>
    {children}
  </span>
)

// 2. HERO SECTION
const Hero = () => {
  return (
    <section className="pt-32 md:pt-44 pb-20 md:pb-32 bg-neo-bg relative overflow-hidden texture-grid">
      {/* Repositioned Defensive/Decorative Badge */}
      <div className="absolute top-1/2 -translate-y-1/2 -right-24 md:-right-44 w-[300px] h-[300px] md:w-[700px] md:h-[700px] pointer-events-none select-none z-0 opacity-10 md:opacity-40 overflow-hidden">
        {/* Halftone Texture Ring */}
        <div className="absolute inset-0 bg-neo-accent/5 rounded-full border-4 border-black border-dashed animate-spin-slow" />

        {/* Main Rotating Badge */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] md:w-[500px] md:h-[500px] animate-spin-slow">
          <svg viewBox="0 0 200 200" className="w-full h-full fill-black font-black uppercase text-[15px] tracking-[0.2em]">
            <path
              id="textPath"
              d="M 100, 100 m -80, 0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0"
              fill="none"
            />
            <text>
              <textPath href="#textPath" startOffset="0%">
                BRYLCODES • AI AGENCY • AUTOMATION • BRYLCODES • AI AGENCY • AUTOMATION •
              </textPath>
            </text>
          </svg>

          {/* Central Core */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 md:w-56 md:h-56 bg-neo-secondary neo-border rounded-full flex items-center justify-center neo-shadow-sm rotate-12">
            <span className="text-2xl md:text-6xl text-black">★</span>
          </div>
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] md:w-[550px] md:h-[550px] bg-white/5 neo-border border-dashed rounded-full -z-10" />
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-4xl space-y-6 md:space-y-8">
          <FadeInUp>
            <div className="flex items-center gap-4 mb-6 md:mb-8">
              <SectionEyebrow className="mb-0 text-[10px] md:text-xs">BRYLCODES ★ AI DEVELOPMENT AGENCY</SectionEyebrow>
              <span className="hidden md:block h-1 flex-1 bg-black" />
            </div>
            <h1 className="text-4xl md:text-9xl font-black text-black leading-[0.9] md:leading-[0.85] tracking-tighter mb-4 md:mb-8 uppercase text-pretty">
              We Build <span className="text-neo-accent">AI-Powered</span> Systems
            </h1>
            <p className="text-base md:text-2xl text-black max-w-2xl font-bold leading-tight mb-8 md:mb-12 text-pretty uppercase tracking-tight">
              From custom AI agents to full-stack automation — we engineer intelligent systems that <span className="underline decoration-4 decoration-neo-secondary underline-offset-4">drive real business outcomes</span>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 pt-4">
              <Link href="/contact" className="neo-btn bg-neo-accent text-white shadow-neo-md hover:shadow-neo-lg text-center py-4 px-8 md:py-6 md:px-12 md:scale-110">
                START A PROJECT
              </Link>
              <a href="https://cal.com/brylcodes/30min" target="_blank" rel="noopener noreferrer" className="neo-btn bg-white text-black shadow-neo-md hover:shadow-neo-lg flex items-center justify-center gap-2 py-4 px-8 md:py-6 md:px-12">
                BOOK A SYNC <CalendarCheck className="w-5 h-5 md:w-6 md:h-6" strokeWidth={3} />
              </a>
            </div>
          </FadeInUp>
        </div>
      </div>
    </section>
  )
}

// 2.1 BIO CORE
const AgencyBio = () => (
  <section className="py-20 md:py-24 bg-white border-y-4 border-black relative overflow-hidden" id="about">
    <div className="absolute inset-0 texture-halftone opacity-5 pointer-events-none" />
    <div className="section-container relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
        <div className="relative group p-2 md:p-4 mb-8 md:mb-0 overflow-hidden">
          <div className="absolute inset-0 bg-neo-secondary translate-x-2 translate-y-2 md:translate-x-4 md:translate-y-4 neo-border -z-10" />
          <div className="relative aspect-4/3 bg-black neo-border overflow-hidden neo-shadow-lg group">
            <Image
              src="/my.png"
              alt="Shubham Kushwah - Principal Engineer"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover grayscale contrast-125 brightness-90 transition-all duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/10 mix-blend-overlay pointer-events-none" />
          </div>
          <div className="absolute -top-4 md:-top-6 -right-4 md:-right-6 bg-neo-accent text-white px-4 py-3 md:px-6 md:py-4 neo-border neo-shadow-sm rotate-6">
            <span className="text-3xl md:text-4xl font-black block text-white drop-shadow-[2px_2px_0px_#000]">6+</span>
            <span className="text-[8px] md:text-[10px] font-black uppercase tracking-widest leading-none">Years Expertise</span>
          </div>
        </div>

        <FadeInUp className="space-y-6 md:space-y-8">
          <div className="space-y-4">
            <SectionEyebrow className="bg-neo-muted text-[10px] md:text-xs">THE AI STUDIO</SectionEyebrow>
            <h2 className="text-3xl md:text-7xl font-black text-black leading-[0.9] uppercase tracking-tighter text-pretty">
              AI <span className="bg-neo-secondary px-2 italic">Automation</span> Experts
            </h2>
            <p className="text-base md:text-xl text-black font-bold leading-tight uppercase tracking-tight max-w-xl">
              We specialize in building AI-powered systems, intelligent agents, and end-to-end automation workflows. Our team brings enterprise-grade engineering precision to every AI solution we deliver.
            </p>
          </div>

          <div className="space-y-4 md:space-y-6 py-6 md:py-8 border-y-4 border-black border-dashed">
            {[
              { title: 'AI AGENTS', detail: 'Custom LLM-powered agents for complex business workflows.' },
              { title: 'AUTOMATION', detail: 'End-to-end n8n, Make.com & custom pipeline architecture.' },
              { title: 'FULL-STACK', detail: 'Production-grade Next.js, Node.js & cloud infrastructure.' }
            ].map((item, i) => (
              <div key={i} className="flex gap-4 md:gap-6 items-start group">
                <div className="w-3 h-3 bg-neo-accent neo-border shrink-0 mt-1.5" />
                <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-4">
                  <span className="font-black text-black text-base md:text-xl uppercase tracking-tighter leading-none shrink-0 md:w-32">{item.title}</span>
                  <span className="text-black/60 font-bold text-xs md:text-base uppercase tracking-tight leading-tight group-hover:text-black transition-colors">{item.detail}</span>
                </div>
              </div>
            ))}
          </div>

          <Link href="/about" className="neo-btn bg-black text-white inline-flex items-center gap-4 group shadow-[4px_4px_0px_#FFD93D] w-full md:w-auto justify-center py-4 md:py-5">
            ABOUT THE AGENCY <MoveRight className="group-hover:translate-x-2 transition-transform w-5 h-5 md:w-6 md:h-6" strokeWidth={4} />
          </Link>
        </FadeInUp>
      </div>
    </div>
  </section>
)

// 2.5 PROJECT SHOWCASE
const ProjectShowcase = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: 'start' }, [
    AutoScroll({ speed: 1, stopOnInteraction: false, stopOnMouseEnter: true }) as any
  ])

  const projects = [
    { title: "Enterprise ERP Ecosystem", category: "Data Visualization", src: '/images/case-studies/saas-dashboard-cover.png' },
    { title: "FinTech Performance Page", category: "Growth & Optimization", src: '/images/case-studies/saas-landing-cover.png' },
    { title: "AI Agent Controller", category: "AI & Machine Learning", src: '/images/case-studies/ai-landing-page-cover.png' },
    { title: "Creative Portfolio Engine", category: "Next.js Architecture", src: '/images/case-studies/photography-banner-cover.png' },
    { title: "Katachi Studio Platform", category: "Headless eCommerce", src: '/images/case-studies/katachi-studio-cover.png' }
  ]

  return (
    <section className="py-20 md:py-24 bg-neo-bg border-y-4 border-black relative overflow-hidden">
      <div className="absolute inset-0 texture-grid opacity-10 pointer-events-none" />
      <div className="section-container mb-8 md:mb-16 relative z-10">
        <SectionEyebrow className="bg-neo-accent text-white">Production Benchmarks</SectionEyebrow>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <h2 className="text-4xl md:text-7xl font-black text-black uppercase tracking-tighter max-w-2xl leading-[0.9]">Modern Engineering <span className="bg-neo-secondary px-2">at Scale</span></h2>
          <Link href="/work" className="neo-btn bg-white text-black w-full md:w-auto text-center">
            FULL CATALOG <MoveRight size={14} className="inline-block ml-2" />
          </Link>
        </div>
      </div>

      <div className="embla overflow-hidden cursor-grab active:cursor-grabbing px-4 relative z-10" ref={emblaRef}>
        <div className="embla__container flex py-6 md:py-10 -ml-6 md:-ml-12">
          {projects.map((project, i) => (
            <div key={i} className="embla__slide flex-[0_0_88%] md:flex-[0_0_50%] lg:flex-[0_0_40%] pl-6 md:pl-12">
              <div className="neo-card bg-white group overflow-hidden">
                <div className="relative aspect-video bg-black border-b-4 border-black overflow-hidden">
                  <Image
                    src={project.src}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 88vw, (max-width: 1024px) 50vw, 40vw"
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors flex items-center justify-center p-4 md:p-8">
                    <h3 className="text-xl md:text-3xl font-black text-white uppercase tracking-tighter drop-shadow-[2px_2px_0px_#000] md:drop-shadow-[4px_4px_0px_#000] leading-tight text-center">{project.title}</h3>
                  </div>
                </div>
                <div className="p-6 md:p-10 flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-4 md:mb-6">
                    <span className="bg-neo-accent text-white px-2 py-0.5 md:px-3 md:py-1 neo-border text-[8px] md:text-[9px] font-black uppercase tracking-widest">{project.category}</span>
                    <span className="text-[8px] md:text-[9px] font-black uppercase tracking-widest text-black/40">V2.4.0</span>
                  </div>
                  <Link href="/work" className="neo-btn bg-black text-white text-center flex items-center justify-center gap-2 group/link py-2 md:py-3 text-xs md:text-sm">
                    REVEAL CASE STUDY <MoveRight className="group-hover/link:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// 3. STATS BAR
const StatsBar = () => (
  <section className="bg-neo-accent py-12 md:py-16 border-y-4 border-black relative overflow-hidden">
    <div className="absolute inset-0 texture-grid opacity-20 pointer-events-none" />
    <div className="section-container relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 text-center items-center">
        {[
          { num: '50+', label: 'AI Projects Delivered' },
          { num: '6+', label: 'Years in AI & Automation' },
          { num: '10M+', label: 'Users Impacted' }
        ].map((stat, i) => (
          <div key={i} className="relative group py-6 md:py-8 bg-white neo-border neo-shadow-sm md:rotate-2 hover:rotate-0 transition-transform">
            <h3 className="text-4xl md:text-8xl font-black text-black drop-shadow-[2px_2px_0px_#FFD93D] md:drop-shadow-[6px_6px_0px_#FFD93D] mb-1 md:mb-2">{stat.num}</h3>
            <p className="text-black font-black uppercase tracking-widest text-[10px] md:text-sm">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)

const Mission = () => (
  <section className="py-20 md:py-32 bg-neo-bg texture-grid border-y-4 border-black relative overflow-hidden" id="mission">
    <div className="section-container">
      <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
        <FadeInUp>
          <SectionEyebrow className="bg-neo-accent text-white text-[10px] md:text-xs">WHY BRYLCODES</SectionEyebrow>
          <h2 className="text-3xl md:text-8xl font-black text-black leading-[0.9] mb-6 md:mb-8 uppercase tracking-tighter text-pretty">
            AI-First <span className="text-neo-accent underline decoration-4 md:decoration-8 decoration-black underline-offset-2 md:underline-offset-8">Engineering</span>
          </h2>
          <p className="text-base md:text-2xl text-black font-bold leading-tight mb-8 md:mb-16 uppercase tracking-tight">
            We don't just build software — we engineer intelligent systems that automate, learn, and scale with your business.
          </p>

          <div className="grid md:grid-cols-1 gap-6 md:gap-12">
            {[
              { icon: Brain, title: 'Custom AI Agents', desc: 'LLM-powered agents with RAG, memory & multi-step reasoning' },
              { icon: Workflow, title: 'Workflow Automation', desc: 'n8n, Make.com & custom pipelines eliminating manual processes' },
              { icon: Layers, title: 'Full-Stack + AI', desc: 'Production-grade apps with embedded intelligence & real-time AI' }
            ].map((item, i) => (
              <div key={i} className="flex gap-4 md:gap-8 group">
                <div className="w-12 h-12 md:w-20 md:h-20 bg-white neo-border flex items-center justify-center shrink-0 group-hover:bg-neo-accent transition-colors duration-100 neo-shadow-sm group-hover:translate-x-[2px] group-hover:translate-y-[2px] group-hover:shadow-none">
                  <item.icon className="text-black group-hover:text-white transition-colors duration-100 w-6 h-6 md:w-10 md:h-10" strokeWidth={3} />
                </div>
                <div>
                  <h4 className="text-lg md:text-3xl font-black text-black mb-1 uppercase tracking-tight leading-none">{item.title}</h4>
                  <p className="text-[10px] md:text-lg text-black font-bold leading-tight md:leading-none uppercase tracking-tight md:tracking-tighter">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeInUp>

        <div className="relative aspect-square p-2 md:p-6 mt-12 md:mt-0 overflow-hidden">
          <div className="absolute inset-0 bg-neo-secondary neo-border -rotate-2 md:-rotate-3" />
          <div className="absolute inset-0 bg-neo-muted neo-border rotate-2 md:rotate-3 flex items-center justify-center shadow-neo-md overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop"
              alt="Global Data Visualization"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover grayscale"
            />
            <div className="absolute inset-0 bg-neo-secondary/20 mix-blend-multiply" />
          </div>
        </div>
      </div>
    </div>
  </section>
)

const TechnicalMastery = () => (
  <section className="py-20 md:py-24 bg-white border-y-4 border-black relative overflow-hidden" id="stack">
    <div className="absolute inset-0 texture-halftone opacity-5 pointer-events-none" />
    <div className="section-container relative z-10">
      <div className="text-center mb-12 md:mb-20">
        <SectionEyebrow className="bg-neo-accent text-white">TECH ARSENAL</SectionEyebrow>
        <h2 className="text-4xl md:text-8xl font-black text-black uppercase tracking-tighter leading-[0.9]">Hardened for <span className="bg-neo-secondary px-2">Scale</span></h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8 lg:gap-10">
        {[
          {
            category: 'FRONTEND',
            skills: [
              { name: 'React', icon: 'https://img.icons8.com/color/96/react-native.png' },
              { name: 'Next.js', icon: 'https://img.icons8.com/color/96/nextjs.png' },
              { name: 'Tailwind', icon: 'https://img.icons8.com/color/48/tailwind_css.png' },
              { name: 'Redux', icon: 'https://img.icons8.com/color/96/redux.png' },
              { name: 'MUI', icon: 'https://img.icons8.com/color/96/material-ui.png' }
            ]
          },
          {
            category: 'AUTOMATION',
            skills: [
              { name: 'OpenAI', icon: 'https://img.icons8.com/ios-glyphs/30/chatgpt.png' },
              { name: 'Claude', icon: 'https://img.icons8.com/fluency/48/claude-ai.png' },
              { name: 'n8n', icon: 'https://cdn.simpleicons.org/n8n/FF6D5A' },
              { name: 'Make.com', icon: 'https://cdn.simpleicons.org/make/EA3860' },
              { name: 'Python', icon: 'https://img.icons8.com/color/96/python.png' }
            ]
          },
          {
            category: 'BACKEND',
            skills: [
              { name: 'Node.js', icon: 'https://img.icons8.com/color/96/nodejs.png' },
              { name: 'NestJS', icon: 'https://img.icons8.com/color/48/nestjs.png' },
              { name: 'GraphQL', icon: 'https://img.icons8.com/color/96/graphql.png' },
              { name: 'Terminal', icon: 'https://img.icons8.com/3d-fluency/94/console.png' },
              { name: 'Socket.io', icon: 'https://cdn.simpleicons.org/socketdotio/black' }
            ]
          },
          {
            category: 'PERFORMANCE',
            skills: [
              { name: 'Load Balancing', icon: 'https://img.icons8.com/color/96/load-balancer.png' },
              { name: 'Optimization', icon: 'https://img.icons8.com/external-jumpicon-solid-gradient-ayub-irawan/32/external-Optimization-crisis-management-jumpicon-(solid-gradient)-jumpicon-solid-gradient-ayub-irawan.png' },
              { name: 'Monitoring', icon: 'https://img.icons8.com/color/96/activity.png' },
              { name: 'Caching', icon: 'https://img.icons8.com/color/96/layers.png' },
              { name: 'Security', icon: 'https://img.icons8.com/fluency/48/cyber-security.png' }
            ]
          },
          {
            category: 'DEVOPS',
            skills: [
              { name: 'Docker', icon: 'https://img.icons8.com/color/96/docker.png' },
              { name: 'AWS', icon: 'https://img.icons8.com/color/96/amazon-web-services.png' },
              { name: 'Vercel', icon: 'https://img.icons8.com/color/96/vercel.png' },
              { name: 'Git', icon: 'https://img.icons8.com/color/96/git.png' },
              { name: 'Databases', icon: 'https://img.icons8.com/color/96/database.png' }
            ]
          }
        ].map((item, i) => (
          <FadeInUp key={i} delay={i * 0.1} className="neo-card p-6 md:p-10 group">
            <h4 className="text-black font-black uppercase tracking-tight text-lg md:text-xl mb-6 md:mb-8 pb-3 md:pb-4 border-b-4 border-black group-hover:bg-neo-secondary transition-colors leading-none">{item.category}</h4>
            <div className="flex flex-wrap gap-4 md:gap-6 mt-2">
              {item.skills.map((skill, j) => (
                <Tooltip key={j}>
                  <TooltipTrigger asChild>
                    <div className="relative group/skill cursor-pointer">
                      <div className="relative w-10 h-10 md:w-12 md:h-12 flex items-center justify-center p-1.5 md:p-2 neo-border bg-white shadow-[2px_2px_0px_0px_#000] md:shadow-[3px_3px_0px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          className="w-full h-full object-contain transition-all duration-300"
                        />
                      </div>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent sideOffset={10} className="bg-neo-secondary text-black neo-border border-black shadow-[4px_4px_0px_0px_#000] font-black uppercase tracking-widest text-[10px] rounded-none px-3 py-1.5 z-50">
                    {skill.name}
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
          </FadeInUp>
        ))}
      </div>
    </div>
  </section>
)

const Services = () => {
  const [emblaRef] = useEmblaCarousel({ loop: false, align: 'start' })

  return (
    <section className="py-20 md:py-32 bg-neo-bg border-b-4 border-black border-t-4 md:border-t-0 relative overflow-hidden" id="services">
      <div className="section-container text-center mb-12 md:mb-24">
        <SectionEyebrow className="bg-neo-secondary text-[10px] md:text-xs">CAPABILITIES</SectionEyebrow>
        <h2 className="text-3xl md:text-9xl font-black text-black mb-6 md:mb-12 uppercase tracking-tighter leading-[0.9]">Service Offerings</h2>
        <Link href="/services" className="neo-btn bg-neo-accent text-white inline-flex items-center justify-center gap-2 md:scale-110 w-full sm:w-auto py-4 px-8">
          EXPLORE ALL SOLUTIONS <MoveRight className="w-5 h-5 md:w-6 md:h-6" strokeWidth={3} />
        </Link>
      </div>

      <div className="section-container relative z-20">
        <div className="embla overflow-hidden cursor-grab active:cursor-grabbing md:cursor-default" ref={emblaRef}>
          <div className="embla__container flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 py-6">
            {services.slice(0, 6).map((service, i) => (
              <FadeInUp
                key={i}
                delay={i * 0.1}
                className="embla__slide flex-[0_0_85%] sm:flex-[0_0_60%] md:flex-none neo-card flex flex-col h-full bg-white group min-h-[450px] md:min-h-0"
              >
                <div className="bg-neo-muted border-b-4 border-black p-4">
                  <span className="text-[10px] font-black uppercase tracking-widest text-black">
                    OUTCOME: {service.outcome}
                  </span>
                </div>
                <div className="p-8 md:p-10 flex flex-col flex-1">
                  <h4 className="text-2xl md:text-3xl font-black text-black mb-4 uppercase tracking-tight leading-tight group-hover:text-neo-accent transition-colors">{service.title}</h4>
                  <p className="text-base text-black font-bold mb-8 flex-1 line-clamp-3 uppercase tracking-tight leading-tight">{service.description}</p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {service.metrics.map((m, j) => (
                      <span key={j} className="text-[10px] font-black uppercase tracking-widest px-3 py-1 bg-neo-secondary border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                        {m}
                      </span>
                    ))}
                  </div>

                  <Link href={`/services/${service.slug}`} className="neo-btn bg-black text-white text-center group flex items-center justify-center gap-2 mt-auto">
                    VIEW SOLUTION <MoveRight className="group-hover:translate-x-2 transition-transform w-4 h-4 md:w-5 md:h-5" strokeWidth={3} />
                  </Link>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const Process = () => (
  <section className="py-20 md:py-32 bg-white relative overflow-hidden" id="process">
    <div className="section-container mb-16 md:mb-24 text-center">
      <SectionEyebrow className="bg-neo-muted">METHODOLOGY</SectionEyebrow>
      <h2 className="text-4xl md:text-9xl font-black text-black uppercase tracking-tighter leading-[0.9]">The Process</h2>
    </div>

    <div className="section-container relative z-10">
      <div className="space-y-8 md:space-y-16 relative">
        {[
          { step: '01', title: 'AI Discovery & Scoping', duration: '1–2 Weeks', desc: 'Mapping your business processes, identifying AI opportunities, and selecting the right models and tools.' },
          { step: '02', title: 'Architecture & Design', duration: '2–3 Weeks', desc: 'Designing RAG pipelines, agent architectures, prompt strategies, and system blueprints before writing code.' },
          { step: '03', title: 'Build & Train', duration: '4–6 Weeks', desc: 'Building AI agents, automation flows, and full-stack interfaces with weekly demos and iterative refinement.' },
          { step: '04', title: 'Test & Validate', duration: '1–2 Weeks', desc: 'Rigorous AI output testing, hallucination checks, edge case validation, and performance benchmarking.' },
          { step: '05', title: 'Deploy & Optimize', duration: 'Ongoing', desc: 'Production deployment with monitoring, feedback loops, and continuous model/workflow optimization.' }
        ].map((item, i) => (
          <FadeInUp key={i} className={cn("flex flex-col md:flex-row gap-6 md:gap-12 items-center", i % 2 !== 0 && "md:flex-row-reverse")}>
            <div className="w-16 h-16 md:w-32 md:h-32 bg-neo-secondary neo-border flex items-center justify-center text-xl md:text-5xl font-black text-black shrink-0 z-10 neo-shadow-sm rotate-6 overflow-hidden">
              {item.step}
            </div>
            <div className={cn("flex-1 p-6 md:p-12 bg-neo-bg neo-border neo-shadow-md overflow-hidden w-full", i % 2 !== 0 ? "md:text-right" : "text-left")}>
              <div className={cn("flex flex-col md:flex-row md:items-end gap-1 md:gap-4 mb-3 md:mb-6", i % 2 !== 0 && "md:flex-row-reverse")}>
                <h4 className="text-xl md:text-5xl font-black text-black uppercase tracking-tight leading-tight md:leading-none">{item.title}</h4>
                <span className="text-[10px] md:text-xs font-black text-neo-accent uppercase tracking-widest leading-none">{item.duration}</span>
              </div>
              <p className="text-sm md:text-2xl text-black font-bold leading-tight max-w-2xl inline-block uppercase tracking-tight text-pretty">
                {item.desc}
              </p>
            </div>
          </FadeInUp>
        ))}
      </div>
    </div>
  </section>
)

const TechStack = () => (
  <section className="py-0 bg-black overflow-hidden border-y-4 border-black" id="stack">
    <div className="bg-black py-12 overflow-hidden relative">
      <div className="flex animate-marquee whitespace-nowrap font-black text-neo-secondary text-5xl uppercase tracking-widest items-center">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="flex items-center gap-16 px-8 shrink-0">
            <span className="shrink-0 flex items-center gap-4">★ AI AUTOMATION STACK <Stars className="text-neo-accent" size={24} /></span>
            <div className="flex gap-16 items-center shrink-0">
              {[
                { name: 'Next.js', icon: 'https://www.vectorlogo.zone/logos/nextjs/nextjs-icon.svg' },
                { name: 'TypeScript', icon: 'https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg' },
                { name: 'Node.js', icon: 'https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg' },
                { name: 'React', icon: 'https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg' }
              ].map((tech) => (
                <img key={tech.name} src={tech.icon} alt={tech.name} className="h-16 w-auto invert grayscale shrink-0 opacity-80" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

const CaseStudies = () => {
  const [emblaRef] = useEmblaCarousel({ loop: false, align: 'start' })

  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden" id="work">
      <div className="section-container mb-8 md:mb-24 relative z-10">
        <SectionEyebrow className="bg-neo-accent text-white text-[10px] md:text-xs">CASE STUDIES</SectionEyebrow>
        <h2 className="text-3xl md:text-[100px] font-black text-black uppercase tracking-tighter mb-4 leading-[0.9]">Real Impact</h2>
      </div>

      <div className="section-container relative z-20">
        <div className="embla overflow-hidden cursor-grab active:cursor-grabbing md:cursor-default" ref={emblaRef}>
          <div className="embla__container flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 py-6">
            {[
              { id: 'enterprise-ecosystem', stat: '40%', label: 'FASTER LOAD', name: 'Enterprise Analytics', client: 'Logistics', color: 'bg-neo-accent' },
              { id: 'growth-acceleration', stat: '70%', label: 'CONVERSION UP', name: 'FinTech Growth', client: 'FinTech', color: 'bg-neo-secondary' },
              { id: 'ai-transformation', stat: '95%+', label: 'COVERAGE', name: 'AI Discovery', client: 'AI Startup', color: 'bg-neo-muted' }
            ].map((caseStudy, i) => (
              <FadeInUp
                key={i}
                delay={i * 0.1}
                className="embla__slide flex-[0_0_85%] sm:flex-[0_0_65%] md:flex-none neo-card bg-white flex flex-col items-start h-full group min-h-[480px] md:min-h-0"
              >
                <div className={cn("w-full py-12 md:py-16 neo-border-b flex flex-col items-center justify-center border-b-4 border-black", caseStudy.color)}>
                  <span className="text-6xl md:text-8xl font-black text-black block mb-2 drop-shadow-[3px_3px_0px_#fff] md:drop-shadow-[4px_4px_0px_#fff]">{caseStudy.stat}</span>
                  <span className="text-xs md:text-sm font-black uppercase tracking-widest text-black underline decoration-4 underline-offset-4">{caseStudy.label}</span>
                </div>

                <div className="p-8 md:p-12 flex flex-col flex-1 w-full">
                  <h4 className="text-2xl md:text-4xl font-black text-black mb-4 uppercase tracking-tight leading-tight">{caseStudy.name}</h4>
                  <div className="inline-block px-3 py-1 bg-black text-white font-black uppercase tracking-widest text-[9px] md:text-[10px] mb-6 md:mb-8 self-start">
                    CLIENT: {caseStudy.client}
                  </div>

                  <p className="text-base md:text-xl text-black font-bold leading-tight flex-1 uppercase tracking-tight">
                    Building high-performance ecosystems with audited security and scalable architectures.
                  </p>

                  <Link href={`/case-studies/${caseStudy.id}`} className="neo-btn bg-white text-black mt-8 md:mt-12 w-full text-center group flex items-center justify-center gap-4 text-base md:text-lg py-3">
                    READ CASE STUDY <MoveRight className="group-hover:translate-x-2 transition-transform w-5 h-5 md:w-6 md:h-6" strokeWidth={3} />
                  </Link>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const Testimonials = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: 'start' }, [
    AutoScroll({ speed: 1, stopOnInteraction: false, stopOnMouseEnter: true }) as any
  ])

  const reviews = [
    { name: "Rob Gudipudi", role: "CTO, Ensaar Global", quote: "BrylCodes built an AI-powered automation system that cut our operational overhead by 60%. Exceptional engineering." },
    { name: "Desmond Leong", role: "CEO, Genesiv", quote: "They delivered an intelligent product recommendation engine that drove a 40% increase in conversion. True AI expertise." },
    { name: "Steve Conman", role: "PM, Fluid", quote: "The AI chatbot they built handles 80% of our support tickets autonomously. Speed, reliability, and precision." },
    { name: "Ritika Nihara", role: "QA Engineer, Genesiv", quote: "Their RAG implementation is rock-solid. Auditable, modular, and built for production at scale." },
    { name: "Sachin", role: "Tech Lead, Nippon Data", quote: "Mastery over complex AI systems. They solved our data synchronization bottlenecks with an automated pipeline overnight." },
    { name: "Harper David", role: "Team Lead, Healthcare", quote: "HIPAA-compliant AI document processing delivered perfectly. Zero-compromise on security." },
    { name: "Will Mangthom", role: "Owner, Fitness Central", quote: "Their AI-driven marketing automation tripled our conversion rates and runs hands-free." }
  ]

  return (
    <section className="py-20 md:py-32 bg-neo-bg border-y-4 border-black relative overflow-hidden" id="testimonials">
      <div className="absolute inset-0 texture-halftone opacity-5 pointer-events-none" />
      <div className="section-container mb-8 md:mb-24 text-center relative z-10">
        <SectionEyebrow className="bg-neo-secondary text-[10px] md:text-xs">SUCCESS STORIES</SectionEyebrow>
        <h2 className="text-3xl md:text-9xl font-black text-black uppercase tracking-tighter leading-[0.9]">Technical <span className="bg-white neo-border px-2 md:px-6 neo-shadow-sm rotate-1 inline-block">Impact</span></h2>
      </div>

      <div className="w-full relative px-4">
        <div className="embla overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
          <div className="embla__container flex py-10 -ml-12">
            {reviews.map((rev, i) => (
              <div key={i} className="embla__slide flex-[0_0_90%] md:flex-[0_0_45%] lg:flex-[0_0_35%] pl-12">
                <div className="neo-card bg-white p-12 h-full flex flex-col justify-between group">
                  <div>
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-neo-accent neo-border flex items-center justify-center text-white font-black text-xl md:text-2xl shrink-0">
                        {rev.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <Quote className="text-neo-accent neo-shadow-sm bg-neo-secondary p-3 neo-border" size={48} strokeWidth={3} />
                    </div>
                    <p className="text-3xl text-black font-black leading-[1.1] bg-neo-muted/10 p-6 neo-border border-dashed uppercase tracking-tight">
                      "{rev.quote}"
                    </p>
                  </div>
                  <div className="mt-12 flex flex-col border-t-4 border-black pt-8">
                    <h4 className="text-3xl font-black text-black uppercase tracking-tight">{rev.name}</h4>
                    <p className="text-sm font-black uppercase tracking-widest text-neo-accent">{rev.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const CTAFooter = () => (
  <section className="py-16 md:py-24 bg-neo-muted relative overflow-hidden flex flex-col items-center" id="contact">
    <div className="absolute inset-0 texture-grid opacity-20 pointer-events-none" />
    <div className="section-container relative z-10 text-center mb-8 md:mb-12">
      <h2 className="text-3xl md:text-[100px] font-black text-black leading-[0.9] tracking-tighter uppercase mb-6 md:mb-8 drop-shadow-[3px_3px_0px_#FFD93D] md:drop-shadow-[6px_6px_0px_#FFD93D]">
        READY TO <span className="bg-black text-white px-3 md:px-6">AUTOMATE?</span>
      </h2>
      <p className="text-base md:text-xl text-black font-bold max-w-2xl mx-auto leading-tight uppercase italic opacity-60">
        Currently accepting new AI development partnerships. Let's build your intelligent automation ecosystem.
      </p>
    </div>

    <div className="section-container max-w-4xl mx-auto relative z-10">
      <FadeInUp className="relative group">
        <div className="absolute inset-0 bg-neo-secondary translate-x-4 translate-y-4 neo-border -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform" />
        <ContactForm />
      </FadeInUp>
    </div>
  </section>
)

export default function PortfolioLandingPage() {
  return (
    <div className="bg-neo-bg min-h-screen selection:bg-neo-accent selection:text-white overflow-x-hidden">
      <Navbar />
      <main className="overflow-x-hidden">
        <Hero />
        <AgencyBio />
        <StatsBar />
        <ProjectShowcase />
        <Mission />
        <TechnicalMastery />
        <Services />
        <Process />
        <TechStack />
        <CaseStudies />
        <Testimonials />
        <CTAFooter />
      </main>
      <Footer />
    </div>
  )
}

