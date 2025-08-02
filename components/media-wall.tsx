"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Heart, MessageCircle, Share } from "lucide-react"

const mediaItems = [
  { type: "image", src: "/placeholder.svg?height=300&width=300", likes: 234, comments: 45 },
  { type: "video", src: "/placeholder.svg?height=400&width=300", likes: 567, comments: 89 },
  { type: "image", src: "/placeholder.svg?height=250&width=300", likes: 123, comments: 23 },
  { type: "image", src: "/placeholder.svg?height=350&width=300", likes: 345, comments: 67 },
  { type: "video", src: "/placeholder.svg?height=300&width=300", likes: 456, comments: 78 },
  { type: "image", src: "/placeholder.svg?height=400&width=300", likes: 789, comments: 123 },
  { type: "image", src: "/placeholder.svg?height=280&width=300", likes: 234, comments: 34 },
  { type: "video", src: "/placeholder.svg?height=320&width=300", likes: 345, comments: 56 },
  { type: "image", src: "/placeholder.svg?height=360&width=300", likes: 567, comments: 89 },
]

export default function MediaWall() {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)

  return (
    <section className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-b from-gray-800/50 to-transparent">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-6xl font-black text-center text-white mb-16 font-sans"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Media <span className="text-red-400">Wall</span>
        </motion.h2>

        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {mediaItems.map((item, index) => (
            <motion.div
              key={index}
              className="break-inside-avoid"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onHoverStart={() => setHoveredItem(index)}
              onHoverEnd={() => setHoveredItem(null)}
            >
              <Card className="bg-gray-800/80 border-gray-700 overflow-hidden group cursor-pointer">
                <div className="relative">
                  <img
                    src={item.src || "/placeholder.svg"}
                    alt={`Media ${index + 1}`}
                    className="w-full h-auto object-cover"
                  />
                  {item.type === "video" && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm"
                        whileHover={{ scale: 1.1 }}
                      >
                        <div className="w-0 h-0 border-l-8 border-l-white border-t-4 border-t-transparent border-b-4 border-b-transparent ml-1" />
                      </motion.div>
                    </div>
                  )}

                  {/* Hover overlay */}
                  <motion.div
                    className="absolute inset-0 bg-black/50 flex items-end p-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredItem === index ? 1 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-center gap-4 text-white">
                      <motion.button
                        className="flex items-center gap-1"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Heart className="h-5 w-5" />
                        <span>{item.likes}</span>
                      </motion.button>
                      <motion.button
                        className="flex items-center gap-1"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <MessageCircle className="h-5 w-5" />
                        <span>{item.comments}</span>
                      </motion.button>
                      <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                        <Share className="h-5 w-5" />
                      </motion.button>
                    </div>
                  </motion.div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}