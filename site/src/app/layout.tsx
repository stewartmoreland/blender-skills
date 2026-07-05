import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Blender Skills',
  description:
    '23 Specialized Skills for Blender Artists. Transform Claude Code and Cursor into your Senior Technical Art team.',
  openGraph: {
    title: 'Blender Skills',
    description: '23 Specialized Skills for Blender Artists.',
    images: ['/banner.png'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
