'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Platform = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const features = [
    { title: 'Episodic', subtitle: 'Documentary content' },
    { title: 'Brand', subtitle: 'Integrated storytelling' },
    { title: 'Digital', subtitle: 'Media and audience platforms' },
    { title: 'City-Based', subtitle: 'Activations and partnerships' },
    { title: 'Long-Term', subtitle: 'Content and licensing opportunities' }
  ]

  return (
    <section id="platform" ref={ref} className="relative py-32 lg:py-40 bg-gradient-to-br from-pitch to-grass/20 border-y border-gold/10">
      <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs font-semibold tracking-[0.3em] text-gold uppercase mb-6">
            Scale & Vision
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-chalk uppercase leading-tight mb-12">
            A Scalable Global Media Property
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="space-y-6 text-chalk/70 leading-relaxed mb-16 max-w-3xl mx-auto"
        >
          <p>
            <em className="text-chalk">The World In a City</em> is more than a documentary—it is a multi-layered storytelling platform built for expansion.
          </p>
          <p>
            Across cities, sponsors, and audiences, the project is designed to scale into:
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-[2px] bg-gold/20 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="bg-pitch/80 p-8 lg:p-10 text-center"
            >
              <h3 className="text-xs font-semibold tracking-widest text-gold uppercase mb-2">
                {feature.title}
              </h3>
              <p className="text-warm-gray italic text-sm">
                {feature.subtitle}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-gold italic text-xl lg:text-2xl leading-relaxed mb-12"
        >
          This is a platform built at the intersection of sport, culture, and commerce.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          <button
            onClick={() => scrollToSection('contact')}
            className="px-10 py-4 bg-gold text-ink text-sm font-bold tracking-widest uppercase hover:bg-gold-light hover:shadow-2xl hover:shadow-gold/30 transition-all duration-300"
          >
            Explore Partnership Opportunities
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Platform
