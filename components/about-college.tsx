"use client"

import { useState } from "react"
// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react"
import { FreeMode, Navigation, Thumbs, EffectFade, Autoplay } from "swiper/modules"
import type { Swiper as SwiperCore } from "swiper"

// Import Swiper styles
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/navigation"
import "swiper/css/thumbs"
import "swiper/css/effect-fade"

// UI Components and Icons
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Users, Trophy, Calendar, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

// Your existing college data
const collegeData = [
  {
    id: 1,
    title: "Our Campus",
    image: "/images/bg1.png",
    description:
      "Sprawling across 200 acres of lush greenery, our campus is a perfect blend of modern architecture and natural beauty. Home to over 15,000 students from diverse backgrounds.",
  },
  {
    id: 2,
    title: "Sports Complex",
    image: "/images/bg2.png",
    description:
      "State-of-the-art sports facilities featuring Olympic-standard tracks, professional courts, and world-class equipment. The heart of athletic excellence and sporting achievements.",
  },
  {
    id: 3,
    title: "Basketball Arena",
    image: "/images/bg3.png",
    description:
      "Professional-grade basketball arena with seating for 3,000 spectators. Features wooden flooring, professional lighting, and electronic scoreboards for competitive matches.",
  },
  {
    id: 4,
    title: "Swimming Pool",
    image: "/images/bg4.png",
    description:
      "Olympic-size swimming pool with 8 lanes, diving boards, and spectator seating. Equipped with advanced filtration systems and temperature control for year-round training.",
  },
]

export default function AboutCollegeWithSwiper() {
  // State to hold the thumbs swiper instance
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null)

  return (
    <>
      {/* Main section with relative positioning to contain the background */}
      <section className="relative py-20 overflow-hidden">
        {/* START: Added Background Image Layer */}
        {/* NOTE: Replace '/images/campus-background.png' with your image path */}
        <div
          className="absolute inset-0 w-full h-full bg-[url('/images/campus-background.jpg')] bg-cover bg-center brightness-30"
          aria-hidden="true"
        />
        {/* END: Added Background Image Layer */}

        {/* START: Added Gradient Overlay */}
        {/* This sits on top of the blurred image to darken it, improving text legibility */}
        <div
          className="absolute inset-0 w-full h-full bg-gradient-to-b from-gray-900/40 to-gray-900/80"
          aria-hidden="true"
        />
        {/* END: Added Gradient Overlay */}

        {/* Content Wrapper: Positioned relatively to sit on top of the background layers */}
        <div className="relative z-10">
          <div className="container mx-auto px-4 mb-12">
            <motion.h2
              className="text-4xl md:text-6xl font-black text-center text-white mb-4 font-bebas"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              
              <span className="bg-gradient-to-r from-red-600 via-red-600 to-red-600 bg-clip-text text-transparent font-sans">
               Explore Our Facilities
              </span>
            </motion.h2>
            <motion.p
              className="text-center text-gray-300 text-lg max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Take a tour of our world-class campus and sports facilities. Click the thumbnails below to navigate.
            </motion.p>
          </div>

          <div className="container mx-auto px-4">
            {/* Main Swiper */}
            <Swiper
              loop={true}
              spaceBetween={10}
              navigation={true}
              effect={"fade"}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              thumbs={{
                swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
              }}
              modules={[FreeMode, Navigation, Thumbs, EffectFade, Autoplay]}
              className="h-[550px] rounded-2xl"
            >
              {collegeData.map(item => (
                <SwiperSlide key={item.id}>
                  <div className="relative group h-full w-full cursor-pointer">
                    {/* Background Image */}
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover rounded-2xl"
                    />
                    {/* Hover Overlay with Description */}
                    <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out rounded-2xl">
                      <h3 className="text-white font-black text-4xl mb-3 font-bebas">{item.title}</h3>
                      <p className="text-gray-200 text-md leading-relaxed max-w-2xl">{item.description}</p>
                      <Button className="mt-4 w-fit bg-cyan-500 hover:bg-cyan-600 text-white font-bold">
                        <MapPin className="mr-2 h-4 w-4" />
                        Take Virtual Tour
                      </Button>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              {/* Special "Call to Action" Slide */}
              <SwiperSlide>
                <div className="relative group h-full w-full cursor-pointer bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border-2 border-cyan-500/50 rounded-2xl flex items-center justify-center">
                  {/* <CardContent className="p-8 text-center">
                    <div className="text-6xl mb-4">🎓</div>
                    <h3 className="text-white font-black text-3xl mb-4 font-bebas">Join Our Legacy</h3>
                    <p className="text-gray-300 mb-6 max-w-md">
                      Be part of our incredible journey and experience world-class education with top-tier sports
                      facilities.
                    </p>
                    <div className="flex justify-center items-center gap-6 mb-6 text-sm font-semibold">
                      <div className="flex items-center gap-2 text-cyan-400">
                        <Users className="h-4 w-4" />
                        15,000+ Students
                      </div>
                      <div className="flex items-center gap-2 text-purple-400">
                        <Trophy className="h-4 w-4" />
                        500+ Championships
                      </div>
                      <div className="flex items-center gap-2 text-yellow-400">
                        <Calendar className="h-4 w-4" />
                        Since 1985
                      </div>
                    </div>
                    <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent> */}
                </div>
              </SwiperSlide>
            </Swiper>

            {/* Thumbs Swiper */}
            <Swiper
              onSwiper={setThumbsSwiper}
              loop={true}
              spaceBetween={10}
              slidesPerView={6}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mt-4 thumbs-swiper"
            >
              {collegeData.map(item => (
                <SwiperSlide key={item.id}>
                  <img
                    src={item.image}
                    alt={`${item.title} thumbnail`}
                    className="w-full h-24 object-cover rounded-lg cursor-pointer border-2 border-transparent"
                  />
                </SwiperSlide>
              ))}
              {/* Thumbnail for the CTA Slide */}
              {/* <SwiperSlide>
                <div className="w-full h-24 rounded-lg cursor-pointer border-2 border-transparent bg-gradient-to-br from-cyan-500/50 to-purple-500/50 flex items-center justify-center text-white font-bebas text-2xl">
                    JOIN
                </div>
             </SwiperSlide> */}
            </Swiper>
          </div>
        </div>
      </section>

      {/* Add global styles for swiper customization */}
      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: white;
          background-color: rgba(0, 0, 0, 0.4);
          border-radius: 50%;
          width: 44px;
          height: 44px;
          transition: background-color 0.2s;
        }
        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          background-color: rgba(0, 0, 0, 0.7);
        }
        .swiper-button-next::after,
        .swiper-button-prev::after {
          font-size: 18px;
          font-weight: 800;
        }
        .thumbs-swiper .swiper-slide {
          opacity: 0.5;
          transition: opacity 0.3s;
        }
        .thumbs-swiper .swiper-slide-thumb-active {
          opacity: 1;
        }
        .thumbs-swiper .swiper-slide-thumb-active img,
        .thumbs-swiper .swiper-slide-thumb-active div {
          border-color: #22d3ee; /* cyan-400 */
        }
      `}</style>
    </>
  )
}