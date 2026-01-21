'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import {
  Search,
  BarChart3,
  Palette,
  Code,
  CheckCircle,
  Rocket,
  Headphones,
} from 'lucide-react'
import process from '@/src/data/process.json'
import { SwipeCards } from './swipe-cards'

const iconMap: Record<string, React.ComponentType<{ size: number }>> = {
  Search,
  BarChart3,
  Palette,
  Code,
  CheckCircle,
  Rocket,
  Headphones,
}

export function Process() {
  const renderProcessCard = (step: any, index: number) => {
    const IconComponent = iconMap[step.icon] || Search

    return (
      <Card className="p-6 sm:p-8 relative overflow-hidden bg-gradient-to-br from-card to-card/50 border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 h-full flex flex-col group">
        {/* Background gradient on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none"></div>

        <div className="relative flex gap-4 h-full flex-col">
          {/* Step Number & Icon */}
          <div className="flex items-start gap-4">
            <motion.div
              className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center text-primary font-bold text-lg group-hover:from-primary/40 group-hover:to-primary/10 group-hover:border-primary/50 transition-all duration-300 flex-shrink-0"
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              {index + 1}
            </motion.div>

            <div className="flex-1 min-w-0 pt-1">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors flex-shrink-0">
                    <IconComponent size={18} />
                  </div>
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                </div>
                <motion.span
                  className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full w-fit group-hover:bg-primary/20 transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  {step.duration}
                </motion.span>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-foreground/70 text-sm leading-relaxed">{step.description}</p>

          {/* Deliverables */}
          <div className="space-y-2 flex-1">
            <p className="text-xs font-semibold text-primary/70 uppercase tracking-wider">Deliverables</p>
            <div className="space-y-2">
              {step.deliverables.map((deliverable: string, idx: number) => (
                <motion.div
                  key={idx}
                  className="text-xs text-foreground/70 flex items-start gap-2 p-1.5 rounded hover:bg-primary/5 transition-colors"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  viewport={{ once: true }}
                >
                  <motion.span
                    className="text-primary font-bold flex-shrink-0 mt-0.5"
                    whileHover={{ scale: 1.3 }}
                  >
                    ✓
                  </motion.span>
                  <span className="leading-snug">{deliverable}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Card>
    )
  }

  return (
    <section id="process" className="py-20 sm:py-32 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-primary mb-2">OUR PROCESS</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            A Proven 7-Step Approach
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            From discovery to ongoing optimization, we follow a structured process to ensure your project succeeds.
          </p>
        </motion.div>

        {/* Swipe Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <SwipeCards
            cards={process}
            renderCard={(card, index) => renderProcessCard(card, process.indexOf(card))}
          />
        </motion.div>
      </div>
    </section>
  )
}
