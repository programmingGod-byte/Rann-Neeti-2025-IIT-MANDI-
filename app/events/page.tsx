"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Calendar,
  MapPin,
  Users,
  Trophy,
  Clock,
  Search,
  Filter,
  ArrowLeft,
  Star,
  Zap,
  Target,
  Award,
} from "lucide-react"
import Link from "next/link"

const events = [
  {
    id: 1,
    name: "Basketball Championship",
    date: "March 15, 2025",
    time: "10:00 AM",
    location: "Main Sports Arena",
    participants: 128,
    maxParticipants: 128,
    prize: "₹50,000",
    category: "Team Sports",
    difficulty: "Advanced",
    image: "/placeholder.svg?height=400&width=600&text=Basketball+Championship+Arena",
    description:
      "The ultimate basketball showdown featuring the best teams from across the region. Experience high-intensity matches with professional-level competition.",
    features: ["Professional Referees", "Live Streaming", "Team Registration", "Winner Certificates"],
    registrationFee: 500,
    status: "Open",
    trending: true,
  },
  {
    id: 2,
    name: "Swimming Relay",
    date: "March 16, 2025",
    time: "2:00 PM",
    location: "Aquatic Center",
    participants: 64,
    maxParticipants: 80,
    prize: "₹30,000",
    category: "Individual Sports",
    difficulty: "Intermediate",
    image: "/placeholder.svg?height=400&width=600&text=Swimming+Pool+Competition",
    description:
      "Dive into the ultimate swimming competition with multiple relay categories. Show your aquatic skills in this thrilling water sports event.",
    features: ["Multiple Categories", "Professional Timing", "Safety Measures", "Medal Ceremony"],
    registrationFee: 300,
    status: "Open",
    trending: false,
  },
  {
    id: 3,
    name: "Football Tournament",
    date: "March 17, 2025",
    time: "9:00 AM",
    location: "Football Ground",
    participants: 256,
    maxParticipants: 256,
    prize: "₹75,000",
    category: "Team Sports",
    difficulty: "Advanced",
    image: "/placeholder.svg?height=400&width=600&text=Football+Tournament+Stadium",
    description:
      "The biggest football tournament of the year! Teams from all over compete for glory in this action-packed championship.",
    features: ["Professional Ground", "Live Commentary", "Team Kits", "Trophy Ceremony"],
    registrationFee: 800,
    status: "Filling Fast",
    trending: true,
  },
  {
    id: 4,
    name: "Tennis Singles",
    date: "March 18, 2025",
    time: "11:00 AM",
    location: "Tennis Courts",
    participants: 32,
    maxParticipants: 64,
    prize: "₹25,000",
    category: "Individual Sports",
    difficulty: "Intermediate",
    image: "/placeholder.svg?height=400&width=600&text=Tennis+Court+Singles+Match",
    description:
      "Individual tennis championship featuring singles matches. Perfect for players looking to showcase their individual skills and technique.",
    features: ["Professional Courts", "Umpire Services", "Equipment Provided", "Rankings System"],
    registrationFee: 400,
    status: "Open",
    trending: false,
  },
  {
    id: 5,
    name: "Cricket Championship",
    date: "March 19, 2025",
    time: "8:00 AM",
    location: "Cricket Stadium",
    participants: 176,
    maxParticipants: 200,
    prize: "₹1,00,000",
    category: "Team Sports",
    difficulty: "Advanced",
    image: "/placeholder.svg?height=400&width=600&text=Cricket+Stadium+Championship",
    description:
      "The premier cricket championship with teams competing in T20 format. Experience the thrill of cricket at its finest level.",
    features: ["T20 Format", "Professional Umpires", "Live Scoring", "Man of the Match Awards"],
    registrationFee: 1000,
    status: "Filling Fast",
    trending: true,
  },
  {
    id: 6,
    name: "Badminton Doubles",
    date: "March 20, 2025",
    time: "1:00 PM",
    location: "Indoor Sports Complex",
    participants: 48,
    maxParticipants: 64,
    prize: "₹20,000",
    category: "Team Sports",
    difficulty: "Beginner",
    image: "/placeholder.svg?height=400&width=600&text=Badminton+Court+Doubles",
    description:
      "Doubles badminton tournament perfect for beginners and intermediate players. Team up and compete in this fast-paced indoor sport.",
    features: ["Indoor Courts", "Equipment Available", "Coaching Tips", "Participation Certificates"],
    registrationFee: 200,
    status: "Open",
    trending: false,
  },
]

const categories = ["All", "Team Sports", "Individual Sports"]
const difficulties = ["All", "Beginner", "Intermediate", "Advanced"]

export default function EventsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedDifficulty, setSelectedDifficulty] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    document.body.className = "events-page"
    return () => {
      document.body.className = ""
    }
  }, [])

  const filteredEvents = events.filter((event) => {
    const matchesCategory = selectedCategory === "All" || event.category === selectedCategory
    const matchesDifficulty = selectedDifficulty === "All" || event.difficulty === selectedDifficulty
    const matchesSearch = event.name.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesDifficulty && matchesSearch
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Open":
        return "bg-green-500"
      case "Filling Fast":
        return "bg-orange-500"
      case "Full":
        return "bg-red-500"
      default:
        return "bg-gray-500"
    }
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "text-green-400"
      case "Intermediate":
        return "text-yellow-400"
      case "Advanced":
        return "text-red-400"
      default:
        return "text-gray-400"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-cyan-900/20">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-black/80 backdrop-blur-xl border-b border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between mb-6">
            <Link href="/">
              <Button variant="ghost" className="text-gray-300 hover:text-white">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to IGNITE
              </Button>
            </Link>
            <motion.h1
              className="text-4xl font-black text-white font-bebas bg-gradient-to-r from-yellow-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              EVENTS
            </motion.h1>
            <div className="w-32" /> {/* Spacer */}
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                placeholder="Search events..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-cyan-400"
              />
            </div>

            <div className="flex gap-4 items-center">
              <div className="flex items-center gap-2">
                <Filter className="h-5 w-5 text-yellow-400" />
                <span className="text-white font-semibold">Filters:</span>
              </div>

              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-gray-800/50 border border-gray-600 text-white rounded-lg px-4 py-2 focus:border-cyan-400"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>

              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="bg-gray-800/50 border border-gray-600 text-white rounded-lg px-4 py-2 focus:border-cyan-400"
              >
                {difficulties.map((difficulty) => (
                  <option key={difficulty} value={difficulty}>
                    {difficulty}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Events List */}
      <div className="container mx-auto px-4 py-8">
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {filteredEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="bg-black/40 border-gray-700/50 overflow-hidden backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300">
                <div className="flex flex-col lg:flex-row">
                  {/* Event Image */}
                  <div className="lg:w-2/5 relative">
                    <motion.img
                      src={event.image}
                      alt={event.name}
                      className="w-full h-64 lg:h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />

                    {/* Overlay badges */}
                    <div className="absolute top-4 left-4 flex flex-col gap-2">
                      {event.trending && (
                        <Badge className="bg-gradient-to-r from-red-500 to-pink-500 text-white font-bold">
                          🔥 TRENDING
                        </Badge>
                      )}
                      <Badge className={`${getStatusColor(event.status)} text-white font-bold`}>{event.status}</Badge>
                    </div>

                    <div className="absolute top-4 right-4">
                      <Badge className="bg-black/60 text-white backdrop-blur-sm">{event.category}</Badge>
                    </div>
                  </div>

                  {/* Event Details */}
                  <CardContent className="lg:w-3/5 p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h2 className="text-3xl font-black text-white mb-2 font-bebas group-hover:text-cyan-400 transition-colors">
                          {event.name}
                        </h2>
                        <div className="flex items-center gap-4 mb-3">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-cyan-400" />
                            <span className="text-gray-300">{event.date}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-yellow-400" />
                            <span className="text-gray-300">{event.time}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 mb-4">
                          <MapPin className="h-4 w-4 text-purple-400" />
                          <span className="text-gray-300">{event.location}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-black text-yellow-400 mb-1">{event.prize}</div>
                        <div className="text-sm text-gray-400">Prize Pool</div>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-6 leading-relaxed">{event.description}</p>

                    {/* Event Stats */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-2 mb-1">
                          <Users className="h-4 w-4 text-cyan-400" />
                          <span className="text-white font-bold">
                            {event.participants}/{event.maxParticipants}
                          </span>
                        </div>
                        <div className="text-xs text-gray-400">Participants</div>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-2 mb-1">
                          <Target className="h-4 w-4 text-purple-400" />
                          <span className={`font-bold ${getDifficultyColor(event.difficulty)}`}>
                            {event.difficulty}
                          </span>
                        </div>
                        <div className="text-xs text-gray-400">Difficulty</div>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-2 mb-1">
                          <Trophy className="h-4 w-4 text-yellow-400" />
                          <span className="text-white font-bold">₹{event.registrationFee}</span>
                        </div>
                        <div className="text-xs text-gray-400">Entry Fee</div>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-2 mb-1">
                          <Star className="h-4 w-4 text-orange-400" />
                          <span className="text-white font-bold">4.8</span>
                        </div>
                        <div className="text-xs text-gray-400">Rating</div>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                        <Zap className="h-4 w-4 text-cyan-400" />
                        Event Features
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                        {event.features.map((feature, i) => (
                          <div key={i} className="flex items-center gap-2 text-gray-300 text-sm">
                            <Award className="h-3 w-3 text-green-400" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4">
                      <motion.div className="flex-1" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Link href={`/register/${event.id}`}>
                          <Button
                            className={`w-full font-black text-lg py-6 shadow-lg ${
                              event.status === "Full"
                                ? "bg-gray-600 cursor-not-allowed"
                                : event.status === "Filling Fast"
                                  ? "bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white"
                                  : "bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white"
                            }`}
                            disabled={event.status === "Full"}
                          >
                            {event.status === "Full" ? "EVENT FULL" : "REGISTER NOW 🚀"}
                          </Button>
                        </Link>
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                          variant="outline"
                          className="bg-gray-800/50 border-gray-600 text-white hover:bg-gray-700 px-6 py-6"
                        >
                          View Details
                        </Button>
                      </motion.div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {filteredEvents.length === 0 && (
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-2">No Events Found</h3>
            <p className="text-gray-400">Try adjusting your search criteria or filters</p>
          </motion.div>
        )}
      </div>
    </div>
  )
}
