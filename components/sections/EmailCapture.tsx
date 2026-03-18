'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const EmailCapture = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Placeholder for email capture logic
    alert(`Thanks for joining! (Demo - email not actually captured: ${email})`)
    setEmail('')
  }

  return (
    <section id="email" ref={ref} className="relative py-32 lg:py-40 bg-ink">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs font-semibold tracking-[0.3em] text-gold uppercase mb-6">
            Stay Connected
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-chalk uppercase leading-tight mb-8">
            Follow the Journey to the World Cup
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-chalk/70 leading-relaxed mb-12 max-w-2xl mx-auto"
        >
          Get exclusive updates, city announcements, behind-the-scenes content, and early access to stories as the project unfolds.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            required
            className="flex-1 px-6 py-4 bg-pitch border border-gold/20 text-chalk placeholder:text-warm-gray focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all text-sm"
          />
          <button
            type="submit"
            className="px-10 py-4 bg-gold text-ink text-sm font-bold tracking-widest uppercase hover:bg-gold-light hover:shadow-2xl hover:shadow-gold/30 transition-all duration-300 whitespace-nowrap"
          >
            Join the List
          </button>
        </motion.form>
      </div>
    </section>
  )
}

export default EmailCapture
