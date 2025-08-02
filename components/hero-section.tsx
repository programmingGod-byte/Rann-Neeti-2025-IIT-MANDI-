"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"

export default function HeroSection() {
  const [text, setText] = useState("")
  const [startContentAnimation, setStartContentAnimation] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const fullText = "Rann-Neeti"
  const { scrollY } = useScroll()
  
  // Controls the opacity of the content as you scroll down
  const contentOpacity = useTransform(scrollY, [0, 300], [1, 0])

  // Effect to track video playback and trigger animation
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleTimeUpdate = () => {
      if (video.currentTime >= 4) {
        setStartContentAnimation(true)
        video.removeEventListener("timeupdate", handleTimeUpdate)
      }
    }

    video.addEventListener("timeupdate", handleTimeUpdate)

    return () => {
      if (video) {
        video.removeEventListener("timeupdate", handleTimeUpdate)
      }
    }
  }, []) // Runs once on component mount

  // Effect for the text typing animation
  useEffect(() => {
    if (!startContentAnimation) return

    let i = 0
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1))
        i++
      } else {
        clearInterval(timer)
      }
    }, 150)

    return () => clearInterval(timer)
  }, [startContentAnimation]) // Runs when startContentAnimation becomes true

  return (
    <section className="relative h-screen flex flex-col overflow-hidden bg-black">
      {/* Background Video and Overlay */}
      <video
        ref={videoRef}
        src="/videos/background.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* Navbar */}
      <motion.nav
        className="fixed top-0 left-0 z-30 flex justify-between items-center w-full p-6 bg-transparent"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <div className="text-2xl font-bold text-white">
          <span className="bg-gradient-to-r from-red-800 via-red-500 to-red-800 bg-clip-text text-transparent font-sans">
            Rann-Neeti
          </span>
        </div>

        <div className="hidden md:flex space-x-8">
          <a href="/" className="text-white hover:text-yellow-400 transition-colors font-medium">
            Home
          </a>
          <a href="/events" className="text-white hover:text-yellow-400 transition-colors font-medium">
            Events
          </a>
          <a href="/auth" className="text-white hover:text-yellow-400 transition-colors font-medium">
            Join Us
          </a>
          <a href="/merchandise" className="text-white hover:text-yellow-400 transition-colors font-medium">
            Merch
          </a>
        </div>

        <div className="md:hidden">
          <button className="text-white hover:text-yellow-400">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </motion.nav>
      
      {/* Main Centered Content (Logo and Title) */}
      <motion.div
        className="relative z-20 flex flex-col items-center justify-center h-full w-full"
        style={{ opacity: contentOpacity }}
      >
        {/* Logo Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={startContentAnimation ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Image 
            src="/images/logo.png" 
            alt="IGNITE Logo" 
            width={200} 
            height={200} 
            className="mb-4"
            priority // Helps with LCP by loading the logo sooner
          />
        </motion.div>

        {/* Text Animation */}
        <motion.h1
          className="text-6xl md:text-8xl lg:text-9xl font-black text-white font-bebas text-center"
          initial={{ y: -100, opacity: 0 }}
          animate={startContentAnimation ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        >
          <span className="text-red-800 bg-clip-text text-transparent font-sans" style={{
            // fontFamily: 'Archivo Black, sans-serif',
          }}>
            {text}
          </span>
          {startContentAnimation && (
            <motion.span
              className="inline-block w-1 h-16 md:h-24 lg:h-32 bg-yellow-400 ml-2"
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
            />
          )}
        </motion.h1>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={startContentAnimation ? { opacity: 1 } : {}}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-white rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}