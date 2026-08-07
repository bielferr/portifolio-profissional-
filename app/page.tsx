import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import InteractiveDemos from '../components/InteractiveDemos'
import BusinessExamples from '../components/BusinessExamples'
import Projects from '../components/Projects'
import Process from '../components/Process'
import Technologies from '../components/Technologies'
import About from '../components/About'
import FAQ from '../components/FAQ'
import CTABlock from '../components/CTA'
import Terminal from '../components/Terminal'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <Navbar />
      <Hero />
      <Services />
      <InteractiveDemos />
      <BusinessExamples />
      <Projects />
      <Process />
      <Technologies />
      <About />
      <FAQ />
      <Terminal />
      <CTABlock />
      <Footer />
    </main>
  )
}
