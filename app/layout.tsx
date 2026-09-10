import { Analytics } from '@vercel/analytics/next'
import { Inter, Playfair_Display, Noto_Serif_Devanagari } from 'next/font/google'
import type { Metadata, Viewport } from 'next'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })
const devanagariSerif = Noto_Serif_Devanagari({ subsets: ['devanagari'], variable: '--font-devanagari-serif' })

export const metadata: Metadata = {
  title: 'गणपती बाप्पा मोरया | भट्ट परिवार',
  description: 'भट्ट परिवाराकडून श्री गणेशाच्या आगमनाचे हार्दिक निमंत्रण.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#260b0e',
  userScalable: true,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="mr" className={`${inter.variable} ${playfair.variable} ${devanagariSerif.variable} bg-[#19060d]`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
