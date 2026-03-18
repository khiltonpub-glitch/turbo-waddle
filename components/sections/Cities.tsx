'use client'

import { motion, useInView } from 'framer-motion'
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
      image: '/images/cities/miami.jpg',
    },
    {
      name: 'Dallas',
      description: 'A crossroads of football ambition, culture, and Texas-sized spectacle.',
      image: '/images/cities/dallas.jpg',
    },
    {
      name: 'New York',
      description: "The world's stage for global culture, commerce, and competition.",
      image: '/images/cities/new-york.jpg',
    },
    {
      name: 'Los Angeles',
      description: 'Where entertainment, sport, and global identity collide.',
      image: '/images/cities/los-angeles.jpg',
    },
    {
      name: 'Atlanta',
      description: 'A rising cultural capital fueled by music, sport, and community.',
      image: '/images/cities/atlanta.jpg',
    },
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
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-grass/20 min-h-[420px]"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${city.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-transparent" />

              <div className="relative z-10 flex h-full flex-col justify-end p-8">
                <h3 className="text-3xl font-display font-bold text-chalk mb-4">
                  {city.name}
                </h3>
                <p className="text-warm-gray text-lg leading-relaxed mb-6">
                  {city.description}
                </p>
                <button
                  onClick={() => scrollToSection('sponsors')}
                  className="inline-flex items-center gap-2 text-gold font-semibold hover:gap-3 transition-all"
                >
                  Sponsor This City
                  <ArrowRight size={18} />
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
export default Cities
