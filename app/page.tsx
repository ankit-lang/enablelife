import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { UserJourney } from '@/components/user-journey'
import { ServicesSection } from '@/components/services-section'
import { ReasonsSection } from '@/components/reasons-section'
import { ContactForm } from '@/components/contact-form'
import { BilingualSection } from '@/components/bilingual-section'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="bg-white">
      <Navbar />
      <Hero />
      <UserJourney />
      <ServicesSection />
      <ReasonsSection />
      <ContactForm />
      <BilingualSection />
      <Footer />
    </main>
  )
}
