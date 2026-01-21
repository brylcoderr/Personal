'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ArrowLeft, TrendingUp, Calendar, Users } from 'lucide-react'
import Link from 'next/link'
import caseStudies from '@/src/data/case-studies.json'

interface CaseStudyContentProps {
  study: (typeof caseStudies)[0]
}

export function CaseStudyContent({ study }: CaseStudyContentProps) {
  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-96 sm:h-[500px] pt-16">
        <Image
          src={study.coverImage || "/placeholder.svg"}
          alt={study.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-background/60 backdrop-blur-sm"></div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Link href="/#case-studies" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-6">
              <ArrowLeft size={18} />
              Back to Case Studies
            </Link>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              {study.title}
            </h1>
            <p className="text-lg text-foreground/70">{study.client}</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Meta Information */}
          <div className="grid grid-cols-3 gap-6 mb-16 pb-16 border-b border-border">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Calendar size={18} className="text-primary" />
                <p className="text-sm text-foreground/60">Date</p>
              </div>
              <p className="font-semibold">{new Date(study.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}</p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Users size={18} className="text-primary" />
                <p className="text-sm text-foreground/60">Role</p>
              </div>
              <p className="font-semibold">{study.role}</p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp size={18} className="text-primary" />
                <p className="text-sm text-foreground/60">Timeline</p>
              </div>
              <p className="font-semibold">{study.timeline}</p>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-12">
            {/* Challenge */}
            <div>
              <h2 className="text-3xl font-bold mb-4">The Challenge</h2>
              <p className="text-lg text-foreground/70 leading-relaxed">{study.challenge}</p>
            </div>

            {/* Approach */}
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Approach</h2>
              <p className="text-lg text-foreground/70 leading-relaxed">{study.approach}</p>
            </div>

            {/* Tech Stack */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Technology Stack</h3>
              <div className="flex flex-wrap gap-2">
                {study.stack.map((tech) => (
                  <span key={tech} className="px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Results */}
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 sm:p-12">
              <h2 className="text-3xl font-bold mb-8">Results & Impact</h2>
              <p className="text-lg text-foreground/70 leading-relaxed mb-8">{study.outcome}</p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {study.metrics.map((metric, idx) => (
                  <div key={idx}>
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp size={20} className="text-primary" />
                      <p className="text-2xl font-bold text-primary">{metric.value}</p>
                    </div>
                    <p className="text-sm text-foreground/60">{metric.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-card rounded-xl p-8 border border-border">
              <p className="text-2xl font-semibold text-foreground mb-6">
                "{study.testimonial}"
              </p>
              <div>
                <p className="font-bold text-foreground">{study.testimonialAuthor}</p>
                <p className="text-sm text-foreground/60">{study.testimonialRole}, {study.client}</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-20 pt-16 border-t border-border text-center">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">Ready to build something similar?</h3>
            <p className="text-lg text-foreground/70 mb-8">Let's discuss your project and create similar results for your business.</p>
            <Button size="lg" asChild>
              <a href="/#contact">Get Started</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Related Case Studies */}
      <section className="py-16 sm:py-24 bg-card/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold mb-12 text-center">More Case Studies</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {caseStudies
              .filter((cs) => cs.id !== study.id)
              .slice(0, 2)
              .map((relatedStudy) => (
                <Link key={relatedStudy.id} href={`/case-studies/${relatedStudy.id}`}>
                  <div className="group cursor-pointer">
                    <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                      <Image
                        src={relatedStudy.coverImage || "/placeholder.svg"}
                        alt={relatedStudy.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <h4 className="font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                      {relatedStudy.title}
                    </h4>
                    <p className="text-sm text-foreground/60">{relatedStudy.client}</p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
