'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Play } from 'lucide-react'

const Watch = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section ref={ref} className="relative py-32 lg:py-40 bg-ink">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs font-semibold tracking-[0.3em] text-gold uppercase mb-6">
            Preview
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-chalk uppercase leading-tight mb-8">
            Watch the Vision
          </h2>
          <p className="text-xl md:text-2xl font-light text-warm-gray italic tracking-wide mb-16">
            A first look at the world inside the city.
          </p>
        </motion.div>

        {/* Video Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative aspect-video bg-pitch border border-gold/20 mb-12 overflow-hidden group cursor-pointer"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-grass/20 to-transparent" />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-gold/20 border-2 border-gold flex items-center justify-center mb-6 group-hover:bg-gold/30 group-hover:scale-110 transition-all duration-300">
              <Play className="w-8 h-8 text-gold fill-gold" />
            </div>
            <p className="text-warm-gray italic text-lg">Teaser Video Placeholder</p>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-chalk/70 mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          Preview the tone, style, and storytelling approach behind the project.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <button
            onClick={() => scrollToSection('email')}
            className="px-10 py-4 bg-transparent border-2 border-gold text-gold text-sm font-bold tracking-widest uppercase hover:bg-gold hover:text-ink transition-all duration-300"
          >
            Get Updates When Episodes Drop
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Watch
