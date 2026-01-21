'use client'

import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Download, Terminal, Code2, Database, Cloud, GitBranch } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const stats = [
  { label: 'Years Experience', value: '5+' },
  { label: 'Projects Delivered', value: '15+' },
  { label: 'Happy Clients', value: '8+' },
  { label: 'Users Served', value: '10M+' },
]

const skills = [
  { name: 'React/Next.js', level: 95, icon: Code2, color: 'from-blue-500 to-cyan-500' },
  { name: 'TypeScript', level: 90, icon: Terminal, color: 'from-blue-600 to-blue-400' },
  { name: 'Node.js', level: 85, icon: Terminal, color: 'from-green-600 to-green-400' },
  { name: 'Python', level: 80, icon: Code2, color: 'from-yellow-600 to-yellow-400' },
  { name: 'PostgreSQL', level: 85, icon: Database, color: 'from-indigo-600 to-indigo-400' },
  { name: 'MongoDB', level: 80, icon: Database, color: 'from-green-700 to-green-500' },
  { name: 'AWS & Cloud', level: 85, icon: Cloud, color: 'from-orange-600 to-orange-400' },
  { name: 'Docker/K8s', level: 75, icon: GitBranch, color: 'from-cyan-600 to-cyan-400' },
]

const experience = [
  {
    period: '2023 - Present',
    role: 'Senior Software Engineer',
    company: 'Nippon Data Systems',
    description: 'System Architecture & Performance optimization',
  },
  {
    period: '2021 - 2023',
    role: 'Full-Stack Developer',
    company: 'Genesiv',
    description: 'Built responsive web apps with modern frameworks',
  },
  {
    period: '2019 - 2021',
    role: 'Web Developer',
    company: 'RoundPay',
    description: 'Developed financial service applications',
  },
]

export function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const skillsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!skillsRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.skill-bar',
        { width: 0 },
        {
          width: (i, target) => target.getAttribute('data-width'),
          duration: 1.5,
          ease: 'power2.out',
          stagger: 0.1,
          scrollTrigger: {
            trigger: skillsRef.current,
            start: 'top 80%',
          },
        }
      )
    }, skillsRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="about" className="relative py-20 sm:py-32 bg-card/50 overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-primary mb-2">ABOUT ME</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Terminal Enthusiast
            </span>
            {' & Clean Code Advocate'}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-foreground/70">
              Passionate full-stack developer with <span className="text-primary font-semibold">5+ years</span> of experience 
              in building modern web technologies including React, Node.js, and Python. I enjoy creating efficient, scalable 
              applications and solving complex problems through code.
            </p>

            <p className="text-lg text-foreground/70">
              Always learning and staying up-to-date with latest industry trends and best practices. My work has helped 
              serve <span className="text-primary font-semibold">10M+ users</span> and consistently delivers measurable 
              business impact through technology.
            </p>

            <div className="space-y-4 pt-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Terminal className="text-primary" size={20} />
                Experience Timeline
              </h3>
              {experience.map((exp, idx) => (
                <motion.div
                  key={`exp-${exp.period}-${idx}`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="border-l-2 border-primary/30 pl-4 py-2 hover:border-primary transition-colors"
                >
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-sm font-mono text-primary">{exp.period}</span>
                  </div>
                  <h4 className="font-semibold text-foreground">{exp.role}</h4>
                  <p className="text-sm text-foreground/60">{exp.company}</p>
                  <p className="text-sm text-foreground/70 mt-1">{exp.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4 pt-6">
              {stats.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  className="p-4 rounded-lg bg-gradient-to-br from-primary/5 to-transparent border border-primary/10 hover:border-primary/30 transition-all"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4, borderColor: 'rgba(147, 51, 234, 0.3)' }}
                >
                  <p className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                    {stat.value}
                  </p>
                  <p className="text-xs sm:text-sm text-foreground/60 mt-2 font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            <Button asChild size="lg" className="mt-4">
              <a href="/CV.pdf" download>
                <Download size={20} className="mr-2" />
                Download CV
              </a>
            </Button>
          </motion.div>

          <motion.div
            ref={skillsRef}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Code2 className="text-primary" size={20} />
                Technical Skills
              </h3>
              <div className="space-y-6">
                {skills.map((skill, idx) => {
                  const Icon = skill.icon
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      viewport={{ once: true }}
                      className="space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Icon size={16} className="text-primary" />
                          <span className="font-medium text-sm">{skill.name}</span>
                        </div>
                        <span className="text-sm text-foreground/60 font-mono">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-foreground/10 rounded-full overflow-hidden">
                        <div
                          className={`skill-bar h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                          data-width={`${skill.level}%`}
                          style={{ width: 0 }}
                        >
                          <div className="absolute inset-0 bg-white/20 animate-pulse" />
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>

            <div className="p-6 rounded-xl border border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <GitBranch className="text-primary" size={18} />
                Core Traits
              </h4>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li className="flex items-center gap-2">
                  <span className="text-primary">▹</span>
                  Terminal Enthusiast & CLI Power User
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">▹</span>
                  Clean Code Advocate
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">▹</span>
                  Git Flow Master
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">▹</span>
                  Performance Optimization Expert
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
