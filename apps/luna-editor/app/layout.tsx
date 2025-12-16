import './globals.css'
import { Roboto, Roboto_Mono } from 'next/font/google'
import { ThemeProvider } from '@/components/provider/theme'
import type { Metadata } from 'next'

const robotoSans = Roboto({
  variable: '--font-roboto-sans',
  subsets: ['latin'],
})

const robotoMono = Roboto_Mono({
  variable: '--font-roboto-mono',
  subsets: ['latin'],
})

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
      <body
        className={`${robotoSans.variable} ${robotoMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
