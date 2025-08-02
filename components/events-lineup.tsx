import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, Trophy } from 'lucide-react';

const events = [
  {
    sport: "Basketball",
    date: "March 15",
    teams: "16 Teams",
    prize: "₹50,000",
    image: "/images/basketball.png",
    gradient: "from-red-800 to-red-800",
    description: "Fast-paced action on the court with 16 competitive teams battling for supremacy.",
  },
  {
    sport: "Football",
    date: "March 16",
    teams: "12 Teams",
    prize: "₹75,000",
    image: "https://images.unsplash.com/photo-1553778263-73a83bab9b0c?q=80&w=2071&auto=format&fit=crop",
    gradient: "from-red-800 to-red-800",
    description: "The beautiful game with 12 elite teams competing for the championship title.",
  },
  {
    sport: "Volleyball",
    date: "March 17",
    teams: "8 Teams",
    prize: "₹30,000",
    image: "https://images.unsplash.com/photo-1593341642345-56f59b951aa4?q=80&w=1931&auto=format&fit=crop",
    gradient: "from-red-800 to-red-800",
    description: "High-energy volleyball matches with 8 skilled teams serving up excitement.",
  },
  {
    sport: "Track & Field",
    date: "March 18",
    teams: "Individual",
    prize: "₹40,000",
    image: "/images/running.png ",
    gradient: "from-red-800 to-red-800",
    description: "Individual athletic excellence across multiple track and field disciplines.",
  },
  {
    sport: "Swimming",
    date: "March 19",
    teams: "Individual",
    prize: "₹35,000",
    image: "https://images.unsplash.com/photo-1562799301-41743e455086?q=80&w=1925&auto=format&fit=crop",
    gradient: "from-red-800 to-red-800",
    description: "Dive into competition with individual swimming events across various strokes.",
  },
  {
    sport: "Tug of War",
    date: "March 20",
    teams: "10 Teams",
    prize: "₹25,000",
    image: "https://images.unsplash.com/photo-1622979215984-b2586a11762d?q=80&w=2070&auto=format&fit=crop",
    gradient: "from-red-800 to-red-800",
    description: "Ultimate team strength challenge with 10 teams pulling for victory.",
  },
];

export default function EventsLineup() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#1a0000] to-black">
      <div className="container mx-auto px-4 py-20">
        <motion.h2
          className="text-5xl md:text-7xl font-black text-center text-white mb-20 bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Event Lineup
        </motion.h2>

        <div className="space-y-12">
          {events.map((event, index) => (
            <motion.div
              key={event.sport}
              className="relative"
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.2,
                type: "spring",
                stiffness: 100 
              }}
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Main Card */}
              <motion.div
                className="relative bg-gray-900/60  rounded-3xl overflow-hidden group hover:border-red-500/50 transition-all duration-500"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex flex-col lg:flex-row items-center">
                  {/* Left Side - Sport Image */}
                  <div className="lg:w-1/2 p-8 lg:p-12 flex items-center justify-center">
                    <motion.div
                      className="relative"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="relative w-48 h-48 lg:w-64 lg:h-64 bg-gray-800/80 rounded-full border border-gray-600/50 overflow-hidden shadow-2xl">
                        <img
                          src={event.image}
                          alt={`${event.sport} event`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </motion.div>
                  </div>

                  {/* Right Side - Content */}
                  <div className="lg:w-1/2 p-8 lg:p-12 space-y-6">
                    <motion.h3
                      className={`text-3xl lg:text-4xl font-bold bg-gradient-to-r ${event.gradient} bg-clip-text text-transparent font-sans`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      {event.sport}
                    </motion.h3>

                    <motion.p
                      className="text-gray-300 text-lg leading-relaxed"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      {event.description}
                    </motion.p>

                    {/* Event Details */}
                    <motion.div
                      className="grid grid-cols-1 sm:grid-cols-3 gap-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      <div className="flex items-center gap-3 bg-gray-700/50 rounded-xl p-3">
                        <Calendar className="h-5 w-5 text-yellow-400" />
                        <div>
                          <p className="text-xs text-gray-400">Date</p>
                          <p className="text-white font-semibold">{event.date}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3 bg-gray-700/50 rounded-xl p-3">
                        <Users className="h-5 w-5 text-cyan-400" />
                        <div>
                          <p className="text-xs text-gray-400">Teams</p>
                          <p className="text-white font-semibold">{event.teams}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3 bg-gray-700/50 rounded-xl p-3">
                        <Trophy className="h-5 w-5 text-purple-400" />
                        <div>
                          <p className="text-xs text-gray-400">Prize</p>
                          <p className="text-white font-semibold">{event.prize}</p>
                        </div>
                      </div>
                    </motion.div>

                    {/* Register Button */}
                    <motion.button
                      className={`w-full lg:w-auto px-8 py-4 bg-gradient-to-r ${event.gradient} text-white font-bold text-lg rounded-xl transition-all duration-300 group-hover:scale-105`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Register Now
                      <motion.span
                        className="inline-block ml-2"
                        initial={{ x: 0 }}
                        whileHover={{ x: 5 }}
                      >
                        →
                      </motion.span>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p className="text-gray-400 text-lg mb-6">
            {/* Don't miss out on the biggest sports festival of the year! */}
          </p>
          {/* <motion.button
            className="px-12 py-4 bg-gradient-to-r from-red-500 to-red-700 text-white font-bold text-xl rounded-full transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            View All Events
          </motion.button> */}
        </motion.div>
      </div>
    </div>
  );
}