"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button" // Assuming shadcn/ui, replace with <button> if not used
import { ArrowRight, Building, Users, Award } from "lucide-react"
import React from "react"

/**
 * AboutSection Component
 * * A responsive component that displays title and description on the left and logo 
 * on the right with a background image.
 * It uses Framer Motion for subtle entrance animations.
 */
export default function AboutSection(): React.JSX.Element {
  return (
    // Set the container to relative to position the overlay
    <section className="relative py-16 md:py-24 text-white bg-[url('/images/fest-bg.jpg')] bg-cover bg-center bg-fixed">
      {/* Dark overlay with opacity */}
      <div className="absolute inset-0 bg-black opacity-75" aria-hidden="true" />
      
      {/* Set content container to relative to ensure it's on top of the overlay */}
      <div className="container relative mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          
          {/* Text Content Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <span className="text-sm font-bold uppercase text-red-500">
              {/* Who We Are */}
            </span>
            <h2 className="text-7xl md:text-8xl uppercase text-red-600 font-extrabold mt-2 mb-4 font-sans">
              Rann-Neeti | IIT Mandi

            </h2>
            <p className="text-gray-200 leading-relaxed mb-6 font-sans">
              Nestled in the serene landscapes of Khanahr, Himachal Pradesh, our company draws inspiration from the mountains' strength and tranquility. We are a team of innovators, creators, and problem-solvers dedicated to crafting exceptional digital experiences that resonate globally.
            </p>
          </motion.div>

          {/* Logo Column */}
          <motion.div
            className="relative flex justify-center items-center h-80 md:h-full"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
          >
            <img
              src="/images/logo.png"
              alt="Company Logo"
              className="max-w-full max-h-full object-contain"
              // Fallback for broken image links
              onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null; 
                target.src='https://placehold.co/400x300/333333/ffffff?text=Logo';
              }}
            />
          </motion.div>
        </div>

        {/* Key Statistics Section - Moved below the main content */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.4 }}
        >
          {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <div className="p-4 bg-gray-900 rounded-lg text-center transition-transform hover:scale-105">
              <Building className="mx-auto h-6 w-6 text-cyan-400 mb-2" />
              <p className="font-bold text-lg">Founded</p>
              <p className="text-sm text-gray-400">2018</p>
            </div>
            <div className="p-4 bg-gray-900 rounded-lg text-center transition-transform hover:scale-105">
              <Users className="mx-auto h-6 w-6 text-cyan-400 mb-2" />
              <p className="font-bold text-lg">150+ Team</p>
              <p className="text-sm text-gray-400">Global Talent</p>
            </div>
            <div className="p-4 bg-gray-900 rounded-lg text-center transition-transform hover:scale-105">
              <Award className="mx-auto h-6 w-6 text-cyan-400 mb-2" />
              <p className="font-bold text-lg">20+ Awards</p>
              <p className="text-sm text-gray-400">Industry Recognition</p>
            </div>
          </div> */}

          {/* Call to Action Button - Centered below stats */}
          {/* <div className="text-center">
            <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-black font-bold group">
              Learn More
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div> */}
        </motion.div>
      </div>
    </section>
  )
}