"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Instagram, Twitter, Youtube, Mail, MapPin, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative py-20 bg-gradient-to-t from-black to-gray-900">
      {/* Animated flame around logo */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-orange-500 rounded-full"
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, -Math.random() * 50],
              opacity: [1, 0],
              scale: [1, 0],
            }}
            transition={{
              duration: Math.random() * 2 + 1,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
            style={{
              left: "50%",
              top: "20%",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and description */}
          <div className="lg:col-span-2">
            <motion.h3
              className="text-4xl font-black text-white mb-4 font-bebas"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="bg-gradient-to-r from-red-800 via-red-500 to-red-800 bg-clip-text text-transparent">
                Rann-Neeti
              </span>
            </motion.h3>
            <motion.p
              className="text-gray-400 mb-6 max-w-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              The ultimate college sports festival bringing together the best athletes from across the nation. Fuel the
              Fight. Embrace the Glory.
            </motion.p>
            {/* <motion.div
              className="flex gap-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Button
                size="sm"
                variant="ghost"
                className="text-pink-400 hover:text-pink-300 hover:bg-pink-400/20"
                data-cursor-hover
              >
                <Instagram className="h-5 w-5" />
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="text-cyan-400 hover:text-cyan-300 hover:bg-cyan-400/20"
                data-cursor-hover
              >
                <Twitter className="h-5 w-5" />
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="text-red-400 hover:text-red-300 hover:bg-red-400/20"
                data-cursor-hover
              >
                <Youtube className="h-5 w-5" />
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="text-yellow-400 hover:text-yellow-300 hover:bg-yellow-400/20"
                data-cursor-hover
              >
                <Mail className="h-5 w-5" />
              </Button>
            </motion.div> */}
          </div>

          {/* Quick Links */}
          <div>
            <motion.h4
              className="text-white font-bold text-lg mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Quick Links
            </motion.h4>
            <motion.ul
              className="space-y-2 text-gray-400"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <li>
                <a href="#events" className="hover:text-yellow-400 transition-colors">
                  Events
                </a>
              </li>
              <li>
                <a href="#schedule" className="hover:text-yellow-400 transition-colors">
                  Schedule
                </a>
              </li>
              <li>
                <a href="#registration" className="hover:text-yellow-400 transition-colors">
                  Registration
                </a>
              </li>
              <li>
                <a href="#leaderboard" className="hover:text-yellow-400 transition-colors">
                  Leaderboard
                </a>
              </li>
              <li>
                <a href="#team" className="hover:text-yellow-400 transition-colors">
                  Team
                </a>
              </li>
            </motion.ul>
          </div>

          {/* Contact Info */}
          <div>
            <motion.h4
              className="text-white font-bold text-lg mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Contact
            </motion.h4>
            <motion.div
              className="space-y-3 text-gray-400"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-cyan-400" />
                <span className="text-sm">Sports Complex, University Campus</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-cyan-400" />
                <span className="text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-cyan-400" />
                <span className="text-sm">info@ignite2025.com</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom bar */}
        {/* <motion.div
          className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <p className="text-gray-400 text-sm mb-4 md:mb-0">© 2025 IGNITE Sports Festival. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-yellow-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-yellow-400 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-yellow-400 transition-colors">
              Support
            </a>
          </div>
        </motion.div> */}

        {/* Mini-map with glow effect */}
        {/* <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="inline-block p-4 bg-gradient-to-r from-yellow-400/20 to-cyan-400/20 rounded-lg border border-gray-700">
            <div className="w-64 h-32 bg-gray-800 rounded-lg flex items-center justify-center relative overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent"
                animate={{ x: [-100, 300] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              />
              <span className="text-white font-bold relative z-10">University Sports Complex</span>
            </div>
          </div>
        </motion.div> */}
      </div>
    </footer>
  )
}
