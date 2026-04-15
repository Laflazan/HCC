import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-serif',
  display: 'swap',
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Sterling & Associates | Strategic Legal Excellence',
  description: 'Providing high-quality, commercially focused legal services worldwide. A full-service international law firm trusted by global clients.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/HCC_LOGO-removebg-preview.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/HCC_LOGO-removebg-preview.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/HCC_LOGO-removebg-preview.png',
        type: 'image/svg+xml',
      },
    ],
    apple: '/HCC_LOGO-removebg-preview.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
