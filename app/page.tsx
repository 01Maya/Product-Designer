import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import FeaturedWork from '@/components/FeaturedWork'
import Experience from '@/components/Experience'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'

export default function Page() {
  return (
    <>
      <Navbar />

      <main>
        <ScrollReveal direction="scale">
          <Hero />
        </ScrollReveal>
        <ScrollReveal direction="left">
          <About />
        </ScrollReveal>
        <ScrollReveal direction="right">
          <Services />
        </ScrollReveal>
        <ScrollReveal direction="up">
          <FeaturedWork />
        </ScrollReveal>
        <ScrollReveal direction="left">
          <Experience />
        </ScrollReveal>
        <ScrollReveal direction="right">
          <Testimonials />
        </ScrollReveal>
        <ScrollReveal direction="up">
          <FAQ />
        </ScrollReveal>
      </main>

      <ScrollReveal direction="scale">
        <Footer />
      </ScrollReveal>
    </>
  )
}
