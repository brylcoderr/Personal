'use client'

import dynamic from 'next/dynamic'
import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { ScrollProgress } from '@/components/scroll-progress'
import { BackToTop } from '@/components/back-to-top'
import { SectionSkeleton } from '@/components/loading-skeleton'

const Services = dynamic(() => import('@/components/services').then(mod => ({ default: mod.Services })), {
  loading: () => <SectionSkeleton />
})

const CaseStudies = dynamic(() => import('@/components/case-studies').then(mod => ({ default: mod.CaseStudies })), {
  loading: () => <SectionSkeleton />
})

const Process = dynamic(() => import('@/components/process').then(mod => ({ default: mod.Process })), {
  loading: () => <SectionSkeleton />
})

const Testimonials = dynamic(() => import('@/components/testimonials').then(mod => ({ default: mod.Testimonials })), {
  loading: () => <SectionSkeleton />
})

const LeadMagnet = dynamic(() => import('@/components/lead-magnet').then(mod => ({ default: mod.LeadMagnet })), {
  loading: () => <SectionSkeleton />
})

const ContactForm = dynamic(() => import('@/components/contact-form').then(mod => ({ default: mod.ContactForm })), {
  loading: () => <SectionSkeleton />
})

const Footer = dynamic(() => import('@/components/footer').then(mod => ({ default: mod.Footer })))

const ParticleField = dynamic(() => import('@/components/particle-field').then(mod => ({ default: mod.ParticleField })), {
  ssr: false
})

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <main id="main-content" className="relative">
        <ParticleField />
        <Navbar />
        <Hero />
        <About />
        <Services />
        <CaseStudies />
        <Process />
        <Testimonials />
        <LeadMagnet />
        <ContactForm />
        <Footer />
        <BackToTop />
      </main>
    </>
  )
}
