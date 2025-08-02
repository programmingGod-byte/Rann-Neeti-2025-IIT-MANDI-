import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { bebasNeue, inter } from "@/lib/fonts"
import "./globals.css"

export const metadata: Metadata = {
  title: "Rann-Neeti | IIT Mandi",
  description: "Created with LOVE ",
  generator: "me",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
<link href="https://fonts.googleapis.com/css2?family=Anton&family=Archivo+Black&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet"></link>
        <meta charSet="UTF-8" />
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
  --font-inter: ${inter.variable};
  --font-bebas-neue: ${bebasNeue.variable};
}
        `}</style>
      </head>
      <body className={`${inter.variable} ${bebasNeue.variable} font-sans`}>{children}</body>
    </html>
  )
}
