"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import "@/styles/font-bebas.css" // Ensure this is imported to use the font-bebas class

const schedule = [
  {
    date: "March 15",
    day: "Day 1",
    events: [
      { time: "09:00", event: "Opening Ceremony", venue: "Main Stadium" },
      { time: "10:30", event: "Basketball Qualifiers", venue: "Court A" },
      { time: "14:00", event: "Football Group Stage", venue: "Field 1" },
      { time: "16:30", event: "Volleyball Preliminaries", venue: "Court B" },
    ],
  },
  {
    date: "March 16",
    day: "Day 2",
    events: [
      { time: "09:00", event: "Track & Field Heats", venue: "Athletics Track" },
      { time: "11:00", event: "Swimming Preliminaries", venue: "Aquatic Center" },
      { time: "15:00", event: "Basketball Semi-Finals", venue: "Court A" },
      { time: "17:00", event: "Football Quarter-Finals", venue: "Field 1" },
    ],
  },
  {
    date: "March 17",
    day: "Day 3",
    events: [
      { time: "10:00", event: "Volleyball Semi-Finals", venue: "Court B" },
      { time: "12:00", event: "Tug of War Preliminaries", venue: "Field 2" },
      { time: "16:00", event: "Track & Field Finals", venue: "Athletics Track" },
      { time: "18:00", event: "Swimming Finals", venue: "Aquatic Center" },
    ],
  },
  {
    date: "March 18",
    day: "Finals",
    events: [
      { time: "14:00", event: "Basketball Finals", venue: "Main Stadium" },
      { time: "15:30", event: "Football Finals", venue: "Main Stadium" },
      { time: "17:00", event: "Volleyball Finals", venue: "Main Stadium" },
      { time: "19:00", event: "Closing Ceremony", venue: "Main Stadium" },
    ],
  },
]

export default function ScheduleTimeline() {
  const [selectedDay, setSelectedDay] = useState(0)

  return (
    <section className="py-20 bg-gradient-to-b from-gray-800/50 to-transparent">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-6xl font-black text-center text-white mb-16 font-bebas"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Event <span className="text-purple-400">Schedule</span>
        </motion.h2>

        {/* Day selector */}
        <div className="flex justify-center mb-12 overflow-x-auto">
          <div className="flex gap-4 p-2">
            {schedule.map((day, index) => (
              <Button
                key={index}
                onClick={() => setSelectedDay(index)}
                className={`px-6 py-3 rounded-full font-bold transition-all duration-300 ${
                  selectedDay === index
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                }`}
                data-cursor-hover
              >
                {day.day}
                <br />
                <span className="text-xs">{day.date}</span>
              </Button>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <motion.div
          className="max-w-4xl mx-auto"
          key={selectedDay}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-6">
            {schedule[selectedDay].events.map((event, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-6"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex-shrink-0 w-20 text-right">
                  <div className="text-yellow-400 font-bold text-lg">{event.time}</div>
                </div>
                <div className="flex-shrink-0">
                  <motion.div className="w-4 h-4 bg-purple-500 rounded-full" whileHover={{ scale: 1.5 }} />
                </div>
                <Card className="flex-1 bg-gray-800/60 border-gray-700">
                  <CardContent className="p-4">
                    <h3 className="text-white font-bold text-lg mb-1">{event.event}</h3>
                    <p className="text-gray-400">{event.venue}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
