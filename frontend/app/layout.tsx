import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { headers } from 'next/headers'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Together',
  description: 'Объединяем людей с ограниченными возможностями',
  openGraph: {
    title: 'Together',
    description: 'Объединяем людей с ограниченными возможностями',
    url: 'https://together24.by/',
    siteName: 'Together',
    locale: 'ru_RU',
    type: 'website',
  },
  alternates: {
    canonical: 'https://together24.by/',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // прячем хедер там, где он не нужен
  const hiddenHeaderPaths = ['/helper', '/requester']

  const headerData = headers()
  const referer = (await headerData).get('referer')

  const currentPath = referer ? new URL(referer).pathname : '/'

  const isHeaderHidden = hiddenHeaderPaths.includes(currentPath)

  return (
    <html lang="en">
      <body className="antialiased bg-white text-black">
        {!isHeaderHidden && <Header />}
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
