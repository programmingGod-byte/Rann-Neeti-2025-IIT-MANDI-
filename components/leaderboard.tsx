"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy, Medal, Award } from "lucide-react"
import "@/styles/font-bebas.css" // Assuming Bebas Neue font is imported here

const leaderboardData = [
  { rank: 1, team: "Thunder Bolts", college: "MIT College", points: 2450, sport: "Basketball" },
  { rank: 2, team: "Fire Eagles", college: "Stanford University", points: 2380, sport: "Football" },
  { rank: 3, team: "Wave Riders", college: "UCLA", points: 2290, sport: "Swimming" },
  { rank: 4, team: "Speed Demons", college: "Harvard", points: 2150, sport: "Track & Field" },
  { rank: 5, team: "Net Warriors", college: "Yale", points: 2080, sport: "Volleyball" },
  { rank: 6, team: "Power Pullers", college: "Princeton", points: 1950, sport: "Tug of War" },
]

const liveUpdates = [
  "🏀 Thunder Bolts scored! +50 points",
  "⚽ Fire Eagles goal! +45 points",
  "🏐 Net Warriors spike! +30 points",
  "🏃 Speed Demons new record! +60 points",
]

export default function Leaderboard() {
  const [currentUpdate, setCurrentUpdate] = useState(0)
  const [animatedPoints, setAnimatedPoints] = useState(leaderboardData.map((team) => team.points))

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentUpdate((prev) => (prev + 1) % liveUpdates.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="h-6 w-6 text-yellow-400" />
      case 2:
        return <Medal className="h-6 w-6 text-gray-400" />
      case 3:
        return <Award className="h-6 w-6 text-orange-400" />
      default:
        return <span className="text-2xl font-bold text-gray-400">#{rank}</span>
    }
  }

  const getRankColor = (rank: number) => {
    switch (rank) {
      case 1:
        return "from-yellow-500 to-orange-500"
      case 2:
        return "from-gray-400 to-gray-600"
      case 3:
        return "from-orange-500 to-red-500"
      default:
        return "from-gray-600 to-gray-800"
    }
  }

  return (
    <section className="py-20 bg-gradient-to-b from-transparent to-gray-800/50">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-6xl font-black text-center text-white mb-16 font-bebas"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Live <span className="text-yellow-400">Leaderboard</span>
        </motion.h2>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Leaderboard */}
          <div className="lg:col-span-2">
            <Card className="bg-gray-800/80 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white text-2xl flex items-center gap-2">
                  <Trophy className="h-6 w-6 text-yellow-400" />
                  Current Standings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {leaderboardData.map((team, index) => (
                  <motion.div
                    key={team.rank}
                    className={`flex items-center gap-4 p-4 rounded-lg bg-gradient-to-r ${getRankColor(team.rank)} bg-opacity-20`}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex-shrink-0">{getRankIcon(team.rank)}</div>
                    <div className="flex-1">
                      <h3 className="text-white font-bold text-lg">{team.team}</h3>
                      <p className="text-gray-400 text-sm">{team.college}</p>
                      <p className="text-cyan-400 text-xs">{team.sport}</p>
                    </div>
                    <div className="text-right">
                      <motion.div
                        className="text-yellow-400 font-bold text-xl"
                        key={animatedPoints[index]}
                        initial={{ scale: 1.2 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        {animatedPoints[index].toLocaleString()}
                      </motion.div>
                      <p className="text-gray-400 text-sm">points</p>
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Live Updates */}
          <div className="space-y-6">
            <Card className="bg-gray-800/80 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white text-xl flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
                  Live Updates
                </CardTitle>
              </CardHeader>
              <CardContent>
                <motion.div
                  key={currentUpdate}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="text-white p-3 bg-gray-700/50 rounded-lg"
                >
                  {liveUpdates[currentUpdate]}
                </motion.div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/80 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white text-xl">Quick Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Total Teams</span>
                  <span className="text-yellow-400 font-bold">156</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Active Matches</span>
                  <span className="text-cyan-400 font-bold">8</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Completed Events</span>
                  <span className="text-purple-400 font-bold">23</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Prize Pool</span>
                  <span className="text-green-400 font-bold">₹2.5L</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
