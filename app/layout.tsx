import type { Metadata } from 'next'
import { Open_Sans, Pacifico, Mouse_Memoirs } from 'next/font/google'
import './globals.css'

const openSans = Open_Sans({ 
  subsets: ['latin'],
  weight: ['300', '600'], // light and semibold weights
  variable: '--font-opensans',
  display: 'swap',
})

const pacifico = Pacifico({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-pacifico',
  display: 'swap',
})

const mouseMemoirs = Mouse_Memoirs({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-mousememoirs',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Hikeroo - Your Ultimate Hiking Companion',
  description: 'From gear lists to meal plans and weather alerts – get everything you need for your trip, all in one app.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${openSans.variable} ${pacifico.variable} ${mouseMemoirs.variable} font-sans`}>
        {children}
      </body>
    </html>
  )
} 