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
  Stars
} from 'lucide-react'
import useEmblaCarousel from 'embla-carousel-react'
import { cn } from '@/lib/utils'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ContactForm } from '@/components/contact-form'
import AutoScroll from 'embla-carousel-auto-scroll'
import { services } from '@/lib/services-data'

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
    <section className="pt-44 pb-32 bg-neo-bg relative overflow-hidden texture-grid">
      {/* Repositioned Defensive/Decorative Badge */}
      <div className="absolute top-1/2 -translate-y-1/2 -right-44 w-[700px] h-[700px] pointer-events-none select-none z-0 opacity-40">
        {/* Halftone Texture Ring */}
        <div className="absolute inset-0 bg-neo-accent/5 rounded-full border-4 border-black border-dashed animate-spin-slow" />

        {/* Main Rotating Badge */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] animate-spin-slow">
          <svg viewBox="0 0 200 200" className="w-full h-full fill-black font-black uppercase text-[15px] tracking-[0.2em]">
            <path
              id="textPath"
              d="M 100, 100 m -80, 0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0"
              fill="none"
            />
            <text>
              <textPath href="#textPath" startOffset="0%">
                BRYLCODES • ENGINEERING • IMPACT • BRYLCODES • ENGINEERING • IMPACT •
              </textPath>
            </text>
          </svg>

          {/* Central Core */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-neo-secondary neo-border rounded-full flex items-center justify-center neo-shadow-sm rotate-12">
            <span className="text-6xl text-black">★</span>
          </div>
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-white/5 neo-border border-dashed rounded-full -z-10" />
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-4xl space-y-8">
          <FadeInUp>
            <div className="flex items-center gap-4 mb-8">
              <SectionEyebrow className="mb-0">BRYLCODES ★ PORTFOLIO OS</SectionEyebrow>
              <span className="hidden md:block h-1 flex-1 bg-black" />
            </div>
            <h1 className="text-7xl md:text-9xl font-black text-black leading-[0.85] tracking-tighter mb-8 uppercase">
              Build <span className="text-neo-accent">Scalable</span> Systems
            </h1>
            <p className="text-xl md:text-2xl text-black max-w-2xl font-bold leading-tight mb-12 text-pretty uppercase tracking-tight">
              I merge enterprise DNA with high-performance digital infrastructure. I don't just ship features; I <span className="underline decoration-4 decoration-neo-secondary underline-offset-4">architect results</span>.
            </p>
            <div className="flex flex-wrap gap-6 pt-4">
              <Link href="/contact" className="neo-btn bg-neo-accent text-white shadow-neo-md hover:shadow-neo-lg scale-110">
                HIRE ME NOW
              </Link>
              <Link href="/work" className="neo-btn bg-white text-black shadow-neo-md hover:shadow-neo-lg flex items-center gap-2">
                EXPLORE WORK <MoveRight size={20} strokeWidth={3} />
              </Link>
            </div>
          </FadeInUp>
        </div>
      </div>
    </section>
  )
}

// 2.1 BIO CORE
const AgencyBio = () => (
  <section className="py-24 bg-white border-y-4 border-black relative">
    <div className="absolute inset-0 texture-halftone opacity-5 pointer-events-none" />
    <div className="section-container relative z-10">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <div className="relative group p-4">
          <div className="absolute inset-0 bg-neo-secondary translate-x-4 translate-y-4 neo-border -z-10" />
          <div className="relative aspect-4/3 bg-black neo-border overflow-hidden neo-shadow-lg group">
            <Image
              src="/my.png"
              alt="Shubham Kushwah - Principal Engineer"
              fill
              className="object-cover grayscale contrast-125 brightness-90 transition-all duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/10 mix-blend-overlay pointer-events-none" />
          </div>
          <div className="absolute -top-6 -right-6 bg-neo-accent text-white px-6 py-4 neo-border neo-shadow-sm rotate-6">
            <span className="text-4xl font-black block text-white drop-shadow-[2px_2px_0px_#000]">5+</span>
            <span className="text-[10px] font-black uppercase tracking-widest leading-none">Years Expertise</span>
          </div>
        </div>

        <FadeInUp className="space-y-8">
          <div className="space-y-4">
            <SectionEyebrow className="bg-neo-muted">THE SENIOR ARCHITECT</SectionEyebrow>
            <h2 className="text-4xl md:text-7xl font-black text-black leading-none uppercase tracking-tighter">
              Engineering <span className="bg-neo-secondary px-2 italic">Precision</span> at Scale
            </h2>
            <p className="text-xl text-black font-bold leading-tight uppercase tracking-tight max-w-xl">
              I specialize in high-performance architectures and accessible enterprise systems. My tenure at Nippon Data and Ensaar Global has equipped me with the architectural precision required to deliver resilient results.
            </p>
          </div>

          <div className="space-y-6 py-8 border-y-4 border-black border-dashed">
            {[
              { title: 'NIPPON DATA', detail: 'Hardened architectures for government platforms.' },
              { title: 'ENSAAR GLOBAL', detail: 'Architected robust microservices and SSR/SSG engines.' },
              { title: 'AUDITED IMPACT', detail: 'Consistently delivered 98+ Lighthouse scores.' }
            ].map((item, i) => (
              <div key={i} className="flex gap-6 items-center group">
                <div className="w-3 h-3 bg-neo-accent neo-border shrink-0" />
                <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4">
                  <span className="font-black text-black text-xl uppercase tracking-tighter leading-none shrink-0 w-32">{item.title}</span>
                  <span className="text-black/60 font-bold text-base uppercase tracking-tight leading-tight group-hover:text-black transition-colors">{item.detail}</span>
                </div>
              </div>
            ))}
          </div>

          <Link href="/experience" className="neo-btn bg-black text-white inline-flex items-center gap-4 group shadow-[4px_4px_0px_#FFD93D]">
            VERIFY PROTOCOLS <MoveRight className="group-hover:translate-x-2 transition-transform" size={20} strokeWidth={4} />
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
    <section className="py-24 bg-neo-bg border-y-4 border-black relative overflow-hidden">
      <div className="absolute inset-0 texture-grid opacity-10 pointer-events-none" />
      <div className="section-container mb-16 relative z-10">
        <SectionEyebrow className="bg-neo-accent text-white">Production Benchmarks</SectionEyebrow>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <h2 className="text-4xl md:text-7xl font-black text-black uppercase tracking-tighter max-w-2xl leading-none">Modern Engineering <span className="bg-neo-secondary px-2">at Scale</span></h2>
          <Link href="/work" className="neo-btn bg-white text-black">
            FULL CATALOG <MoveRight size={14} className="inline-block ml-2" />
          </Link>
        </div>
      </div>

      <div className="embla overflow-hidden cursor-grab active:cursor-grabbing px-4 relative z-10" ref={emblaRef}>
        <div className="embla__container flex py-10 gap-12">
          {projects.map((project, i) => (
            <div key={i} className="embla__slide flex-[0_0_90%] md:flex-[0_0_50%] lg:flex-[0_0_40%]">
              <div className="neo-card bg-white group overflow-hidden">
                <div className="relative aspect-video bg-black border-b-4 border-black overflow-hidden">
                   <Image 
                      src={project.src} 
                      alt={project.title} 
                      fill 
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105" 
                   />
                   <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors flex items-center justify-center p-8">
                      <h3 className="text-3xl font-black text-white uppercase tracking-tighter drop-shadow-[4px_4px_0px_#000] leading-none text-center">{project.title}</h3>
                   </div>
                </div>
                <div className="p-10 flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="bg-neo-accent text-white px-3 py-1 neo-border text-[9px] font-black uppercase tracking-widest">{project.category}</span>
                    <span className="text-[9px] font-black uppercase tracking-widest text-black/40">V2.4.0</span>
                  </div>
                  <Link href="/work" className="neo-btn bg-black text-white text-center flex items-center justify-center gap-2 group/link">
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
  <section className="bg-neo-accent py-16 border-y-4 border-black relative overflow-hidden">
    <div className="absolute inset-0 texture-grid opacity-20 pointer-events-none" />
    <div className="section-container relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center items-center">
        {[
          { num: '50+', label: 'Projects Shipped' },
          { num: '5+', label: 'Years Hardened' },
          { num: '10M+', label: 'Global Users' }
        ].map((stat, i) => (
          <div key={i} className="relative group py-8 bg-white neo-border neo-shadow-sm rotate-2 hover:rotate-0 transition-transform">
            <h3 className="text-6xl md:text-8xl font-black text-black drop-shadow-[6px_6px_0px_#FFD93D] mb-2">{stat.num}</h3>
            <p className="text-black font-black uppercase tracking-widest text-sm">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)

const Mission = () => (
  <section className="py-32 bg-neo-bg texture-grid border-b-4 border-black" id="about">
    <div className="section-container">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <FadeInUp>
          <SectionEyebrow className="bg-neo-accent text-white">MISSION STATEMENT</SectionEyebrow>
          <h2 className="text-5xl md:text-8xl font-black text-black leading-none mb-8 uppercase tracking-tighter">
            Vision into <span className="text-neo-accent underline decoration-8 decoration-black underline-offset-8">Output</span>
          </h2>
          <p className="text-2xl text-black font-bold leading-tight mb-16 uppercase tracking-tight">
            I don't ship features. I engineer resilient, scalable systems that solve mission-critical business problems and deliver measurable outcomes.
          </p>

          <div className="grid md:grid-cols-1 gap-12">
            {[
              { icon: Layers, title: 'Full-Stack Engineering', desc: 'End-to-end web development from database architecture to frontend delivery' },
              { icon: ShieldCheck, title: 'System Architecture', desc: 'Microservices, event-driven patterns, and zero-trust security at scale' },
              { icon: BarChart3, title: 'Performance Optimization', desc: 'Latency hardening, Core Web Vitals, and infrastructure efficiency' }
            ].map((item, i) => (
              <div key={i} className="flex gap-8 group">
                <div className="w-20 h-20 bg-white neo-border flex items-center justify-center shrink-0 group-hover:bg-neo-accent transition-colors duration-100 neo-shadow-sm group-hover:translate-x-[2px] group-hover:translate-y-[2px] group-hover:shadow-none">
                  <item.icon className="text-black group-hover:text-white transition-colors duration-100" size={40} strokeWidth={3} />
                </div>
                <div>
                  <h4 className="text-3xl font-black text-black mb-2 uppercase tracking-tight leading-none">{item.title}</h4>
                  <p className="text-black font-bold leading-none uppercase text-lg tracking-tighter">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeInUp>

        <div className="relative aspect-square p-6">
          <div className="absolute inset-0 bg-neo-secondary neo-border -rotate-3" />
          <div className="absolute inset-0 bg-neo-muted neo-border rotate-3 flex items-center justify-center shadow-neo-md overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop"
              alt="Global Data Visualization"
              fill
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
  <section className="py-24 bg-white border-y-4 border-black relative">
    <div className="absolute inset-0 texture-halftone opacity-5 pointer-events-none" />
    <div className="section-container relative z-10">
      <div className="text-center mb-20">
        <SectionEyebrow className="bg-neo-accent text-white">TECH ARSENAL</SectionEyebrow>
        <h2 className="text-5xl md:text-8xl font-black text-black uppercase tracking-tighter leading-none">Hardened for <span className="bg-neo-secondary px-2">Scale</span></h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
        {[
          {
            category: 'Frontend',
            skills: [
              { name: 'React', icon: 'https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg' },
              { name: 'Next.js', icon: 'https://www.vectorlogo.zone/logos/nextjs/nextjs-icon.svg' },
              { name: 'Redux', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg' },
              { name: 'Tailwind', icon: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg' },
              { name: 'Material UI', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/materialui/materialui-original.svg' }
            ]
          },
          {
            category: 'Performance',
            skills: [
              { name: 'Code Splitting', icon: Split },
              { name: 'Tree Shaking', icon: Scissors },
              { name: 'Web Vitals', icon: Activity },
              { name: 'Optimization', icon: Zap },
              { name: 'Stability', icon: ShieldCheck }
            ]
          },
          {
            category: 'Backend',
            skills: [
              { name: 'Node.js', icon: 'https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg' },
              { name: 'Express', icon: Terminal },
              { name: 'NestJS', icon: 'https://www.vectorlogo.zone/logos/nestjs/nestjs-icon.svg' },
              { name: 'GraphQL', icon: 'https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg' },
              { name: 'WebSockets', icon: Zap }
            ]
          },
          {
            category: 'DevOps & Tools',
            skills: [
              { name: 'Docker', icon: 'https://www.vectorlogo.zone/logos/docker/docker-icon.svg' },
              { name: 'AWS', icon: 'https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg' },
              { name: 'Vercel', icon: 'https://www.vectorlogo.zone/logos/vercel/vercel-icon.svg' },
              { name: 'CI/CD', icon: Database },
              { name: 'Git', icon: 'https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg' }
            ]
          }
        ].map((item, i) => (
          <FadeInUp key={i} delay={i * 0.1} className="neo-card p-10 group">
            <h4 className="text-black font-black uppercase tracking-tight text-xl mb-8 pb-4 border-b-4 border-black group-hover:bg-neo-secondary transition-colors leading-none">{item.category}</h4>
            <div className="flex flex-wrap gap-6 mt-2">
              {item.skills.map((skill, j) => (
                <div key={j} className="relative group/skill" title={skill.name}>
                  {typeof skill.icon === 'string' ? (
                    <div className="relative w-12 h-12 flex items-center justify-center p-2 neo-border bg-white shadow-[3px_3px_0px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-full h-full object-contain grayscale opacity-60 group-hover/skill:grayscale-0 group-hover/skill:opacity-100 transition-all duration-300"
                      />
                    </div>
                  ) : (
                    <div className="relative group/skill">
                      <div className="w-12 h-12 neo-border bg-white flex items-center justify-center text-black shadow-[3px_3px_0px_0px_#000] group-hover/skill:bg-neo-accent group-hover/skill:text-white transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none cursor-default">
                        <skill.icon size={24} strokeWidth={3} />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </FadeInUp>
        ))}
      </div>
    </div>
  </section>
)

const Services = () => (
  <section className="py-32 bg-neo-bg border-b-4 border-black" id="services">
    <div className="section-container text-center mb-24">
      <SectionEyebrow className="bg-neo-secondary">CAPABILITIES</SectionEyebrow>
      <h2 className="text-5xl md:text-9xl font-black text-black mb-12 uppercase tracking-tighter leading-none">Service Offerings</h2>
      <Link href="/services" className="neo-btn bg-neo-accent text-white inline-flex items-center justify-center gap-2 scale-110">
        EXPLORE ALL SOLUTIONS <MoveRight size={20} strokeWidth={3} />
      </Link>
    </div>

    <div className="section-container grid md:grid-cols-2 lg:grid-cols-3 gap-12">
      {services.slice(0, 6).map((service, i) => (
        <FadeInUp key={i} delay={i * 0.1} className="neo-card flex flex-col h-full bg-white group">
          <div className="bg-neo-muted border-b-4 border-black p-4">
            <span className="text-[10px] font-black uppercase tracking-widest text-black">
              OUTCOME: {service.outcome}
            </span>
          </div>
          <div className="p-10 flex flex-col flex-1">
            <h4 className="text-3xl font-black text-black mb-4 uppercase tracking-tight leading-none group-hover:text-neo-accent transition-colors">{service.title}</h4>
            <p className="text-lg text-black font-bold mb-10 flex-1 line-clamp-3 uppercase tracking-tight leading-tight">{service.description}</p>

            <div className="flex flex-wrap gap-2 mb-10">
              {service.metrics.map((m, j) => (
                <span key={j} className="text-[10px] font-black uppercase tracking-widest px-3 py-1 bg-neo-secondary border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                  {m}
                </span>
              ))}
            </div>

            <Link href={`/services/${service.slug}`} className="neo-btn bg-black text-white text-center group flex items-center justify-center gap-2">
              VIEW SOLUTION <MoveRight className="group-hover:translate-x-2 transition-transform" size={16} strokeWidth={3} />
            </Link>
          </div>
        </FadeInUp>
      ))}
    </div>
  </section>
)

const Process = () => (
  <section className="py-32 bg-white" id="process">
    <div className="section-container mb-24 text-center">
      <SectionEyebrow className="bg-neo-muted">METHODOLOGY</SectionEyebrow>
      <h2 className="text-5xl md:text-9xl font-black text-black uppercase tracking-tighter leading-none">The Process</h2>
    </div>

    <div className="section-container relative">
      <div className="space-y-16 relative">
        {[
          { step: '01', title: 'Discovery & Strategy', duration: '1–2 Weeks', desc: 'Mapping business goals and defining a clear delivery roadmap with measurable milestones.' },
          { step: '02', title: 'UX & System Design', duration: '2–3 Weeks', desc: 'Blueprints and design reviews before a single line of production code is written.' },
          { step: '03', title: 'Build & Integration', duration: '4–6 Weeks', desc: 'Modular development with weekly reviews. Frontend, backend, and integrations delivered in parallel.' },
          { step: '04', title: 'QA & Hardening', duration: '1–2 Weeks', desc: 'Rigorous testing, performance benchmarking, security audits, and 95%+ code coverage.' },
          { step: '05', title: 'Launch & Support', duration: 'Ongoing', desc: 'Zero-downtime deployment. Post-launch monitoring and dedicated expert support.' }
        ].map((item, i) => (
          <FadeInUp key={i} className={cn("flex flex-col md:flex-row gap-12 items-center", i % 2 !== 0 && "md:flex-row-reverse")}>
            <div className="w-32 h-32 bg-neo-secondary neo-border flex items-center justify-center text-5xl font-black text-black shrink-0 z-10 neo-shadow-sm rotate-6">
              {item.step}
            </div>
            <div className={cn("flex-1 p-12 bg-neo-bg neo-border neo-shadow-md", i % 2 !== 0 ? "text-right" : "text-left")}>
              <div className={cn("flex items-end gap-4 mb-6", i % 2 !== 0 && "flex-row-reverse")}>
                <h4 className="text-5xl font-black text-black uppercase tracking-tight leading-none">{item.title}</h4>
                <span className="text-xs font-black text-neo-accent uppercase tracking-widest pb-1">{item.duration}</span>
              </div>
              <p className="text-2xl text-black font-bold leading-tight max-w-2xl inline-block uppercase tracking-tight">
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
            <span className="shrink-0 flex items-center gap-4">★ THE MASTERED STACK <Stars className="text-neo-accent" size={24} /></span>
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

const CaseStudies = () => (
  <section className="py-32 bg-white" id="work">
    <div className="section-container mb-24">
      <SectionEyebrow className="bg-neo-accent text-white">CASE STUDIES</SectionEyebrow>
      <h2 className="text-5xl md:text-[100px] font-black text-black uppercase tracking-tighter mb-4 leading-none">Real Impact</h2>
    </div>

    <div className="section-container grid lg:grid-cols-3 gap-12">
      {[
        { stat: '40%', label: 'FASTER LOAD', name: 'Analytics Port', client: 'Logistics', color: 'bg-neo-accent' },
        { stat: '70%', label: 'CONVERSION UP', name: 'FinTech Growth', client: 'FinTech', color: 'bg-neo-secondary' },
        { stat: '95%+', label: 'COVERAGE', name: 'AI Discovery', client: 'AI Startup', color: 'bg-neo-muted' }
      ].map((caseStudy, i) => (
        <FadeInUp key={i} delay={i * 0.1} className="neo-card bg-white flex flex-col items-start h-full group">
          <div className={cn("w-full py-16 neo-border-b flex flex-col items-center justify-center border-b-4 border-black", caseStudy.color)}>
            <span className="text-8xl font-black text-black block mb-2 drop-shadow-[4px_4px_0px_#fff]">{caseStudy.stat}</span>
            <span className="text-sm font-black uppercase tracking-widest text-black underline decoration-4 underline-offset-4">{caseStudy.label}</span>
          </div>

          <div className="p-12 flex flex-col flex-1">
            <h4 className="text-4xl font-black text-black mb-4 uppercase tracking-tight leading-none">{caseStudy.name}</h4>
            <div className="inline-block px-3 py-1 bg-black text-white font-black uppercase tracking-widest text-[10px] mb-8">
              CLIENT: {caseStudy.client}
            </div>

            <p className="text-xl text-black font-bold leading-tight flex-1 uppercase tracking-tight">
              Building high-performance ecosystems with audited security and scalable architectures.
            </p>

            <Link href={`/work`} className="neo-btn bg-white text-black mt-12 w-full text-center group flex items-center justify-center gap-4 text-lg">
              READ CASE STUDY <MoveRight className="group-hover:translate-x-2 transition-transform" strokeWidth={3} />
            </Link>
          </div>
        </FadeInUp>
      ))}
    </div>
  </section>
)

const Testimonials = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: 'start' }, [
    AutoScroll({ speed: 1, stopOnInteraction: false, stopOnMouseEnter: true }) as any
  ])

  const reviews = [
    { name: "Rob Gudipudi", role: "CTO, Ensaar Global", quote: "The architectural integrity and performance optimizations delivered by BrylCodes were instrumental in our scaling efforts." },
    { name: "Desmond Leong", role: "CEO, Genesiv", quote: "A rare find. Expert ownership of the product and consistent delivery of engineering excellence." },
    { name: "Steve Conman", role: "PM, Fluid", quote: "Speed, reliability, and precision. The perfect partner for high-velocity software development." },
    { name: "Ritika Nihara", role: "QA Engineer, Genesiv", quote: "Code quality is exceptional. Auditable, modular, and built for production at scale." },
    { name: "Sachin", role: "Tech Lead, Nippon Data", quote: "Mastery over complex backend systems. He solved our data synchronization bottlenecks overnight." },
    { name: "Harper David", role: "Team Lead, Healthcare", quote: "Zero-compromise security and HIPAA compliance were delivered perfectly." },
    { name: "Will Mangthom", role: "Owner, Fitness Central", quote: "Transformed our digital experience and tripled our conversion rates." }
  ]

  return (
    <section className="py-32 bg-neo-bg border-y-4 border-black relative overflow-hidden" id="testimonials">
      <div className="absolute inset-0 texture-halftone opacity-5 pointer-events-none" />
      <div className="section-container mb-24 text-center relative z-10">
        <SectionEyebrow className="bg-neo-secondary">SUCCESS STORIES</SectionEyebrow>
        <h2 className="text-5xl md:text-9xl font-black text-black uppercase tracking-tighter leading-none">Technical <span className="bg-white neo-border px-6 neo-shadow-sm rotate-2 inline-block">Impact</span></h2>
      </div>

      <div className="w-full relative px-4">
        <div className="embla overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
          <div className="embla__container flex py-10 gap-12">
            {reviews.map((rev, i) => (
              <div key={i} className="embla__slide flex-[0_0_90%] md:flex-[0_0_45%] lg:flex-[0_0_35%]">
                <div className="neo-card bg-white p-12 h-full flex flex-col justify-between group">
                  <div>
                    <Quote className="text-neo-accent mb-12 neo-shadow-sm bg-neo-secondary p-4 neo-border" size={64} strokeWidth={3} />
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
  <section className="py-24 bg-neo-muted relative overflow-hidden flex flex-col items-center" id="contact">
    <div className="absolute inset-0 texture-grid opacity-20 pointer-events-none" />
    <div className="section-container relative z-10 text-center mb-12">
      <h2 className="text-6xl md:text-[100px] font-black text-black leading-none tracking-tighter uppercase mb-8 drop-shadow-[6px_6px_0px_#FFD93D]">
        READY TO <span className="bg-black text-white px-6">SCALE?</span>
      </h2>
      <p className="text-xl text-black font-bold max-w-2xl mx-auto leading-tight uppercase italic opacity-60">
        Currently reviewing applications for new engineering partnerships. Let's build your high-performance ecosystem.
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
    <div className="bg-neo-bg min-h-screen selection:bg-neo-accent selection:text-white">
      <Navbar />
      <main>
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
