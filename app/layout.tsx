import type { Metadata } from 'next'
import Head from 'next/head'

import { SpeedInsights } from "@vercel/speed-insights/next"
 
// These styles apply to every route in the application
import './globals.css'
 
export const metadata: Metadata = {
  title: '不着陆',
  description: '不着陆是一个多媒体、泛领域的杂谈品牌',
}
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  )
}