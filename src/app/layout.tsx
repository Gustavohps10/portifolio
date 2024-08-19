import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Poppins as FontSans } from 'next/font/google'

import { cn } from '@/lib/utils'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'Portifólio',
  description: 'Portifólio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="pt-br"
      className={cn(
        'min-h-screen bg-background font-sans antialiased',
        fontSans.variable,
      )}
    >
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Portifolio</title>
        <meta name="description" content="Web site created..." />
      </head>
      <body>{children}</body>
    </html>
  )
}
