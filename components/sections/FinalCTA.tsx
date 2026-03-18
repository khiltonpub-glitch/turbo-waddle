'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const FinalCTA = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const buttons = [
    { text: 'Become a Sponsor', action: () => scrollToSection('sponsors'), primary: true },
    { text: 'Partner With Us', action: () => scrollToSection('platform'), primary: false },
    { text: 'Join the Audience', action: () => scrollToSection('email'), primary: false },
    { text: 'Contact the Team', action: () => window.location.href = 'mailto:contact@theworldinacity.com', primary: false }
  ]

  return (
    <section id="contact" ref={ref} className="relative py-40 lg:py-48 bg-ink text-center">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tight text-chalk uppercase leading-tight mb-16"
        >
          Bring Your City Into the Story
        </motion.h2>

        <div className="flex flex-wrap gap-6 justify-center">
          {buttons.map((button, index) => (
            <motion.button
              key={button.text}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              onClick={button.action}
              className={`px-10 py-4 text-sm font-bold tracking-widest uppercase transition-all duration-300 ${
                button.primary
                  ? 'bg-gold text-ink hover:bg-gold-light hover:shadow-2xl hover:shadow-gold/30'
                  : 'bg-transparent border-2 border-gold text-gold hover:bg-gold hover:text-ink'
              }`}
            >
              {button.text}
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FinalCTA
