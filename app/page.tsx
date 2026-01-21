import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Services } from '@/components/services'
import { CaseStudies } from '@/components/case-studies'
import { Process } from '@/components/process'
import { Testimonials } from '@/components/testimonials'
import { LeadMagnet } from '@/components/lead-magnet'
import { ContactForm } from '@/components/contact-form'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main>
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
    </main>
  )
}
