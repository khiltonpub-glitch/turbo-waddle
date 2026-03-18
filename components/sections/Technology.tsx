'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Technology = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section ref={ref} className="relative py-32 lg:py-40 bg-gradient-to-br from-grass/20 to-pitch border-y border-gold/10">
      <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs font-semibold tracking-[0.3em] text-gold uppercase mb-6">
            Infrastructure
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-chalk uppercase leading-tight mb-12">
            Built for Scalable Storytelling
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="space-y-6 text-chalk/70 leading-relaxed mb-12 max-w-3xl mx-auto"
        >
          <p>
            <em className="text-chalk">The World In a City</em> is designed with long-term digital infrastructure in mind.
          </p>
          <p>
            From media storage and production workflows to audience growth and content distribution, the project is built to scale globally through cloud-based systems and modern storytelling technology.
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-gold italic text-xl lg:text-2xl leading-relaxed mb-12"
        >
          This is not just a film—it's a foundation for a connected, data-driven storytelling platform.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <button
            onClick={() => scrollToSection('contact')}
            className="px-10 py-4 bg-transparent border-2 border-gold text-gold text-sm font-bold tracking-widest uppercase hover:bg-gold hover:text-ink transition-all duration-300"
          >
            Connect on Technology Partnership
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Technology
