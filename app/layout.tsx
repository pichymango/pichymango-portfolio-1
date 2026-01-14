import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Archit Gupta - Portfolio",
  description: "Persuing Electrical and copmputer engineering in Shiv Nadar Institution Of Eminence .Currently focusing on DSA and my major.",
  keywords: ["portfolio", "developer", "pichymango", "github"],
  authors: [{ name: "Archit Gupta" }],
  openGraph: {
    title: "Archit Gupta - Portfolio",
    description: "Persuing Electrical and copmputer engineering in Shiv Nadar Institution Of Eminence .Currently focusing on DSA and my major.",
    images: ["https://avatars.githubusercontent.com/u/175595543?v=4"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Archit Gupta - Portfolio",
    description: "Persuing Electrical and copmputer engineering in Shiv Nadar Institution Of Eminence .Currently focusing on DSA and my major.",
    images: ["https://avatars.githubusercontent.com/u/175595543?v=4"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}