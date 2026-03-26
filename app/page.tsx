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
  Database
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
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

const SectionEyebrow = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <span className={cn("text-[13px] font-semibold uppercase tracking-[0.14em] text-[#541388] mb-4 block", className)}>
    {children}
  </span>
)

// 2. HERO SECTION
const Hero = () => {
  return (
    <section className="pt-44 pb-32 bg-[#F1E9DA] relative overflow-hidden">
      <div className="absolute inset-0 hero-pattern pointer-events-none" />
      <div className="absolute top-20 right-[10%] w-[500px] h-[500px] bg-[#541388]/5 rounded-full blur-[100px] pointer-events-none animate-pulse" />

      <div className="section-container relative z-10">
        <div className="max-w-4xl space-y-8">
          <FadeInUp>
            <div className="flex items-center gap-3 mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-[#D90368]" />
                <SectionEyebrow className="mb-0">BrylCodes | High-Performance Engineering</SectionEyebrow>
            </div>
            <h1 className="text-6xl md:text-[90px] font-black text-[#2E294E] leading-[0.85] tracking-tight mb-8">
              I Build Scalable <span className="text-[#541388]">Automation</span> Systems
            </h1>
            <p className="text-xl md:text-2xl text-[#2E294E]/70 max-w-2xl font-medium leading-relaxed mb-10 text-pretty">
              Merging 5+ years of enterprise engineering expertise with high-conversion digital infrastructure. At <span className="text-[#541388] font-bold">BrylCodes</span>, I don't just write code; I architect results.
            </p>
            <div className="flex flex-wrap gap-6 pt-4">
              <Link href="/contact" className="btn-cta">
                Hire Me for Your Next Project
              </Link>
              <Link href="/work" className="px-10 py-4 border-2 border-[#541388] text-[#541388] rounded-[8px] font-black uppercase tracking-widest text-sm hover:bg-[#541388] hover:text-white transition-all flex items-center gap-2">
                Explore My Portfolio
              </Link>
            </div>
          </FadeInUp>
        </div>
      </div>
    </section>
  )
}

// 2.1 AGENCY CORE
const AgencyBio = () => (
    <section className="py-24 bg-white border-b border-[#541388]/5">
        <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
                <div className="relative group">
                    <div className="absolute -inset-4 bg-[#FFD400]/2 transition-all duration-500 group-hover:bg-[#FFD400]/10 rounded-4xl" />
                    <div className="relative aspect-4/5 bg-[#2E294E] rounded-4xl overflow-hidden shadow-2xl">
                        <div className="absolute inset-0 bg-linear-to-t from-[#2E294E] via-transparent to-transparent opacity-60" />
                        <div className="absolute bottom-10 left-10 text-white">
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-60 mb-2 block">Available for Hire</span>
                            <h3 className="text-3xl font-black">BrylCodes.</h3>
                        </div>
                        <div className="absolute inset-0">
                             <Image 
                                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop" 
                                alt="BrylCodes Principal Architect" 
                                fill 
                                className="object-cover group-hover:scale-105 transition-transform duration-[2s]" 
                             />
                        </div>
                    </div>
                    <div className="absolute -top-6 -right-6 bg-[#D90368] text-white p-6 rounded-2xl shadow-xl rotate-3">
                        <span className="text-2xl font-black block">5+</span>
                        <span className="text-[9px] font-black uppercase tracking-widest leading-none">Years Expertise.</span>
                    </div>
                </div>

                <FadeInUp>
                    <SectionEyebrow>The Architect</SectionEyebrow>
                    <h2 className="text-4xl md:text-6xl font-black text-[#2E294E] mb-8 leading-tight">
                        Enterprise DNA, <span className="text-[#541388]">Global</span> Impact
                    </h2>
                    <p className="text-lg text-[#2E294E]/70 font-medium leading-relaxed mb-8">
                        BrylCodes is my personal engineering studio dedicated to building fast, scalable applications. My expertise spans from implementing complex front-end solutions for millions of users to architecting robust microservices that drive measurable business growth.
                    </p>
                    <div className="space-y-6 mb-12">
                        {[
                            { title: 'Founding Pedigree', detail: 'Roots in Nippon Data Systems & Ensaar Global' },
                            { title: 'Core Arsenal', detail: 'Next.js, TypeScript, Node.js, AI Integration' },
                            { title: 'The Mission', detail: 'To bridge technical complexity with operational simplicity.' }
                        ].map((item, i) => (
                            <div key={i} className="flex gap-4 items-center">
                                <div className="w-2 h-2 rounded-full bg-[#541388]" />
                                <span className="font-bold text-[#2E294E] text-sm uppercase tracking-wider">{item.title}:</span>
                                <span className="text-[#2E294E]/60 font-medium text-sm">{item.detail}</span>
                            </div>
                        ))}
                    </div>
                    <Link href="/about" className="text-sm font-black uppercase tracking-widest text-[#D90368] group flex items-center gap-2 underline underline-offset-4 decoration-2">
                        My Complete Story <MoveRight className="group-hover:translate-x-2 transition-transform" />
                    </Link>
                </FadeInUp>
            </div>
        </div>
    </section>
)

// 2.5 PROJECT SHOWCASE (AUTO SCROLLER)
const ProjectShowcase = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: 'start' }, [
    AutoScroll({ speed: 1, stopOnInteraction: false, stopOnMouseEnter: true }) as any
  ])

  const projects = [
    {
      title: "Enterprise ERP Ecosystem",
      category: "Data Visualization",
      src: '/images/case-studies/saas-dashboard-cover.png'
    },
    {
      title: "FinTech Performance Page",
      category: "Growth & Optimization",
      src: '/images/case-studies/saas-landing-cover.png'
    },
    {
      title: "AI Agent Controller",
      category: "AI & Machine Learning",
      src: '/images/case-studies/ai-landing-page-cover.png'
    },
    {
      title: "Creative Portfolio Engine",
      category: "Next.js Architecture",
      src: '/images/case-studies/photography-banner-cover.png'
    },
    {
      title: "Katachi Studio Platform",
      category: "Headless eCommerce",
      src: '/images/case-studies/katachi-studio-cover.png'
    }
  ]

  return (
    <section className="py-24 bg-[#F1E9DA] border-y border-[#541388]/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D90368]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="section-container mb-16">
        <SectionEyebrow>Production Benchmarks</SectionEyebrow>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <h2 className="text-4xl md:text-5xl font-black text-[#2E294E] tracking-tight max-w-2xl leading-[1.1]">Modern Engineering for Enterprise Scaling</h2>
          <Link href="/work" className="text-xs font-black uppercase tracking-[0.2em] text-[#D90368] hover:translate-x-2 transition-transform inline-flex items-center gap-2 border-b-2 border-[#D90368]/20 pb-1">
            Full Catalog <MoveRight size={14} />
          </Link>
        </div>
      </div>

      <div className="embla overflow-hidden cursor-grab active:cursor-grabbing px-4" ref={emblaRef}>
        <div className="embla__container flex py-10">
          {projects.map((project, i) => (
            <div key={i} className="embla__slide flex-[0_0_90%] md:flex-[0_0_45%] lg:flex-[0_0_35%] pl-12 md:pl-20">
              <div className="group bg-white rounded-4xl overflow-hidden border border-[#541388]/10 transition-all duration-500 hover:-translate-y-2 hover:border-[#D90368]/20">
                <div className="relative aspect-16/10 overflow-hidden p-3 pb-0">
                  <Image
                    src={project.src}
                    alt={project.title}
                    width={800}
                    height={500}
                    className="w-full h-full object-cover rounded-t-3xl transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-10 pt-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-1.5 h-1.5 bg-[#D90368] rounded-full scale-100 group-hover:scale-150 transition-transform" />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#D90368]">{project.category}</span>
                  </div>
                  <h4 className="text-xl font-black text-[#2E294E] mb-2">{project.title}</h4>
                  <p className="text-[#2E294E]/40 text-[9px] font-bold uppercase tracking-widest">Stable Release 2.4.0</p>
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
  <section className="bg-[#541388] py-20 relative overflow-hidden">
    <div className="section-container">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center items-center">
        {[
          { num: '50+', label: 'Projects Delivered' },
          { num: '5+', label: 'Years Engineering' },
          { num: '10M+', label: 'Users Reached' }
        ].map((stat, i) => (
          <div key={i} className="relative group">
            <h3 className="text-5xl md:text-7xl font-black text-[#FFD400] mb-2">{stat.num}</h3>
            <p className="text-white font-bold uppercase tracking-widest text-sm opacity-80">{stat.label}</p>
            {i < 2 && (
              <div className="hidden md:block absolute -right-6 top-1/2 -translate-y-1/2 w-px h-16 bg-[#FFD400]/30" />
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
)

// 4. MISSION SECTION
const Mission = () => (
  <section className="py-32 bg-white" id="about">
    <div className="section-container">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <FadeInUp>
          <SectionEyebrow>My Mission</SectionEyebrow>
          <h2 className="text-4xl md:text-6xl font-black text-[#2E294E] leading-[0.9] mb-8">
            Turn Your Vision Into a Revenue-Generating Product
          </h2>
          <p className="text-xl text-[#2E294E]/70 font-medium leading-relaxed mb-16">
            I don't just ship features. BrylCodes engineers resilient, scalable systems that solve mission-critical business problems and deliver measurable outcomes.
          </p>

          <div className="grid md:grid-cols-1 gap-12">
            {[
              { icon: Layers, title: 'Full-Stack Engineering', desc: 'End-to-end web development from database architecture to frontend delivery' },
              { icon: ShieldCheck, title: 'System Architecture', desc: 'Microservices, event-driven patterns, and zero-trust security at scale' },
              { icon: BarChart3, title: 'Product Ownership', desc: 'Full lifecycle from discovery to deployment, on time and on budget' }
            ].map((item, i) => (
              <div key={i} className="flex gap-6 group">
                <div className="w-14 h-14 bg-[#541388]/5 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-[#541388] transition-colors duration-500">
                  <item.icon className="text-[#541388] group-hover:text-white transition-colors duration-500" size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#2E294E] mb-2">{item.title}</h4>
                  <p className="text-[#2E294E]/60 font-medium leading-normal">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeInUp>

        <div className="relative aspect-square">
          <div className="absolute inset-0 bg-[#F1E9DA] rounded-[3rem] -rotate-3" />
          <div className="absolute inset-0 bg-[#541388] rounded-[3rem] rotate-3 flex items-center justify-center shadow-2xl overflow-hidden">
             <Image 
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop" 
                alt="Global Data Visualization" 
                fill 
                className="object-cover opacity-60" 
             />
          </div>
        </div>
      </div>
    </div>
  </section>
)

// 4.1 SKILLS SECTION (NEW)
const TechnicalMastery = () => (
  <section className="py-24 bg-white border-y border-[#541388]/5">
    <div className="section-container">
      <div className="text-center mb-16">
        <SectionEyebrow>Technical Mastery</SectionEyebrow>
        <h2 className="text-4xl md:text-5xl font-black text-[#2E294E]">Optimized for Performance</h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
        {[
          { 
            category: 'Frontend', 
            skills: [
              { name: 'React', icon: 'https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg' },
              { name: 'Next.js', icon: 'https://www.vectorlogo.zone/logos/nextjs/nextjs-icon.svg' },
              { name: 'Redux', icon: 'https://www.vectorlogo.zone/logos/redux/redux-icon.svg' },
              { name: 'Tailwind', icon: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg' },
              { name: 'Material UI', icon: 'https://www.vectorlogo.zone/logos/materialui/materialui-icon.svg' }
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
          <FadeInUp key={i} delay={i * 0.1} className="p-10 bg-[#F1E9DA]/30 rounded-4xl border border-[#541388]/5 hover:bg-white hover:shadow-2xl transition-all duration-500 group">
            <h4 className="text-[#541388] font-black uppercase tracking-widest text-[11px] mb-8 pb-4 border-b border-[#541388]/5 group-hover:border-[#541388]/20 transition-colors">{item.category}</h4>
            <div className="flex flex-wrap gap-6 mt-2">
              {item.skills.map((skill, j) => (
                <div key={j} className="relative group/skill" title={skill.name}>
                  {typeof skill.icon === 'string' ? (
                     <div className="relative w-10 h-10 flex items-center justify-center">
                        <img 
                          src={skill.icon} 
                          alt={skill.name} 
                          className="w-full h-full object-contain filter grayscale opacity-60 group-hover/skill:grayscale-0 group-hover/skill:opacity-100 group-hover/skill:scale-110 transition-all duration-500" 
                        />
                        <span className="absolute -top-12 left-1/2 -translate-x-1/2 bg-[#2E294E] text-white text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg opacity-0 group-hover/skill:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-xl">
                          {skill.name}
                        </span>
                     </div>
                  ) : (
                    <div className="relative group/skill">
                      <div className="w-10 h-10 rounded-2xl bg-[#541388]/5 flex items-center justify-center text-[#541388] group-hover/skill:bg-[#541388] group-hover/skill:text-white transition-all duration-500 group-hover/skill:scale-110 cursor-default">
                        <skill.icon size={20} />
                      </div>
                      <span className="absolute -top-12 left-1/2 -translate-x-1/2 bg-[#2E294E] text-white text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg opacity-0 group-hover/skill:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-xl">
                        {skill.name}
                      </span>
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
  <section className="py-32 bg-[#F1E9DA]" id="services">
    <div className="section-container text-center mb-20">
      <SectionEyebrow>Capabilities</SectionEyebrow>
      <h2 className="text-4xl md:text-6xl font-black text-[#2E294E] mb-6">Service Offerings</h2>
      <Link href="/services" className="text-[#D90368] font-bold text-lg hover:underline transition-all group flex items-center justify-center gap-2">
        Explore All Solutions <MoveRight className="group-hover:translate-x-2 transition-transform" />
      </Link>
    </div>

    <div className="section-container grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.slice(0, 6).map((service, i) => (
        <FadeInUp key={i} delay={i * 0.1} className="agency-card bg-white p-10 flex flex-col h-full border border-[#541388]/5 hover:border-[#541388]/20 transition-all duration-500">
          <span className="text-[10px] font-black uppercase tracking-widest text-[#541388] opacity-60 mb-6 flex items-center gap-2">
            Outcome: {service.outcome}
          </span>
          <h4 className="text-2xl font-black text-[#2E294E] mb-4">{service.title}</h4>
          <p className="text-[#2E294E]/60 font-medium mb-10 flex-1 line-clamp-3">{service.description}</p>

          <div className="flex flex-wrap gap-2 mb-10">
            {service.metrics.map((m, j) => (
              <span key={j} className="text-[9px] font-black uppercase tracking-widest px-3 py-1 bg-[#FFD400] text-[#2E294E] rounded-full">
                {m}
              </span>
            ))}
          </div>

          <Link href={`/services/${service.slug}`} className="text-sm font-black uppercase tracking-widest text-[#D90368] group flex items-center gap-2 underline underline-offset-4 decoration-2 decoration-[#D90368]/20">
            View Solution <MoveRight className="group-hover:translate-x-2 transition-transform" size={16} />
          </Link>
        </FadeInUp>
      ))}
    </div>
  </section>
)

// 6. PROCESS SECTION
const Process = () => (
  <section className="py-32 bg-white" id="process">
    <div className="section-container mb-24 text-center">
      <SectionEyebrow>Personal Methodology</SectionEyebrow>
      <h2 className="text-4xl md:text-6xl font-black text-[#2E294E]">My Process for Delivering Performance</h2>
    </div>

    <div className="section-container relative">
      <div className="space-y-24 relative">
        {[
          {
            step: '01',
            title: 'Discovery & Strategy',
            duration: '1–2 Weeks',
            desc: 'I map your business goals, technical requirements, and define a clear delivery roadmap with measurable milestones.'
          },
          {
            step: '02',
            title: 'UX & System Design',
            duration: '2–3 Weeks',
            desc: 'Wireframes, architecture blueprints, and high-fidelity UI designs reviewed and approved before a single line is written.'
          },
          {
            step: '03',
            title: 'Build & Integration',
            duration: '4–6 Weeks',
            desc: 'Modular, auditable development with weekly progress reviews. Frontend, backend, and integrations delivered in parallel sprints.'
          },
          {
            step: '04',
            title: 'QA & Hardening',
            duration: '1–2 Weeks',
            desc: 'Rigorous testing across devices and edge cases. Performance benchmarking, security audits, and 95%+ code coverage.'
          },
          {
            step: '05',
            title: 'Launch & Support',
            duration: 'Ongoing',
            desc: 'Zero-downtime deployment. Post-launch monitoring, performance tracking, and dedicated LTS support.'
          }
        ].map((item, i) => (
          <FadeInUp key={i} className={cn("flex flex-col md:flex-row gap-12 items-center", i % 2 !== 0 && "md:flex-row-reverse")}>
            <div className="w-16 h-16 bg-[#FFD400] rounded-full flex items-center justify-center text-xl font-black text-[#541388] shrink-0 z-10 scale-125 border-4 border-white shadow-lg">
              {item.step}
            </div>
            <div className={cn("flex-1 p-10 bg-[#F1E9DA]/50 rounded-[2.5rem] border border-[#541388]/5", i % 2 !== 0 ? "text-right" : "text-left")}>
              <div className={cn("flex items-end gap-4 mb-4", i % 2 !== 0 && "flex-row-reverse")}>
                <h4 className="text-3xl font-black text-[#2E294E]">{item.title}</h4>
                <span className="text-sm font-bold text-[#541388] opacity-60 pb-1">{item.duration}</span>
              </div>
              <p className="text-lg text-[#2E294E]/70 font-medium leading-relaxed max-w-xl inline-block">
                {item.desc}
              </p>
            </div>
          </FadeInUp>
        ))}
      </div>
    </div>
  </section>
)

// 7. TECH STACK
const TechStack = () => (
  <section className="py-32 bg-[#F1E9DA]" id="stack">
    <div className="section-container text-center mb-20">
      <SectionEyebrow>The Mastered Stack</SectionEyebrow>
      <h2 className="text-4xl md:text-6xl font-black text-[#2E294E] mb-6">High-Performance Engineering Stack</h2>
      <p className="text-lg text-[#2E294E]/60 font-bold tracking-tight">Platform-agnostic by design. I work within your existing infrastructure to deliver results.</p>
    </div>
    <div className="section-container flex flex-wrap justify-center items-center gap-12 md:gap-20">
      {[
        { name: 'Next.js', icon: 'https://www.vectorlogo.zone/logos/nextjs/nextjs-icon.svg' },
        { name: 'TypeScript', icon: 'https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg' },
        { name: 'Node.js', icon: 'https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg' },
        { name: 'React', icon: 'https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg' },
        { name: 'Tailwind', icon: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg' },
        { name: 'PostgreSQL', icon: 'https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg' },
        { name: 'Docker', icon: 'https://www.vectorlogo.zone/logos/docker/docker-icon.svg' },
        { name: 'AWS', icon: 'https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg' }
      ].map((tech) => (
        <div key={tech.name} className="relative w-16 md:w-24 h-16 md:h-24 transition-all duration-500 cursor-pointer hover:scale-110" title={tech.name}>
             <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain" />
        </div>
      ))}
    </div>
  </section>
)

// 8. CASE STUDIES
const CaseStudies = () => (
  <section className="py-32 bg-white" id="work">
    <div className="section-container mb-20">
      <SectionEyebrow>Case Studies</SectionEyebrow>
      <h2 className="text-4xl md:text-6xl font-black text-[#2E294E]">Real Engineering Impact</h2>
    </div>

    <div className="section-container grid lg:grid-cols-3 gap-10">
      {[
        {
          stat: '40%',
          label: 'Faster Load Time',
          name: 'Enterprise Analytics',
          client: 'Logistics Leader',
          desc: 'Rebuilt a data-heavy analytics dashboard with React + TypeScript, achieving sub-second TTI and handling complex real-time state.'
        },
        {
          stat: '70%',
          label: 'Bounce Rate Elimination',
          name: 'FinTech Growth',
          client: 'FinTech Startup',
          desc: 'Re-engineered a high-traffic landing page with SSR/SSG patterns, cutting mobile load time by 60% and tripling conversion rate.'
        },
        {
          stat: '95%+',
          label: 'Code Coverage',
          name: 'AI Discovery Hub',
          client: 'AI Startup',
          desc: 'Delivered a fully tested, production-hardened platform with automated CI/CD pipelines and zero critical bugs at launch.'
        }
      ].map((caseStudy, i) => (
        <FadeInUp key={i} delay={i * 0.1} className="agency-card bg-white p-12 border border-[#541388]/5 flex flex-col items-start h-full">
          <div className="mb-8">
            <span className="text-5xl font-black text-[#FFD400] block mb-2">{caseStudy.stat}</span>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#2E294E]/40 leading-none">{caseStudy.label}</span>
          </div>

          <h4 className="text-2xl font-black text-[#2E294E] mb-3">{caseStudy.name}</h4>
          <div className="px-3 py-1 bg-[#541388] text-white rounded-full text-[9px] font-black uppercase tracking-widest mb-6">
            {caseStudy.client}
          </div>

          <p className="text-[#2E294E]/70 font-medium leading-relaxed flex-1">
            {caseStudy.desc}
          </p>

          <Link href={`/case-studies/enterprise-ecosystem`} className="mt-10 group flex items-center gap-2 text-[#D90368] font-black uppercase tracking-widest text-[11px]">
            Case Study <MoveRight className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </FadeInUp>
      ))}
    </div>
  </section>
)

// 9. TESTIMONIALS
const Testimonials = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: 'start' }, [
    AutoScroll({ speed: 1, stopOnInteraction: false, stopOnMouseEnter: true }) as any
  ])

  const reviews = [
    { name: "Rob Gudipudi", role: "CTO, Ensaar Global", quote: "The architectural integrity and performance optimizations delivered by BrylCodes were instrumental in our scaling efforts." },
    { name: "Desmond Leong", role: "CEO, Genesiv", quote: "A rare find. They take full ownership of the product and deliver engineering excellence consistently." },
    { name: "Steve Conman", role: "PM, Fluid", quote: "Speed, reliability, and precision. The perfect partner for high-velocity software development." },
    { name: "Ritika Nihara", role: "QA Engineer, Genesiv", quote: "Code quality is exceptional. Auditable, modular, and built for production at scale." },
    { name: "Sachin", role: "Tech Lead, Nippon Data", quote: "Mastery over complex backend systems. They solved our data synchronization bottlenecks overnight." },
    { name: "Harper David", role: "Team Lead, Healthcare", quote: "Zero-compromise security and HIPAA compliance were delivered perfectly in our cloud migration." },
    { name: "Will Mangthom", role: "Owner, Fitness Central", quote: "Transformed our digital experience and tripled our conversion rates through deep technical SEO." }
  ]

  return (
    <section className="py-32 bg-[#F1E9DA] relative overflow-hidden" id="testimonials">
      <div className="section-container mb-24 text-center">
        <SectionEyebrow>Success Stories</SectionEyebrow>
        <h2 className="text-4xl md:text-6xl font-black text-[#2E294E] tracking-tight">Trusted by High-Velocity Founders</h2>
      </div>

      <div className="w-full relative px-4" style={{ maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)' }}>
        <div className="embla overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
          <div className="embla__container flex py-6">
            {reviews.map((rev, i) => (
              <div key={i} className="embla__slide flex-[0_0_80%] md:flex-[0_0_40%] lg:flex-[0_0_28%] pl-6 md:pl-10">
                <div className="bg-white p-10 rounded-4xl border border-[#541388]/10 h-full flex flex-col justify-between hover:border-[#D90368]/20 transition-all group">
                  <div>
                    <Quote className="text-[#FFD400] mb-8 group-hover:scale-110 transition-transform duration-500" size={32} />
                    <p className="text-lg md:text-xl text-[#2E294E]/90 font-medium leading-relaxed italic">
                      "{rev.quote}"
                    </p>
                  </div>
                  <div className="mt-10 flex flex-col border-t border-[#541388]/5 pt-6">
                    <h4 className="text-lg font-black text-[#2E294E]">{rev.name}</h4>
                    <p className="text-[9px] font-black uppercase tracking-[0.2em] text-[#541388]/40">{rev.role}</p>
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

// 10. CTA FOOTER
const CTAFooter = () => (
  <section className="py-32 bg-[#2E294E] relative overflow-hidden" id="contact">
    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none" />
    <div className="section-container relative z-10">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <FadeInUp className="space-y-8">
          <SectionEyebrow className="text-[#FFD400] border-[#FFD400]/20">Start a Collaboration</SectionEyebrow>
          <h2 className="text-5xl md:text-[80px] font-black text-white leading-[0.85] tracking-tight">
            Ready to <span className="text-[#D90368]">scale</span> your vision?
          </h2>
          <p className="text-xl text-white/60 font-medium max-w-lg leading-relaxed">
            I am currently reviewing applications for new enterprise partnerships. Let's discuss how I can build your high-performance ecosystem or <Link href="https://cal.com/brylcodes/30min" className="text-[#FFD400] underline underline-offset-4 decoration-2">schedule a direct sync</Link>.
          </p>
          <div className="pt-8 border-t border-white/10 flex items-center gap-6">
            <div className="w-12 h-12 bg-[#D90368] rounded-full flex items-center justify-center shrink-0">
              <span className="text-white font-black text-lg">!</span>
            </div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#FFD400]">
              Complimentary Architecture Review Included
            </p>
          </div>
        </FadeInUp>

        <FadeInUp delay={0.2}>
          <ContactForm />
        </FadeInUp>
      </div>
    </div>
  </section>
)

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// MAIN PAGE
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export default function AgencyLandingPage() {
  return (
    <div className="bg-[#F1E9DA] min-h-screen selection:bg-[#D90368]/20 selection:text-[#D90368]">
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
