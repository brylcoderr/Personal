'use client'

import { Mail, Linkedin, Twitter, Github, Terminal, Code2, Heart } from 'lucide-react'
import { motion } from 'framer-motion'

const socialLinks = [
  { href: 'https://github.com/shubham', icon: Github, label: 'GitHub' },
  { href: 'https://linkedin.com/in/shubham-kushwah', icon: Linkedin, label: 'LinkedIn' },
  { href: 'https://twitter.com/shubham', icon: Twitter, label: 'Twitter' },
  { href: 'mailto:shubham@example.com', icon: Mail, label: 'Email' },
]

const quickLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#case-studies', label: 'Work' },
  { href: '#contact', label: 'Contact' },
]

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-background to-card border-t border-primary/10">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary via-purple-500 to-pink-500 flex items-center justify-center">
                  <Terminal className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Shubham.dev
                </span>
              </div>
              <p className="text-foreground/70 max-w-md">
                Full-Stack Developer crafting efficient, scalable applications. 
                Terminal enthusiast, clean code advocate, and Git flow master.
              </p>
              <div className="flex items-center gap-2 text-sm text-foreground/60 font-mono">
                <Code2 size={16} className="text-primary" />
                <span>{'> Building amazing things with code_'}</span>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-semibold mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-foreground/70 hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">▹</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-semibold mb-4 text-foreground">Connect</h4>
            <div className="space-y-3">
              {socialLinks.map((link) => {
                const Icon = link.icon
                return (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-foreground/70 hover:text-primary transition-colors group"
                    whileHover={{ x: 4 }}
                  >
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon size={16} />
                    </div>
                    {link.label}
                  </motion.a>
                )
              })}
            </div>
          </motion.div>
        </div>

        <div className="border-t border-primary/10 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-sm text-foreground/60 flex items-center gap-2"
            >
              <span>© {new Date().getFullYear()} Shubham Kushwah. Built with</span>
              <Heart size={14} className="text-red-500 fill-red-500 animate-pulse" />
              <span>and lots of coffee</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 text-xs text-foreground/50 font-mono"
            >
              <span className="flex items-center gap-1">
                <span className="text-green-500">✓</span> Next.js
              </span>
              <span className="flex items-center gap-1">
                <span className="text-green-500">✓</span> TypeScript
              </span>
              <span className="flex items-center gap-1">
                <span className="text-green-500">✓</span> Tailwind
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}
