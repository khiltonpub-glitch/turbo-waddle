'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Film, MapPin, Share2, Users, Globe } from 'lucide-react'

const Sponsors = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const benefits = [
    { icon: Film, text: 'Brand integration within documentary storytelling' },
    { icon: MapPin, text: 'City-specific visibility and ownership' },
    { icon: Share2, text: 'Digital and social media exposure' },
    { icon: Users, text: 'Alignment with culture, community, and global audiences' },
    { icon: Globe, text: 'Placement within a premium international project' }
  ]

  const targetSponsors = [
    'Restaurants & hospitality groups',
    'Retail & lifestyle brands',
    'Tourism organizations',
    'Breweries & beverage companies',
    'Cultural institutions',
    'Local businesses ready to scale visibility'
  ]

  return (
    <section id="sponsors" ref={ref} className="relative py-32 lg:py-40 bg-gradient-to-br from-grass/30 to-pitch border-y border-gold">
      <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs font-semibold tracking-[0.3em] text-gold uppercase mb-6">
            Partnership Opportunity
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-chalk uppercase leading-tight mb-8">
            Become a City Host Sponsor
          </h2>
          <p className="text-2xl md:text-3xl font-light text-warm-gray italic tracking-wide mb-12">
            Own your city's story inside a global moment.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="space-y-6 text-chalk/70 leading-relaxed mb-16"
        >
          <p>
            The World Cup creates a rare opportunity for local brands to be part of a global narrative.
          </p>
          <p>
            City Host Sponsors are featured as key partners in documenting their city—integrated into storytelling, visibility, and cultural moments tied to the tournament.
          </p>
        </motion.div>

        {/* Benefits */}
        <div className="grid md:grid-cols-2 gap-6 mb-16 text-left">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="flex items-start gap-4"
            >
              <benefit.icon className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
              <p className="text-chalk text-sm leading-relaxed">{benefit.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Target Sponsors */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="max-w-2xl mx-auto mb-16"
        >
          <h3 className="font-display text-2xl font-bold text-gold uppercase tracking-wider mb-8">
            Who This Is For:
          </h3>
          <div className="grid sm:grid-cols-2 gap-4 text-left">
            {targetSponsors.map((sponsor, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="text-gold mt-1">→</span>
                <p className="text-chalk/80 text-sm">{sponsor}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <button
            onClick={() => scrollToSection('contact')}
            className="px-10 py-4 bg-gold text-ink text-sm font-bold tracking-widest uppercase hover:bg-gold-light hover:shadow-2xl hover:shadow-gold/30 transition-all duration-300"
          >
            Request Sponsor Deck
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-10 py-4 bg-transparent border-2 border-gold text-gold text-sm font-bold tracking-widest uppercase hover:bg-gold hover:text-ink transition-all duration-300"
          >
            Schedule a Conversation
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Sponsors
