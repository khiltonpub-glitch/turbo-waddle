'use client'

import { motion } from 'framer-motion'

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-gradient-to-br from-ink via-pitch to-grass/30">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/images/backgrounds/hero-background.jpg')`,
            backgroundPosition: 'center 40%'
          }}
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/70 to-ink/90" />
      </div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(198,168,91,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(198,168,91,0.03) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }} />
      </div>

      {/* Glow Effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-grass/40 rounded-full blur-[120px] animate-glow" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <p className="text-xs lg:text-sm font-semibold tracking-[0.3em] text-gold uppercase">
            2026 FIFA World Cup
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tight text-chalk uppercase leading-[0.9] mb-8"
        >
          The World
          <span className="block text-gold italic font-light text-4xl md:text-5xl lg:text-6xl mt-4 mb-4 tracking-wider">
            In a City
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl md:text-2xl lg:text-3xl font-light text-warm-gray italic mb-12 tracking-wide"
        >
          One tournament. Many cultures. Infinite stories.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-sm md:text-base lg:text-lg text-chalk/70 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          A premium documentary and cultural media project exploring how the FIFA World Cup transforms cities through football, food, community, business, and identity.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <button
            onClick={() => scrollToSection('sponsors')}
            className="w-full sm:w-auto px-10 py-4 bg-gold text-ink text-sm font-bold tracking-widest uppercase hover:bg-gold-light hover:shadow-2xl hover:shadow-gold/30 transition-all duration-300"
          >
            Become a City Host Sponsor
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="w-full sm:w-auto px-10 py-4 bg-transparent border-2 border-gold text-gold text-sm font-bold tracking-widest uppercase hover:bg-gold hover:text-ink transition-all duration-300"
          >
            Explore the Project
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
