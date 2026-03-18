'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-ink/95 backdrop-blur-md border-b border-gold/20 shadow-2xl'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-display text-xl lg:text-2xl font-bold tracking-wider text-chalk hover:text-gold transition-colors uppercase"
          >
            The World In A City
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
            <button onClick={() => scrollToSection('cities')} className="nav-link">Cities</button>
            <button onClick={() => scrollToSection('sponsors')} className="nav-link">Sponsors</button>
            <button onClick={() => scrollToSection('platform')} className="nav-link">Partners</button>
            <button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button>
          </div>

          {/* CTA */}
          <button
            onClick={() => scrollToSection('sponsors')}
            className="hidden lg:block px-6 py-3 bg-transparent border border-gold text-gold text-xs font-semibold tracking-widest uppercase hover:bg-gold hover:text-ink transition-all duration-300"
          >
            Become a Sponsor
          </button>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navigation
