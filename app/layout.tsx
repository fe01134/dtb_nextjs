import "/styles/globals.css"
import { Metadata } from "next"
import { Inter } from 'next/font/google';

import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { SiteHeader } from "@/components/site-header"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"

import MarginWidthWrapper from '@/components/margin-width-wrapper';
import PageWrapper from '@/components/page-wrapper';
import type { Viewport } from 'next'


const inter = Inter({ subsets: ['latin'] });
 
export const viewport: Viewport = {
  themeColor: 'white',
}

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

//export default function RootLayout({ children }: RootLayoutProps) {
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )} 
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="relative flex min-h-screen flex-col">
              <SiteHeader />
    
              
          <main className="flex-1">

            <MarginWidthWrapper>
              <PageWrapper>{children}</PageWrapper>
            </MarginWidthWrapper>


          </main>
            </div>
            <TailwindIndicator />


          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
