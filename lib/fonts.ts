import { Bebas_Neue, Inter } from "next/font/google"

export const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-bebas-neue",
})

export const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-inter",
})
