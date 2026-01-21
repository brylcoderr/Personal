'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles } from 'lucide-react'
import { GSAPInteractiveBackground } from './gsap-interactive-background'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
}

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* GSAP Interactive Background */}
      <GSAPInteractiveBackground />

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center space-y-8"
        >
          {/* Badge */}
          <motion.div variants={badgeVariants}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium">
              <Sparkles size={16} className="text-primary" />
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Full-Stack Developer & System Architect
              </span>
            </div>
          </motion.div>

          {/* Heading */}
          <motion.div variants={itemVariants}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="text-foreground">Building Epic Web</span>
              <br />
              <span className="bg-gradient-to-r from-primary via-primary to-primary/60 bg-clip-text text-transparent">
                Applications That Scale
              </span>
            </h1>
          </motion.div>

          {/* Subheading */}
          <motion.p variants={itemVariants} className="text-lg sm:text-xl text-foreground/70 max-w-2xl mx-auto">
            We create beautiful, high-performance websites and applications that attract customers and drive real business results.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <Button size="lg" className="group" asChild>
              <a href="#contact">
                Get Started
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#case-studies">View Case Studies</a>
            </Button>
          </motion.div>

          {/* Trust Signals */}
          <motion.div variants={itemVariants} className="pt-12 border-t border-border">
            <p className="text-sm text-foreground/60 mb-6">Trusted by leading companies</p>
            <div className="flex items-center justify-center gap-8 flex-wrap">
              {['Acme Co', 'DataSync', 'Nexus', 'InsightData'].map((company) => (
                <div key={company} className="text-foreground/50 font-medium text-sm">
                  {company}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      >
        <div className="flex flex-col items-center gap-2 text-foreground/50">
          <p className="text-xs uppercase tracking-widest">Scroll to explore</p>
          <div className="w-6 h-10 border-2 border-current rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-current rounded-full animate-pulse"></div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
