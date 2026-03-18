'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Credibility = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const highlights = [
    'Emmy-nominated for All In: More To Gain',
    '13+ years in sports media (USA Today, Sporting News, SB Nation)',
    'Documentary producer and director',
    'Founder of Hilton Sports Group',
    'Creator of culturally-driven sports storytelling platforms'
  ]

  return (
    <section ref={ref} className="relative py-32 lg:py-40 bg-ink">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-1"
          >
            <div className="relative w-full h-[500px] bg-pitch border border-gold/20 overflow-hidden">
              <img 
                src="/images/team/kendall-hilton.jpg" 
                alt="Kendall Hilton - Creator" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <p className="text-xs font-semibold tracking-[0.3em] text-gold uppercase mb-6">
              The Creator
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-chalk uppercase leading-tight mb-8">
              Built by an Emmy-Nominated Sports Storyteller
            </h2>
            
            <div className="space-y-6 text-chalk/70 leading-relaxed mb-10">
              <p>
                <em className="text-chalk">The World In a City</em> is created by Kendall Hilton, an Emmy-nominated filmmaker and sports storyteller with over a decade of experience covering and documenting the culture of sports.
              </p>
              <p>
                From high school football to global narratives, his work focuses on the intersection of sport, community, and identity.
              </p>
            </div>

            <ul className="space-y-4 mb-10">
              {highlights.map((highlight, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="border-l-2 border-gold pl-6 text-chalk/80 text-sm leading-relaxed"
                >
                  {highlight}
                </motion.li>
              ))}
            </ul>

            <p className="text-gold italic text-lg leading-relaxed">
              This project brings together storytelling, strategy, and cultural insight at a global level.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Credibility
