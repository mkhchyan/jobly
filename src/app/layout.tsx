import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { twMerge } from 'tailwind-merge'
import '@/styles/globals.css'
import Header from '@/components/header/Header'
import { figtree, cormorantGaramond } from '@/fonts/fonts'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          figtree.variable,
          cormorantGaramond.variable,
          'scroll-smooth antialiased'
        )}
      >
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}
