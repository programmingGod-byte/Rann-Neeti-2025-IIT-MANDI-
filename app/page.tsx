"use client"

import { useEffect } from "react"
import CustomCursor from "@/components/custom-cursor"
import HeroSection from "@/components/hero-section"
import SportsShowcase from "@/components/sports-showcase"
import AboutCollege from "@/components/about-college"
import EventsLineup from "@/components/events-lineup"
import ScheduleTimeline from "@/components/schedule-timeline"
import RegistrationForm from "@/components/registration-form"
import MediaWall from "@/components/media-wall"
import Leaderboard from "@/components/leaderboard"
import TeamSection from "@/components/team-section"
import Footer from "@/components/footer"
import AboutFest from "@/components/about-fest"

export default function Home() {
  useEffect(() => {
    document.body.className = "home-page"
    return () => {
      document.body.className = ""
    }
  }, [])

  return (
    <main className="relative">
      <CustomCursor />
      <HeroSection />
      {/* <SportsShowcase /> */}
      <AboutCollege />
      <AboutFest/>
      <EventsLineup />
      {/* <ScheduleTimeline /> */}
      {/* <RegistrationForm /> */}
      <MediaWall />
      {/* <Leaderboard /> */}
      {/* <TeamSection /> */}
      <Footer />
    </main>
  )
}
