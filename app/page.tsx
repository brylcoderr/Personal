'use client'

import dynamic from 'next/dynamic'
import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { SectionSkeleton } from '@/components/loading-skeleton'

const SystemCore = dynamic(() => import('@/components/system-core').then(mod => ({ default: mod.SystemCore })), {
  loading: () => <SectionSkeleton />
})

const Experience = dynamic(() => import('@/components/experience').then(mod => ({ default: mod.Experience })), {
  loading: () => <SectionSkeleton />
})

const ScrollProgress = dynamic(() => import('@/components/scroll-progress').then(mod => ({ default: mod.ScrollProgress })), { ssr: false })
const BackToTop = dynamic(() => import('@/components/back-to-top').then(mod => ({ default: mod.BackToTop })), { ssr: false })

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

const ContactForm = dynamic(() => import('@/components/contact-form').then(mod => ({ default: mod.ContactForm })), {
  loading: () => <SectionSkeleton />
})

const Footer = dynamic(() => import('@/components/footer').then(mod => ({ default: mod.Footer })))

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <main id="main-content" className="relative">
        <Navbar />
        <Hero />
        <SystemCore />
        <Experience />
        <CaseStudies />
        <Process />
        <Testimonials />
        <Services />
        <ContactForm />
        <Footer />
        <BackToTop />
      </main>
    </>
  )
}
