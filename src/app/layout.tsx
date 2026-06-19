import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import FloatingEnquire from '@/components/FloatingEnquire'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Anticlockwise | Elite Academic Excellence',
  description: 'Anticlockwise – premier coaching classes for JEE, NEET, and competitive exams. Expert faculty, proven results, and personalised learning for every student.',
  keywords: 'coaching classes, JEE coaching, NEET coaching, competitive exams, Anticlockwise',
  openGraph: {
    title: 'Anticlockwise | Elite Academic Excellence',
    description: 'Engineering academic dominance through strategic planning and expert mentorship.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400..900;1,6..96,400..900&family=Metrophobic&family=Source+Serif+4:ital,opsz,wght@0,8..60,200..900;1,8..60,200..900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        <main className="mt-20">
          {children}
        </main>
        <FloatingEnquire />
        <Footer />
      </body>
    </html>
  )
}
