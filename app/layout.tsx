import type { Metadata } from 'next'
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Saurabh Chidrawar | Java Backend Engineer',
  description:
    'Java Backend Engineer with 3+ years of experience building scalable microservices, event-driven systems, and cloud-native applications with Java, Spring Boot, Kafka, and AWS.',
  keywords: [
    'Saurabh Chidrawar',
    'Java',
    'Backend Engineer',
    'Spring Boot',
    'Kafka',
    'AWS',
    'Microservices',
    'Portfolio',
  ],
  authors: [{ name: 'Saurabh Chidrawar' }],
  creator: 'Saurabh Chidrawar',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Saurabh Chidrawar | Java Backend Engineer',
    description:
      'Java Backend Engineer specializing in microservices, Apache Kafka, AWS EMR migrations, and enterprise financial analytics platforms.',
    siteName: 'Saurabh Chidrawar Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Saurabh Chidrawar | Java Backend Engineer',
    description:
      'Java Backend Engineer specializing in microservices, Apache Kafka, AWS, and cloud-native distributed systems.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased bg-background">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
