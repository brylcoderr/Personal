'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Download, Award, Users, Zap } from 'lucide-react'

const stats = [
  { label: 'Years Experience', value: '5+' },
  { label: 'Projects Delivered', value: '15+' },
  { label: 'Happy Clients', value: '8+' },
  { label: 'Users Served', value: '10M+' },
]

const skills = [
  'React & Next.js',
  'TypeScript',
  'Node.js & Backend',
  'PostgreSQL',
  'AWS & Cloud',
  'System Architecture',
  'Performance Optimization',
  'DevOps & Docker',
]

export function About() {
  return (
    <section id="about" className="py-20 sm:py-32 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <p className="text-sm font-semibold text-primary mb-2">ABOUT ME</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                Full-Stack Developer Building Scalable Solutions
              </h2>
            </div>

            <p className="text-lg text-foreground/70">
              Passionate full-stack developer with 5+ years of experience building modern web applications. I specialize in React, Node.js, and cloud architecture, creating efficient, scalable solutions that solve complex problems. Worked with 8+ clients across SaaS, e-commerce, and fintech sectors.
            </p>

            <p className="text-lg text-foreground/70">
              I'm a clean code advocate and Git flow master who believes in building systems that are not just functional, but maintainable and performant. My work has helped serve 10M+ users and consistently delivers measurable business impact through technology.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-4">
              {stats.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  className="p-4 rounded-lg bg-gradient-to-br from-primary/5 to-transparent border border-primary/10 hover:border-primary/30 transition-colors"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4 }}
                >
                  <p className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                    {stat.value}
                  </p>
                  <p className="text-xs sm:text-sm text-foreground/60 mt-2 font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <Button asChild size="lg" className="mt-4">
              <a href="/CV.pdf" download>
                <Download size={20} className="mr-2" />
                Download CV
              </a>
            </Button>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl font-semibold mb-6">Skills & Expertise</h3>
              <div className="grid grid-cols-2 gap-3">
                {skills.map((skill, idx) => (
                  <motion.div
                    key={skill}
                    className="px-4 py-3 rounded-lg bg-gradient-to-br from-primary/5 to-transparent border border-primary/10 hover:border-primary/40 transition-all cursor-pointer group"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, borderColor: 'rgba(147, 51, 234, 0.5)' }}
                  >
                    <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                      {skill}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Highlights */}
            <div className="space-y-3">
              {[
                { icon: Award, title: 'Award Winning', desc: 'Recognized for design excellence and innovation' },
                { icon: Users, title: 'Collaborative Partner', desc: 'Work closely with clients throughout the project' },
                { icon: Zap, title: 'Results Focused', desc: 'Delivering measurable business outcomes' },
              ].map((item, idx) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={item.title}
                    className="p-4 rounded-lg bg-gradient-to-br from-primary/5 to-transparent border border-primary/10 hover:border-primary/30 flex gap-4 transition-all group cursor-pointer"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 8, borderColor: 'rgba(147, 51, 234, 0.3)' }}
                  >
                    <motion.div
                      className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary group-hover:bg-primary/30 transition-colors"
                      whileHover={{ rotate: 10, scale: 1.1 }}
                    >
                      <Icon size={20} />
                    </motion.div>
                    <div>
                      <h4 className="font-semibold mb-1 group-hover:text-primary transition-colors">{item.title}</h4>
                      <p className="text-sm text-foreground/60">{item.desc}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
