"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import Image from "next/image"

export default function HeroSection() {
  const [text, setText] = useState("")
  const [startContentAnimation, setStartContentAnimation] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
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

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest('nav')) {
        setIsMobileMenuOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [isMobileMenuOpen])

  // Close mobile menu on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isMobileMenuOpen])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

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
        className="fixed top-0 left-0 z-30 flex justify-between items-center w-full p-4 sm:p-6 bg-transparent"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <div className="text-xl sm:text-2xl font-bold text-white">
          <span className="bg-gradient-to-r from-red-800 via-red-500 to-red-800 bg-clip-text text-transparent font-sans">
            Rann-Neeti
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <a href="/" className="text-white hover:text-yellow-400 transition-colors font-medium">
            Home
          </a>
          <a href="/" className="text-white hover:text-yellow-400 transition-colors font-medium">
            Events
          </a>
          <a href="/" className="text-white hover:text-yellow-400 transition-colors font-medium">
            Join Us
          </a>
          <a href="/" className="text-white hover:text-yellow-400 transition-colors font-medium">
            Merch
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={toggleMobileMenu}
            className="text-white hover:text-yellow-400 p-2 relative z-50"
            aria-label="Toggle mobile menu"
          >
            <motion.div
              animate={isMobileMenuOpen ? { rotate: 45 } : { rotate: 0 }}
              transition={{ duration: 0.2 }}
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </motion.div>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 w-full bg-black/90 backdrop-blur-sm md:hidden"
            >
              <div className="flex flex-col space-y-4 p-6">
                <a 
                  href="/" 
                  className="text-white hover:text-yellow-400 transition-colors font-medium py-2 border-b border-gray-700/50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </a>
                <a 
                  href="/" 
                  className="text-white hover:text-yellow-400 transition-colors font-medium py-2 border-b border-gray-700/50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Events
                </a>
                <a 
                  href="/" 
                  className="text-white hover:text-yellow-400 transition-colors font-medium py-2 border-b border-gray-700/50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Join Us
                </a>
                <a 
                  href="/" 
                  className="text-white hover:text-yellow-400 transition-colors font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Merch
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
      
      {/* Main Centered Content (Logo and Title) */}
      <motion.div
        className="relative z-20 flex flex-col items-center justify-center h-full w-full px-4"
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
            width={150} 
            height={150}
            className="mb-4 sm:w-[200px] sm:h-[200px]"
            priority // Helps with LCP by loading the logo sooner
          />
        </motion.div>

        {/* Text Animation */}
        <motion.h1
          className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black text-white font-bebas text-center leading-tight"
          initial={{ y: -100, opacity: 0 }}
          animate={startContentAnimation ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        >
          <span className="bg-gradient-to-r from-red-800 via-red-800 to-red-800 bg-clip-text text-transparent font-sans">
            {text}
          </span>
          {startContentAnimation && (
            <motion.span
              className="inline-block w-0.5 sm:w-1 h-8 sm:h-16 md:h-24 lg:h-32 bg-yellow-400 ml-1 sm:ml-2"
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