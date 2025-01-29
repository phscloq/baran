import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from './light-context'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Baran's Portfolio",
  description: 'Welcome to my personal portfolio website! Explore my projects, skills, and experience in web development and design.',
  keywords: [
    'Baran',
    'Portfolio',
    'Web Development',
    'Frontend Developer',
    'React',
    'Next.js',
    'JavaScript',
    'TypeScript',
    'Tailwind CSS',
    'UI/UX Design',
  ],
  authors: [{ name: 'Baran', url: 'https://www.ybarandogan.com' }],
  openGraph: {
    title: "Baran's Portfolio",
    description: 'Welcome to my personal portfolio website! Explore my projects, skills, and experience in web development and design.',
    url: 'https://www.ybarandogan.com',
    siteName: "Baran's Portfolio",
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Baran's Portfolio",
    description: 'Welcome to my personal portfolio website! Explore my projects, skills, and experience in web development and design.',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico', // Replace with your favicon path
    shortcut: '/favicon-16x16.png', // Replace with your shortcut icon path
    apple: '/apple-touch-icon.png', // Replace with your Apple touch icon path
  },
  manifest: '/site.webmanifest', 
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script 
         dangerouslySetInnerHTML={{
          __html: `
          (function() {
              const storedTheme = localStorage.getItem('theme');
              const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
              const theme = storedTheme || (prefersDark ? 'dark' : 'light');
              console.log('Inline script executed. Theme:', theme);
              document.documentElement.classList.toggle('dark', theme === 'dark');
          })();
          `,
      }}
        />
      </head>
      <ThemeProvider>
      <body className={`${inter.className} bg-gray-50  dark:bg-slate-900 `}
      >
          {children}
      </body>
      </ThemeProvider>
    </html>
  )
}
