import type { Metadata } from 'next'
import Head from 'next/head'
 
export const metadata: Metadata = {
  title: 'DEV - 不着陆',
  description: '不着陆是一个多媒体、泛领域的杂谈品牌',
}
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}