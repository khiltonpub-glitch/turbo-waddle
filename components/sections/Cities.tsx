'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight } from 'lucide-react'

const Cities = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const cities = [
    {
      name: 'Miami',
      description: 'Where global football meets Caribbean culture, nightlife, and energy.',
      image: '/images/cities/miami.jpg'
    },
    {
      name: 'Dallas',
      description: 'A crossroads of football ambition, culture, and Texas-sized spectacle.',
      image: '/images/cities/dallas.jpg'
    },
    {
      name: 'New York',
      description: 'The world's stage for global culture, commerce, and competition.',
      image: '/images/cities/new-york.jpg'
    },
    {
      name: 'Los Angeles',
      description: 'Where entertainment, sport, and global identity collide.',
      image: '/images/cities/los-angeles.jpg'
    },
    {
      name: 'Atlanta',
      description: 'A rising cultural capital fueled by music, sport, and community.',
      image: '/images/cities/atlanta.jpg'
    }
  ]

  return (
    <section id="cities" ref={ref} className="relative py-32 lg:py-40 bg-ink">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs font-semibold tracking-[0.3em] text-gold uppercase mb-6">
              Host Cities
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-chalk uppercase leading-tight mb-8">
              The Cities
            </h2>
            <p className="text-xl md:text-2xl font-light text-warm-gray italic tracking-wide">
              Every city tells a different story.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cities.map((city, index) => (
            <motion.div
              key={city.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-pitch border border-gold/10 overflow-hidden cursor-pointer hover:border-gold hover:-translate-y-3 hover:shadow-2xl hover:shadow-gold/20 transition-all duration-300"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                style={{
                  backgroundImage: `url('${city.image}')`
                }}
              />
              
              {/* Gradient overlays */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pitch/80 to-pitch" />
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10 p-12">
                <h3 className="font-display text-5xl lg:text-6xl font-bold text-chalk uppercase tracking-wider mb-6">
                  {city.name}
                </h3>
                <p className="text-warm-gray italic text-base leading-relaxed mb-8">
                  {city.description}
                </p>
                <button
                  onClick={() => scrollToSection('sponsors')}
                  className="inline-flex items-center gap-2 text-gold text-xs font-semibold tracking-widest uppercase group-hover:gap-4 transition-all duration-300"
                >
                  Sponsor {city.name} Coverage
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Cities
