import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Inspiration Quote Generator',
  description: 'Get inspired with random quotes from famous people.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        {children}
      </body>
    </html>
  )
}