"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Card } from "@/components/ui/card"

const sports = [
  { name: "Basketball", icon: "🏀", color: "from-orange-500 to-red-500" },
  { name: "Football", icon: "⚽", color: "from-green-500 to-blue-500" },
  { name: "Volleyball", icon: "🏐", color: "from-yellow-500 to-orange-500" },
  { name: "Track & Field", icon: "🏃", color: "from-purple-500 to-pink-500" },
  { name: "Tug of War", icon: "🪢", color: "from-cyan-500 to-blue-500" },
  { name: "Swimming", icon: "🏊", color: "from-blue-500 to-cyan-500" },
]

export default function SportsShowcase() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"])

  return (
    <section ref={containerRef} className="py-20 overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <motion.h2
          className="text-4xl md:text-6xl font-black text-center text-white mb-4 font-bebas"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Choose Your <span className="text-yellow-400">Arena</span>
        </motion.h2>
        <motion.p
          className="text-center text-gray-400 text-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Scroll to explore different sports
        </motion.p>
      </div>

      <motion.div className="flex gap-8 w-max" style={{ x }}>
        {[...sports, ...sports].map((sport, index) => (
          <motion.div key={index} className="flex-shrink-0" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Card className="w-80 h-96 bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 overflow-hidden group cursor-pointer">
              <div
                className={`h-full bg-gradient-to-br ${sport.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <motion.div className="text-8xl mb-4" whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                  {sport.icon}
                </motion.div>
                <h3 className="text-2xl font-bold mb-2">{sport.name}</h3>
                <div className="w-16 h-1 bg-yellow-400 rounded-full" />
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
