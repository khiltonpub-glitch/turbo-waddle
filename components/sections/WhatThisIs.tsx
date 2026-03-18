'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const WhatThisIs = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const pillars = [
    {
      icon: '⚽',
      title: 'Football',
      description: 'The game that connects the world'
    },
    {
      icon: '🌍',
      title: 'Culture',
      description: 'The traditions, food, and people behind the city'
    },
    {
      icon: '🤝',
      title: 'Community',
      description: 'The businesses and neighborhoods that make it real'
    }
  ]

  return (
    <section id="about" ref={ref} className="relative py-32 lg:py-40 bg-ink border-t border-gold/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs font-semibold tracking-[0.3em] text-gold uppercase mb-6">
              The Story
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-chalk uppercase leading-tight mb-8">
              More than a tournament. A global city story.
            </h2>
            <div className="space-y-6 text-chalk/70 leading-relaxed">
              <p>
                The World Cup is often told through matches, goals, and players. <em className="text-chalk">The World In a City</em> tells a different story.
              </p>
              <p>
                This project follows the tournament through the streets, neighborhoods, and communities that bring it to life. From local restaurants and small businesses to immigrant cultures, fan rituals, and city identity—this is where the real story lives.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="h-[400px] lg:h-[500px] bg-pitch border border-gold/20 overflow-hidden relative"
          >
            <img 
              src="/images/backgrounds/hero-background.jpg" 
              alt="The World In A City" 
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-grass/40 to-transparent" />
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="bg-pitch border border-gold/10 p-10 text-center hover:border-gold hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="text-5xl mb-6">{pillar.icon}</div>
              <h3 className="font-display text-2xl font-bold text-gold uppercase tracking-wider mb-3">
                {pillar.title}
              </h3>
              <p className="text-warm-gray italic text-sm leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhatThisIs
