import type { Metadata } from 'next'
import './globals.css'
import CosmicBadge from '@/components/CosmicBadge'

export const metadata: Metadata = {
  title: 'Calculator App | Modern Calculator',
  description: 'A modern, responsive calculator application with basic arithmetic operations, decimal support, and keyboard input.',
  keywords: ['calculator', 'arithmetic', 'math', 'online calculator', 'web calculator'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script src="/dashboard-console-capture.js"></script>
      </head>
      <body className="min-h-screen">
        {children}
        <CosmicBadge bucketSlug="calculator-app" />
      </body>
    </html>
  )
}