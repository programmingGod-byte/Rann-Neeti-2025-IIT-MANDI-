"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Instagram, Twitter, Linkedin, Mail } from "lucide-react"

const teamMembers = [
  {
    name: "Alex Rodriguez",
    role: "Event Director",
    image: "/placeholder.svg?height=200&width=200",
    bio: "Sports enthusiast with 5+ years of event management experience 🏆",
    social: { instagram: "@alex_sports", twitter: "@alexrod", linkedin: "alexrodriguez" },
  },
  {
    name: "Sarah Chen",
    role: "Marketing Lead",
    image: "/placeholder.svg?height=200&width=200",
    bio: "Creative marketer who loves bringing sports communities together 🎨",
    social: { instagram: "@sarah_creates", twitter: "@sarahchen", linkedin: "sarahchen" },
  },
  {
    name: "Mike Johnson",
    role: "Technical Director",
    image: "/placeholder.svg?height=200&width=200",
    bio: "Tech wizard ensuring smooth operations for all events ⚡",
    social: { instagram: "@mike_tech", twitter: "@mikejohnson", linkedin: "mikejohnson" },
  },
  {
    name: "Emma Davis",
    role: "Operations Manager",
    image: "/placeholder.svg?height=200&width=200",
    bio: "Detail-oriented organizer making sure everything runs perfectly 📋",
    social: { instagram: "@emma_organizes", twitter: "@emmadavis", linkedin: "emmadavis" },
  },
  {
    name: "David Kim",
    role: "Sports Coordinator",
    image: "/placeholder.svg?height=200&width=200",
    bio: "Former athlete turned coordinator, passionate about fair play 🥇",
    social: { instagram: "@david_sports", twitter: "@davidkim", linkedin: "davidkim" },
  },
  {
    name: "Lisa Wang",
    role: "Media Manager",
    image: "/placeholder.svg?height=200&width=200",
    bio: "Storyteller capturing the best moments of IGNITE 2025 📸",
    social: { instagram: "@lisa_captures", twitter: "@lisawang", linkedin: "lisawang" },
  },
]

export default function TeamSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-800/50 to-transparent">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-6xl font-black text-center text-white mb-16 font-bebas"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Meet the <span className="text-purple-400">Team</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <Card className="bg-gray-800/80 border-gray-700 overflow-hidden group h-full">
                <CardContent className="p-6 text-center">
                  <motion.div className="relative mb-6" whileHover={{ scale: 1.05 }}>
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-purple-500/50"
                    />
                    <motion.div
                      className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/20 to-cyan-500/20"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>

                  <h3 className="text-white font-bold text-xl mb-2">{member.name}</h3>
                  <p className="text-purple-400 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-400 text-sm mb-6">{member.bio}</p>

                  <div className="flex justify-center gap-3">
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-pink-400 hover:text-pink-300 hover:bg-pink-400/20"
                      data-cursor-hover
                    >
                      <Instagram className="h-4 w-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-cyan-400 hover:text-cyan-300 hover:bg-cyan-400/20"
                      data-cursor-hover
                    >
                      <Twitter className="h-4 w-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-blue-400 hover:text-blue-300 hover:bg-blue-400/20"
                      data-cursor-hover
                    >
                      <Linkedin className="h-4 w-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-yellow-400 hover:text-yellow-300 hover:bg-yellow-400/20"
                      data-cursor-hover
                    >
                      <Mail className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
