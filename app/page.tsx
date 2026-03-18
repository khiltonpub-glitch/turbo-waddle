import Navigation from '../components/Navigation'
import Hero from '../components/sections/Hero'
import WhatThisIs from '../components/sections/WhatThisIs'
import WhyItMatters from '../components/sections/WhyItMatters'
import Cities from '../components/sections/Cities'
import Sponsors from '../components/sections/Sponsors'
import Credibility from '../components/sections/Credibility'
import Platform from '../components/sections/Platform'
import Watch from '../components/sections/Watch'
import EmailCapture from '../components/sections/EmailCapture'
import Technology from '../components/sections/Technology'
import FinalCTA from '../components/sections/FinalCTA'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <Hero />
      <WhatThisIs />
      <WhyItMatters />
      <Cities />
      <Sponsors />
      <Credibility />
      <Platform />
      <Watch />
      <EmailCapture />
      <Technology />
      <FinalCTA />
      <Footer />
    </main>
  )
}
