import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from './light-context'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Baran's Portfolio",
  description: 'Personal portfolio website',
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
      <body className={`${inter.className}  bg-gradient-to-b  from-gray-50 to-gray-100
 dark:from-slate-900 dark:to-slate-800 `}>{children}</body>
      </ThemeProvider>
    </html>
  )
}
