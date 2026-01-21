'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, TrendingUp } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import caseStudies from '@/src/data/case-studies.json'

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
    transition: { duration: 0.8 },
  },
}

export function CaseStudies() {
  return (
    <section id="case-studies" className="py-20 sm:py-32 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-primary mb-2">CASE STUDIES</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Real Results from Real Projects
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Explore how we've helped companies achieve their goals through strategic design and development.
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {caseStudies.map((study, idx) => (
            <motion.div
              key={study.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
            >
              <Link href={`/case-studies/${study.id}`}>
                <Card className="overflow-hidden h-full flex flex-col cursor-pointer group border border-primary/10 hover:border-primary/30 transition-all duration-300 bg-gradient-to-br from-card to-card/50 hover:shadow-2xl hover:shadow-primary/10">
                  {/* Image Container */}
                  <div className="relative h-48 sm:h-56 overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5">
                    <motion.div
                      className="relative w-full h-full"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                    >
                      <Image
                        src={study.coverImage || "/placeholder.svg"}
                        alt={study.title}
                        fill
                        className="object-cover"
                      />
                    </motion.div>

                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-6 flex flex-col">
                    {/* Tags */}
                    <div className="flex gap-2 mb-4 flex-wrap">
                      {study.tags.slice(0, 2).map((tag, tagIdx) => (
                        <motion.span
                          key={tag}
                          className="px-3 py-1 rounded-full bg-gradient-to-r from-primary/10 to-primary/5 text-xs font-bold text-primary border border-primary/20 hover:border-primary/40 transition-colors"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: tagIdx * 0.1 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.05 }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>

                    {/* Title & Client */}
                    <motion.h3
                      className="text-lg sm:text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors"
                      whileHover={{ x: 4 }}
                    >
                      {study.title}
                    </motion.h3>
                    <p className="text-xs sm:text-sm text-primary/70 font-semibold uppercase tracking-wider mb-3">
                      {study.client}
                    </p>

                    {/* Outcome */}
                    <p className="text-sm text-foreground/70 mb-6 flex-1 leading-relaxed">
                      {study.outcome}
                    </p>

                    {/* Metrics */}
                    <motion.div
                      className="grid grid-cols-2 gap-4 mb-6 py-4 border-t border-primary/20"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      {study.metrics.slice(0, 2).map((metric, metricIdx) => (
                        <motion.div
                          key={metricIdx}
                          whileHover={{ scale: 1.05 }}
                          className="cursor-pointer"
                        >
                          <div className="flex items-center gap-2">
                            <motion.div
                              whileHover={{ rotate: 20, scale: 1.2 }}
                            >
                              <TrendingUp size={16} className="text-primary flex-shrink-0" />
                            </motion.div>
                            <p className="text-sm font-bold text-primary">{metric.value}</p>
                          </div>
                          <p className="text-xs text-foreground/60 mt-1">{metric.label}</p>
                        </motion.div>
                      ))}
                    </motion.div>

                    {/* CTA */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button variant="outline" className="w-full bg-transparent font-semibold hover:border-primary/50 hover:text-primary group/btn">
                        View Case Study
                        <motion.div
                          className="ml-2"
                          animate={{ x: 0 }}
                          whileHover={{ x: 4 }}
                        >
                          <ArrowRight size={16} />
                        </motion.div>
                      </Button>
                    </motion.div>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-foreground/70 mb-6">Interested in working together?</p>
          <Button size="lg" asChild>
            <a href="#contact">Start Your Project</a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
