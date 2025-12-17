import './globals.css'
import { Roboto, Roboto_Mono } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { cn } from '@/lib/utils'
import type { Metadata, Viewport } from 'next'

const sans = Roboto({
  variable: '--font-roboto-sans',
  subsets: ['latin'],
})

const mono = Roboto_Mono({
  variable: '--font-roboto-mono',
  subsets: ['latin'],
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
}

export const metadata: Metadata = {
  title: 'Luna | Form editor',
  description: 'A form editor built with Luna',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(sans.variable, mono.variable, 'antialiased')}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          disableTransitionOnChange
          enableSystem
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
