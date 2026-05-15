import { useEffect } from 'react'
import Lenis from 'lenis'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Ticker from './components/Ticker'
import Quote from './components/Quote'

import AgentsGrid from './components/AgentsGrid'
import FitScorer from './components/FitScorer'
import Features from './components/Features'
import Pipeline from './components/Pipeline'
import MultiProvider from './components/MultiProvider'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import CTA from './components/CTA'
import Footer from './components/Footer'

function LandingPage() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.8,
      touchMultiplier: 1.5,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <div className="relative min-h-screen" style={{ backgroundColor: 'var(--bg)', transition: 'background-color 0.4s ease' }}>
      <div className="grain" />
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <Quote />

        <AgentsGrid />
        <FitScorer />
        <Features />
        <Pipeline />
        <MultiProvider />
        <Testimonials />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default LandingPage
