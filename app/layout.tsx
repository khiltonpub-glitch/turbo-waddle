import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'The World In A City — 2026 FIFA World Cup Documentary',
  description: 'A premium documentary and cultural media project exploring how the FIFA World Cup transforms cities through football, food, community, business, and identity.',
  keywords: ['FIFA World Cup', 'Documentary', 'Sports', 'Culture', 'Cities', '2026'],
  openGraph: {
    title: 'The World In A City',
    description: 'One tournament. Many cultures. Infinite stories.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="grain">
        {children}
      </body>
    </html>
  )
}
