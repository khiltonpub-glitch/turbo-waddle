'use client'

const Footer = () => {
  return (
    <footer className="relative bg-pitch border-t border-gold/10 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="font-display text-3xl font-bold text-gold uppercase tracking-wider mb-2">
              The World In A City
            </h3>
            <p className="text-warm-gray text-xs tracking-wider">
              2026 FIFA World Cup Documentary
            </p>
          </div>

          {/* Meta */}
          <div className="text-center md:text-right text-warm-gray text-xs tracking-wider leading-relaxed uppercase">
            <p>A Hilton Sports Group Production</p>
            <p className="mt-1">© 2025 The World In A City</p>
            <p className="mt-1 text-gold/60">All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
