'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const WhyItMatters = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const impacts = [
    { icon: '📈', text: 'Economic impact on local businesses' },
    { icon: '🍽️', text: 'Explosion of food and hospitality culture' },
    { icon: '🌎', text: 'Global attention on local communities' },
    { icon: '🎉', text: 'Cultural pride and identity on display' },
    { icon: '🏙️', text: 'Cities redefined on the world stage' }
  ]

  return (
    <section ref={ref} className="relative py-32 lg:py-40 bg-gradient-to-br from-pitch to-grass/20 border-y border-gold/10">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs font-semibold tracking-[0.3em] text-gold uppercase mb-6">
            The Moment
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-chalk uppercase leading-tight mb-12">
            The World Cup doesn't just visit cities. It transforms them.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="space-y-6 text-chalk/70 leading-relaxed mb-16 max-w-3xl mx-auto"
        >
          <p>
            For a few weeks, cities become the center of the world. Tourism surges. Businesses thrive. Cultures collide. Identities are amplified.
          </p>
          <p className="text-chalk font-semibold text-lg">
            But most of these stories are never captured.
          </p>
          <p>
            <em className="text-chalk">The World In a City</em> documents this moment—before, during, and after the world arrives.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-[2px] bg-gold/20 mt-16">
          {impacts.map((impact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="bg-pitch/80 p-8 lg:p-10 text-center hover:bg-gold/10 transition-colors duration-300"
            >
              <div className="text-4xl mb-5">{impact.icon}</div>
              <p className="text-sm text-chalk leading-relaxed">{impact.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyItMatters
